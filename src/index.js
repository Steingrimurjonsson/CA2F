import 'bootstrap/dist/css/bootstrap.css'


const allP = document.querySelector("#allP");

function userToTable(item) {
    var tableData = item.map(x => "<tr><td><p>" + x.fName + "</p></td><td>" + x.lName + "</td><td>" + x.email + "</td><td>" + x.phones + "</td><td>" + x.hobbies + "</td><td>" + x.address + "" + x.additionalInfo + " " + x.cityInfo + "</td></tr>");
    tableData.unshift("<table class=\"table\"><tr><th>First name</th><th>Last name</th><th>Email</th><th>Phone</th><th>Hobbies</th><th>Address</th></tr>");
    tableData.push("</table>");

    return tableData.join('');
}
function getAll() {
    let url = "https://ruffsacks.com/CA2/api/person/all";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            allP.innerHTML = userToTable(data);

        });
}

window.onload = function (e) {
    e.preventDefault();
    let url = "https://ruffsacks.com/CA2/api/person/all";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.value);
            allP.innerHTML = userToTable(data);

        });
};



but2.onclick = function (e) {
    e.preventDefault();
    let url = "https://ruffsacks.com/CA2/api/person/hobby/" + txt.value;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            table.innerHTML = userToTable(data);
        });
};

const howManypin = document.querySelector("#howManyPeopleIn");
but4.onclick = function (e) {
    e.preventDefault();
    let url = "https://ruffsacks.com/CA2/api/person/hobby/" + txt.value;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //howManypin.innerHTML =  _.size(obj.data) ;
            console.log(_.size(obj.data));
        });
};


but4.onclick = function (e) {
    e.preventDefault();
    let url = "https://ruffsacks.com/CA2/api/person/hobbyAmount/" + txt.value;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            howManypin.innerHTML = userToTable(data);
        });
};



but3.onclick = function (e) {
    e.preventDefault();
    let url = "https://ruffsacks.com/CA2/api/person/pInZip/" + txt.value;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            allP.innerHTML = userToTable(data);
        });
};


const allZips = document.querySelector("#allZips");

function zipsToTable(item) {
    var tableData = item.map(x => "<tr><td>" + x.zipCode + "</td><td>" + x.city + "</td></tr>");
    tableData.unshift("<table class=\"table\"><tr><th>Zips</th><th>City</th></tr>");
    tableData.push("</table>");
    return tableData.join('');
}
but5.onclick = function (e) {
    e.preventDefault();
    let url = "https://ruffsacks.com/CA2/api/person/allZip";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            allZips.innerHTML = zipsToTable(data);
        });
};
const f = document.querySelector("#fName");
const l = document.querySelector("#lName");
const em = document.querySelector("#email");
const p = document.querySelector("#phone");
const a = document.querySelector("#address");
const c = document.querySelector("#city");
const z = document.querySelector("#zip");
const h = document.querySelector("#hobby");
const url = "https://ruffsacks.com/CA2/api/person/";



function POSTOPTION() {
   /// const f = document.querySelector("#fName");
//const l = document.querySelector("#lName");
//const em = document.querySelector("#email");
const f = document.getElementById("fName").value;
const l = document.getElementById("lName").value;
const em = document.getElementById("email").value;

    var Method = "POST";
    var data = {
        fName: f,
        lName: l,
        email: em
    }
    console.log(fName);
    let options = {
        method: Method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    console.log(options);
    return options;
}

but.onclick = function (e) {
    e.preventDefault();
  
    fetch(url +"add/", POSTOPTION())
    .then(res => res.json())
        .then(function (data) {
            console.log(data);
            getAll();
        })

};