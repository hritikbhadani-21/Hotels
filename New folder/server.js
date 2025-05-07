const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());




app.get("/", (req, res) => {
  res.send("Welcome to my hotel... How can I help you?");
});



const personRoutes=require('./Routes/personRoutes');
const menuItemRoutes=require('./Routes/menuItemRoutes');


app.use('/person',personRoutes);
app.use('/Menu',menuItemRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
