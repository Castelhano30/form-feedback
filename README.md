## Descrição do Projeto

Este é um projeto desenvolvido como parte do aprendizado em React, com foco em entender o processo de desenvolvimento e construção de aplicações modernas. O objetivo principal é criar um site de formulário de feedback utilizando React, Reactstrap e um arquivo JSON para dinamizar as opções do formulário.

---

## Funcionalidades

- **Criação de Layout:**  
  - Estrutura composta por **Header**, **Content** e **Footer**, garantindo uma navegação intuitiva e organizada.
  
- **Importação de Imagem:**  
  -  Banner é importados como imagem para personalizar o visual da aplicação.
  - Utilização de **CSS Modules** para estilização consistente e isolamento de escopo.

- **Criação de Formulário:**  
  - Formulário criado com **Reactstrap** para componentes estilizados e responsivos.
  - Inclusão de um **Combo (Select)** dinâmico, carregado a partir de um arquivo JSON (`feedbackTypes.json`).
  - Tipos de feedback incluem: Elogio, Sugestão e Reclamação.

- **Validação de Formulário:**  
  - Validação de campos obrigatórios (Nome e Mensagem) para garantir dados consistentes.
  - Exibição de mensagens de erro em tempo real, caso algum campo obrigatório não seja preenchido.

---

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface do usuário.
- **Vite**: Ferramenta de build rápida e leve para desenvolvimento React.
- **Reactstrap**: Framework para componentes de UI baseados em Bootstrap.
- **CSS Modules**: Para isolamento e organização de estilos.
- **JSON**: Utilizado para fornecer dinamicamente as opções do combo de feedback.

---

## Como Executar o Projeto

1. **Pré-requisitos:**
   - Node.js (v16 ou superior)
   - npm (gerenciador de pacotes)

2. **Clone o Repositório:**
   ```sh
   git clone https://github.com/seu-usuario/react-feedback-form.git
   cd react-feedback-form


