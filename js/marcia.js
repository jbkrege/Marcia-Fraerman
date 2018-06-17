// http://jsfiddle.net/WRgjv/655/



paintings = [ 
  {
    "name": "Red Square",
    "img": "./img/redSquare.jpg",
    "year": "2018",
    "medium": "Acrylic paint on canvas",
    "size": "20 x 20 inches"
  },

  {
    "name": "Square One II",
    "img":  "./img/squareOneII.jpg",
    "year": "2018",
    "medium": "Acrylic paint on canvas",
    "size": "40 x 40 inches"
  },

  {
    "name": "Get Happy",
    "img": "./img/getHappy.jpg",
    "year": "2018",
    "medium": "Acrylic paint on canvas",
    "size": "24 x 36 inches"
  }, 
  {
    "name": "Square Dance",
    "img": "./img/squareDance.jpg",
    "year": "2017",
    "medium": "Acrylic paint on canvas",
    "size": "20 x 20 inches"
  }, 
  {
    "name": "Square Inch",
    "img": "./img/squareInch.jpg",
    "year": "2011",
    "medium": "Acrylic paint on canvas",
    "size": "20 x 20 inches"
  }, 
  {
    "name": "Be There Or Be Square",
    "img": "./img/beThereOrBeSquare.jpg",
    "year": "2010",
    "medium": "Acrylic paint on canvas",
    "size": "24 x 30 inches"
  }, 
  {
    "name": "Square One I",
    "img": "./img/squareOneI.jpg",
    "year": "2010",
    "medium": "Acrylic paint on canvas",
    "size": "20 x 20 inches"
  }, 
  {
    "name": "Fair and Square I",
    "img": "./img/fairAndSquare.jpg",
    "year": "2009",
    "medium": "Acrylic paint on canvas",
    "size": "20 x 24 inches"
  }, 
  {
    "name": "Fair and Square II",
    "img": "./img/fairAndSquareII.jpg",
    "year": "2009",
    "medium": "Acrylic paint on canvas",
    "size": "30 x 40 inches"
  }, 
  {
    "name": "Dark Night I",
    "img": "./img/darkNightI.jpg",
    "year": "2008",
    "medium": "Acrylic paint on canvas",
    "size": "20 x 20 inches"
  }, 
  {
    "name": "Dark Night II",
    "img": "./img/darkNightII.jpg",
    "year": "2008",
    "medium": "Acrylic paint on canvas",
    "size": "20 x 20 inches"
  }, 
  {
    "name": "Dark Night III",
    "img": "./img/darkNightIII.jpg",
    "year": "2008",
    "medium": "Acrylic paint on canvas",
    "size": "20 x 20 inches"
  }, 
  {
    "name": "Dark Night IV",
    "img": "./img/darkNightIV.jpg",
    "year": "2008",
    "medium": "Acrylic paint on canvas",
    "size": "20 x 20 inches"
  }
]


var myPhoto = ["./img/redSquare.jpg","./img/squareOneII.jpg"];

var container = document.getElementById("paintings_container");

var table = document.createElement("table");
document.getElementById("paintings_container").appendChild(table);

for (var i=0, len = paintings.length; i < len; ++i) {
    var painting = document.createElement("div");
    painting.className = "frame";

    var photo = document.createElement("div");
    img = new Image();
    img.src = paintings[i]["img"];
    img.alt = paintings[i]["name"];
    img.className = "painting";
    photo.appendChild(img);
    painting.appendChild(img);

    var desc = document.createElement("div");
    desc.className = "desc";

    var title = document.createElement("div");
    var text = document.createElement("p");
    text.className = "i";
    text.innerHTML = paintings[i]["name"];
    title.appendChild(text);
    desc.appendChild(title);

    var rest = document.createElement("div");
    rest.innerHTML = ", "+paintings[i]["year"]+", "+paintings[i]["medium"]+", "+paintings[i]["size"];
    desc.appendChild(rest);

    painting.appendChild(desc);

    document.getElementById("paintings_container").appendChild(painting);

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
