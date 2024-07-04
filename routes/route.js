const express = require("express"),
  router = express.Router();
require("dotenv").config();
const axios = require("axios");

router.get("/", (req, res) => {
  res.render("index", {
    meteo: null,
    error: null,
  });
});
router.get("/meteo", async (req, res) => {
  const apiKey = process.env.WEATHER_API_KEY;
  let meteo,
    error = null,
    city = req.query.city;
  const meteoURL = process.env.WEATHER_API_URL + city + `&appid=` + apiKey;
  try {
    const res = await axios.get(meteoURL);
    meteo = res.data;
    console.log(res);
    console.log(meteo);
  } catch (err) {
    meteo = null;
    console.log(err);
  }
  res.render("index", {
    meteo,
    city,
    error,
  });
});

module.exports = router;
