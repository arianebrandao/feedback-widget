import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

class DatabaseHasFeedbacksService {
  async execute() {
    const feedbacksCount = await prismaClient.feedback.count();

    return feedbacksCount;
  }
}

export { DatabaseHasFeedbacksService }