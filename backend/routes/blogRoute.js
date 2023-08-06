const express = require('express')
const router = express.Router()
const Blog = require('../models/blogModel')

//Routes

// create blog
router.post("/blog", async (req, res) =>{
    try{
        const addBlogData = await Blog.create(req.body)
        
        res.status(201).json(addBlogData)
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
})

//Get All Data
router.get("/blog", async (req, res) => {
    try{
        const getAllBlogData = await Blog.find()
        res.status(200).json(getAllBlogData)
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
})

//Get Single Data
router.get("/blog/:id", async (req, res) => {
    const {id} = req.params
    try{
        const getSingleBlogData = await Blog.findById(id)
        res.status(200).json(getSingleBlogData)
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
})

// Delete Data 

router.delete("/blog/:id", async (req, res) => {
    const {id} = req.params
    try{
        const deleteBlogPost = await Blog.findByIdAndDelete(id)
        res.status(200).json(deleteBlogPost)
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

//Update Data
router.patch("/blog/:id", async (req, res) => {
    const {id} = req.params
    try{
        const updateBlogPost = await Blog.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json(updateBlogPost)
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})


module.exports = router