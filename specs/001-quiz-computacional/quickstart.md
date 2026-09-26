# Guia de Validação Rápida

## Pré-requisitos

- Um navegador atual em desktop ou smartphone.
- Uma forma de servir a pasta do projeto como arquivos estáticos locais. Não há backend nem
  dependência da aplicação; esse passo permite que o navegador carregue `data/questions.json`.

## Execução local

1. Na raiz do projeto, inicie um servidor de arquivos estáticos local disponível no ambiente.
2. Abra no navegador o endereço local mostrado pelo servidor e acesse `index.html`.
3. Não abra o HTML usando `file://`, pois navegadores podem bloquear o carregamento do JSON local.
4. Para os testes automatizados sem dependências, abra `tests/quiz.test.html` pelo mesmo endereço
   local e confirme que todos os resultados são aprovados.

## Cenários de Validação

1. **Estrutura das questões**: inicie o quiz e confirme que há dez questões; em cada uma, confira
   um enunciado e exatamente quatro alternativas.
2. **Seleção e confirmação**: selecione uma alternativa, troque-a antes de confirmar e confirme;
   o feedback de correta ou incorreta deve aparecer e a resposta deve ficar bloqueada.
3. **Navegação**: avance após o feedback; não deve haver ação para retornar a uma questão anterior.
   Tentar avançar ou confirmar sem cumprir a pré-condição deve manter a questão atual e informar o
   que falta.
4. **Pontuação**: conclua usando um conjunto de respostas conhecido. Confira que acertos e erros
   totalizam dez e que o percentual é arredondado ao inteiro mais próximo.
5. **Reinício**: no resultado, solicite reinício. Cancele e confira que o resultado não muda;
   repita, confirme e confira que a primeira questão volta com contadores zerados.
6. **Responsividade**: repita os fluxos principais em uma janela estreita e em uma janela larga;
   não deve haver rolagem horizontal e todos os controles devem permanecer utilizáveis.
7. **Desempenho**: em uma execução local normal, meça o tempo até a primeira questão e entre
   transições de questão; cada resultado deve ser de até um segundo.

## Referências

- [Modelo de dados](data-model.md)
- [Contrato de interações](contracts/ui-interactions.md)
- [Especificação](spec.md)
