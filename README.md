# 🛡️ CyberLibrary - JavaScript Puro

[🔗 Acesse o Projeto](https://gabrielmz719.github.io/biblioteca-ciberseguranca/)

**CyberLibrary** é uma aplicação web simples e elegante para **gerenciamento de livros**, construída com **JavaScript, HTML e CSS puro**. Ela permite ao usuário **adicionar, visualizar, marcar como lido e deletar livros** de forma dinâmica, utilizando uma interface moderna e intuitiva.

---

## 🚀 Funcionalidades

- **Adicionar livros** com título, autor, número de páginas e status de leitura.  
- **Visualizar livros** em cards interativos e estilizados.  
- **Marcar livros como lidos** com apenas um clique.  
- **Deletar livros** de maneira prática e rápida.  
- **Formulário em modal** para adicionar livros de forma intuitiva e moderna.

---

## ⚙️ Tecnologias Utilizadas

- **JavaScript**: lógica de criação de livros, manipulação do DOM e eventos.  
- **HTML5**: estrutura da página e elementos de formulário.  
- **CSS3**: estilização dos cards e modal, criando uma interface atraente.  
- **Web APIs**:  
  - `crypto.randomUUID()` para gerar IDs únicos para cada livro.  
  - `<dialog>` para a implementação do modal interativo.

---

## 📂 Estrutura do Projeto

```text
myLibrary (array) → armazena os livros
Book (constructor) → cria objetos Book com id, title, author, pages, read
addBookToLibrary() → adiciona livros ao array
displayBook() → renderiza os cards e configura os botões
Book.prototype.toggleRead() → altera status de leitura
Event Listeners → Delete e Read nos cards, modal (Update, Cancel, Confirm)

📝 Como Usar

Abra o arquivo index.html no seu navegador.

Clique em Adicionar Livro para abrir o formulário.

Preencha os campos obrigatórios e selecione o status de leitura.

Clique em Confirmar para adicionar o livro à biblioteca.

Utilize os botões Read e Delete nos cards para gerenciar seus livros.

💡 Exemplo de Inicialização
addBookToLibrary('Sistemas Operacionais Modernos', 'Andrew S. Tanenbaum', 864, 'Lido');
addBookToLibrary('Caça a Bugs no Mundo Real', 'Pedro Yaworski', 264, 'Não Lido');
addBookToLibrary('Redes de Computadores', 'Andrew S. Tanenbaum', 624, 'Não Lido');

displayBook();

🌟 Diferenciais

Interface moderna e interativa que atualiza em tempo real.

Uso de protótipos em JavaScript para gerenciamento eficiente de objetos.

Modal intuitivo que melhora a experiência do usuário.

Sistema leve e sem dependências externas, fácil de manter e entender.

🔮 Possíveis Melhorias Futuras

Implementar localStorage para persistência dos livros entre sessões.

Adicionar edição de informações dos livros cadastrados.

Criar filtros e buscas por título, autor ou status.

Tornar a interface responsiva para dispositivos móveis.

