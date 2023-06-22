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

export type AddCategory = {
  __typename?: 'AddCategory';
  allowSplit: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  category: Scalars['Bytes'];
  id: Scalars['Bytes'];
  manager: Scalars['Bytes'];
  properties: Array<Scalars['Bytes']>;
  transactionHash: Scalars['Bytes'];
};

export type AddCategoryProperty = {
  __typename?: 'AddCategoryProperty';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  category: Scalars['Bytes'];
  id: Scalars['Bytes'];
  properties: Array<Scalars['Bytes']>;
  transactionHash: Scalars['Bytes'];
};

export type AddCategoryProperty_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AddCategoryProperty_Filter>>>;
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
  category?: InputMaybe<Scalars['Bytes']>;
  category_contains?: InputMaybe<Scalars['Bytes']>;
  category_gt?: InputMaybe<Scalars['Bytes']>;
  category_gte?: InputMaybe<Scalars['Bytes']>;
  category_in?: InputMaybe<Array<Scalars['Bytes']>>;
  category_lt?: InputMaybe<Scalars['Bytes']>;
  category_lte?: InputMaybe<Scalars['Bytes']>;
  category_not?: InputMaybe<Scalars['Bytes']>;
  category_not_contains?: InputMaybe<Scalars['Bytes']>;
  category_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  or?: InputMaybe<Array<InputMaybe<AddCategoryProperty_Filter>>>;
  properties?: InputMaybe<Array<Scalars['Bytes']>>;
  properties_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  properties_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  properties_not?: InputMaybe<Array<Scalars['Bytes']>>;
  properties_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  properties_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
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

export enum AddCategoryProperty_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Category = 'category',
  Id = 'id',
  Properties = 'properties',
  TransactionHash = 'transactionHash'
}

