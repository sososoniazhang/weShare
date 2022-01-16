const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// create a post
router.post("/new", async (req, res)=> {
    try {
        const user = await User.findById(req.body.userId);
        const newPost = await new Post({
            userId: req.body.userId,
            username: user.username,
            title: req.body.title,
            location: req.body.location,
            date: req.body.date,
            link: req.body.link,
            org: req.body.org,
            screenshot: req.body.screenshot,
        })
        const post = await newPost.save();
        await user.updateOne({$push: {posts: post._id}});
        
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})
// delete a post
router.delete("/:id", async (req, res)=> {
    try {
        const user = await User.findById(req.body.userId);
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await Post.findByIdAndDelete(req.params.id);
            user.updateOne({$pull: {posts : req.params.id}});
            res.status(200).json("successfully delete the post");
        } else {
            return res.status(403).json("post not belong to user");
        }
    } catch (err) {
        res.status(500).json(err);
    }
})
// update a post
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId !== req.body.userId) {
            return res.status(403).json("User can only update their own post");
        }
    } catch (err) {
        return res.status(404).json(err);
    }
    try {
        await Post.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json("post has been updated");
    } catch (err){
        return res.status(500).json(err);
    }
        
  });

// like a post
router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push: {likes : req.body.userId}});
            res.status(200).json("successfully liked the post");

        } else {
            res.status(403).json("already liked this post");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
    
});
// unlike post
router.put('/:id/unlike', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.likes.includes(req.body.userId)) {
            await post.updateOne({$pull: {likes : req.body.userId}});
            res.status(200).json("successfully unliked the post");

        } else {
            res.status(403).json("cannot unlike this post");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
    
});

// comment on a post
router.put('/:id/comment', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const user = await User.findById(req.body.userId);
        await post.updateOne({$push: {comments : {userId: req.body.userId, content: req.body.content, username: user.username}}});
        res.status(200).json("successfully comment on the post");

    } catch (err) {
        return res.status(500).json(err);
    }
    
});
// delete comment on a post
router.delete('/:postid/:commentid', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postid);
        // const comment = await Post.comments.findById(req.params.commentid);
        // if (req.body.userId !== comment.userId) {
        //     return res.status(403).json("cannot delete others comment");
        // }
        await post.updateOne({
            $pull: {
                comments: {
                    _id: req.params.commentid,
                    userId: req.body.userId
                }
            }
        });
        res.status(200).json("successfully delete comment on the post or the userId does not match");

    } catch (err) {
        return res.status(500).json(err);
    }
    
});
// get a post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err){
        return res.status(500).json(err);
    }
        
  });
// get posts with specific location/date/org


// timeline posts for a user
router.get("/timeline/:userId", async (req , res)=> {
    try {
        const user = await User.findById(req.params.userId);
        let userPosts = await Post.find({userId: user._id});
        let followingPosts = await Promise.all(
            user.followings.map((firendsId) => {return Post.find({userId: firendsId})})
        )
        let allPosts = userPosts.concat(...followingPosts);
        res.status(200).json(allPosts);
    } catch (err) {
        return res.status(500).json(err);
    }
    
})



module.exports = router;