function loadDoc() {
    
    let btn = document.getElementById("tableHead");
    btn.style.visibility = "visible";

    document.getElementById("tablecontent").style.visibility = "visible";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        appendData(data);
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send();

    
    
  }

function appendData(data){

    data.forEach(element => {
        
        let tr = document.createElement("tr");
        
        let name = document.createElement("td");
        // name.setAttribute("class","name");
        name.innerText = element["name"];

        let username = document.createElement("td");
        // username.setAttribute("class","username");
        username.innerText = element["username"];

        let email = document.createElement("td");
        // email.setAttribute("class","email");
        email.innerText = element["email"];

        let phone = document.createElement("td");
        // phone.setAttribute("class","phone");
        phone.innerText = element["phone"];

        let website = document.createElement("td");
        // website.setAttribute("class","website");
        website.innerText = element["website"];

        let address = document.createElement("td");
        // address.setAttribute("class","address");
        address.innerText = element["address"]["street"]+","+element["address"]["suite"]+","+element["address"]["city"]+","+element["address"]["zipcode"];

        let company = document.createElement("td");
        // company.setAttribute("class","company");
        company.innerText = element["company"]["name"];

        tr.append(name,username,email,phone,website,address,company);

        document.querySelector("#users").append(tr);
   });

}
