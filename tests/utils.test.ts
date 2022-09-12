import { utils } from '../dist/index';

describe('testing utils', () => {
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
});
