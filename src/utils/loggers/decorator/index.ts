import winston from "winston";
import * as defaultLogger from '../winston';
export function Loggable(logger:winston.Logger = defaultLogger.default) {
    return (target: Function) => {
        for (const propertyName of Object.getOwnPropertyNames(target.prototype)) {

            const descriptor = Object.getOwnPropertyDescriptor(target.prototype, propertyName);

            if (!descriptor) {
                continue;
            }

            const originalMethod = descriptor.value;

            const isMethod = originalMethod instanceof Function;

            if (!isMethod) {
                continue;
            }

            descriptor.value = function(...args: any[]) {
                logger.info(`[${target.name}][${propertyName}] Entering`);
                logger.info(`[${target.name}][${propertyName}] Request params: ${JSON.stringify(args[0])}`)

                if(args.length > 1){
                    logger.info(`[${target.name}][${propertyName}] Request metadata: ${JSON.stringify(args[1])}`)
                }

                const now = Date.now();
                const result = originalMethod.apply(this, args);

                const exitLog = () => {
                    logger.info(`[${target.name}][${propertyName}] Exiting ${Date.now() - now}ms`);
                };

                const errorLog = (e:any) => {
                    logger.error(`[${target.name}][${propertyName}] Error ${e}`);
                };

                // work around to support async functions.
                if (typeof result === "object" && typeof result.then === "function") {
                    const promise = result.then(exitLog);

                    // we defer responsibility to the caller of the method to handle the error.
                    // but we need to catch the error otherwise we will get an unhandled error.
                    // notice we return the original result not the promise with the logging call.
                    if (typeof promise.catch === "function") {
                        promise.catch((e: any) => {
                            errorLog(e)
                            return e
                        });
                    }
                } else {
                    exitLog();
                }

                return result;
            };

            Object.defineProperty(target.prototype, propertyName, descriptor);
        }
    };
}