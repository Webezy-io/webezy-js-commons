"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loggable = void 0;
const defaultLogger = __importStar(require("../winston"));
function Loggable(logger = defaultLogger.default) {
    return (target) => {
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
            descriptor.value = function (...args) {
                logger.debug(`[${target.name}][${propertyName}] Entering`);
                logger.debug(args);
                const now = Date.now();
                const result = originalMethod.apply(this, args);
                const exitLog = () => {
                    logger.debug(`[${target.name}][${propertyName}] Exiting ${Date.now() - now}ms`);
                };
                if (typeof result === "object" && typeof result.then === "function") {
                    const promise = result.then(exitLog);
                    if (typeof promise.catch === "function") {
                        promise.catch((e) => e);
                    }
                }
                else {
                    exitLog();
                }
                return result;
            };
            Object.defineProperty(target.prototype, propertyName, descriptor);
        }
    };
}
exports.Loggable = Loggable;
//# sourceMappingURL=index.js.map