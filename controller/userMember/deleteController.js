const con = require("../../database/mysql");

function delData(req, res) {
  // const found = dbdata.some((member) => member.pnr === req.params.pnr);
  // if (found) {
  //   res.json({
  //     msg: "deleted user",
  //     User: dbdata.filter((member) => member.pnr !== req.params.pnr),
  //   });
  // } else {
  //   res.status(400).send("Data NOT FOUND");
  // }
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
