const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Infobeans",
  database: "todolist",
});

con.connect(function (error) {
  if (error) {
    console.log("Connection Failed");
    console.log("error is", error);
  } else {
    console.log("Connected to Database");
  }
});

module.exports = con;
