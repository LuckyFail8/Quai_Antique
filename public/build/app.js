(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
/* harmony default export */ __webpack_exports__["default"] = (class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
  connect() {
    this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
  }
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _scripts_timeslot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/timeslot */ "./assets/scripts/timeslot.js");
/* harmony import */ var _scripts_timeslot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_timeslot__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_meal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/meal */ "./assets/scripts/meal.js");
/* harmony import */ var _scripts_meal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_meal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/navbar */ "./assets/scripts/navbar.js");
/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_carrousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/carrousel */ "./assets/scripts/carrousel.js");
/* harmony import */ var _scripts_carrousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_carrousel__WEBPACK_IMPORTED_MODULE_5__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application






/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": function() { return /* binding */ app; }
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
const app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/scripts/carrousel.js":
/*!*************************************!*\
  !*** ./assets/scripts/carrousel.js ***!
  \*************************************/
/***/ (function() {

let counter = 0;
let timer, slides, slideWidth, carrouselItemTitle;
window.onload = () => {
  const containerCarrousel = document.querySelector(".container-carrousel");
  const carrouselItems = document.querySelector(".carrousel-items");
  const carrouselItem = document.querySelector(".carrousel-item");
  let firstImage = carrouselItems.firstElementChild.cloneNode(true);
  carrouselItems.appendChild(firstImage);
  slides = Array.from(carrouselItems.children);
  console.log("cpudp");
  slideWidth = carrouselItem.getBoundingClientRect().width;
  let next = document.querySelector("#nav-right");
  let prev = document.querySelector("#nav-left");
  next.addEventListener("click", slideNext);
  prev.addEventListener("click", slidePrev);
  timer = setInterval(slideNext, 3500);
  containerCarrousel.addEventListener("mouseover", () => {
    stopTimer();
  });
  containerCarrousel.addEventListener("mouseout", () => {
    startTimer();
  });
  function slideNext() {
    counter++;
    carrouselItems.style.transition = "1s linear";
    let decal = -slideWidth * counter;
    carrouselItems.style.transform = `translateX(${decal}px)`;
    setTimeout(function () {
      if (counter >= slides.length - 1) {
        counter = 0;
        carrouselItems.style.transition = "unset";
        carrouselItems.style.transform = "translateX(0)";
      }
    }, 1000);
  }
  function slidePrev() {
    // On décrémente le compteur
    counter--;
    carrouselItems.style.transition = "700ms linear";
    if (counter < 0) {
      counter = slides.length - 1;
      let decal = -slideWidth * counter;
      carrouselItems.style.transition = "unset";
      carrouselItems.style.transform = `translateX(${decal}px)`;
      setTimeout(slidePrev, 1);
    }
    let decal = -slideWidth * counter;
    carrouselItems.style.transform = `translateX(${decal}px)`;
  }
  function stopTimer() {
    clearInterval(timer);
  }
  function startTimer() {
    timer = setInterval(slideNext, 3500);
  }
};

/***/ }),

/***/ "./assets/scripts/meal.js":
/*!********************************!*\
  !*** ./assets/scripts/meal.js ***!
  \********************************/
/***/ (function() {

const starters = document.querySelector('.starters');
const mainCourses = document.querySelector('.main-courses');
const desserts = document.querySelector('.desserts');
const drinks = document.querySelector('.drinks');
const mealLinks = [starters, mainCourses, desserts, drinks];
const plats = document.querySelectorAll('.plat');
window.onload = () => {
  mealLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const category = event.target.dataset.category;
      const filteredPlats = Array.from(document.querySelectorAll(`.plat[data-category="${category}"]`));
      plats.forEach(plat => {
        if (filteredPlats.includes(plat)) {
          plat.style.display = 'block';
        } else {
          plat.style.display = 'none';
        }
      });
    });
  });
};

/***/ }),

/***/ "./assets/scripts/navbar.js":
/*!**********************************!*\
  !*** ./assets/scripts/navbar.js ***!
  \**********************************/
/***/ (function() {

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.classList.add('active');
  if (link.href !== window.location.href) {
    link.classList.remove('active');
  }
});

/***/ }),

/***/ "./assets/scripts/timeslot.js":
/*!************************************!*\
  !*** ./assets/scripts/timeslot.js ***!
  \************************************/
