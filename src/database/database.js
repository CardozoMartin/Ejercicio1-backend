import mongoose from "mongoose";

const { taskDB } = process.env;
mongoose.set('strictQuery',true);
mongoose.connect(taskDB).then(()=>{
    console.log("Conexion Exitosa");
}).catch((e)=>{
    console.error(e);
})