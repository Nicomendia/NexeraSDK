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

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type GroupRuleAdded = {
  __typename?: 'GroupRuleAdded';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  ruleId: Scalars['BigInt'];
  rule_enabled: Scalars['Boolean'];
  rule_groups: Array<Scalars['BigInt']>;
  rule_operator: Scalars['BigInt'];
  rule_validityPeriod: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type GroupRuleAdded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GroupRuleAdded_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<GroupRuleAdded_Filter>>>;
  ruleId?: InputMaybe<Scalars['BigInt']>;
  ruleId_gt?: InputMaybe<Scalars['BigInt']>;
  ruleId_gte?: InputMaybe<Scalars['BigInt']>;
  ruleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruleId_lt?: InputMaybe<Scalars['BigInt']>;
  ruleId_lte?: InputMaybe<Scalars['BigInt']>;
  ruleId_not?: InputMaybe<Scalars['BigInt']>;
  ruleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_enabled?: InputMaybe<Scalars['Boolean']>;
  rule_enabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rule_enabled_not?: InputMaybe<Scalars['Boolean']>;
  rule_enabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rule_groups?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_groups_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_groups_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_groups_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_groups_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_groups_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_operator?: InputMaybe<Scalars['BigInt']>;
  rule_operator_gt?: InputMaybe<Scalars['BigInt']>;
  rule_operator_gte?: InputMaybe<Scalars['BigInt']>;
  rule_operator_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_operator_lt?: InputMaybe<Scalars['BigInt']>;
  rule_operator_lte?: InputMaybe<Scalars['BigInt']>;
  rule_operator_not?: InputMaybe<Scalars['BigInt']>;
  rule_operator_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_validityPeriod?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_validityPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_not?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export enum GroupRuleAdded_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  RuleId = 'ruleId',
  RuleEnabled = 'rule_enabled',
  RuleGroups = 'rule_groups',
  RuleOperator = 'rule_operator',
  RuleValidityPeriod = 'rule_validityPeriod',
  TransactionHash = 'transactionHash'
}

