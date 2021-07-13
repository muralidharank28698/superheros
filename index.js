// var images = [
//   "images/img1.jpg",
//   "images/img2.jpg",
//   "images/img3.jpg",
//   "images/img4.jpg",
//   "images/img5.jpg",
// ];
// var a;
// function myimg() {
//   // document.getElementById("image").src = images[i];
//   const val = document.getElementById("image");
//   for (var i = 0; i < 5; i++) {
//     val.src = images[i];
//     // val.style.display = "grid";
//   }
// }

// function myimg() {
//   if (a == 1) {
//     document.getElementById("image").style.display = "inline";
//   } else {
//     document.getElementById("image").style.display = "none";
//   }
// }

// var input = document.getElementById("ins");
// // // console.log(input);

// input.addEventListener("input", function (e) {
//   // result.textContent = this.value;
//   const val = e.target.value;
//   if (val == "superhero") {
//     myimg();
//   }
//   console.log(val);
// });
// const NewDiv = document.createElement("div");

// console.log(NewDiv);
// console.log(NewDiv.appendChild("div"));

// function myimg() {
//   document.getElementById("dis").style.maxHeight = "100%";

// }

function myimg() {
  var value = document.getElementById("ins").value;
  if (value == "") {
    alert("enter some superheros names...");
  } else {
    if (value == "superman") {
      var res = document.getElementById("super");
      res.className = "style";
    } else if (value == "ironman") {
      var res = document.getElementById("iron");
      res.className = "style";
    } else if (value == "hulk") {
      var res = document.getElementById("hulk");
      res.className = "style";
    } else if (value == "captainamerica") {
      var res = document.getElementById("captainamerica");
      res.className = "style";
    } else if (value == "wonderwoman") {
      var res = document.getElementById("wonderwoman");
      res.className = "style";
    } else if (value == "thor") {
      var res = document.getElementById("thor");
      res.className = "style";
    } else {
      alert("No superheros matches for your search...");
    }
  }
}

var input = document.getElementById("ins");
input.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    myimg();
    input.value = "";
  }
});

// var input = document.getElementById("ins");
// input.addEventListener("keypress", function (e) {
//   if (input === " ") {
//     alert("kgdsjfhkjuioyhk");
//   } else if (e.code === "Enter") {
//     myimg();
//   }
// });
