let images = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('.left-arrow');
let arrowRight = document.querySelector('.right-arrow');
let dots = document.querySelectorAll('.dot');

let currentImageIndex = 0;
let dotCurrentIndex = 0;

function changeIndex(newIndex) {
  currentImageIndex = newIndex;
  dotCurrentIndex = newIndex;
}
changeIndex(3);

console.log(currentImageIndex);
console.log(dotCurrentIndex);
images[0].style.display = 'block';
