/* 
User routes / AUTH
hots + api/auth 
*/

const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");

//Create express server
const app = express();

//Data base
dbConnection();

//CORS
app.use(cors());
//Public directory
//use middleware
app.use(express.static("public"));

//Read and parsing body
app.use(express.json());

//Routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//Listen request
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
