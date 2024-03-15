const mongoose=require("mongoose")
require("colors")


const connectDb=async ()=>{
try {
    const url=process.env.mongo;
    const conn=await mongoose.connect(url)
    console.log(`MongoDb Connected `.bgCyan)
} catch (error) {
    console.log(error)
}
}

module.exports=connectDb







