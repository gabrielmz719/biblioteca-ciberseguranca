 CyberLibrary - JavaScript Puro
 [Link do Projeto](https://gabrielmz719.github.io/biblioteca-ciberseguranca/)


Uma aplicação simples de gerenciamento de livros, feita com JavaScript, HTML e CSS puro. Permite adicionar, visualizar, marcar como lido e deletar livros dinamicamente.

 Funcionalidades

 Adicionar livros com título, autor, páginas e status de leitura.

 Visualizar livros em cards dinâmicos.

 Marcar livros como Lidos com um clique.

 Deletar livros facilmente.

 Formulário em modal para adicionar livros de forma intuitiva.

 Demonstração Visual

Exemplo de interface do projeto:

Modal para adicionar livros:

 Tecnologias Utilizadas

JavaScript: lógica de livros, eventos e DOM.

HTML5: estrutura da página e formulário.

CSS3: estilização de cards e modal.

Web APIs:

crypto.randomUUID() para gerar IDs únicos.

<dialog> para o modal interativo.

 Estrutura do Projeto
myLibrary (array) → armazena os livros
Book (constructor) → cria objetos Book com id, title, author, pages, read
addBookToLibrary() → adiciona livros ao array
displayBook() → renderiza os cards e configura os botões
Book.prototype.toggleRead() → altera status de leitura
Event Listeners → Delete e Read nos cards, modal (Update, Cancel, Confirm)

 Como Usar

Abra index.html no navegador.

Clique em Adicionar Livro.

Preencha os campos do formulário e selecione o status de leitura.

Clique em Confirmar para adicionar o livro.

Use os botões Read e Delete nos cards para gerenciar os livros.

 Exemplo de Inicialização
addBookToLibrary('Sistemas Operacionais Modernos', 'Andrew S. Tanenbaum', 864, 'Lido');
addBookToLibrary('Caça a Bugs no Mundo Real', 'Pedro Yaworski', 264, 'Não Lido');
addBookToLibrary('Redes de Computadores', 'Andrew S. Tanenbaum', 624, 'Não Lido');

displayBook();

 Diferenciais

Interface dinâmica e moderna.

Protótipos em JavaScript para manipulação eficiente de objetos.

Modal intuitivo para adicionar livros.

Sistema leve, sem frameworks ou bibliotecas externas.

 Possíveis Melhorias

Salvar livros com localStorage para persistência entre sessões.

Editar informações de livros existentes.

Filtros e buscas por título, autor ou status.

Melhorar estilização responsiva para dispositivos móveis.

 Estrutura de Arquivos Sugerida
/project-root
│
├─ index.html       # Estrutura da página
├─ style.css        # Estilo dos cards e modal
├─ script.js        # Lógica da biblioteca
└─ README.md        # Este arquivo