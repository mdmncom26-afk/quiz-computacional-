# Tarefas: Quiz Computacional

**Entrada**: Artefatos de design em `specs/001-quiz-computacional/`

**Pré-requisitos**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md),
[data-model.md](data-model.md), [contrato de interações](contracts/ui-interactions.md) e
[quickstart.md](quickstart.md).

**Testes**: Incluídos em uma página HTML nativa para a lógica de integridade das questões, estado e
pontuação, conforme o plano e a constituição. A validação manual de interface segue o quickstart.

**Organização**: Tarefas agrupadas por história de usuário para permitir entregas incrementais.

## Formato: `[ID] [P?] [História] Descrição`

- **[P]**: pode ser executada em paralelo, pois altera arquivos distintos e não depende de tarefa
  incompleta.
- **[USn]**: vincula a tarefa a uma história de usuário.

## Fase 1: Preparação

**Objetivo**: Criar a estrutura estática da aplicação, sem dependências externas.

- [X] T001 Criar a estrutura de diretórios `css/`, `js/`, `data/` e `tests/` na raiz do projeto.
- [X] T002 [P] Criar a estrutura semântica e as regiões de questão, feedback, resultado e diálogo
  de reinício em `index.html`.
- [X] T003 [P] Criar tokens visuais, layout de página e estilos-base em `css/styles.css`.

---

## Fase 2: Fundação Compartilhada

**Objetivo**: Disponibilizar conteúdo validado e pontos de integração para todas as histórias.

**⚠️ CRÍTICO**: Esta fase deve terminar antes das histórias de usuário.

- [X] T004 Criar exatamente dez questões de Computação em `data/questions.json`, cada uma com
  `id` único, `statement` não vazio, quatro alternativas com `id` e `text` não vazios e uma única
  alternativa com `isCorrect: true`.
- [X] T005 Implementar carregamento e validação do JSON em `js/data.js`, rejeitando conteúdo que
  não tenha exatamente dez questões, quatro alternativas por questão e uma única correta.
- [X] T006 Configurar o carregamento dos módulos e a inicialização segura da aplicação em
  `js/app.js`, incluindo uma mensagem amigável para falha de conteúdo.

**Checkpoint**: Conteúdo local validado e interface pronta para receber o fluxo do quiz.

---

## Fase 3: História de Usuário 1 — Responder questões do quiz (Prioridade: P1) 🎯 MVP

**Objetivo**: Permitir responder uma questão por vez, confirmar a escolha e receber feedback
imediato.

**Teste independente**: iniciar o quiz, selecionar e trocar uma alternativa, confirmar a resposta,
receber feedback e avançar sem possibilidade de retornar ou alterar uma resposta anterior.

- [X] T007 [P] [US1] Criar a página de testes nativa para validação de questões, confirmação
  imutável e transições `answering`/`feedback` em `tests/quiz.test.html`.
- [X] T008 [US1] Implementar o estado da tentativa em `js/quiz.js` com `currentQuestionIndex` de
  0 a 9, `selectedAlternativeId`, `confirmedAnswers` imutáveis e estados `answering` e `feedback`.
- [X] T009 [US1] Implementar em `js/quiz.js` a seleção substituível antes da confirmação, a
  confirmação obrigatória de uma alternativa e o registro de uma resposta por questão.
- [X] T010 [US1] Implementar a renderização de enunciado, quatro alternativas, erro de seleção e
  feedback textual de correta/incorreta em `js/app.js`.
- [X] T011 [US1] Conectar confirmação e avanço em `js/app.js`, bloqueando alteração após confirmar
  e impedindo retorno a questões anteriores.

**Checkpoint**: A história P1 funciona de forma independente com uma questão por vez, quatro
alternativas, confirmação e feedback.

---

## Fase 4: História de Usuário 2 — Consultar resultado final (Prioridade: P2)

**Objetivo**: Apresentar automaticamente o desempenho após a décima resposta confirmada.

**Teste independente**: concluir as dez questões com respostas conhecidas e conferir que acertos,
erros e percentual inteiro arredondado são coerentes e totalizam dez respostas.

- [X] T012 [P] [US2] Adicionar cenários de pontuação de 0, 7 e 10 acertos, incluindo percentual
  arredondado ao inteiro mais próximo, em `tests/quiz.test.html`.
