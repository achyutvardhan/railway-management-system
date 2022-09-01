var mysql = require("mysql2");
var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "railwayManagment",
});

module.exports = con.promise();
