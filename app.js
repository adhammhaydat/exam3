let form = document.getElementById('form');
let table= document.getElementById('table');

function Donation(name , age ,amount){
  this.name=name;
  this.age=age;
  this.amount=amount;
  Donation.all.push(this);
}
Donation.all=[];

function getData(e){
  e.preventDefault();
  let name=e.target.name.value;
  let amount=e.target.select.value;
  let age =getRandomInt(20,35);
  table.deleteRow(-1);
  new Donation(name,age,amount);
  localStorage.setItem('info', JSON.stringify(Donation.all));

  let tr =document.createElement('tr');
  table.appendChild(tr);

  let td1 =document.createElement('td');
  tr.appendChild(td1);
  td1.textContent=name;

  let td2 =document.createElement('td');
  tr.appendChild(td2);
  td2.textContent=age;

  let td3 =document.createElement('td');
  tr.appendChild(td3);
  td3.textContent=amount;
  creatFooter();
}
form.addEventListener('submit',getData);

function render(){
  let data= JSON.parse(localStorage.getItem('info'));

  if(data){
    Donation.all=data;
    for (let i = 0; i < data.length; i++) {
      let tr =document.createElement('tr');
      table.appendChild(tr);

      let td1 =document.createElement('td');
      tr.appendChild(td1);
      td1.textContent=data[i].name;

      let td2 =document.createElement('td');
      tr.appendChild(td2);
      td2.textContent=data[i].age;

      let td3 =document.createElement('td');
      tr.appendChild(td3);
      td3.textContent=data[i].amount;

      
    }
  }
}

render();

function creatFooter(){
  let total=0;
  
  for (let i = 0; i < Donation.all.length; i++) {
    total +=parseInt(Donation.all[i].amount); 
    console.log(Donation.all.amount)
  }
  let tr =document.createElement('tr');
  table.appendChild(tr);

  let td1 =document.createElement('th');
  tr.appendChild(td1);
  td1.setAttribute('colspan',3);
  td1.textContent=`Total: ${total}`;

  

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
creatFooter();