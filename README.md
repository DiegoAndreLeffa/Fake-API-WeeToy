# WeeToys - API

Este é o backend da aplicação WeeToys - Um site pra venda de brinquedos usados e doações!

## Iniciando a api

- Depois de fazer o clone da fake api, abri ela no editor de código da sua escolha, abrir o terminal e rodar o comando `yarn` para baixar as bibliotecas da api.

- Para rodar a api, inserir o comando `yarn start` no terminal.

- Pronto, a api já esta rodando e pronta para fazer as suas requisição.

---

## EndPoints

- A API tem um total de 12 endPoints - podendo cadastrar seu perfil, adicionar item para venda, adicionar itens para doação, excluir itens da venda,
  excluir item das doações.

- O url base da API é http://localhost:3001

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=WeeToys%20Fake%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDiegoAndreLeffa%2Finsomnia-Fake-API-WeeToys%2Fmain%2FexportInsomniaWeeToys.json)

---

## Rotas que não precisam de autenticação

### Lista de brinquedos

- Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os brinquedos já cadastrados na plataforma, na API podemos acessar a lista dessa forma: Aqui conseguimos ver os brinquedos.

`GET /toys - FORMATO DA RESPOSTA`

```javascript
[
  {
    userId: 3,
    name: "violãozinho de madeira",
    price: 20.95,
    img: "https://img.elo7.com.br/product/original/344DDC6/violao-violinha-infantil-brinquedo-musical-viola-infantil.jpg",
    id: 1,
  },
  {
    userId: 3,
    name: "boneca bebê",
    price: 7.8,
    img: "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg",
    id: 2,
  },
];
```

Podemos acessar um brinquedo específico utilizando o endpoint:

`GET /toys/id - FORMATO DA RESPOSTA`

```javascript
{
"userId": 3,
"name": "violãozinho de madeira",
"price": 20.95,
"img": "https://img.elo7.com.br/product/original/344DDC6/violao-violinha-infantil-brinquedo-musical-viola-infantil.jpg",
"id": 1
}
```

Podemos acessar um brinquedo específico e seu anunciador utilizando o endpoint:

`GET /toys/id?\_expand=user`

```javascript
{
	"userId": 2,
	"toy_name": "bloquinhos de madeira",
	"price": 24.79,
	"img": "https://cf.shopee.com.br/file/6a3af8111997d46e2452a27a16e4668b",
	"category": "Quebra cabeças",
	"marks": "Bloquinho",
	"description": "Peças de madeira um pouco gastas.",
	"id": 3,
	"user": {
		"email": "teste@email.com",
		"password": "$2a$10$F/6cnijhYmsJ8H/lx51gY",
		"id": ,
		"name": "Brinquedo",
		"cep": "26511-510",
		"address": "R. Googlelandia 420",
		"dateOfBirth": "23/05/2015"
		"description": ""
	}
}
```

---

### Lista de doações

`GET /donations - FORMATO DA RESPOSTA`

```javascript
[
  {
    userId: 3,
    name: "brinquedo de encaixar",
    img: "https://cf.shopee.com.br/file/6a3af8111997d46e2452a27a16e4668b",
    id: 3,
  },
];
```

---

### Criação de usuário

`POST /users - FORMATO DA REQUISIÇÃO`

```javascript
{
"email": "email@email.com",
"password": "123456"
}
```

- Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA`

```javascript
{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbnF1ZWRMUBlbWFpbC5jb20iLCJpYXQiOjE2NzI3NTE0NTMsImV4cCI6MTY3Mjc1NTA1Mywic3ViIjoiMyJ9.lnOinVT_JWGN9znvWqmAmuLJXhBfqY5NTncmvsLlr0",
"user": {
        "email": "email@email.com",
        "id":
        }
}
```

---

### Login

`POST /login - FORMATO DA REQUISIÇÃO`

```javascript
{
"email": "email@email.com",
"password": "123456"
}
```

- Caso dê tudo certo, a resposta será assim:

```javascript
{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbnF1ZRvQGVtYWlsLmNvbSIsImlhdCI6MTY3Mjc2Njk3NSwiZXhwIjoxNjcyNzcwNTc1LCJzdWIiOiIyIn0.5SaUZdzYglSi4THOjJb-eiu7ppX3XChFRbr8UdcreBM",
"user": {
        "email": "email@email.com",
        "id":
        }
}
```

---

## Rotas que necessitam de autorização

- Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

      `Authorization: Bearer {token}`

- Após o usuário estar logado, ele deve conseguir colocar os brinquedos a venda.

---

### Colocar um brinquedo para vender

`POST /toys - FORMATO DA REQUISIÇÃO`

- O body da requisição não necessita adicionar o `id`.

- Obrigatorio adicionar o `userId` do usúario logado no body.

```javascript
{
"userId": "id de usuario",
"toy_name": "Carrinho de corrida",
"img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSY7Bkoq-gbtroZhdryza3qmSC0mTuFtrN8dORSzaleOS7zg8dNlcHGqqT4ZF2qT099wSf8Vj8nSA&usqp=CAc",
"price": 20.30,
"category": "Carrinhos",
"marks": "Hot Weels",
"description": "Carrinho de brinquedo, um pouco arranhado, três anos de uso.",
}
```

---

### Adicionar produtos no historico de compras

`POST /purchases_historic - FORMATO DA REQUISIÇÃO`

- O body da requisição não necessita adicionar o `id`.

- Obrigatorio adicionar o `userId` do usúario logado no body.

```javascript
{
	"userId": 3,
	"name": "Boneca bebê",
	"price": 7.8,
	"img": "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg",
	"category": "Bonecos",
	"marks": "Barbie",
	"description": "Boneca bebê Barbie, um ano de uso, alguns arranhões."
}
```

---

### Deletar um brinquedo

`DELETE /toys/id`

- Não é necessário um corpo da requisição.

- Requisição não tem retorno.

### Deletar uma doação

`DELETE /donations/id`

- Não é necessário um corpo da requisição.

- Requisição não tem retorno.

---

### Editar produto

`PATCH /toys/id`

```javascript
{
  "name": "violãozinho de madeira vermelho",
  "price": 50,
  "img": "https://img.elo7.com.br/product/original/344DDC6/violao-violinha-infantil-brinquedo-musical-viola-infantil.jpg",
  "category": "carrinho"
  "marks": "",
  "description": ""
}
```

---

## Ediatar perfil de usúario

- ### Atualizando os dados do perfil

`PATCH /users/id - FORMATO DA REQUISIÇÃO`

```javascript
{
"email": "email@email.com",
"name": "nome",
"dateOfBirth": "23/05/2015"
"zip_code": "62651-652",
"address": "Googleland 1200",
"description": "Eu sou um brinquedo"
}
```
