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
- MongoDB, Docker

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
Application is hosted on [Render](https://render.com/). </br>
Run `npm run build` in root directory of project for build the application. <br>
Run `node app.js` for start application server. Navigate to `http://localhost:3000/`.

#### MongoDB Database
Database is saved in secured hidden repository and is hosted on [MongoDB Atlas](https://www.mongodb.com/atlas/database) - Multi-Cloud Database Service. </br>

## Screenshots

![LogIn](https://github.com/DavidKarnik/todolist/assets/91788719/189d7474-db7b-4daa-957a-4e98b86521d5)
![MainPage](https://github.com/DavidKarnik/todolist/assets/91788719/dcda55e1-6e1f-4261-b0ba-d1ac5b38c358)
![EditTodo](https://github.com/DavidKarnik/todolist/assets/91788719/bf7aa32a-c189-44b5-bd1a-d508bf9cf147)

## Author

- [Me, myself and I](https://github.com/DavidKarnik)
