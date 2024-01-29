import { Request, Response } from 'express';
import { DatabaseHasFeedbacksService } from '../services/DatabaseHasFeedbacksService';

class DatabaseHasFeedbacks {
  async handle(request: Request, response: Response) {
    const service = new DatabaseHasFeedbacksService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { DatabaseHasFeedbacks }