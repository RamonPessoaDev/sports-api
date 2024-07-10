import { FastifyInstance } from "fastify";
import { z } from "zod";
import { randomUUID } from "node:crypto";
import { knex } from "../database";

export async function activitiesRoutes(app: FastifyInstance) {
  // Buscando todas as atividades
  app.get("/", async () => {
    const activities = await knex("activities").select();

    return { activities };
  });

  // Buscando uma única atividade pelo id
  app.get("/:id", async (req) => {
    const getActivityParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getActivityParamsSchema.parse(req.params);

    const activity = await knex("activities").where("id", id).first();

    return { activity };
  });

  // Cadastrando uma nova atividade no banco
  app.post("/", async (req, rep) => {
    const createActivityBodySchema = z.object({
      name: z.string(),
      description: z.string(),
    });

    const { name, description } = createActivityBodySchema.parse(req.body);

    await knex("activities").insert({
      id: randomUUID(),
      name,
      description,
    });

    return rep.status(201).send();
  });

  // Atualizando uma atividade pelo id
  app.put("/:id", async (req, rep) => {
    const getActivityParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const updateActivityParamsSchema = z.object({
      name: z.string().optional(),
      description: z.string().optional(),
    });

    const { id } = getActivityParamsSchema.parse(req.params);

    const body = req.body;

    if (!body || typeof body !== "object") {
      return rep.status(400).send({
        message:
          "Requisição inválida. Por favor, envie um corpo de requisição válido.",
      });
    }

    const { name, description } = updateActivityParamsSchema.parse(body);

    if (!name && !description) {
      return rep
        .status(400)
        .send({ message: "Nenhum campo foi fornecido para atualização." });
    }

    await knex("activities").where("id", id).update({ name, description });

    return rep.status(200).send({ message: "Activity edited successfully!" });
  });

  // Deletando uma atividade pelo id
  app.delete("/:id", async (req, rep) => {
    const deleteActivityParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = deleteActivityParamsSchema.parse(req.params);

    await knex("activities").where("id", id).delete();

    return rep.status(200).send({ message: "Activity deleted successfully!" });
  });
}
