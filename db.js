const mongoose=require('mongoose');

const mongoURL='mongodb://localhost:27017/Hotels'


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
  console.log('DisConnected to mongodb server');
});


module.exports=db;