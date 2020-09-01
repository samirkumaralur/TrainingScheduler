var express = require("express");
var path = require("path");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index.hbs");
});

app.get("/index", function (req, res) {
  res.render("index.hbs");
});

app.get("/buttons", function (req, res) {
  res.render("buttons.hbs");
});

app.get("/cards", function (req, res) {
  res.render("cards.hbs");
});

app.get("/utilities-color", function (req, res) {
  res.render("utilities-color.hbs");
});

app.get("/utilities-color", function (req, res) {
  res.render("utilities-color.hbs");
});

app.get("/utilities-border", function (req, res) {
  res.render("utilities-border.hbs");
});

app.get("/utilities-animation", function (req, res) {
  res.render("utilities-animation.hbs");
});

app.get("/utilities-other", function (req, res) {
  res.render("utilities-other.hbs");
});

app.get("/login", function (req, res) {
  res.render("login.hbs");
});

app.get("/register", function (req, res) {
  res.render("register.hbs");
});

app.get("/forgot-password", function (req, res) {
  res.render("forgot-password.hbs");
});

app.get("/404", function (req, res) {
  res.render("404.hbs");
});

app.get("/blank", function (req, res) {
  res.render("blank.hbs");
});

app.get("/charts", function (req, res) {
  res.render("charts.hbs");
});

app.get("/tables", function (req, res) {
  res.render("tables.hbs");
});

app.listen(3000, function () {
  console.log("Started..");
});
