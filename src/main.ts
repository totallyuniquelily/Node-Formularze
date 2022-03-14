import express = require("express");
import mysql = require("mysql");
var app = express();

const db_name = "";

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: db_name,
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to database");
// });

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/fomr.html", (req, res) => {
  res.sendFile(__dirname + "/" + "fomr.html");
});

// //
// app.get("/get.html", function (req, res) {
//   res.sendFile(__dirname + "/" + "get.html");
// });

// app.get("/form_all.html", function (req, res) {
//   res.sendFile(__dirname + "/" + "forms.html");
// });

// app.get("/form_get", function (req, res) {
//   res.header({ "Content-Type": "text/plain", charset: "utf-8" });
//   response = {
//     imie: req.query.imie,
//     nazwisko: req.query.nazwisko,
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// });

// const print = (res, tables) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   res.write("<table>");

//   // Table head
//   res.write("<tr>");
//   if (tables.length > 0) {
//     for (i in tables[0]) {
//       res.write(`<th>${i}</th>`);
//     }
//   }
//   res.write("</tr>");

//   // Rows
//   tables.forEach((el) => {
//     res.write("<tr>");
//     for (i in el) {
//       res.write(`<td>${el[i]}</td>`);
//     }
//     res.write("</tr>");
//   });
//   res.write("</table>");
// };

// app.get("/tworzeniebazy/", (req, res) => {
//   let sql = "CREATE DATABASE " + db_name;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Database was created");
//   });
// });

// app.get("/tworzenietabeli/", (req, res) => {
//   let sql =
//     "create table kings (id int AUTO_INCREMENT, name varchar(50), house varchar(50), primary key(id))";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Table was created");
//   });
// });

// app.get(`/dodajrekord/`, (req, res) => {
//   let post = { name: req.query.name, house: req.query.house };
//   let sql = "INSERT INTO kings SET ?";
//   db.query(sql, post, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Record was created");
//   });
// });

// app.get("/wyswietlrekordy", (req, res) => {
//   let sql = "select * from kings;";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     print(res, result);
//     console.log(result);
//     // res.send("Records displayed");
//     res.end();
//   });
// });

// app.get("/wyswietlrekord/", (req, res) => {
//   let sql = `select * from kings where id = ${req.query.id}`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     print(res, result);
//     console.log(result);
//     // res.send("Record displayed");
//   });
// });

// app.get("/usunrekord/", (req, res) => {
//   let sql = `delete from kings where id = ${req.query.id}`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send(`Record id = ${req.query.id} was deleted`);
//   });
// });

app.listen(3000, () => console.log("Listening on 3000"));
