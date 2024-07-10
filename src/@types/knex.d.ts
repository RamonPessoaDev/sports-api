// d = definição de tipos
import { Knex } from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    activities: {
      id: string;
      name: string;
      description: string;
      date: string;
      created_at: string;
    };
  }
}
