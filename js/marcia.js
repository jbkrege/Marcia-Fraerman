function displayPictures(){

}

var names = ["Red Square", "Square One II"];
var myPhoto = ["../img/redSquare.jpg","squareOneII.jpg"];

var container = document.getElementById("table_container");

var table = document.createElement("table");
document.getElementById("table_container").appendChild(table);

for (var i=0, len = names.length; i < len; ++i) {
    var row = document.createElement("tr"),
    name = document.createElement("td"),
    photo = document.createElement("td"),
    img = new Image();
    
    name.appendChild(document.createTextNode(names[i]));
    
    img.src = myPhoto[i];
    img.alt = names[i];
    photo.appendChild(img);
    
    row.appendChild(photo);
    row.appendChild(name);
    
    table.appendChild(row);
}