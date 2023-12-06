const router = require("express").Router()
const bcrypt = require('bcrypt');
const User = require("../models/User");
const jwt = require('jsonwebtoken');

// Přihlašovací stránka
router.get("/", async(req, res) => {
    res.render('login');
})

// Přihlášení uživatele
router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({message: 'Invalid credentials'});
        }

        // console.log("user.id: " + user.id)
        console.log("User Logged in: " + user.username)

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username
            },
            "hello",
            {expiresIn: '1h'}
        );
        res.cookie('token', token, {httpOnly: true});  // Uložení JWT do cookies (možno i localStorage)
        res.redirect('/profile');
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

module.exports = router;
