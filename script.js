let url = "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/";
var x = document.getElementById("tdList");

function displayContent(data) {

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])

        x.innerHTML +=
            '<tr id="row ' + data[i].id + ' ">' +
            '<th id="td">' + data[i].name + '</th>' +
            '<td>' + data[i].last_name + '</td>' +
            '<td><button type="button" id="btnDelete" class="btn btn-danger" onclick = btnDel(' + data[i].id +',this) >Delete</button></td > ' +
            '<td><button type="button" id=" viewMore' + data[i].id + '" onclick = btnView(' + data[i].id + ') name="view" class="viewMore btn btn-secondary">View More</button></td >' +
            '</tr>';
    };
}

// Afficher un Post

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        displayContent(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", url, true);
xhttp.send();


function btnView(ID) {

    console.log(ID);

    alert(ID)
}

// Request Delete

function btnDel(ID,e) {

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