import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type Approval = {
  __typename?: 'Approval';
  actualData?: Maybe<Scalars['Bytes']>;
  approvalUsedEntity?: Maybe<Array<ApprovalUsedEntity>>;
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  deleted: Scalars['Boolean'];
  id: Scalars['ID'];
  initialData?: Maybe<Scalars['Bytes']>;
  mnft: Scalars['BigInt'];
  selector?: Maybe<Scalars['Bytes']>;
  smartWallet: SmartWalletEntity;
  target?: Maybe<Scalars['Bytes']>;
  tokenSelector: Scalars['Bytes'];
  tokenTarget: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};


export type ApprovalApprovalUsedEntityArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalUsedEntity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApprovalUsedEntity_Filter>;
};

export type ApprovalDeleted = {
  __typename?: 'ApprovalDeleted';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mnft: Scalars['BigInt'];
  selector: Scalars['Bytes'];
  target: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalDeleted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalDeleted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalDeleted_Filter>>>;
  selector?: InputMaybe<Scalars['Bytes']>;
  selector_contains?: InputMaybe<Scalars['Bytes']>;
  selector_gt?: InputMaybe<Scalars['Bytes']>;
  selector_gte?: InputMaybe<Scalars['Bytes']>;
  selector_in?: InputMaybe<Array<Scalars['Bytes']>>;
  selector_lt?: InputMaybe<Scalars['Bytes']>;
  selector_lte?: InputMaybe<Scalars['Bytes']>;
  selector_not?: InputMaybe<Scalars['Bytes']>;
  selector_not_contains?: InputMaybe<Scalars['Bytes']>;
  selector_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ApprovalDeleted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mnft = 'mnft',
  Selector = 'selector',
  Target = 'target',
  TransactionHash = 'transactionHash'
}

export type ApprovalSet = {
  __typename?: 'ApprovalSet';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mnft: Scalars['BigInt'];
  selector: Scalars['Bytes'];
  target: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalSet_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalSet_Filter>>>;
  selector?: InputMaybe<Scalars['Bytes']>;
  selector_contains?: InputMaybe<Scalars['Bytes']>;
  selector_gt?: InputMaybe<Scalars['Bytes']>;
  selector_gte?: InputMaybe<Scalars['Bytes']>;
  selector_in?: InputMaybe<Array<Scalars['Bytes']>>;
  selector_lt?: InputMaybe<Scalars['Bytes']>;
  selector_lte?: InputMaybe<Scalars['Bytes']>;
  selector_not?: InputMaybe<Scalars['Bytes']>;
  selector_not_contains?: InputMaybe<Scalars['Bytes']>;
  selector_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ApprovalSet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mnft = 'mnft',
  Selector = 'selector',
  Target = 'target',
  TransactionHash = 'transactionHash'
}

