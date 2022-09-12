"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const index_1 = require("./index");
const logger = index_1.utils.loggers.winston.default;
let test = class test {
    hello(string) {
        return string;
    }
};
test = __decorate([
    index_1.utils.loggers.decorator.Loggable(logger)
], test);
exports.test = test;
let t = new test();
t.hello("hello");
//# sourceMappingURL=node.js.map