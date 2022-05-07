import { SubmitFeedbackUseCase } from "./submitFeedback-use-case";

// spy é um jeito de saber se a funcao foi chamada

const createFeedbackSpy = jest.fn();
const createSendEmailSpy = jest.fn();

const create = {
  create: createFeedbackSpy,
};
const send = {
  sendMail: createSendEmailSpy,
};
describe(`Submit feedback`, () => {
  it("Should be able to submit feedback", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(create, send);

    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Please comment",
        screenshot: "data:image/png;base64,6735",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(createSendEmailSpy).toHaveBeenCalled();
  });

  it("Should be able to submit feedback without type", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(create, send);

    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Please comment",
        screenshot: "data:image/png;base64,6735",
      })
    ).rejects.toThrow();
  });
  it("Should be able to submit feedback without comments", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(create, send);

    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,6735",
      })
    ).rejects.toThrow();
  });
  it("Should be able to submit feedback without invalid screenshot", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(create, send);

    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Ta Bugado!",
        screenshot: "teste.jpeg",
      })
    ).rejects.toThrow();
  });
});
