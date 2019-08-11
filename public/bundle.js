/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/*! exports provided: getBoardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoardTemplate", function() { return getBoardTemplate; });
const getBoardTemplate = () =>
  `<section class="board container">
    <div class="board__filter-list">
      <a href="#" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" class="board__filter">SORT BY DATE up</a>
      <a href="#" class="board__filter">SORT BY DATE down</a>
    </div>
    <div class="board__tasks">
    </div>
   </section>`;


/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! exports provided: getCardTaskTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardTaskTemplate", function() { return getCardTaskTemplate; });
const getCardTaskTemplate = () =>
  `<article class="card card--blue">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>
        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>
        <div class="card__textarea-wrap">
          <p class="card__text">Example default task with custom color.</p>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">23 September</span>
                  <span class="card__time">11:15 PM</span>
                </p>
              </div>
            </div>
            <div class="card__hashtag">
              <div class="card__hashtag-list">
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #todo
                  </span>
                </span>
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #personal
                  </span>
                </span>
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #important
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`;


/***/ }),

/***/ "./src/components/filters.js":
/*!***********************************!*\
  !*** ./src/components/filters.js ***!
  \***********************************/
/*! exports provided: getFiltersTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiltersTemplate", function() { return getFiltersTemplate; });
const getFiltersTemplate = () =>
  `<section class="main__filter filter container">
    <input type="radio" id="filter__all" class="filter__input visually-hidden" name="filter" checked="">
    <label for="filter__all" class="filter__label">
      All <span class="filter__all-count">1</span></label>
    <input type="radio" id="filter__overdue" class="filter__input visually-hidden" name="filter" disabled="">
    <label for="filter__overdue" class="filter__label">Overdue <span class="filter__overdue-count">0</span></label>
    <input type="radio" id="filter__today" class="filter__input visually-hidden" name="filter" disabled="">
    <label for="filter__today" class="filter__label">Today <span class="filter__today-count">0</span></label>
    <input type="radio" id="filter__favorites" class="filter__input visually-hidden" name="filter" disabled="">
    <label for="filter__favorites" class="filter__label">Favorites <span class="filter__favorites-count">0</span></label>
    <input type="radio" id="filter__repeating" class="filter__input visually-hidden" name="filter" disabled="">
    <label for="filter__repeating" class="filter__label">Repeating <span class="filter__repeating-count">0</span></label>
    <input type="radio" id="filter__tags" class="filter__input visually-hidden" name="filter" disabled="">
    <label for="filter__tags" class="filter__label">Tags <span class="filter__tags-count">0</span></label>
    <input type="radio" id="filter__archive" class="filter__input visually-hidden" name="filter">
    <label for="filter__archive" class="filter__label">Archive <span class="filter__archive-count">115</span></label>
   </section>`;


/***/ }),

/***/ "./src/components/load-button.js":
/*!***************************************!*\
  !*** ./src/components/load-button.js ***!
  \***************************************/
/*! exports provided: getLoadButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadButton", function() { return getLoadButton; });
const getLoadButton = () =>
  ` <button class="load-more" type="button">load more</button>`;


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: getMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuTemplate", function() { return getMenuTemplate; });
const getMenuTemplate = () => `
  <section class="control__btn-wrap">
    <input type="radio" name="control" id="control__new-task" class="control__input visually-hidden">
    <label for="control__new-task" class="control__label control__label--new-task">+ ADD NEW TASK</label>
    <input type="radio" name="control" id="control__task" class="control__input visually-hidden" checked="">
    <label for="control__task" class="control__label">TASKS</label>
    <input type="radio" name="control" id="control__statistic" class="control__input visually-hidden">
    <label for="control__statistic" class="control__label">STATISTICS</label>
  </section>`;


/***/ }),

/***/ "./src/components/search.js":
/*!**********************************!*\
  !*** ./src/components/search.js ***!
  \**********************************/
/*! exports provided: getSearchTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchTemplate", function() { return getSearchTemplate; });
const getSearchTemplate = () =>
  `<section class="main__search search container">
    <input type="text" id="search__input" class="search__input" placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE">
    <label class="visually-hidden" for="search__input">Search</label>
   </section>`;


/***/ }),

/***/ "./src/components/task-form.js":
/*!*************************************!*\
  !*** ./src/components/task-form.js ***!
  \*************************************/