export type GroupRuleUpdated = {
  __typename?: 'GroupRuleUpdated';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  ruleId: Scalars['BigInt'];
  rule_enabled: Scalars['Boolean'];
  rule_groups: Array<Scalars['BigInt']>;
  rule_operator: Scalars['BigInt'];
  rule_validityPeriod: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type GroupRuleUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GroupRuleUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<GroupRuleUpdated_Filter>>>;
  ruleId?: InputMaybe<Scalars['BigInt']>;
  ruleId_gt?: InputMaybe<Scalars['BigInt']>;
  ruleId_gte?: InputMaybe<Scalars['BigInt']>;
  ruleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruleId_lt?: InputMaybe<Scalars['BigInt']>;
  ruleId_lte?: InputMaybe<Scalars['BigInt']>;
  ruleId_not?: InputMaybe<Scalars['BigInt']>;
  ruleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_enabled?: InputMaybe<Scalars['Boolean']>;
  rule_enabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rule_enabled_not?: InputMaybe<Scalars['Boolean']>;
  rule_enabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rule_groups?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_groups_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_groups_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_groups_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_groups_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_groups_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_operator?: InputMaybe<Scalars['BigInt']>;
  rule_operator_gt?: InputMaybe<Scalars['BigInt']>;
  rule_operator_gte?: InputMaybe<Scalars['BigInt']>;
  rule_operator_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_operator_lt?: InputMaybe<Scalars['BigInt']>;
  rule_operator_lte?: InputMaybe<Scalars['BigInt']>;
  rule_operator_not?: InputMaybe<Scalars['BigInt']>;
  rule_operator_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_validityPeriod?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_validityPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_not?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export enum GroupRuleUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  RuleId = 'ruleId',
  RuleEnabled = 'rule_enabled',
  RuleGroups = 'rule_groups',
  RuleOperator = 'rule_operator',
  RuleValidityPeriod = 'rule_validityPeriod',
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

export type NumberThresholdRuleAdded = {
  __typename?: 'NumberThresholdRuleAdded';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  ruleId: Scalars['BigInt'];
  rule_enabled: Scalars['Boolean'];
  rule_numberThreshold: Scalars['BigInt'];
  rule_operator: Scalars['BigInt'];
  rule_validityPeriod: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type NumberThresholdRuleAdded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NumberThresholdRuleAdded_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<NumberThresholdRuleAdded_Filter>>>;
  ruleId?: InputMaybe<Scalars['BigInt']>;
  ruleId_gt?: InputMaybe<Scalars['BigInt']>;
  ruleId_gte?: InputMaybe<Scalars['BigInt']>;
  ruleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruleId_lt?: InputMaybe<Scalars['BigInt']>;
  ruleId_lte?: InputMaybe<Scalars['BigInt']>;
  ruleId_not?: InputMaybe<Scalars['BigInt']>;
  ruleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_enabled?: InputMaybe<Scalars['Boolean']>;
  rule_enabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rule_enabled_not?: InputMaybe<Scalars['Boolean']>;
  rule_enabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rule_numberThreshold?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_numberThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_not?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_operator?: InputMaybe<Scalars['BigInt']>;
  rule_operator_gt?: InputMaybe<Scalars['BigInt']>;
  rule_operator_gte?: InputMaybe<Scalars['BigInt']>;
  rule_operator_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_operator_lt?: InputMaybe<Scalars['BigInt']>;
  rule_operator_lte?: InputMaybe<Scalars['BigInt']>;
  rule_operator_not?: InputMaybe<Scalars['BigInt']>;
  rule_operator_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_validityPeriod?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_validityPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_not?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export enum NumberThresholdRuleAdded_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  RuleId = 'ruleId',
  RuleEnabled = 'rule_enabled',
  RuleNumberThreshold = 'rule_numberThreshold',
  RuleOperator = 'rule_operator',
  RuleValidityPeriod = 'rule_validityPeriod',
  TransactionHash = 'transactionHash'
}

export type NumberThresholdRuleUpdated = {
  __typename?: 'NumberThresholdRuleUpdated';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  ruleId: Scalars['BigInt'];
  rule_enabled: Scalars['Boolean'];
  rule_numberThreshold: Scalars['BigInt'];
  rule_operator: Scalars['BigInt'];
  rule_validityPeriod: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type NumberThresholdRuleUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NumberThresholdRuleUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<NumberThresholdRuleUpdated_Filter>>>;
  ruleId?: InputMaybe<Scalars['BigInt']>;
  ruleId_gt?: InputMaybe<Scalars['BigInt']>;
  ruleId_gte?: InputMaybe<Scalars['BigInt']>;
  ruleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruleId_lt?: InputMaybe<Scalars['BigInt']>;
  ruleId_lte?: InputMaybe<Scalars['BigInt']>;
  ruleId_not?: InputMaybe<Scalars['BigInt']>;
  ruleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_enabled?: InputMaybe<Scalars['Boolean']>;
  rule_enabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rule_enabled_not?: InputMaybe<Scalars['Boolean']>;
  rule_enabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rule_numberThreshold?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_numberThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_not?: InputMaybe<Scalars['BigInt']>;
  rule_numberThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_operator?: InputMaybe<Scalars['BigInt']>;
  rule_operator_gt?: InputMaybe<Scalars['BigInt']>;
  rule_operator_gte?: InputMaybe<Scalars['BigInt']>;
  rule_operator_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_operator_lt?: InputMaybe<Scalars['BigInt']>;
  rule_operator_lte?: InputMaybe<Scalars['BigInt']>;
  rule_operator_not?: InputMaybe<Scalars['BigInt']>;
  rule_operator_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_validityPeriod?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rule_validityPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_not?: InputMaybe<Scalars['BigInt']>;
  rule_validityPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export enum NumberThresholdRuleUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  RuleId = 'ruleId',
  RuleEnabled = 'rule_enabled',
  RuleNumberThreshold = 'rule_numberThreshold',
  RuleOperator = 'rule_operator',
  RuleValidityPeriod = 'rule_validityPeriod',
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
  groupRuleAdded?: Maybe<GroupRuleAdded>;
  groupRuleAddeds: Array<GroupRuleAdded>;
  groupRuleUpdated?: Maybe<GroupRuleUpdated>;
  groupRuleUpdateds: Array<GroupRuleUpdated>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  numberThresholdRuleAdded?: Maybe<NumberThresholdRuleAdded>;
  numberThresholdRuleAddeds: Array<NumberThresholdRuleAdded>;
  numberThresholdRuleUpdated?: Maybe<NumberThresholdRuleUpdated>;
  numberThresholdRuleUpdateds: Array<NumberThresholdRuleUpdated>;
  revokation?: Maybe<Revokation>;
  revokations: Array<Revokation>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  verification?: Maybe<Verification>;
  verifications: Array<Verification>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryGroupRuleAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGroupRuleAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GroupRuleAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GroupRuleAdded_Filter>;
};


export type QueryGroupRuleUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGroupRuleUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GroupRuleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GroupRuleUpdated_Filter>;
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


export type QueryNumberThresholdRuleAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNumberThresholdRuleAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NumberThresholdRuleAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NumberThresholdRuleAdded_Filter>;
};


export type QueryNumberThresholdRuleUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNumberThresholdRuleUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NumberThresholdRuleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NumberThresholdRuleUpdated_Filter>;
};


export type QueryRevokationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRevokationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Revokation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Revokation_Filter>;
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


export type QueryVerificationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVerificationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Verification_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Verification_Filter>;
};

export type Revokation = {
  __typename?: 'Revokation';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mid: Scalars['BigInt'];
  rkey: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type Revokation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Revokation_Filter>>>;
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
  mid?: InputMaybe<Scalars['BigInt']>;
  mid_gt?: InputMaybe<Scalars['BigInt']>;
  mid_gte?: InputMaybe<Scalars['BigInt']>;
  mid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mid_lt?: InputMaybe<Scalars['BigInt']>;
  mid_lte?: InputMaybe<Scalars['BigInt']>;
  mid_not?: InputMaybe<Scalars['BigInt']>;
  mid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<Revokation_Filter>>>;
  rkey?: InputMaybe<Scalars['Bytes']>;
  rkey_contains?: InputMaybe<Scalars['Bytes']>;
  rkey_gt?: InputMaybe<Scalars['Bytes']>;
  rkey_gte?: InputMaybe<Scalars['Bytes']>;
  rkey_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rkey_lt?: InputMaybe<Scalars['Bytes']>;
  rkey_lte?: InputMaybe<Scalars['Bytes']>;
  rkey_not?: InputMaybe<Scalars['Bytes']>;
  rkey_not_contains?: InputMaybe<Scalars['Bytes']>;
  rkey_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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

export enum Revokation_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mid = 'mid',
  Rkey = 'rkey',
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

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  groupRuleAdded?: Maybe<GroupRuleAdded>;
  groupRuleAddeds: Array<GroupRuleAdded>;
  groupRuleUpdated?: Maybe<GroupRuleUpdated>;
  groupRuleUpdateds: Array<GroupRuleUpdated>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  numberThresholdRuleAdded?: Maybe<NumberThresholdRuleAdded>;
  numberThresholdRuleAddeds: Array<NumberThresholdRuleAdded>;
  numberThresholdRuleUpdated?: Maybe<NumberThresholdRuleUpdated>;
  numberThresholdRuleUpdateds: Array<NumberThresholdRuleUpdated>;
  revokation?: Maybe<Revokation>;
  revokations: Array<Revokation>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  verification?: Maybe<Verification>;
  verifications: Array<Verification>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionGroupRuleAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGroupRuleAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GroupRuleAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GroupRuleAdded_Filter>;
};


export type SubscriptionGroupRuleUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGroupRuleUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GroupRuleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GroupRuleUpdated_Filter>;
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


export type SubscriptionNumberThresholdRuleAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNumberThresholdRuleAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NumberThresholdRuleAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NumberThresholdRuleAdded_Filter>;
};


export type SubscriptionNumberThresholdRuleUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNumberThresholdRuleUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NumberThresholdRuleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NumberThresholdRuleUpdated_Filter>;
};


export type SubscriptionRevokationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRevokationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Revokation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Revokation_Filter>;
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


export type SubscriptionVerificationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVerificationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Verification_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Verification_Filter>;
};

export type Verification = {
  __typename?: 'Verification';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mid: Scalars['BigInt'];
  rkey: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  validity: Scalars['BigInt'];
};

