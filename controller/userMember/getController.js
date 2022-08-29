const con = require("../../database/mysql");
function get(req, res) {
  let pnr = req.params.pnr;

  //fetch from database
  async function getData() {
    var sql = `select * from railwayManagment where pnr = '${pnr}'`;
    var result = await con.query(sql);
    res.json(result[0][0]);
  }
  getData();
}
module.exports.get = get;
