function showPanel(){
var acc = document.getElementsByClassName("accordion");
var i;

  for (i = 0; i < acc.length; i++) 
      { acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    }   else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
  }
}

// window.onclick = myFunction;

// // If the user clicks in the window, set the background color of <body> to yellow
// function myFunction() {
//   document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
// }
