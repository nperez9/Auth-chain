import { AuthenticationProcessor } from "./AuthenticationProcessor";
import { AuthProvider, SSOAuthProvider } from "./Providers";

export class SSOAuthProcessor extends AuthenticationProcessor {

  public constructor(nextProcessor: AuthenticationProcessor) {
    super(nextProcessor);
  }

  public isAuthorized = (authProvider: AuthProvider): boolean => {
    if (authProvider instanceof SSOAuthProvider) {
      // Validation logic
      return true;
    } else if (this.nextProcessor != null) {
      return this.nextProcessor.isAuthorized(authProvider);
    }
    
    return false;
  }
}