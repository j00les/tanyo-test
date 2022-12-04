## Endpoints :

List of available endpoints:

- `POST /users/seed`
- `POST /users/register`
- `POST /users/login`
- `POST /sschedules/seed`
- `POST /schedules/create`
- `GET /schedules/data`

Routes below needs authentication

- `POST /schedules/create`
- `GET /schedules/data`

## 1. POST users/register

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Register success"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}

OR

{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

## 3. POST schedules/data

Request:

- body:

```json
{
  "from": "string",
  "to": "string",
  "time": "string",
  "repeat": "string",
  "duration": "string",
  "userId": "string",
  "consultType": "strink"
}
```

_Response (201 - Created)_

```json
{
  "message": "Schedule succesfully created"
}
```

&nbsp;

## 4. GET schedules/create

Request:

_Response (200 - OK)_

```json
[
  {
    "_id": "638c9906fa89ecf581fd4b56",
    "from": null,
    "to": "2022-12-07",
    "time": "08.00",
    "repeat": "no",
    "duration": "12 minutes",
    "consultType": "chat",
    "userId": "638c98ca80ede48c4522def1"
  },
  {
    "_id": "638c991bfa89ecf581fd4b59",
    "from": "2022-12-03",
    "to": "2022-12-07",
    "time": "08.00",
    "repeat": "no",
    "duration": "12 minutes",
    "consultType": "chit",
    "userId": "638c98ca80ede48c4522def1"
  }
  .......
]
```

&nbsp;
