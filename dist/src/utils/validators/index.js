"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._regex_validator = exports._min_validator = exports._max_validator = exports._email_validator = exports._max_length_validator = void 0;
function _max_length_validator(value, max_length) {
    if (value.length > max_length) {
        throw new Error(`\x1b[31m[webezy.commons.v1.Validators.MaxLength] Validators Exception\n- ${value} is greater then ${max_length}\x1b[0m`);
    }
}
exports._max_length_validator = _max_length_validator;
function _email_validator(value) {
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let serchfind = regexp.test(value);
    if (serchfind === false) {
        throw new Error(`\x1b[31m[webezy.commons.v1.Validators.Email] Validators Exception\n- ${value} is not a valid email\x1b[0m`);
    }
}
exports._email_validator = _email_validator;
function _max_validator(value, max) {
    if (value > max) {
        throw new Error(`\x1b[31m[webezy.commons.v1.Validators.Max] Validators Exception\n- ${value} is greater then ${max}\x1b[0m`);
    }
}
exports._max_validator = _max_validator;
function _min_validator(value, min) {
    if (value < min) {
        throw new Error(`\x1b[31m[webezy.commons.v1.Validators.Min] Validators Exception\n- ${value} is lower then ${min}\x1b[0m`);
    }
}
exports._min_validator = _min_validator;
function _regex_validator(value, regex) {
    const re = new RegExp(regex);
    if (!re.test(value)) {
        throw new Error(`\x1b[31m[webezy.commons.v1.Validators.RegEx] Validators Exception\n- ${value} is not following the RegEx value ${regex}\x1b[0m`);
    }
}
exports._regex_validator = _regex_validator;
//# sourceMappingURL=index.js.map