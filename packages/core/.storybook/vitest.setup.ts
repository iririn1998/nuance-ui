import { beforeAll } from "vitest";
import { setProjectAnnotations } from "@storybook/react";
import * as previewAnnotations from "./preview";

/**
 * Storybook インタラクションテスト用のグローバルセットアップ。
 * preview.tsx で定義した decorators / parameters をすべてのテストに適用する。
 */
const annotations = setProjectAnnotations([previewAnnotations]);

beforeAll(annotations.beforeAll);
