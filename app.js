const express = require("express"),
  app = express();

require("dotenv").config()
const routes = require("./routes/route")

// app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static("public"))
// app.use(express.urlencoded({extended: true}));
app.use(routes)















// PORT //
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening here: http://localhost:${PORT}`);
});
