// http://jsfiddle.net/WRgjv/655/

var pad = String(window.innerHeight/2 - (document.getElementById("statement").offsetHeight/2)+5)+"px";
document.getElementById("statement").style.paddingTop = pad;
document.getElementById("statement").style.paddingBottom = pad;

pad = String(window.innerHeight/2 - (document.getElementById("about").offsetHeight/2)+5)+"px";
document.getElementById("about").style.paddingTop = pad;
document.getElementById("about").style.paddingBottom = pad;

pad = String(window.innerHeight/2 - (document.getElementById("contact").offsetHeight/2)+5)+"px";
document.getElementById("contact").style.paddingTop = pad;
document.getElementById("contact").style.paddingBottom = pad;

all_paintings = {
  "colorWeave": 
    [ 
      {
        "name": "Square One II",
        "img":  "./img/squareOneII.jpg",
        "year": "2018",
        "medium": "Acrylic paint on canvas",
        "size": "40 x 40 inches"
      },
      {
        "name": "Red Square",
        "img": "./img/redSquare.jpg",
        "year": "2018",
        "medium": "Acrylic paint on canvas",
        "size": "20 x 20 inches"
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
        "img": "./img/fairAndSquareI.jpg",
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
    ],
  "justBecause":
    [
      {
        "name": "Get Happy",
        "img": "./img/getHappy.jpg",
        "year": "2018",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 36 inches"
      }
    ]
}


function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

var era = ["Color Weave","Just Because"];

var container = document.getElementById("paintings_container");

// <li class = "nav-item"><a class="nav-link">x</a></li>
// <li class = "nav-item"><a class="nav-link">y</a></li>
// <li class = "nav-item"><a class="nav-link">z</a></li>

for (var e = 0, elen = era.length; e < elen; ++e){
  // Add era to dropdown menu
  var dropdown = document.getElementById("drop");
  var li = document.createElement("li");
  li.className = "nav-item";
  var link = document.createElement("a");
  link.className = "nav-link";
  link.href = "#"+camelize(era[e]);
  link.innerHTML = era[e]
  li.appendChild(link);
  dropdown.appendChild(li);

  // Add anchor
  var anchor = document.createElement("a")
  anchor.name = camelize(era[e]);
  container.appendChild(anchor);

  // Add subheading
  var subheading = document.createElement("h3");
  subheading.className = "subheading";
  subheading.innerHTML = era[e];
  container.appendChild(subheading);
  paintings = all_paintings[camelize(era[e])];

  // Add paintings to dom
  for (var i = 0, len = paintings.length; i < len; ++i) {

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

      container.appendChild(painting);
  }
}

