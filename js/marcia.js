// http://jsfiddle.net/WRgjv/655/

extra = 20;
var pad = String(window.innerHeight/2 - (document.getElementById("statement").offsetHeight/2)+extra)+"px";
document.getElementById("statement").style.paddingTop = pad;
document.getElementById("statement").style.paddingBottom = pad;

pad = String(window.innerHeight/2 - (document.getElementById("about").offsetHeight/2)+extra)+"px";
document.getElementById("about").style.paddingTop = pad;
document.getElementById("about").style.paddingBottom = pad;

pad = String(window.innerHeight/2 - (document.getElementById("contact").offsetHeight/2)+extra)+"px";
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
        "name": "Hip to Be Square",
        "img": "./img/hipToBeSquare.jpg",
        "year": "2009",
        "medium": "Acrylic paint on canvas",
        "size": "30 x 40 inches"
      },
      {
        "name": "Fair and Square III",
        "img": "./img/fairAndSquareIII.jpg",
        "year": "2009",
        "medium": "Acrylic paint on canvas",
        "size": "8 x 24 inches"
      }
    ],
  "drip":
    [
      {
        "name": "Clear Vision",
        "img": "./img/clearVision.jpg",
        "year": "2010",
        "medium": "Acrylic paint and medium on canvas",
        "size": "24 x 48 inches"
      },
      {
        "name": "A Tangled Web",
        "img": "./img/aTangledWeb.jpg",
        "year": "2010",
        "medium": "Acrylic paint and medium",
        "size": "24 x 48 inches"
      },
      {
        "name": "Rainy Day Blues",
        "img": "./img/rainyDayBlues.jpg",
        "year": "2009",
        "medium": "Acrylic paint and medium on canvas",
        "size": "24 x 24 inches"
      },
    ],
  "stripe": 
    [
      {
        "name": "Vineyard Sun",
        "img": "./img/vineyardSun.jpg",
        "year": "2006",
        "medium": "Acrylic paint and medium on canvas",
        "size": "24 x 36 inches"
      },
      {
        "name": "Show Your Stripes",
        "img": "./img/showyourStripes.jpg",
        "year": "2005",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Between the Matter",
        "img": "./img/betweenTheMatter.jpg",
        "year": "2005",
        "medium": "Acrylic paint and medium on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Infrared",
        "img": "./img/infrared.jpg",
        "year": "2004",
        "medium": "Acrylic paint and medium on canvas",
        "size": "24 x 24 inches"
      },
      {
        "name": "In the Pink",
        "img": "./img/inThePink.jpg",
        "year": "2004",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 36 inches"
      },
      {
        "name": "Cabo",
        "img": "./img/cabo.jpg",
        "year": "2003",
        "medium": "Acrylic paint and medium on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Ode to Barnett",
        "img": "./img/odeToBarnett.jpg",
        "year": "2002",
        "medium": "Acrylic paint and medium on canvas",
        "size": "24 x 48 inches"
      },
      {
        "name": "Into the Galaxy",
        "img": "./img/intoTheGalaxy.jpg",
        "year": "2002",
        "medium": "Acrylic paint and medium",
        "size": "24 x 30 inches"
      },
    ],
  "colorBlock":
    [
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
      },
      {
        "name": "Black I",
        "img": "./img/blackI.jpg",
        "year": "2006",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Black II",
        "img": "./img/blackII.jpg",
        "year": "2006",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "So Complementary",
        "img": "./img/soComplementary.jpg",
        "year": "2006",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Vail Fall",
        "img": "./img/vailFall.jpg",
        "year": "2004",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Winter White I",
        "img": "./img/winterWhiteI.jpg",
        "year": "2004",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Red I",
        "img": "./img/redI.jpg",
        "year": "2003",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Yellow I",
        "img": "./img/yellowI.jpg",
        "year": "2003",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Green I",
        "img": "./img/greenI.jpg",
        "year": "2003",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Blue I",
        "img": "./img/blueI.jpg",
        "year": "2003",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
      },
      {
        "name": "Caribbean Blues",
        "img": "./img/caribbeanBlues.jpg",
        "year": "2003",
        "medium": "Acrylic paint on canvas",
        "size": "24 x 30 inches"
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
      },
      {
        "name":"Times Square at Night",
        "img": "./img/timesSquareAtNight.jpg",
        "year": "2003",
        "medium": "Acrylic paint and medium on canvas",
        "size": "30 x 40 inches",
      }
    ]
}


function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

var era = ["Color Weave", "Color Block", "Drip", "Stripe", "Just Because"];

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
  if (e != 0){
    subheading.className = "subheading era";
  } else {
    subheading.className = "subheading";
  }
  
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

var autoSizeText;
autoSizeText = function() {
  var el, elements, _i, _len, _results;
  elements = $('.desc');
  console.log(elements);
  if (elements.length < 0) {
    return;
  }
  _results = [];
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    el = elements[_i];
    _results.push((function(el) {
      var resizeText, _results1;
      resizeText = function() {
        var elNewFontSize;
        elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
        return $(el).css('font-size', elNewFontSize);
      };
      _results1 = [];
      while (el.scrollHeight > el.offsetHeight) {
        _results1.push(resizeText());
      }
      return _results1;
    })(el));
  }
  return _results;
};

