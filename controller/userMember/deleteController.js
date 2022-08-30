const con = require("../../database/mysql");

function delData(req, res) {
  let pnr = req.params.pnr;
  async function deleteData() {
    var sql = ` delete from railwayManagment where pnr = ${pnr}`;
    const result = await con.query(sql);
    if (result[0].affectedRows > 0) {
      res.json("data deleted");
    } else {
      res.json("Data Not Deleted");
    }
  }
  deleteData();
}
module.exports.delData = delData;
