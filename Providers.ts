// Base provider
export class AuthProvider {
  public requestId: string;
}

export class ZeroAuthProvider extends AuthProvider {
  public token: string;
}

export class InternalAuthProvider extends AuthProvider {
  public username: string;
  public password: string;
}

export class ExternalAuthProvider extends AuthProvider {
  public username: string;
  public password: string;
}

export class SSOAuthProvider extends AuthProvider {
  public email: string;
  public token: string;
}

export type AuthProviders = AuthProvider | ZeroAuthProvider | InternalAuthProvider | ExternalAuthProvider | SSOAuthProvider;