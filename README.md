# Simple RESTful API

a simple RESTful API demonstration, including `register`, `login`, and `menu` endpoints

<p align="left">
  <img src="https://img.shields.io/github/package-json/dependency-version/sphinxyz/simple_restfulAPI/express?style=flat-square" />
  <img src="https://img.shields.io/github/package-json/dependency-version/sphinxyz/simple_restfulAPI/jsonwebtoken?style=flat-square"/>
  <img src="https://img.shields.io/github/package-json/dependency-version/sphinxyz/simple_restfulAPI/node-fetch?logo=node-fetch&style=flat-square" />

</p>

| HTTP Method | Endpoint        |
| ----------- | --------------- |
| GET         | `/api/menu`     |
| GET         | `/api/menu/:id` |
| POST        | `/api/menu`     |
| POST        | `/api/register` |
| POST        | `/api/login`    |
| POST        | `/api/menu`     |
| PUT         | `/api/menu/:id` |
| DELETE      | `/api/menu/:id` |

Postman or Hoppscotch:

`HTTP Method` > `Body` > `application/json`

GET: `/api/register`

GET: `/api/login`

```json
{
  "username": "rie",
  "password": "rie123"
}
```

POST: `/api/menu`

```json
{
  "id": 1,
  "details": {
    "username": "Duta dianto",
    "pesanan": "Nasi Goreng",
    "harga": 15000
  }
}
```

# How to Install

```bash
npm install # to install all dependencies
node app.js # running the program
```
