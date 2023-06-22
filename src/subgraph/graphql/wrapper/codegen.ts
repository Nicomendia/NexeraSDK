import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api.thegraph.com/subgraphs/name/nexeraprotocol/wrapper-mumbai",
  documents: "./src/subgraph/graphql/wrapper/**/*.graphql",
  generates: {
    "./src/subgraph/graphql/wrapper/generated/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
