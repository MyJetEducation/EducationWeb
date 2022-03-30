
export interface EmailConfirmationDTO {
  token: string;
  refreshToken: string;
}

export interface UserAuthenticateDTO {
  token: string;
  refreshToken: string;
}

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