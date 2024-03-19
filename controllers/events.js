const { response } = require("express");
const { generateJwt } = require("../helpers/jwt");
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate("user", "name");
  try {
    return res.json({
      ok: true,
      msg: events,
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
    const { uid } = req;

    event.user = uid;
    const savedEvent = await event.save();
    return res.json({
      ok: true,
      msg: "createEvents",
      event: savedEvent,
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
  const eventId = req.params.id;
  const uid = req.uid;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "No existe el evento por ese id",
      });
    }
    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes privilegios de editar este evento",
      });
    }
    const newEvent = {
      ...req.body,
      user: uid,
    };
    const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });
    return res.json({
      ok: true,
      event: updatedEvent,
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
    return res.json({
      ok: true,
      msg: "deleteEvents",
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