/*! exports provided: getTaskFormTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskFormTemplate", function() { return getTaskFormTemplate; });
const getTaskFormTemplate = () =>
  `<article class="card card--edit card--black">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>
        <div class="card__color-bar">
          <svg width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>
        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >This is example of new task, you can add picture, set date and time, add tags.</textarea>
          </label>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">no</span>
              </button>
              <fieldset class="card__date-deadline" disabled>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="23 September"
                    name="date"
                  />
                </label>
              </fieldset>
              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">no</span>
              </button>
              <fieldset class="card__repeat-days" disabled>
                <div class="card__repeat-days-inner">
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-mo-1"
                    name="repeat"
                    value="mo"
                  />
                  <label class="card__repeat-day" for="repeat-mo-1"
                    >mo</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-tu-1"
                    name="repeat"
                    value="tu"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-tu-1"
                    >tu</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-we-1"
                    name="repeat"
                    value="we"
                  />
                  <label class="card__repeat-day" for="repeat-we-1"
                    >we</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-th-1"
                    name="repeat"
                    value="th"
                  />
                  <label class="card__repeat-day" for="repeat-th-1"
                    >th</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-fr-1"
                    name="repeat"
                    value="fr"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-fr-1"
                    >fr</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    name="repeat"
                    value="sa"
                    id="repeat-sa-1"
                  />
                  <label class="card__repeat-day" for="repeat-sa-1"
                    >sa</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-su-1"
                    name="repeat"
                    value="su"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-su-1"
                    >su</label
                  >
                </div>
              </fieldset>
            </div>
            <div class="card__hashtag">
              <div class="card__hashtag-list"></div>
              <label>
                <input
                  type="text"
                  class="card__hashtag-input"
                  name="hashtag-input"
                  placeholder="Type new hashtag here"
                />
              </label>
            </div>
          </div>
          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-black-1"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
                checked
              />
              <label
                for="color-black-1"
                class="card__color card__color--black"
                >black</label
              >
              <input
                type="radio"
                id="color-yellow-1"
                class="card__color-input card__color-input--yellow visually-hidden"
                name="color"
                value="yellow"
              />
              <label
                for="color-yellow-1"
                class="card__color card__color--yellow"
                >yellow</label
              >
              <input
                type="radio"
                id="color-blue-1"
                class="card__color-input card__color-input--blue visually-hidden"
                name="color"
                value="blue"
              />
              <label
                for="color-blue-1"
                class="card__color card__color--blue"
                >blue</label
              >
              <input
                type="radio"
                id="color-green-1"
                class="card__color-input card__color-input--green visually-hidden"
                name="color"
                value="green"
              />
              <label
                for="color-green-1"
                class="card__color card__color--green"
                >green</label
              >
              <input
                type="radio"
                id="color-pink-1"
                class="card__color-input card__color-input--pink visually-hidden"
                name="color"
                value="pink"
              />
              <label
                for="color-pink-1"
                class="card__color card__color--pink"
                >pink</label
              >
            </div>
          </div>
        </div>
        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search */ "./src/components/search.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filters */ "./src/components/filters.js");
/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/board */ "./src/components/board.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/card */ "./src/components/card.js");
/* harmony import */ var _components_task_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/task-form */ "./src/components/task-form.js");
/* harmony import */ var _components_load_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/load-button */ "./src/components/load-button.js");








const CARD_COUNT = 3;
const DEFAULT_COUNT = 0;
const mainElement = document.querySelector(`.main`);
const mainControlElement = document.querySelector(`.main__control`);

const fragmentElement = document.createDocumentFragment();
const divElement = document.createElement(`div`);
const renderComponent = (container, component, repeat = DEFAULT_COUNT) => {

  if (repeat) {
    for (let i = 0; i < repeat; i++) {
      divElement.innerHTML = component;
      container.appendChild(divElement.firstElementChild);
    }
  } else {
    divElement.innerHTML = component;
    container.appendChild(divElement.firstElementChild);
  }
};

renderComponent(mainControlElement, Object(_components_menu__WEBPACK_IMPORTED_MODULE_0__["getMenuTemplate"])());
renderComponent(fragmentElement, Object(_components_search__WEBPACK_IMPORTED_MODULE_1__["getSearchTemplate"])());
renderComponent(fragmentElement, Object(_components_filters__WEBPACK_IMPORTED_MODULE_2__["getFiltersTemplate"])());
renderComponent(fragmentElement, Object(_components_board__WEBPACK_IMPORTED_MODULE_3__["getBoardTemplate"])());

const boardContainer = fragmentElement.querySelector(`.board`);
const tasksContainer = fragmentElement.querySelector(`.board__tasks`);

renderComponent(tasksContainer, Object(_components_task_form__WEBPACK_IMPORTED_MODULE_5__["getTaskFormTemplate"])());
renderComponent(tasksContainer, Object(_components_card__WEBPACK_IMPORTED_MODULE_4__["getCardTaskTemplate"])(), CARD_COUNT);
renderComponent(boardContainer, Object(_components_load_button__WEBPACK_IMPORTED_MODULE_6__["getLoadButton"])());
mainElement.appendChild(fragmentElement);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map