import { BaseActorData, BaseActorSchema } from "./base-actor";

function PcDataSchema() {
  const { SchemaField, NumberField } = foundry.data.fields;
  return {
    ...BaseActorSchema(),
    stats: new SchemaField({
      body: new NumberField({ integer: true, min: 1, initial: 1 }),
      mind: new NumberField({ integer: true, min: 1, initial: 1 }),
      soul: new NumberField({ integer: true, min: 1, initial: 1 }),
    }),
  };
}

export default class PcData extends BaseActorData<
  ReturnType<typeof PcDataSchema>
> {
  static override defineSchema() {
    return PcDataSchema();
  }
}
