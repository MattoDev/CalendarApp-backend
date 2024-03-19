const { response } = require("express");
const { generateJwt } = require("../helpers/jwt");
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate("user", "name");
  try {
    const { uid, name } = req;
    const token = await generateJwt(uid, name);
    return res.json({
      ok: true,
      msg: events,
      token,
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};
const createEvent = async (req, res = response) => {
  const event = new Event(req.body);
  try {
    const { uid, name } = req;
    const token = await generateJwt(uid, name);
    event.user = uid;
    const savedEvent = await event.save();
    return res.json({
      ok: true,
      msg: "createEvents",
      event: savedEvent,
      token,
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const updateEvent = async (req, res = response) => {
  try {
    const { uid, name } = req;
    const token = await generateJwt(uid, name);
    return res.json({
      ok: true,
      msg: "updateEvents",
      token,
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const deleteEvent = async (req, res = response) => {
  try {
    const { uid, name } = req;
    const token = await generateJwt(uid, name);
    return res.json({
      ok: true,
      msg: "deleteEvents",
      token,
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

/* {
    ok:true,
    msg: 'getEvents'
} */

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
