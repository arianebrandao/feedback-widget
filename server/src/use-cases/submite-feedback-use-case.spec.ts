import { SubmitFeedbackUseCase } from "./submite-feedback-use-case";

// simple exemple
// test('sum 2 + 2', () => {
//     expect(2 + 2).toBe(4);
// })

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

// testar somente caso de uso e não dependências
describe("submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,teste",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });
});

describe("submit feedback", () => {
  it("should not be able to submit a feedback without a type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "Example comment",
        screenshot: "data:image/png;base64,teste",
      })
    ).rejects.toThrow();
  });
});

describe("submit feedback", () => {
  it("should not be able to submit a feedback without a comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,teste",
      })
    ).rejects.toThrow();
  });
});

describe("submit feedback", () => {
  it("should not be able to submit a feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "Exemple test",
        screenshot: "teste.jpg",
      })
    ).rejects.toThrow();
  });
});
