const express=require("express")
const app=express();
const morgan=require("morgan")
const port=process.env.PORT||9000;
const mongoose=require("mongoose")
require("dotenv/config");
const userrouter=require("./router/userrouter.js")

//connection mongodb
mongoose.connect(process.env.DB_URL,
    {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("db connected successfully")
})
.catch(error=>{
    console.log(error);
    process.exit(1);
})

//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use("/api/v1",userrouter)


//server connection
app.listen(port,()=>{
    console.log("server running in port ${9000}")
});