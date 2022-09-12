"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.custom_logger = void 0;
const winston_1 = __importDefault(require("winston"));
const options = {
    transports: [
        new winston_1.default.transports.Console({
            level: process.env["NODE_ENV"] === "production" ? "error" : "debug"
        }),
        new winston_1.default.transports.File({ filename: "debug.log", level: "debug" })
    ]
};
const logger = winston_1.default.createLogger(options);
exports.default = logger;
function custom_logger(options) {
    return winston_1.default.createLogger(options);
}
exports.custom_logger = custom_logger;
//# sourceMappingURL=index.js.map