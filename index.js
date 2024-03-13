const express = require("express");
require("dotenv").config();

console.log(process.env);

//Create express server
const app = express();

//Rutas
/* app.get("/", (req, res) => {
  console.log("se requiere el slash");
  res.json({
    ok: true,
  });
}); */

//Public directory
//use middleware
app.use(express.static("public"));

//Listen request
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
