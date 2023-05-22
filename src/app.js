const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");

// use morgan
app.use(morgan("combined"));

// use handlebars
app.engine(
  ".hbs",
  hbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resource/views"));

// use static file
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/detail", (req, res) => {
  console.log(req.url);
  res.send("Detail");
});

app.listen(port, (req, res) => {
  console.log("Chuong trinh dang chay!");
});
