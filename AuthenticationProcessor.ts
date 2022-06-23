import { AuthProvider } from './Providers';

//Base processor class
export class AuthenticationProcessor {
  public nextProcessor: AuthenticationProcessor | null;
  
  constructor(nextProcessor) {
    this.nextProcessor = nextProcessor;
  }
  
  public isAuthorized: (authProvider: AuthProvider) => boolean;
}