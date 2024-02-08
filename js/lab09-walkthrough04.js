/* code goes here */

function simpleHandler(event)
{
   var content = document.getElementById("content");
   if (btn.innerHTML == "Hide")
   {
      btn.innerHTML = "Show";
      content.className = "makeItDisappear";
      // change the display mode after a 1000 millisecond delay
      setTimeout(function()
      {
         content.style.display = "none";
      }, 1000);
   }
   else
   {
      content.style.display = "block";
      btn.innerHTML = "Hide";

      //change class after a 500 millisecond delay
      setTimeout(function()
      {
         content.className = "makeItNormal";
      }, 500);
   }
}

var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);

var img = document.getElementById("mainImage");
img.addEventListener("mouseover", function(event)
{
   img.className = "makeItGray";
});

img.addEventListener("mouseout", function(event)
{
   img.className = "makeItNormal";
});