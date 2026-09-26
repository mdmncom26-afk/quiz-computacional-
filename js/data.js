export function validateQuestions(questions) {
  if (!Array.isArray(questions) || questions.length !== 10) {
    throw new Error("O quiz precisa ter exatamente dez questões válidas.");
  }

  const questionIds = new Set();
  questions.forEach((question, index) => {
    if (!question || typeof question.id !== "string" || !question.id.trim() || questionIds.has(question.id)) {
      throw new Error(`A questão ${index + 1} possui um identificador inválido.`);
    }
    questionIds.add(question.id);

    if (typeof question.statement !== "string" || !question.statement.trim()) {
      throw new Error(`A questão ${index + 1} não possui enunciado válido.`);
    }
    if (!Array.isArray(question.alternatives) || question.alternatives.length !== 4) {
      throw new Error(`A questão ${index + 1} precisa ter exatamente quatro alternativas.`);
    }

    const alternativeIds = new Set();
    let correctCount = 0;
    question.alternatives.forEach((alternative) => {
      if (!alternative || typeof alternative.id !== "string" || !alternative.id.trim() || alternativeIds.has(alternative.id)) {
        throw new Error(`A questão ${index + 1} possui alternativa com identificador inválido.`);
      }
      alternativeIds.add(alternative.id);
      if (typeof alternative.text !== "string" || !alternative.text.trim() || typeof alternative.isCorrect !== "boolean") {
        throw new Error(`A questão ${index + 1} possui alternativa inválida.`);
      }
      if (alternative.isCorrect) correctCount += 1;
    });

    if (correctCount !== 1) {
      throw new Error(`A questão ${index + 1} precisa ter uma única alternativa correta.`);
    }
  });

  return questions;
}

export async function loadQuestions(url = "data/questions.json") {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Não foi possível carregar as questões do quiz.");
  return validateQuestions(await response.json());
}
