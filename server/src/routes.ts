import express from "express";
import { SubmitFeedbackUseCase } from "./use-cases/submite-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailMailerAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { DatabaseHasFeedbacks } from "./use-cases/database-has-feedbacks";
import { CheckConnection } from "./use-cases/check-connection";
import { prisma } from "./prisma";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodeMailerMailAdapter = new NodemailMailerAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodeMailerMailAdapter
    );

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });

    return res.status(201).send();
  } catch (error) {
    console.error(error);

    return res.status(500).send();
  }
});

routes.get("/feedbacks/exists", new DatabaseHasFeedbacks().handle);
routes.get("/check-connection", new CheckConnection().handle);