export type AddCategory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allowSplit?: InputMaybe<Scalars['Boolean']>;
  allowSplit_in?: InputMaybe<Array<Scalars['Boolean']>>;
  allowSplit_not?: InputMaybe<Scalars['Boolean']>;
  allowSplit_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  and?: InputMaybe<Array<InputMaybe<AddCategory_Filter>>>;
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
  category?: InputMaybe<Scalars['Bytes']>;
  category_contains?: InputMaybe<Scalars['Bytes']>;
  category_gt?: InputMaybe<Scalars['Bytes']>;
  category_gte?: InputMaybe<Scalars['Bytes']>;
  category_in?: InputMaybe<Array<Scalars['Bytes']>>;
  category_lt?: InputMaybe<Scalars['Bytes']>;
  category_lte?: InputMaybe<Scalars['Bytes']>;
  category_not?: InputMaybe<Scalars['Bytes']>;
  category_not_contains?: InputMaybe<Scalars['Bytes']>;
  category_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  manager?: InputMaybe<Scalars['Bytes']>;
  manager_contains?: InputMaybe<Scalars['Bytes']>;
  manager_gt?: InputMaybe<Scalars['Bytes']>;
  manager_gte?: InputMaybe<Scalars['Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_lt?: InputMaybe<Scalars['Bytes']>;
  manager_lte?: InputMaybe<Scalars['Bytes']>;
  manager_not?: InputMaybe<Scalars['Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['Bytes']>;
  manager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<AddCategory_Filter>>>;
  properties?: InputMaybe<Array<Scalars['Bytes']>>;
  properties_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  properties_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  properties_not?: InputMaybe<Array<Scalars['Bytes']>>;
  properties_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  properties_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
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

export enum AddCategory_OrderBy {
  AllowSplit = 'allowSplit',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Category = 'category',
  Id = 'id',
  Manager = 'manager',
  Properties = 'properties',
  TransactionHash = 'transactionHash'
}

export type AdminChanged = {
  __typename?: 'AdminChanged';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newAdmin: Scalars['Bytes'];
  previousAdmin: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type AdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AdminChanged_Filter>>>;
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
  newAdmin?: InputMaybe<Scalars['Bytes']>;
  newAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  newAdmin_gt?: InputMaybe<Scalars['Bytes']>;
  newAdmin_gte?: InputMaybe<Scalars['Bytes']>;
  newAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdmin_lt?: InputMaybe<Scalars['Bytes']>;
  newAdmin_lte?: InputMaybe<Scalars['Bytes']>;
  newAdmin_not?: InputMaybe<Scalars['Bytes']>;
  newAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<AdminChanged_Filter>>>;
  previousAdmin?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdmin_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_not?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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

export enum AdminChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewAdmin = 'newAdmin',
  PreviousAdmin = 'previousAdmin',
  TransactionHash = 'transactionHash'
}

export type Approval = {
  __typename?: 'Approval';
  approved: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  manager: PropertyManager;
  owner: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalForAll = {
  __typename?: 'ApprovalForAll';
  approved: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  manager: PropertyManager;
  operator: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter>>>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
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
  manager?: InputMaybe<Scalars['String']>;
  manager_?: InputMaybe<PropertyManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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

export enum ApprovalForAll_OrderBy {
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Manager = 'manager',
  ManagerId = 'manager__id',
  ManagerManager = 'manager__manager',
  ManagerMinter = 'manager__minter',
  ManagerName = 'manager__name',
  ManagerSender = 'manager__sender',
  Operator = 'operator',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type Approval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Approval_Filter>>>;
  approved?: InputMaybe<Scalars['Bytes']>;
  approved_contains?: InputMaybe<Scalars['Bytes']>;
  approved_gt?: InputMaybe<Scalars['Bytes']>;
  approved_gte?: InputMaybe<Scalars['Bytes']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']>>;
  approved_lt?: InputMaybe<Scalars['Bytes']>;
  approved_lte?: InputMaybe<Scalars['Bytes']>;
  approved_not?: InputMaybe<Scalars['Bytes']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  manager?: InputMaybe<Scalars['String']>;
  manager_?: InputMaybe<PropertyManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Approval_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Manager = 'manager',
  ManagerId = 'manager__id',
  ManagerManager = 'manager__manager',
  ManagerMinter = 'manager__minter',
  ManagerName = 'manager__name',
  ManagerSender = 'manager__sender',
  Owner = 'owner',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type BeaconUpgraded = {
  __typename?: 'BeaconUpgraded';
  beacon: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type BeaconUpgraded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BeaconUpgraded_Filter>>>;
  beacon?: InputMaybe<Scalars['Bytes']>;
  beacon_contains?: InputMaybe<Scalars['Bytes']>;
  beacon_gt?: InputMaybe<Scalars['Bytes']>;
  beacon_gte?: InputMaybe<Scalars['Bytes']>;
  beacon_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beacon_lt?: InputMaybe<Scalars['Bytes']>;
  beacon_lte?: InputMaybe<Scalars['Bytes']>;
  beacon_not?: InputMaybe<Scalars['Bytes']>;
  beacon_not_contains?: InputMaybe<Scalars['Bytes']>;
  beacon_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  or?: InputMaybe<Array<InputMaybe<BeaconUpgraded_Filter>>>;
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

export enum BeaconUpgraded_OrderBy {
  Beacon = 'beacon',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
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

export type Category = {
  __typename?: 'Category';
  allowSplit: Scalars['Boolean'];
  category: Scalars['Bytes'];
  id: Scalars['Bytes'];
  manager: PropertyManager;
  properties: Array<Property>;
};


export type CategoryPropertiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Property_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Property_Filter>;
};

export type Category_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allowSplit?: InputMaybe<Scalars['Boolean']>;
  allowSplit_in?: InputMaybe<Array<Scalars['Boolean']>>;
  allowSplit_not?: InputMaybe<Scalars['Boolean']>;
  allowSplit_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  and?: InputMaybe<Array<InputMaybe<Category_Filter>>>;
  category?: InputMaybe<Scalars['Bytes']>;
  category_contains?: InputMaybe<Scalars['Bytes']>;
  category_gt?: InputMaybe<Scalars['Bytes']>;
  category_gte?: InputMaybe<Scalars['Bytes']>;
  category_in?: InputMaybe<Array<Scalars['Bytes']>>;
  category_lt?: InputMaybe<Scalars['Bytes']>;
  category_lte?: InputMaybe<Scalars['Bytes']>;
  category_not?: InputMaybe<Scalars['Bytes']>;
  category_not_contains?: InputMaybe<Scalars['Bytes']>;
  category_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  manager?: InputMaybe<Scalars['String']>;
  manager_?: InputMaybe<PropertyManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Category_Filter>>>;
  properties_?: InputMaybe<Property_Filter>;
};

export enum Category_OrderBy {
  AllowSplit = 'allowSplit',
  Category = 'category',
  Id = 'id',
  Manager = 'manager',
  ManagerId = 'manager__id',
  ManagerManager = 'manager__manager',
  ManagerMinter = 'manager__minter',
  ManagerName = 'manager__name',
  ManagerSender = 'manager__sender',
  Properties = 'properties'
}

export type Erc721OpenMintPmExampleAdminChanged = {
  __typename?: 'ERC721OpenMintPMExampleAdminChanged';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newAdmin: Scalars['Bytes'];
  previousAdmin: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type Erc721OpenMintPmExampleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleAdminChanged_Filter>>>;
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
  newAdmin?: InputMaybe<Scalars['Bytes']>;
  newAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  newAdmin_gt?: InputMaybe<Scalars['Bytes']>;
  newAdmin_gte?: InputMaybe<Scalars['Bytes']>;
  newAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdmin_lt?: InputMaybe<Scalars['Bytes']>;
  newAdmin_lte?: InputMaybe<Scalars['Bytes']>;
  newAdmin_not?: InputMaybe<Scalars['Bytes']>;
  newAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleAdminChanged_Filter>>>;
  previousAdmin?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdmin_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_not?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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

export enum Erc721OpenMintPmExampleAdminChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewAdmin = 'newAdmin',
  PreviousAdmin = 'previousAdmin',
  TransactionHash = 'transactionHash'
}

export type Erc721OpenMintPmExampleBeaconUpgraded = {
  __typename?: 'ERC721OpenMintPMExampleBeaconUpgraded';
  beacon: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type Erc721OpenMintPmExampleBeaconUpgraded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleBeaconUpgraded_Filter>>>;
  beacon?: InputMaybe<Scalars['Bytes']>;
  beacon_contains?: InputMaybe<Scalars['Bytes']>;
  beacon_gt?: InputMaybe<Scalars['Bytes']>;
  beacon_gte?: InputMaybe<Scalars['Bytes']>;
  beacon_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beacon_lt?: InputMaybe<Scalars['Bytes']>;
  beacon_lte?: InputMaybe<Scalars['Bytes']>;
  beacon_not?: InputMaybe<Scalars['Bytes']>;
  beacon_not_contains?: InputMaybe<Scalars['Bytes']>;
  beacon_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  or?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleBeaconUpgraded_Filter>>>;
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

export enum Erc721OpenMintPmExampleBeaconUpgraded_OrderBy {
  Beacon = 'beacon',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type Erc721OpenMintPmExampleInitialized = {
  __typename?: 'ERC721OpenMintPMExampleInitialized';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  version: Scalars['Int'];
};

export type Erc721OpenMintPmExampleInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleInitialized_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleInitialized_Filter>>>;
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

export enum Erc721OpenMintPmExampleInitialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type Erc721OpenMintPmExampleRoleAdminChanged = {
  __typename?: 'ERC721OpenMintPMExampleRoleAdminChanged';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newAdminRole: Scalars['Bytes'];
  previousAdminRole: Scalars['Bytes'];
  role: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type Erc721OpenMintPmExampleRoleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleRoleAdminChanged_Filter>>>;
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
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleRoleAdminChanged_Filter>>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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

export enum Erc721OpenMintPmExampleRoleAdminChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewAdminRole = 'newAdminRole',
  PreviousAdminRole = 'previousAdminRole',
  Role = 'role',
  TransactionHash = 'transactionHash'
}

export type Erc721OpenMintPmExampleRoleGranted = {
  __typename?: 'ERC721OpenMintPMExampleRoleGranted';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type Erc721OpenMintPmExampleRoleGranted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleRoleGranted_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleRoleGranted_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
};

export enum Erc721OpenMintPmExampleRoleGranted_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Role = 'role',
  Sender = 'sender',
  TransactionHash = 'transactionHash'
}

export type Erc721OpenMintPmExampleRoleRevoked = {
  __typename?: 'ERC721OpenMintPMExampleRoleRevoked';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type Erc721OpenMintPmExampleRoleRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleRoleRevoked_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleRoleRevoked_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
};

export enum Erc721OpenMintPmExampleRoleRevoked_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Role = 'role',
  Sender = 'sender',
  TransactionHash = 'transactionHash'
}

export type Erc721OpenMintPmExampleUpgraded = {
  __typename?: 'ERC721OpenMintPMExampleUpgraded';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  implementation: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type Erc721OpenMintPmExampleUpgraded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleUpgraded_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Erc721OpenMintPmExampleUpgraded_Filter>>>;
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

export enum Erc721OpenMintPmExampleUpgraded_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Implementation = 'implementation',
  TransactionHash = 'transactionHash'
}

export type GrantCategoryManager = {
  __typename?: 'GrantCategoryManager';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  category: Scalars['Bytes'];
  id: Scalars['Bytes'];
  manager: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type GrantCategoryManager_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GrantCategoryManager_Filter>>>;
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
  category?: InputMaybe<Scalars['Bytes']>;
  category_contains?: InputMaybe<Scalars['Bytes']>;
  category_gt?: InputMaybe<Scalars['Bytes']>;
  category_gte?: InputMaybe<Scalars['Bytes']>;
  category_in?: InputMaybe<Array<Scalars['Bytes']>>;
  category_lt?: InputMaybe<Scalars['Bytes']>;
  category_lte?: InputMaybe<Scalars['Bytes']>;
  category_not?: InputMaybe<Scalars['Bytes']>;
  category_not_contains?: InputMaybe<Scalars['Bytes']>;
  category_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  manager?: InputMaybe<Scalars['Bytes']>;
  manager_contains?: InputMaybe<Scalars['Bytes']>;
  manager_gt?: InputMaybe<Scalars['Bytes']>;
  manager_gte?: InputMaybe<Scalars['Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_lt?: InputMaybe<Scalars['Bytes']>;
  manager_lte?: InputMaybe<Scalars['Bytes']>;
  manager_not?: InputMaybe<Scalars['Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['Bytes']>;
  manager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<GrantCategoryManager_Filter>>>;
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

export enum GrantCategoryManager_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Category = 'category',
  Id = 'id',
  Manager = 'manager',
  TransactionHash = 'transactionHash'
}

export type GrantMinter = {
  __typename?: 'GrantMinter';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  manager: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type GrantMinter_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GrantMinter_Filter>>>;
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
  manager?: InputMaybe<Scalars['Bytes']>;
  manager_contains?: InputMaybe<Scalars['Bytes']>;
  manager_gt?: InputMaybe<Scalars['Bytes']>;
  manager_gte?: InputMaybe<Scalars['Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_lt?: InputMaybe<Scalars['Bytes']>;
  manager_lte?: InputMaybe<Scalars['Bytes']>;
  manager_not?: InputMaybe<Scalars['Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['Bytes']>;
  manager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<GrantMinter_Filter>>>;
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

export enum GrantMinter_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Manager = 'manager',
  TransactionHash = 'transactionHash'
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

export type Nft = {
  __typename?: 'NFT';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  manager: PropertyManager;
  owner: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Nft_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Nft_Filter>>>;
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
  manager?: InputMaybe<Scalars['String']>;
  manager_?: InputMaybe<PropertyManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Nft_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export enum Nft_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Manager = 'manager',
  ManagerId = 'manager__id',
  ManagerManager = 'manager__manager',
  ManagerMinter = 'manager__minter',
  ManagerName = 'manager__name',
  ManagerSender = 'manager__sender',
  Owner = 'owner',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Property = {
  __typename?: 'Property';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  category: Category;
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  value: Scalars['Bytes'];
};

export type PropertyManager = {
  __typename?: 'PropertyManager';
  categories: Array<Category>;
  id: Scalars['Bytes'];
  manager: Scalars['Bytes'];
  minter: Scalars['Boolean'];
  name: Scalars['String'];
  sender: Scalars['Bytes'];
};


export type PropertyManagerCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Category_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Category_Filter>;
};

export type PropertyManager_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PropertyManager_Filter>>>;
  categories_?: InputMaybe<Category_Filter>;
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
  manager?: InputMaybe<Scalars['Bytes']>;
  manager_contains?: InputMaybe<Scalars['Bytes']>;
  manager_gt?: InputMaybe<Scalars['Bytes']>;
  manager_gte?: InputMaybe<Scalars['Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_lt?: InputMaybe<Scalars['Bytes']>;
  manager_lte?: InputMaybe<Scalars['Bytes']>;
  manager_not?: InputMaybe<Scalars['Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['Bytes']>;
  manager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  minter?: InputMaybe<Scalars['Boolean']>;
  minter_in?: InputMaybe<Array<Scalars['Boolean']>>;
  minter_not?: InputMaybe<Scalars['Boolean']>;
  minter_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<PropertyManager_Filter>>>;
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
};

export enum PropertyManager_OrderBy {
  Categories = 'categories',
  Id = 'id',
  Manager = 'manager',
  Minter = 'minter',
  Name = 'name',
  Sender = 'sender'
}

export type Property_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Property_Filter>>>;
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
  category?: InputMaybe<Scalars['String']>;
  category_?: InputMaybe<Category_Filter>;
  category_contains?: InputMaybe<Scalars['String']>;
  category_contains_nocase?: InputMaybe<Scalars['String']>;
  category_ends_with?: InputMaybe<Scalars['String']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category_gt?: InputMaybe<Scalars['String']>;
  category_gte?: InputMaybe<Scalars['String']>;
  category_in?: InputMaybe<Array<Scalars['String']>>;
  category_lt?: InputMaybe<Scalars['String']>;
  category_lte?: InputMaybe<Scalars['String']>;
  category_not?: InputMaybe<Scalars['String']>;
  category_not_contains?: InputMaybe<Scalars['String']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']>;
  category_not_ends_with?: InputMaybe<Scalars['String']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category_not_in?: InputMaybe<Array<Scalars['String']>>;
  category_not_starts_with?: InputMaybe<Scalars['String']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  category_starts_with?: InputMaybe<Scalars['String']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  or?: InputMaybe<Array<InputMaybe<Property_Filter>>>;
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
  value?: InputMaybe<Scalars['Bytes']>;
  value_contains?: InputMaybe<Scalars['Bytes']>;
  value_gt?: InputMaybe<Scalars['Bytes']>;
  value_gte?: InputMaybe<Scalars['Bytes']>;
  value_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value_lt?: InputMaybe<Scalars['Bytes']>;
  value_lte?: InputMaybe<Scalars['Bytes']>;
  value_not?: InputMaybe<Scalars['Bytes']>;
  value_not_contains?: InputMaybe<Scalars['Bytes']>;
  value_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Property_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Category = 'category',
  CategoryAllowSplit = 'category__allowSplit',
  CategoryCategory = 'category__category',
  CategoryId = 'category__id',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addCategories: Array<AddCategory>;
  addCategory?: Maybe<AddCategory>;
  addCategoryProperties: Array<AddCategoryProperty>;
  addCategoryProperty?: Maybe<AddCategoryProperty>;
  adminChanged?: Maybe<AdminChanged>;
  adminChangeds: Array<AdminChanged>;
  approval?: Maybe<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  approvals: Array<Approval>;
  beaconUpgraded?: Maybe<BeaconUpgraded>;
  beaconUpgradeds: Array<BeaconUpgraded>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  erc721OpenMintPMExampleAdminChanged?: Maybe<Erc721OpenMintPmExampleAdminChanged>;
  erc721OpenMintPMExampleAdminChangeds: Array<Erc721OpenMintPmExampleAdminChanged>;
  erc721OpenMintPMExampleBeaconUpgraded?: Maybe<Erc721OpenMintPmExampleBeaconUpgraded>;
  erc721OpenMintPMExampleBeaconUpgradeds: Array<Erc721OpenMintPmExampleBeaconUpgraded>;
  erc721OpenMintPMExampleInitialized?: Maybe<Erc721OpenMintPmExampleInitialized>;
  erc721OpenMintPMExampleInitializeds: Array<Erc721OpenMintPmExampleInitialized>;
  erc721OpenMintPMExampleRoleAdminChanged?: Maybe<Erc721OpenMintPmExampleRoleAdminChanged>;
  erc721OpenMintPMExampleRoleAdminChangeds: Array<Erc721OpenMintPmExampleRoleAdminChanged>;
  erc721OpenMintPMExampleRoleGranted?: Maybe<Erc721OpenMintPmExampleRoleGranted>;
  erc721OpenMintPMExampleRoleGranteds: Array<Erc721OpenMintPmExampleRoleGranted>;
  erc721OpenMintPMExampleRoleRevoked?: Maybe<Erc721OpenMintPmExampleRoleRevoked>;
  erc721OpenMintPMExampleRoleRevokeds: Array<Erc721OpenMintPmExampleRoleRevoked>;
  erc721OpenMintPMExampleUpgraded?: Maybe<Erc721OpenMintPmExampleUpgraded>;
  erc721OpenMintPMExampleUpgradeds: Array<Erc721OpenMintPmExampleUpgraded>;
  grantCategoryManager?: Maybe<GrantCategoryManager>;
  grantCategoryManagers: Array<GrantCategoryManager>;
  grantMinter?: Maybe<GrantMinter>;
  grantMinters: Array<GrantMinter>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  properties: Array<Property>;
  property?: Maybe<Property>;
  propertyManager?: Maybe<PropertyManager>;
  propertyManagers: Array<PropertyManager>;
  removeCategoryManager?: Maybe<RemoveCategoryManager>;
  removeCategoryManagers: Array<RemoveCategoryManager>;
  removeMinter?: Maybe<RemoveMinter>;
  removeMinters: Array<RemoveMinter>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  setMetadataGenerator?: Maybe<SetMetadataGenerator>;
  setMetadataGenerators: Array<SetMetadataGenerator>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  upgraded?: Maybe<Upgraded>;
  upgradeds: Array<Upgraded>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAddCategoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddCategory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddCategory_Filter>;
};


export type QueryAddCategoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddCategoryPropertiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddCategoryProperty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddCategoryProperty_Filter>;
};


export type QueryAddCategoryPropertyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdminChanged_Filter>;
};


export type QueryApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalForAll_Filter>;
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


export type QueryBeaconUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBeaconUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeaconUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeaconUpgraded_Filter>;
};


export type QueryCategoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Category_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Category_Filter>;
};


export type QueryCategoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721OpenMintPmExampleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721OpenMintPmExampleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleAdminChanged_Filter>;
};


export type QueryErc721OpenMintPmExampleBeaconUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721OpenMintPmExampleBeaconUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleBeaconUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleBeaconUpgraded_Filter>;
};


export type QueryErc721OpenMintPmExampleInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721OpenMintPmExampleInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleInitialized_Filter>;
};


export type QueryErc721OpenMintPmExampleRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721OpenMintPmExampleRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleRoleAdminChanged_Filter>;
};


export type QueryErc721OpenMintPmExampleRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721OpenMintPmExampleRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleRoleGranted_Filter>;
};


export type QueryErc721OpenMintPmExampleRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721OpenMintPmExampleRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleRoleRevoked_Filter>;
};


