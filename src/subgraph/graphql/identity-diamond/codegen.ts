import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api.thegraph.com/subgraphs/name/nexeraprotocol/identity-diamond-mumbai",
  documents: "./src/subgraph/graphql/identity-diamond/**/*.graphql",
  generates: {
    "./src/subgraph/graphql/identity-diamond/generated/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
