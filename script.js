
let element = document.getElementsByClassName("removenav");
function clickbar() {
  for (let i = 0; i < 4; i++)
    element[i].style.display = "block"
  document.getElementById("item").style.height = 'auto';
  document.getElementById('crossbar').style.display = "block";
  document.getElementById('bar').style.display = "none";
}
function clickcross() {
  for (let i = 0; i < 4; i++)
    element[i].style.display = "none";
  document.getElementById("item").style.height = '4rem';
  document.getElementById('crossbar').style.display = "none";
  document.getElementById('bar').style.display = "block";
}


let obj = [{
  "name": "Sajid",
  "location": "Mumbai",
  "role": "Developer",
},
{
  "name": "Minal",
  "location": "Amravati",
  "role": "Analyst",
},
{
  "name": "Harsha",
  "location": "Surat",
  "role": "TCI",
},
{
  "name": "Ram",
  "location": "Pune",
  "role": "Loy",
},
{
  "name": "Mahish",
  "location": "Pune",
  "role": "Loy",
},
{
  "name": "Gauri",
  "location": "Daryapur",
  "role": "Manager",
},
{
  "name": "Prag",
  "location": "Daryapur",
  "role": "Manager",
},
{
  "name": "Tejaswini",
  "location": "Mumbai",
  "role": "Engineer",
},
{
  "name": "Sai",
  "location": "Hydrabad",
  "role": "Doctor",
},
{
  "name": "Sri",
  "location": "Hydrabad",
  "role": "Doctor",
},
]


function handlesubmit() {
  const a = document.getElementById("locid").options[document.getElementById("locid").selectedIndex].value
  const b = document.getElementById("roleid").options[document.getElementById("roleid").selectedIndex].value
  var flag = true;
  //remove all existing element
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  const container = document.querySelector('#new');
  removeAllChildNodes(container);

  obj.map((elem) => {

    //search studets 
    if (elem.location == a && elem.role == b) {
      flag = false;
      //add students element
      var tag = document.createElement("h2");
      var text = document.createTextNode(elem.name);
      tag.appendChild(text);
      var element = document.getElementById("new");
      element.appendChild(tag);
      element.appendChild(document.createElement("br"));

      var tag = document.createElement("div");
      var text = document.createTextNode(elem.location);
      tag.appendChild(text);
      var element = document.getElementById("new");
      element.appendChild(tag);
      element.appendChild(document.createElement("br"));
      

      var tag = document.createElement("div");
      var text = document.createTextNode(elem.role);
      tag.appendChild(text);
      var element = document.getElementById("new");
      element.appendChild(tag);
    }

  })
  if (flag) {
    var tag = document.createElement("h2");
    var text = document.createTextNode("not found");
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
  }
}
