# SPORTS API

## Project Setup - Configuração do Projeto

#### Executar o comando caso deseje clonar o projeto

##### Abrir o terminal em uma pasta desejada e executar o comando abaixo

```sh
git clone https://github.com/RamonPessoaDev/sports-api
```

#### Executar o comando após clonar o projeto para instalação das dependências

```sh
yarn add
```

##### Ou

```sh
npm i
```

### Compile the project locally - Compilar o projeto localmente

```sh
yarn dev
```

##### Ou

```sh
npm run dev
```

## Endpoints 🧨

### Por padrão ao executar o projeto, ele vai rodar nesta url: `http://localhost:3333/`

## Utilizando a aplicação sem Postman ou Insomnia, será possível apenas visualizar os endpoints:

- `http://localhost:3333/activities`

- `http://localhost:3333/activities/:id`
- Ex: `http://localhost:3333/activities/4bd5e996-fba9-4608-a4a5-4cfda4573547`

## Utilizando o Postman ou Insomnia

1. Ao utilizar algum dos 2, para a criação de uma nova atividade, utilizando o método POST, na rota: `http://localhost:3333/activities` <br> Deverá ser informado os seguintes parâmetros no body:
   `{
"name": "",
"description": ""
}`

2. Editando uma atividade, utilizando o método PUT, na rota: <bR> `http://localhost:3333/activities/:id`<br>
   Ex: `http://localhost:3333/activities/ca1aa7a2-4231-401d-8795-ba6bcb2a72b4`<br>
   Sendo possível editar:
   `{
"name": "",
"description": ""
}`

3. Deletando uma atividade, utilizando o método DELETE (DEL), na rota: `http://localhost:3333/activities/:id`<br>
   Ex: `http://localhost:3333/activities/cc7e9044-c9af-4f72-9e05-2a8a4fc5c1da`<br>

- Obs: Deletando uma atividade, não será mais possível visualizar a mesma na listagem de todas elas

## Principais tecnologias utilizadas

- Nodejs with Fastify 💻
- SQLite ⚡️
- Knex 👓