export type QueryErc721OpenMintPmExampleUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721OpenMintPmExampleUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleUpgraded_Filter>;
};


export type QueryGrantCategoryManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantCategoryManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantCategoryManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantCategoryManager_Filter>;
};


export type QueryGrantMinterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantMintersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantMinter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantMinter_Filter>;
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


export type QueryNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};


export type QueryPropertiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Property_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Property_Filter>;
};


export type QueryPropertyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPropertyManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPropertyManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PropertyManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PropertyManager_Filter>;
};


export type QueryRemoveCategoryManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRemoveCategoryManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveCategoryManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveCategoryManager_Filter>;
};


export type QueryRemoveMinterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRemoveMintersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveMinter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveMinter_Filter>;
};


export type QueryRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type QueryRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type QueryRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type QuerySetMetadataGeneratorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySetMetadataGeneratorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetMetadataGenerator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetMetadataGenerator_Filter>;
};


export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type QueryUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Upgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Upgraded_Filter>;
};

export type RemoveCategoryManager = {
  __typename?: 'RemoveCategoryManager';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  category: Scalars['Bytes'];
  id: Scalars['Bytes'];
  manager: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type RemoveCategoryManager_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RemoveCategoryManager_Filter>>>;
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
  category?: InputMaybe<Scalars['Bytes']>;
  category_contains?: InputMaybe<Scalars['Bytes']>;
  category_gt?: InputMaybe<Scalars['Bytes']>;
  category_gte?: InputMaybe<Scalars['Bytes']>;
  category_in?: InputMaybe<Array<Scalars['Bytes']>>;
  category_lt?: InputMaybe<Scalars['Bytes']>;
  category_lte?: InputMaybe<Scalars['Bytes']>;
  category_not?: InputMaybe<Scalars['Bytes']>;
  category_not_contains?: InputMaybe<Scalars['Bytes']>;
  category_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  manager?: InputMaybe<Scalars['Bytes']>;
  manager_contains?: InputMaybe<Scalars['Bytes']>;
  manager_gt?: InputMaybe<Scalars['Bytes']>;
  manager_gte?: InputMaybe<Scalars['Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_lt?: InputMaybe<Scalars['Bytes']>;
  manager_lte?: InputMaybe<Scalars['Bytes']>;
  manager_not?: InputMaybe<Scalars['Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['Bytes']>;
  manager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<RemoveCategoryManager_Filter>>>;
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

export enum RemoveCategoryManager_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Category = 'category',
  Id = 'id',
  Manager = 'manager',
  TransactionHash = 'transactionHash'
}

export type RemoveMinter = {
  __typename?: 'RemoveMinter';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  manager: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type RemoveMinter_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RemoveMinter_Filter>>>;
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
  manager?: InputMaybe<Scalars['Bytes']>;
  manager_contains?: InputMaybe<Scalars['Bytes']>;
  manager_gt?: InputMaybe<Scalars['Bytes']>;
  manager_gte?: InputMaybe<Scalars['Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_lt?: InputMaybe<Scalars['Bytes']>;
  manager_lte?: InputMaybe<Scalars['Bytes']>;
  manager_not?: InputMaybe<Scalars['Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['Bytes']>;
  manager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<RemoveMinter_Filter>>>;
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

export enum RemoveMinter_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Manager = 'manager',
  TransactionHash = 'transactionHash'
}

export type RoleAdminChanged = {
  __typename?: 'RoleAdminChanged';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newAdminRole: Scalars['Bytes'];
  previousAdminRole: Scalars['Bytes'];
  role: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type RoleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleAdminChanged_Filter>>>;
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
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<RoleAdminChanged_Filter>>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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

export enum RoleAdminChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewAdminRole = 'newAdminRole',
  PreviousAdminRole = 'previousAdminRole',
  Role = 'role',
  TransactionHash = 'transactionHash'
}

export type RoleGranted = {
  __typename?: 'RoleGranted';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type RoleGranted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<RoleGranted_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<RoleGranted_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
};

export enum RoleGranted_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Role = 'role',
  Sender = 'sender',
  TransactionHash = 'transactionHash'
}

export type RoleRevoked = {
  __typename?: 'RoleRevoked';
  account: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type RoleRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<RoleRevoked_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<RoleRevoked_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
};

export enum RoleRevoked_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Role = 'role',
  Sender = 'sender',
  TransactionHash = 'transactionHash'
}

export type SetMetadataGenerator = {
  __typename?: 'SetMetadataGenerator';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  generator: Scalars['Bytes'];
  id: Scalars['Bytes'];
  property: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type SetMetadataGenerator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SetMetadataGenerator_Filter>>>;
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
  generator?: InputMaybe<Scalars['Bytes']>;
  generator_contains?: InputMaybe<Scalars['Bytes']>;
  generator_gt?: InputMaybe<Scalars['Bytes']>;
  generator_gte?: InputMaybe<Scalars['Bytes']>;
  generator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  generator_lt?: InputMaybe<Scalars['Bytes']>;
  generator_lte?: InputMaybe<Scalars['Bytes']>;
  generator_not?: InputMaybe<Scalars['Bytes']>;
  generator_not_contains?: InputMaybe<Scalars['Bytes']>;
  generator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  or?: InputMaybe<Array<InputMaybe<SetMetadataGenerator_Filter>>>;
  property?: InputMaybe<Scalars['Bytes']>;
  property_contains?: InputMaybe<Scalars['Bytes']>;
  property_gt?: InputMaybe<Scalars['Bytes']>;
  property_gte?: InputMaybe<Scalars['Bytes']>;
  property_in?: InputMaybe<Array<Scalars['Bytes']>>;
  property_lt?: InputMaybe<Scalars['Bytes']>;
  property_lte?: InputMaybe<Scalars['Bytes']>;
  property_not?: InputMaybe<Scalars['Bytes']>;
  property_not_contains?: InputMaybe<Scalars['Bytes']>;
  property_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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

export enum SetMetadataGenerator_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Generator = 'generator',
  Id = 'id',
  Property = 'property',
  TransactionHash = 'transactionHash'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addCategories: Array<AddCategory>;
  addCategory?: Maybe<AddCategory>;
  addCategoryProperties: Array<AddCategoryProperty>;
  addCategoryProperty?: Maybe<AddCategoryProperty>;
  adminChanged?: Maybe<AdminChanged>;
  adminChangeds: Array<AdminChanged>;
  approval?: Maybe<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  approvals: Array<Approval>;
  beaconUpgraded?: Maybe<BeaconUpgraded>;
  beaconUpgradeds: Array<BeaconUpgraded>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  erc721OpenMintPMExampleAdminChanged?: Maybe<Erc721OpenMintPmExampleAdminChanged>;
  erc721OpenMintPMExampleAdminChangeds: Array<Erc721OpenMintPmExampleAdminChanged>;
  erc721OpenMintPMExampleBeaconUpgraded?: Maybe<Erc721OpenMintPmExampleBeaconUpgraded>;
  erc721OpenMintPMExampleBeaconUpgradeds: Array<Erc721OpenMintPmExampleBeaconUpgraded>;
  erc721OpenMintPMExampleInitialized?: Maybe<Erc721OpenMintPmExampleInitialized>;
  erc721OpenMintPMExampleInitializeds: Array<Erc721OpenMintPmExampleInitialized>;
  erc721OpenMintPMExampleRoleAdminChanged?: Maybe<Erc721OpenMintPmExampleRoleAdminChanged>;
  erc721OpenMintPMExampleRoleAdminChangeds: Array<Erc721OpenMintPmExampleRoleAdminChanged>;
  erc721OpenMintPMExampleRoleGranted?: Maybe<Erc721OpenMintPmExampleRoleGranted>;
  erc721OpenMintPMExampleRoleGranteds: Array<Erc721OpenMintPmExampleRoleGranted>;
  erc721OpenMintPMExampleRoleRevoked?: Maybe<Erc721OpenMintPmExampleRoleRevoked>;
  erc721OpenMintPMExampleRoleRevokeds: Array<Erc721OpenMintPmExampleRoleRevoked>;
  erc721OpenMintPMExampleUpgraded?: Maybe<Erc721OpenMintPmExampleUpgraded>;
  erc721OpenMintPMExampleUpgradeds: Array<Erc721OpenMintPmExampleUpgraded>;
  grantCategoryManager?: Maybe<GrantCategoryManager>;
  grantCategoryManagers: Array<GrantCategoryManager>;
  grantMinter?: Maybe<GrantMinter>;
  grantMinters: Array<GrantMinter>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  properties: Array<Property>;
  property?: Maybe<Property>;
  propertyManager?: Maybe<PropertyManager>;
  propertyManagers: Array<PropertyManager>;
  removeCategoryManager?: Maybe<RemoveCategoryManager>;
  removeCategoryManagers: Array<RemoveCategoryManager>;
  removeMinter?: Maybe<RemoveMinter>;
  removeMinters: Array<RemoveMinter>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  setMetadataGenerator?: Maybe<SetMetadataGenerator>;
  setMetadataGenerators: Array<SetMetadataGenerator>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  upgraded?: Maybe<Upgraded>;
  upgradeds: Array<Upgraded>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAddCategoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddCategory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddCategory_Filter>;
};


export type SubscriptionAddCategoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddCategoryPropertiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddCategoryProperty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddCategoryProperty_Filter>;
};


export type SubscriptionAddCategoryPropertyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdminChanged_Filter>;
};


