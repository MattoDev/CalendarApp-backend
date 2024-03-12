const express = require("express");

//Create express server
const app = express();

//Rutas
app.get("/", (req, res) => {
  console.log("se requiere el slash");
  res.json({
    ok: true,
  });
});

//Listen request
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto ${4000}`);
});
