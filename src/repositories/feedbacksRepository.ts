export interface FeedbacksCreateData {
  //para criar um novo feedback preciso saber o que?
  type: string;
  comment: string;
  screenshot?: string;
}
// esta interface vai dizer para nossa aplicação para as rotas, quais operações que podemos realizar no banco de dados, mas nao vai implentar
export interface FeedbacksRepository {
  // quais ações que minha aplicação pode fazer com os feedbacks do banco de dados
  create: (data: FeedbacksCreateData) => Promise<void>;
}
