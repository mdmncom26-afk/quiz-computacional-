import { loadQuestions } from "./data.js";
import {
  advance,
  cancelRestart,
  confirmAnswer,
  createAttempt,
  getCurrentQuestion,
  getScore,
  requestRestart,
  restart,
  selectAlternative
} from "./quiz.js";

const app = document.querySelector("#app");
let state;
let message = "";

function focusMainContent() {
  requestAnimationFrame(() => app.querySelector("[data-focus]")?.focus());
}

function showError(error) {
  app.setAttribute("aria-busy", "false");
  app.innerHTML = `<section aria-labelledby="error-title"><h2 id="error-title" tabindex="-1" data-focus>Não foi possível iniciar o quiz</h2><p class="message error">${error.message}</p><p>Verifique o arquivo de questões e recarregue a página.</p></section>`;
  focusMainContent();
}

function renderQuestion() {
  const question = getCurrentQuestion(state);
  const isFeedback = state.status === "feedback";
  const selected = question.alternatives.find((item) => item.id === state.selectedAlternativeId);
  const correct = question.alternatives.find((item) => item.isCorrect);

  app.innerHTML = `
    <section aria-labelledby="question-title">
      <p class="progress">Questão ${state.currentQuestionIndex + 1} de ${state.questions.length}</p>
      <h2 id="question-title" class="question-title" tabindex="-1" data-focus>${question.statement}</h2>
      <fieldset ${isFeedback ? "disabled" : ""}>
        <legend>Escolha uma alternativa</legend>
        <div class="alternatives">
          ${question.alternatives.map((alternative) => `
            <label class="alternative">
              <input type="radio" name="alternative" value="${alternative.id}" ${alternative.id === state.selectedAlternativeId ? "checked" : ""} />
              <span>${alternative.text}</span>
            </label>`).join("")}
        </div>
      </fieldset>
      ${message ? `<p class="message error" role="alert">${message}</p>` : ""}
      ${isFeedback ? `
        <div class="message ${selected.isCorrect ? "success" : "incorrect"}" role="status">
          <strong>${selected.isCorrect ? "Resposta correta!" : "Resposta incorreta."}</strong>
          <p class="feedback-detail">A resposta correta é: ${correct.text}.</p>
        </div>
        <div class="actions"><button class="primary" id="next-button">${state.currentQuestionIndex === state.questions.length - 1 ? "Ver resultado" : "Próxima questão"}</button></div>` :
        `<div class="actions"><button class="primary" id="confirm-button">Confirmar resposta</button></div>`}
    </section>`;

  app.querySelectorAll('input[name="alternative"]').forEach((input) => {
    input.addEventListener("change", (event) => {
      state = selectAlternative(state, event.target.value);
      message = "";
      renderQuestion();
    });
  });

  if (isFeedback) {
    app.querySelector("#next-button").addEventListener("click", () => {
      state = advance(state);
      message = "";
      render();
    });
  } else {
    app.querySelector("#confirm-button").addEventListener("click", () => {
      try {
        state = confirmAnswer(state);
        message = "";
      } catch (error) {
        message = error.message;
      }
      renderQuestion();
    });
  }
  focusMainContent();
}

function renderResult() {
  const score = getScore(state);
  app.innerHTML = `
    <section aria-labelledby="result-title">
      <p class="progress">Quiz concluído</p>
      <h2 id="result-title" class="question-title" tabindex="-1" data-focus>Seu resultado</h2>
      <ul class="result-list">
        <li><span>Acertos</span><strong>${score.correct}</strong></li>
        <li><span>Erros</span><strong>${score.incorrect}</strong></li>
        <li><span>Percentual de acertos</span><strong>${score.percentage}%</strong></li>
      </ul>
      <div class="actions"><button class="primary" id="restart-button">Reiniciar quiz</button></div>
    </section>`;
  app.querySelector("#restart-button").addEventListener("click", () => {
    state = requestRestart(state);
    render();
  });
  focusMainContent();
}

function renderRestartConfirmation() {
  app.innerHTML = `
    <section class="dialog-card" role="dialog" aria-modal="true" aria-labelledby="restart-title">
      <h2 id="restart-title" tabindex="-1" data-focus>Reiniciar o quiz?</h2>
      <p>Seu resultado atual será apagado e uma nova tentativa começará pela primeira questão.</p>
      <div class="actions">
        <button class="secondary" id="cancel-restart">Cancelar</button>
        <button class="primary" id="confirm-restart">Sim, reiniciar</button>
      </div>
    </section>`;
  app.querySelector("#cancel-restart").addEventListener("click", () => {
    state = cancelRestart(state);
    render();
  });
  app.querySelector("#confirm-restart").addEventListener("click", () => {
    state = restart(state);
    render();
  });
  focusMainContent();
}

function render() {
  app.setAttribute("aria-busy", "false");
  if (state.status === "answering" || state.status === "feedback") renderQuestion();
  if (state.status === "result") renderResult();
  if (state.status === "restart-confirmation") renderRestartConfirmation();
}

async function start() {
  const startedAt = performance.now();
  try {
    state = createAttempt(await loadQuestions());
    render();
    if (performance.now() - startedAt > 1000) console.warn("O carregamento inicial excedeu 1 segundo.");
  } catch (error) {
    showError(error);
  }
}

start();
