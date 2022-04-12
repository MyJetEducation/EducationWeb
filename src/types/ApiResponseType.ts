import { OperationAuthApiResponseCodes } from './../enums/OperationAuthApiResponseCodes';
import { OperationApiResponseCodes } from "../enums/OperationApiResponseCodes";

export interface ApiResponseType<T> {
  status: OperationApiResponseCodes;
  data: T;
}

export interface ApiAuthResponseType<T> {
  result: OperationAuthApiResponseCodes;
  data: T;
}