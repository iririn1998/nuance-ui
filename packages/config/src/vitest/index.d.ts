import type { UserConfig } from 'vitest/config';

/**
 * Base vitest configuration for nuance-ui packages.
 */
export declare const baseConfig: UserConfig;

export declare function createVitestConfig(override?: UserConfig): UserConfig;
