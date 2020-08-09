// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ec2-35-153-12-59.compute-1.amazonaws.com",
  port: 5432,
  user: "celfcrvumaqasb",
  password: "1c2840aee57bd45ad914ac88d426ad746f18e40b2272a0c90696425631256d2b",
  database: "d7ffg4e0v4ahai",
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
