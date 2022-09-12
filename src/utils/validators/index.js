"use strict";
exports.__esModule = true;
exports._max_length_validator = void 0;
function _max_length_validator(value, max_length) {
    if (value.length > max_length) {
        throw new Error("[webezy.commons.v1.Validators.MaxLength] Validators Exception\n- ".concat(value, " is greater then ").concat(max_length));
    }
}
exports._max_length_validator = _max_length_validator;
