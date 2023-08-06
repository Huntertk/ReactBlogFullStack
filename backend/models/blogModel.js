const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    post:{
        type: String,
        required: true,
    }
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog