# ToDo List

Project of webpage ToDo list with monolite architecture and database.

## Actions

url/ -> Login form, Username and Password
-> Authentication of User -> JWT Token
url/profile -> Main page
-> Todos (Add, Delete, Edit, Done/Undone)
-> Filter of Todos (All, Done, Undone)
url/json -> Page with todos in JSON for machine learning
-> Logout button

## Used Tools and Languages

- HTML, CSS, EJS, JS
- Node JS, Express
- JWT, Bcrypt, Mongoose
- MongoDB

## Screenshots

![App Screenshot](https://via.placeholder.com/700x100?text=Not+Added+Yet)

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


## Author

- [Me, myself and I](https://github.com/DavidKarnik)
