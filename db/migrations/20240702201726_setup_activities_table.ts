import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("activities", (table) => {
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.text("description").notNullable();
    table.timestamp("date").defaultTo(knex.fn.now());
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("activities");
}
