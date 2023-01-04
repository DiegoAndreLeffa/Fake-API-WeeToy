# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento das API's nos Projetos Front-end.

## Endpoints

Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

### Cadastro

POST /register <br/>
POST /signup <br/>
POST /users

Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password.
Você pode ficar a vontade para adicionar qualquer outra propriedade no corpo do cadastro dos usuários.

### Login

POST /login <br/>
POST /signin

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"

### WeeToys - API

Este é o backend da aplicação WeeToys - Um site pra venda de brinquedos usados e doações!

## EndPoints

A API tem um total de - podendo cadastrar seu perfil, adicionar item para venda, adicionar itens para doação, excluir itens da venda,
excluir item das doações.

O url base da API é

### Rotas que não precisam de autenticação

## Lista de brinquedos

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os brinquedos já cadastrados na plataforma, na API podemos acessar a lista dessa forma: Aqui conseguimos ver os brinquedos.

GET /toys - FORMATO DA RESPOSTA

[
{
"userId": 3,
"name": "violãozinho de madeira",
"price": 20.95,
"img": "https://img.elo7.com.br/product/original/344DDC6/violao-violinha-infantil-brinquedo-musical-viola-infantil.jpg",
"id": 1
},
{
"userId": 3,
"name": "boneca bebê",
"price": 7.8,
"img": "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg",
"id": 2
},
{
"userId": 3,
"name": "brinquedo de encaixar",
"price": 24.79,
"img": "https://cf.shopee.com.br/file/6a3af8111997d46e2452a27a16e4668b",
"id": 3
}
]

Podemos acessar um brinquedo específico utilizando o endpoint:

GET /toys/id - FORMATO DA RESPOSTA
{
"userId": 3,
"name": "violãozinho de madeira",
"price": 20.95,
"img": "https://img.elo7.com.br/product/original/344DDC6/violao-violinha-infantil-brinquedo-musical-viola-infantil.jpg",
"id": 1
}

## Lista de doações

GET /donations - FORMATO DA RESPOSTA
[
{
"userId": 3,
"name": "brinquedo de encaixar",
"img": "https://cf.shopee.com.br/file/6a3af8111997d46e2452a27a16e4668b",
"id": 3
}
]

## Criação de usuário

POST /users - FORMATO DA REQUISIÇÃO

{
"email": "email@email.com",
"password": "123456"
}

Caso dê tudo certo, a resposta será assim:

POST /users - FORMATO DA RESPOSTA

{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbnF1ZWRMUBlbWFpbC5jb20iLCJpYXQiOjE2NzI3NTE0NTMsImV4cCI6MTY3Mjc1NTA1Mywic3ViIjoiMyJ9.lnOinVT_JWGN9znvWqmAmuLJXhBfqY5NTncmvsLlr0",
"user": {
"email": "email@email.com",
"id":
}
}

## Login

POST /login - FORMATO DA REQUISIÇÃO

{
"email": "email@email.com",
"password": "123456"
}

Caso dê tudo certo, a resposta será assim:

{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbnF1ZWRvQGVtYWlsLmNvbSIsImlhdCI6MTY3Mjc2Njk3NSwiZXhwIjoxNjcyNzcwNTc1LCJzdWIiOiIyIn0.5SaUZdzYglSi4THOjJb-eiu7ppX3XChFRbr8UdcreBM",
"user": {
"email": "email@email.com",
"id": 0
}
}

### Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir colocar os brinquedos a venda.

## Colocar um brinquedo para vender

POST /toys - FORMATO DA REQUISIÇÃO

{
"userId": "id de usuario",
"toy_name": "Carrinho de corrida",
"img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSY7Bkoq-gbtroZhdryza3qmSC0mTuFtrN8dORSzaleOS7zg8dNlcHGqqT4ZF2qT099wSf8Vj8nSA&usqp=CAc",
"category": "Carrinhos",
"marks": "Hot Weels",
"description": "Carrinho de brinquedo, um pouco arranhado, três anos de uso.",
}

## Historico de compras

## Deletar um brinquedo

DELETE /toys/id

Não é necessário um corpo da requisição.

## Deletar uma doação

DELETE /donations/id

Não é necessário um corpo da requisição.

## Atualizando os dados do perfil

PATCH /users/id - FORMATO DA REQUISIÇÃO

{
"email": "email@email.com",
"name": "Nome",
"cep": "26511-510",
"address": "R. Googlelandia 420",
"birth_date": "01/03/2023"
}
