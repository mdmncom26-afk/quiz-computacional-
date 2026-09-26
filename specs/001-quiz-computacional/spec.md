# Especificação da Funcionalidade: Quiz Computacional

**Ramo da funcionalidade**: `001-quiz-computacional`

**Criada em**: 2026-09-26

**Status**: Rascunho

**Entrada**: Descrição do usuário: "Desenvolver uma aplicação educacional chamada Quiz
Computacional para a prática de conhecimentos básicos de Computação por meio de questões de
múltipla escolha."

## Clarificações

### Sessão 2026-09-26

- P: Antes de confirmar uma resposta, o estudante pode trocar a alternativa selecionada? → R: Pode
  trocar a alternativa livremente até confirmar; após confirmar, fica bloqueada.
- P: Como o percentual de acertos deve ser exibido quando não for um número inteiro? → R: Mostrar
  o percentual como número inteiro, arredondado para o mais próximo.
- P: Depois de confirmar uma resposta, o estudante pode voltar para questões anteriores? → R: Não;
  após confirmar e avançar, só pode seguir para a próxima questão.
- P: Ao selecionar reiniciar na tela de resultado, a nova tentativa deve começar imediatamente ou
  pedir confirmação? → R: Exibir uma confirmação antes de zerar o resultado e iniciar novamente.

## Cenários de Usuário e Testes *(obrigatório)*

### História de Usuário 1 — Responder questões do quiz (Prioridade: P1)

Como estudante, quero iniciar o Quiz Computacional e responder uma questão de cada vez para
praticar conhecimentos básicos de Computação e receber retorno imediato sobre minhas respostas.

**Por que esta prioridade**: responder questões e saber se a resposta está correta é o valor
central da aplicação.

**Teste independente**: pode ser verificada iniciando um quiz, respondendo e confirmando ao menos
uma questão; o estudante recebe feedback antes de prosseguir.

**Cenários de aceitação**:

1. **Dado** que o estudante inicia um novo quiz, **Quando** a primeira questão é exibida,
   **Então** ele vê o enunciado e exatamente quatro alternativas, sem outra questão visível.
2. **Dado** que uma questão está visível, **Quando** o estudante seleciona uma alternativa e
   confirma a resposta, **Então** a aplicação informa se a resposta está correta ou incorreta.
3. **Dado** que o feedback de uma questão confirmada está visível, **Quando** o estudante avança,
   **Então** a próxima questão é apresentada e a resposta anterior não pode mais ser alterada.

---

### História de Usuário 2 — Consultar resultado final (Prioridade: P2)

Como estudante, quero ver meu desempenho ao concluir o quiz para entender meu resultado na
atividade.

**Por que esta prioridade**: o resumo transforma as respostas individuais em uma visão útil do
progresso do estudante.

**Teste independente**: pode ser verificada concluindo as dez questões com um conjunto conhecido
de respostas e conferindo acertos, erros e percentual exibidos.

**Cenários de aceitação**:

1. **Dado** que o estudante confirmou a resposta da décima questão, **Quando** ele conclui o quiz,
   **Então** a aplicação mostra a quantidade de acertos, a quantidade de erros e o percentual de
   acertos.
2. **Dado** que o quiz foi concluído, **Quando** o resultado é exibido, **Então** acertos mais
   erros totalizam dez e o percentual corresponde à proporção de acertos entre as dez questões.

---

### História de Usuário 3 — Reiniciar tentativa (Prioridade: P3)

Como estudante, quero reiniciar o quiz após ver o resultado para fazer uma nova tentativa sem
precisar criar uma conta ou informar dados pessoais.

**Por que esta prioridade**: uma nova tentativa permite prática repetida, mantendo a primeira
versão simples e acessível.

**Teste independente**: pode ser verificada concluindo o quiz, selecionando reiniciar e
confirmando que uma nova tentativa começa sem dados da tentativa anterior.

**Cenários de aceitação**:

1. **Dado** que o resultado final está visível, **Quando** o estudante escolhe reiniciar o quiz,
   **Então** a aplicação pede confirmação antes de descartar o resultado atual.
2. **Dado** que a confirmação de reinício está visível, **Quando** o estudante confirma o reinício,
   **Então** a primeira questão é apresentada novamente e o placar da nova tentativa começa em
   zero.
3. **Dado** que a confirmação de reinício está visível, **Quando** o estudante cancela a ação,
   **Então** o resultado final atual permanece visível e inalterado.
4. **Dado** que o estudante inicia ou reinicia o quiz, **Quando** realiza a atividade,
   **Então** não é solicitado cadastro, autenticação ou qualquer informação de identificação.

### Casos Extremos

