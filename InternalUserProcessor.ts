import { AuthenticationProcessor } from "./AuthenticationProcessor";
import { AuthProvider, InternalAuthProvider } from "./Providers";

export class InternalUserProcessor extends AuthenticationProcessor {

  constructor(nextProcessor: AuthenticationProcessor | null) {
    super(nextProcessor);
  }

  public isAuthorized = (authProvider: AuthProvider): boolean => {
    if (authProvider instanceof InternalAuthProvider) {
      // Validation logic
      return true;
    } else if (this.nextProcessor != null) {
      return this.nextProcessor.isAuthorized(authProvider);
    }
    
    return false;
  }
}