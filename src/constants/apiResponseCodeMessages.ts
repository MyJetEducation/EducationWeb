import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';

const apiResponseCodeMessages = {
  [OperationApiResponseCodes.Ok]: "Success"
};

Object.freeze(apiResponseCodeMessages);
export default apiResponseCodeMessages;
