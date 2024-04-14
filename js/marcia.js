// public static class Post {

//   public String author;
//   public String title;

//   public Post(String author, String title) {
//     // ...
//   }

// }

// // Get a reference to our posts
// final FirebaseDatabase database = FirebaseDatabase.getInstance();
// DatabaseReference ref = database.getReference();


// ref.addListenerForSingleValueEvent(new ValueEventListener() {
//   @Override
//   public void onDataChange(DataSnapshot dataSnapshot) {
//     // ...
//   }

//   @Override
//   public void onCancelled(DatabaseError databaseError) {
//     // ...
//   }
// });


function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

// http://jsfiddle.net/WRgjv/655/

extra = 20;
var pad = String(window.innerHeight/2 - (document.getElementById("statement").offsetHeight/2)+extra)+"px";
document.getElementById("statement").style.paddingTop = pad;
document.getElementById("statement").style.paddingBottom = pad;

pad = String(window.innerHeight/2 - (document.getElementById("about").offsetHeight/2)+extra)+"px";
document.getElementById("about").style.paddingTop = pad;
document.getElementById("about").style.paddingBottom = pad;

pad = String(window.innerHeight/2 - (document.getElementById("press").offsetHeight/2)+extra)+"px";
document.getElementById("press").style.paddingTop = pad;
document.getElementById("press").style.paddingBottom = pad;

pad = String(window.innerHeight/4 - (document.getElementById("contact").offsetHeight/2)+extra)+"px";
document.getElementById("contact").style.paddingTop = pad;
document.getElementById("contact").style.paddingBottom = pad;

