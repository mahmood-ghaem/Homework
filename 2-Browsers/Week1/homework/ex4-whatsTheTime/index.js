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

  if (h === 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  const time = h + ':' + m + ':' + s + ' ' + session;

  const divClockContainer = document.getElementById('divClockContainer');
  divClockContainer.innerText = time;
}

// TODO execute `addCurrentTime` when the browser has completed loading the page

function createDom() {
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
