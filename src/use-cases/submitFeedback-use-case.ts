import { SendaEmailData } from "./../adapters/mailAdapter";
import { request } from "https";
import { MailAdapter } from "../adapters/mailAdapter";
import { FeedbacksRepository } from "../repositories/feedbacksRepository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}
  //executa a submissao de uma novo feedback
  async execute(request: SubmitFeedbackUseCaseRequest) {
    //aqui vamos salvar no banco de dados e enviar o email
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required!");
    }
    if (!comment) {
      throw new Error("Comment is required!");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Ivalida screenshot format.");
    }

    await this.feedbacksRepository.create({ type, comment, screenshot });
    await this.mailAdapter.sendMail({
      subject: "Novo Feedback do Site! ",
      body: [
        `<div style="font-size: 1rem; font-family: sans-serif; color: #222;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário:k ${comment}</p>`,
        screenshot ? `<img src="${screenshot}">` : `Sem screenshot!`,
        `</div>`,
      ].join("\n"),
    });
  }
}
