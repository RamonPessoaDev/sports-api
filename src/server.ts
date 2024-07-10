import { fastify } from "fastify";
import { env } from "./env";
import { activitiesRoutes } from "./routes/activities";

const app = fastify();

app.register(activitiesRoutes, {
  prefix: "/activities",
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server running at http://localhost:${env.PORT}/`);
  });
