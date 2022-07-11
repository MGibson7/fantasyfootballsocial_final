const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const multer = require("multer")
const path = require("path")

dotenv.config();
 


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("Connected to Mongo");
});

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware

app.use(express.json());
app.use(morgan("common"));

  

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, 'public/images');
    },
    filename: function (req, file, callback) {
      callback(null, req.body.name);
    }
  });

const upload = multer({storage});

app.post("/api/upload", upload.single("file"), (req,res) =>{
    try{
        console.log(req.file.path)
        return res.status(200).json("file uploaded successfully")

    }catch(err){
        console.log(err)
    }
})

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

app.use(express.static(path.join(__dirname, "/client2/build")));

app.get('*', function(req, res) {
  res.sendFile( __dirname + "/public/" + "index.html" );
})


app.listen(process.env.PORT || 8800, ()=>{
    console.log("Backend server is running!")
})