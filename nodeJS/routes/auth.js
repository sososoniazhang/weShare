const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// register new user
router.post('/register', async (req, res) => {
    
    try {
        // generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // generate new user
        const newUser = await new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword 
        })
        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } 
    catch (err) {
        res.status(500).json(err);
    }
  })


// Login
router.post("/login", async (req, res)=> {
    try {
        // find the user in db
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("user not found");

        // compare the password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("invalid password");

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;