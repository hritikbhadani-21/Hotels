const mongoose=require('mongoose');
require('dotenv').config();

const mongoURL=process.env.DB_URL;
// const mongoURL=process.env.DB_URL_local;

mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})


const db=mongoose.connection;


db.on('connected',()=>{
  console.log('Connected to mongodb server');
});


db.on('error',(err)=>{
  console.error('Mongodb connection error',err);
});


db.on('disconnected',()=>{
  console.log('Disconnected to mongodb server');  //demo push check
});


module.exports=db;