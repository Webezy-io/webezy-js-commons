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
                logger.debug(`[${target.name}][${propertyName}] Entering`);
                logger.debug(args)
                const now = Date.now();
                const result = originalMethod.apply(this, args);

                const exitLog = () => {
                    logger.debug(`[${target.name}][${propertyName}] Exiting ${Date.now() - now}ms`);
                };

                // work around to support async functions.
                if (typeof result === "object" && typeof result.then === "function") {
                    const promise = result.then(exitLog);

                    // we defer responsibility to the caller of the method to handle the error.
                    // but we need to catch the error otherwise we will get an unhandled error.
                    // notice we return the original result not the promise with the logging call.
                    if (typeof promise.catch === "function") {
                        promise.catch((e: any) => e);
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