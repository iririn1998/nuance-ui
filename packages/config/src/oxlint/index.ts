import { defineConfig, type OxlintConfig } from "oxlint";

/**
 * Base oxlint configuration for nuance-ui packages.
 * Targets React + TypeScript component library development.
 */
const baseConfig: OxlintConfig = defineConfig({
  plugins: ["typescript", "react", "import"],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    /**
     * typescript rules
     */
    // disallows explicit use of the any type.
    "typescript/no-explicit-any": "warn",
    // disallows unsafe type assertions that narrow a type.
    "typescript/consistent-type-imports": "error",
    // Disallow certain types in boolean expressions.
    "typescript/strict-boolean-expressions": "error",
    // this rule requires both operands of addition to be the same type and be number, string, or any.
    "typescript/restrict-plus-operands": "error",
    // require template literals instead of string concatenation.
    "prefer-template": "error",
    // this rule requires switch statements to be exhaustive when switching on union types.
    "typescript/switch-exhaustiveness-check": "error",
    // enforces a maximum depth for nested JSX elements and fragments.
    "react/jsx-max-depth": ["error", { max: 4 }],
    
    /**
     * react rules
     */
    // enforce key prop for elements in array
    "react/jsx-key": "error",
    // disallows shorthand type conversions using operators like !!, +, ""+ , etc.
    "no-implicit-coercion": "error",
    // enforces that React components have a displayName property.
    "react/display-name": "error",
    // verifies the list of dependencies for Hooks like useEffect and similar.
    "react/exhaustive-deps": "error",
    // enforce a consistent boolean attribute style in your code.
    "react/jsx-boolean-value": "error",

    /**
     * import rules
     */
    // ensures that there is no resolvable path back to this module via its dependencies.
    "import/no-cycle": "error"
  },
  ignorePatterns: ["dist/**", "node_modules/**", "*.config.*", "*.setup.*"],
});

export default baseConfig;
