const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Infobeans",
  database: "todolist",
});

function handleDisconnect() {
  con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Infobeans",
    database: "todolist",
  });

  con.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log("Connected to Database");
    }
  });
  con.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = con;
