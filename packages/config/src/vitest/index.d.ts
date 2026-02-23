import type { UserConfig } from 'vitest/config';

/**
 * Base vitest configuration for nuance-ui packages.
 * Provides sensible defaults for React component testing with happy-dom.
 */
export declare const baseConfig: UserConfig;

export declare function createVitestConfig(override?: UserConfig): UserConfig;
