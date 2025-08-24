var mysql = require("mysql");

var hostname = "osm1xa.h.filess.io";
var database = "tugassxitjkt_alongtoday";
var port = "61001";
var username = "tugassxitjkt_alongtoday";
var password = "36d115dc3e141f945aa414bf139cb9531049eae9";

var con = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT 1+1").on("result", function (row) {
  console.log(row);
});