/***/ (function() {

let datePicker = document.getElementById('reservation_Date');
if (datePicker !== null) {
  datePicker.addEventListener('change', function () {
    this.setAttribute('value', this.value);
    let form = this.closest("form");
    let selectdDate = new Date(this.value);
    let formattedDate = selectdDate.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    let data = this.name + "=" + this.value + "&formatted_date=" + formattedDate;
    fetch(form.action, {
      method: form.getAttribute("method"),
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;         charset:utf8"
      }
    }).then(response => response.text()).then(html => {
      let content = document.createElement("html");
      content.innerHTML = html;
      let newSelect = content.querySelector('#reservation_time_slot');
      document.getElementById('reservation_time_slot').replaceWith(newSelect);
    });
  });
}

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUEsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUNqQ0YsSUFBSSxDQUFDRyxJQUFJLElBQUc7TUFDVCxJQUFJQyxPQUFPLEdBQUcvRSxRQUFRLENBQUNnRixhQUFhLENBQUMsTUFBTSxDQUFDO01BQzVDRCxPQUFPLENBQUNFLFNBQVMsR0FBR0gsSUFBSTtNQUN4QixJQUFJSSxTQUFTLEdBQUdILE9BQU8sQ0FBQzlFLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztNQUMvREQsUUFBUSxDQUFDdUQsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUM0QixXQUFXLENBQUNELFNBQVMsQ0FBQztJQUMzRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTjs7Ozs7Ozs7Ozs7O0FDL0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2NhcnJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tZWFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy90aW1lc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuaW1wb3J0ICcuL3NjcmlwdHMvdGltZXNsb3QnO1xuaW1wb3J0ICcuL3NjcmlwdHMvbWVhbCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9uYXZiYXInO1xuaW1wb3J0ICcuL3NjcmlwdHMvY2Fycm91c2VsJztcblxuXG5cblxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJsZXQgY291bnRlciA9IDA7XG5sZXQgdGltZXIsIHNsaWRlcywgc2xpZGVXaWR0aCwgY2Fycm91c2VsSXRlbVRpdGxlO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lckNhcnJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWNhcnJvdXNlbFwiKTtcbiAgICBjb25zdCBjYXJyb3VzZWxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fycm91c2VsLWl0ZW1zXCIpO1xuICAgIGNvbnN0IGNhcnJvdXNlbEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnJvdXNlbC1pdGVtXCIpO1xuICAgIFxuICAgIGxldCBmaXJzdEltYWdlID0gY2Fycm91c2VsSXRlbXMuZmlyc3RFbGVtZW50Q2hpbGQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNhcnJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGZpcnN0SW1hZ2UpO1xuICAgIFxuICAgIHNsaWRlcyA9IEFycmF5LmZyb20oY2Fycm91c2VsSXRlbXMuY2hpbGRyZW4pO1xuICAgIGNvbnNvbGUubG9nKFwiY3B1ZHBcIik7XG4gICAgXG4gICAgc2xpZGVXaWR0aCA9IGNhcnJvdXNlbEl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cbiAgICBsZXQgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LXJpZ2h0XCIpO1xuICAgIGxldCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXYtbGVmdFwiKTtcblxuICAgIFxuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNsaWRlTmV4dCk7XG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2xpZGVQcmV2KTtcblxuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoc2xpZGVOZXh0LCAzNTAwKTtcblxuICAgIGNvbnRhaW5lckNhcnJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgc3RvcFRpbWVyKCk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyQ2Fycm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIHN0YXJ0VGltZXIoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNsaWRlTmV4dCgpe1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIGNhcnJvdXNlbEl0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzIGxpbmVhclwiO1xuXG4gICAgICAgIGxldCBkZWNhbCA9IC1zbGlkZVdpZHRoICogY291bnRlcjtcbiAgICAgICAgY2Fycm91c2VsSXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtkZWNhbH1weClgIDtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY291bnRlciA+PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIGNhcnJvdXNlbEl0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSBcInVuc2V0XCI7XG4gICAgICAgICAgICAgICAgY2Fycm91c2VsSXRlbXMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDApXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNsaWRlUHJldigpe1xuICAgICAgICAvLyBPbiBkw6ljcsOpbWVudGUgbGUgY29tcHRldXJcbiAgICAgICAgY291bnRlci0tO1xuICAgICAgICBjYXJyb3VzZWxJdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gXCI3MDBtcyBsaW5lYXJcIjtcbiAgICBcbiAgICAgICAgaWYoY291bnRlciA8IDApe1xuICAgICAgICAgICAgY291bnRlciA9IHNsaWRlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGRlY2FsID0gLXNsaWRlV2lkdGggKiBjb3VudGVyO1xuICAgICAgICAgICAgY2Fycm91c2VsSXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9IFwidW5zZXRcIjtcbiAgICAgICAgICAgIGNhcnJvdXNlbEl0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7ZGVjYWx9cHgpYDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2xpZGVQcmV2LCAxKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgZGVjYWwgPSAtc2xpZGVXaWR0aCAqIGNvdW50ZXI7XG4gICAgICAgIGNhcnJvdXNlbEl0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7ZGVjYWx9cHgpYDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcFRpbWVyKCl7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKXtcbiAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbChzbGlkZU5leHQsIDM1MDAgKTtcbiAgICB9XG5cblxufVxuIiwiY29uc3Qgc3RhcnRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRlcnMnKTtcbmNvbnN0IG1haW5Db3Vyc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY291cnNlcycpO1xuY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzc2VydHMnKTtcbmNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmlua3MnKTtcbmNvbnN0IG1lYWxMaW5rcyA9IFtzdGFydGVycywgbWFpbkNvdXJzZXMsIGRlc3NlcnRzLCBkcmlua3NdO1xuY29uc3QgcGxhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhdCcpO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIG1lYWxMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBldmVudC50YXJnZXQuZGF0YXNldC5jYXRlZ29yeTtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkUGxhdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGF0W2RhdGEtY2F0ZWdvcnk9XCIke2NhdGVnb3J5fVwiXWApKTtcbiAgICAgICAgICAgIHBsYXRzLmZvckVhY2gocGxhdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlcmVkUGxhdHMuaW5jbHVkZXMocGxhdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGF0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKTtcbm5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsgXG4gICAgaWYgKGxpbmsuaHJlZiAhPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgXG4gICAgfVxufSk7XG4iLCJsZXQgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbl9EYXRlJyk7XG5cbmlmIChkYXRlUGlja2VyICE9PSBudWxsKXtcblxuICAgIGRhdGVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMudmFsdWUpO1xuICAgICAgICBsZXQgZm9ybSA9IHRoaXMuY2xvc2VzdChcImZvcm1cIik7XG4gICAgICAgIGxldCBzZWxlY3RkRGF0ZSA9IG5ldyBEYXRlKHRoaXMudmFsdWUpO1xuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHNlbGVjdGREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLCB7XG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCdcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMubmFtZSArIFwiPVwiICsgdGhpcy52YWx1ZSArIFwiJmZvcm1hdHRlZF9kYXRlPVwiICsgZm9ybWF0dGVkRGF0ZTtcbiAgICBcbiAgICAgICAgZmV0Y2goZm9ybS5hY3Rpb24se1xuICAgICAgICAgICAgbWV0aG9kOiBmb3JtLmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKSxcbiAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7ICAgICAgICAgY2hhcnNldDp1dGY4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAudGhlbihodG1sID0+e1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiKTtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgIGxldCBuZXdTZWxlY3QgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlcnZhdGlvbl90aW1lX3Nsb3QnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbl90aW1lX3Nsb3QnKS5yZXBsYWNlV2l0aChuZXdTZWxlY3QpO1xuICAgICAgICB9KVxuICAgIH0pO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImNvdW50ZXIiLCJ0aW1lciIsInNsaWRlcyIsInNsaWRlV2lkdGgiLCJjYXJyb3VzZWxJdGVtVGl0bGUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjb250YWluZXJDYXJyb3VzZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJyb3VzZWxJdGVtcyIsImNhcnJvdXNlbEl0ZW0iLCJmaXJzdEltYWdlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiY29uc29sZSIsImxvZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwibmV4dCIsInByZXYiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpZGVOZXh0Iiwic2xpZGVQcmV2Iiwic2V0SW50ZXJ2YWwiLCJzdG9wVGltZXIiLCJzdGFydFRpbWVyIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiZGVjYWwiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0ZXJzIiwibWFpbkNvdXJzZXMiLCJkZXNzZXJ0cyIsImRyaW5rcyIsIm1lYWxMaW5rcyIsInBsYXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhdGVnb3J5IiwidGFyZ2V0IiwiZGF0YXNldCIsImZpbHRlcmVkUGxhdHMiLCJwbGF0IiwiaW5jbHVkZXMiLCJkaXNwbGF5IiwibmF2TGlua3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJocmVmIiwibG9jYXRpb24iLCJyZW1vdmUiLCJkYXRlUGlja2VyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImZvcm0iLCJjbG9zZXN0Iiwic2VsZWN0ZERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImRhdGEiLCJuYW1lIiwiZmV0Y2giLCJhY3Rpb24iLCJtZXRob2QiLCJnZXRBdHRyaWJ1dGUiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJodG1sIiwiY29udGVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJuZXdTZWxlY3QiLCJyZXBsYWNlV2l0aCJdLCJzb3VyY2VSb290IjoiIn0=