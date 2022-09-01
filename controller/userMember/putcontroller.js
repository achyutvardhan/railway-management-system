const con = require("../../database/mysql");
function put(req, res) {
  const updUser = req.body;
  console.log(updUser);
  let pnr = req.params.pnr;
  async function update() {
    var sql = `update railwayManagment set name = '${updUser.user_name}',seatno = ${updUser.seatno},birthno ='${updUser.birthno}', fromS = '${updUser.from}',toS = '${updUser.to}',dateOfDeparture ='${updUser.dateOfDeparture}', dateOfArrival = '${updUser.dateOfArrival}',timeOfArrival = '${updUser.timeOfArrival}',timeOfDeparture = '${updUser.timeOfDeparture}' where pnr = '${pnr}'`;
    var result = await con.query(sql);
    if (result[0].affectedRows > 0) {
      res.json("data updated ");
    } else {
      res.json("data not updated");
    }
  }
  update();
}
module.exports.put = put;
