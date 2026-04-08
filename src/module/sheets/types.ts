import type { DEMO } from "../config/types";
import HandlebarsApplicationMixin = foundry.applications.api.HandlebarsApplicationMixin;
import ApplicationV2 = foundry.applications.api.ApplicationV2;

export interface ApplicationRenderContext
  extends
    ApplicationV2.RenderContext,
    HandlebarsApplicationMixin.RenderContext {
  DEMO: typeof DEMO;
  user: User;

  isLimited: boolean;
  isEditable: boolean;
  tab?: ApplicationV2.Tab;
  primaryTabs?: Record<string, ApplicationV2.Tab>;
}

export interface ApplicationRenderOptions
  extends
    ApplicationV2.RenderOptions,
    HandlebarsApplicationMixin.RenderOptions {}
