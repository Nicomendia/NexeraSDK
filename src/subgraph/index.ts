import { GraphQLClient } from "graphql-request";

import { getSubgraphUrl } from "@nexeraprotocol/nexera-service-registry";
import { NEXERA_CHAIN_VALUES, type ChainId, type Environment } from "./schema";

import { getSdk as getCompliancePropertyManager } from "./graphql/compliance-property-manager/generated/generated";
import { getSdk as getIdentityDiamondSdk } from "./graphql/identity-diamond/generated/generated";
import { getSdk as getMetaPropertyRegistrySdk } from "./graphql/meta-property-registry/generated/generated";
import { getSdk as getMnftSdk } from "./graphql/mnft/generated/generated";
import { getSdk as getWrapperSdk } from "./graphql/wrapper/generated/generated";

export { OrderDirection } from "./graphql/wrapper/generated/generated";

export {
  BalancesDocument,
  HistoryDocument,
  SubgraphMetadataDocument,
} from "./graphql/wrapper/generated/generated";

export class NexeraSubgraphClient {
  public readonly wrapperClient;
  public readonly mnftClient;
  public readonly metaPropertyRegistryClient;
  public readonly compliancePropertyManagerClient;
  public readonly identityDiamond;

  constructor(props: { env?: Environment; chainId?: ChainId }) {
    const chain = props.chainId ? NEXERA_CHAIN_VALUES[props.chainId] : 80001;
    const subgraphUrls = getSubgraphUrl(
      props.env || "dev",
      chain,
    );
    const wrapperClient = new GraphQLClient(subgraphUrls.wrapperClient);
    const mnftClient = new GraphQLClient(subgraphUrls.mnftClient);
    const metaPropertyRegistryClient = new GraphQLClient(
      subgraphUrls.metaPropertyRegistry,
    );
    const compliancePropertyManagerClient = new GraphQLClient(
      subgraphUrls.compliancePropertyManager,
    );
    const identityDiamondClient = new GraphQLClient(
      subgraphUrls.identityDiamond,
    );
    this.wrapperClient = getWrapperSdk(wrapperClient);
    this.mnftClient = getMnftSdk(mnftClient);
    this.metaPropertyRegistryClient = getMetaPropertyRegistrySdk(
      metaPropertyRegistryClient,
    );
    this.compliancePropertyManagerClient = getCompliancePropertyManager(
      compliancePropertyManagerClient,
    );
    this.identityDiamond = getIdentityDiamondSdk(identityDiamondClient);
  }
}

export type {
  PropertyManager_Filter,
  Category_Filter,
  Property_Filter,
  Nft_Filter,
} from "./graphql/meta-property-registry/generated/generated";

export type {
  SmartWalletDeployed_Filter,
  RuleAdded_Filter,
  RuleAssigned_Filter,
  RuleDeleted_Filter,
  Rule_Filter,
} from "./graphql/identity-diamond/generated/generated";

export const getNexeraSubgraphClient = (config: {
  env: Environment;
  chainId: ChainId;
}) => {
  const chain = config.chainId ? NEXERA_CHAIN_VALUES[config.chainId] : 80001;
  const subgraphUrls = getSubgraphUrl(config.env, chain);
  const wrapperGQL = new GraphQLClient(subgraphUrls.wrapperClient);
  const mnftGQL = new GraphQLClient(subgraphUrls.mnftClient);
  const metaPropertyRegistryGQL = new GraphQLClient(
    subgraphUrls.metaPropertyRegistry,
  );
  const compliancePropertyManagerGQL = new GraphQLClient(
    subgraphUrls.compliancePropertyManager,
  );
  const identityDiamondGQL = new GraphQLClient(subgraphUrls.identityDiamond);
  const wrapperClient = getWrapperSdk(wrapperGQL);
  const mnftClient = getMnftSdk(mnftGQL);
  const metaPropertyRegistryClient = getMetaPropertyRegistrySdk(
    metaPropertyRegistryGQL,
  );
  const compliancePropertyManagerClient = getCompliancePropertyManager(
    compliancePropertyManagerGQL,
  );
  const identityDiamond = getIdentityDiamondSdk(identityDiamondGQL);

  return {
    wrapperClient,
    mnftClient,
    metaPropertyRegistryClient,
    compliancePropertyManagerClient,
    identityDiamond,
  };
};
