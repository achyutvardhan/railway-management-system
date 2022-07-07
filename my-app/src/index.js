import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


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
  }}})}

add.addEventListener('click',enterDetail)
function enterDetail(e) {
    
    container.replaceWith(newContainer)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
