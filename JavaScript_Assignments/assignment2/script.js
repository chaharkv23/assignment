let userName, email, phone;
let userNameTrue, emailTrue, numberTrue;
let incr = 1;

function main() {
    userNameTrue = false
    emailTrue = false
    numberTrue = false
    userName = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    validateData();
}

function validateData() {
    var a = /^[A-Za-z]+$/;
    var b = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var c = /^\d{10}$/;
    if (a.test(userName) && userName.length != 0) {
        userNameTrue = true;
        document.getElementById("name-valid").style.display = "none";
    } else {
        userName = false;
        document.getElementById("name-valid").style.display = "block";
    }
    if (b.test(email) && email.length != 0) {
        emailTrue = true;
        document.getElementById("email-valid").style.display = "none";
    } else {
        email = false;
        document.getElementById("email-valid").style.display = "block";
    }
    if (c.test(phone) || phone.length == 0) {
        numberTrue = true;
        document.getElementById("phone-valid").style.display = "none";
    } else {
        phone = false;
        document.getElementById("phone-valid").style.display = "block";
    }
    arevalidDetails();
}


function arevalidDetails() {
    if (userNameTrue && emailTrue && numberTrue) {
        saveInformation();
    }
}

function saveInformation() {
    localStorage.setItem(incr + "name", userName);
    localStorage.setItem(incr + "email", email);
    localStorage.setItem(incr + "phone", phone);
    showInformation();
}

function showInformation() {
    var table = document.getElementById("table-body");
    let p = document.createElement("tr")
    console.log(localStorage);
    p.innerHTML = `<tr>
    <th scope="row">${incr}</th>
    <td>${localStorage.getItem(incr + "name")}</td>
    <td>${localStorage.getItem(incr + "email")}</td>
    <td>${localStorage.getItem(incr + "phone")}</td>
  </tr>`
    table.append(p);
    incr++;
}