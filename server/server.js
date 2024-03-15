const express=require("express")
const cors=require('cors')
require('colors')
const dotenv=require("dotenv")
const morgan=require("morgan")
const connectDb =require("./config/config")
const app=express();
dotenv.config();
connectDb();
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],
  }))
app.use(express.json())
app.use(morgan("dev"))


//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/orders", require("./routes/orderRoute"));
app.get("/",(req,res)=>{
    res.send("It works")
})



app.listen(8080,()=>{
    console.log(`server is connected on port ${process.env.PORT}`.bgGreen)
})


