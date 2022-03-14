import express = require("express");
import mysql = require("mysql");
var app = express();

const db_name = "Restaurant";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: db_name,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/fomr.html", (req, res) => {
  res.sendFile(__dirname + "/" + "fomr.html");
});

app.get("/add", (req, res) => {
  let last_name = req.query.last_name;
  let table_number = req.query.table_number;
  let guests = req.query.guests;
  let phone_number = req.query.phone_number;

  let q = `INSERT INTO Reservation (last_name, table_number, guests, phone_number) VALUES ('${last_name}', '${table_number}', '${guests}', '${phone_number}');`;

  db.query(q);
  console.log(
    `Added: '${last_name}', '${table_number}', '${guests}', '${phone_number}`
  );
  res.redirect("/fomr.html");
});

app.listen(3000, () => console.log("Listening on 3000"));
