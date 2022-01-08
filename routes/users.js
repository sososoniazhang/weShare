const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


// update user
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err){
                return res.status(500).json(err);
            }
            try {
                const user = await User.findByIdAndUpdate(req.body.userId, {
                    $set: req.body,
                });
                res.status(200).json("account has been updated");
            } catch (err){
                return res.status(500).json(err);
            }
        }
    } else {
        return res.status(403).json("User can only update their own info")
    }
  })

// delete user
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.userId);
            res.status(200).json("account has been removed");

        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only delete your own account");
    }
})
// get user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user){
            return res.status(404).json("Cannot find this user");
        } else {
            const {password, createdAt, updatedAt, __v, ...other} = user._doc;
            return res.status(200).json(other);
        }

    } catch (err) {
        return res.status(500).json(err);
    }
    
})
// follow user
router.put('/:id/follow', async (req, res) => {
    if ()
    try {
        const user = await User.findById(req.params.id);
        if (!user){
            return res.status(404).json("Cannot find this user");
        } else {
            const {password, createdAt, updatedAt, __v, ...other} = user._doc;
            return res.status(200).json(other);
        }

    } catch (err) {
        return res.status(500).json(err);
    }
    
})
// unfollow user



module.exports = router;