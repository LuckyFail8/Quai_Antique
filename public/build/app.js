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
/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/navbar */ "./assets/scripts/navbar.js");
/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_navbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_meal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/meal */ "./assets/scripts/meal.js");
/* harmony import */ var _scripts_meal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_meal__WEBPACK_IMPORTED_MODULE_4__);
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

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector(".container-carrousel")) {
    let counter = 0;
    let timer, slides, slideWidth, carrouselItemTitle;
    const containerCarrousel = document.querySelector(".container-carrousel");
    const carrouselItems = document.querySelector(".carrousel-items");
    const carrouselItem = document.querySelector(".carrousel-item");
    let firstImage = carrouselItems.firstElementChild.cloneNode(true);
    carrouselItems.appendChild(firstImage);
    slides = Array.from(carrouselItems.children);
    slideWidth = carrouselItem.getBoundingClientRect().width;
    let next = document.querySelector("#nav-right");
    let prev = document.querySelector("#nav-left");
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);
    timer = setInterval(slideNext, 4000);
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
  }
});

/***/ }),

/***/ "./assets/scripts/meal.js":
/*!********************************!*\
  !*** ./assets/scripts/meal.js ***!
  \********************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".plat")) {
    const starters = document.querySelector('.starters');
    const mainCourses = document.querySelector('.main-courses');
    const desserts = document.querySelector('.desserts');
    const drinks = document.querySelector('.drinks');
    const mealLinks = [starters, mainCourses, desserts, drinks];
    const plats = document.querySelectorAll('.plat');
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
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFRLENBQUM7TUFDbkNDLElBQUksRUFBRU4sSUFBSTtNQUNWTyxPQUFPLEVBQUU7UUFDTCxjQUFjLEVBQUU7TUFDcEI7SUFDSixDQUFDLENBQUMsQ0FDREMsSUFBSSxDQUFDQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDakNGLElBQUksQ0FBQ0csSUFBSSxJQUFHO01BQ1QsSUFBSUMsT0FBTyxHQUFHcEYsUUFBUSxDQUFDcUYsYUFBYSxDQUFDLE1BQU0sQ0FBQztNQUM1Q0QsT0FBTyxDQUFDRSxTQUFTLEdBQUdILElBQUk7TUFDeEIsSUFBSUksU0FBUyxHQUFHSCxPQUFPLENBQUNsRixhQUFhLENBQUMsd0JBQXdCLENBQUM7TUFDL0RGLFFBQVEsQ0FBQzRELGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDNEIsV0FBVyxDQUFDRCxTQUFTLENBQUM7SUFDM0UsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7OztBQy9CQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jYXJyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbWVhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvdGltZXNsb3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbmltcG9ydCAnLi9zY3JpcHRzL3RpbWVzbG90JztcbmltcG9ydCAnLi9zY3JpcHRzL25hdmJhcic7XG5pbXBvcnQgJy4vc2NyaXB0cy9tZWFsJztcbmltcG9ydCAnLi9zY3JpcHRzL2NhcnJvdXNlbCc7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1jYXJyb3VzZWxcIikpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBsZXQgdGltZXIsIHNsaWRlcywgc2xpZGVXaWR0aCwgY2Fycm91c2VsSXRlbVRpdGxlO1xuICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXJDYXJyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1jYXJyb3VzZWxcIik7XG4gICAgICAgIGNvbnN0IGNhcnJvdXNlbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJyb3VzZWwtaXRlbXNcIik7XG4gICAgICAgIGNvbnN0IGNhcnJvdXNlbEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnJvdXNlbC1pdGVtXCIpO1xuICAgIFxuICAgICAgICBsZXQgZmlyc3RJbWFnZSA9IGNhcnJvdXNlbEl0ZW1zLmZpcnN0RWxlbWVudENoaWxkLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY2Fycm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoZmlyc3RJbWFnZSk7XG4gICAgICAgIFxuICAgICAgICBzbGlkZXMgPSBBcnJheS5mcm9tKGNhcnJvdXNlbEl0ZW1zLmNoaWxkcmVuKTtcbiAgICAgICAgXG4gICAgICAgIHNsaWRlV2lkdGggPSBjYXJyb3VzZWxJdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIFxuICAgICAgICBsZXQgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LXJpZ2h0XCIpO1xuICAgICAgICBsZXQgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LWxlZnRcIik7XG4gICAgXG4gICAgICAgIFxuICAgICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzbGlkZU5leHQpO1xuICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzbGlkZVByZXYpO1xuICAgIFxuICAgICAgICB0aW1lciA9IHNldEludGVydmFsKHNsaWRlTmV4dCwgNDAwMCk7XG4gICAgXG4gICAgICAgIGNvbnRhaW5lckNhcnJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIHN0b3BUaW1lcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGFpbmVyQ2Fycm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBzbGlkZU5leHQoKXtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIGNhcnJvdXNlbEl0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzIGxpbmVhclwiO1xuICAgIFxuICAgICAgICAgICAgbGV0IGRlY2FsID0gLXNsaWRlV2lkdGggKiBjb3VudGVyO1xuICAgICAgICAgICAgY2Fycm91c2VsSXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtkZWNhbH1weClgIDtcbiAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlciA+PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY2Fycm91c2VsSXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9IFwidW5zZXRcIjtcbiAgICAgICAgICAgICAgICAgICAgY2Fycm91c2VsSXRlbXMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDApXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gc2xpZGVQcmV2KCl7XG4gICAgICAgICAgICAvLyBPbiBkw6ljcsOpbWVudGUgbGUgY29tcHRldXJcbiAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgICAgIGNhcnJvdXNlbEl0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSBcIjcwMG1zIGxpbmVhclwiO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmKGNvdW50ZXIgPCAwKXtcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgbGV0IGRlY2FsID0gLXNsaWRlV2lkdGggKiBjb3VudGVyO1xuICAgICAgICAgICAgICAgIGNhcnJvdXNlbEl0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSBcInVuc2V0XCI7XG4gICAgICAgICAgICAgICAgY2Fycm91c2VsSXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtkZWNhbH1weClgO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc2xpZGVQcmV2LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBsZXQgZGVjYWwgPSAtc2xpZGVXaWR0aCAqIGNvdW50ZXI7XG4gICAgICAgICAgICBjYXJyb3VzZWxJdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2RlY2FsfXB4KWA7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBzdG9wVGltZXIoKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKXtcbiAgICAgICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoc2xpZGVOZXh0LCAzNTAwICk7XG4gICAgICAgIH1cbiAgICB9ICAgIFxufSlcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF0XCIpKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0ZXJzJyk7XG4gICAgICAgIGNvbnN0IG1haW5Db3Vyc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY291cnNlcycpO1xuICAgICAgICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNzZXJ0cycpO1xuICAgICAgICBjb25zdCBkcmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJpbmtzJyk7XG4gICAgICAgIGNvbnN0IG1lYWxMaW5rcyA9IFtzdGFydGVycywgbWFpbkNvdXJzZXMsIGRlc3NlcnRzLCBkcmlua3NdO1xuICAgICAgICBjb25zdCBwbGF0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF0Jyk7XG4gICAgXG4gICAgICAgIG1lYWxMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBldmVudC50YXJnZXQuZGF0YXNldC5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFBsYXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhdFtkYXRhLWNhdGVnb3J5PVwiJHtjYXRlZ29yeX1cIl1gKSk7XG4gICAgICAgICAgICAgICAgcGxhdHMuZm9yRWFjaChwbGF0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcmVkUGxhdHMuaW5jbHVkZXMocGxhdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiIsImNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XG5uYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7IFxuICAgIGlmIChsaW5rLmhyZWYgIT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IFxuICAgIH1cbn0pO1xuIiwibGV0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb25fRGF0ZScpO1xuXG5pZiAoZGF0ZVBpY2tlciAhPT0gbnVsbCl7XG5cbiAgICBkYXRlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzLmNsb3Nlc3QoXCJmb3JtXCIpO1xuICAgICAgICBsZXQgc2VsZWN0ZERhdGUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBzZWxlY3RkRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLUZSJywge1xuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIGRheTogJzItZGlnaXQnXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLm5hbWUgKyBcIj1cIiArIHRoaXMudmFsdWUgKyBcIiZmb3JtYXR0ZWRfZGF0ZT1cIiArIGZvcm1hdHRlZERhdGU7XG4gICAgXG4gICAgICAgIGZldGNoKGZvcm0uYWN0aW9uLHtcbiAgICAgICAgICAgIG1ldGhvZDogZm9ybS5nZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiksXG4gICAgICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyAgICAgICAgIGNoYXJzZXQ6dXRmOFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgLnRoZW4oaHRtbCA9PntcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh0bWxcIik7XG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgICBsZXQgbmV3U2VsZWN0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2YXRpb25fdGltZV9zbG90Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb25fdGltZV9zbG90JykucmVwbGFjZVdpdGgobmV3U2VsZWN0KTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwiY291bnRlciIsInRpbWVyIiwic2xpZGVzIiwic2xpZGVXaWR0aCIsImNhcnJvdXNlbEl0ZW1UaXRsZSIsImNvbnRhaW5lckNhcnJvdXNlbCIsImNhcnJvdXNlbEl0ZW1zIiwiY2Fycm91c2VsSXRlbSIsImZpcnN0SW1hZ2UiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsb25lTm9kZSIsImFwcGVuZENoaWxkIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIm5leHQiLCJwcmV2Iiwic2xpZGVOZXh0Iiwic2xpZGVQcmV2Iiwic2V0SW50ZXJ2YWwiLCJzdG9wVGltZXIiLCJzdGFydFRpbWVyIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiZGVjYWwiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0ZXJzIiwibWFpbkNvdXJzZXMiLCJkZXNzZXJ0cyIsImRyaW5rcyIsIm1lYWxMaW5rcyIsInBsYXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhdGVnb3J5IiwidGFyZ2V0IiwiZGF0YXNldCIsImZpbHRlcmVkUGxhdHMiLCJwbGF0IiwiaW5jbHVkZXMiLCJkaXNwbGF5IiwibmF2TGlua3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJocmVmIiwid2luZG93IiwibG9jYXRpb24iLCJyZW1vdmUiLCJkYXRlUGlja2VyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImZvcm0iLCJjbG9zZXN0Iiwic2VsZWN0ZERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImRhdGEiLCJuYW1lIiwiZmV0Y2giLCJhY3Rpb24iLCJtZXRob2QiLCJnZXRBdHRyaWJ1dGUiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJodG1sIiwiY29udGVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJuZXdTZWxlY3QiLCJyZXBsYWNlV2l0aCJdLCJzb3VyY2VSb290IjoiIn0=