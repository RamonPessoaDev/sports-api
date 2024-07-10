import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table("activities", (table) => {
    table.dropColumn("date");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table("activities", (table) => {
    table.timestamp("date").defaultTo(knex.fn.now());
  });
}
