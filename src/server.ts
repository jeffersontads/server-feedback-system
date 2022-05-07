import { routes } from "./routes";
import express from "express";
import cors from "cors";

const app = express();

app.listen(3333, () => {
  console.log("HTTP server running!");
});
/**
 * TODO:quando executar esta rota quero que o express execute alguma coisa.
 * REQ = request ou requisição é tudo o que vem de info pra mim qndo o usuário vai chamar esta rota
 * RES = resposta que eu vou devolver para este usuario
 */

/**
 * METODOS HTTP
 * GET = Quando vamos buscar infos do backend
 * POST = Quando vamos cadastrar (enviar) informações
 * PUT = Quando vamos atualizar info de uma identidade (atualiza geral varias)
 * PACTH = Aualizar uma informação unica de uma entidade (atualzar uma info unica)
 * DELETE = Deletar uma informação
 */

//falar que ele tem q usar json (middleware) que verifica se a transição esta em JSON pois por padrao express nao trabalha com json
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3001);
