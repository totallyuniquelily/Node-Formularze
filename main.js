var express = require("express");
var app = express();
const mysql = require("mysql");

const db_name = "";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: db_name,
});
