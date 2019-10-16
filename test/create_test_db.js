var mysql = require("mysql");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // delete test db if it exists already
  con.query("DROP DATABASE IF EXISTS testdb", function(err, result) {
    if (err) throw err;
    console.log("Database deleted");
  });
  con.query("CREATE DATABASE testdb", function(err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
