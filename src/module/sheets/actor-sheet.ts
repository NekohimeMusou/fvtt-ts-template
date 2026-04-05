import { DEMO } from "../config/types";
import ApplicationV2 = foundry.applications.api.ApplicationV2;
import ActorSheetV2 = foundry.applications.sheets.ActorSheetV2;
import HandlebarsApplicationMixin = foundry.applications.api.HandlebarsApplicationMixin;
import type DemoActor from "../documents/actor";
import type { DeepPartial } from "fvtt-types/utils";

export default class DemoPcSheet<
  RenderContext extends ActorSheetContext = ActorSheetContext,
  RenderOptions extends AppRenderOptions = AppRenderOptions,
> extends HandlebarsApplicationMixin(ActorSheetV2)<RenderContext> {
  /** {@inheritdoc} */
  static override DEFAULT_OPTIONS = {
    classes: ["demo", "sheet", "actor", "pc"],
    positions: {
      width: 600,
      height: 800,
    },
    form: {
      submitOnChange: true,
    },
  };

  /** {@inheritdoc} */
  static override PARTS = {
    header: {
      template: "systems/demo/templates/sheets/actor/header.hbs",
    },
    tabs: { template: "templates/generic/tab-navigation.hbs" },
    main: {
      template: "systems/demo/templates/sheets/actor/tabs/main/main.hbs",
      templates: ["systems/demo/templates/sheets/actor/tabs/main/stats.hbs"],
      scrollable: [""],
    },
    description: {
      template: "systems/demo/templates/sheets/actor/tabs/description.hbs",
      scrollable: [""],
    },
  };

  /** {@inheritdoc} */
  static override TABS = {
    primary: {
      tabs: [{ id: "main" }, { id: "description" }],
      labelPrefix: "DEMO.tab",
      initial: "main",
    },
  };

  protected override async _prepareContext(
    options: DeepPartial<RenderOptions> & { isFirstRender: boolean },
  ) {
    return {
      ...(await super._prepareContext(options)),
      DEMO,
      user: game.user,
      actor: this.actor,
      system: this.actor.system,
      tabs: this._prepareTabs("primary"),
      isEditable: this.isEditable,
      enrichedDescription: this.#enrichHTML(this.actor.system.description),
    };
  }

  // This method is *always* async
  // eslint-disable-next-line @typescript-eslint/require-await
  protected override async _preparePartContext(
    partId: string,
    context: RenderContext,
    _options: DeepPartial<RenderOptions>,
  ) {
    context.tab = context.tabs?.[partId];

    return context;
  }

  async #enrichHTML(html: string) {
    const { TextEditor } = foundry.applications.ux;

    return await TextEditor.enrichHTML(html, {
      secrets: this.actor.isOwner,
      rollData: this.actor.getRollData(),
      relativeTo: this.actor,
    });
  }
}

interface _RenderContext
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

interface AppRenderOptions
  extends
    ApplicationV2.RenderOptions,
    HandlebarsApplicationMixin.RenderOptions {}

interface ActorSheetContext extends ActorSheetV2.RenderContext, _RenderContext {
  actor: DemoActor;
  system: DemoActor["system"];
  enrichedDescription: string;
}
