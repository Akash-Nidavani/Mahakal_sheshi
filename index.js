const express = require('express')
const cors = require("cors");

const {sequelize} = require("./models/index")
const authorRoutes = require("./routes/authorRoutes")
const BlogRoutes = require("./routes/blogRoutes")

const app = express()
const PORT = 3003
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/author', authorRoutes);
app.use('/blog', BlogRoutes);

app.get('/', async (req, res)=>{
    res.send("Welcome to Home page")
})

app.listen(PORT, async () => {
    console.log(`server started ${PORT}`);
  });
  
