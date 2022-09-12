import { utils } from './index';

const logger = utils.loggers.winston.default

@utils.loggers.decorator.Loggable(logger)
export class test {

    public hello(string:string) {
        return string
    }

}


let t = new test()

t.hello("hello")