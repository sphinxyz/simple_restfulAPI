# Simple RESTful API

a simple RESTful API demonstration, including `register`, `login`, and `menu` endpoints

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

`HTTP Method` > `Body` > `application/json`:

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
