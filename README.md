# MOTRIX (Back-end)

Projeto para processo seletivo da Motrix.

## 🚀 Começando

Siga as instruções abaixo para a execução do projeto.

### 🔧 Instalação

1 -
  Faça um fork do projeto clicando no botão 'Fork' na parte superior direita do seu github.

2 -
   Faça um clone do projeto copiando o link SSH ou HTTPS disponivel no seu fork e rodando o seguinte comando no seu terminal:
   ```
   git clone 'seu link SSH ou HTTPS'
   ```
3 -
  Entre no arquivo e instale as dependencias necessarias:
  ```
   cd Motrix-Backend
  ```
   ```
   npm install
  ```
  ou
   ```
   yarn install
  ```

## ⚙️ Variáveis de ambiente

Para você executar o projeto em ambiente de desenvolvimento, você precisa configurar as seguintes variáveis de ambiente para se conectar ao seu banco de dados:


Crie um arquivo com o seguinte nome ".env", e dentro dele configure as seguintes variáveis:
```
DB_USERNAME=seu db userName aqui...(root)
DB_PASSWORD=a senha do seu db aqui...
DB_NAME=o nome do seu db aqui...
DB_HOST=o host do seu db aqui...
```
## 📦 Desenvolvimento

Para rodar o projeto em modo de desenvolvimento você precisa ter todas as dependências instaladas.
Caso não tenha feito, rode o seguinte comando:

```
npm install
```
ou
```
yarn install
```
Com as dependências instaladas, basta apenas rodar o seguinte comando para rodar o projeto:
```
npm run dev
```
ou 
```
yarn run dev
```
Após o comando, o App vai estar rodando na porta 3000 do seu localhost.
Para acessa-lo basta colando o seguinte link na URL do seu navegador:
```
http://localhost:3000/
```
Certifique-se de que não há nenhuma mais nenhuma aplicação rodando na porta 3000 para rodar o projeto!
## 🛠️ Construído com

O projeto foi desenvolvido com as seguintes ferramentas:

* [TypeScript](https://www.typescriptlang.org/)
* [NodeJs](https://nodejs.org/en/)
* [Sequelize](https://sequelize.org/)
* [Docker](https://www.docker.com/)
* [Heroku](https://dashboard.heroku.com/)
* [Eslint](https://eslint.org/)
* [MySQL](https://www.mysql.com/)
* [JavaScript](https://www.javascript.com/)

## 📌 Versão

[Git](https://git-scm.com/) - para controle de versão.

## 🚀 Deploy
O deploy do projeto foi realizado utililizando:
* [Heroku](https://dashboard.heroku.com/)

## 📌 Rotas

* SUBJECT ROUTES: [list all subjects] - GET https://motrix-backend.herokuapp.com/subject;
* SUBJECT ROUTES: [list subject by id] - GET https://motrix-backend.herokuapp.com/subject/:id;
* SUBJECT ROUTES: [create a new subject] - POST https://motrix-backend.herokuapp.com/subject;
* SUBJECT ROUTES: [update a subject] - PUT https://motrix-backend.herokuapp.com/subject/:id;
* SUBJECT ROUTES: [delete a subject] - DELETE https://motrix-backend.herokuapp.com/subject/:id;


---