export type Verification_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Verification_Filter>>>;
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
  mid?: InputMaybe<Scalars['BigInt']>;
  mid_gt?: InputMaybe<Scalars['BigInt']>;
  mid_gte?: InputMaybe<Scalars['BigInt']>;
  mid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mid_lt?: InputMaybe<Scalars['BigInt']>;
  mid_lte?: InputMaybe<Scalars['BigInt']>;
  mid_not?: InputMaybe<Scalars['BigInt']>;
  mid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<Verification_Filter>>>;
  rkey?: InputMaybe<Scalars['Bytes']>;
  rkey_contains?: InputMaybe<Scalars['Bytes']>;
  rkey_gt?: InputMaybe<Scalars['Bytes']>;
  rkey_gte?: InputMaybe<Scalars['Bytes']>;
  rkey_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rkey_lt?: InputMaybe<Scalars['Bytes']>;
  rkey_lte?: InputMaybe<Scalars['Bytes']>;
  rkey_not?: InputMaybe<Scalars['Bytes']>;
  rkey_not_contains?: InputMaybe<Scalars['Bytes']>;
  rkey_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
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
  validity?: InputMaybe<Scalars['BigInt']>;
  validity_gt?: InputMaybe<Scalars['BigInt']>;
  validity_gte?: InputMaybe<Scalars['BigInt']>;
  validity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  validity_lt?: InputMaybe<Scalars['BigInt']>;
  validity_lte?: InputMaybe<Scalars['BigInt']>;
  validity_not?: InputMaybe<Scalars['BigInt']>;
  validity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Verification_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Mid = 'mid',
  Rkey = 'rkey',
  TransactionHash = 'transactionHash',
  Validity = 'validity'
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

export type VerificationsQueryVariables = Exact<{
  filter?: InputMaybe<Verification_Filter>;
}>;


export type VerificationsQuery = { __typename?: 'Query', verifications: Array<{ __typename?: 'Verification', blockNumber: any, blockTimestamp: any, transactionHash: any, id: any, mid: any, rkey: any, validity: any }> };

export type RevocationsQueryVariables = Exact<{
  filter?: InputMaybe<Revokation_Filter>;
}>;


export type RevocationsQuery = { __typename?: 'Query', revokations: Array<{ __typename?: 'Revokation', rkey: any, mid: any, id: any, transactionHash: any, blockTimestamp: any, blockNumber: any }> };

export type RulesQueryVariables = Exact<{ [key: string]: never; }>;


export type RulesQuery = { __typename?: 'Query', groupRuleAddeds: Array<{ __typename?: 'GroupRuleAdded', id: any, transactionHash: any, blockNumber: any, blockTimestamp: any, rule_enabled: boolean, rule_groups: Array<any>, rule_operator: any, rule_validityPeriod: any }>, numberThresholdRuleAddeds: Array<{ __typename?: 'NumberThresholdRuleAdded', id: any, transactionHash: any, blockNumber: any, blockTimestamp: any, rule_enabled: boolean, rule_validityPeriod: any, rule_operator: any, rule_numberThreshold: any }> };

export type SubgraphMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SubgraphMetadataQuery = { __typename?: 'Query', _meta?: { __typename?: '_Meta_', block: { __typename?: '_Block_', timestamp?: number | null, number: number } } | null };


export const VerificationsDocument = gql`
    query verifications($filter: Verification_filter) {
  verifications(where: $filter) {
    blockNumber
    blockTimestamp
    transactionHash
    id
    mid
    rkey
    validity
  }
}
    `;
export const RevocationsDocument = gql`
    query revocations($filter: Revokation_filter) {
  revokations(where: $filter) {
    rkey
    mid
    id
    transactionHash
    blockTimestamp
    blockNumber
  }
}
    `;
export const RulesDocument = gql`
    query Rules {
  groupRuleAddeds {
    id
    transactionHash
    blockNumber
    blockTimestamp
    rule_enabled
    rule_groups
    rule_operator
    rule_validityPeriod
  }
  numberThresholdRuleAddeds {
    id
    transactionHash
    blockNumber
    blockTimestamp
    rule_enabled
    rule_validityPeriod
    rule_operator
    rule_numberThreshold
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
    verifications(variables?: VerificationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<VerificationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<VerificationsQuery>(VerificationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'verifications', 'query');
    },
    revocations(variables?: RevocationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RevocationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RevocationsQuery>(RevocationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'revocations', 'query');
    },
    Rules(variables?: RulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RulesQuery>(RulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Rules', 'query');
    },
    SubgraphMetadata(variables?: SubgraphMetadataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubgraphMetadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubgraphMetadataQuery>(SubgraphMetadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SubgraphMetadata', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;