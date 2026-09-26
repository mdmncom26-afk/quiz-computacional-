<!--
Relatório de Impacto da Sincronização
- Alteração de versão: 1.0.0 → 1.0.0
- Princípios modificados: nenhum; tradução para português brasileiro.
- Seções adicionadas: nenhuma.
- Seções removidas: nenhuma.
- Pendências: nenhuma.
-->

# Constituição do Quiz Computacional

## Princípios Fundamentais

### I. Simplicidade Centrada no Estudante
A interface DEVE ser simples, clara e apropriada para estudantes. Cada tela DEVE tornar sua ação
principal evidente, usar linguagem compreensível e evitar complexidade visual ou de interação
desnecessária. Justificativa: a aplicação existe para apoiar a aprendizagem, não para criar
barreiras de navegação.

### II. Código de Fácil Manutenção
O código DEVE ser organizado em unidades coesas, com nomes claros, e permanecer legível para quem
for realizar sua manutenção no futuro. As mudanças DEVEM evitar duplicação quando uma abstração
compartilhada simples for adequada e DEVEM preservar limites claros entre apresentação, dados do
quiz e comportamento de pontuação. Justificativa: a facilidade de manutenção permite a evolução
segura de uma ferramenta educacional.

### III. Integridade das Questões
Cada questão DEVE apresentar exatamente quatro alternativas. Exatamente uma alternativa DEVE ser
marcada como correta; as três restantes DEVEM ser incorretas. Os dados e a validação das questões
DEVEM rejeitar conteúdo que viole qualquer uma dessas regras. Justificativa: um formato de resposta
consistente torna o comportamento do quiz justo e inequívoco.

### IV. Feedback Imediato e Pontuação Automática
Após cada resposta enviada, a aplicação DEVE fornecer feedback indicando se a resposta estava
correta e, quando útil, identificar a alternativa correta. A aplicação DEVE calcular a pontuação
do estudante automaticamente com base nas respostas registradas; usuários NÃO DEVEM inserir nem
ajustar pontuações manualmente. Justificativa: feedback oportuno reforça a aprendizagem e a
pontuação automática preserva a precisão.

### V. Entrega Mínima e Verificável
O projeto DEVE priorizar a solução mais simples que atenda ao requisito declarado e NÃO DEVE
adicionar dependências, salvo quando elas fornecerem benefício claro e necessário. Cada
funcionalidade ou mudança de comportamento DEVE ter testes automatizados ou critérios objetivos de
aceitação que verifiquem seus requisitos. Justificativa: uma superfície menor de dependências e
comportamentos mensuráveis mantém o projeto confiável e fácil de manter.

## Integridade das Questões

O conteúdo das questões DEVE ser representado de forma que as regras de quatro alternativas e uma
única resposta correta possam ser verificadas objetivamente. Um estudante pode selecionar somente
uma alternativa por questão. A pontuação DEVE ser reproduzível a partir das respostas enviadas e
dos gabaritos das questões.

## Fluxo de Desenvolvimento

Antes de uma implementação ser considerada concluída, os colaboradores DEVEM verificar os
critérios objetivos ou testes relevantes. As revisões DEVEM verificar se as mudanças de interface
continuam centradas no estudante, se o código permanece de fácil manutenção, se as regras das
questões são preservadas, se o feedback é exibido após cada resposta e se a pontuação é
automática. Toda dependência proposta DEVE documentar por que recursos nativos ou já existentes no
projeto não atendem à necessidade.

## Governança

Esta constituição prevalece sobre práticas de desenvolvimento conflitantes do Quiz Computacional.
As emendas DEVEM ser documentadas neste arquivo, incluir um Relatório de Impacto da Sincronização
atualizado durante a revisão e ser aprovadas pelos mantenedores do projeto antes de sua adoção. A
conformidade DEVE ser revisada em cada especificação de funcionalidade, plano de implementação e
revisão de mudança.

As versões da constituição seguem o versionamento semântico: MAJOR para mudanças incompatíveis de
governança, MINOR para novos princípios ou ampliação material de orientações obrigatórias e PATCH
para esclarecimentos que não alterem os requisitos. A data de ratificação registra a adoção
inicial; a data da última emenda muda sempre que esta constituição é modificada.

**Versão**: 1.0.0 | **Ratificada em**: 2026-09-25 | **Última emenda**: 2026-09-25
