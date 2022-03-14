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

const print = (res, tables) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<table>");

  // Table head
  res.write("<tr>");
  if (tables.length > 0) {
    for (let i in tables[0]) {
      res.write(`<th>${i}</th>`);
    }
  }
  res.write("</tr>");

  // Rows
  tables.forEach((el) => {
    res.write("<tr>");
    for (let i in el) {
      res.write(`<td>${el[i]}</td>`);
    }
    res.write(
      `<td><a href="/delete/${el["id"]}"><button class="delete" >DELETE</button></a></td>`
    );
    res.write("</tr>");
  });
  res.write("</table>");
};

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

app.get("/delete/:id", (req, res) => {
  let query = `DELETE FROM Reservation WHERE id = '${req.params.id}'`;
  db.query(query);
  console.log(`Deleted: ${req.params.id}`);
  res.redirect("/show.html");
});

app.get("/show.html", (req, res) => {
  let sql = "SELECT * FROM Reservation;";
  db.query(sql, (err, result) => {
    if (err) throw err;
    print(res, result);
    // console.log(result);
    // res.send("Records displayed");
    res.end();
  });
});

app.listen(3000, () => console.log("Listening on 3000"));