export type ApprovalUsed = {
  __typename?: 'ApprovalUsed';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mnft: Scalars['BigInt'];
  selector: Scalars['Bytes'];
  target: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalUsedEntity = {
  __typename?: 'ApprovalUsedEntity';
  approval: Approval;
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalUsedEntity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalUsedEntity_Filter>>>;
  approval?: InputMaybe<Scalars['String']>;
  approval_?: InputMaybe<Approval_Filter>;
  approval_contains?: InputMaybe<Scalars['String']>;
  approval_contains_nocase?: InputMaybe<Scalars['String']>;
  approval_ends_with?: InputMaybe<Scalars['String']>;
  approval_ends_with_nocase?: InputMaybe<Scalars['String']>;
  approval_gt?: InputMaybe<Scalars['String']>;
  approval_gte?: InputMaybe<Scalars['String']>;
  approval_in?: InputMaybe<Array<Scalars['String']>>;
  approval_lt?: InputMaybe<Scalars['String']>;
  approval_lte?: InputMaybe<Scalars['String']>;
  approval_not?: InputMaybe<Scalars['String']>;
  approval_not_contains?: InputMaybe<Scalars['String']>;
  approval_not_contains_nocase?: InputMaybe<Scalars['String']>;
  approval_not_ends_with?: InputMaybe<Scalars['String']>;
  approval_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  approval_not_in?: InputMaybe<Array<Scalars['String']>>;
  approval_not_starts_with?: InputMaybe<Scalars['String']>;
  approval_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  approval_starts_with?: InputMaybe<Scalars['String']>;
  approval_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalUsedEntity_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ApprovalUsedEntity_OrderBy {
  Approval = 'approval',
  ApprovalActualData = 'approval__actualData',
  ApprovalBlockNumber = 'approval__blockNumber',
  ApprovalBlockTimestamp = 'approval__blockTimestamp',
  ApprovalDeleted = 'approval__deleted',
  ApprovalId = 'approval__id',
  ApprovalInitialData = 'approval__initialData',
  ApprovalMnft = 'approval__mnft',
  ApprovalSelector = 'approval__selector',
  ApprovalTarget = 'approval__target',
  ApprovalTokenSelector = 'approval__tokenSelector',
  ApprovalTokenTarget = 'approval__tokenTarget',
  ApprovalTransactionHash = 'approval__transactionHash',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type ApprovalUsed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalUsed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalUsed_Filter>>>;
  selector?: InputMaybe<Scalars['Bytes']>;
  selector_contains?: InputMaybe<Scalars['Bytes']>;
  selector_gt?: InputMaybe<Scalars['Bytes']>;
  selector_gte?: InputMaybe<Scalars['Bytes']>;
  selector_in?: InputMaybe<Array<Scalars['Bytes']>>;
  selector_lt?: InputMaybe<Scalars['Bytes']>;
  selector_lte?: InputMaybe<Scalars['Bytes']>;
  selector_not?: InputMaybe<Scalars['Bytes']>;
  selector_not_contains?: InputMaybe<Scalars['Bytes']>;
  selector_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ApprovalUsed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mnft = 'mnft',
  Selector = 'selector',
  Target = 'target',
  TransactionHash = 'transactionHash'
}

export type Approval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actualData?: InputMaybe<Scalars['Bytes']>;
  actualData_contains?: InputMaybe<Scalars['Bytes']>;
  actualData_gt?: InputMaybe<Scalars['Bytes']>;
  actualData_gte?: InputMaybe<Scalars['Bytes']>;
  actualData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  actualData_lt?: InputMaybe<Scalars['Bytes']>;
  actualData_lte?: InputMaybe<Scalars['Bytes']>;
  actualData_not?: InputMaybe<Scalars['Bytes']>;
  actualData_not_contains?: InputMaybe<Scalars['Bytes']>;
  actualData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<Approval_Filter>>>;
  approvalUsedEntity_?: InputMaybe<ApprovalUsedEntity_Filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  deleted_in?: InputMaybe<Array<Scalars['Boolean']>>;
  deleted_not?: InputMaybe<Scalars['Boolean']>;
  deleted_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  initialData?: InputMaybe<Scalars['Bytes']>;
  initialData_contains?: InputMaybe<Scalars['Bytes']>;
  initialData_gt?: InputMaybe<Scalars['Bytes']>;
  initialData_gte?: InputMaybe<Scalars['Bytes']>;
  initialData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  initialData_lt?: InputMaybe<Scalars['Bytes']>;
  initialData_lte?: InputMaybe<Scalars['Bytes']>;
  initialData_not?: InputMaybe<Scalars['Bytes']>;
  initialData_not_contains?: InputMaybe<Scalars['Bytes']>;
  initialData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<Approval_Filter>>>;
  selector?: InputMaybe<Scalars['Bytes']>;
  selector_contains?: InputMaybe<Scalars['Bytes']>;
  selector_gt?: InputMaybe<Scalars['Bytes']>;
  selector_gte?: InputMaybe<Scalars['Bytes']>;
  selector_in?: InputMaybe<Array<Scalars['Bytes']>>;
  selector_lt?: InputMaybe<Scalars['Bytes']>;
  selector_lte?: InputMaybe<Scalars['Bytes']>;
  selector_not?: InputMaybe<Scalars['Bytes']>;
  selector_not_contains?: InputMaybe<Scalars['Bytes']>;
  selector_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  smartWallet?: InputMaybe<Scalars['String']>;
  smartWallet_?: InputMaybe<SmartWalletEntity_Filter>;
  smartWallet_contains?: InputMaybe<Scalars['String']>;
  smartWallet_contains_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_ends_with?: InputMaybe<Scalars['String']>;
  smartWallet_ends_with_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_gt?: InputMaybe<Scalars['String']>;
  smartWallet_gte?: InputMaybe<Scalars['String']>;
  smartWallet_in?: InputMaybe<Array<Scalars['String']>>;
  smartWallet_lt?: InputMaybe<Scalars['String']>;
  smartWallet_lte?: InputMaybe<Scalars['String']>;
  smartWallet_not?: InputMaybe<Scalars['String']>;
  smartWallet_not_contains?: InputMaybe<Scalars['String']>;
  smartWallet_not_contains_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_not_ends_with?: InputMaybe<Scalars['String']>;
  smartWallet_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_not_in?: InputMaybe<Array<Scalars['String']>>;
  smartWallet_not_starts_with?: InputMaybe<Scalars['String']>;
  smartWallet_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  smartWallet_starts_with?: InputMaybe<Scalars['String']>;
  smartWallet_starts_with_nocase?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenSelector?: InputMaybe<Scalars['Bytes']>;
  tokenSelector_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSelector_gt?: InputMaybe<Scalars['Bytes']>;
  tokenSelector_gte?: InputMaybe<Scalars['Bytes']>;
  tokenSelector_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenSelector_lt?: InputMaybe<Scalars['Bytes']>;
  tokenSelector_lte?: InputMaybe<Scalars['Bytes']>;
  tokenSelector_not?: InputMaybe<Scalars['Bytes']>;
  tokenSelector_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSelector_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenTarget?: InputMaybe<Scalars['Bytes']>;
  tokenTarget_contains?: InputMaybe<Scalars['Bytes']>;
  tokenTarget_gt?: InputMaybe<Scalars['Bytes']>;
  tokenTarget_gte?: InputMaybe<Scalars['Bytes']>;
  tokenTarget_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenTarget_lt?: InputMaybe<Scalars['Bytes']>;
  tokenTarget_lte?: InputMaybe<Scalars['Bytes']>;
  tokenTarget_not?: InputMaybe<Scalars['Bytes']>;
  tokenTarget_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenTarget_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Approval_OrderBy {
  ActualData = 'actualData',
  ApprovalUsedEntity = 'approvalUsedEntity',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Deleted = 'deleted',
  Id = 'id',
  InitialData = 'initialData',
  Mnft = 'mnft',
  Selector = 'selector',
  SmartWallet = 'smartWallet',
  SmartWalletBlockNumber = 'smartWallet__blockNumber',
  SmartWalletBlockTimestamp = 'smartWallet__blockTimestamp',
  SmartWalletEnabled = 'smartWallet__enabled',
  SmartWalletId = 'smartWallet__id',
  SmartWalletImplementation = 'smartWallet__implementation',
  SmartWalletMnft = 'smartWallet__mnft',
  SmartWalletTransactionHash = 'smartWallet__transactionHash',
  SmartWalletWallet = 'smartWallet__wallet',
  Target = 'target',
  TokenSelector = 'tokenSelector',
  TokenTarget = 'tokenTarget',
  TransactionHash = 'transactionHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type EtherReceived = {
  __typename?: 'EtherReceived';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  value: Scalars['BigInt'];
};

export type EtherReceived_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtherReceived_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<EtherReceived_Filter>>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum EtherReceived_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Sender = 'sender',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type Identity = {
  __typename?: 'Identity';
  id: Scalars['ID'];
  rules?: Maybe<Array<RuleIdentity>>;
  verifier: Scalars['Bytes'];
};


export type IdentityRulesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RuleIdentity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RuleIdentity_Filter>;
};

export type Identity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Identity_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<Identity_Filter>>>;
  rules_?: InputMaybe<RuleIdentity_Filter>;
  verifier?: InputMaybe<Scalars['Bytes']>;
  verifier_contains?: InputMaybe<Scalars['Bytes']>;
  verifier_gt?: InputMaybe<Scalars['Bytes']>;
  verifier_gte?: InputMaybe<Scalars['Bytes']>;
  verifier_in?: InputMaybe<Array<Scalars['Bytes']>>;
  verifier_lt?: InputMaybe<Scalars['Bytes']>;
  verifier_lte?: InputMaybe<Scalars['Bytes']>;
  verifier_not?: InputMaybe<Scalars['Bytes']>;
  verifier_not_contains?: InputMaybe<Scalars['Bytes']>;
  verifier_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Identity_OrderBy {
  Id = 'id',
  Rules = 'rules',
  Verifier = 'verifier'
}

export type Initialized = {
  __typename?: 'Initialized';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  version: Scalars['Int'];
};

export type Initialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Initialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type Operation = {
  __typename?: 'Operation';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  mnft: Scalars['BigInt'];
  operationHash: Scalars['String'];
  operationName: Scalars['String'];
  rule: Rule;
  transactionHash: Scalars['Bytes'];
};

export type Operation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Operation_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operationHash?: InputMaybe<Scalars['String']>;
  operationHash_contains?: InputMaybe<Scalars['String']>;
  operationHash_contains_nocase?: InputMaybe<Scalars['String']>;
  operationHash_ends_with?: InputMaybe<Scalars['String']>;
  operationHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  operationHash_gt?: InputMaybe<Scalars['String']>;
  operationHash_gte?: InputMaybe<Scalars['String']>;
  operationHash_in?: InputMaybe<Array<Scalars['String']>>;
  operationHash_lt?: InputMaybe<Scalars['String']>;
  operationHash_lte?: InputMaybe<Scalars['String']>;
  operationHash_not?: InputMaybe<Scalars['String']>;
  operationHash_not_contains?: InputMaybe<Scalars['String']>;
  operationHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  operationHash_not_ends_with?: InputMaybe<Scalars['String']>;
  operationHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  operationHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  operationHash_not_starts_with?: InputMaybe<Scalars['String']>;
  operationHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operationHash_starts_with?: InputMaybe<Scalars['String']>;
  operationHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operationName?: InputMaybe<Scalars['String']>;
  operationName_contains?: InputMaybe<Scalars['String']>;
  operationName_contains_nocase?: InputMaybe<Scalars['String']>;
  operationName_ends_with?: InputMaybe<Scalars['String']>;
  operationName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  operationName_gt?: InputMaybe<Scalars['String']>;
  operationName_gte?: InputMaybe<Scalars['String']>;
  operationName_in?: InputMaybe<Array<Scalars['String']>>;
  operationName_lt?: InputMaybe<Scalars['String']>;
  operationName_lte?: InputMaybe<Scalars['String']>;
  operationName_not?: InputMaybe<Scalars['String']>;
  operationName_not_contains?: InputMaybe<Scalars['String']>;
  operationName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  operationName_not_ends_with?: InputMaybe<Scalars['String']>;
  operationName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  operationName_not_in?: InputMaybe<Array<Scalars['String']>>;
  operationName_not_starts_with?: InputMaybe<Scalars['String']>;
  operationName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operationName_starts_with?: InputMaybe<Scalars['String']>;
  operationName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Operation_Filter>>>;
  rule?: InputMaybe<Scalars['String']>;
  rule_?: InputMaybe<Rule_Filter>;
  rule_contains?: InputMaybe<Scalars['String']>;
  rule_contains_nocase?: InputMaybe<Scalars['String']>;
  rule_ends_with?: InputMaybe<Scalars['String']>;
  rule_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rule_gt?: InputMaybe<Scalars['String']>;
  rule_gte?: InputMaybe<Scalars['String']>;
  rule_in?: InputMaybe<Array<Scalars['String']>>;
  rule_lt?: InputMaybe<Scalars['String']>;
  rule_lte?: InputMaybe<Scalars['String']>;
  rule_not?: InputMaybe<Scalars['String']>;
  rule_not_contains?: InputMaybe<Scalars['String']>;
  rule_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rule_not_ends_with?: InputMaybe<Scalars['String']>;
  rule_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rule_not_in?: InputMaybe<Array<Scalars['String']>>;
  rule_not_starts_with?: InputMaybe<Scalars['String']>;
  rule_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rule_starts_with?: InputMaybe<Scalars['String']>;
  rule_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Operation_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mnft = 'mnft',
  OperationHash = 'operationHash',
  OperationName = 'operationName',
  Rule = 'rule',
  RuleBlockNumber = 'rule__blockNumber',
  RuleBlockTimestamp = 'rule__blockTimestamp',
  RuleDeleted = 'rule__deleted',
  RuleId = 'rule__id',
  RuleMnft = 'rule__mnft',
  RuleRequired = 'rule__required',
  RuleRuleNum = 'rule__ruleNum',
  RuleTransactionHash = 'rule__transactionHash',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  approval?: Maybe<Approval>;
  approvalDeleted?: Maybe<ApprovalDeleted>;
  approvalDeleteds: Array<ApprovalDeleted>;
  approvalSet?: Maybe<ApprovalSet>;
  approvalSets: Array<ApprovalSet>;
  approvalUsed?: Maybe<ApprovalUsed>;
  approvalUsedEntities: Array<ApprovalUsedEntity>;
  approvalUsedEntity?: Maybe<ApprovalUsedEntity>;
  approvalUseds: Array<ApprovalUsed>;
  approvals: Array<Approval>;
  etherReceived?: Maybe<EtherReceived>;
  etherReceiveds: Array<EtherReceived>;
  identities: Array<Identity>;
  identity?: Maybe<Identity>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  operation?: Maybe<Operation>;
  operations: Array<Operation>;
  rule?: Maybe<Rule>;
  ruleAdded?: Maybe<RuleAdded>;
  ruleAddeds: Array<RuleAdded>;
  ruleAssigned?: Maybe<RuleAssigned>;
  ruleAssigneds: Array<RuleAssigned>;
  ruleDeleted?: Maybe<RuleDeleted>;
  ruleDeleteds: Array<RuleDeleted>;
  ruleIdentities: Array<RuleIdentity>;
  ruleIdentity?: Maybe<RuleIdentity>;
  rules: Array<Rule>;
  smartWalletDeployed?: Maybe<SmartWalletDeployed>;
  smartWalletDeployeds: Array<SmartWalletDeployed>;
  smartWalletDisabled?: Maybe<SmartWalletDisabled>;
  smartWalletDisableds: Array<SmartWalletDisabled>;
  smartWalletEnabled?: Maybe<SmartWalletEnabled>;
  smartWalletEnableds: Array<SmartWalletEnabled>;
  smartWalletEntities: Array<SmartWalletEntity>;
  smartWalletEntity?: Maybe<SmartWalletEntity>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalDeletedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalDeletedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalDeleted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalDeleted_Filter>;
};


