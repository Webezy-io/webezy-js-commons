declare function _max_length_validator(value: string | any[], max_length: number): void;
declare function _email_validator(value: string): void;
declare function _max_validator(value: number, max: number): void;
declare function _min_validator(value: number, min: number): void;
declare function _regex_validator(value: string, regex: string): void;
export { _max_length_validator, _email_validator, _max_validator, _min_validator, _regex_validator };
