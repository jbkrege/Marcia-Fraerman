
// resizeText.js
// Resizes divs with text to fit onto one line

// Also check out:
// https://coderwall.com/p/_8jxgw/autoresize-text-to-fit-into-a-div-width-height


function _getMaxChildHeight(elem){
  children = elem.childNodes;
  var max = 0;
  for (var c = 0, clen = children.length; c < clen; c++){
    h = children[c].offsetHeight;
    if (h > max){
      max = h;
    }
  }
  return(max)
}

function resizeText(){
  elements = document.getElementsByClassName("desc");
  height = elements[0].childNodes[0].offsetHeight; // Warning: assumes first element has correct height
  for (var i = 0, len = elements.length; i < len; i++){
    while (_getMaxChildHeight(elements[i]) > height){
      var fontsize = window.getComputedStyle(elements[i], null).getPropertyValue('font-size');
      console.log(fontsize);
      elements[i].style.fontSize = String(Number(fontsize.slice(0,-2))-1)+"px";
    }
  }
}

resizeText();