- O estudante tenta confirmar uma questão sem selecionar uma alternativa: a aplicação impede a
  confirmação e orienta que uma alternativa deve ser escolhida.
- O estudante tenta avançar antes de confirmar a resposta: a aplicação não avança e mantém a
  questão atual.
- O estudante acerta zero ou dez questões: o resumo mostra, respectivamente, 0% ou 100% de
  acertos, sem resultado inválido.
- O arquivo de questões contém item com número de alternativas diferente de quatro ou número de
  respostas corretas diferente de uma: o quiz não é iniciado e a aplicação exibe uma mensagem
  amigável de conteúdo inválido.

## Requisitos *(obrigatório)*

### Requisitos Funcionais

- **RF-001**: A aplicação DEVE permitir que um estudante inicie o Quiz Computacional sem cadastro
  ou autenticação.
- **RF-002**: Um novo quiz DEVE conter inicialmente exatamente dez questões sobre conhecimentos
  básicos de Computação.
- **RF-003**: A aplicação DEVE exibir uma única questão por vez, contendo um enunciado e
  exatamente quatro alternativas.
- **RF-004**: Cada questão DEVE ter exatamente uma alternativa correta e três alternativas
  incorretas; questões que não atendam a essa regra DEVEM ser rejeitadas.
- **RF-005**: O estudante DEVE poder selecionar somente uma alternativa em cada questão e trocar a
  alternativa selecionada livremente até confirmar a resposta.
- **RF-006**: A aplicação DEVE exigir que o estudante confirme a alternativa selecionada antes de
  registrar a resposta.
- **RF-007**: Após a confirmação, a aplicação DEVE informar claramente se a resposta está correta
  ou incorreta.
- **RF-008**: Após receber o feedback, o estudante DEVE poder avançar para a próxima questão.
- **RF-008a**: Após avançar, a aplicação NÃO DEVE permitir que o estudante retorne a questões
  anteriores durante a mesma tentativa.
- **RF-009**: A aplicação DEVE calcular automaticamente a quantidade de acertos, a quantidade de
  erros e o percentual de acertos usando as respostas confirmadas. O percentual DEVE ser exibido
  como número inteiro arredondado para o valor mais próximo.
- **RF-010**: Após a confirmação de todas as dez respostas, a aplicação DEVE apresentar o resumo
  final com quantidade de acertos, quantidade de erros e percentual de acertos.
- **RF-011**: A aplicação DEVE permitir que o estudante reinicie o quiz a partir do resumo final,
  solicitando confirmação antes de zerar o resultado da tentativa anterior e iniciar uma nova
  tentativa.
- **RF-012**: A primeira versão NÃO DEVE incluir cadastro, autenticação, perfis, armazenamento de
  histórico ou recursos de administração de usuários.

### Entidades Principais

- **Questão**: item de aprendizagem composto por enunciado, quatro alternativas e uma indicação de
  qual alternativa é correta.
- **Alternativa**: possível resposta de uma questão, identificada como correta ou incorreta.
- **Resposta do estudante**: alternativa escolhida e confirmada pelo estudante para uma questão.
- **Tentativa de quiz**: conjunto das dez respostas de uma execução, incluindo contagens e
  percentual calculados automaticamente.

## Critérios de Sucesso *(obrigatório)*

### Resultados Mensuráveis

- **CS-001**: Em uma sessão de teste, 100% das dez questões apresentadas têm exatamente quatro
  alternativas e uma única alternativa correta.
- **CS-002**: Um estudante consegue iniciar, responder e concluir as dez questões sem realizar
  cadastro ou autenticação.
- **CS-003**: Em testes com resultados conhecidos, a quantidade de acertos, erros e o percentual
  final correspondem corretamente às dez respostas confirmadas em 100% dos cenários avaliados.
- **CS-004**: Após cada resposta confirmada, o estudante recebe feedback de correção antes de poder
  avançar para a próxima questão.
- **CS-005**: O estudante consegue reiniciar uma tentativa concluída e retornar à primeira questão
  com contadores de resultado zerados.

## Premissas

- A primeira versão atende estudantes que usam individualmente um dispositivo e não requer a
  preservação de respostas ao encerrar a aplicação.
- As dez questões iniciais e respectivas alternativas serão definidas como conteúdo de
  conhecimentos básicos de Computação durante o planejamento da funcionalidade.
- O percentual de acertos é calculado como acertos divididos por dez e exibido como número inteiro
  arredondado para o valor mais próximo.
- A interface e os textos de feedback serão em português brasileiro.
- Estão fora do escopo da primeira versão: temporizador, níveis de dificuldade, banco de questões
  expansível, classificação entre estudantes e acompanhamento por professores.