export type SubscriptionApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalForAll_Filter>;
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


export type SubscriptionBeaconUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBeaconUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeaconUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeaconUpgraded_Filter>;
};


export type SubscriptionCategoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Category_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Category_Filter>;
};


export type SubscriptionCategoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721OpenMintPmExampleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721OpenMintPmExampleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleAdminChanged_Filter>;
};


export type SubscriptionErc721OpenMintPmExampleBeaconUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721OpenMintPmExampleBeaconUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleBeaconUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleBeaconUpgraded_Filter>;
};


export type SubscriptionErc721OpenMintPmExampleInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721OpenMintPmExampleInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleInitialized_Filter>;
};


export type SubscriptionErc721OpenMintPmExampleRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721OpenMintPmExampleRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleRoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleRoleAdminChanged_Filter>;
};


export type SubscriptionErc721OpenMintPmExampleRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721OpenMintPmExampleRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleRoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleRoleGranted_Filter>;
};


export type SubscriptionErc721OpenMintPmExampleRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721OpenMintPmExampleRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleRoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleRoleRevoked_Filter>;
};


export type SubscriptionErc721OpenMintPmExampleUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721OpenMintPmExampleUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc721OpenMintPmExampleUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721OpenMintPmExampleUpgraded_Filter>;
};


export type SubscriptionGrantCategoryManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantCategoryManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantCategoryManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantCategoryManager_Filter>;
};


export type SubscriptionGrantMinterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantMintersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantMinter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantMinter_Filter>;
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


export type SubscriptionNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};


export type SubscriptionPropertiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Property_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Property_Filter>;
};


export type SubscriptionPropertyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPropertyManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPropertyManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PropertyManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PropertyManager_Filter>;
};


export type SubscriptionRemoveCategoryManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRemoveCategoryManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveCategoryManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveCategoryManager_Filter>;
};


export type SubscriptionRemoveMinterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRemoveMintersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveMinter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveMinter_Filter>;
};


export type SubscriptionRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type SubscriptionRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type SubscriptionRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type SubscriptionSetMetadataGeneratorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSetMetadataGeneratorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetMetadataGenerator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetMetadataGenerator_Filter>;
};


export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type SubscriptionUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Upgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Upgraded_Filter>;
};

export type Transfer = {
  __typename?: 'Transfer';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  from: Scalars['Bytes'];
  id: Scalars['Bytes'];
  manager: PropertyManager;
  to: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
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
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  manager?: InputMaybe<Scalars['String']>;
  manager_?: InputMaybe<PropertyManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export enum Transfer_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  From = 'from',
  Id = 'id',
  Manager = 'manager',
  ManagerId = 'manager__id',
  ManagerManager = 'manager__manager',
  ManagerMinter = 'manager__minter',
  ManagerName = 'manager__name',
  ManagerSender = 'manager__sender',
  To = 'to',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type Upgraded = {
  __typename?: 'Upgraded';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  implementation: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type Upgraded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Upgraded_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Upgraded_Filter>>>;
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

export enum Upgraded_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Implementation = 'implementation',
  TransactionHash = 'transactionHash'
}

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

export type ManagersQueryVariables = Exact<{
  filter?: InputMaybe<PropertyManager_Filter>;
}>;


export type ManagersQuery = { __typename?: 'Query', propertyManagers: Array<{ __typename?: 'PropertyManager', id: any, name: string, minter: boolean, manager: any, sender: any, categories: Array<{ __typename?: 'Category', id: any, allowSplit: boolean, category: any, properties: Array<{ __typename?: 'Property', id: any, value: any, transactionHash: any, blockNumber: any, blockTimestamp: any }> }> }> };

export type CategoriesQueryVariables = Exact<{
  filter?: InputMaybe<Category_Filter>;
}>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: any, allowSplit: boolean, category: any, manager: { __typename?: 'PropertyManager', manager: any, minter: boolean, name: string, id: any, sender: any }, properties: Array<{ __typename?: 'Property', id: any, value: any, transactionHash: any, blockNumber: any, blockTimestamp: any }> }> };

