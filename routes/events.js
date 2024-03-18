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

router.use(validateJwt);

router.get("/", getEvents);

router.post("/", createEvent);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

module.exports = router;
