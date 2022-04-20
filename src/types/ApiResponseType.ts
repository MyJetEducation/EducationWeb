import { OperationAuthApiResponseCodes } from './../enums/OperationAuthApiResponseCodes';
import { OperationApiResponseCodes } from "../enums/OperationApiResponseCodes";
import { OperationApiAuthValidResponseCodes } from '../enums/OperationApiAuthValidResponseCodes';

export interface ApiResponseType<T> {
  status: OperationApiResponseCodes;
  data: T;
}

export interface ApiAuthResponseType<T> {
  result: OperationAuthApiResponseCodes;
  data: T;
}

export interface ApiAuthValidResponseType<T> {
  result: OperationApiAuthValidResponseCodes;
  data: T;
}

