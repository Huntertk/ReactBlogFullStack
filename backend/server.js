const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const router = require('./routes/blogRoute')
const productRouter = require('./routes/productRoutes')

const app = express()
// database connection
mongoose.connect(process.env.DATABASEURL).then(() => {
    console.log("Successfully Connected to database")
    
    app.listen(process.env.PORT || 8000, (err) => {
        if(err){
            console.log(err);
        }
    console.log(`Server is started on ${process.env.PORT}`);
})
})


//middlware bodyparser
app.use(express.json())
app.use(cors())
// app.use(express.static(path.resolve('dist')))
// app.use("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname,'dist','index.html'))
// })

//blogRouter
app.use(router)

//productRouter
app.use(productRouter)

