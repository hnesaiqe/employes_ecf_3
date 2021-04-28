let url = "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/";
var x = document.getElementById("tdList");

// Afficher /n Post
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        displayContent(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", url, true);
xhttp.send();

function displayContent(data) {

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])

        x.innerHTML +=
            '<tr id="row ' + data[i].id + ' ">' +
            '<th id="td">' + data[i].name + '</th>' +
            '<td>' + data[i].last_name + '</td>' +
            '<td><button type="button" id="btnDelete" class="btn btn-danger" onclick = btnDel(' + data[i].id + ',this) >Delete</button></td > ' +
            '<td><button type="button" id=" viewMore' + data[i].id + '" onclick = btnView(' + data[i].id + ') name="view" class="viewMore btn btn-secondary" data-toggle="modal" data-target="#exampleModal">View More</button></td >' +
            '</tr>';
    };
}

// Fonction /1 Modal post

function btnView(ID) {

    console.log(ID);
    document.getElementById("title").innerText = 'id = ' + ID;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            content(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", url + ID, true);
    xhttp.send();




}

// Request Delete

function btnDel(ID, e) {

    var ask = confirm("Êtes-vous sûr de vouloir supprimer le Post?");

    if (ask) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                displayContent(JSON.parse(this.responseText));
                e.parentElement.parentElement.remove();

            }
        };
        xhttp.open("DELETE", url + ID, true);
        xhttp.send();
    }
}
// Request Post

function loadDoc() {

    var name = document.getElementById("newName").value;
    var lastName = document.getElementById("newLastName").value;
    var jobTitle = document.getElementById("newJobTitle").value;
    var email = document.getElementById("newEmail").value;

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("name=" + name + "&last_name=" + lastName + "&job_title=" + jobTitle + "&email=" + email);

    document.getElementById('myForm').reset();
}

// Request Put

function btnEdit(ID) {

    var name = document.getElementById("modalName").value;
    var lastName = document.getElementById("modalLastName").value;
    var jobTitle = document.getElementById("modalJobTitle").value;
    var email = document.getElementById("modalEmail").value;

    var xhttp = new XMLHttpRequest();

    xhttp.open("PUT", url + ID, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("name=" + name + "&last_name=" + lastName + "&job_title=" + jobTitle + "&email=" + email);

}