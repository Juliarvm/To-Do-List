# To-Do-List

Este é um projeto de To-Do List feito com React e configurado usando o Vite. Ele permite adicionar, remover, marcar tarefas como concluídas e avaliar tarefas pelo nível de importância. A aplicação também possui funcionalidades de busca, filtros e opções de ordenação para facilitar o gerenciamento das tarefas.

## Tecnologias Utilizadas
- React.js: Biblioteca para construir a interface de usuário interativa.
- Vite: Ferramenta de construção rápida e configuração para projetos React.
- CSS: Estilização da interface.

## Funcionalidades
- Adicionar tarefas: Permite criar novas tarefas com a descrição e categoria.
- Remover tarefas: Permite remover tarefas da lista.
- Marcar tarefas como concluídas: Possibilita alternar o estado de uma tarefa entre concluída e pendente.
- Filtrar tarefas: Filtra as tarefas por estado (todas, concluídas ou pendentes).
- Buscar tarefas: Filtro de pesquisa para encontrar tarefas pela descrição.
- Ordenação de tarefas: Organiza as tarefas em ordem alfabética crescente ou decrescente e também por nível de importância, alto ou baixo.
- Gerenciamento de categorias: Adiciona, remove e exibe categorias para organizar as tarefas. As categorias e tarefas são armazenadas no `localStorage`.


## Instruções para Executar o Sistema
1. Clone o repositório para o seu ambiente local
2. Navegue até a pasta do projeto
3. Instale as dependências: npm install
4. Inicie o servidor de desenvolvimento: npm run dev
5. Acesse o sistema em seu navegador: http://localhost:3000

## Decisões de Projeto
- Utilizou-se React.js para o desenvolvimento do front-end da aplicação.
- Uso do Vite para inicializar o projeto devido à sua rapidez e simplicidade de configuração.
- A estilização foi feita principalmente com CSS, utilizando classes para cada componente.
- Uso de localStorage para armazenar as tarefas e categorias no navegador, permitindo persistência de dados mesmo após recarregar a página.