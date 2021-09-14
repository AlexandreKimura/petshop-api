import express from "express";
import { config } from "dotenv";

config();

import ownerRouter from "./routes/owner.route.js";
import animalRouter from "./routes/animal.route.js";
import serviceRouter from "./routes/service.route.js";

const app = express();
app.use(express.json());

app.use("/proprietario", ownerRouter);
app.use("/animal", animalRouter);
app.use("/servico", serviceRouter);

app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => console.log("API Started!"));
