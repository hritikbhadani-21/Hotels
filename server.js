const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());




app.get("/", (req, res) => {
  res.send("Welcome to my hotel... How can I help you?");
});



const personRoutes=require('./Routes/personRoutes');
const menuItemRoutes=require('./Routes/menuItemRoutes');


app.use('/person',personRoutes);
app.use('/Menu',menuItemRoutes);


const PORT=process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
