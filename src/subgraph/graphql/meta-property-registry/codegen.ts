import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.thegraph.com/subgraphs/name/krisgrm/meta-property-registry",
  documents: "./src/subgraph/graphql/meta-property-registry/**/*.graphql",
  generates: {
    "./src/subgraph/graphql/meta-property-registry/generated/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
