let url = "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/";
 var x = document.getElementById("tdList");

function displayContent(data) {

    for(let i =0; i <data.length; i++) {
        console.log(data[i])
      
        x.innerHTML +=
            '<tr id="row ' + data[i].id + ' ">' +
            '<th id="td">' + data[i].name + '</th>' +
            '<td>' + data[i].last_name + '</td>' +
            '<td><button type="button" id="btnDelete" class="btn btn-danger">Delete</button></td > ' +
            '<td><button type="button" id=" viewMore' + data[i].id +'" onclick = btnView(this) name="view" class="viewMore btn btn-secondary">View More</button></td >' +
            '</tr>';
        };
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        displayContent(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", url, true);
xhttp.send();


function btnView(e) {
    
    console.log(e.id);

    alert(e.id)
   
}


// content.forEach(function btnView (data) {
//     // var x = document.getElementById("tdList");
//     alert(data)       


// });   



// '<td><button type="button" class="supLine" value="Supprimer" id="supLine" onclick="supLine('+data.id +')"> &mdash; </button></td>' +
// '</tr>';