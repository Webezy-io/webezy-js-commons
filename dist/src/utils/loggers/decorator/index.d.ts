import winston from "winston";
export declare function Loggable(logger?: winston.Logger): (target: Function) => void;
