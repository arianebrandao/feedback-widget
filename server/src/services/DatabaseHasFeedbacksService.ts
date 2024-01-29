import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

class DatabaseHasFeedbacksService {
  async execute() {
    const feedbacksCount: number = await prismaClient.feedback.count();

    return feedbacksCount > 0;
  }
}

export { DatabaseHasFeedbacksService }