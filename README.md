<p align="center">
  <img alt="NLW Return 2022" src=".github/app.png" width="100%">
</p>

## 🚀 NLW Return Impulse 2022

Esse projeto foi desenvolvido durante o evento [NLW Return Impulse 2022](https://lp.rocketseat.com.br/nlw-return) da RocketSeat.
O objetivo do evento é desenvolver uma aplicação completa, desde o back-end em Node.js, front-end para web em ReactJS,
front-end mobile em React Native.

## App online para testar

App online: [](). Front-end hospedado no [Vercel](https://vercel.com/) e back-end hospedado no [Railway](https://railway.app/).

## Projeto Feedback Widget

Esse é um widget que pode ser usado em qualquer app para coletar feedback (de bug, sugestão ou outros). O usuário escolhe o tipo de feedback, digita o comentário e pode clicar no botão que tira a screenshot automaticamente, então o feedback é enviado para o e-mail configurado no app e salvo no banco de dados.

## Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1102912516166573468/Feedback-Widget). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## Tecnologias Back-End

Esse projeto foi desenvolvido com as seguintes tecnologias no backend:

- [Node.js](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Express](https://expressjs.com)
- [Nodemailer](https://nodemailer.com/about/)
- [Prisma](https://www.prisma.io/)
- [Mailtrap](https://mailtrap.io/)
- [Jest (para rodar testes unitários)](https://jestjs.io/)

## Tecnologias Front-End

Esse projeto foi desenvolvido com as seguintes tecnologias no frontend:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev)
- [Axios](https://axios-http.com)
- [Tailwind CSS](https://tailwindcss.com/)
- [html2canvas (para tirar scrrenshot)](https://github.com/niklasvh/html2canvas)
- [Headless UI (para acessibilidade)](https://headlessui.dev/)
- [Phosphor Icons](https://github.com/phosphor-icons/phosphor-react)

## Como executar

- Clone o repositório
- Configure os dados do Mailtrap em `.env`
- Para iniciar o server, entre na pasta `cd server`
- Instale as dependências com `npm install`
- Configure o banco de dados `sqlite` (server/prisma/schema.prisma) e crie as tabelas com `npx prisma migrate deploy`
- Inicie o servidor com `npm run dev` (deve rodar em [`localhost:3333`](http://localhost:3333))

- Para iniciar o app, entre na pasta `cd web`
- Instale as dependências com `npm install`
- Inicie o app com `npm run dev` (deve rodar em [`localhost:3000`](http://localhost:3000))

## Como testar

## To do
- Tema light/dark
- Melhorar HTML/CSS do e-mail
- Dashboard de feedbacks
  - Autenticação (Firebase/OAuth)
- Validação de campos/erros

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
