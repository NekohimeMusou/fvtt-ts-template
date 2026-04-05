export default class DemoActor<
  SubType extends Actor.ConfiguredSubType = Actor.ConfiguredSubType,
> extends foundry.documents.Actor<SubType> {}
