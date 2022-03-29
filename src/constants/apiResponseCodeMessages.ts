import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';

const apiResponseCodeMessages = {
  [OperationApiResponseCodes.Ok]: "Success",
  [OperationApiResponseCodes.UserAlreadyExists]: "User already exist",
  [OperationApiResponseCodes.NotValidEmail]: "Ivalid email",
  [OperationApiResponseCodes.NotValidPassword]: "Invalid password"
};

Object.freeze(apiResponseCodeMessages);
export default apiResponseCodeMessages;
