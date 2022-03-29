import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';

export interface UserAuthEmailSend {
  hash: string;
}
export interface UserAuthenticate {
  userName: string;
  password: string;
}

export interface UserRegistration {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserRegistrationDTO {
  status: OperationApiResponseCodes
  data: {}
}