all_paintings = {
  "colorWeave": [

    {
      "name": "Shirtley's Light",
      "img": "https://i.ibb.co/55TC6QF/MF-9982email.jpg" ,
      "year": "2024",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 24 inches"
    },
    {
      "name": "Off the Grid",
      "img": "https://i.ibb.co/wWCyYXZ/MF-9981email.jpg" ,
      "year": "2024",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 26 inches"
    },
    {
      "name": "Square Inch II",
      "img": "https://i.ibb.co/k0MjJyH/MF-7472email.jpg" ,
      "year": "2023",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 24 inches"
    },
    {
      "name": "Square Up II",
      "img": "https://i.ibb.co/zFMMqvJ/MF-7473email.jpg" ,
      "year": "2022",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 24 inches"
    },
    {
      "name": "Haymarket Square",
      "img": "https://i.ibb.co/85Tp9ss/MF-7469email.jpg" ,
      "year": "2022",
      "medium": "Acrylic paint on canvas",
      "size": "30 x 30 inches"
    },
    {
      "name": "Square Up",
      "img": "https://i.ibb.co/M2QRr99/MF-7464email.jpg" ,
      "year": "2020",
      "medium": "Acrylic paint on canvas",
      "size": "40 x 40 inches"
    },
    {
      "name": "Square Deal",
      "img": "https://i.ibb.co/5YxhnB8/MF-7465email.jpg" ,
      "year": "2020",
      "medium": "Acrylic paint on canvas",
      "size": "40 x 40 inches"
    },
    {
      "name": "Square One II",
      "img": "https://image.ibb.co/f8yYpo/square_One_II.jpg" ,
      "year": "2018",
      "medium": "Acrylic paint on canvas",
      "size": "40 x 40 inches"
    },
    {
      "name": "Red Square",
      "img": "https://image.ibb.co/nD3ipo/red_Square.jpg",
      "year": "2018",
      "medium": "Acrylic paint on canvas",
      "size": "20 x 20 inches"
    },
    {
      "name": "Square Dance",
      "img": "https://image.ibb.co/d0ZZvT/square_Dance.jpg" ,
      "year": "2017",
      "medium": "Acrylic paint on canvas",
      "size": "20 x 20 inches"
    },
    {
      "name": "Square Inch",
      "img": "https://image.ibb.co/j5mQ28/square_Inch.jpg",
      "year": "2011",
      "medium": "Acrylic paint on canvas",
      "size": "20 x 20 inches"
    },
    {
      "name": "Be There Or Be Square",
      "img": "https://image.ibb.co/m9KdN8/be_There_Or_Be_Square.jpg",
      "year": "2010",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 30 inches"
    },
    {
      "name": "Square One I",
      "img": "https://image.ibb.co/ctXtpo/square_One_I.jpg",
      "year": "2010",
      "medium": "Acrylic paint on canvas",
      "size": "20 x 20 inches"
    },
    {
      "name": "Fair and Square I",
      "img": "https://image.ibb.co/dGYuvT/fair_And_Square_I.jpg",
      "year": "2009",
      "medium": "Acrylic paint on canvas",
      "size": "20 x 24 inches"
    },
    {
      "name": "Fair and Square II",
      "img": "https://image.ibb.co/iRyipo/fair_And_Square_II.jpg",
      "year": "2009",
      "medium": "Acrylic paint on canvas",
      "size": "36 x 48 inches"
    },
    {
      "name": "Hip to Be Square",
      "img": "https://image.ibb.co/n92yN8/hip_To_Be_Square.jpg",
      "year": "2009",
      "medium": "Acrylic paint on canvas",
      "size": "36 x 48 inches"
    },
    {
      "name": "Fair and Square III",
      "img": "https://image.ibb.co/nnM3po/fair_And_Square_III.jpg",
      "year": "2009",
      "medium": "Acrylic paint on canvas",
      "size": "8 x 24 inches"
    }
  ],
  "drip": [{
      "name": "Clear Vision",
      "img": "https://image.ibb.co/kqvk28/clear_Vision.jpg",
      "year": "2010",
      "medium": "Acrylic paint and medium on canvas",
      "size": "24 x 48 inches"
    },
    {
      "name": "A Tangled Web",
      "img": "https://image.ibb.co/jzuZvT/a_Tangled_Web.jpg",
      "year": "2010",
      "medium": "Acrylic paint and medium",
      "size": "24 x 48 inches"
    },
    {
      "name": "Rainy Day Blues",
      "img": "https://image.ibb.co/mJGgaT/rainy_Day_Blues.jpg",
      "year": "2009",
      "medium": "Acrylic paint and medium on canvas",
      "size": "24 x 24 inches"
    }
  ],
  "stripe": [{
      "name": "Vineyard Sun",
      "img": "https://image.ibb.co/c6tcFT/vineyard_Sun.jpg" ,
      "year": "2006",
      "medium": "Acrylic paint and medium on canvas",
      "size": "24 x 36 inches"
    },
    {
      "name": "Show Your Stripes",
      "img": "https://image.ibb.co/cxJG9o/showyour_Stripes.jpg",
      "year": "2005",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 30 inches"
    },
    {
      "name": "Between the Matter",
      "img": "https://image.ibb.co/mDA7FT/between_The_Matter.jpg",
      "year": "2005",
      "medium": "Acrylic paint and medium on canvas",
      "size": "24 x 30 inches"
    },
    {
      "name": "In the Pink",
      "img": "https://image.ibb.co/jkPOpo/in_The_Pink.jpg",
      "year": "2004",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 36 inches"
    },
    {
      "name": "Cabo",
      "img": "https://image.ibb.co/kJTipo/cabo.jpg",
      "year": "2003",
      "medium": "Acrylic paint and medium on canvas",
      "size": "24 x 30 inches"
    },
    {
      "name": "Ode to Barnett",
      "img": "https://image.ibb.co/kwPdN8/ode_To_Barnett.jpg",
      "year": "2002",
      "medium": "Acrylic paint and medium on canvas",
      "size": "24 x 48 inches"
    }
  ],
  "colorBlock": [{
      "name": "Dark Night I",
      "img": "https://image.ibb.co/f2Bsh8/dark_Night_I.jpg",
      "year": "2008",
      "medium": "Acrylic paint on canvas",
      "size": "20 x 20 inches"
    },
    {
      "name": "Dark Night II",
      "img": "https://image.ibb.co/dFwgaT/dark_Night_II.jpg",
      "year": "2008",
      "medium": "Acrylic paint on canvas",
      "size": "20 x 20 inches"
    },
    {
      "name": "Dark Night III",
      "img": "https://image.ibb.co/iHPpUo/dark_Night_III.jpg",
      "year": "2008",
      "medium": "Acrylic paint on canvas",
      "size": "20 x 20 inches"
    },
    {
      "name": "Dark Night IV",
      "img": "https://image.ibb.co/jV0JN8/dark_Night_IV.jpg",
      "year": "2008",
      "medium": "Acrylic paint on canvas",
      "size": "20 x 20 inches"
    },
    {
      "name": "Black I",
      "img": "https://image.ibb.co/bPjOpo/blackI.jpg",
      "year": "2006",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 30 inches"
    },
    {
      "name": "Black II",
      "img": "https://image.ibb.co/kqq7FT/blackII.jpg",
      "year": "2006",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 30 inches"
    },
    {
      "name": "So Complementary",
      "img": "https://image.ibb.co/eup1aT/so_Complementary.jpg" ,
      "year": "2006",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 30 inches"
    },
    {
      "name": "Red I",
      "img": "https://image.ibb.co/fq41aT/redI.jpg",
      "year": "2003",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 30 inches"
    },
    {
      "name": "Yellow I",
      "img": "https://image.ibb.co/gbkDpo/yellowI.jpg",
      "year": "2003",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 30 inches"
    },
    {
      "name": "Blue I",
      "img": "https://image.ibb.co/n2Y528/blueI.jpg",
      "year": "2003",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 30 inches"
    },
    {
      "name": "Caribbean Blues",
      "img": "https://image.ibb.co/fv9ZvT/caribbean_Blues.jpg" ,
      "year": "2003",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 30 inches"
    }
  ],
  "more": [
    {
      "name": "Get Happy",
      "img": "https://i.ibb.co/KxcXRTb/get-Happy-800w.jpg",
      "year": "2020",
      "medium": "Acrylic paint on canvas",
      "size": "24 x 36 inches"
    },
    {
      "name": "Get Happier",
      "img": "https://i.ibb.co/8sYYLjw/MF-7468email.jpg",
      "year": "2021",
      "medium": "Acrylic paint on canvas",
      "size": "30 x 24 inches"
    },
    {
      "name": "Hazy Weekend @ Rough Draft Brewing, San Diego",
      "img": "https://i.ibb.co/W2KCFq0/MF-7476email.jpg",
      "year": "2020",
      "medium": "",
      "size": ""
    }
  ]
}

var era = ["Color Weave", "Color Block", "Drip", "Stripe", "More"];

var container = document.getElementById("paintings_container");

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
    subheading.style.marginTop = "10px";
    subheading.style.marginBottom = "-4vh";
  }
  
  subheading.innerHTML = era[e];
  container.appendChild(subheading);
  paintings = all_paintings[camelize(era[e])];

  // Add paintings to dom
  for (var i = 0, len = paintings.length; i < len; i++) {

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
      // desc.id = "desc_"+String(i);
      var title = document.createElement("div");
      var text = document.createElement("p");
      text.className = "i";
      text.innerHTML = paintings[i]["name"];
      title.appendChild(text);
      desc.appendChild(title);
      var rest = document.createElement("div");
      if (paintings[i]["year"])
        rest.innerHTML = ", "+paintings[i]["year"]
      if (paintings[i]["medium"])
        rest.innerHTML = rest.innerHTML+", "+paintings[i]["medium"]
      if (paintings[i]["size"])
        rest.innerHTML = rest.innerHTML+", "+paintings[i]["size"];
      desc.appendChild(rest);

      painting.appendChild(desc);

      container.appendChild(painting);
  }
}
