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
                const user = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                });
                return res.status(200).json("account has been updated");
            } catch (err){
                return res.status(500).json(err);
            }
        }
    } else {
        return res.status(403).json("User can only update their own info");
    }
  });

// delete user
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.body.userId);
            res.status(200).json("account has been removed");

        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only delete your own account");
    }
});
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
    
});
// follow user
router.put('/:id/follow', async (req, res) => {
    if (req.body.userId === req.params.id) {
        return res.status(403).json("Cannot follow self");
    }
    try {
        const currentUser = await User.findById(req.body.userId);
        const user = await User.findById(req.params.id);

        if (!user.followers.includes(req.body.userId) && !currentUser.followings.includes(req.params.id)) {
            await user.updateOne({$push: {followers : req.body.userId}});
            await currentUser.updateOne({$push: {followings : req.params.id}});
            res.status(200).json("successfully following the user");

        } else {
            res.status(403).json("already following this user");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
    
});
// unfollow user
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId === req.params.id) {
        return res.status(403).json("you cannot unfollow self");
    } 
    try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);

        if (currentUser.followings.includes(req.params.id) && user.followers.includes(req.body.userId)) {
            await user.updateOne({$pull: {followers : req.body.userId}});
            await currentUser.updateOne({$pull: {followings : req.params.id}});
            res.status(200).json("successfully unfollow the user");
        } else {
            return res.status(403).json("not currently following this user");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;