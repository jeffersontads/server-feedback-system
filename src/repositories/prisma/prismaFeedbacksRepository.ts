import { prisma } from "../../prisma";
import {
  FeedbacksCreateData,
  FeedbacksRepository,
} from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbacksCreateData) {
    //operação de criação do feedbacks
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
