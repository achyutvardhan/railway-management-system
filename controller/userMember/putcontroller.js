const dbdata = require("../../db");
function put(req, res) {
  const found = dbdata.some((member) => member.pnr === req.params.pnr);
  if (found) {
    const updUser = req.body;
    dbdata.forEach((element) => {
      if (element.pnr === req.params.pnr) {
        element.user_name = updUser.user_name
          ? updUser.user_name
          : element.user_name;
        element.seat_number = updUser.seat_number
          ? updUser.seat_number
          : element.seat_number;
        element.birth_number = updUser.birth_number
          ? updUser.birth_number
          : element.birth_number;
        element.from = updUser.from ? updUser.from : element.from;
        element.to = updUser.to ? updUser.to : element.to;
        element.date_of_departure = updUser.date_of_departure
          ? updUser.date_of_departure
          : element.date_of_departure;
        element.time_of_arrival = updUser.time_of_arrival
          ? updUser.time_of_arrival
          : element.time_of_arrival;
        element.date_of_arrival = updUser.date_of_arrival
          ? updUser.date_of_arrival
          : element.date_of_arrival;
        element.time_of_departure = updUser.time_of_departure
          ? updUser.time_of_departure
          : element.time_of_departure;
        element.pnr = updUser.pnr ? updUser.pnr : element.pnr;
        res.json({ msg: updated, element });
      }
    });
  } else {
    res.status(400).send("Data NOT FOUND TO BE EDIT");
  }
}
module.exports.put = put;
