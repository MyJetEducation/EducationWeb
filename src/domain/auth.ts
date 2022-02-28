export interface UserState {
  token: string | null,
  refreshToken: string | null,
  isLoading: boolean,
  data: null | {token: string, refreshToken: string},
  error: null | any
}