export type QueryApprovalSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalSet_Filter>;
};


export type QueryApprovalUsedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalUsedEntitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalUsedEntity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalUsedEntity_Filter>;
};


export type QueryApprovalUsedEntityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalUsedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalUsed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalUsed_Filter>;
};


export type QueryApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};


export type QueryEtherReceivedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEtherReceivedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EtherReceived_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtherReceived_Filter>;
};


export type QueryIdentitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Identity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Identity_Filter>;
};


export type QueryIdentityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Initialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Initialized_Filter>;
};


export type QueryOperationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Operation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Operation_Filter>;
};


export type QueryRuleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRuleAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRuleAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RuleAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RuleAdded_Filter>;
};


export type QueryRuleAssignedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRuleAssignedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RuleAssigned_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RuleAssigned_Filter>;
};


export type QueryRuleDeletedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRuleDeletedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RuleDeleted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RuleDeleted_Filter>;
};


export type QueryRuleIdentitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RuleIdentity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RuleIdentity_Filter>;
};


export type QueryRuleIdentityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRulesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rule_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Rule_Filter>;
};


export type QuerySmartWalletDeployedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySmartWalletDeployedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWalletDeployed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SmartWalletDeployed_Filter>;
};


export type QuerySmartWalletDisabledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySmartWalletDisabledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWalletDisabled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SmartWalletDisabled_Filter>;
};


export type QuerySmartWalletEnabledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySmartWalletEnabledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWalletEnabled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SmartWalletEnabled_Filter>;
};


export type QuerySmartWalletEntitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWalletEntity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SmartWalletEntity_Filter>;
};


export type QuerySmartWalletEntityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Rule = {
  __typename?: 'Rule';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  deleted: Scalars['Boolean'];
  id: Scalars['ID'];
  identities?: Maybe<Array<RuleIdentity>>;
  mnft: Scalars['BigInt'];
  operations?: Maybe<Array<Operation>>;
  required: Scalars['Int'];
  ruleNum: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};


export type RuleIdentitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RuleIdentity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RuleIdentity_Filter>;
};


export type RuleOperationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Operation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Operation_Filter>;
};

export type RuleAdded = {
  __typename?: 'RuleAdded';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mnft: Scalars['BigInt'];
  ruleNum: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type RuleAdded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RuleAdded_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<RuleAdded_Filter>>>;
  ruleNum?: InputMaybe<Scalars['BigInt']>;
  ruleNum_gt?: InputMaybe<Scalars['BigInt']>;
  ruleNum_gte?: InputMaybe<Scalars['BigInt']>;
  ruleNum_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruleNum_lt?: InputMaybe<Scalars['BigInt']>;
  ruleNum_lte?: InputMaybe<Scalars['BigInt']>;
  ruleNum_not?: InputMaybe<Scalars['BigInt']>;
  ruleNum_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RuleAdded_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mnft = 'mnft',
  RuleNum = 'ruleNum',
  TransactionHash = 'transactionHash'
}

export type RuleAssigned = {
  __typename?: 'RuleAssigned';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mnft: Scalars['BigInt'];
  operation: Scalars['Bytes'];
  ruleNum: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type RuleAssigned_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RuleAssigned_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operation?: InputMaybe<Scalars['Bytes']>;
  operation_contains?: InputMaybe<Scalars['Bytes']>;
  operation_gt?: InputMaybe<Scalars['Bytes']>;
  operation_gte?: InputMaybe<Scalars['Bytes']>;
  operation_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operation_lt?: InputMaybe<Scalars['Bytes']>;
  operation_lte?: InputMaybe<Scalars['Bytes']>;
  operation_not?: InputMaybe<Scalars['Bytes']>;
  operation_not_contains?: InputMaybe<Scalars['Bytes']>;
  operation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<RuleAssigned_Filter>>>;
  ruleNum?: InputMaybe<Scalars['BigInt']>;
  ruleNum_gt?: InputMaybe<Scalars['BigInt']>;
  ruleNum_gte?: InputMaybe<Scalars['BigInt']>;
  ruleNum_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruleNum_lt?: InputMaybe<Scalars['BigInt']>;
  ruleNum_lte?: InputMaybe<Scalars['BigInt']>;
  ruleNum_not?: InputMaybe<Scalars['BigInt']>;
  ruleNum_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RuleAssigned_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mnft = 'mnft',
  Operation = 'operation',
  RuleNum = 'ruleNum',
  TransactionHash = 'transactionHash'
}

