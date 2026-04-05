import { DEMO } from "../config/types";
import { ACTORMODELS } from "../data-models/actor-models";
import DemoActor from "../documents/actor";

export function initialize() {
  console.log("DEMO | Initializing Amazing Demo game system");

  CONFIG.DEMO = DEMO;

  game.demo = {
    DemoActor,
  };

  registerDataModels();
  registerDocumentClasses();
  registerHandlebarsHelpers();
}

function registerDataModels() {
  CONFIG.Actor.dataModels = ACTORMODELS;
}

function registerDocumentClasses() {
  CONFIG.Actor.documentClass = DemoActor;
}

function registerHandlebarsHelpers() {
  Handlebars.registerHelper("capitalize", (str: unknown) =>
    typeof str === "string" ? str.toLocaleUpperCase() : "",
  );
}
