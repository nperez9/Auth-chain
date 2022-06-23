import { AuthenticationProcessor } from "./AuthenticationProcessor";
import { AuthProvider, ZeroAuthProvider } from "./Providers";

export class ZeroAuthProcessor extends AuthenticationProcessor {

  public constructor(nextProcessor: AuthenticationProcessor) {
    super(nextProcessor);
  }

  public isAuthorized = (authProvider: AuthProvider): boolean => {
    if (authProvider instanceof ZeroAuthProvider) {
      // Validation logic
      return true;
    } else if (this.nextProcessor != null) {
      return this.nextProcessor.isAuthorized(authProvider);
    }
    
    return false;
  }
}