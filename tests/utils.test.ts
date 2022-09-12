import { utils } from '../dist/index';

describe('testing validators errors', () => {
  test('min validator should throw error [webezy.commons.v1.Validators.Min]', () => {
    let value = 10;
    let min = 11;
    const error_msg = `\x1b[31m[webezy.commons.v1.Validators.Min] Validators Exception\n- ${value} is lower then ${min}\x1b[0m`;
    try {
      utils.validators._min_validator(value,min)
      expect(true).toBe(false);
    } catch (error:any) {
      expect(error.message).toBe(error_msg);
    }
  });

  test('max validator should throw error [webezy.commons.v1.Validators.Max]', () => {
    let value = 11;
    let max = 10;
    const error_msg = `\x1b[31m[webezy.commons.v1.Validators.Max] Validators Exception\n- ${value} is greater then ${max}\x1b[0m`
    try {
      utils.validators._max_validator(value,max)
      expect(true).toBe(false);
    } catch (error:any) {
      expect(error.message).toBe(error_msg);
    }
  });


  test('max length validator should throw error [webezy.commons.v1.Validators.MaxLength]', () => {
    let value = 'some_string';
    let max = 10;
    const error_msg = `\x1b[31m[webezy.commons.v1.Validators.MaxLength] Validators Exception\n- ${value} is greater then ${max}\x1b[0m`
    try {
      utils.validators._max_length_validator(value,max)
      expect(true).toBe(false);
    } catch (error:any) {
      expect(error.message).toBe(error_msg);
    }
  });

  test('email validator should throw error [webezy.commons.v1.Validators.Email]', () => {
    let value = 'some_string';
    const error_msg = `\x1b[31m[webezy.commons.v1.Validators.Email] Validators Exception\n- ${value} is not a valid email\x1b[0m`
    try {
      utils.validators._email_validator(value)
      expect(true).toBe(false);
    } catch (error:any) {
      expect(error.message).toBe(error_msg);
    }
  });

  test('regex validator should throw error [webezy.commons.v1.Validators.RegEx]', () => {
    let value = 'wrong_prefix';
    let regex = '^right_'
    const error_msg = `\x1b[31m[webezy.commons.v1.Validators.RegEx] Validators Exception\n- ${value} is not following the RegEx value ${regex}\x1b[0m`
    try {
      utils.validators._regex_validator(value,regex)
      expect(true).toBe(false);
    } catch (error:any) {
      expect(error.message).toBe(error_msg);
    }
  });
});


describe('testing validators passes', () => {
  test('min validator should pass without any error', () => {
    let value = 11;
    let min = 10;
    try {
      
      utils.validators._min_validator(value,min)
      expect(true).toBe(true);
    } catch (error:any) {
      expect(false).toBe(true);
    }
  });

  test('max validator hould pass without any error', () => {
    let value = 9;
    let max = 10;
    try {
      utils.validators._max_validator(value,max)
      expect(true).toBe(true);
    } catch (error:any) {
      expect(false).toBe(true);
    }
  });


  test('max length validator hould pass without any error', () => {
    let value = 'string';
    let max = 10;
    try {
      utils.validators._max_length_validator(value,max)
      expect(true).toBe(true);
    } catch (error:any) {
      expect(false).toBe(true);
    }
  });

  test('email validator hould pass without any error', () => {
    let value = 'email@example.com';
    try {
      utils.validators._email_validator(value)
      expect(true).toBe(true);
    } catch (error:any) {
      expect(false).toBe(true);
    }
  });

  test('regex validator hould pass without any error', () => {
    let value = 'right_prefix';
    let regex = '^right_'
    try {
      utils.validators._regex_validator(value,regex)
      expect(true).toBe(true);
    } catch (error:any) {
      expect(false).toBe(true);
    }
  });
});