import 'dotenv/config';
import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();
//GET = Buscar informações
//POST = Cadastrar informações
//PUT = Atualizar informações de uma entidade
//PATCH = Atualizar uma informação única de uma entidade
//DELETE = Deletar uma informação

app.use(
  cors({
    origin: process.env.APP_URL,
  })
); // controle de segurança do backend
app.use(express.json());
app.use(routes);


const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log("HTTP server running on port " + port);
});
