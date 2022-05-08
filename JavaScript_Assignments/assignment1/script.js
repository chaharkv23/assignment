let table, tBody, tHead;

function dynamicTable(){
    var body = document.getElementById("body");
    table = document.createElement("table");
    tHead = document.createElement("thead");
    tBody = document.createElement("tbody");
    table.append(tHead);
    table.append(tBody);
    table.classList.add("table");
    headerSection("Name", "Age","DOB","Email","Company");
    addData("Krishnaveer","19","10-10-2002","krishanveer@gmail.com","Gemini")
    addData("Sahil","23","22-01-1999","sahil@gmail.com","Flipkart")
    addData("Pratiksha","22","21-09-1999","pratiksha@gmail.com","Microsoft")
    addData("Tanuj","24","21-10-1997","tanuj@gmail.com","Disnep + Hotstar")
    body.append(table)
}

function headerSection(name,age,DOB,email,company){
    var tRow = document.createElement("tr");
    tRow.classList.add("table-dark");
    var data1 = document.createElement("th");
    var data2 = document.createElement("th");
    var data3 = document.createElement("th");
    var data4 = document.createElement("th");
    var data5 = document.createElement("th");
    var Name = document.createTextNode(name);
    var Age = document.createTextNode(age);
    var DoB = document.createTextNode(DOB);
    var Email = document.createTextNode(email);
    var Company = document.createTextNode(company);
    data1.appendChild(Name);
    data2.appendChild(Age);
    data3.appendChild(DoB);
    data4.appendChild(Email);
    data5.appendChild(Company);
    tRow.append(data1);
    tRow.append(data2);
    tRow.append(data3);
    tRow.append(data4);
    tRow.append(data5);
    tHead.append(tRow);
}

function addData(name,age,DOB,email,company){
    var row = document.createElement("tr");
    var data1 = document.createElement("td");
    var data2 = document.createElement("td");
    var data3 = document.createElement("td");
    var data4 = document.createElement("td");
    var data5 = document.createElement("td");
    var Name = document.createTextNode(name);
    var Age = document.createTextNode(age);
    var DoB = document.createTextNode(DOB);
    var Email = document.createTextNode(email);
    var Company = document.createTextNode(company);
    data1.appendChild(Name);
    data2.appendChild(Age);
    data3.appendChild(DoB);
    data4.appendChild(Email);
    data5.appendChild(Company);
    row.append(data1);
    row.append(data2);
    row.append(data3);
    row.append(data4);
    row.append(data5);
    tBody.append(row);
}
