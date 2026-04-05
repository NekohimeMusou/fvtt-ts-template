import type PcData from "../data-models/actor/pc";
import type DemoActor from "../documents/actor";

const SYSTEM_ID = "demo" as const;

const stats = ["body", "mind", "soul"] as const;

export const DEMO = {
  SYSTEM_ID,
  stats,
} as const;

declare module "fvtt-types/configuration" {
  interface SystemNameConfig {
    name: typeof SYSTEM_ID;
  }

  interface CONFIG {
    DEMO: typeof DEMO;
  }

  // Assume we've run the `ready` hook so we can stash things in the `game` object without
  // needing a getGame() type helper function.
  interface AssumeHookRan {
    ready: never;
  }

  // This may need to change depending what we do in the ready hook.
  interface ReadyGame {
    demo: {
      DemoActor: typeof DemoActor;
    };
  }

  interface DataModelConfig {
    Actor: {
      pc: typeof PcData;
    };
  }

  interface DocumentClassConfig {
    Actor: typeof DemoActor<Actor.ConfiguredSubType>;
  }

  interface ConfiguredActor<SubType extends Actor.SubType> {
    document: DemoActor<SubType & Actor.ConfiguredSubType>;
  }
}
