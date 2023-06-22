import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api.thegraph.com/subgraphs/name/nexeraprotocol/meta-token-mumbai",
  documents: "./src/subgraph/graphql/mnft/**/*.graphql",
  generates: {
    "./src/subgraph/graphql/mnft/generated/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
