// Select some elements...
let header = document.querySelector("#page-header");
header.style.textAlign = "left";

let dogImages = document.querySelector(".dog-images");
for (let i = 0; i < dogImages.length; i++) {
  dogImages[i].style.borderRadius = "50px";
}

let myHeader = document.querySelectorAll("#dog-name");
myHeader.style.textAlign = "left";
