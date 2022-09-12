function _max_length_validator(value:string | any[],max_length:number) {

    if (value.length > max_length) {
        throw new Error(`\x1b[31m[webezy.commons.v1.Validators.MaxLength] Validators Exception\n- ${value} is greater then ${max_length}\x1b[0m`);
    }

}

function _email_validator(value:string) {
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let serchfind = regexp.test(value);

    if (serchfind === false) {
        throw new Error(`\x1b[31m[webezy.commons.v1.Validators.Email] Validators Exception\n- ${value} is not a valid email\x1b[0m`);
    }

}

function _max_validator(value:number, max:number) {

    if (value > max) {
        throw new Error(`\x1b[31m[webezy.commons.v1.Validators.Max] Validators Exception\n- ${value} is greater then ${max}\x1b[0m`);
    }

}

function _min_validator(value:number, min:number) {

    if (value < min) {
        throw new Error(`\x1b[31m[webezy.commons.v1.Validators.Min] Validators Exception\n- ${value} is lower then ${min}\x1b[0m`);
    }

}
export {
    _max_length_validator,
    _email_validator,
    _max_validator,
    _min_validator
}