- [X] T013 [US2] Implementar em `js/quiz.js` o cálculo automático de acertos, erros e
  `Math.round(acertos / 10 * 100)` após a décima resposta confirmada.
- [X] T014 [US2] Implementar o estado `result` e a transição da décima questão em `js/quiz.js`.
- [X] T015 [US2] Renderizar em `js/app.js` o resumo final com quantidade de acertos, quantidade de
  erros e percentual inteiro de acertos.

**Checkpoint**: A história P2 exibe um resultado correto ao fim das dez respostas.

---

## Fase 5: História de Usuário 3 — Reiniciar tentativa (Prioridade: P3)

**Objetivo**: Permitir uma nova tentativa somente após confirmação, preservando o resultado ao
cancelar.

**Teste independente**: ao ver o resultado, solicitar reinício, cancelar e preservar o resultado;
solicitar novamente, confirmar e voltar à primeira questão com contadores zerados.

- [X] T016 [P] [US3] Adicionar cenários de cancelamento e confirmação de reinício em
  `tests/quiz.test.html`.
- [X] T017 [US3] Implementar em `js/quiz.js` os estados `restart-confirmation` e `result`, com
  transições de solicitar, cancelar e confirmar reinício.
- [X] T018 [US3] Implementar em `js/quiz.js` a criação de uma nova tentativa com índice inicial,
  seleção vazia e respostas confirmadas zeradas.
- [X] T019 [US3] Renderizar em `js/app.js` a confirmação de reinício e conectar suas ações de
  cancelar e confirmar.

**Checkpoint**: A história P3 reinicia sem cadastro e sem preservar resultados anteriores.

---

## Fase 6: Polimento e Aspectos Transversais

**Objetivo**: Garantir usabilidade, responsividade e critérios objetivos do projeto completo.

- [X] T020 [P] Aplicar em `css/styles.css` regras responsivas para desktop e smartphone, mantendo
  controles legíveis e sem rolagem horizontal.
- [X] T021 [P] Aplicar em `index.html` e `js/app.js` rótulos de alternativas, foco visível e foco
  direcionado ao conteúdo principal após questão, feedback, resultado e confirmação.
- [X] T022 Revisar a validação de dados e as mensagens em `js/data.js` e `js/app.js` para que os
  erros de conteúdo sejam claros e não dependam apenas de cor.
- [X] T023 Executar os testes de lógica em `tests/quiz.test.html`, medir a primeira questão e cada
  transição contra o limite de um segundo e registrar a validação manual em
  `specs/001-quiz-computacional/quickstart.md`.
- [X] T024 Revisar a implementação contra as regras de qualidade em
  `specs/001-quiz-computacional/checklists/review.md` e documentar pendências encontradas no mesmo
  arquivo.

---

## Dependências e Ordem de Execução

### Dependências das Fases

- **Preparação (Fase 1)**: não possui dependências.
- **Fundação (Fase 2)**: depende da Preparação e bloqueia as histórias.
- **US1 (Fase 3)**: depende da Fundação; é o MVP.
- **US2 (Fase 4)**: depende das respostas confirmadas da US1.
- **US3 (Fase 5)**: depende da tela de resultado da US2.
- **Polimento (Fase 6)**: depende das histórias desejadas concluídas.

### Ordem das Histórias

```text
Preparação → Fundação → US1 (MVP) → US2 → US3 → Polimento
```

## Oportunidades de Paralelismo

- T002 e T003 podem ser realizados em paralelo após T001.
- T007 pode começar após T005, em paralelo com o início de T008.
- T012 pode ser realizado em paralelo com a preparação do estado final em T014.
- T016 pode ser realizado em paralelo com a preparação da interface de reinício em T019.
- T020 e T021 podem ser realizados em paralelo após as telas existirem.

## Estratégia de Implementação

### MVP Primeiro

1. Concluir T001–T006.
2. Concluir T007–T011.
3. Validar a US1 de forma independente: questão única, quatro alternativas, confirmação e
   feedback imediato.

### Entrega Incremental

1. Adicionar US2 para entregar o resultado automático após dez respostas.
2. Adicionar US3 para permitir reinício confirmado.
3. Concluir os requisitos responsivos, de acessibilidade e a validação completa na Fase 6.

## Observações

- Todas as tarefas seguem o formato de checklist com ID, rótulo de história quando aplicável e
  caminho de arquivo explícito.
- Não introduzir frameworks, backend, banco de dados, autenticação ou dependências externas.
