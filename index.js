/* 
User routes / AUTH
hots + api/auth 
*/

const express = require("express");
require("dotenv").config();

console.log(process.env);

//Create express server
const app = express();

//Routes
//TODO: auth// create, login, renew
app.use("/api/auth", require("./routes/auth"));
//TODO: CRUD: Events

//Public directory
//use middleware
app.use(express.static("public"));

//Listen request
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
