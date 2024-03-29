const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { filedsValidator } = require("../middlewares/field-validator");
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");
const { validateJwt } = require("../middlewares/validar-jwt");

router.post(
  "/new",
  [
    /* middlewares */
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es olbigatorio").isEmail(),
    check("password", "el password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    filedsValidator,
  ],
  createUser
);

router.post(
  "/",
  [
    /* middlewares */
    check("email", "El email es olbigatorio").isEmail(),
    check("password", "el password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    filedsValidator,
  ],
  loginUser
);

router.get("/renew", validateJwt, revalidateToken);

module.exports = router;
