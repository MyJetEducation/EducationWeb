import { User } from '../domain/user';

export interface AuthenticationService {
  auth(email: string, password: string): Promise<User>;
}