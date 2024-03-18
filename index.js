/* 
User routes / AUTH
hots + api/auth 
*/

const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

//Create express server
const app = express();

//Data base
dbConnection();
//Public directory
//use middleware
app.use(express.static("public"));

//Read and parsing body
app.use(express.json());

//Routes
//TODO: auth// create, login, renew
app.use("/api/auth", require("./routes/auth"));
//TODO: CRUD: Events

//Listen request
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
