const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// connection to mongodb
mongoose.connect("mongodb://localhost:27017/mongodb_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(r => {
    console.log("Database connected successfully!")

    // const newUser = new User({ username: "user", password: "$2b$10$5cY/ANylLA/Nhhhvy0g0Euwt6PB/dMYDXhW0FhZUw44F7cOYzUVQa" });
    // newUser.save().then((user) => console.log("User added:", user));
})
    .catch((err) => console.log(err));


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
