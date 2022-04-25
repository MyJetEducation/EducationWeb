const validationInputTexts = {
  EMAIL: 'Email is not a valid email address',
  REPEAT_PASSWORD: 'Repeat password here',
  REPEAT_PASSWORD_MATCH: 'Passwords must match',
  REQUIRED_FIELD: 'Required any value',
  REQUIRED_FIELD_EMAIL: 'Email must not be empty',
  REQUIRED_FIELD_PASSWORD: 'Password must not be empty',
  PASSWORD_MIN_CHARACTERS: 'Password must be between 8 and 31 characters.',
  PASSWORD_MAX_CHARACTERS: 'Password must be between 8 and 31 characters.',
  PASSWORD_MATCH: 'Min one number and one letter',
  TEXT_MIN_CHARACTERS: 'Min 2 characters',
  INVALID_USER_DATA: 'Invalid user name or password',
};

Object.freeze(validationInputTexts);
export default validationInputTexts;
