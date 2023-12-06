const router = require("express").Router();
const Todo = require("../models/Todo");
const verifyToken = require('./middlewareVerifyToken');

// routes
router
    .post("/add/todo", verifyToken, (req, res) => {
        let {todo} = req.body;
        const userId = req.user.id; // Přístup k ID uživatele z tokenu


        // Exception ... Pokud je todo text prázdný
        if (!todo.trim()) {
            todo = 'Empty Todo';
        }

        // console.log("userId: " + userId)

        const newTodo = new Todo({todo, done: false, user: userId});

        // save the todo
        newTodo
            .save()
            .then(() => {
                console.log("Added Todo Successfully!");
                res.redirect("/profile");
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send("Error adding todo");
            });
    })

    .get("/delete/todo/:_id", verifyToken, (req, res) => {
        const {_id} = req.params;
        Todo.deleteOne({_id})
            .then(() => {
                console.log("Deleted Todo Successfully!");
                res.redirect("/profile");
            })
            .catch((err) => console.log(err));
    })

    .get("/edit/todo/:_id", verifyToken, (req, res) => {
        const {_id} = req.params;
        Todo.findById(_id)
            .then(todo => {
                res.render('edit', {todo});
            })
            .catch(err => console.log(err));
    })

    .post("/edit/todo/:_id", verifyToken, (req, res) => {
        const {_id} = req.params;
        const {todo} = req.body;

        // Aktualizace hodnoty úkolu v databázi
        Todo.findByIdAndUpdate(_id, {todo}, {new: true})
            .then(updatedTodo => {
                console.log("Updated Todo Successfully!");
                res.redirect("/profile");
            })
            .catch(err => console.log(err));
    })
    .get('/toggle/todo/:_id', async (req, res) => {
        const {_id} = req.params;

        try {
            const todo = await Todo.findById(_id);

            if (!todo) {
                return res.status(404).send('Todo not found');
            }

            todo.done = !todo.done;
            await todo.save();

            res.redirect('/profile');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    });

module.exports = router;
