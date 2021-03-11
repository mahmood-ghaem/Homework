'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL: https://tenor.com/StFI.gif), keep it dancing 
   for 5 seconds, and then replace the img with the original image and have it 
   continue the walk.
-----------------------------------------------------------------------------*/
const catImage = document.querySelector('img');
let counter = 0;
let windowWidth;
let interval;
let isDancing = false;

function startInterval() {
  interval = setInterval(catWalk, 50);
}
function stopInterval() {
  clearInterval(interval);
}
function catDancing() {
  isDancing = true;
  catImage.setAttribute('src', 'assets/tenor.gif');
  stopInterval();
  setTimeout(catWalking, 5000);
}
function catWalking() {
  isDancing = false;
  catImage.setAttribute(
    'src',
    'http://www.anniemation.com/clip_art/images/cat-walk.gif'
  );
  startInterval();
}
function catWalk() {
  // TODO complete this function
  counter += 10;
  catImage.style.left = `${counter}px`;
  const rect = catImage.getBoundingClientRect();
  if (
    counter > windowWidth / 2 - 10 - catImage.width / 2 &&
    counter < windowWidth / 2 + 10 - catImage.width / 2
  ) {
    counter += 10;
    catDancing();
  }
  if (rect.right > windowWidth - 10) {
    counter = 0;
  }
}

// TODO execute `catWalk` when the browser has completed loading the page

function initialize() {
  windowWidth = window.innerWidth;
  const body = document.querySelector('body');
  body.style.margin = '0px';
  catWalking();
}

window.addEventListener('load', initialize);
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
  if (isDancing) {
    counter = windowWidth / 2 - catImage.width / 2 + 20;
    catImage.style.left = `${windowWidth / 2 - catImage.width / 2}px`;
  }
});
