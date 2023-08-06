const express = require('express')
const productRouter = express.Router()

productRouter.get("/product", (req, res) => {
    res.json({
        name: "Moto g",
        username: "taufikkhan12",
        postDesc: "hi my name is md taufik khan"
    })
})

module.exports = productRouter