import { OperationApiResponseCodes } from "../enums/OperationApiResponseCodes";

export interface ApiResponseType<T> {
  status: OperationApiResponseCodes;
  data?: T;
}