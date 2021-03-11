'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  // TODO your code goes in here
  const googleLogo = () => {
    const tempImages = document.querySelectorAll('img');
    tempImages.forEach((element) => {
      if (element.alt === 'Google') {
        return element;
      }
    });
  };

  googleLogo.src = 'assets/img/logos/hyflogo.svg';
  googleLogo.srcset = 'assets/img/logos/hyflogo.svg';
}

hijackGoogleLogo();
