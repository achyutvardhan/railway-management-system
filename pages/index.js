const detail = document.querySelector(".divDetail");
const container = document.querySelector(".container");
const newContainer = document.querySelector(".container-1");
let add = document.getElementById("add");
detail.remove();
newContainer.remove();
let submit = document.querySelector("#submit");
submit.addEventListener("click", showDetail);

async function showDetail(e) {
  let input = document.getElementById("formGroupExampleInput").value;

  //fetch function
  let result = await fetch(`http://localhost:5000/userMember/submit/${input}`, {
    method: "GET",
    mode: "no-cors",
  })
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      return res.json();
    })
    .then((json) => {
      // console.log(json);

      input = document.getElementById("formGroupExampleInput").value;
      for (let index = 0; index < json.length; index++) {
        if (input == json[index].pnr) {
          container.innerHTML = ` <div class="divPnr">
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Enter PNR:</label>
              <input type="number" class="form-control" id="formGroupExampleInput" placeholder="123456789">
              <div class="flex-0">
                  <div class="col-auto">
                      <button type="submit" class="btn btn-primary" id="submit">Submit</button>
                    </div>
                    <div class="col-auto">
                      <button type="submit" class="btn btn-primary" id="add">Add</button>
                    </div>
              </div>
            </div>
      </div>
      <div class="divDetail" id="divDetail">
          <table class="table" id="table1">
              <thead>
                <tr>

                  <th scope="col">User Information</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>

                  <td>PNR:</td>
                  <td id="pnr">${json[index].pnr}</td>

                </tr>
                <tr>

                  <td>NAME:</td>
                  <td id="name">${json[index].name}</td>
                </tr>
                <tr>

                 <td>SEAT NO:</td>
                 <td id="seatNo">${json[index].seatno}</td>
                 <td>BIRTH NO:</td>
                  <td id="birthNo">${json[index].birthno}</td>
                </tr>
                <tr>
                  <td>FROM:</td>
                 <td id="from">${json[index].fromS}</td>
                 <td>TO:</td>
                  <td id="to">${json[index].toS}</td>
                </tr>
                <tr>
                  <td>DATE-DEPATRURE:</td>
                 <td id="dateDepart">${json[index].dateOfDeparture}</td>
                 <td>DATE-ARRIVAL:</td>
                  <td id=" dateArrival">${json[index].dateOfArrival}</td>
                </tr>
                <tr>
                  <td>TIME-DEPART:</td>
                 <td id="timeDepart">${json[index].timeOfArrival}</td>
                 <td>TIME-ARRIVAL:</td>
                  <td id="timeArrival">${json[index].timeOfDeparture}</td>
                </tr>
              </tbody>
            </table>
            <div class="flex-1">
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary" id="delete">Delete</button>
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary" id="edit">Edit</button>
                  </div>
            </div>
      </div>`;
          submit = document.querySelector("#submit");
          submit.addEventListener("click", showDetail);
          // add = document.getElementById("add");
          // add.remove();

          //now lets head towards delete

          let id = index + 1;
        }
      }
    })
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
}

add.addEventListener("click", enterDetail);
function enterDetail(e) {
  container.replaceWith(newContainer);

  const save = document.querySelector("#save1");
  console.log(save);
  save.addEventListener("click", saveDetail);

  function saveDetail(e) {
    let pnrN = document.getElementById("pnr").value;
    let name = document.getElementById("name").value;
    let seatNo = document.getElementById("seatNo").value;
    let birthNo = document.getElementById("birthNo").value;
    let fromS = document.getElementById("from").value;
    let toS = document.getElementById("to").value;
    let dateDepart = document.getElementById("dateDepart").value;
    let dateArrival = document.getElementById("dateArrival").value;
    let timeDepart = document.getElementById("timeDepart").value;
    let timeArrival = document.getElementById("timeArrival").value;

    async function postData(
      url = "http://localhost:5000/userMember/add",
      data = {
        pnr: pnrN,
        name: name,
        seatno: seatNo,
        birthno: birthNo,
        fromS: fromS,
        toS: toS,
        dateOfDeparture: dateDepart,
        dateOfArrival: dateArrival,
        timeOfArrival: timeDepart,
        timeOfDeparture: timeArrival,
      }
    ) {
      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }

    postData();
    alert("data registered successfully!");
  }
}