export type PropertiesQueryVariables = Exact<{
  filter?: InputMaybe<Property_Filter>;
}>;


export type PropertiesQuery = { __typename?: 'Query', properties: Array<{ __typename?: 'Property', id: any, value: any, transactionHash: any, blockNumber: any, blockTimestamp: any, category: { __typename?: 'Category', id: any, allowSplit: boolean, category: any, manager: { __typename?: 'PropertyManager', manager: any, minter: boolean, name: string, id: any, sender: any } } }> };

export type Erc721sQueryVariables = Exact<{
  filter?: InputMaybe<Nft_Filter>;
}>;


export type Erc721sQuery = { __typename?: 'Query', nfts: Array<{ __typename?: 'NFT', id: string, owner: any, tokenId: any, transactionHash: any, blockTimestamp: any, blockNumber: any, manager: { __typename?: 'PropertyManager', manager: any, minter: boolean, name: string, id: any, sender: any } }> };

export type SubgraphMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SubgraphMetadataQuery = { __typename?: 'Query', _meta?: { __typename?: '_Meta_', block: { __typename?: '_Block_', timestamp?: number | null, number: number } } | null };


export const ManagersDocument = gql`
    query Managers($filter: PropertyManager_filter) {
  propertyManagers(where: $filter) {
    id
    name
    minter
    manager
    sender
    categories {
      id
      allowSplit
      category
      properties {
        id
        value
        transactionHash
        blockNumber
        blockTimestamp
      }
    }
  }
}
    `;
