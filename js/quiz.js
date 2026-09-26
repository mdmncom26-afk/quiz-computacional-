export function createAttempt(questions) {
  return {
    questions,
    currentQuestionIndex: 0,
    selectedAlternativeId: null,
    confirmedAnswers: [],
    status: "answering"
  };
}

export function getCurrentQuestion(state) {
  return state.questions[state.currentQuestionIndex];
}

export function selectAlternative(state, alternativeId) {
  if (state.status !== "answering") throw new Error("A resposta desta questão já foi confirmada.");
  const question = getCurrentQuestion(state);
  if (!question.alternatives.some((alternative) => alternative.id === alternativeId)) {
    throw new Error("A alternativa selecionada não existe nesta questão.");
  }
  return { ...state, selectedAlternativeId: alternativeId };
}

export function confirmAnswer(state) {
  if (state.status !== "answering") throw new Error("A resposta desta questão já foi confirmada.");
  if (!state.selectedAlternativeId) throw new Error("Selecione uma alternativa antes de confirmar.");

  const question = getCurrentQuestion(state);
  const alternative = question.alternatives.find((item) => item.id === state.selectedAlternativeId);
  const answer = {
    questionId: question.id,
    alternativeId: alternative.id,
    isCorrect: alternative.isCorrect
  };

  return {
    ...state,
    confirmedAnswers: [...state.confirmedAnswers, answer],
    status: "feedback"
  };
}

export function advance(state) {
  if (state.status !== "feedback") throw new Error("Confirme a resposta antes de avançar.");
  if (state.currentQuestionIndex === state.questions.length - 1) {
    return { ...state, selectedAlternativeId: null, status: "result" };
  }
  return {
    ...state,
    currentQuestionIndex: state.currentQuestionIndex + 1,
    selectedAlternativeId: null,
    status: "answering"
  };
}

export function getScore(state) {
  const correct = state.confirmedAnswers.filter((answer) => answer.isCorrect).length;
  const total = state.questions.length;
  return { correct, incorrect: total - correct, percentage: Math.round((correct / total) * 100) };
}

export function requestRestart(state) {
  if (state.status !== "result") throw new Error("O reinício só está disponível ao fim do quiz.");
  return { ...state, status: "restart-confirmation" };
}

export function cancelRestart(state) {
  if (state.status !== "restart-confirmation") throw new Error("Não há reinício pendente.");
  return { ...state, status: "result" };
}

export function restart(state) {
  if (state.status !== "restart-confirmation") throw new Error("Confirme o reinício antes de criar uma nova tentativa.");
  return createAttempt(state.questions);
}
