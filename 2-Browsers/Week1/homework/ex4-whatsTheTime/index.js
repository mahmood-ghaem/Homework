'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = 'AM';

  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }

  const time = function (h, m, s) {
    let returnValue = [];
    for (var i = 0; i < arguments.length; i++) {
      let tempVar = arguments[i];
      tempVar = tempVar < 10 ? '0' + tempVar : tempVar;
      returnValue.push(tempVar);
    }
    return returnValue.join(':') + ' ' + session;
  };

  const divClockContainer = document.getElementById('divClockContainer');
  divClockContainer.textContent = time(h, m, s);
}

// TODO execute `addCurrentTime` when the browser has completed loading the page

function createDom() {
  const googleFont = document.createElement('link');
  googleFont.setAttribute(
    'href',
    'https://fonts.googleapis.com/css2?family=Orbitron&display=swap'
  );
  googleFont.setAttribute('rel', 'stylesheet');
  document.head.appendChild(googleFont);
  const body = document.querySelector('body');
  body.style.background = 'black';
  const divClockContainer = document.createElement('div');
  divClockContainer.id = 'divClockContainer';
  divClockContainer.style.position = 'absolute';
  divClockContainer.style.top = '50%';
  divClockContainer.style.left = '50%';
  divClockContainer.style.transform = 'translateX(-50%) translateY(-50%)';
  divClockContainer.style.color = '#17D4FE';
  divClockContainer.style.fontSize = '60px';
  divClockContainer.style.fontFamily = 'Orbitron';
  divClockContainer.style.letterSpacing = '7px';
  body.appendChild(divClockContainer);
}

function initialize() {
  createDom();
  addCurrentTime();
  setInterval(addCurrentTime, 1000);
}

window.addEventListener('load', initialize);
