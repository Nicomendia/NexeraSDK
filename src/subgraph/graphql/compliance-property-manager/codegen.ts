import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api.thegraph.com/subgraphs/name/nexeraprotocol/compliance-pm-mumbai",
  documents: "./src/graphql/compliance-property-manager/**/*.graphql",
  generates: {
    "./src/graphql/compliance-property-manager/generated/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
