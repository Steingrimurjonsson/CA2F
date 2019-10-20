import 'bootstrap/dist/css/bootstrap.css'

//document.getElementById("but").onclick = function (e) {
  //  e.preventDefault();
  //  const f = document.querySelector("#fName");
 //   const l = document.querySelector("#lName");
  //  const e = document.querySelector("#email");
//    const p = document.querySelector("#phone");
 //   const a = document.querySelector("#address");
 //   const c = document.querySelector("#city");
 //   const h = document.querySelector("#hobby");
  // console.log(idJ.value);
 //const allJokes = jokes.getJokeById([idJ.value]);

 //Add response msg
 //document.getElementById("pCreatedEdit").innerHTML = response;
  
 //}
 function userToTable(item) {
    var tableData = item.map(x => "<tr><td>" + x.id + "</td><td><p>" + x.fName + "</p></td><td>" + x.lName + "</td><td>" + x.email + "</td><td>" + x.phones + "</td><td>" + x.hobbies + "</td><td>" + x.address + "</td></tr>");
    tableData.unshift("<table class=\"table\"><tr><th>ID</th><th>First name</th><th>Last name</th><th>Email</th><th>Phone</th><th>Hobbies</th><th>Address</th></tr>");
    tableData.push("</table>");
    return tableData.join('');
}

 
//function userToTable(item) {
 //   var tableData = item.map(x => "<tr><td>" + x.id + "</td><td><p>" + x.age + "</p></td><td>" + x.name + "</td><td>" + x.gender + "</td><td>" + x.email + "</td></tr>");
//    tableData.unshift("<table class=\"table\"><tr><th>ID</th><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>");
 //   tableData.push("</table>");
 //   return tableData.join('');
//}

//function userToP(item) {
 //   var tableData = ["<tr><td>" + item.id + "</td><td><p>" + item.age + "</p></td><td>" + item.name + "</td><td>" + item.gender + "</td><td>" + item.email + "</td></tr>"];
  //  tableData.unshift("<table class=\"table\"><tr><th>ID</th><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>");
 //   tableData.push("</table>");
  //  return tableData;
//}

window.onload = function (e) {
    e.preventDefault();
    let url = "https://ruffsacks.com/CA2/api/person/all";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            table.innerHTML = userToTable(data);

        });
};
function getOptions() {
    return {
       method: "GET",
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
       }
    };
 }
 window.onload = function (e) {
    e.preventDefault();
    fetch("https://ruffsacks.com/CA2/api/person/all", getOptions)
    .then(res => res.json())
    .then(data => {
       console.log("data", data);

    })
 }
//but.onclick = function (e) {
   // e.preventDefault();
  //  let url = "http://localhost:3333/api/users/" + txt.value;
   // fetch(url)
   //     .then(res => res.json())
     //   .then(data => {
    //        table.innerHTML = userToP(data);
     //   });
//};

