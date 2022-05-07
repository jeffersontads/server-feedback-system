import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailerMailAdapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacksRepository";
import express from "express";
export const routes = express.Router();

import { SubmitFeedbackUseCase } from "./use-cases/submitFeedback-use-case";

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  //status 201 é status de criação
  return res.status(201).send();
});
