# Modelo de Dados: Quiz Computacional

## Questão

Representa um item do arquivo `data/questions.json`.

| Campo | Tipo | Regra |
|---|---|---|
| `id` | texto | Único entre as dez questões. |
| `statement` | texto | Enunciado não vazio, apresentado ao estudante. |
| `alternatives` | lista | Contém exatamente quatro alternativas. |

## Alternativa

Representa uma escolha disponível na questão.

| Campo | Tipo | Regra |
|---|---|---|
| `id` | texto | Único dentro da questão. |
| `text` | texto | Conteúdo não vazio mostrado ao estudante. |
| `isCorrect` | booleano | Exatamente uma alternativa por questão deve ter valor `true`. |

## Resposta Confirmada

Representa a escolha definitiva de uma questão na tentativa atual.

| Campo | Tipo | Regra |
|---|---|---|
| `questionId` | texto | Referencia uma questão válida. |
| `alternativeId` | texto | Referencia uma alternativa da questão. |
| `isCorrect` | booleano | Derivado da alternativa escolhida no momento da confirmação. |

## Tentativa de Quiz

Representa uma execução do quiz, mantida somente em memória.

| Campo | Tipo | Regra |
|---|---|---|
| `currentQuestionIndex` | número inteiro | De 0 a 9 enquanto o quiz estiver em andamento. |
| `selectedAlternativeId` | texto ou vazio | Pode mudar até a confirmação da questão atual. |
| `confirmedAnswers` | lista | Recebe uma resposta por questão; itens anteriores são imutáveis. |
| `status` | enumeração | `answering`, `feedback`, `result` ou `restart-confirmation`. |

## Regras de Validação

1. O carregamento falha de forma amigável se não houver exatamente dez questões válidas.
2. Cada questão deve ter um enunciado, quatro alternativas válidas e uma única correta.
3. A confirmação exige uma alternativa selecionada e cria exatamente uma resposta confirmada para a
   questão atual.
4. A pontuação final usa `acertos = total de respostas corretas`, `erros = 10 - acertos` e
   `percentual = arredondamento(acertos / 10 × 100)`.

## Transições de Estado

```text
answering --confirmar alternativa--> feedback
feedback --avançar (questões 1–9)--> answering
feedback --avançar (questão 10)--> result
result --solicitar reinício--> restart-confirmation
restart-confirmation --cancelar--> result
restart-confirmation --confirmar--> answering (tentativa zerada, questão 1)
```

Não há transição para questões anteriores nem alteração de uma resposta após sua confirmação.