export const CategoriesDocument = gql`
    query Categories($filter: Category_filter) {
  categories(where: $filter) {
    id
    allowSplit
    category
    manager {
      manager
      minter
      name
      id
      sender
    }
    properties {
      id
      value
      transactionHash
      blockNumber
      blockTimestamp
    }
  }
}
    `;
export const PropertiesDocument = gql`
    query Properties($filter: Property_filter) {
  properties(where: $filter) {
    id
    value
    transactionHash
    blockNumber
    blockTimestamp
    category {
      id
      allowSplit
      category
      manager {
        manager
        minter
        name
        id
        sender
      }
    }
  }
}
    `;
export const Erc721sDocument = gql`
    query ERC721s($filter: NFT_filter) {
  nfts(where: $filter) {
    id
    manager {
      manager
      minter
      name
      id
      sender
    }
    owner
    tokenId
    transactionHash
    blockTimestamp
    blockNumber
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
    Managers(variables?: ManagersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ManagersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ManagersQuery>(ManagersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Managers', 'query');
    },
    Categories(variables?: CategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CategoriesQuery>(CategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Categories', 'query');
    },
    Properties(variables?: PropertiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PropertiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PropertiesQuery>(PropertiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Properties', 'query');
    },
    ERC721s(variables?: Erc721sQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Erc721sQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Erc721sQuery>(Erc721sDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ERC721s', 'query');
    },
    SubgraphMetadata(variables?: SubgraphMetadataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubgraphMetadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubgraphMetadataQuery>(SubgraphMetadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SubgraphMetadata', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;