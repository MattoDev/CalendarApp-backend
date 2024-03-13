const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("se requiere el slash");
  res.json({
    ok: true,
  });
});

module.exports = router;
