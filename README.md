# ToDo List

Project of webpage ToDo list with monolite architecture and database.

## Actions

**url/** -> Login form, Username and Password </br>
-> Authentication of User -> JWT Token </br>
**url/profile** -> Main page </br>
-> Todos (Add, Delete, Edit, Done/Undone) </br>
-> Filter of Todos (All, Done, Undone) </br>
**url/json** -> Page with todos in JSON for machine learning </br>
-> Logout button </br>

## Used Tools and Languages

- HTML, CSS, EJS, JS
- Node JS, Express
- JWT, Bcrypt, Mongoose
- MongoDB

## MongoDB Database

- 2 Collections: users, todos
- Saving informations about users in users collection
  - id, username, password (encrypted)
- Saving informations about todos in todos collection
  - id, todo text, user id (owner of todo)

#### Todos Collection

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `ObjectId` | **Required** Todo key |
| `todo` | `STRING` | Todo text |
| `done` | `BOOLEAN` | State of Todo |
| `user` | `ObjectId` | **FK** User key |

#### Users Collection

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `ObjectId` | **Required** User key |
| `username` | `STRING` | Username |
| `password` | `STRING` | Password |

## Deployment

#### Frontend + Backend
Aplication is hosted on [Render](https://render.com/)

#### MongoDB Database
Database is saved in secured hidden repository and is hosted on [MongoDB Atlas](https://www.mongodb.com/atlas/database) - Multi-Cloud Database Service.

## Screenshots

![Snímek obrazovky 2023-12-23 204737](https://github.com/DavidKarnik/todolist/assets/91788719/189d7474-db7b-4daa-957a-4e98b86521d5)

## Author

- [Me, myself and I](https://github.com/DavidKarnik)
