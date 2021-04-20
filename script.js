function displayContent(content) {
    content.forEach(function (data) {
        var x = document.getElementById("tdPost");
        x.innerHTML +=
            '<tr id="row ' + data.id + ' ">' +
                '<td id="td">' + data.id + '</td>' +
                '<td>' + data.name + '</td>' +
                '<td><button type = "button" class = "btn btn-danger">Delete</button></td > ' +
                '<td><button type = "button" class = "btn btn-secondary">Voir Plus</button></td >' + 
            '</tr>';
    });
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        displayContent(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees", true);
xhttp.send();