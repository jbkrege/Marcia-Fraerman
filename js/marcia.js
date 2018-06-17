// http://jsfiddle.net/WRgjv/655/

var names = ["Red Square", "Square One II"];

var paintings = [ 
                  {"name": "Red Square",
                  "img": "./img/redSquare.jpg",
                  "year": "2018",
                  "medium": "Acrylic paint on canvas",
                  "size": "20 x 20 inches"},

                  {"name": "Square One II",
                  "img":  "./img/squareOneII.jpg",
                  "year": "2018",
                  "medium": "Acrylic paint on canvas",
                  "size": "40 x 40 inches"}
                ]

var myPhoto = ["./img/redSquare.jpg","./img/squareOneII.jpg"];

var container = document.getElementById("table_container");

var table = document.createElement("table");
document.getElementById("table_container").appendChild(table);

for (var i=0, len = paintings.length; i < len; ++i) {
    var painting = document.createElement("div");
    painting.className = "container";

    var photo = document.createElement("div");
    img = new Image();
    img.src = paintings[i]["img"];
    img.alt = paintings[i]["name"];
    img.className = "painting";
    photo.appendChild(img);
    painting.appendChild(photo);

    var desc = document.createElement("div");
    desc.className = "desc";

    var title = document.createElement("div");
    var text = document.createElement("p");
    text.className = "i";
    text.innerHTML = paintings[i]["name"];
    title.appendChild(text);
    desc.appendChild(title);

    var year = document.createElement("div");
    year.innerHTML = paintings[i]["year"];
    desc.appendChild(year);

    var medium = document.createElement("div");
    medium.innerHTML = paintings[i]["medium"];
    desc.appendChild(medium);

    var size = document.createElement("div");
    size.innerHTML = paintings[i]["size"];
    desc.appendChild(size);

    painting.appendChild(desc);

    document.getElementById("table_container").appendChild(painting);

    // name.appendChild(document.createTextNode(names[i]));
    // name.innerHTML = names[i];
    
    // row.appendChild(name);
}


  //   <div class="container">
  //     <img class = "painting" src="img/cabo.jpg" alt="">
  //   <div class = "desc">
  //     <div><p class="i">Cabo</p></div> 
  //     <div>2003</div>
  //     <div>Acrylic paint and medium on canvas</div>
  //     <div>24 x 30 inches</div>
  //   </div>
  // </div>