export type RuleDeleted = {
  __typename?: 'RuleDeleted';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mnft: Scalars['BigInt'];
  ruleNum: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type RuleDeleted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RuleDeleted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<RuleDeleted_Filter>>>;
  ruleNum?: InputMaybe<Scalars['BigInt']>;
  ruleNum_gt?: InputMaybe<Scalars['BigInt']>;
  ruleNum_gte?: InputMaybe<Scalars['BigInt']>;
  ruleNum_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruleNum_lt?: InputMaybe<Scalars['BigInt']>;
  ruleNum_lte?: InputMaybe<Scalars['BigInt']>;
  ruleNum_not?: InputMaybe<Scalars['BigInt']>;
  ruleNum_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RuleDeleted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mnft = 'mnft',
  RuleNum = 'ruleNum',
  TransactionHash = 'transactionHash'
}

export type RuleIdentity = {
  __typename?: 'RuleIdentity';
  id: Scalars['ID'];
  identity: Identity;
  rule: Rule;
};

export type RuleIdentity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RuleIdentity_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  identity?: InputMaybe<Scalars['String']>;
  identity_?: InputMaybe<Identity_Filter>;
  identity_contains?: InputMaybe<Scalars['String']>;
  identity_contains_nocase?: InputMaybe<Scalars['String']>;
  identity_ends_with?: InputMaybe<Scalars['String']>;
  identity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  identity_gt?: InputMaybe<Scalars['String']>;
  identity_gte?: InputMaybe<Scalars['String']>;
  identity_in?: InputMaybe<Array<Scalars['String']>>;
  identity_lt?: InputMaybe<Scalars['String']>;
  identity_lte?: InputMaybe<Scalars['String']>;
  identity_not?: InputMaybe<Scalars['String']>;
  identity_not_contains?: InputMaybe<Scalars['String']>;
  identity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  identity_not_ends_with?: InputMaybe<Scalars['String']>;
  identity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  identity_not_in?: InputMaybe<Array<Scalars['String']>>;
  identity_not_starts_with?: InputMaybe<Scalars['String']>;
  identity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  identity_starts_with?: InputMaybe<Scalars['String']>;
  identity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<RuleIdentity_Filter>>>;
  rule?: InputMaybe<Scalars['String']>;
  rule_?: InputMaybe<Rule_Filter>;
  rule_contains?: InputMaybe<Scalars['String']>;
  rule_contains_nocase?: InputMaybe<Scalars['String']>;
  rule_ends_with?: InputMaybe<Scalars['String']>;
  rule_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rule_gt?: InputMaybe<Scalars['String']>;
  rule_gte?: InputMaybe<Scalars['String']>;
  rule_in?: InputMaybe<Array<Scalars['String']>>;
  rule_lt?: InputMaybe<Scalars['String']>;
  rule_lte?: InputMaybe<Scalars['String']>;
  rule_not?: InputMaybe<Scalars['String']>;
  rule_not_contains?: InputMaybe<Scalars['String']>;
  rule_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rule_not_ends_with?: InputMaybe<Scalars['String']>;
  rule_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rule_not_in?: InputMaybe<Array<Scalars['String']>>;
  rule_not_starts_with?: InputMaybe<Scalars['String']>;
  rule_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rule_starts_with?: InputMaybe<Scalars['String']>;
  rule_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum RuleIdentity_OrderBy {
  Id = 'id',
  Identity = 'identity',
  IdentityId = 'identity__id',
  IdentityVerifier = 'identity__verifier',
  Rule = 'rule',
  RuleBlockNumber = 'rule__blockNumber',
  RuleBlockTimestamp = 'rule__blockTimestamp',
  RuleDeleted = 'rule__deleted',
  RuleId = 'rule__id',
  RuleMnft = 'rule__mnft',
  RuleRequired = 'rule__required',
  RuleRuleNum = 'rule__ruleNum',
  RuleTransactionHash = 'rule__transactionHash'
}

export type Rule_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Rule_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  deleted_in?: InputMaybe<Array<Scalars['Boolean']>>;
  deleted_not?: InputMaybe<Scalars['Boolean']>;
  deleted_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  identities_?: InputMaybe<RuleIdentity_Filter>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operations_?: InputMaybe<Operation_Filter>;
  or?: InputMaybe<Array<InputMaybe<Rule_Filter>>>;
  required?: InputMaybe<Scalars['Int']>;
  required_gt?: InputMaybe<Scalars['Int']>;
  required_gte?: InputMaybe<Scalars['Int']>;
  required_in?: InputMaybe<Array<Scalars['Int']>>;
  required_lt?: InputMaybe<Scalars['Int']>;
  required_lte?: InputMaybe<Scalars['Int']>;
  required_not?: InputMaybe<Scalars['Int']>;
  required_not_in?: InputMaybe<Array<Scalars['Int']>>;
  ruleNum?: InputMaybe<Scalars['BigInt']>;
  ruleNum_gt?: InputMaybe<Scalars['BigInt']>;
  ruleNum_gte?: InputMaybe<Scalars['BigInt']>;
  ruleNum_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruleNum_lt?: InputMaybe<Scalars['BigInt']>;
  ruleNum_lte?: InputMaybe<Scalars['BigInt']>;
  ruleNum_not?: InputMaybe<Scalars['BigInt']>;
  ruleNum_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Rule_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Deleted = 'deleted',
  Id = 'id',
  Identities = 'identities',
  Mnft = 'mnft',
  Operations = 'operations',
  Required = 'required',
  RuleNum = 'ruleNum',
  TransactionHash = 'transactionHash'
}

export type SmartWalletDeployed = {
  __typename?: 'SmartWalletDeployed';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  implementation: Scalars['Bytes'];
  mnft: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  wallet: Scalars['Bytes'];
};

