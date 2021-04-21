function displayContent(content) {
    content.forEach(function (data) {
        var x = document.getElementById("tdList");
        x.innerHTML +=
            '<tr id="row ' + data.id + ' ">' +
                '<th id="td">' + data.name + '</th>' +
                '<td>' + data.last_name + '</td>' +
                '<td><button type="button" id="btnDelete" class="btn btn-danger">Delete</button></td > ' +
                '<td><button type="button" id="btnViewMore" class="btn btn-secondary">View More</button></td >' + 
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