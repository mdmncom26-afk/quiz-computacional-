# Checklist de Revisão de Requisitos: Quiz Computacional

**Objetivo**: Avaliar a completude, clareza, consistência e mensurabilidade dos requisitos do
Quiz Computacional antes da implementação.
**Criada em**: 2026-09-26
**Funcionalidade**: [spec.md](../spec.md), [plan.md](../plan.md) e
[contrato de interações](../contracts/ui-interactions.md)

**Nota**: Esta checklist personalizada avalia a qualidade dos requisitos; não é um roteiro de
testes de implementação.
**Responsabilidade da revisão**: Este é um artefato de revisão de requisitos. Um item só deve ser
marcado como `[x]` quando o revisor concluir que o critério de qualidade foi atendido.
**Significado do marcador**: `[x]` significa que o requisito foi revisado e aprovado quanto à sua
qualidade. Não significa que a implementação está concluída.

## Completude dos Requisitos

- [ ] CHK001 Os requisitos definem todos os dados obrigatórios de uma questão, incluindo a
  unicidade dos identificadores? [Completude, Modelo de Dados §Questão]
- [ ] CHK002 A regra de exatamente quatro alternativas e uma única correta é especificada tanto
  para o conteúdo JSON quanto para o comportamento do quiz? [Consistência, Spec §RF-004, Modelo de
  Dados §Regras de Validação]
- [ ] CHK003 A especificação define qual mensagem ou orientação deve ser apresentada quando não há
  alternativa selecionada? [Completude, Spec §Casos Extremos]
- [ ] CHK004 Os requisitos identificam claramente quais dados da tentativa são temporários e quais
  devem ser descartados ao encerrar a sessão? [Clareza, Spec §Premissas, Modelo de Dados §Tentativa
  de Quiz]
- [ ] CHK005 As restrições de ausência de cadastro, autenticação, histórico, backend e banco de
  dados são completas e não deixam funcionalidades equivalentes implícitas? [Completude, Spec
  §RF-012, Plan §Contexto Técnico]

## Clareza das Interações

- [ ] CHK006 A permissão para trocar uma alternativa antes da confirmação e o bloqueio posterior
  estão descritos sem ambiguidade? [Clareza, Spec §Clarificações, §RF-005–RF-007]
- [ ] CHK007 O momento exato em que uma resposta se torna imutável é consistente entre os cenários,
  requisitos e contrato de interface? [Consistência, Spec §História 1, Contrato §Tela de Questão]
- [ ] CHK008 A navegação somente para frente define de modo inequívoco o que ocorre após o feedback
  da décima questão? [Clareza, Spec §RF-008–RF-010, Contrato §Tela de Questão]
- [ ] CHK009 Os requisitos distinguem claramente a solicitação, o cancelamento e a confirmação do
  reinício? [Clareza, Spec §História 3, §RF-011]
- [ ] CHK010 A exigência de feedback indica se deve haver apenas texto ou também outro sinal que não
  dependa exclusivamente de cor? [Completude, Spec §RF-007, Contrato §Responsividade e
  Acessibilidade]

## Pontuação e Resultados

- [ ] CHK011 A fórmula de acertos, erros e percentual está documentada de forma objetiva e
  consistente com o total fixo de dez questões? [Consistência, Spec §RF-002, §RF-009, Modelo de
  Dados §Regras de Validação]
- [ ] CHK012 A regra de arredondamento do percentual especifica adequadamente o tratamento de
  valores exatamente no meio entre dois inteiros? [Ambiguidade, Spec §RF-009]
- [ ] CHK013 Os requisitos de resultado final definem a apresentação de acertos, erros e percentual
  para todos os extremos de pontuação? [Cobertura, Spec §RF-010, §Casos Extremos]
- [ ] CHK014 Os critérios de sucesso permitem medir o cálculo da pontuação sem depender de uma
  tecnologia específica? [Mensurabilidade, Spec §CS-003]

## Cobertura de Cenários e Exceções

- [ ] CHK015 Os requisitos contemplam uma ação de confirmação repetida depois que a resposta já foi
  registrada? [Lacuna, Spec §RF-006–RF-008]
- [ ] CHK016 Os requisitos definem o comportamento quando o arquivo local de questões está ausente,
  malformado ou não pode ser lido? [Lacuna, Plan §Contexto Técnico, Pesquisa §Carregamento das
  Questões Locais]
- [ ] CHK017 A validação das dez questões define uma mensagem ou estado compreensível para o
  estudante quando o conteúdo é inválido? [Lacuna, Modelo de Dados §Regras de Validação]
- [ ] CHK018 Os requisitos deixam explícito se a ordem das questões deve permanecer fixa ou pode
  variar entre tentativas? [Lacuna, Spec §RF-002, §RF-011]
- [ ] CHK019 O cancelamento do reinício preserva de maneira definida todos os valores exibidos no
  resultado atual? [Clareza, Spec §História 3, Contrato §Tela de Resultado]

## Responsividade e Acessibilidade

- [ ] CHK020 Os requisitos definem critérios objetivos de responsividade além de “desktop e
  smartphone”, como larguras-alvo ou ausência de rolagem horizontal? [Clareza, Plan §Plataforma-alvo,
  Contrato §Responsividade e Acessibilidade]
- [ ] CHK021 A interação por teclado está especificada para seleção de alternativa, confirmação,
  avanço e confirmação de reinício? [Lacuna, Contrato §Responsividade e Acessibilidade]
- [ ] CHK022 Os requisitos definem como o foco deve ser gerenciado nos estados de erro, feedback,
  resultado e confirmação de reinício? [Completude, Contrato §Responsividade e Acessibilidade]
- [ ] CHK023 A linguagem em português brasileiro é aplicada de modo consistente a enunciados,
  alternativas, feedbacks, erros e resultados? [Consistência, Spec §Premissas]

## Restrições, Premissas e Rastreabilidade

- [ ] CHK024 A execução por arquivos estáticos locais explica suficientemente a dependência de um
  servidor local para carregamento do JSON, sem conflitar com a restrição de não haver backend?
  [Clareza, Plan §Restrições, Pesquisa §Carregamento das Questões Locais]
- [ ] CHK025 A separação entre apresentação, dados e lógica define responsabilidades sem criar
  lacunas ou sobreposição entre elas? [Clareza, Plan §Estrutura do Projeto]
- [ ] CHK026 As premissas sobre uso individual e ausência de persistência estão alinhadas ao
  comportamento esperado ao atualizar, fechar ou reabrir o navegador? [Ambiguidade, Spec §Premissas]
- [ ] CHK027 Os critérios de sucesso cobrem as regras obrigatórias da constituição: quatro
  alternativas, uma correta, feedback após resposta e pontuação automática? [Cobertura,
  Constituição §Princípios Fundamentais, Spec §CS-001–CS-004]

## Notas

- Mantenha itens sem marcação quando a especificação ainda exigir esclarecimento, correção ou
  decisão do revisor.
- `$speckit-implement` pode ler o estado desta checklist como um gate, mas não deve alterar seus
  marcadores.
- Registre observações de revisão junto ao item correspondente, quando necessário.
