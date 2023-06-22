import { z } from "zod";

export enum NEXERA_CHAINS {
    ETHEREUM = "1",
    GOERLI = "5",
    POLYGON = "137",
    MUMBAI = "80001",
    AVALANCH = "43114",
    FUJI = "43113",
    ARBITRUM = "42161",
}

export const NEXERA_CHAIN_VALUES = {
    [NEXERA_CHAINS.ETHEREUM]: 1,
    [NEXERA_CHAINS.GOERLI]: 5,
    [NEXERA_CHAINS.POLYGON]: 137,
    [NEXERA_CHAINS.MUMBAI]: 80001,
    [NEXERA_CHAINS.AVALANCH]: 43114,
    [NEXERA_CHAINS.FUJI]: 43113,
} as const;

export const ChainIdSchema = z.preprocess(
    (val) => String(val),
    z
      .enum([NEXERA_CHAINS.FUJI, NEXERA_CHAINS.MUMBAI])
      .describe(
        "a numeric value that identifies the chain of the address. There are many sites that retrieve information on chainIDs such as <a href='https://chainlist.org/'>https://chainlist.org</a>.",
      ),
);

export type ChainId = z.infer<typeof ChainIdSchema>;

export const EnvironmentSchema = z.union([
    z.literal("local"),
    z.literal("dev"),
    z.literal("stage"),
    z.literal("prod"),
  ]);
export type Environment = z.infer<typeof EnvironmentSchema>;

export const isValidAddress = (address: string) => {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(address);
};

export const ChainIdStringSchema = z
    .string()
    .transform((s: string) => ChainIdSchema.parse(Number(s)))
    .describe(
      "a numeric value that identifies the chain of the address. There are many sites that retrieve information on chainIDs such as <a href='https://chainlist.org/'>https://chainlist.org</a>.",
);

export const AddressSchema = z
    .string()
    .refine((value) => isValidAddress(value))
    .transform((value) => value.toLowerCase())
    .describe(
      "a string value that identifies the address of a specific user; this would normally be tied to an EOA that includes the Smart Wallet.",
);

export type Address = z.infer<typeof AddressSchema>;
