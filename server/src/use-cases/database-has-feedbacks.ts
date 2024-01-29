import { Request, Response } from 'express';
import { DatabaseHasFeedbacksService } from '../services/DatabaseHasFeedbacksService';

class DatabaseHasFeedbacks {
  async handle(request: Request, response: Response) {
    // const service = new DatabaseHasFeedbacksService();

    // const result = await service.execute();
    // return response.json(result);

    try {
      const service = new DatabaseHasFeedbacksService();
      const result = await service.execute();
  
      if (result === true) {
        return response.status(200).json({ message: "Connected to database. Found data." });
      } else {
        return response.status(200).json({ message: "Connected to database. Data no found." });
      }
   } catch (error) {
      console.error(error);
      return response.status(500).json({ message: "An error occurred while processing your request." });
   }
  }
}

export { DatabaseHasFeedbacks }