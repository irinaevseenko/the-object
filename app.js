// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// let button = document.querySelector('.button');
// let sentence = document.querySelector('.sentence');

// button.addEventListener('click', function() {
// // toggle переключает класс
//     sentence.classList.toggle('show');

// })

let button1 = document.querySelector('.button-1');
let button2 = document.querySelector('.button-2');
let button3 = document.querySelector('.button-3');
let button4 = document.querySelector('.button-4');
let button5 = document.querySelector('.button-5');
let button6 = document.querySelector('.button-6');
let button7 = document.querySelector('.button-7');
let button8 = document.querySelector('.button-8');
let button9 = document.querySelector('.button-9');
let button10 = document.querySelector('.button-10');

let sentence1 = document.querySelector('.sentence-1');
let sentence2 = document.querySelector('.sentence-2');
let sentence3 = document.querySelector('.sentence-3');
let sentence4 = document.querySelector('.sentence-4');
let sentence5 = document.querySelector('.sentence-5');
let sentence6 = document.querySelector('.sentence-6');
let sentence7 = document.querySelector('.sentence-7');
let sentence8 = document.querySelector('.sentence-8');
let sentence9 = document.querySelector('.sentence-9');
let sentence10 = document.querySelector('.sentence-10');

button1.addEventListener('click', function() {
    // toggle переключает класс
        sentence1.classList.toggle('show');
    })

button2.addEventListener('click', function() {
    // toggle переключает класс
        sentence2.classList.toggle('show');
    })

button3.addEventListener('click', function() {
    // toggle переключает класс
        sentence3.classList.toggle('show');
    })

button4.addEventListener('click', function() {
    // toggle переключает класс
        sentence4.classList.toggle('show');
    })

button5.addEventListener('click', function() {
    // toggle переключает класс
        sentence5.classList.toggle('show');
    })

button6.addEventListener('click', function() {
    // toggle переключает класс
        sentence6.classList.toggle('show');
    })

button7.addEventListener('click', function() {
    // toggle переключает класс
        sentence7.classList.toggle('show');
    })
    
button8.addEventListener('click', function() {
    // toggle переключает класс
        sentence8.classList.toggle('show');
    })
    
button9.addEventListener('click', function() {
    // toggle переключает класс
        sentence9.classList.toggle('show');
    })

button10.addEventListener('click', function() {
    // toggle переключает класс
        window.scrollTo(0, 500);
        sentence10.classList.toggle('show');
    })


// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");


// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
