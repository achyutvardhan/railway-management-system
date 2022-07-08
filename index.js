
const detail = document.querySelector('.divDetail')
const container = document.querySelector('.container')
const newContainer = document.querySelector('.container-1')
let add = document.getElementById('add')
detail.remove()
newContainer.remove()
let submit = document.querySelector('#submit')
submit.addEventListener('click',showDetail);



function showDetail(e) {
  let input= document.getElementById('formGroupExampleInput').value

//fetch function
  fetch("http://localhost:3000/users")
.then(res=> res.json())
.then(json=>{
  input= document.getElementById('formGroupExampleInput').value
 for (let index = 0; index < json.length; index++) {
  if(input==json[index].pnr)
  {
    
    container.innerHTML=` <div class="divPnr">
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
            <td id="name">${json[index].user_name}</td>
          </tr>
          <tr>
            
           <td>SEAT NO:</td>
           <td id="seatNo">${json[index].seat_number}</td>
           <td>BIRTH NO:</td>
            <td id="birthNo">${json[index].birth_number}</td>
          </tr>
          <tr>
            <td>FROM:</td>
           <td id="from">${json[index].from}</td>
           <td>TO:</td>
            <td id="to">${json[index].to}</td>
          </tr>
          <tr>
            <td>DATE-DEPATRURE:</td>
           <td id="dateDepart">${json[index].date_of_departure}</td>
           <td>DATE-ARRIVAL:</td>
            <td id=" dateArrival">${json[index].date_of_arrival}</td>
          </tr>
          <tr>
            <td>TIME-DEPART:</td>
           <td id="timeDepart">${json[index].time_of_arrival}</td>
           <td>TIME-ARRIVAL:</td>
            <td id="timeArrival">${json[index].time_of_departure}</td>
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
</div>`
submit = document.querySelector('#submit')
submit.addEventListener('click',showDetail);
add = document.getElementById('add')
add.remove()

//now lets head towards delete
 let deleteItem = document.getElementById('delete')
deleteItem.addEventListener('click',deleteArray)
function deleteArray(e) {
 async function deleteData(url='http://localhost:3000/users', data ={
  "pnr":json[index].pnr ,
      "user_name":json[index].user_name,
      "seat_number": json[index].seat_number,
      "birth_number":json[index].birth_number,
      "from": json[index].from,
      "to": json[index].to,
      "date_of_departure": json[index].date_of_departure,
      "date_of_arrival": json[index].date_of_arrival,
      "time_of_arrival": json[index].time_of_arrival,
      "time_of_departure": json[index].time_of_departure
 }
 ){
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
 }
 deleteData().then(data => {
  console.log(data)
  alert(` deleted successfully`); // JSON data parsed by `data.json()` call
})

}

//EDIT THE EXISITING DETAIL
// let edit = document.getElementById('edit')
// edit.addEventListener("click",editItem)
// function editItem(e) {

//   json[index].user_name = "JHOSHI"
//   console.log(json[index].user_name)
//   async function editData(url='http://localhost:3000/users', data ={
  
//       "user_name":json[index].user_name
      
//  }
//  ){
//   const response = await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   return response.json()
//  }
//  editData()
// }



  }}})}

add.addEventListener('click',enterDetail)
function enterDetail(e) {
    
    container.replaceWith(newContainer);

    const save = document.querySelector('#save1')
console.log(save)
save.addEventListener('click',saveDetail)

function saveDetail(e) {
  

let pnrN = document.getElementById('pnr').value
let name = document.getElementById('name').value
let seatNo = document.getElementById('seatNo').value
let birthNo = document.getElementById('birthNo').value
let fromS = document.getElementById('from').value
let toS = document.getElementById('to').value
let dateDepart = document.getElementById('dateDepart').value
let dateArrival = document.getElementById('dateArrival').value
let timeDepart = document.getElementById('timeDepart').value
let timeArrival = document.getElementById('timeArrival').value

async function postData(url = 'http://localhost:3000/users', data = {
  "pnr": pnrN,
      "user_name": name,
      "seat_number": seatNo,
      "birth_number": birthNo,
      "from": fromS,
      "to": toS,
      "date_of_departure": dateDepart,
      "date_of_arrival": dateArrival,
      "time_of_arrival": timeDepart,
      "time_of_departure": timeArrival
}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

  postData()
  alert("data registered successfully!")
  
  
  }
    
}