export type SmartWalletDeployed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SmartWalletDeployed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementation?: InputMaybe<Scalars['Bytes']>;
  implementation_contains?: InputMaybe<Scalars['Bytes']>;
  implementation_gt?: InputMaybe<Scalars['Bytes']>;
  implementation_gte?: InputMaybe<Scalars['Bytes']>;
  implementation_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementation_lt?: InputMaybe<Scalars['Bytes']>;
  implementation_lte?: InputMaybe<Scalars['Bytes']>;
  implementation_not?: InputMaybe<Scalars['Bytes']>;
  implementation_not_contains?: InputMaybe<Scalars['Bytes']>;
  implementation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<SmartWalletDeployed_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  wallet?: InputMaybe<Scalars['Bytes']>;
  wallet_contains?: InputMaybe<Scalars['Bytes']>;
  wallet_gt?: InputMaybe<Scalars['Bytes']>;
  wallet_gte?: InputMaybe<Scalars['Bytes']>;
  wallet_in?: InputMaybe<Array<Scalars['Bytes']>>;
  wallet_lt?: InputMaybe<Scalars['Bytes']>;
  wallet_lte?: InputMaybe<Scalars['Bytes']>;
  wallet_not?: InputMaybe<Scalars['Bytes']>;
  wallet_not_contains?: InputMaybe<Scalars['Bytes']>;
  wallet_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SmartWalletDeployed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Implementation = 'implementation',
  Mnft = 'mnft',
  TransactionHash = 'transactionHash',
  Wallet = 'wallet'
}

export type SmartWalletDisabled = {
  __typename?: 'SmartWalletDisabled';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mnft: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  wallet: Scalars['Bytes'];
};

export type SmartWalletDisabled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SmartWalletDisabled_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<SmartWalletDisabled_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  wallet?: InputMaybe<Scalars['Bytes']>;
  wallet_contains?: InputMaybe<Scalars['Bytes']>;
  wallet_gt?: InputMaybe<Scalars['Bytes']>;
  wallet_gte?: InputMaybe<Scalars['Bytes']>;
  wallet_in?: InputMaybe<Array<Scalars['Bytes']>>;
  wallet_lt?: InputMaybe<Scalars['Bytes']>;
  wallet_lte?: InputMaybe<Scalars['Bytes']>;
  wallet_not?: InputMaybe<Scalars['Bytes']>;
  wallet_not_contains?: InputMaybe<Scalars['Bytes']>;
  wallet_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SmartWalletDisabled_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mnft = 'mnft',
  TransactionHash = 'transactionHash',
  Wallet = 'wallet'
}

export type SmartWalletEnabled = {
  __typename?: 'SmartWalletEnabled';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mnft: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  wallet: Scalars['Bytes'];
};

export type SmartWalletEnabled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SmartWalletEnabled_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<SmartWalletEnabled_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  wallet?: InputMaybe<Scalars['Bytes']>;
  wallet_contains?: InputMaybe<Scalars['Bytes']>;
  wallet_gt?: InputMaybe<Scalars['Bytes']>;
  wallet_gte?: InputMaybe<Scalars['Bytes']>;
  wallet_in?: InputMaybe<Array<Scalars['Bytes']>>;
  wallet_lt?: InputMaybe<Scalars['Bytes']>;
  wallet_lte?: InputMaybe<Scalars['Bytes']>;
  wallet_not?: InputMaybe<Scalars['Bytes']>;
  wallet_not_contains?: InputMaybe<Scalars['Bytes']>;
  wallet_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SmartWalletEnabled_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mnft = 'mnft',
  TransactionHash = 'transactionHash',
  Wallet = 'wallet'
}

export type SmartWalletEntity = {
  __typename?: 'SmartWalletEntity';
  approvals: Array<Approval>;
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  implementation: Scalars['Bytes'];
  mnft: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  wallet: Scalars['Bytes'];
};


export type SmartWalletEntityApprovalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Approval_Filter>;
};

export type SmartWalletEntity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SmartWalletEntity_Filter>>>;
  approvals_?: InputMaybe<Approval_Filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  enabled_not?: InputMaybe<Scalars['Boolean']>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  implementation?: InputMaybe<Scalars['Bytes']>;
  implementation_contains?: InputMaybe<Scalars['Bytes']>;
  implementation_gt?: InputMaybe<Scalars['Bytes']>;
  implementation_gte?: InputMaybe<Scalars['Bytes']>;
  implementation_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementation_lt?: InputMaybe<Scalars['Bytes']>;
  implementation_lte?: InputMaybe<Scalars['Bytes']>;
  implementation_not?: InputMaybe<Scalars['Bytes']>;
  implementation_not_contains?: InputMaybe<Scalars['Bytes']>;
  implementation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mnft?: InputMaybe<Scalars['BigInt']>;
  mnft_gt?: InputMaybe<Scalars['BigInt']>;
  mnft_gte?: InputMaybe<Scalars['BigInt']>;
  mnft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mnft_lt?: InputMaybe<Scalars['BigInt']>;
  mnft_lte?: InputMaybe<Scalars['BigInt']>;
  mnft_not?: InputMaybe<Scalars['BigInt']>;
  mnft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<SmartWalletEntity_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  wallet?: InputMaybe<Scalars['Bytes']>;
  wallet_contains?: InputMaybe<Scalars['Bytes']>;
  wallet_gt?: InputMaybe<Scalars['Bytes']>;
  wallet_gte?: InputMaybe<Scalars['Bytes']>;
  wallet_in?: InputMaybe<Array<Scalars['Bytes']>>;
  wallet_lt?: InputMaybe<Scalars['Bytes']>;
  wallet_lte?: InputMaybe<Scalars['Bytes']>;
  wallet_not?: InputMaybe<Scalars['Bytes']>;
  wallet_not_contains?: InputMaybe<Scalars['Bytes']>;
  wallet_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SmartWalletEntity_OrderBy {
  Approvals = 'approvals',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Enabled = 'enabled',
  Id = 'id',
  Implementation = 'implementation',
  Mnft = 'mnft',
  TransactionHash = 'transactionHash',
  Wallet = 'wallet'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  approval?: Maybe<Approval>;
  approvalDeleted?: Maybe<ApprovalDeleted>;
  approvalDeleteds: Array<ApprovalDeleted>;
  approvalSet?: Maybe<ApprovalSet>;
  approvalSets: Array<ApprovalSet>;
  approvalUsed?: Maybe<ApprovalUsed>;
  approvalUsedEntities: Array<ApprovalUsedEntity>;
  approvalUsedEntity?: Maybe<ApprovalUsedEntity>;
  approvalUseds: Array<ApprovalUsed>;
  approvals: Array<Approval>;
  etherReceived?: Maybe<EtherReceived>;
  etherReceiveds: Array<EtherReceived>;
  identities: Array<Identity>;
  identity?: Maybe<Identity>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  operation?: Maybe<Operation>;
  operations: Array<Operation>;
  rule?: Maybe<Rule>;
  ruleAdded?: Maybe<RuleAdded>;
  ruleAddeds: Array<RuleAdded>;
  ruleAssigned?: Maybe<RuleAssigned>;
  ruleAssigneds: Array<RuleAssigned>;
  ruleDeleted?: Maybe<RuleDeleted>;
  ruleDeleteds: Array<RuleDeleted>;
  ruleIdentities: Array<RuleIdentity>;
  ruleIdentity?: Maybe<RuleIdentity>;
  rules: Array<Rule>;
  smartWalletDeployed?: Maybe<SmartWalletDeployed>;
  smartWalletDeployeds: Array<SmartWalletDeployed>;
  smartWalletDisabled?: Maybe<SmartWalletDisabled>;
  smartWalletDisableds: Array<SmartWalletDisabled>;
  smartWalletEnabled?: Maybe<SmartWalletEnabled>;
  smartWalletEnableds: Array<SmartWalletEnabled>;
  smartWalletEntities: Array<SmartWalletEntity>;
  smartWalletEntity?: Maybe<SmartWalletEntity>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalDeletedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalDeletedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalDeleted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalDeleted_Filter>;
};


