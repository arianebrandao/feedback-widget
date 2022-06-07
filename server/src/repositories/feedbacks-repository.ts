export type FeedbackCreateData = {
  type: string;
  comment: string;
  screenshot?: string;
}

//Contrato
export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
