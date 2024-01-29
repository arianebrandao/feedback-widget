import { Request, Response } from 'express';
import { prisma } from '../prisma';

class CheckConnection {
  async handle(request: Request, response: Response) {
    try {
      await prisma.$connect();
      response.status(200).json({ message: "Successfully connected to the database." });
   } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Failed to connect to the database." });
   }
  }
}

export { CheckConnection }