export type SubscriptionApprovalSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalSet_Filter>;
};


export type SubscriptionApprovalUsedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalUsedEntitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalUsedEntity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalUsedEntity_Filter>;
};


export type SubscriptionApprovalUsedEntityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalUsedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalUsed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalUsed_Filter>;
};


export type SubscriptionApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};


export type SubscriptionEtherReceivedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEtherReceivedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EtherReceived_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtherReceived_Filter>;
};


export type SubscriptionIdentitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Identity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Identity_Filter>;
};


export type SubscriptionIdentityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Initialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Initialized_Filter>;
};


export type SubscriptionOperationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOperationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Operation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Operation_Filter>;
};


export type SubscriptionRuleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRuleAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRuleAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RuleAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RuleAdded_Filter>;
};


export type SubscriptionRuleAssignedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRuleAssignedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RuleAssigned_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RuleAssigned_Filter>;
};


export type SubscriptionRuleDeletedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRuleDeletedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RuleDeleted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RuleDeleted_Filter>;
};


export type SubscriptionRuleIdentitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RuleIdentity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RuleIdentity_Filter>;
};


export type SubscriptionRuleIdentityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRulesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rule_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Rule_Filter>;
};


export type SubscriptionSmartWalletDeployedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSmartWalletDeployedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWalletDeployed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SmartWalletDeployed_Filter>;
};


export type SubscriptionSmartWalletDisabledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSmartWalletDisabledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWalletDisabled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SmartWalletDisabled_Filter>;
};


export type SubscriptionSmartWalletEnabledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSmartWalletEnabledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWalletEnabled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SmartWalletEnabled_Filter>;
};


export type SubscriptionSmartWalletEntitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SmartWalletEntity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SmartWalletEntity_Filter>;
};


export type SubscriptionSmartWalletEntityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type SmartWalletsQueryVariables = Exact<{
  filter?: InputMaybe<SmartWalletEntity_Filter>;
}>;


export type SmartWalletsQuery = { __typename?: 'Query', smartWalletEntities: Array<{ __typename?: 'SmartWalletEntity', id: string, mnft: any, wallet: any, enabled: boolean, implementation: any, blockTimestamp: any, blockNumber: any, transactionHash: any, approvals: Array<{ __typename?: 'Approval', id: string, mnft: any, blockTimestamp: any, blockNumber: any, transactionHash: any }> }> };

export type RuleHistoryQueryVariables = Exact<{
  ruleAddedFilter?: InputMaybe<RuleAdded_Filter>;
  ruleAssignedFilter?: InputMaybe<RuleAssigned_Filter>;
  ruleDeletedFilter?: InputMaybe<RuleDeleted_Filter>;
}>;


