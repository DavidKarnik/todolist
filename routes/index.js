const router = require("express").Router()
const Todo = require("../models/Todo");
const verifyToken = require('./middlewareVerifyToken');

// console.log("verifyToken:" + verifyToken)
// Hlavní stránka - vyžaduje přihlášení
router.get('/profile', verifyToken, async (req, res) => {
    try {
        // Předání všech informací o uživateli do profilové stránky
        const user = {
            id: req.user.id,
            username: req.user.username
        };

        // Získání todo úkolů příslušících danému uživateli
        const todo = await Todo.find({ user: req.user.id });

        res.render('index', { user, todo });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Příklad server-side route pro poskytnutí JSON dat
router.get('/json', verifyToken, async (req, res) => {
    try {
        const todo = await Todo.find({ user: req.user.id });
        res.json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Trasa pro odhlášení
router.get('/logout', (req, res) => {
    res.clearCookie('token'); // Odstranění cookies s JWT tokenem
    res.redirect('/'); // Přesměrování na přihlašovací stránku
});

module.exports = router;