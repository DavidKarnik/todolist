const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const databaseName = 'mongodb_express'; // Nahraďte 'your-database-name' skutečným názvem vaší databáze

// const uri = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${username}:${password}@todolistmongodb.vmccwvu.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Database connected successfully!');
}).catch((error) => {
    console.error('Database connection error:', error);
});

// connection to mongodb
// mongoose.connect("mongodb://localhost:27017/mongodb_express", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }).then(r => {
//     console.log("Database connected successfully!")
//
//     // const newUser = new User({ username: "user", password: "$2b$10$5cY/ANylLA/Nhhhvy0g0Euwt6PB/dMYDXhW0FhZUw44F7cOYzUVQa" });
//     // newUser.save().then((user) => console.log("User added:", user));
// })
//     .catch((err) => console.log(err));


// const User = require("./models/User");
//
// // Získat všechny uživatele z kolekce a vypsat je do konzole
// User.find({}, (err, users) => {
//     if (err) {
//         console.error('Chyba při čtení dat:', err);
//     } else {
//         console.log('Seznam uživatelů:');
//         users.forEach((user) => {
//             console.log(`ID: ${user._id}, Uživatelské jméno: ${user.username}, Heslo: ${user.password}`);
//         });
//     }
//
//     // Ukončit spojení s MongoDB
//     mongoose.connection.close();
// });
//
// const Todo = require("./models/Todo");
//
// Todo.find({}, (err, todos) => {
//     if (err) {
//         console.error('Chyba při čtení dat:', err);
//     } else {
//         console.log('Seznam uživatelů:');
//         todos.forEach((todo) => {
//             console.log(`ID: ${todo._id}, todo: ${todo.todo}, user: ${todo.user}`);
//         });
//     }
//
//     // Ukončit spojení s MongoDB
//     mongoose.connection.close();
// });

// middlewares
app.use(express.urlencoded({extended: true}));
// middlewares pro statické soubory
app.use(express.static("public"));
// model pro zobrazení dynamických šablon (Embedded JavaScript)
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
app.use(require("./routes/login"))


// server configurations
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
