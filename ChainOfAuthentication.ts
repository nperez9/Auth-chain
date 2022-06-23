import { ExternalUserProcessor } from "./ExternalUserProcessor";
import { InternalUserProcessor } from "./InternalUserProcessor";
import { ZeroAuthProcessor } from "./ZeroAuthProcessor";
import { AuthProviders } from "./Providers";
import { SSOAuthProcessor } from "./SSOAuthProcessor";

export class ChainOfAuthentication {

  public Validate = (params: AuthProviders): boolean => {
    const internalProcessor = new InternalUserProcessor(null);
    const externalProcessor = new ExternalUserProcessor(internalProcessor);
    const SSOProcessor = new SSOAuthProcessor(externalProcessor);
    const zeroAuthProcessor = new ZeroAuthProcessor(SSOProcessor);

    return zeroAuthProcessor.isAuthorized(params);
  }
}