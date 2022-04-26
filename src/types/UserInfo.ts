import { ApplicationTypeEnum } from '../enums/ApplicationTypeEnum';

export interface UserSessionInfoResponse {
  emailVerified: boolean;
  phoneVerified: boolean;
  twoFactorAuthentication: boolean;
  tokenLifetimeRemaining: string;
  twoFactorAuthenticationEnabled: boolean;
  ipCountry: string;
}

export interface UserProfileType {
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  country: string;
}

export interface RecoveryPasswordType {
  hash: string;
  password: string;
  confirmPassword?: string;
}

export interface UserAuthEmailSend {
  hash: string;
}
export interface EmailConfirmationDTO {
  token: string;
  refreshToken: string;
}
export interface UserAuthenticate {
  email: string;
  password: string;
  captcha?: string;
  publicKeyPem?: string;
  application?: ApplicationTypeEnum;
  deviceUid?: string;
}
export interface UserAuthenticateDTO {
  token: string;
  refreshToken: string;
}

export interface UserForgotPassword {
  email: string;
}

export interface UserRegistration {
  email: string;
  password: string;
  captcha?: string;
  phoneCode?: string;
  phoneBody?: string;
  phoneIso?: string;
  publicKeyPem?: string;
  application?: ApplicationTypeEnum;
  deviceUid?: string;
  referralCode?: string;
  marketingEmailsAllowed?: boolean;
}
