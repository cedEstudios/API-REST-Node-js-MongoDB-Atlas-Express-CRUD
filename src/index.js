const express= require("express");
const mongoose= require("mongoose");
require("dotenv").config();
const userRoutes= require("./routes/user.js");

const app= express();
const port= process.env.PORT || 9000;


//middleware
app.use(express.json());
app.use("/api",userRoutes);


//route
app.get("/",(req,res)=> {
    res.send('hola mundo')
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
        .then(()=>{console.log("me conecte")})
        .catch((error)=>{
                        console.log("me rompi")
                        console.error(error)})        

app.listen(port,() => {console.log('server listening on port: '+ port )});

