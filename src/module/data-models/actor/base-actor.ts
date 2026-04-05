export function BaseActorSchema() {
  const { HTMLField } = foundry.data.fields;
  return {
    description: new HTMLField(),
  };
}

/**
 * Abstract class for base data shared by all actors.
 * Actor subtypes (demon, fiend, human) should extend this.
 */
export abstract class BaseActorData<
  Schema extends ReturnType<typeof BaseActorSchema>,
> extends foundry.abstract.TypeDataModel<Schema, Actor.Implementation> {
  static override defineSchema() {
    return BaseActorSchema();
  }
}
