const express = require("express");
const cors = require("cors");
const { upload } = require("./middlewear/multerUpload");
const authorRoutes = require("./routes/authorRoutes");
const BlogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = 3003;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req,res,next)=>{
     console.log('ehllo',req.body)
     next()
})

app.use("/images", express.static("./images"));

app.use("/author", upload, authorRoutes);
app.use("/blog",upload,BlogRoutes);

app.get("/", async (req, res) => {
  res.send("Welcome to Blog-home page");
});

app.listen(PORT, async () => {
  console.log(`server started ${PORT}`);
});
