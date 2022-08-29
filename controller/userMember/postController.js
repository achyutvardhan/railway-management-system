const dbdata = require("../../db");
const con = require("../../database/mysql");

function add(req, res) {
  const newUser = {
    pnr: req.body.pnr,
    user_name: req.body.user_name,
    seat_number: req.body.seat_number,
    birth_number: req.body.birth_number,
    from: req.body.from,
    to: req.body.to,
    date_of_departure: req.body.date_of_departure,
    date_of_arrival: req.body.date_of_arrival,
    time_of_arrival: req.body.time_of_arrival,
    time_of_departure: req.body.time_of_departure,
  };

  async function postData() {
    var sql = `insert into railwayManagment select ${newUser.pnr},'${newUser.user_name}',${newUser.seat_number},'${newUser.birth_number}','${newUser.from}','${newUser.to}','${newUser.date_of_departure}','${newUser.date_of_arrival}','${newUser.time_of_arrival}','${newUser.time_of_departure}' where not exists(select * from railwayManagment where pnr = '${newUser.pnr}')`;
    var result = await con.query(sql);
    if (result[0].affectedRows > 0) {
      res.send("Data Saved");
    } else {
      res.send("Data Failed To Save");
    }
  }
  postData();
}
module.exports.add = add;
