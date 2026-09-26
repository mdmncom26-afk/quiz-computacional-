# Contrato de Interações da Interface

Este contrato define o comportamento observável da aplicação no navegador. Não há API externa.

## Tela de Questão

| Elemento/ação | Pré-condição | Resultado obrigatório |
|---|---|---|
| Exibir questão | Quiz iniciado | Mostra somente uma questão, seu enunciado e quatro alternativas. |
| Selecionar alternativa | Estado `answering` | Marca uma alternativa; outra pode substituí-la antes da confirmação. |
| Confirmar sem seleção | Estado `answering`, nenhuma alternativa | Mantém a questão e informa que uma alternativa deve ser selecionada. |
| Confirmar resposta | Estado `answering`, alternativa selecionada | Registra uma resposta imutável e mostra feedback de correta ou incorreta. |
| Avançar | Estado `feedback` | Exibe a próxima questão ou, na décima, o resultado final. |

## Tela de Resultado

| Elemento/ação | Pré-condição | Resultado obrigatório |
|---|---|---|
| Exibir resultado | Dez respostas confirmadas | Mostra acertos, erros e percentual inteiro arredondado. |
| Solicitar reinício | Estado `result` | Abre confirmação; não altera o resultado ainda. |
| Cancelar reinício | Estado `restart-confirmation` | Retorna ao resultado inalterado. |
| Confirmar reinício | Estado `restart-confirmation` | Zera a tentativa e mostra a primeira questão. |

## Responsividade e Acessibilidade

- Em telas de desktop e smartphone, os controles devem permanecer legíveis e utilizáveis sem
  rolagem horizontal.
- Cada alternativa deve ser selecionável por controle nativo com rótulo textual.
- O feedback deve ser perceptível visualmente e por texto, não apenas por cor.
- Ao mudar de questão, feedback ou resultado, o foco deve ser levado para o conteúdo principal
  correspondente.
