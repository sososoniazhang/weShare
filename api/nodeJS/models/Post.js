const mongoose = require("mongoose");
const User = require("./User");

// const CommentSchema = new mongoose.Schema({
//     userId : {
//         type: String,
//         required : true
//     },
//     content :{
//         type: String,
//         required: true
//     }

// });

const PostSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    food: {
        type: String,
        default: "unknown",
    },
    org: {
        type: String,
        default: "unknown",
    },
    link: {
        type: String,
        unique: true,
    },
    screenshot: {
        type: String,
        default: "",
    },
    likes : {
        type: Array,
        default: []
    },
    comments : {
        type: [{
            userId : {
                type: String,
                required : true
            },
            username: {
                type: String,
                required : true
            },
            content :{
                type: String,
                required: true
            }
        }],
        default:[]
    }

}, 
    {timestamps:true}
);

module.exports = mongoose.model("Post", PostSchema); // (model name, schema)
