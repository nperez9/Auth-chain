import { AuthenticationProcessor } from "./AuthenticationProcessor";
import { AuthProvider, ExternalAuthProvider } from "./Providers";

export class ExternalUserProcessor extends AuthenticationProcessor {

  public constructor(nextProcessor: AuthenticationProcessor | null) {
    super(nextProcessor);
  }

  public isAuthorized = (authProvider: AuthProvider): boolean => {
    if (authProvider instanceof ExternalAuthProvider) {
      // Validation logic
      return true;
    } else if (this.nextProcessor != null) {
      return this.nextProcessor.isAuthorized(authProvider);
    }
  
    return false;
  }
}