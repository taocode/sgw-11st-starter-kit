import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

const env = document.querySelector('body').dataset.env;

// Check that service workers are supported
if ('serviceWorker' in navigator && env === 'production') {
  // use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    try {
      navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.error('Service worker registration failed: ', error);
    }
  });
}

import Headroom from 'headroom.js';
// grab an element
// var myElement = document.querySelector(".fixed.headroom");
// construct an instance of Headroom, passing the element
// var headroom  = new Headroom(myElement);
// initialise
// headroom.init();
var elem = document.querySelector('.fixed.headroom');
function offsetFun() {
  var headroomOffset = 160;
  var intro = document.querySelector('#intro');
  if (!intro) {
    // console.log('no intro to worry about...');
    return headroomOffset;
  } else {
    // console.info('bcr height:',intro.getBoundingClientRect().height,'offsetHeight',intro.offsetHeight);
    return intro.offsetHeight + headroomOffset;
  }
}
var topnav = new Headroom(elem, {
  offset: offsetFun(),
  tolerance: 5,
  // "classes": {
  //   "initial": "animated",
  //   "pinned": "slideDown",
  //   "unpinned": "slideUp"
  // }
});

topnav.init();

const targetNode = document.body;
const obsConfig = { childList: true, subtree: false, attributes: false };
const obsCallback = function (mutationsList, observer) {
  var shareBtnElem = document.querySelector('.st-sticky-share-buttons');
  if (!shareBtnElem) return;

  var sideShare = new Headroom(shareBtnElem, {
    offset: offsetFun(),
    tolerance: 100,
  });
  console.log('initing sideshare()');
  sideShare.init();
  observer.disconnect();
};
const observer = new MutationObserver(obsCallback);
observer.observe(targetNode, obsConfig);
