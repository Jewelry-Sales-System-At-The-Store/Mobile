export interface SignInForm {
  email: string;
  password: string;
  confirmPassword: string;
}
export type SignUpForm = Pick<SignInForm, 'email' | 'password'>;

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInRespone {
  token: string
  expiration: string
}
