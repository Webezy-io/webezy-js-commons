import { utils } from './index';

const logger = utils.loggers.winston.default

@utils.loggers.decorator.Loggable(logger)
export class test {

    public async hello(string:string) {
        throw new Error("error");
    }

}


let t = new test()

t.hello("hello").then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})