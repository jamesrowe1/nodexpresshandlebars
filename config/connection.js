// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "v36fhfhc1t5f3h9b",
  password: "xugfgocz8zy2blrz",
  database: "bsq769gerd65b421",
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
