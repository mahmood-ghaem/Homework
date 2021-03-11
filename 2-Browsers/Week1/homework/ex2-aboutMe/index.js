'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

(function main() {
  const body = document.querySelector('body');
  body.style.fontFamily = 'Arial, sans-serif';
  const liTags = document.querySelectorAll('li');
  liTags.forEach((element) => {
    element.classList.add('list-item');
  });
  document.getElementById('nickname').textContent = 'Mahmood';
  document.getElementById('fav-food').textContent = 'Steak';
  document.getElementById('hometown').textContent = 'Alphen aan den Rijn';
})();
