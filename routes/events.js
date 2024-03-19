const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { validateJwt } = require("../middlewares/validar-jwt");
const {
  getEvents,
  deleteEvent,
  createEvent,
  updateEvent,
} = require("../controllers/events");
const { filedsValidator } = require("../middlewares/field-validator");
const { isDate } = require("../helpers/isDate");

router.use(validateJwt);

router.get("/", getEvents);

router.post(
  "/",
  [
    check("title", "Titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    filedsValidator,
  ],
  createEvent
);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

module.exports = router;