export type RuleHistoryQuery = { __typename?: 'Query', ruleAddeds: Array<{ __typename?: 'RuleAdded', id: any, mnft: any, ruleNum: any, blockNumber: any, blockTimestamp: any, transactionHash: any }>, ruleAssigneds: Array<{ __typename?: 'RuleAssigned', id: any, mnft: any, operation: any, ruleNum: any, blockNumber: any, blockTimestamp: any, transactionHash: any }>, ruleDeleteds: Array<{ __typename?: 'RuleDeleted', id: any, mnft: any, ruleNum: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type RulesQueryVariables = Exact<{
  filter?: InputMaybe<Rule_Filter>;
}>;


export type RulesQuery = { __typename?: 'Query', rules: Array<{ __typename?: 'Rule', id: string, mnft: any, ruleNum: any, blockNumber: any, blockTimestamp: any, transactionHash: any, deleted: boolean, required: number, identities?: Array<{ __typename?: 'RuleIdentity', identity: { __typename?: 'Identity', id: string, verifier: any } }> | null, operations?: Array<{ __typename?: 'Operation', id: string, mnft: any, operationName: string, operationHash: string, blockNumber: any, blockTimestamp: any, transactionHash: any }> | null }> };

export type OperationsQueryVariables = Exact<{
  filter?: InputMaybe<Operation_Filter>;
}>;


export type OperationsQuery = { __typename?: 'Query', operations: Array<{ __typename?: 'Operation', id: string, mnft: any, operationName: string, operationHash: string, blockNumber: any, blockTimestamp: any, transactionHash: any, rule: { __typename?: 'Rule', required: number, id: string, mnft: any, ruleNum: any, deleted: boolean, identities?: Array<{ __typename?: 'RuleIdentity', identity: { __typename?: 'Identity', id: string, verifier: any } }> | null } }> };

export type ApprovalsQueryVariables = Exact<{
  filter?: InputMaybe<Approval_Filter>;
}>;


export type ApprovalsQuery = { __typename?: 'Query', approvals: Array<{ __typename?: 'Approval', id: string, mnft: any, tokenSelector: any, tokenTarget: any, blockNumber: any, blockTimestamp: any, transactionHash: any, deleted: boolean, actualData?: any | null, initialData?: any | null, target?: any | null, selector?: any | null, smartWallet: { __typename?: 'SmartWalletEntity', id: string, mnft: any, wallet: any }, approvalUsedEntity?: Array<{ __typename?: 'ApprovalUsedEntity', id: string, blockNumber: any, blockTimestamp: any, transactionHash: any }> | null }> };

export type RulesByCredentialsAndOperationQueryVariables = Exact<{
  identities?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  operationHash: Scalars['String'];
  deleted?: InputMaybe<Scalars['Boolean']>;
}>;


export type RulesByCredentialsAndOperationQuery = { __typename?: 'Query', rules: Array<{ __typename?: 'Rule', id: string, mnft: any, ruleNum: any, blockNumber: any, blockTimestamp: any, transactionHash: any, deleted: boolean, required: number, identities?: Array<{ __typename?: 'RuleIdentity', id: string, identity: { __typename?: 'Identity', id: string, verifier: any } }> | null, operations?: Array<{ __typename?: 'Operation', id: string, mnft: any, operationName: string, operationHash: string, blockNumber: any, blockTimestamp: any, transactionHash: any }> | null }> };

export type SubgraphMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SubgraphMetadataQuery = { __typename?: 'Query', _meta?: { __typename?: '_Meta_', block: { __typename?: '_Block_', timestamp?: number | null, number: number } } | null };


export const SmartWalletsDocument = gql`
    query SmartWallets($filter: SmartWalletEntity_filter) {
  smartWalletEntities(where: $filter) {
    id
    mnft
    wallet
    enabled
    implementation
    blockTimestamp
    blockNumber
    transactionHash
    approvals {
      id
      mnft
      blockTimestamp
      blockNumber
      transactionHash
    }
  }
}
    `;
export const RuleHistoryDocument = gql`
    query RuleHistory($ruleAddedFilter: RuleAdded_filter, $ruleAssignedFilter: RuleAssigned_filter, $ruleDeletedFilter: RuleDeleted_filter) {
  ruleAddeds(where: $ruleAddedFilter) {
    id
    mnft
    ruleNum
    blockNumber
    blockTimestamp
    transactionHash
  }
  ruleAssigneds(where: $ruleAssignedFilter) {
    id
    mnft
    operation
    ruleNum
    blockNumber
    blockTimestamp
    transactionHash
  }
  ruleDeleteds(where: $ruleDeletedFilter) {
    id
    mnft
    ruleNum
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const RulesDocument = gql`
    query Rules($filter: Rule_filter) {
  rules(where: $filter) {
    id
    mnft
    ruleNum
    blockNumber
    blockTimestamp
    transactionHash
    deleted
    identities {
      identity {
        id
        verifier
      }
    }
    required
    operations {
      id
      mnft
      operationName
      operationHash
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
}
    `;
export const OperationsDocument = gql`
    query Operations($filter: Operation_filter) {
  operations(where: $filter) {
    id
    mnft
    operationName
    operationHash
    rule {
      identities {
        identity {
          id
          verifier
        }
      }
      required
      id
      mnft
      ruleNum
      deleted
    }
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const ApprovalsDocument = gql`
    query Approvals($filter: Approval_filter) {
  approvals(where: $filter) {
    id
    mnft
    smartWallet {
      id
      mnft
      wallet
    }
    tokenSelector
    tokenTarget
    blockNumber
    blockTimestamp
    transactionHash
    deleted
    approvalUsedEntity {
      id
      blockNumber
      blockTimestamp
      transactionHash
    }
    actualData
    initialData
    target
    selector
  }
}
    `;
export const RulesByCredentialsAndOperationDocument = gql`
    query RulesByCredentialsAndOperation($identities: [String!], $operationHash: String!, $deleted: Boolean) {
  rules(
    where: {operations_: {operationHash: $operationHash}, identities_: {identity_in: $identities}, deleted: $deleted}
  ) {
    id
    mnft
    ruleNum
    blockNumber
    blockTimestamp
    transactionHash
    deleted
    identities {
      id
      identity {
        id
        verifier
      }
    }
    required
    operations {
      id
      mnft
      operationName
      operationHash
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
}
    `;
export const SubgraphMetadataDocument = gql`
    query SubgraphMetadata {
  _meta {
    block {
      timestamp
      number
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    SmartWallets(variables?: SmartWalletsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SmartWalletsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SmartWalletsQuery>(SmartWalletsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SmartWallets', 'query');
    },
    RuleHistory(variables?: RuleHistoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RuleHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RuleHistoryQuery>(RuleHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RuleHistory', 'query');
    },
    Rules(variables?: RulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RulesQuery>(RulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Rules', 'query');
    },
    Operations(variables?: OperationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OperationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OperationsQuery>(OperationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Operations', 'query');
    },
    Approvals(variables?: ApprovalsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ApprovalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApprovalsQuery>(ApprovalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Approvals', 'query');
    },
    RulesByCredentialsAndOperation(variables: RulesByCredentialsAndOperationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RulesByCredentialsAndOperationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RulesByCredentialsAndOperationQuery>(RulesByCredentialsAndOperationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RulesByCredentialsAndOperation', 'query');
    },
    SubgraphMetadata(variables?: SubgraphMetadataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubgraphMetadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubgraphMetadataQuery>(SubgraphMetadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SubgraphMetadata', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;