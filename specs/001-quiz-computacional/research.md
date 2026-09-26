# Pesquisa: Quiz Computacional

## Carregamento das questões locais

**Decisão**: manter as questões em `data/questions.json` e carregar o arquivo como recurso
estático no navegador.

**Justificativa**: preserva o conteúdo fora da lógica e da apresentação, facilita revisão das dez
questões e não introduz dependências nem um backend.

**Alternativas consideradas**:

- Embutir questões em JavaScript: rejeitada, pois mistura dados e lógica.
- Usar banco de dados ou API: rejeitada, pois está fora do escopo e adiciona infraestrutura.

**Implicação de execução**: navegadores normalmente restringem o carregamento de JSON por uma página
aberta diretamente via `file://`. A validação e o uso devem servir a pasta do projeto como arquivos
estáticos em um servidor local simples; isso não constitui backend e não requer dependência da
aplicação.

## Organização sem framework

**Decisão**: separar a aplicação em módulos nativos: apresentação (`app.js`), regras (`quiz.js`) e
dados (`data.js`).

**Justificativa**: módulos nativos preservam responsabilidades explícitas e são suficientes para
uma única experiência de quiz.

**Alternativas consideradas**:

- Framework frontend: rejeitado pela restrição do produto e por ser desnecessário para este escopo.
- Um único arquivo JavaScript: rejeitado, pois prejudica a manutenção e a testabilidade.

## Interação responsiva e acessível

**Decisão**: usar HTML semântico, controles nativos de seleção e botões, rótulos associados, foco
visível e CSS com layout fluido para tela estreita e larga.

**Justificativa**: estudantes em smartphones e desktop precisam do mesmo fluxo de confirmação;
controles nativos reduzem complexidade e favorecem acessibilidade básica.

**Alternativas consideradas**:

- Controles visuais customizados sem semântica: rejeitados, por aumentar risco de uso e manutenção.

## Estado e pontuação

**Decisão**: manter em memória a questão atual, alternativa temporariamente selecionada, respostas
confirmadas e estado da tela. Calcular acertos, erros e percentual ao concluir as dez respostas.

**Justificativa**: atende à ausência de histórico e simplifica o reinício. O percentual será
arredondado para o inteiro mais próximo conforme especificação.

**Alternativas consideradas**:

- Persistir resultados no navegador: rejeitado, pois adiciona histórico fora do escopo.
- Permitir revisão de questões: rejeitado, pois contradiz a navegação somente para frente.
