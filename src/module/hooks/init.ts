import { DEMO } from "../config/types";
import { ACTORMODELS } from "../data-models/actor-models";
import DemoActor from "../documents/actor";
import DemoPcSheet from "../sheets/actor-sheet";

export function initialize() {
  console.log("DEMO | Initializing Amazing Demo game system");

  CONFIG.DEMO = DEMO;

  game.demo = {
    DemoActor,
  };

  registerDataModels();
  registerDocumentClasses();
  registerDocumentSheets();
  registerHandlebarsHelpers();
}

function registerDataModels() {
  CONFIG.Actor.dataModels = ACTORMODELS;
}

function registerDocumentClasses() {
  CONFIG.Actor.documentClass = DemoActor;
}

function registerDocumentSheets() {
  const { Actors } = foundry.documents.collections;

  Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2);

  Actors.registerSheet(DEMO.SYSTEM_ID, DemoPcSheet, {
    label: "DEMO.sheets.pc",
    types: ["pc"],
    makeDefault: true,
  });
}

function registerHandlebarsHelpers() {
  Handlebars.registerHelper("capitalize", (str: unknown) =>
    typeof str === "string" ? str.toLocaleUpperCase() : "",
  );
}
