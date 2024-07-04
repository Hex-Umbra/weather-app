const express = require("express"),
  router = express.Router();
require("dotenv").config();
const axios = require("axios")

router.get("/", (req, res) => {
  res.render("index", {
    meteo: null,
    error: null,
  });
});
router.get("/meteo", async (req, res) => {
  const apiKey = process.env.WEATHER_API_KEY;
  let meteo,
    error = null;
  const city = req.query.city;
  const meteoURL = process.env.WEATHER_API_URL + city + `&appid=` + apiKey;
  try {
  } catch (error) {}
  res.render("index", {
    meteo,
    error,
  });
});

module.exports = router;
