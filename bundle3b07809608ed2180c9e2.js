/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCard": () => (/* binding */ createCard)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _helpers_initPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/initPlayer */ "./src/helpers/initPlayer.js");
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/player */ "./src/components/player.js");




function createCard(parentNode, level, id, audio) {
  var data = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_2__.getData)();
  var card = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "gallery__card card", parentNode, "", ["data-level", level], ["data-id", id]);
  var image = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "card__image", card, "", ["src", data[level][id].image], ["alt", "image"]);
  var name = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "card__name", card, data[level][id].name);
  var genre = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "card__genre", card, data[level][id].genre);
  var description = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "card__description", card, data[level][id].description);
  var player = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "card__player player", card);
  (0,_components_player__WEBPACK_IMPORTED_MODULE_3__.createPlayer)(player);
  audio.setAttribute("src", data[level][id].audio);
  audio.load();
  (0,_helpers_initPlayer__WEBPACK_IMPORTED_MODULE_1__.initPlayer)(player, audio);
  return card;
}


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");
/* harmony import */ var _assets_img_github_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/github-logo.svg */ "./src/assets/img/github-logo.svg");
/* harmony import */ var _assets_img_rs_school_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/rs-school-logo.svg */ "./src/assets/img/rs-school-logo.svg");




function createFooter(parentNote) {
  var dataInterface = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_1__.getDataInterface)();
  var footer = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("footer", "footer", parentNote);
  var container = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "footer__container container", footer);
  var github = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "footer__github github", container, "", ["href", "https://github.com/MetalKnock"]);
  var githubImg = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "github__image", github, "", ["src", _assets_img_github_logo_svg__WEBPACK_IMPORTED_MODULE_2__], ["alt", "github logo"]);
  var year = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "footer__year", container, dataInterface.year);
  var rsSchool = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "footer__rs-school rs-school", container, "", ["href", "https://rs.school/js/"]);
  var rsSchoolImg = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "rs-school__image", rsSchool, "", ["src", _assets_img_rs_school_logo_svg__WEBPACK_IMPORTED_MODULE_3__], ["alt", "rs-school logo"]);
}


/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _assets_img_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/logo.svg */ "./src/assets/img/logo.svg");
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");



function createHeader(parentNote) {
  var dataInterface = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_2__.getDataInterface)();
  var header = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("header", "header", parentNote);
  var container = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "header__container container", header);
  var logo = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "header__link", container);
  logo.href = "#/";
  var logoImage = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "logo__image", logo, "", ["src", _assets_img_logo_svg__WEBPACK_IMPORTED_MODULE_1__], ["alt", "logo"]);
  var burgerMenu = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "header__burger-menu burger-menu", container);
  var burgerButton = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "burger-menu__button", burgerMenu);
  var burgerLines = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("span", "burger-menu__lines", burgerButton);
  var burgerNav = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("nav", "burger-menu__nav", burgerMenu);
  var burgerLanguageButton = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("button", "burger-menu__button-language button button-language", burgerNav, dataInterface.buttonLanguage);
  var burgerLink1 = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "burger-menu__link button", burgerNav, dataInterface.headerLink1, ["href", "#/"]);
  var burgerLink2 = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "burger-menu__link button", burgerNav, dataInterface.headerLink2, ["href", "#/quiz"]);
  var burgerLink3 = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "burger-menu__link button", burgerNav, dataInterface.headerLink3, ["href", "#/gallery"]);
  var burgerOverlay = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "burger-menu__overlay", burgerMenu);
  var menu = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("nav", "header__menu menu", container);
  var menuList = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("ul", "menu__list", menu);
  var menuItem = [];
  for (var i = 0; i < 4; i++) {
    menuItem.push((0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("li", "menu__item", menuList));
  }
  var menuButton = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("button", "menu__button button button-language", menuItem[0], dataInterface.buttonLanguage);
  var menuLink1 = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "menu__link button", menuItem[1], dataInterface.headerLink1, ["href", "#/"]);
  var menuLink2 = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "menu__link button", menuItem[2], dataInterface.headerLink2, ["href", "#/quiz"]);
  var menuLink3 = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "menu__link button", menuItem[3], dataInterface.headerLink3, ["href", "#/gallery"]);
  return header;
}


/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");


function createMain(parentNote) {
  var dataInterface = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_1__.getDataInterface)();
  var main = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("main", "page", parentNote);
  var container = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "page__container container", main);
  return container;
}


/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _assets_img_volume_on_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/volume-on.svg */ "./src/assets/img/volume-on.svg");


function createPlayer(parentNode) {
  var timeline = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "player__timeline", parentNode);
  var progress = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "player__progress", timeline);
  var controls = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "player__controls", parentNode);
  var btnPlay = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "player__play player__play--start", controls);
  var time = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "player__time time", controls);
  var timeCurrent = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "time__current", time, "00:00");
  // const timeDivider = createHtmlTag("div", "time__divider", time, "/");
  var timeLength = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "time__length", time, "00:00");
  var volume = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "player__volume volume", controls);
  var volumeButton = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "volume__button volume__button--on", volume);
  var volumeImage = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "volume__image", volumeButton, "", ["src", _assets_img_volume_on_svg__WEBPACK_IMPORTED_MODULE_1__], ["alt", "volume"]);
  var volumeSlider = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "volume__slider", volume);
  var volumePercentage = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "volume__percentage", volumeSlider);
}


/***/ }),

/***/ "./src/components/quiz.js":
/*!********************************!*\
  !*** ./src/components/quiz.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createQuiz": () => (/* binding */ createQuiz)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/components/player.js");
/* harmony import */ var _assets_img_curtain_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/curtain.jpg */ "./src/assets/img/curtain.jpg");




function createQuiz(parentNode) {
  var dataInterface = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_1__.getDataInterface)();
  var data = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_1__.getData)();
  var header = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("header", "quiz__header header", parentNode);
  var menu = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("nav", "header__menu menu", header);
  var list = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("ul", "menu__list", menu);
  var items = [];
  for (var i = 0; i < 6; i++) {
    items.push((0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("li", "menu__item category", list, dataInterface.categories[i], ["data-level", i]));
  }
  var randomGame = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "quiz__random-game random-game", parentNode);
  var randomGameImg = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "random-game__image", randomGame, "", ["src", _assets_img_curtain_jpg__WEBPACK_IMPORTED_MODULE_3__], ["alt", "random-game-logo"]);
  var inner = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "random-game__inner", randomGame);
  var name = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "random-game__name", inner, "****");
  var score = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "random-game__score quiz__score", inner, dataInterface.score);
  var player = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "random-game__player player", inner);
  (0,_player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)(player);
  var answers = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "quiz__answers answers", parentNode);
  var answersList = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("ul", "answers__list", answers);
  var answersItems = [];
  for (var _i = 0; _i < 6; _i++) {
    answersItems.push((0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("li", "answers__item answer", answersList, "", ["data-id", _i]));
    var indicator = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "answer__indicator", answersItems[_i]);
    var answerText = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "answer__text", answersItems[_i], data[0][_i].name);
  }
  var gameDetails = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "quiz__game-details game-details", parentNode, "", ["data-id", ""]);
  var hint = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("span", "game-details__hint", gameDetails, dataInterface.gameDetailsHint);
  var buttonNextLevel = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "quiz__next-level button button--disable", parentNode, dataInterface.buttonNextLevel);
}


/***/ }),

/***/ "./src/controllers/404.controller.js":
/*!*******************************************!*\
  !*** ./src/controllers/404.controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var divElement = document.createElement("div");
  divElement.classList = "404";
  var error = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("h3", "error", divElement, "Error: 404");
  return divElement;
});

/***/ }),

/***/ "./src/controllers/gallery.controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/gallery.controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");
/* harmony import */ var _listeners_clickGallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/clickGallery */ "./src/listeners/clickGallery.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card */ "./src/components/card.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var divElement = document.createElement("div");
  divElement.classList = "page__gallery gallery";
  var data = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_1__.getData)();
  var audio = new Audio();
  audio.src = data[0][0].audio;
  (0,_components_card__WEBPACK_IMPORTED_MODULE_3__.createCard)(divElement, 0, 0, audio);
  var list = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("ul", "gallery__list ", divElement);
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      var item = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("li", "gallery__item item", list, "", ["data-id", j], ["data-level", i]);
      var nameList = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "item__name", item, data[i][j].name);
      var imageList = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "item__image", item, "", ["src", data[i][j].image], ["alt", "image"]);
    }
  }
  (0,_listeners_clickGallery__WEBPACK_IMPORTED_MODULE_2__.clickGallery)(divElement, audio);
  return divElement;
});

/***/ }),

/***/ "./src/controllers/home.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/home.controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");
/* harmony import */ var _assets_img_home_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/home-img.png */ "./src/assets/img/home-img.png");
/* harmony import */ var _assets_img_home_img2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/home-img2.png */ "./src/assets/img/home-img2.png");
/* harmony import */ var _assets_img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/arrow-down.svg */ "./src/assets/img/arrow-down.svg");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var divElement = document.createElement("div");
  divElement.classList = "page__home home";
  var interfaceData = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_1__.getDataInterface)();
  var inner = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "home__inner", divElement);
  var images = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "home__images", divElement);
  var image = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "home__image", images, "", ["src", _assets_img_home_img_png__WEBPACK_IMPORTED_MODULE_2__]);
  var image2 = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "home__image-background", images, "", ["src", _assets_img_home_img2_png__WEBPACK_IMPORTED_MODULE_3__]);
  var title = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("h3", "home__title", inner);
  title.innerText = interfaceData.homeTitle;
  var subtitle = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("h4", "home__subtitle", inner);
  subtitle.innerText = interfaceData.homeSubtitle;
  var wrap = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "home__wrap", inner);
  var arrow = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "home__arrow", wrap, "", ["src", _assets_img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_4__]);
  var link = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "home__link button", wrap, interfaceData.homeLink, ["href", "#/quiz"]);
  link.href = "#/quiz";
  link.innerText = interfaceData.homeLink;
  return divElement;
});

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pages": () => (/* binding */ pages)
/* harmony export */ });
/* harmony import */ var _home_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.controller */ "./src/controllers/home.controller.js");
/* harmony import */ var _404_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.controller */ "./src/controllers/404.controller.js");
/* harmony import */ var _quiz_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz.controller */ "./src/controllers/quiz.controller.js");
/* harmony import */ var _results_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results.controller */ "./src/controllers/results.controller.js");
/* harmony import */ var _gallery_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery.controller */ "./src/controllers/gallery.controller.js");





var pages = {
  home: _home_controller__WEBPACK_IMPORTED_MODULE_0__["default"],
  notFound: _404_controller__WEBPACK_IMPORTED_MODULE_1__["default"],
  quiz: _quiz_controller__WEBPACK_IMPORTED_MODULE_2__["default"],
  results: _results_controller__WEBPACK_IMPORTED_MODULE_3__["default"],
  gallery: _gallery_controller__WEBPACK_IMPORTED_MODULE_4__["default"]
};


/***/ }),

/***/ "./src/controllers/quiz.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/quiz.controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_initLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/initLevel */ "./src/helpers/initLevel.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var divElement = document.createElement("div");
  divElement.classList = "page__quiz quiz";

  // createQuiz(divElement);

  var score = 0;
  var levelNumber = 0;
  var secretAudio = new Audio();
  (0,_helpers_initLevel__WEBPACK_IMPORTED_MODULE_0__["default"])(divElement, levelNumber, score, secretAudio);
  return divElement;
});

/***/ }),

/***/ "./src/controllers/results.controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/results.controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");
/* harmony import */ var _assets_img_cat_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/cat.gif */ "./src/assets/img/cat.gif");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var divElement = document.createElement("div");
  divElement.classList = "page__results results";
  var storage = JSON.parse(localStorage.getItem("metalknock-music-quiz"));
  var dataInterface = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_1__.getDataInterface)();
  var inner = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("div", "results__inner", divElement);
  var title = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("h3", "results__title", inner, dataInterface.resultsTitle);
  if (Number(storage.score) !== 30) {
    var subtitle = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("h4", "results__subtitle", inner, "".concat(dataInterface.resultsSubtitle1, " ").concat(storage.score, " ").concat(dataInterface.resultsSubtitle2));
    var buttonRestart = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("a", "results__button button", inner, dataInterface.resultsButton, "", ["href", "#/quiz"]);
  } else {
    var win = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("h4", "results__win", inner, "".concat(dataInterface.resultsWin1, " ").concat(storage.score, " ").concat(dataInterface.resultsWin2));
  }
  var image = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_0__.createHtmlTag)("img", "results__image", divElement, "", ["src", _assets_img_cat_gif__WEBPACK_IMPORTED_MODULE_2__]);
  return divElement;
});

/***/ }),

/***/ "./src/data/games.js":
/*!***************************!*\
  !*** ./src/data/games.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_audio_dendy_dendy1_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/audio/dendy/dendy1.mp3 */ "./src/assets/audio/dendy/dendy1.mp3");
/* harmony import */ var _assets_audio_dendy_dendy2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/audio/dendy/dendy2.mp3 */ "./src/assets/audio/dendy/dendy2.mp3");
/* harmony import */ var _assets_audio_dendy_dendy3_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/audio/dendy/dendy3.mp3 */ "./src/assets/audio/dendy/dendy3.mp3");
/* harmony import */ var _assets_audio_dendy_dendy4_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/audio/dendy/dendy4.mp3 */ "./src/assets/audio/dendy/dendy4.mp3");
/* harmony import */ var _assets_audio_dendy_dendy5_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/audio/dendy/dendy5.mp3 */ "./src/assets/audio/dendy/dendy5.mp3");
/* harmony import */ var _assets_audio_dendy_dendy6_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/audio/dendy/dendy6.mp3 */ "./src/assets/audio/dendy/dendy6.mp3");
/* harmony import */ var _assets_audio_sega_sega1_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/audio/sega/sega1.mp3 */ "./src/assets/audio/sega/sega1.mp3");
/* harmony import */ var _assets_audio_sega_sega2_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/audio/sega/sega2.mp3 */ "./src/assets/audio/sega/sega2.mp3");
/* harmony import */ var _assets_audio_sega_sega3_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/audio/sega/sega3.mp3 */ "./src/assets/audio/sega/sega3.mp3");
/* harmony import */ var _assets_audio_sega_sega4_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/audio/sega/sega4.mp3 */ "./src/assets/audio/sega/sega4.mp3");
/* harmony import */ var _assets_audio_sega_sega5_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/audio/sega/sega5.mp3 */ "./src/assets/audio/sega/sega5.mp3");
/* harmony import */ var _assets_audio_sega_sega6_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/audio/sega/sega6.mp3 */ "./src/assets/audio/sega/sega6.mp3");
/* harmony import */ var _assets_audio_ps1_psOne1_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/audio/ps1/psOne1.mp3 */ "./src/assets/audio/ps1/psOne1.mp3");
/* harmony import */ var _assets_audio_ps1_psOne2_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/audio/ps1/psOne2.mp3 */ "./src/assets/audio/ps1/psOne2.mp3");
/* harmony import */ var _assets_audio_ps1_psOne3_mp3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/audio/ps1/psOne3.mp3 */ "./src/assets/audio/ps1/psOne3.mp3");
/* harmony import */ var _assets_audio_ps1_psOne4_mp3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/audio/ps1/psOne4.mp3 */ "./src/assets/audio/ps1/psOne4.mp3");
/* harmony import */ var _assets_audio_ps1_psOne5_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/audio/ps1/psOne5.mp3 */ "./src/assets/audio/ps1/psOne5.mp3");
/* harmony import */ var _assets_audio_ps1_psOne6_mp3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/audio/ps1/psOne6.mp3 */ "./src/assets/audio/ps1/psOne6.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo1_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo1.mp3 */ "./src/assets/audio/ps2/psTwo1.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo2_mp3__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo2.mp3 */ "./src/assets/audio/ps2/psTwo2.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo3_mp3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo3.mp3 */ "./src/assets/audio/ps2/psTwo3.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo4_mp3__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo4.mp3 */ "./src/assets/audio/ps2/psTwo4.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo5_mp3__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo5.mp3 */ "./src/assets/audio/ps2/psTwo5.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo6_mp3__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo6.mp3 */ "./src/assets/audio/ps2/psTwo6.mp3");
/* harmony import */ var _assets_audio_pc_pc1_mp3__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/audio/pc/pc1.mp3 */ "./src/assets/audio/pc/pc1.mp3");
/* harmony import */ var _assets_audio_pc_pc2_mp3__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/audio/pc/pc2.mp3 */ "./src/assets/audio/pc/pc2.mp3");
/* harmony import */ var _assets_audio_pc_pc3_mp3__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/audio/pc/pc3.mp3 */ "./src/assets/audio/pc/pc3.mp3");
/* harmony import */ var _assets_audio_pc_pc4_mp3__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/audio/pc/pc4.mp3 */ "./src/assets/audio/pc/pc4.mp3");
/* harmony import */ var _assets_audio_pc_pc5_mp3__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/audio/pc/pc5.mp3 */ "./src/assets/audio/pc/pc5.mp3");
/* harmony import */ var _assets_audio_pc_pc6_mp3__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/audio/pc/pc6.mp3 */ "./src/assets/audio/pc/pc6.mp3");
/* harmony import */ var _assets_audio_mobile_mobile1_mp3__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/audio/mobile/mobile1.mp3 */ "./src/assets/audio/mobile/mobile1.mp3");
/* harmony import */ var _assets_audio_mobile_mobile2_mp3__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/audio/mobile/mobile2.mp3 */ "./src/assets/audio/mobile/mobile2.mp3");
/* harmony import */ var _assets_audio_mobile_mobile3_mp3__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/audio/mobile/mobile3.mp3 */ "./src/assets/audio/mobile/mobile3.mp3");
/* harmony import */ var _assets_audio_mobile_mobile4_mp3__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/audio/mobile/mobile4.mp3 */ "./src/assets/audio/mobile/mobile4.mp3");
/* harmony import */ var _assets_audio_mobile_mobile5_mp3__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../assets/audio/mobile/mobile5.mp3 */ "./src/assets/audio/mobile/mobile5.mp3");
/* harmony import */ var _assets_audio_mobile_mobile6_mp3__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../assets/audio/mobile/mobile6.mp3 */ "./src/assets/audio/mobile/mobile6.mp3");
/* harmony import */ var _assets_img_dendy_imgdendy1_jpeg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy1.jpeg */ "./src/assets/img/dendy/imgdendy1.jpeg");
/* harmony import */ var _assets_img_dendy_imgdendy2_jpeg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy2.jpeg */ "./src/assets/img/dendy/imgdendy2.jpeg");
/* harmony import */ var _assets_img_dendy_imgdendy3_jpeg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy3.jpeg */ "./src/assets/img/dendy/imgdendy3.jpeg");
/* harmony import */ var _assets_img_dendy_imgdendy4_jpeg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy4.jpeg */ "./src/assets/img/dendy/imgdendy4.jpeg");
/* harmony import */ var _assets_img_dendy_imgdendy5_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy5.png */ "./src/assets/img/dendy/imgdendy5.png");
/* harmony import */ var _assets_img_dendy_imgdendy6_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy6.png */ "./src/assets/img/dendy/imgdendy6.png");
/* harmony import */ var _assets_img_sega_imgsega1_jpeg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../assets/img/sega/imgsega1.jpeg */ "./src/assets/img/sega/imgsega1.jpeg");
/* harmony import */ var _assets_img_sega_imgsega2_jpeg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../assets/img/sega/imgsega2.jpeg */ "./src/assets/img/sega/imgsega2.jpeg");
/* harmony import */ var _assets_img_sega_imgsega3_jpeg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../assets/img/sega/imgsega3.jpeg */ "./src/assets/img/sega/imgsega3.jpeg");
/* harmony import */ var _assets_img_sega_imgsega4_jpeg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../assets/img/sega/imgsega4.jpeg */ "./src/assets/img/sega/imgsega4.jpeg");
/* harmony import */ var _assets_img_sega_imgsega5_jpeg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../assets/img/sega/imgsega5.jpeg */ "./src/assets/img/sega/imgsega5.jpeg");
/* harmony import */ var _assets_img_sega_imgsega6_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../assets/img/sega/imgsega6.png */ "./src/assets/img/sega/imgsega6.png");
/* harmony import */ var _assets_img_ps1_imgpsOne1_jpeg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne1.jpeg */ "./src/assets/img/ps1/imgpsOne1.jpeg");
/* harmony import */ var _assets_img_ps1_imgpsOne2_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne2.png */ "./src/assets/img/ps1/imgpsOne2.png");
/* harmony import */ var _assets_img_ps1_imgpsOne3_jpeg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne3.jpeg */ "./src/assets/img/ps1/imgpsOne3.jpeg");
/* harmony import */ var _assets_img_ps1_imgpsOne4_jpeg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne4.jpeg */ "./src/assets/img/ps1/imgpsOne4.jpeg");
/* harmony import */ var _assets_img_ps1_imgpsOne5_jpeg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne5.jpeg */ "./src/assets/img/ps1/imgpsOne5.jpeg");
/* harmony import */ var _assets_img_ps1_imgpsOne6_jpeg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne6.jpeg */ "./src/assets/img/ps1/imgpsOne6.jpeg");
/* harmony import */ var _assets_img_ps2_imgpsTwo1_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo1.png */ "./src/assets/img/ps2/imgpsTwo1.png");
/* harmony import */ var _assets_img_ps2_imgpsTwo2_jpeg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo2.jpeg */ "./src/assets/img/ps2/imgpsTwo2.jpeg");
/* harmony import */ var _assets_img_ps2_imgpsTwo3_jpeg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo3.jpeg */ "./src/assets/img/ps2/imgpsTwo3.jpeg");
/* harmony import */ var _assets_img_ps2_imgpsTwo4_jpeg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo4.jpeg */ "./src/assets/img/ps2/imgpsTwo4.jpeg");
/* harmony import */ var _assets_img_ps2_imgpsTwo5_jpeg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo5.jpeg */ "./src/assets/img/ps2/imgpsTwo5.jpeg");
/* harmony import */ var _assets_img_ps2_imgpsTwo6_jpeg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo6.jpeg */ "./src/assets/img/ps2/imgpsTwo6.jpeg");
/* harmony import */ var _assets_img_pc_imgpc1_jpeg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../assets/img/pc/imgpc1.jpeg */ "./src/assets/img/pc/imgpc1.jpeg");
/* harmony import */ var _assets_img_pc_imgpc2_jpeg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../assets/img/pc/imgpc2.jpeg */ "./src/assets/img/pc/imgpc2.jpeg");
/* harmony import */ var _assets_img_pc_imgpc3_jpeg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../assets/img/pc/imgpc3.jpeg */ "./src/assets/img/pc/imgpc3.jpeg");
/* harmony import */ var _assets_img_pc_imgpc4_jpeg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../assets/img/pc/imgpc4.jpeg */ "./src/assets/img/pc/imgpc4.jpeg");
/* harmony import */ var _assets_img_pc_imgpc5_jpeg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../assets/img/pc/imgpc5.jpeg */ "./src/assets/img/pc/imgpc5.jpeg");
/* harmony import */ var _assets_img_pc_imgpc6_jpeg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../assets/img/pc/imgpc6.jpeg */ "./src/assets/img/pc/imgpc6.jpeg");
/* harmony import */ var _assets_img_mobile_imgmobile1_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile1.png */ "./src/assets/img/mobile/imgmobile1.png");
/* harmony import */ var _assets_img_mobile_imgmobile2_jpeg__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile2.jpeg */ "./src/assets/img/mobile/imgmobile2.jpeg");
/* harmony import */ var _assets_img_mobile_imgmobile3_jpeg__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile3.jpeg */ "./src/assets/img/mobile/imgmobile3.jpeg");
/* harmony import */ var _assets_img_mobile_imgmobile4_jpeg__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile4.jpeg */ "./src/assets/img/mobile/imgmobile4.jpeg");
/* harmony import */ var _assets_img_mobile_imgmobile5_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile5.png */ "./src/assets/img/mobile/imgmobile5.png");
/* harmony import */ var _assets_img_mobile_imgmobile6_jpeg__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile6.jpeg */ "./src/assets/img/mobile/imgmobile6.jpeg");








































































var gamesData = [[{
  id: 1,
  name: "Super Mario Bros",
  genre: "Платформер",
  description: "Главными героями игры являются водопроводчик Марио и его брат Луиджи (в качестве игрового персонажа для второго игрока). Цель игры — пройти через Грибное королевство, ускользая или уничтожая солдат черепашьего Короля Купы (также известного как Боузер), чтобы спасти захваченную им в плен Принцессу.",
  image: _assets_img_dendy_imgdendy1_jpeg__WEBPACK_IMPORTED_MODULE_36__,
  audio: _assets_audio_dendy_dendy1_mp3__WEBPACK_IMPORTED_MODULE_0__
}, {
  id: 2,
  name: "DuckTales",
  genre: "Платформер",
  description: "В игре игрок управляет селезнем Скруджем МакДаком одетым в чёрный цилиндр, пиджак и гамаши, с тростью и в пенсне. Скруджем МакДаком движет жажда завладеть сокровищами и стать самым богатым селезнем в мире. Сюжет игры не следует напрямую сюжетным линиям мультсериала, однако как в игре, так и в мультфильме Скрудж МакДак путешествует по различным уголкам планеты, с целью найти давно утерянные сокровища.",
  image: _assets_img_dendy_imgdendy2_jpeg__WEBPACK_IMPORTED_MODULE_37__,
  audio: _assets_audio_dendy_dendy2_mp3__WEBPACK_IMPORTED_MODULE_1__
}, {
  id: 3,
  name: "Contra",
  genre: "Шутер",
  description: "12 сентября 2631 года неподалёку от Новой Зеландии падает метеорит. Спустя два года появляется некая террористическая организация под названием «Красный сокол», поставившая перед собой задачу уничтожить всё человечество. База «Красного сокола» находится на некоем острове. Действие игры начинается, когда два бойца Билл Райзер и Лэнс Бин, ставшие до этого Контра (бойцами, мастерски владеющими навыками ведения партизанской войны), высаживаются на остров, чтобы уничтожить базу и спасти мир. По мере проникновения на вражескую территорию бойцы выясняют, что за организацией «Красный сокол» стоят инопланетные пришельцы, прибывшие на метеорите. Главной задачей героев становится нахождение логова пришельцев и уничтожение их сердца.",
  image: _assets_img_dendy_imgdendy3_jpeg__WEBPACK_IMPORTED_MODULE_38__,
  audio: _assets_audio_dendy_dendy3_mp3__WEBPACK_IMPORTED_MODULE_2__
}, {
  id: 4,
  name: "Teenage Mutant Ninja Turtles",
  genre: "Платформер",
  description: "Черепашки-ниндзя (Леонардо, Рафаэлем, Микеланджело и Донателло) должны достать у Шредера Лазер превращения, устройство, которое может вернуть их учителю Сплинтеру его человеческую форму. Вначале они отправляются спасать Эйприл О’Нил, которую захватили в плен Бибоп и Рокстеди. После спасения Эйприл, черепашки должны опуститься под воду, чтобы обезвредить бомбы, заложенные у основания дамбы. Затем спасти Сплинтера от Меха Черепахи, уничтожить гигантского крысолова, найти Технодром и победить Шредера.",
  image: _assets_img_dendy_imgdendy4_jpeg__WEBPACK_IMPORTED_MODULE_39__,
  audio: _assets_audio_dendy_dendy4_mp3__WEBPACK_IMPORTED_MODULE_3__
}, {
  id: 5,
  name: "Bomberman",
  genre: "Аркада",
  description: "Бомбермен — это робот, производящий бомбы на подземном предприятии, возглавляемом некими «злыми силами». Однажды до него дошёл слух, что робот, выбравшийся на поверхность, может стать человеком. Принудительная работа не нравилась Бомбермену, и он решает сбежать. Его объявляют предателем, посылая в погоню множество врагов.",
  image: _assets_img_dendy_imgdendy5_png__WEBPACK_IMPORTED_MODULE_40__,
  audio: _assets_audio_dendy_dendy5_mp3__WEBPACK_IMPORTED_MODULE_4__
}, {
  id: 6,
  name: "Battle City",
  genre: "Аркада",
  description: "Полигон действий виден сверху. Игрок должен, управляя своим танком, уничтожить все вражеские танки на уровне, которые постепенно появляются вверху игрового поля. Враги пытаются уничтожить штаб игрока (внизу игрового поля в виде орла) и его танк. На каждом уровне нужно уничтожить двадцать единиц бронетехники противника разных видов. Если противник (или игрок) сможет разрушить штаб или лишит игрока всех жизней — игра окончена.",
  image: _assets_img_dendy_imgdendy6_png__WEBPACK_IMPORTED_MODULE_41__,
  audio: _assets_audio_dendy_dendy6_mp3__WEBPACK_IMPORTED_MODULE_5__
}], [{
  id: 1,
  name: "Sonic the Hedgehog",
  genre: "Платформер",
  description: "По сюжету, главный герой игры — ёж по имени Соник — впервые встречается со злодеем доктором Роботником, который стремится захватить власть над всем миром. Учёный использует разных зверей для создания своих роботов, называемых бадниками (англ. Badnik), и пытается заполучить шесть мистических драгоценных камней, Изумрудов Хаоса, чтобы ещё больше усилить своё могущество. Соник стремится освободить своих друзей, уничтожить машины Роботника, получить камни первым и нарушить планы злодея.",
  image: _assets_img_sega_imgsega1_jpeg__WEBPACK_IMPORTED_MODULE_42__,
  audio: _assets_audio_sega_sega1_mp3__WEBPACK_IMPORTED_MODULE_6__
}, {
  id: 2,
  name: "Mortal Kombat",
  genre: "Файтинг",
  description: "Игра сконцентрирована на жестоком турнире под названием «Смертельная битва», который проводит злой колдун Шан Цзун. Все персонажи по разным причинам участвуют в турнире. Основная сюжетная линия была расширена через комиксы и сиквелы. В игру были введены ключевые аспекты серии Mortal Kombat, в том числе уникальная система управления и кровавые добивания — Fatality.",
  image: _assets_img_sega_imgsega2_jpeg__WEBPACK_IMPORTED_MODULE_43__,
  audio: _assets_audio_sega_sega2_mp3__WEBPACK_IMPORTED_MODULE_7__
}, {
  id: 3,
  name: "Mr. Nutz",
  genre: "Платформер",
  description: "Кто как не отважный бельчонок именуемый мистером Орешником способен спасти планету от надвигающегося ледникового периода! Вместе с ним вам предстоит отправиться в опасное приключение по искоренению разбойничающих йети и других надоедливых тварей, прислуживающих злобному мистеру Бурану, который решил, что его владения должны простираться намного дальше верхушки земного шара во всех направлениях.",
  image: _assets_img_sega_imgsega3_jpeg__WEBPACK_IMPORTED_MODULE_44__,
  audio: _assets_audio_sega_sega3_mp3__WEBPACK_IMPORTED_MODULE_8__
}, {
  id: 4,
  name: "Rock n' Roll Racing",
  genre: "Боевые гонки",
  description: "Перед вами убойная гоночная игра с элементами боевика! Полный беспредел на дороге вам обеспечен, ведь в этих гонках нет никаких правил, зато есть различные вооруженные болиды, а также безбашенные гонщики готовые на всё ради победы. Вы как раз и являетесь одним из таких гонщиков, путешествуете по планетам, участвуете в заездах, чтобы завоевать звание лучшего из лучших. Игра наполнена драйвом, игровой процесс постоянно держит вас в напряжении. Музыкальные треки в исполнении таких легендарных групп как Led Zepplin, Deep Purple, Black Sabbat просто идеально вписываются в атмосферу гонок. Rock N' Roll Racing несомненно является одной из лучших, а возможно даже и самой лучшей игрой в данном жанре.",
  image: _assets_img_sega_imgsega4_jpeg__WEBPACK_IMPORTED_MODULE_45__,
  audio: _assets_audio_sega_sega4_mp3__WEBPACK_IMPORTED_MODULE_9__
}, {
  id: 5,
  name: "Jurassic Park",
  genre: "Боевик",
  description: "Грант проезжал на электромобиле мимо вольеров с динозаврами. Внезапная молния отключает все системы, и динозавры вырываются на свободу. На машину Гранта нападает тираннозавр, в результате чего доктор оказывается в джунглях. Из джунглей ему нужно добраться до Центра посетителей, чтобы спастись с острова.",
  image: _assets_img_sega_imgsega5_jpeg__WEBPACK_IMPORTED_MODULE_46__,
  audio: _assets_audio_sega_sega5_mp3__WEBPACK_IMPORTED_MODULE_10__
}, {
  id: 6,
  name: "Golden Axe II",
  genre: "Избей их всех",
  description: "Главный герой должен пройти по сказочному миру и вернуть волшебный топор, победив злодея Дарк Гульда",
  image: _assets_img_sega_imgsega6_png__WEBPACK_IMPORTED_MODULE_47__,
  audio: _assets_audio_sega_sega6_mp3__WEBPACK_IMPORTED_MODULE_11__
}], [{
  id: 1,
  name: "Spyro - Year of the Dragon",
  genre: "Платформер",
  description: "Игра начинается с празднования в земле драконов, когда Спайро и его родственники празднуют «Год Дракона» — событие, которое проходит каждые двенадцать лет, когда в царство прибывают новые драконьи яйца. Однако, когда все драконы спали после празднования, в Драконье Царство вторгается армия существ во главе с крольчихой-чародейкой Бьянкой, которая крадёт все яйца. Однако во время переноса последних яиц кража была обнаружена, и Спайро пустился в погоню, поскольку только он и Хантер пролезали в нору через которую были вынесены яйца.",
  image: _assets_img_ps1_imgpsOne1_jpeg__WEBPACK_IMPORTED_MODULE_48__,
  audio: _assets_audio_ps1_psOne1_mp3__WEBPACK_IMPORTED_MODULE_12__
}, {
  id: 2,
  name: "Crash Bandicoot",
  genre: "Платформер",
  description: "Где-то на территории Австралии учёный Доктор Нео Кортекс проводит в своей лаборатории опыты над пойманным зверьком, Крэшем. Делает он это для того, чтобы осуществить свою мечту — создать армию и поработить весь мир. Он нацеливает на несчастного бандикута пушку, называемую Evolvo Ray, способный, по легенде, давать животным человеческие способности, но по некоторому стечению обстоятельств пушка не успевает завершить свой процесс и главный герой сбегает. По-видимому, вместо того чтобы Крэш возглавлял армию доктора Кортекса и часами размышлял над тактикой проведения его мечты в жизнь, бедняга наоборот лишается своих последних мозгов и теряет дар речи. Однако доктор оказывается не таким глупым, чтобы не учесть плана Б. Он похитил девушку Крэша, Тавну. В итоге Крэш выпрыгивает в окно и оказывается на берегу острова N.Sanity и тут завязывается начало игры. В спасении своей возлюбленной на протяжении всей игры Крэшу будет помогать некий дух, заточённый в облик маски — Aku Aku. Игра насыщена разного рода юмором: даже смерти главного героя выглядят забавно.",
  image: _assets_img_ps1_imgpsOne2_png__WEBPACK_IMPORTED_MODULE_49__,
  audio: _assets_audio_ps1_psOne2_mp3__WEBPACK_IMPORTED_MODULE_13__
}, {
  id: 3,
  name: "TEKKEN 3",
  genre: "Файтинг",
  description: "Спустя пятнадцать лет после турнира «Король Железного Кулака 2», Хэйхати Мисима создаёт военную организацию «Tekken Force», которая должна заниматься защитой Мисима Зайбацу. Отряд ищет древний храм, расположенный в Мексике. Вскоре после прибытия туда, Хэйхати узнаёт, что отряд был уничтожен Огром. Однако Хэйхати, будучи свидетелем событий, стремится захватить Огра в надежде направить его силу для собственной выгоды. Вскоре различных мастеров боевых искусств со всего мира находят мёртвыми. Во всём этом подозревается Огр.",
  image: _assets_img_ps1_imgpsOne3_jpeg__WEBPACK_IMPORTED_MODULE_50__,
  audio: _assets_audio_ps1_psOne3_mp3__WEBPACK_IMPORTED_MODULE_14__
}, {
  id: 4,
  name: "Silent Hill",
  genre: "Ужас выживания",
  description: "Действие игры происходит в одноимённом вымышленном американском городе. Сюжет разворачивается вокруг писателя Гарри Мэйсона, который ищет в Сайлент Хилле свою пропавшую приёмную дочь Шерил. В городе он обнаруживает религиозный культ, пытающийся провести ритуал с целью возрождения божества, которому этот культ поклоняется. В игре присутствует пять разных концовок, включая одну шуточную.",
  image: _assets_img_ps1_imgpsOne4_jpeg__WEBPACK_IMPORTED_MODULE_51__,
  audio: _assets_audio_ps1_psOne4_mp3__WEBPACK_IMPORTED_MODULE_15__
}, {
  id: 5,
  name: "Gran Turismo",
  genre: "Автосимулятор",
  description: "Игра имеет два режима: аркадный и реалистичный. В аркадном режиме игрок может выбирать автомобили таких производителей, как Nissan, Honda, Acura и Aston Martin и других. Под каждый автомобиль создана своя карта тюнинга. Все трассы в исходной версии игры вымышлены. Реально существующие трассы, такие как Laguna Seca, Le Mans Sarthe и New York City, появились в последующих версиях игры. В реалистичном режиме игрок получает возможность делать карьеру, начиная с десяти тысяч кредитов, на которые можно купить подержанную машину. Дальше игрок должен получить одну из трёх лицензий: B-класса, А-класса или международного А-класса.",
  image: _assets_img_ps1_imgpsOne5_jpeg__WEBPACK_IMPORTED_MODULE_52__,
  audio: _assets_audio_ps1_psOne5_mp3__WEBPACK_IMPORTED_MODULE_16__
}, {
  id: 6,
  name: "Syphon Filter",
  genre: "Шутер от третьего лица",
  description: "Специальный агент Габриэль Логан и его напарница Лиан Синг расследуют серию биологических терактов, ответственный за которые международный террорист Эрих Ромер. Агентство теряет связь с агентом Эллис в Коста-Рике и отправляет на его поиски Гейба и Лиан. Они находят Эллиса мёртвым, и обнаруживают, что операции по обороту наркотиков Ромера всего лишь прикрытие для нового вируса. Другой взрыв в Непале поднимает ещё больше вопросов, когда группы биохимической защиты находят инфицированного человека, который должен был умереть, но остался жив.",
  image: _assets_img_ps1_imgpsOne6_jpeg__WEBPACK_IMPORTED_MODULE_53__,
  audio: _assets_audio_ps1_psOne6_mp3__WEBPACK_IMPORTED_MODULE_17__
}], [{
  id: 1,
  name: "Super Street Fighter II",
  genre: "Файтинг",
  description: "Street Fighter II, как следует из её названия, была второй игрой в одноимённой серии. По сравнению со своей предшественницей Street Fighter, выпущенной в 1987 году, Street Fighter II имела значительные изменения, внесённые в игровую механику, такие как усовершенствование шестикнопочного управления, специальных приёмов и возможности выбирать персонажа из нескольких бойцов, каждый из которых обладал собственным стилем боя и уникальными приёмами.",
  image: _assets_img_ps2_imgpsTwo1_png__WEBPACK_IMPORTED_MODULE_54__,
  audio: _assets_audio_ps2_psTwo1_mp3__WEBPACK_IMPORTED_MODULE_18__
}, {
  id: 2,
  name: "Need for Speed - Underground 2",
  genre: "Гонки",
  description: "Действия игры происходят в вымышленном городе Бэйвью. Он имеет сходства с такими реальными городами, как Лос-Анджелес и Лас-Вегас. Как и в Олимпик-Сити (городе Need for Speed: Underground), в Бэйвью не существует полиции, а действия всегда проходят в ночное время суток. По улицам города разъезжают машины, а также имеется динамическая смена погодных условий — при дожде, который может начаться и прекратиться в любой момент, управление автомобилями осложняется. Для ориентирования в городе присутствуют карта и система GPS.",
  image: _assets_img_ps2_imgpsTwo2_jpeg__WEBPACK_IMPORTED_MODULE_55__,
  audio: _assets_audio_ps2_psTwo2_mp3__WEBPACK_IMPORTED_MODULE_19__
}, {
  id: 3,
  name: "God of War",
  genre: "Боевик",
  description: "Сеттинг основан на греческой мифологии, действие игры разворачивается на территории Древней Греции. Главный протагонист Кратос — спартанский воин, служащий олимпийским богам. По наставлению богини Афины Кратос должен уничтожить текущего бога войны Ареса, чтобы получить прощение олимпийских богов. Кратос соглашается, поскольку Арес причастен к убийству семьи главного героя, и отправляется в опасное путешествие, чтобы заполучить легендарный ящик Пандоры, дающий огромную силу.",
  image: _assets_img_ps2_imgpsTwo3_jpeg__WEBPACK_IMPORTED_MODULE_56__,
  audio: _assets_audio_ps2_psTwo3_mp3__WEBPACK_IMPORTED_MODULE_20__
}, {
  id: 4,
  name: "Shadow of the Colossus",
  genre: "Боевик",
  description: "Сюжетная составляющая аскетична ― в Shadow of the Colossus всего два продолжительных ролика (вступительный и заключительный), раскрывающих историю. Мотивация и происхождение некоторых героев остаются неочевидными до конца игры. Наличие заброшенных сооружений указывает на то, что запретные земли когда-то были населены людьми ― в центре игровой карты расположен храм, называемый Святилищем Поклонения, к которому ведёт длинный мост из внешнего мира. В игре существует возможность пройти по мосту, но выйти за пределы запретных земель невозможно. Остальной игровой мир огорожен скалами и водой.",
  image: _assets_img_ps2_imgpsTwo4_jpeg__WEBPACK_IMPORTED_MODULE_57__,
  audio: _assets_audio_ps2_psTwo4_mp3__WEBPACK_IMPORTED_MODULE_21__
}, {
  id: 5,
  name: "Psychonauts",
  genre: "Приключения",
  description: "В Psychonauts игрок управляет Разом (сокращённо от Разпутин), таинственным новичком в учебном лагере для психонавтов — элитных специальных агентов, которые используют свои пси-способности для войны с пси-террористами и чтения мыслей людей. Во время обучения он обнаруживает, что вожатый Олеандр похищает кадетов с целью захвата их мозгов. Раз должен помешать ему создать с их помощью пси-оружие.",
  image: _assets_img_ps2_imgpsTwo5_jpeg__WEBPACK_IMPORTED_MODULE_58__,
  audio: _assets_audio_ps2_psTwo5_mp3__WEBPACK_IMPORTED_MODULE_22__
}, {
  id: 6,
  name: "Resident Evil 4",
  genre: "Ужас выживания",
  description: "Осень 2004 года. Леон Скотт Кеннеди, бывший офицер полиции Раккун-сити, а ныне агент правительства США, отправляется на поиски Эшли Грэм, дочери президента, похищенной из колледжа таинственным культом. Он едет в глухую испанскую деревушку, где скрылись похитители.",
  image: _assets_img_ps2_imgpsTwo6_jpeg__WEBPACK_IMPORTED_MODULE_59__,
  audio: _assets_audio_ps2_psTwo6_mp3__WEBPACK_IMPORTED_MODULE_23__
}], [{
  id: 1,
  name: "Terraria",
  genre: "Песочница",
  description: "Игра, разработанная с использованием набора инструментов Microsoft XNA, даёт в распоряжение игрока процедурно генерируемый и изменяемый двумерный мир. Помимо добычи ресурсов и строительства сооружений, в игровом процессе Terraria также уделяется внимание исследованию мира, поиску сокровищ и сражениям с противниками.",
  image: _assets_img_pc_imgpc1_jpeg__WEBPACK_IMPORTED_MODULE_60__,
  audio: _assets_audio_pc_pc1_mp3__WEBPACK_IMPORTED_MODULE_24__
}, {
  id: 2,
  name: "Fortnite",
  genre: "Королевская битва",
  description: "Fortnite — это кооперативная песочница на выживание, основными механиками которой являются исследование, сбор ресурсов, строительство укрепленных зданий и борьба с волнами наступающих зомби. Игроки кооперируются, чтобы собирать предметы, которые они могут использовать для строительства форта днём, а ночью защищаться от зомби. Строительство является основной механикой, при этом в игре «уйма лута». Игроки могут строить и редактировать каждую стену своего форта с сеткой 3х3, строить лестницы, крышу и окна, ваяя их в соответствии с той или иной потребностью.",
  image: _assets_img_pc_imgpc2_jpeg__WEBPACK_IMPORTED_MODULE_61__,
  audio: _assets_audio_pc_pc2_mp3__WEBPACK_IMPORTED_MODULE_25__
}, {
  id: 3,
  name: "Hades",
  genre: "Рогалик",
  description: "Сюжет игры основан на древнегреческой мифологии: главный герой Загрей, сын Аида, пытается сбежать из подземного царства мёртвых и добраться до горы Олимп; на этом пути ему помогают боги-олимпийцы, посылающие Загрею те или иные дары. В каждом прохождении игрок должен преодолеть серию собранных случайным образом комнат с врагами и наградами; в случае смерти Загрей возвращается в самое начало пути, хотя игрок может потратить собранные за время прохождения сокровища и на улучшение характеристик или разблокировку новых видов оружия. Многочисленные прохождения Hades связываются воедино разнообразными сценами и диалогами, раскрывающими предысторию игры и отношения её персонажей.",
  image: _assets_img_pc_imgpc3_jpeg__WEBPACK_IMPORTED_MODULE_62__,
  audio: _assets_audio_pc_pc3_mp3__WEBPACK_IMPORTED_MODULE_26__
}, {
  id: 4,
  name: "It Takes Two",
  genre: "приключенческий боевик",
  description: "It Takes Two была специально разработана для игры в кооперативном режиме на разделённом экране, а потому для игры требуется второй игрок, который также может подключиться по сети. Игроки управляют родителями маленькой девочки, находящимися на грани развода. Волшебная книга о любви превращает героев в маленьких кукол, и теперь, чтобы вернуть себе прежний облик, им необходимо перешагнуть через свои обиды и разногласия и действовать вместе, помогая друг другу в этом сложном, но ярком и эмоциональном приключении. В игре представлено множество игровых механик из игр разных жанров.",
  image: _assets_img_pc_imgpc4_jpeg__WEBPACK_IMPORTED_MODULE_63__,
  audio: _assets_audio_pc_pc4_mp3__WEBPACK_IMPORTED_MODULE_27__
}, {
  id: 5,
  name: "Cuphead",
  genre: "Платформер",
  description: "Персонаж игрока, Чашек, проиграл в споре с дьяволом и пытается вернуть долг. Игра имеет вид разветвляющейся последовательности уровней. У Чашека бесконечное число попыток, и он не теряет оружие после смерти. У главного героя игры есть способность парирования различных объектов, закодированных розовым цветом. Успешные парирования заполняют специальный счётчик, который позволяет ему выполнять специальную способность. Уровни доступны через внешний мир в стиле action RPG, который имеет собственные секретные пути.",
  image: _assets_img_pc_imgpc5_jpeg__WEBPACK_IMPORTED_MODULE_64__,
  audio: _assets_audio_pc_pc5_mp3__WEBPACK_IMPORTED_MODULE_28__
}, {
  id: 6,
  name: "Hollow Knight",
  genre: "Платформер",
  description: "Основная часть игрового процесса Hollow Knight завязана на исследовании мира игры, который включает в себя преодоление платформ, поиски секретов и боёв с встречающимися по дороге врагами. Игроку предстоит исследовать огромный цельный мир, используя особые улучшения для передвижения и уловки из боевой системы, например, отражение некоторых угроз ударами. Как и в любой метроидвании, во многих зонах есть преграды, которые можно преодолеть, лишь победив определённых боссов и получив улучшения, полученные с них. Таким образом игрокам придётся посещать уже исследованные зоны для поисков секретов или продвижения по сюжету. Некоторые зоны меняются по ходу сюжета, а потому повторное их посещение иногда приносит сюрпризы. Каждая зона соединена с другой несколькими переходами, а потому проходить игру можно по-разному. У каждой зоны есть своя карта, но изначально она недоступна. Для получения карты конкретной зоны нужно найти картографа в этой зоне и купить карту у него за местную валюту (или же взять её позже в магазине карт, но за большую цену), после чего самостоятельно её заполнять методом посещения локаций. ",
  image: _assets_img_pc_imgpc6_jpeg__WEBPACK_IMPORTED_MODULE_65__,
  audio: _assets_audio_pc_pc6_mp3__WEBPACK_IMPORTED_MODULE_29__
}], [{
  id: 1,
  name: "Candy Crush Saga",
  genre: "Головоломка",
  description: "Игроки должны совместить три игровые конфеты одинакового цвета в ряд, чтобы те исчезли. Если совместить больше — игрок получает специальные конфеты, которые дают дополнительные возможности. Нужно собрать как можно больше очков за ограниченное количество времени или ходов. Также в игре присутствуют бомбы: с ними надо сделать любую комбинацию до прошествия числа ходов на самой бомбе. Если условия не соблюдены игроком, то он проигрывает.",
  image: _assets_img_mobile_imgmobile1_png__WEBPACK_IMPORTED_MODULE_66__,
  audio: _assets_audio_mobile_mobile1_mp3__WEBPACK_IMPORTED_MODULE_30__
}, {
  id: 2,
  name: "Monument valley",
  genre: "Инди-головоломка",
  description: "Задача игрока сводится к управлению персонажем по имени «принцесса Ида», которая должна найти выход из лабиринта. Всего в Monument Valley имеется 10 лабиринтов с несколькими уровнями. Игра представляет собой пошаговую головоломку, то есть игрок не может умереть в игре или совершить ошибку. Основная его задача сводится к поэтапному поиску или построению маршрутов, чтобы выйти из лабиринта. Во вселенной игры существуют оптические иллюзии и невозможные фигуры. Ида способна лазить по лестницам и пересекать округлённые объекты. Однако для пересечения разного рода барьеров, необходимо активировать механизмы, которые меняют маршруты лабиринта, или же менять ракурс камеры, чтобы при помощи оптической иллюзии найти новый маршрут прохождения.",
  image: _assets_img_mobile_imgmobile2_jpeg__WEBPACK_IMPORTED_MODULE_67__,
  audio: _assets_audio_mobile_mobile2_mp3__WEBPACK_IMPORTED_MODULE_31__
}, {
  id: 3,
  name: "Angry Birds",
  genre: "Аркада",
  description: "Игрок должен запускать птиц в свиней при помощи рогатки. Уровень будет пройден, если игрок уничтожит всех свиней, в противном случае его придётся проходить заново. Чаще всего свиньи используют строения из блоков в качестве укрытия.",
  image: _assets_img_mobile_imgmobile3_jpeg__WEBPACK_IMPORTED_MODULE_68__,
  audio: _assets_audio_mobile_mobile3_mp3__WEBPACK_IMPORTED_MODULE_32__
}, {
  id: 4,
  name: "Subway Surfers",
  genre: "Бесконечный бег",
  description: "В начале каждой игры игроку демонстрируется кат-сцена, в которой персонаж игрока рисует граффити на одном из вагонов метро. Хулигана замечает инспектор с собакой, после чего начинается погоня по железнодорожным путям. Основная цель игры состоит в том, чтобы игрок, ускоряясь, пробежал как можно дальше, уворачиваясь от встречных поездов и других препятствий. С увеличением ускорения игрока — проходить препятствия становится сложнее. Если игрок с чем-то сталкивается, то инспектор его догоняет (причём вне зависимости от того, насколько далеко он успел убежать) и игра заканчивается. Но этого можно избежать, если во время столкновения использовалась доска для сёрфинга, в противном случае есть возможность потратить ключи и продолжить погоню. ",
  image: _assets_img_mobile_imgmobile4_jpeg__WEBPACK_IMPORTED_MODULE_69__,
  audio: _assets_audio_mobile_mobile4_mp3__WEBPACK_IMPORTED_MODULE_33__
}, {
  id: 5,
  name: "Crashlands",
  genre: "Приключенческий боевик",
  description: "Сюжет игры начинается с того, что космический корабль Flux терпит крушение на планете Woanope. Всему виной злодей Hewgodooko, который просто взял, и забрал важный кусок корабля. Flux является космическим посыльным, поэтому основной задачей считает быстрейшую установку связи с родной планетой и вызов эвакуатора. Собственно, его работа должна быть выполнена в срок, так или иначе. Вот только для выполнения миссии необходим источник энергии , которые, в следствие печального стечения обстоятельств, также ищет Hewgodooko, сметая всё на своём пути. Соответственно, в одиночку выполнить задачу не представляется возможным. По мере игры нам будет помогать робот-помощник JuiceBox.",
  image: _assets_img_mobile_imgmobile5_png__WEBPACK_IMPORTED_MODULE_70__,
  audio: _assets_audio_mobile_mobile5_mp3__WEBPACK_IMPORTED_MODULE_34__
}, {
  id: 6,
  name: "Geometry Dash",
  genre: "Платформер",
  description: "В игре присутствует скрытый сюжет. Игра содержит 21 встроенный уровень, 18 из которых открыты для прохождения сразу, ещё три открываются после сбора на других уровнях определённого количества монет. Также в игре есть секретный уровень, который становится доступен после сбора двухсот алмазов. Уровни представляют собой полосы препятствий, по которым движется персонаж игрока, принимающий одну из нескольких форм, каждая из которых движется по-своему, и длятся в среднем полторы-две минуты. Полоса препятствий синхронизирована с саундтреком уровня, в качестве которого выступают электронные музыкальные треки.",
  image: _assets_img_mobile_imgmobile6_jpeg__WEBPACK_IMPORTED_MODULE_71__,
  audio: _assets_audio_mobile_mobile6_mp3__WEBPACK_IMPORTED_MODULE_35__
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gamesData);

/***/ }),

/***/ "./src/data/gamesEnglish.js":
/*!**********************************!*\
  !*** ./src/data/gamesEnglish.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_audio_dendy_dendy1_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/audio/dendy/dendy1.mp3 */ "./src/assets/audio/dendy/dendy1.mp3");
/* harmony import */ var _assets_audio_dendy_dendy2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/audio/dendy/dendy2.mp3 */ "./src/assets/audio/dendy/dendy2.mp3");
/* harmony import */ var _assets_audio_dendy_dendy3_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/audio/dendy/dendy3.mp3 */ "./src/assets/audio/dendy/dendy3.mp3");
/* harmony import */ var _assets_audio_dendy_dendy4_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/audio/dendy/dendy4.mp3 */ "./src/assets/audio/dendy/dendy4.mp3");
/* harmony import */ var _assets_audio_dendy_dendy5_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/audio/dendy/dendy5.mp3 */ "./src/assets/audio/dendy/dendy5.mp3");
/* harmony import */ var _assets_audio_dendy_dendy6_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/audio/dendy/dendy6.mp3 */ "./src/assets/audio/dendy/dendy6.mp3");
/* harmony import */ var _assets_audio_sega_sega1_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/audio/sega/sega1.mp3 */ "./src/assets/audio/sega/sega1.mp3");
/* harmony import */ var _assets_audio_sega_sega2_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/audio/sega/sega2.mp3 */ "./src/assets/audio/sega/sega2.mp3");
/* harmony import */ var _assets_audio_sega_sega3_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/audio/sega/sega3.mp3 */ "./src/assets/audio/sega/sega3.mp3");
/* harmony import */ var _assets_audio_sega_sega4_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/audio/sega/sega4.mp3 */ "./src/assets/audio/sega/sega4.mp3");
/* harmony import */ var _assets_audio_sega_sega5_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/audio/sega/sega5.mp3 */ "./src/assets/audio/sega/sega5.mp3");
/* harmony import */ var _assets_audio_sega_sega6_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/audio/sega/sega6.mp3 */ "./src/assets/audio/sega/sega6.mp3");
/* harmony import */ var _assets_audio_ps1_psOne1_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/audio/ps1/psOne1.mp3 */ "./src/assets/audio/ps1/psOne1.mp3");
/* harmony import */ var _assets_audio_ps1_psOne2_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/audio/ps1/psOne2.mp3 */ "./src/assets/audio/ps1/psOne2.mp3");
/* harmony import */ var _assets_audio_ps1_psOne3_mp3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/audio/ps1/psOne3.mp3 */ "./src/assets/audio/ps1/psOne3.mp3");
/* harmony import */ var _assets_audio_ps1_psOne4_mp3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/audio/ps1/psOne4.mp3 */ "./src/assets/audio/ps1/psOne4.mp3");
/* harmony import */ var _assets_audio_ps1_psOne5_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/audio/ps1/psOne5.mp3 */ "./src/assets/audio/ps1/psOne5.mp3");
/* harmony import */ var _assets_audio_ps1_psOne6_mp3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/audio/ps1/psOne6.mp3 */ "./src/assets/audio/ps1/psOne6.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo1_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo1.mp3 */ "./src/assets/audio/ps2/psTwo1.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo2_mp3__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo2.mp3 */ "./src/assets/audio/ps2/psTwo2.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo3_mp3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo3.mp3 */ "./src/assets/audio/ps2/psTwo3.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo4_mp3__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo4.mp3 */ "./src/assets/audio/ps2/psTwo4.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo5_mp3__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo5.mp3 */ "./src/assets/audio/ps2/psTwo5.mp3");
/* harmony import */ var _assets_audio_ps2_psTwo6_mp3__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/audio/ps2/psTwo6.mp3 */ "./src/assets/audio/ps2/psTwo6.mp3");
/* harmony import */ var _assets_audio_pc_pc1_mp3__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/audio/pc/pc1.mp3 */ "./src/assets/audio/pc/pc1.mp3");
/* harmony import */ var _assets_audio_pc_pc2_mp3__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/audio/pc/pc2.mp3 */ "./src/assets/audio/pc/pc2.mp3");
/* harmony import */ var _assets_audio_pc_pc3_mp3__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/audio/pc/pc3.mp3 */ "./src/assets/audio/pc/pc3.mp3");
/* harmony import */ var _assets_audio_pc_pc4_mp3__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/audio/pc/pc4.mp3 */ "./src/assets/audio/pc/pc4.mp3");
/* harmony import */ var _assets_audio_pc_pc5_mp3__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/audio/pc/pc5.mp3 */ "./src/assets/audio/pc/pc5.mp3");
/* harmony import */ var _assets_audio_pc_pc6_mp3__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/audio/pc/pc6.mp3 */ "./src/assets/audio/pc/pc6.mp3");
/* harmony import */ var _assets_audio_mobile_mobile1_mp3__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/audio/mobile/mobile1.mp3 */ "./src/assets/audio/mobile/mobile1.mp3");
/* harmony import */ var _assets_audio_mobile_mobile2_mp3__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/audio/mobile/mobile2.mp3 */ "./src/assets/audio/mobile/mobile2.mp3");
/* harmony import */ var _assets_audio_mobile_mobile3_mp3__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/audio/mobile/mobile3.mp3 */ "./src/assets/audio/mobile/mobile3.mp3");
/* harmony import */ var _assets_audio_mobile_mobile4_mp3__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/audio/mobile/mobile4.mp3 */ "./src/assets/audio/mobile/mobile4.mp3");
/* harmony import */ var _assets_audio_mobile_mobile5_mp3__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../assets/audio/mobile/mobile5.mp3 */ "./src/assets/audio/mobile/mobile5.mp3");
/* harmony import */ var _assets_audio_mobile_mobile6_mp3__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../assets/audio/mobile/mobile6.mp3 */ "./src/assets/audio/mobile/mobile6.mp3");
/* harmony import */ var _assets_img_dendy_imgdendy1_jpeg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy1.jpeg */ "./src/assets/img/dendy/imgdendy1.jpeg");
/* harmony import */ var _assets_img_dendy_imgdendy2_jpeg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy2.jpeg */ "./src/assets/img/dendy/imgdendy2.jpeg");
/* harmony import */ var _assets_img_dendy_imgdendy3_jpeg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy3.jpeg */ "./src/assets/img/dendy/imgdendy3.jpeg");
/* harmony import */ var _assets_img_dendy_imgdendy4_jpeg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy4.jpeg */ "./src/assets/img/dendy/imgdendy4.jpeg");
/* harmony import */ var _assets_img_dendy_imgdendy5_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy5.png */ "./src/assets/img/dendy/imgdendy5.png");
/* harmony import */ var _assets_img_dendy_imgdendy6_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../assets/img/dendy/imgdendy6.png */ "./src/assets/img/dendy/imgdendy6.png");
/* harmony import */ var _assets_img_sega_imgsega1_jpeg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../assets/img/sega/imgsega1.jpeg */ "./src/assets/img/sega/imgsega1.jpeg");
/* harmony import */ var _assets_img_sega_imgsega2_jpeg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../assets/img/sega/imgsega2.jpeg */ "./src/assets/img/sega/imgsega2.jpeg");
/* harmony import */ var _assets_img_sega_imgsega3_jpeg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../assets/img/sega/imgsega3.jpeg */ "./src/assets/img/sega/imgsega3.jpeg");
/* harmony import */ var _assets_img_sega_imgsega4_jpeg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../assets/img/sega/imgsega4.jpeg */ "./src/assets/img/sega/imgsega4.jpeg");
/* harmony import */ var _assets_img_sega_imgsega5_jpeg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../assets/img/sega/imgsega5.jpeg */ "./src/assets/img/sega/imgsega5.jpeg");
/* harmony import */ var _assets_img_sega_imgsega6_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../assets/img/sega/imgsega6.png */ "./src/assets/img/sega/imgsega6.png");
/* harmony import */ var _assets_img_ps1_imgpsOne1_jpeg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne1.jpeg */ "./src/assets/img/ps1/imgpsOne1.jpeg");
/* harmony import */ var _assets_img_ps1_imgpsOne2_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne2.png */ "./src/assets/img/ps1/imgpsOne2.png");
/* harmony import */ var _assets_img_ps1_imgpsOne3_jpeg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne3.jpeg */ "./src/assets/img/ps1/imgpsOne3.jpeg");
/* harmony import */ var _assets_img_ps1_imgpsOne4_jpeg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne4.jpeg */ "./src/assets/img/ps1/imgpsOne4.jpeg");
/* harmony import */ var _assets_img_ps1_imgpsOne5_jpeg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne5.jpeg */ "./src/assets/img/ps1/imgpsOne5.jpeg");
/* harmony import */ var _assets_img_ps1_imgpsOne6_jpeg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../assets/img/ps1/imgpsOne6.jpeg */ "./src/assets/img/ps1/imgpsOne6.jpeg");
/* harmony import */ var _assets_img_ps2_imgpsTwo1_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo1.png */ "./src/assets/img/ps2/imgpsTwo1.png");
/* harmony import */ var _assets_img_ps2_imgpsTwo2_jpeg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo2.jpeg */ "./src/assets/img/ps2/imgpsTwo2.jpeg");
/* harmony import */ var _assets_img_ps2_imgpsTwo3_jpeg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo3.jpeg */ "./src/assets/img/ps2/imgpsTwo3.jpeg");
/* harmony import */ var _assets_img_ps2_imgpsTwo4_jpeg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo4.jpeg */ "./src/assets/img/ps2/imgpsTwo4.jpeg");
/* harmony import */ var _assets_img_ps2_imgpsTwo5_jpeg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo5.jpeg */ "./src/assets/img/ps2/imgpsTwo5.jpeg");
/* harmony import */ var _assets_img_ps2_imgpsTwo6_jpeg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../assets/img/ps2/imgpsTwo6.jpeg */ "./src/assets/img/ps2/imgpsTwo6.jpeg");
/* harmony import */ var _assets_img_pc_imgpc1_jpeg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../assets/img/pc/imgpc1.jpeg */ "./src/assets/img/pc/imgpc1.jpeg");
/* harmony import */ var _assets_img_pc_imgpc2_jpeg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../assets/img/pc/imgpc2.jpeg */ "./src/assets/img/pc/imgpc2.jpeg");
/* harmony import */ var _assets_img_pc_imgpc3_jpeg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../assets/img/pc/imgpc3.jpeg */ "./src/assets/img/pc/imgpc3.jpeg");
/* harmony import */ var _assets_img_pc_imgpc4_jpeg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../assets/img/pc/imgpc4.jpeg */ "./src/assets/img/pc/imgpc4.jpeg");
/* harmony import */ var _assets_img_pc_imgpc5_jpeg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../assets/img/pc/imgpc5.jpeg */ "./src/assets/img/pc/imgpc5.jpeg");
/* harmony import */ var _assets_img_pc_imgpc6_jpeg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../assets/img/pc/imgpc6.jpeg */ "./src/assets/img/pc/imgpc6.jpeg");
/* harmony import */ var _assets_img_mobile_imgmobile1_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile1.png */ "./src/assets/img/mobile/imgmobile1.png");
/* harmony import */ var _assets_img_mobile_imgmobile2_jpeg__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile2.jpeg */ "./src/assets/img/mobile/imgmobile2.jpeg");
/* harmony import */ var _assets_img_mobile_imgmobile3_jpeg__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile3.jpeg */ "./src/assets/img/mobile/imgmobile3.jpeg");
/* harmony import */ var _assets_img_mobile_imgmobile4_jpeg__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile4.jpeg */ "./src/assets/img/mobile/imgmobile4.jpeg");
/* harmony import */ var _assets_img_mobile_imgmobile5_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile5.png */ "./src/assets/img/mobile/imgmobile5.png");
/* harmony import */ var _assets_img_mobile_imgmobile6_jpeg__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../assets/img/mobile/imgmobile6.jpeg */ "./src/assets/img/mobile/imgmobile6.jpeg");








































































var gamesDataEnglish = [[{
  id: 1,
  name: "Super Mario Bros",
  genre: "Platformer",
  description: "The main characters of the game are the plumber Mario and his brother Luigi (as a playable character for the second player). The goal of the game is to get through the Mushroom Kingdom while escaping or destroying the Turtle King Koopa (also known as Bowser) soldiers in order to rescue the Princess he has captured.",
  image: _assets_img_dendy_imgdendy1_jpeg__WEBPACK_IMPORTED_MODULE_36__,
  audio: _assets_audio_dendy_dendy1_mp3__WEBPACK_IMPORTED_MODULE_0__
}, {
  id: 2,
  name: "DuckTales",
  genre: "Platformer",
  description: "In the game, the player controls the drake Scrooge McDuck, dressed in a black top hat, jacket and leggings, with a cane and pince-nez. Scrooge McDuck is driven by the desire to take possession of the treasure and become the richest drake in the world. The plot of the game does not directly follow the storylines of the animated series, however, both in the game and in the cartoon, Scrooge McDuck travels to different parts of the planet in order to find long-lost treasures.",
  image: _assets_img_dendy_imgdendy2_jpeg__WEBPACK_IMPORTED_MODULE_37__,
  audio: _assets_audio_dendy_dendy2_mp3__WEBPACK_IMPORTED_MODULE_1__
}, {
  id: 3,
  name: "Contra",
  genre: "Shooter",
  description: "On September 12, 2631, a meteorite falls near New Zealand. Two years later, a certain terrorist organization called the Red Falcon appears, which has set itself the task of destroying all of humanity. The base of the «Red Falcon» is located on a certain island. The game begins when two fighters Bill Raiser and Lance Bean, who have become Contra (fighters who master the skills of guerrilla warfare), land on the island to destroy the base and save the world. As they penetrate enemy territory, the fighters find out that alien aliens who arrived on a meteorite are behind the Red Falcon organization. The main task of the heroes is to find the lair of aliens and destroy their hearts.",
  image: _assets_img_dendy_imgdendy3_jpeg__WEBPACK_IMPORTED_MODULE_38__,
  audio: _assets_audio_dendy_dendy3_mp3__WEBPACK_IMPORTED_MODULE_2__
}, {
  id: 4,
  name: "Teenage Mutant Ninja Turtles",
  genre: "Platformer",
  description: "The Teenage Mutant Ninja Turtles (Leonardo, Raphael, Michelangelo, and Donatello) must obtain the Transformation Laser from Shredder, a device that can return their master Splinter to his human form. First, they go to rescue April O'Neil, who was captured by Bebop and Rocksteady. After rescuing April, the Turtles must dive underwater to disarm the bombs planted at the base of the dam. Then save Splinter from the Turtle Mech, destroy the giant rat-catcher, find the Technodrome and defeat the Shredder.",
  image: _assets_img_dendy_imgdendy4_jpeg__WEBPACK_IMPORTED_MODULE_39__,
  audio: _assets_audio_dendy_dendy4_mp3__WEBPACK_IMPORTED_MODULE_3__
}, {
  id: 5,
  name: "Bomberman",
  genre: "Arcade",
  description: "Bomberman is a bomb-making robot in an underground facility run by some «evil forces». One day, he heard a rumor that a robot that got to the surface could become a man. Forced labor did not please Bomberman and he decides to run away. He is declared a traitor, sending many enemies in pursuit.",
  image: _assets_img_dendy_imgdendy5_png__WEBPACK_IMPORTED_MODULE_40__,
  audio: _assets_audio_dendy_dendy5_mp3__WEBPACK_IMPORTED_MODULE_4__
}, {
  id: 6,
  name: "Battle City",
  genre: "Arcade",
  description: "The action polygon is visible from above. The player must, by controlling his tank, destroy all enemy tanks on the level, which gradually appear at the top of the playing field. The enemies are trying to destroy the player's headquarters (at the bottom of the playing field in the form of an eagle) and his tank. At each level, you need to destroy twenty enemy armored vehicles of different types. If the enemy (or the player) manages to destroy the headquarters or deprive the player of all lives, the game is over.",
  image: _assets_img_dendy_imgdendy6_png__WEBPACK_IMPORTED_MODULE_41__,
  audio: _assets_audio_dendy_dendy6_mp3__WEBPACK_IMPORTED_MODULE_5__
}], [{
  id: 1,
  name: "Sonic the Hedgehog",
  genre: "Platformer",
  description: "According to the plot, the protagonist of the game - a hedgehog named Sonic - first meets the villain Dr. Robotnik, who seeks to seize power over the whole world. The scientist uses different beasts to create his robots, called Badniks, and tries to get his hands on six mystical gems, the Chaos Emeralds, to further increase his power. Sonic seeks to free his friends, destroy Robotnik's machines, get the stones first, and disrupt the villain's plans.",
  image: _assets_img_sega_imgsega1_jpeg__WEBPACK_IMPORTED_MODULE_42__,
  audio: _assets_audio_sega_sega1_mp3__WEBPACK_IMPORTED_MODULE_6__
}, {
  id: 2,
  name: "Mortal Kombat",
  genre: "Fighting",
  description: "The game is centered around a brutal tournament called «Mortal Kombat» hosted by the evil sorcerer Shang Zong. All characters participate in the tournament for various reasons. The main storyline has been expanded through comics and sequels. Key aspects of the Mortal Kombat series have been introduced to the game, including a unique control system and b",
  image: _assets_img_sega_imgsega2_jpeg__WEBPACK_IMPORTED_MODULE_43__,
  audio: _assets_audio_sega_sega2_mp3__WEBPACK_IMPORTED_MODULE_7__
}, {
  id: 3,
  name: "Mr. Nutz",
  genre: "Platformer",
  description: "Who better than a brave squirrel called Mr. Hazel is able to save the planet from the impending ice age! Together with him you have to go on a dangerous adventure to eradicate the robbing yetis and other annoying creatures serving the evil Mr. Buran, who decided that his possessions should extend much further than the top of the globe in all directions.",
  image: _assets_img_sega_imgsega3_jpeg__WEBPACK_IMPORTED_MODULE_44__,
  audio: _assets_audio_sega_sega3_mp3__WEBPACK_IMPORTED_MODULE_8__
}, {
  id: 4,
  name: "Rock n' Roll Racing",
  genre: "Vehicular combat",
  description: "Here is a killer racing game with action elements! You are guaranteed complete chaos on the road, because there are no rules in these races, but there are various armed cars, as well as reckless racers ready to do anything for the sake of victory. You are just one of these racers, traveling the planets, participating in races to win the title of the best of the best. The game is filled with drive, the gameplay constantly keeps you on your toes. Music tracks performed by such legendary bands as Led Zepplin, Deep Purple, Black Sabbat just fit perfectly into the atmosphere of racing. Rock N' Roll Racing is undoubtedly one of the best, and perhaps even the best game in this genre.",
  image: _assets_img_sega_imgsega4_jpeg__WEBPACK_IMPORTED_MODULE_45__,
  audio: _assets_audio_sega_sega4_mp3__WEBPACK_IMPORTED_MODULE_9__
}, {
  id: 5,
  name: "Jurassic Park",
  genre: "Action",
  description: "Grant drove the electric car past the dinosaur enclosures. A sudden lightning shuts down all systems and the dinosaurs break free. Grant's car is attacked by a Tyrannosaurus rex, causing the doctor to end up in the jungle. From the jungle, he needs to get to the Visitor Center in order to escape the island.",
  image: _assets_img_sega_imgsega5_jpeg__WEBPACK_IMPORTED_MODULE_46__,
  audio: _assets_audio_sega_sega5_mp3__WEBPACK_IMPORTED_MODULE_10__
}, {
  id: 6,
  name: "Golden Axe II",
  genre: "Brawler",
  description: "The main character must go through the fairy-tale world and return the magic ax by defeating the villain Dark Gould",
  image: _assets_img_sega_imgsega6_png__WEBPACK_IMPORTED_MODULE_47__,
  audio: _assets_audio_sega_sega6_mp3__WEBPACK_IMPORTED_MODULE_11__
}], [{
  id: 1,
  name: "Spyro - Year of the Dragon",
  genre: "Platformer",
  description: "The game begins with a celebration in the land of dragons as Spyro and his kin celebrate the «Year of the Dragon», an event that takes place every twelve years when new dragon eggs arrive in the realm. However, when all the dragons were asleep after the celebration, the Dragon Realm is invaded by an army of creatures led by the enchantress rabbit Bianca, who steals all the eggs. However, during the transfer of the last eggs, the theft was discovered, and Spyro gave chase, as only he and Hunter climbed into the hole through which the eggs were carried.",
  image: _assets_img_ps1_imgpsOne1_jpeg__WEBPACK_IMPORTED_MODULE_48__,
  audio: _assets_audio_ps1_psOne1_mp3__WEBPACK_IMPORTED_MODULE_12__
}, {
  id: 2,
  name: "Crash Bandicoot",
  genre: "Platformer",
  description: "Somewhere in Australia, the scientist Dr. Neo Cortex is conducting experiments on a captured animal, Crash, in his laboratory. He does this in order to fulfill his dream - to create an army and enslave the whole world. He aims a cannon called Evolvo Ray at the unfortunate bandicoot, capable, according to legend, of giving animals human abilities, but due to some coincidence, the cannon does not have time to complete its process and the protagonist escapes. Apparently, instead of Crash leading Dr. Cortex's army and spending hours pondering the tactics of making his dream a reality, the poor fellow is on the contrary deprived of his last brains and speechless. However, the doctor turns out to be not so stupid as not to consider Plan B. He kidnapped Crash's girlfriend, Tawna. As a result, Crash jumps out the window and finds himself on the shore of N.Sanity Island, and then the game begins. In rescuing his beloved throughout the game, Crash will be helped by a certain spirit imprisoned in the form of a mask - Aku Aku. The game is full of all sorts of humor: even the death of the protagonist looks funny.",
  image: _assets_img_ps1_imgpsOne2_png__WEBPACK_IMPORTED_MODULE_49__,
  audio: _assets_audio_ps1_psOne2_mp3__WEBPACK_IMPORTED_MODULE_13__
}, {
  id: 3,
  name: "TEKKEN 3",
  genre: "Fighting",
  description: "Fifteen years after the King of Iron Fist Tournament 2, Heihachi Mishima creates the military organization Tekken Force to protect the Mishima Zaibatsu. The squad is looking for an ancient temple located in Mexico. Shortly after arriving there, Heihachi learns that the party was destroyed by the Ogre. However, Heihachi, having witnessed the events, seeks to capture Ogre in hopes of channeling his power for his own benefit. Soon, various martial artists from all over the world are found dead. Ogre is suspected of all this.",
  image: _assets_img_ps1_imgpsOne3_jpeg__WEBPACK_IMPORTED_MODULE_50__,
  audio: _assets_audio_ps1_psOne3_mp3__WEBPACK_IMPORTED_MODULE_14__
}, {
  id: 4,
  name: "Silent Hill",
  genre: "Survival horror",
  description: "The game takes place in the fictional American city of the same name. The plot revolves around the writer Harry Mason, who is looking for his missing adopted daughter Cheryl in Silent Hill. In the city, he discovers a religious cult attempting to perform a ritual to revive the deity that the cult worships. The game has five different endings, including one comic.",
  image: _assets_img_ps1_imgpsOne4_jpeg__WEBPACK_IMPORTED_MODULE_51__,
  audio: _assets_audio_ps1_psOne4_mp3__WEBPACK_IMPORTED_MODULE_15__
}, {
  id: 5,
  name: "Gran Turismo",
  genre: "Racing",
  description: "The game has two modes: arcade and realistic. In arcade mode, the player can select cars from manufacturers such as Nissan, Honda, Acura and Aston Martin, among others. Each car has its own tuning map. All tracks in the original version of the game are fictional. Real-life circuits such as Laguna Seca, Le Mans Sarthe and New York City appeared in subsequent versions of the game. In realistic mode, the player gets the opportunity to make a career, starting with ten thousand credits, which can be used to buy a used car. Further, the player must obtain one of three licenses: B-class, A-class or international A-class.",
  image: _assets_img_ps1_imgpsOne5_jpeg__WEBPACK_IMPORTED_MODULE_52__,
  audio: _assets_audio_ps1_psOne5_mp3__WEBPACK_IMPORTED_MODULE_16__
}, {
  id: 6,
  name: "Syphon Filter",
  genre: "Third-person shooter",
  description: "Special Agent Gabriel Logan and his partner Lian Sing are investigating a series of biological terrorist attacks, for which international terrorist Erich Romer is responsible. The agency loses contact with Agent Ellis in Costa Rica and sends Gabe and Lian to find him. They find Ellis dead, and discover that Romer's drug trafficking operations are just a front for a new virus. Another explosion in Nepal raises even more questions when biochemical defense teams find an infected person who should have died but survived.",
  image: _assets_img_ps1_imgpsOne6_jpeg__WEBPACK_IMPORTED_MODULE_53__,
  audio: _assets_audio_ps1_psOne6_mp3__WEBPACK_IMPORTED_MODULE_17__
}], [{
  id: 1,
  name: "Super Street Fighter II",
  genre: "Fighting",
  description: "Street Fighter II, as follows from her name, was the second game in the series of the same name. Compared to his predecessor, Street Fighter, released in 1987, Street Fighter II had significant changes made in the game mechanics, such as improving six -killer control, special techniques and the ability to choose a character from several fighters, each of whom had their own battle style and unique techniques.",
  image: _assets_img_ps2_imgpsTwo1_png__WEBPACK_IMPORTED_MODULE_54__,
  audio: _assets_audio_ps2_psTwo1_mp3__WEBPACK_IMPORTED_MODULE_18__
}, {
  id: 2,
  name: "Need for Speed - Underground 2",
  genre: "Racing",
  description: "The actions of the game take place in the fictional city of Bayve. It has similarities with real cities such as Los Angeles and Las Vegas. As in Olympic City (the city of Need for Speed: Underground), there is no police in Bavewu, and actions always take place at night. Cars are driving through the streets of the city, and there is also a dynamic change in weather conditions - with rain, which can begin and stop at any time, the management of cars is complicated. For orientation in the city there is a map and a GPS system.",
  image: _assets_img_ps2_imgpsTwo2_jpeg__WEBPACK_IMPORTED_MODULE_55__,
  audio: _assets_audio_ps2_psTwo2_mp3__WEBPACK_IMPORTED_MODULE_19__
}, {
  id: 3,
  name: "God of War",
  genre: "Action",
  description: "The setting is based on Greek mythology, the action of the game unfolds on the territory of ancient Greece. The main protagonist Kratos is the Spartan warrior who serves as Olympic gods. According to the instructions of the goddess Athena Kratos should destroy the current god of war Ares in order to receive the forgiveness of the Olympic gods. Kratos agrees, because Ares is involved in the murder of the main character’s family, and goes on a dangerous journey to get the legendary Pandora box, which gives great power.",
  image: _assets_img_ps2_imgpsTwo3_jpeg__WEBPACK_IMPORTED_MODULE_56__,
  audio: _assets_audio_ps2_psTwo3_mp3__WEBPACK_IMPORTED_MODULE_20__
}, {
  id: 4,
  name: "Shadow of the Colossus",
  genre: "Action",
  description: "The plot component is ascetic - in Shadow of the Colossus there are only two long videos (introductory and final) that revealing history. The motivation and origin of some heroes remain unobvious until the end of the game. The presence of abandoned structures indicates that forbidden lands were once inhabited by people-in the center of the game map is a temple called the sanctuary of worship, to which a long bridge from the outside world leads. In the game there is an opportunity to walk along the bridge, but it is impossible to go beyond the limits of forbidden lands. The rest of the game world is fenced with rocks and water.",
  image: _assets_img_ps2_imgpsTwo4_jpeg__WEBPACK_IMPORTED_MODULE_57__,
  audio: _assets_audio_ps2_psTwo4_mp3__WEBPACK_IMPORTED_MODULE_21__
}, {
  id: 5,
  name: "Psychonauts",
  genre: "Adventures",
  description: "At Psychonauts, the player controls at once (abbreviated from the parcel), a mysterious newcomer in a training camp for psychonauts-elite special agents who use their psi-capacity for the war with psi-terrorists and reading people's thoughts. During training, he discovers that the counselor Oleander abducts the cadets in order to capture their brains. Once it should prevent him from creating a psi weapon with their help.",
  image: _assets_img_ps2_imgpsTwo5_jpeg__WEBPACK_IMPORTED_MODULE_58__,
  audio: _assets_audio_ps2_psTwo5_mp3__WEBPACK_IMPORTED_MODULE_22__
}, {
  id: 6,
  name: "Resident Evil 4",
  genre: "Survival horror",
  description: "Autumn 2004. Leon Scott Kennedy, a former Raccoon City police officer turned U.S. government agent, sets out to find Ashley Graham, the President's daughter, who has been kidnapped from college by a mysterious cult. He travels to a remote Spanish village where the kidnappers have fled.",
  image: _assets_img_ps2_imgpsTwo6_jpeg__WEBPACK_IMPORTED_MODULE_59__,
  audio: _assets_audio_ps2_psTwo6_mp3__WEBPACK_IMPORTED_MODULE_23__
}], [{
  id: 1,
  name: "Terraria",
  genre: "Sandbox",
  description: "A game developed using a set of Microsoft XNA tools gives the player a procedurally generated and changed two -dimensional world. In addition to the extraction of resources and the construction of structures, the Terraria game process also pays attention to the study of the world, the search for treasures and battles with opponents.",
  image: _assets_img_pc_imgpc1_jpeg__WEBPACK_IMPORTED_MODULE_60__,
  audio: _assets_audio_pc_pc1_mp3__WEBPACK_IMPORTED_MODULE_24__
}, {
  id: 2,
  name: "Fortnite",
  genre: "Battle royale",
  description: "Fortnite is a cooperative sandbox for survival, the main mechanics of which are the study, collection of resources, the construction of fortified buildings and the fight against the waves of the advancing zombies. Players cooperate to collect objects that they can use for the construction of the fort during the day, and defend themselves from zombies at night. Construction is the main mechanics, while in the game Um Luta. Players can build and edit each wall of their fort with a 3x3 grid, build stairs, roof and windows, sculpting them in accordance with a particular need.",
  image: _assets_img_pc_imgpc2_jpeg__WEBPACK_IMPORTED_MODULE_61__,
  audio: _assets_audio_pc_pc2_mp3__WEBPACK_IMPORTED_MODULE_25__
}, {
  id: 3,
  name: "Hades",
  genre: "Roguelike",
  description: "The plot of the game is based on ancient Greek mythology: the protagonist of the Roads, the son of Aida, is trying to escape from the underground kingdom of the dead and get to Mount Olympus; On this path, the Olympic gods help him sending these or another gifts. In each passage, the player should overcome a series of randomly gathered rooms with enemies and awards; In the event of the death of the Boars, he returns to the very beginning of the path, although the player can spend the treasures collected during the passage and on improving the characteristics or unlocking of new types of weapons. The numerous passions of Hades are connected together by a variety of scenes and dialogues that reveal the background of the game and the relationship of its characters.",
  image: _assets_img_pc_imgpc3_jpeg__WEBPACK_IMPORTED_MODULE_62__,
  audio: _assets_audio_pc_pc3_mp3__WEBPACK_IMPORTED_MODULE_26__
}, {
  id: 4,
  name: "It Takes Two",
  genre: "Action-adventure",
  description: "IT Takes Two was specially designed to play in cooperative mode on the separated screen, and therefore the game requires a second player who can also connect over the network. Players manage the parents of a little girl on the verge of a divorce. A magic book about love turns heroes into small dolls, and now, in order to regain their former appearance, they need to step over their grievances and disagreements and act together, helping each other in this complex, but bright and emotional adventure. The game presents many game mechanics from games of different genres.",
  image: _assets_img_pc_imgpc4_jpeg__WEBPACK_IMPORTED_MODULE_63__,
  audio: _assets_audio_pc_pc4_mp3__WEBPACK_IMPORTED_MODULE_27__
}, {
  id: 5,
  name: "Cuphead",
  genre: "Platformer",
  description: "The character of the player, cups, lost in a dispute with the devil and tries to repay the debt. The game has the form of a branching sequence of levels. The chachak has an endless number of attempts, and he does not lose his weapon after death. The protagonist of the game has the ability to parry various objects encoded with pink. Successful parries fill out a special counter that allows it to perform a special ability. Levels are available through the outside world in the style of Action RPG, which has its own secret paths.",
  image: _assets_img_pc_imgpc5_jpeg__WEBPACK_IMPORTED_MODULE_64__,
  audio: _assets_audio_pc_pc5_mp3__WEBPACK_IMPORTED_MODULE_28__
}, {
  id: 6,
  name: "Hollow Knight",
  genre: "Platformer",
  description: "The main part of the Hollow Knight game process is tied to the study of the world of the game, which includes overcoming platforms, the search for secrets and battles with enemies encountered along the road. The player will have to explore the huge whole world using special improvements for movement and tricks from the combat system, for example, reflecting some threats with blows. As in any metroid, in many zones there are obstacles that can be overcome only by defeating certain bosses and receiving improvements received from them. Thus, players will have to attend already investigated zones for the search for secrets or promotion in the plot. Some zones change during the plot, and therefore their repeated visit sometimes brings surprises. Each zone is connected to the other with several transitions, and therefore you can go through the game in different ways. Each zone has its own card, but initially it is inaccessible. To obtain a map of a particular zone, you need to find a cartographer in this zone and buy a card from him for the local currency (or take it later in the cards store, but for a large price), and then fill it with the method of visiting locations on your own. ",
  image: _assets_img_pc_imgpc6_jpeg__WEBPACK_IMPORTED_MODULE_65__,
  audio: _assets_audio_pc_pc6_mp3__WEBPACK_IMPORTED_MODULE_29__
}], [{
  id: 1,
  name: "Candy Crush Saga",
  genre: "Puzzle",
  description: "Players should combine three game sweets in the same color in a row so that they disappear. If you combine more, the player receives special sweets that give additional opportunities. It is necessary to collect as many points as possible for a limited amount of time or moves. There are also bombs in the game: with them it is necessary to make any combination before the passage of the number of moves on the bomb itself. If the conditions are not met by the player, then he loses.",
  image: _assets_img_mobile_imgmobile1_png__WEBPACK_IMPORTED_MODULE_66__,
  audio: _assets_audio_mobile_mobile1_mp3__WEBPACK_IMPORTED_MODULE_30__
}, {
  id: 2,
  name: "Monument valley",
  genre: "Indie game",
  description: "The player's task is to control a character named «Princess Ida», who must find a way out of the labyrinth. In total, Monument Valley has 10 labyrinths with several levels. The game is a turn-based puzzle game, meaning the player cannot die in the game or make a mistake. Its main task is to gradually search or build routes to get out of the maze. In the universe of the game, there are optical illusions and impossible figures. Ida is able to climb ladders and cross rounded objects. However, in order to cross various kinds of barriers, it is necessary to activate the mechanisms that change the routes of the labyrinth, or to change the camera angle in order to find a new route of passage using an optical illusion.",
  image: _assets_img_mobile_imgmobile2_jpeg__WEBPACK_IMPORTED_MODULE_67__,
  audio: _assets_audio_mobile_mobile2_mp3__WEBPACK_IMPORTED_MODULE_31__
}, {
  id: 3,
  name: "Angry Birds",
  genre: "Arcade",
  description: "The player should run birds in pigs with a slingshot. The level will be passed if the player destroys all pigs, otherwise he will have to be reduced again. Most often, pigs use buildings from blocks as a shelter.",
  image: _assets_img_mobile_imgmobile3_jpeg__WEBPACK_IMPORTED_MODULE_68__,
  audio: _assets_audio_mobile_mobile3_mp3__WEBPACK_IMPORTED_MODULE_32__
}, {
  id: 4,
  name: "Subway Surfers",
  genre: "Endless Run",
  description: "At the beginning of each game, the player shows a KAT scene in which the player’s character draws graffiti on one of the metro wagons. The hooligan notes the inspector with the dog, after which the chase begins along the railway tracks. The main goal of the game is that the player, accelerating, run as far as possible, dodging oncoming trains and other obstacles. With an increase in the acceleration of the player - it becomes more difficult to pass obstacles. If the player encounters something, then the inspector catch up with him (and regardless of how far he managed to escape) and the game ends. But this can be avoided if a surfing board was used during the collision, otherwise it is possible to spend the keys and continue the chase. ",
  image: _assets_img_mobile_imgmobile4_jpeg__WEBPACK_IMPORTED_MODULE_69__,
  audio: _assets_audio_mobile_mobile4_mp3__WEBPACK_IMPORTED_MODULE_33__
}, {
  id: 5,
  name: "Crashlands",
  genre: "Action adventure",
  description: "The game's plot begins with the Flux spaceship crashing on the planet Woanope. It's all the fault of the villain Hewgodooko, who just took and took an important piece of the ship. Flux is a space messenger, so the main task is to quickly establish communication with the home planet and call a tow truck. Actually, his work must be done on time, one way or another. That's just to complete the mission, you need a source of energy, which, due to a sad set of circumstances, is also looking for Hewgodooko, sweeping away everything in its path. Accordingly, it is not possible to complete the task alone. As we play, the JuiceBox robot assistant will help us.",
  image: _assets_img_mobile_imgmobile5_png__WEBPACK_IMPORTED_MODULE_70__,
  audio: _assets_audio_mobile_mobile5_mp3__WEBPACK_IMPORTED_MODULE_34__
}, {
  id: 6,
  name: "Geometry Dash",
  genre: "Platformer",
  description: "There is a hidden plot in the game. The game contains 21 built -in level, 18 of which are open for passage at once, three more open after gathering at other levels of a certain number of coins. Also in the game there is a secret level that becomes available after collecting two hundred diamonds. Levels are obstacle strips by which the player’s character moves, taking one of several forms, each of which moves in its own way, and lasts an average of one and a half to two minutes. The obstacle course is synchronized with the level of the level, which are electronic musical tracks.",
  image: _assets_img_mobile_imgmobile6_jpeg__WEBPACK_IMPORTED_MODULE_71__,
  audio: _assets_audio_mobile_mobile6_mp3__WEBPACK_IMPORTED_MODULE_35__
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gamesDataEnglish);

/***/ }),

/***/ "./src/data/interface.js":
/*!*******************************!*\
  !*** ./src/data/interface.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interfaceEngData": () => (/* binding */ interfaceEngData),
/* harmony export */   "interfaceRuData": () => (/* binding */ interfaceRuData)
/* harmony export */ });
var interfaceRuData = {
  buttonLanguage: "Язык",
  headerLink1: "Главная",
  headerLink2: "Викторина",
  headerLink3: "Галерея",
  homeTitle: "Добро пожаловать на музыкальную викторину",
  homeSubtitle: "Испытай себя, нажми на кнопку",
  homeLink: "Начать викторину",
  gameDetailsHint: "Прослушай мелодию и дай правильный ответ",
  buttonNextLevel: "Следующий уровень",
  resultsTitle: "Поздравляем",
  resultsSubtitle1: "Вы набрали",
  resultsSubtitle2: "из 30 возможных баллов",
  resultsButton: "Попробовать еще раз",
  resultsWin1: "Вы выиграли викторину. Вы набрали",
  resultsWin2: "из 30 возможных баллов",
  year: "2022",
  score: "Общий счет: ",
  categories: ["NES", "SEGA", "PS 1", "PS 2", "PC", "ANDROID"]
};
var interfaceEngData = {
  buttonLanguage: "Language",
  headerLink1: "Home",
  headerLink2: "Quiz",
  headerLink3: "Gallery",
  homeTitle: "Welcome to the music quiz",
  homeSubtitle: "Challenge yourself, press the button",
  homeLink: "Start Quiz",
  gameDetailsHint: "Listen to the melody and give the correct answer",
  buttonNextLevel: "Next level",
  resultsTitle: "Congratulations",
  resultsSubtitle1: "You scored",
  resultsSubtitle2: "out of 30 possible points",
  resultsButton: "Try again",
  resultsWin1: "You won the quiz. You scored",
  resultsWin2: "of 30 possible points",
  year: "2022",
  score: "Total score: ",
  categories: ["NES", "SEGA", "PS 1", "PS 2", "PC", "ANDROID"]
};


/***/ }),

/***/ "./src/helpers/changeScore.js":
/*!************************************!*\
  !*** ./src/helpers/changeScore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeScore": () => (/* binding */ changeScore)
/* harmony export */ });
function changeScore(divElement, answers, score) {
  var amountFalse = 0;
  answers.forEach(function (val) {
    if (val.classList.contains("answer--false")) {
      amountFalse++;
    }
  });
  score += 5 - amountFalse;
  return score;
}


/***/ }),

/***/ "./src/helpers/checkAnswer.js":
/*!************************************!*\
  !*** ./src/helpers/checkAnswer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _changeScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeScore */ "./src/helpers/changeScore.js");
/* harmony import */ var _showRandomGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showRandomGame */ "./src/helpers/showRandomGame.js");
/* harmony import */ var _listeners_clickNextLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/clickNextLevel */ "./src/listeners/clickNextLevel.js");
/* harmony import */ var _renderScore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderScore */ "./src/helpers/renderScore.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function checkAnswer(divElement, levelNumber, secretAnswer, i, score, e, secretAudio, data, audioWin, audioLose) {
  var answers = divElement.querySelectorAll("[data-id]");
  var answer = _toConsumableArray(answers).filter(function (answer) {
    return Number(answer.getAttribute("data-id")) === i;
  })[0];
  var alreadyWon = false;
  answers.forEach(function (val) {
    if (val.classList.contains("answer--true")) {
      alreadyWon = true;
    }
  });
  if (!alreadyWon) {
    if (i === secretAnswer) {
      var randomGame = divElement.querySelector(".random-game");
      var playButton = randomGame.querySelector(".player__play");
      var buttonNextLevel = divElement.querySelector(".quiz__next-level");
      if (playButton.classList.contains("player__play--pause")) {
        playButton.click();
      }
      score = (0,_changeScore__WEBPACK_IMPORTED_MODULE_0__.changeScore)(divElement, answers, score);
      (0,_renderScore__WEBPACK_IMPORTED_MODULE_3__.renderScore)(divElement, score);
      (0,_showRandomGame__WEBPACK_IMPORTED_MODULE_1__["default"])(divElement, levelNumber, secretAnswer);
      if (!e.target.classList.contains("answer--true") && !e.target.parentNode.classList.contains("answer--true")) {
        audioWin.play();
        if (levelNumber < 5) {
          (0,_listeners_clickNextLevel__WEBPACK_IMPORTED_MODULE_2__.clickNextLevel)(buttonNextLevel, divElement, levelNumber, score, secretAudio, data);
        } else {
          buttonNextLevel.innerText = "Результаты";
          buttonNextLevel.href = "#/results";
          if (localStorage.getItem("metalknock-music-quiz")) {
            var storage = JSON.parse(localStorage.getItem("metalknock-music-quiz"));
            storage.score = score;
            localStorage.setItem("metalknock-music-quiz", JSON.stringify(storage));
          } else {
            var _storage = {
              score: score
            };
            localStorage.setItem("metalknock-music-quiz", JSON.stringify(_storage));
          }
        }
      }
      answer.classList.add("answer--true");
      buttonNextLevel.classList.remove("button--disable");
    } else {
      if (!e.target.classList.contains("answer--false") && !e.target.parentNode.classList.contains("answer--false")) {
        if (audioLose.paused) {
          audioLose.play();
        } else {
          audioLose.pause();
          audioLose.currentTime = 0;
          audioLose.play();
        }
        answer.classList.add("answer--false");
      }
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkAnswer);

/***/ }),

/***/ "./src/helpers/createHtmlTag.js":
/*!**************************************!*\
  !*** ./src/helpers/createHtmlTag.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHtmlTag": () => (/* binding */ createHtmlTag)
/* harmony export */ });
function createHtmlTag(tag, classList, parent) {
  var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var element = document.createElement(tag);
  element.classList = classList;
  element.innerText = text;
  for (var _len = arguments.length, attributes = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    attributes[_key - 4] = arguments[_key];
  }
  attributes.forEach(function (attribute, i) {
    element.setAttribute(attribute[0], attribute[1]);
  });
  parent.appendChild(element);
  return element;
}


/***/ }),

/***/ "./src/helpers/getData.js":
/*!********************************!*\
  !*** ./src/helpers/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getDataInterface": () => (/* binding */ getDataInterface)
/* harmony export */ });
/* harmony import */ var _data_games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/games */ "./src/data/games.js");
/* harmony import */ var _data_gamesEnglish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/gamesEnglish */ "./src/data/gamesEnglish.js");
/* harmony import */ var _data_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/interface */ "./src/data/interface.js");
/* harmony import */ var _getLanguage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLanguage */ "./src/helpers/getLanguage.js");




function getData() {
  return (0,_getLanguage__WEBPACK_IMPORTED_MODULE_3__.getLanguage)() === "ru" ? _data_games__WEBPACK_IMPORTED_MODULE_0__["default"] : _data_gamesEnglish__WEBPACK_IMPORTED_MODULE_1__["default"];
}
function getDataInterface() {
  return (0,_getLanguage__WEBPACK_IMPORTED_MODULE_3__.getLanguage)() === "ru" ? _data_interface__WEBPACK_IMPORTED_MODULE_2__.interfaceRuData : _data_interface__WEBPACK_IMPORTED_MODULE_2__.interfaceEngData;
}


/***/ }),

/***/ "./src/helpers/getFullTimeFromSeconds.js":
/*!***********************************************!*\
  !*** ./src/helpers/getFullTimeFromSeconds.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFullTimeFromSeconds)
/* harmony export */ });
function getFullTimeFromSeconds(num) {
  var seconds = Math.floor(num);
  var minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  var hours = Math.floor(minutes / 60);
  minutes -= hours * 60;
  return "".concat(minutes === 0 ? "00" : Math.floor(minutes / 10) === 0 ? "0".concat(minutes) : "".concat(minutes), ":").concat(seconds === 0 ? "00" : Math.floor(seconds / 10) === 0 ? "0".concat(seconds) : "".concat(seconds));
}

/***/ }),

/***/ "./src/helpers/getLanguage.js":
/*!************************************!*\
  !*** ./src/helpers/getLanguage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLanguage": () => (/* binding */ getLanguage)
/* harmony export */ });
function getLanguage() {
  return JSON.parse(localStorage.getItem("metalknock-music-quiz")).language;
}


/***/ }),

/***/ "./src/helpers/getRandomNumber.js":
/*!****************************************!*\
  !*** ./src/helpers/getRandomNumber.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getRandomNumber(min, max) {
  return Number(Math.floor(Math.random() * (max - min)) + min);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomNumber);

/***/ }),

/***/ "./src/helpers/initLevel.js":
/*!**********************************!*\
  !*** ./src/helpers/initLevel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initLevel)
/* harmony export */ });
/* harmony import */ var _listeners_clickAnswersList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listeners/clickAnswersList */ "./src/listeners/clickAnswersList.js");
/* harmony import */ var _getRandomNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRandomNumber */ "./src/helpers/getRandomNumber.js");
/* harmony import */ var _initPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initPlayer */ "./src/helpers/initPlayer.js");
/* harmony import */ var _renderAnswers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderAnswers */ "./src/helpers/renderAnswers.js");
/* harmony import */ var _setCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setCategory */ "./src/helpers/setCategory.js");
/* harmony import */ var _data_games__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/games */ "./src/data/games.js");
/* harmony import */ var _renderScore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderScore */ "./src/helpers/renderScore.js");
/* harmony import */ var _components_quiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/quiz */ "./src/components/quiz.js");








function initLevel(divElement, levelNumber, score, secretAudio) {
  divElement.innerHTML = "";
  (0,_components_quiz__WEBPACK_IMPORTED_MODULE_7__.createQuiz)(divElement);
  var imageRandomGame = divElement.querySelector(".random-game__image");
  var randomGamePlayer = divElement.querySelector(".random-game__player");
  var headerMenu = divElement.querySelector(".header__menu");
  var answers = divElement.querySelector(".answers__list");
  var secretAnswer = (0,_getRandomNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(0, 6);
  var secretAudioSrc = _data_games__WEBPACK_IMPORTED_MODULE_5__["default"][levelNumber][secretAnswer].audio;
  secretAudio.setAttribute("src", secretAudioSrc);
  (0,_renderScore__WEBPACK_IMPORTED_MODULE_6__.renderScore)(divElement, score);
  (0,_setCategory__WEBPACK_IMPORTED_MODULE_4__["default"])(headerMenu, levelNumber);
  (0,_initPlayer__WEBPACK_IMPORTED_MODULE_2__.initPlayer)(randomGamePlayer, secretAudio);
  (0,_renderAnswers__WEBPACK_IMPORTED_MODULE_3__.renderAnswers)(divElement, levelNumber);
  (0,_listeners_clickAnswersList__WEBPACK_IMPORTED_MODULE_0__.clickAnswersList)(answers, divElement, levelNumber, secretAnswer, score, secretAudio);
}

/***/ }),

/***/ "./src/helpers/initPlayer.js":
/*!***********************************!*\
  !*** ./src/helpers/initPlayer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPlayer": () => (/* binding */ initPlayer)
/* harmony export */ });
/* harmony import */ var _listeners_clickPlayerPlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listeners/clickPlayerPlay */ "./src/listeners/clickPlayerPlay.js");
/* harmony import */ var _listeners_clickPlayerVolumeSlider___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listeners/clickPlayerVolumeSlider. */ "./src/listeners/clickPlayerVolumeSlider..js");
/* harmony import */ var _listeners_clickTimeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/clickTimeline */ "./src/listeners/clickTimeline.js");
/* harmony import */ var _listeners_clickVolumeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listeners/clickVolumeButton */ "./src/listeners/clickVolumeButton.js");
/* harmony import */ var _setTrueTimeLength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setTrueTimeLength */ "./src/helpers/setTrueTimeLength.js");
/* harmony import */ var _updatePlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updatePlayer */ "./src/helpers/updatePlayer.js");






function initPlayer(player, audio) {
  (0,_listeners_clickPlayerPlay__WEBPACK_IMPORTED_MODULE_0__.clickPlayerPlay)(player, audio);
  (0,_listeners_clickPlayerVolumeSlider___WEBPACK_IMPORTED_MODULE_1__.clickPlayerVolumeSlider)(player, audio);
  (0,_listeners_clickVolumeButton__WEBPACK_IMPORTED_MODULE_3__.clickVolumeButton)(player, audio);
  (0,_setTrueTimeLength__WEBPACK_IMPORTED_MODULE_4__.setTrueTimeLength)(player, audio);
  (0,_updatePlayer__WEBPACK_IMPORTED_MODULE_5__.updatePlayer)(player, audio);
  (0,_listeners_clickTimeline__WEBPACK_IMPORTED_MODULE_2__.clickTimeline)(player, audio);
}


/***/ }),

/***/ "./src/helpers/renderAnswers.js":
/*!**************************************!*\
  !*** ./src/helpers/renderAnswers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAnswers": () => (/* binding */ renderAnswers)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/helpers/getData.js");

function renderAnswers(divElement, levelNumber) {
  var data = (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)();
  var answerTextAll = divElement.querySelectorAll(".answer__text");
  answerTextAll.forEach(function (answerText, i) {
    answerText.innerText = data[levelNumber][i].name;
  });
}


/***/ }),

/***/ "./src/helpers/renderDetails.js":
/*!**************************************!*\
  !*** ./src/helpers/renderDetails.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDetails": () => (/* binding */ renderDetails)
/* harmony export */ });
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/player */ "./src/components/player.js");
/* harmony import */ var _helpers_initPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/initPlayer */ "./src/helpers/initPlayer.js");
/* harmony import */ var _createHtmlTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHtmlTag */ "./src/helpers/createHtmlTag.js");



function renderDetails(detailsGame, levelNumber, audio, i, data) {
  detailsGame.innerHTML = "";
  var card = (0,_createHtmlTag__WEBPACK_IMPORTED_MODULE_2__.createHtmlTag)("div", "game-details__card card", detailsGame);
  var image = (0,_createHtmlTag__WEBPACK_IMPORTED_MODULE_2__.createHtmlTag)("img", "card__image", card, "", ["src", data[levelNumber][i].image], ["alt", "image"]);
  var name = (0,_createHtmlTag__WEBPACK_IMPORTED_MODULE_2__.createHtmlTag)("div", "card__name", card, data[levelNumber][i].name);
  var genre = (0,_createHtmlTag__WEBPACK_IMPORTED_MODULE_2__.createHtmlTag)("div", "card__genre", card, data[levelNumber][i].genre);
  var cardPlayer = (0,_createHtmlTag__WEBPACK_IMPORTED_MODULE_2__.createHtmlTag)("div", "card__player player", card, "", ["data-level", levelNumber], ["data-id", i]);
  var description = (0,_createHtmlTag__WEBPACK_IMPORTED_MODULE_2__.createHtmlTag)("div", "card__description", card, data[levelNumber][i].description);
  detailsGame.setAttribute("data-id", "".concat(i));
  (0,_components_player__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(cardPlayer);
  audio.setAttribute("src", data[levelNumber][i].audio);
  audio.load();
  (0,_helpers_initPlayer__WEBPACK_IMPORTED_MODULE_1__.initPlayer)(cardPlayer, audio);
}


/***/ }),

/***/ "./src/helpers/renderScore.js":
/*!************************************!*\
  !*** ./src/helpers/renderScore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderScore": () => (/* binding */ renderScore)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/helpers/getData.js");

function renderScore(divElement, score) {
  var dataInterface = (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getDataInterface)();
  var scoreEl = divElement.querySelector(".quiz__score");
  scoreEl.innerText = "".concat(dataInterface.score, " ").concat(score);
}


/***/ }),

/***/ "./src/helpers/setCategory.js":
/*!************************************!*\
  !*** ./src/helpers/setCategory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setCategory)
/* harmony export */ });
function setCategory(headerMenu, levelNumber) {
  var arrCategorys = headerMenu.querySelectorAll(".menu__item");
  arrCategorys.forEach(function (val) {
    val.classList.remove("category--active");
  });
  arrCategorys[levelNumber].classList.add("category--active");
}

/***/ }),

/***/ "./src/helpers/setTrueTimeLength.js":
/*!******************************************!*\
  !*** ./src/helpers/setTrueTimeLength.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTrueTimeLength": () => (/* binding */ setTrueTimeLength)
/* harmony export */ });
/* harmony import */ var _getFullTimeFromSeconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFullTimeFromSeconds */ "./src/helpers/getFullTimeFromSeconds.js");

function setTrueTimeLength(audioPlayer, audio) {
  audio.addEventListener("loadeddata", function () {
    audioPlayer.querySelector(".time__length").textContent = (0,_getFullTimeFromSeconds__WEBPACK_IMPORTED_MODULE_0__["default"])(audio.duration);
  });
}


/***/ }),

/***/ "./src/helpers/showRandomGame.js":
/*!***************************************!*\
  !*** ./src/helpers/showRandomGame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/games */ "./src/data/games.js");

function showRandomGame(divElement, levelNumber, secretAnswer) {
  var randomGame = divElement.querySelector(".random-game");
  var randomImage = divElement.querySelector(".random-game__image");
  var randomName = divElement.querySelector(".random-game__name");
  randomImage.src = _data_games__WEBPACK_IMPORTED_MODULE_0__["default"][levelNumber][secretAnswer].image;
  randomName.innerText = _data_games__WEBPACK_IMPORTED_MODULE_0__["default"][levelNumber][secretAnswer].name;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showRandomGame);

/***/ }),

/***/ "./src/helpers/updatePlayer.js":
/*!*************************************!*\
  !*** ./src/helpers/updatePlayer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updatePlayer": () => (/* binding */ updatePlayer)
/* harmony export */ });
/* harmony import */ var _getFullTimeFromSeconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFullTimeFromSeconds */ "./src/helpers/getFullTimeFromSeconds.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ "./src/helpers/getData.js");


function updatePlayer(player, audio) {
  setInterval(function () {
    if (player.dataset.level && player.dataset.id) {
      var level = player.dataset.level;
      var id = player.dataset.id;
      var data = (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getData)();
      if (audio.src !== data[level][id].audio) {
        return;
      }
    }
    var progress = player.querySelector(".player__progress");
    progress.style.width = "".concat(audio.currentTime / audio.duration * 100, "%");
    var timeCurrent = player.querySelector(".time__current");
    timeCurrent.textContent = (0,_getFullTimeFromSeconds__WEBPACK_IMPORTED_MODULE_0__["default"])(audio.currentTime);
    var playerPlay = player.querySelector(".player__play");
    if (audio.currentTime === audio.duration) {
      audio.currentTime = 0;
      playerPlay.classList.remove("player__play--pause");
      playerPlay.classList.add("player__play--start");
    }
  }, 500);
}


/***/ }),

/***/ "./src/listeners/changeHash.js":
/*!*************************************!*\
  !*** ./src/listeners/changeHash.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeHash": () => (/* binding */ changeHash)
/* harmony export */ });
var changeHashListener = new AbortController();
function changeHash(audio) {
  if (changeHashListener.signal.aborted) {
    changeHashListener = new AbortController();
  }
  window.addEventListener("hashchange", handlerChangeHash(audio));
}
function removeChangeHash() {
  changeHashListener.abort();
}
function handlerChangeHash(audio) {
  return function curredFunc(e) {
    audio.pause();
  };
}


/***/ }),

/***/ "./src/listeners/clickAnswersList.js":
/*!*******************************************!*\
  !*** ./src/listeners/clickAnswersList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickAnswersList": () => (/* binding */ clickAnswersList),
/* harmony export */   "removeClickAnswersList": () => (/* binding */ removeClickAnswersList)
/* harmony export */ });
/* harmony import */ var _helpers_checkAnswer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/checkAnswer */ "./src/helpers/checkAnswer.js");
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");
/* harmony import */ var _helpers_renderDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/renderDetails */ "./src/helpers/renderDetails.js");
/* harmony import */ var _assets_audio_win_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/audio/win.mp3 */ "./src/assets/audio/win.mp3");
/* harmony import */ var _assets_audio_lose_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/audio/lose.mp3 */ "./src/assets/audio/lose.mp3");





var clickAnswersListListener = new AbortController();
function clickAnswersList(answers, divElement, levelNumber, secretAnswer, score, secretAudio) {
  if (clickAnswersListListener.signal.aborted) {
    clickAnswersListListener = new AbortController();
  }
  var audio = new Audio();
  var audioWin = new Audio(_assets_audio_win_mp3__WEBPACK_IMPORTED_MODULE_3__);
  var audioLose = new Audio(_assets_audio_lose_mp3__WEBPACK_IMPORTED_MODULE_4__);
  answers.addEventListener("click", handleAnswersList(divElement, levelNumber, secretAnswer, audio, score, secretAudio, audioWin, audioLose), clickAnswersListListener);
}
function removeClickAnswersList() {
  clickAnswersListListener.abort();
}
function handleAnswersList(divElement, levelNumber, secretAnswer, audio, score, secretAudio, audioWin, audioLose) {
  return function curredFunc(e) {
    var data = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_1__.getData)();
    for (var i = 0; i <= 5; i++) {
      if (Number(e.target.dataset.id) === i || Number(e.target.parentNode.dataset.id) === i) {
        var detailsGame = divElement.querySelector(".game-details");
        if (!(detailsGame.dataset.id === e.target.dataset.id || detailsGame.dataset.id === e.target.parentNode.dataset.id)) {
          (0,_helpers_checkAnswer__WEBPACK_IMPORTED_MODULE_0__["default"])(divElement, levelNumber, secretAnswer, i, score, e, secretAudio, data, audioWin, audioLose);
          (0,_helpers_renderDetails__WEBPACK_IMPORTED_MODULE_2__.renderDetails)(detailsGame, levelNumber, audio, i, data);
        }
      }
    }
  };
}


/***/ }),

/***/ "./src/listeners/clickBurgerMenu.js":
/*!******************************************!*\
  !*** ./src/listeners/clickBurgerMenu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickBurgerMenu": () => (/* binding */ clickBurgerMenu),
/* harmony export */   "removeClickBurgerMenu": () => (/* binding */ removeClickBurgerMenu)
/* harmony export */ });
var clickBurgerMenuListener = new AbortController();
function clickBurgerMenu(burgerMenu) {
  if (clickBurgerMenuListener.signal.aborted) {
    clickBurgerMenuListener = new AbortController();
  }
  burgerMenu.addEventListener("click", handleClickBurgerMenu(burgerMenu), clickBurgerMenuListener);
}
function removeClickBurgerMenu() {
  clickBurgerMenuListener.abort();
}
function handleClickBurgerMenu(burgerMenu) {
  return function curredFunc(e) {
    if (!e.target.classList.contains("burger-menu__nav")) {
      burgerMenu.classList.toggle("burger-menu--active");
    }
  };
}


/***/ }),

/***/ "./src/listeners/clickGallery.js":
/*!***************************************!*\
  !*** ./src/listeners/clickGallery.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickGallery": () => (/* binding */ clickGallery),
/* harmony export */   "removeClickGallery": () => (/* binding */ removeClickGallery)
/* harmony export */ });
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");

var clickGalleryListener = new AbortController();
function clickGallery(gallery, audio) {
  if (clickGalleryListener.signal.aborted) {
    clickGalleryListener = new AbortController();
  }
  gallery.addEventListener("click", handleClickGallery(gallery, audio), clickGalleryListener);
}
function removeClickGallery() {
  clickGalleryListener.abort();
}
function handleClickGallery(gallery, audio) {
  return function curredFunc(e) {
    if (e.target.parentNode.classList.contains("gallery__item") || e.target.classList.contains("gallery__item")) {
      var item;
      if (e.target.parentNode.classList.contains("gallery__item")) {
        item = e.target.parentNode;
      } else {
        item = e.target;
      }
      var data = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_0__.getData)();
      var id = item.dataset.id;
      var level = item.dataset.level;
      var cardImage = gallery.querySelector(".card__image");
      var cardName = gallery.querySelector(".card__name");
      var cardGenre = gallery.querySelector(".card__genre");
      var cardDescription = gallery.querySelector(".card__description");
      var cardPlayer = gallery.querySelector(".card__player");
      var playerPlay = cardPlayer.querySelector(".player__play");
      cardImage.setAttribute("src", data[level][id].image);
      cardName.innerText = data[level][id].name;
      cardGenre.innerText = data[level][id].genre;
      cardDescription.innerText = data[level][id].description;
      audio.src = data[level][id].audio;
      audio.load();
      playerPlay.classList.remove("player__play--pause");
      playerPlay.classList.add("player__play--start");
      scroll({
        top: 0,
        behavior: "smooth"
      });
    }
  };
}


/***/ }),

/***/ "./src/listeners/clickLanguageButton.js":
/*!**********************************************!*\
  !*** ./src/listeners/clickLanguageButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickLanguageButton": () => (/* binding */ clickLanguageButton),
/* harmony export */   "removeClickLanguageButton": () => (/* binding */ removeClickLanguageButton)
/* harmony export */ });
/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/getData */ "./src/helpers/getData.js");

var clickLanguageButtonListener = new AbortController();
function clickLanguageButton(header) {
  if (clickLanguageButtonListener.signal.aborted) {
    clickLanguageButtonListener = new AbortController();
  }
  header.addEventListener("click", handleClickLanguageButton(), clickLanguageButtonListener);
}
function removeClickLanguageButton() {
  clickLanguageButtonListener.abort();
}
function handleClickLanguageButton() {
  return function curredFunc(e) {
    if (e.target.classList.contains("button-language")) {
      var storage = JSON.parse(localStorage.getItem("metalknock-music-quiz"));
      if (storage.language === "ru") {
        storage.language = "en";
      } else {
        storage.language = "ru";
      }
      localStorage.setItem("metalknock-music-quiz", JSON.stringify(storage));
      var dataInterface = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_0__.getDataInterface)();
      var data = (0,_helpers_getData__WEBPACK_IMPORTED_MODULE_0__.getData)();
      var header = document.querySelector(".header");
      var headerButton = header.querySelector(".menu__button");
      var headerBurgerButton = header.querySelector(".burger-menu__button-language");
      var headerLinks = header.querySelectorAll(".menu__link");
      var headerBurgerLinks = header.querySelectorAll(".burger-menu__link");
      headerButton.innerText = dataInterface.buttonLanguage;
      headerBurgerButton.innerText = dataInterface.buttonLanguage;
      headerLinks.forEach(function (headerLink, i) {
        headerLink.innerText = dataInterface["headerLink".concat(i + 1)];
      });
      headerBurgerLinks.forEach(function (headerLink, i) {
        headerLink.innerText = dataInterface["headerLink".concat(i + 1)];
      });
      var hash = window.location.hash;
      if (hash === "#/") {
        var title = document.querySelector(".home__title");
        var subtitle = document.querySelector(".home__subtitle");
        var link = document.querySelector(".home__link");
        title.innerText = dataInterface.homeTitle;
        subtitle.innerText = dataInterface.homeSubtitle;
        link.innerText = dataInterface.homeLink;
      }
      if (hash === "#/quiz") {
        var quiz = document.querySelector(".quiz");
        var gameDetails = quiz.querySelector(".game-details");
        var activeLevel = quiz.querySelector(".category--active");
        var score = quiz.querySelector(".quiz__score");
        var hint = quiz.querySelector(".game-details__hint");
        var buttonNextLevel = quiz.querySelector(".quiz__next-level");
        var genre = gameDetails.querySelector(".card__genre");
        var description = gameDetails.querySelector(".card__description");
        var level = Number(activeLevel.dataset.level);
        var id = Number(gameDetails.dataset.id);
        var arrWordsScore = score.innerText.split(" ");
        var scoreNumber = arrWordsScore[arrWordsScore.length - 1];
        score.innerText = dataInterface.score + scoreNumber;
        buttonNextLevel.innerText = dataInterface.buttonNextLevel;
        if (hint) {
          hint.innerText = dataInterface.gameDetailsHint;
        }
        if (genre) {
          genre.innerText = data[level][id].genre;
        }
        if (description) {
          description.innerText = data[level][id].description;
        }
      }
      if (hash === "#/gallery") {
        var galleryCard = document.querySelector(".gallery__card");
        var _genre = galleryCard.querySelector(".card__genre");
        var _description = galleryCard.querySelector(".card__description");
        var levelNumber = galleryCard.dataset.level;
        var number = galleryCard.dataset.id;
        _genre.innerText = data[levelNumber][number].genre;
        _description.innerText = data[levelNumber][number].description;
      }
      if (hash === "#/results") {
        var _title = document.querySelector(".results__title");
        var _subtitle = document.querySelector(".results__subtitle");
        var win = document.querySelector(".results__win");
        var button = document.querySelector(".results__button");
        var _score = JSON.parse(localStorage.getItem("metalknock-music-quiz")).score;
        _title.innerText = dataInterface.resultsTitle;
        if (_subtitle) {
          _subtitle.innerText = "\n          ".concat(dataInterface.resultsSubtitle1, " ").concat(_score, " ").concat(dataInterface.resultsSubtitle2);
        }
        if (button) {
          button.innerText = dataInterface.resultsButton;
        }
        if (win) {
          win.innerText = "".concat(dataInterface.resultsWin1, " ").concat(_score, " ").concat(dataInterface.resultsWin2);
        }
      }
    }
  };
}


/***/ }),

/***/ "./src/listeners/clickNextLevel.js":
/*!*****************************************!*\
  !*** ./src/listeners/clickNextLevel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickNextLevel": () => (/* binding */ clickNextLevel),
/* harmony export */   "removeClickNextLevel": () => (/* binding */ removeClickNextLevel)
/* harmony export */ });
/* harmony import */ var _helpers_initLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/initLevel */ "./src/helpers/initLevel.js");
/* harmony import */ var _clickAnswersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickAnswersList */ "./src/listeners/clickAnswersList.js");


var clickNextLevelListener = new AbortController();
function clickNextLevel(button, divElement, levelNumber, score, secretAudio) {
  if (clickNextLevelListener.signal.aborted) {
    clickNextLevelListener = new AbortController();
  }
  button.addEventListener("click", handleClickNextLevel(divElement, levelNumber, score, secretAudio), clickNextLevelListener);
}
function removeClickNextLevel() {
  clickNextLevelListener.abort();
}
function handleClickNextLevel(divElement, levelNumber, score, secretAudio) {
  return function curredFunc(e) {
    levelNumber++;
    (0,_clickAnswersList__WEBPACK_IMPORTED_MODULE_1__.removeClickAnswersList)();
    (0,_helpers_initLevel__WEBPACK_IMPORTED_MODULE_0__["default"])(divElement, levelNumber, score, secretAudio);
  };
}


/***/ }),

/***/ "./src/listeners/clickPlayerPlay.js":
/*!******************************************!*\
  !*** ./src/listeners/clickPlayerPlay.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickPlayerPlay": () => (/* binding */ clickPlayerPlay),
/* harmony export */   "removeClickPlayerPlay": () => (/* binding */ removeClickPlayerPlay)
/* harmony export */ });
/* harmony import */ var _changeHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeHash */ "./src/listeners/changeHash.js");

var clickPlayerPlayListener = new AbortController();
function clickPlayerPlay(player, audio) {
  if (clickPlayerPlayListener.signal.aborted) {
    clickPlayerPlayListener = new AbortController();
  }
  player.addEventListener("click", handleClickPlayerPlay(audio), clickPlayerPlayListener);
}
function removeClickPlayerPlay() {
  clickPlayerPlayListener.abort();
}
function handleClickPlayerPlay(audio) {
  return function curredFunc(e) {
    if (e.target.classList.contains("player__play")) {
      if (audio.paused) {
        e.target.classList.remove("player__play--start");
        e.target.classList.add("player__play--pause");
        audio.play();
        (0,_changeHash__WEBPACK_IMPORTED_MODULE_0__.changeHash)(audio);
      } else {
        e.target.classList.remove("player__play--pause");
        e.target.classList.add("player__play--start");
        audio.pause();
      }
    }
  };
}


/***/ }),

/***/ "./src/listeners/clickPlayerVolumeSlider..js":
/*!***************************************************!*\
  !*** ./src/listeners/clickPlayerVolumeSlider..js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickPlayerVolumeSlider": () => (/* binding */ clickPlayerVolumeSlider),
/* harmony export */   "removeClickPlayerVolumeSlider": () => (/* binding */ removeClickPlayerVolumeSlider)
/* harmony export */ });
/* harmony import */ var _assets_img_volume_on_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/volume-on.svg */ "./src/assets/img/volume-on.svg");
/* harmony import */ var _assets_img_volume_off_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/volume-off.svg */ "./src/assets/img/volume-off.svg");


var clickPlayerVolumeSliderListener = new AbortController();
function clickPlayerVolumeSlider(player, audio) {
  if (clickPlayerVolumeSliderListener.signal.aborted) {
    clickPlayerVolumeSliderListener = new AbortController();
  }
  player.addEventListener("click", handleClickPlayerVolumeSlider(player, audio), clickPlayerVolumeSliderListener);
}
function removeClickPlayerVolumeSlider() {
  clickPlayerVolumeSliderListener.abort();
}
function handleClickPlayerVolumeSlider(player, audio) {
  return function curredFunc(e) {
    if (!e.target.classList.contains("volume__slider") && !e.target.classList.contains("volume__percentage")) {
      return;
    }
    var volumeButton = player.querySelector(".volume__button");
    var volumeImage = player.querySelector(".volume__image");
    var volumeSliderWidth;
    var percentage;
    if (e.target.classList.contains("volume__slider")) {
      volumeSliderWidth = window.getComputedStyle(e.target).width;
      percentage = e.target.querySelector(".volume__percentage");
    } else if (e.target.classList.contains("volume__percentage")) {
      volumeSliderWidth = window.getComputedStyle(e.target.parentNode).width;
      percentage = e.target;
    }
    var newVolume = e.offsetX / parseInt(volumeSliderWidth);
    if (newVolume <= 0.03) {
      newVolume = 0;
      volumeImage.src = _assets_img_volume_off_svg__WEBPACK_IMPORTED_MODULE_1__;
      volumeButton.classList.remove("volume__button--on");
      volumeButton.classList.add("volume__button--off");
    } else {
      volumeImage.src = _assets_img_volume_on_svg__WEBPACK_IMPORTED_MODULE_0__;
      volumeButton.classList.remove("volume__button--off");
      volumeButton.classList.add("volume__button--on");
    }
    audio.volume = newVolume;
    percentage.style.width = newVolume * 100 + "%";
  };
}


/***/ }),

/***/ "./src/listeners/clickTimeline.js":
/*!****************************************!*\
  !*** ./src/listeners/clickTimeline.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickTimeline": () => (/* binding */ clickTimeline),
/* harmony export */   "removeClickTimeline": () => (/* binding */ removeClickTimeline)
/* harmony export */ });
var clickTimelineListener = new AbortController();
function clickTimeline(player, audio) {
  if (clickTimelineListener.signal.aborted) {
    clickTimelineListener = new AbortController();
  }
  player.addEventListener("click", handleClickTimeline(audio), clickTimelineListener);
}
function removeClickTimeline() {
  clickTimelineListener.abort();
}
function handleClickTimeline(audio) {
  return function curredFunc(e) {
    if (e.target.classList[0] === "player__timeline") {
      var timelineWidth = window.getComputedStyle(e.target).width.slice(0, -2);
      var timeForSearch = e.offsetX / Math.floor(timelineWidth) * audio.duration;
      audio.currentTime = timeForSearch;
    } else if (e.target.classList[0] === "player__progress") {
      var _timelineWidth = window.getComputedStyle(e.target.parentNode).width.slice(0, -2);
      var _timeForSearch = e.offsetX / Math.floor(_timelineWidth) * audio.duration;
      audio.currentTime = _timeForSearch;
    }
  };
}


/***/ }),

/***/ "./src/listeners/clickVolumeButton.js":
/*!********************************************!*\
  !*** ./src/listeners/clickVolumeButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickVolumeButton": () => (/* binding */ clickVolumeButton),
/* harmony export */   "removeClickVolumeButton": () => (/* binding */ removeClickVolumeButton)
/* harmony export */ });
/* harmony import */ var _assets_img_volume_on_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/volume-on.svg */ "./src/assets/img/volume-on.svg");
/* harmony import */ var _assets_img_volume_off_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/volume-off.svg */ "./src/assets/img/volume-off.svg");


var clickVolumeButtonListener = new AbortController();
function clickVolumeButton(quiz, audio) {
  if (clickVolumeButtonListener.signal.aborted) {
    clickVolumeButtonListener = new AbortController();
  }
  quiz.addEventListener("click", handleClickBurgerMenu(quiz, audio), clickVolumeButtonListener);
}
function removeClickVolumeButton() {
  clickVolumeButtonListener.abort();
}
function handleClickBurgerMenu(quiz, audio) {
  return function curredFunc(e) {
    if (e.target.parentNode.classList.contains("volume__button")) {
      var volumeButton = e.target.parentNode;
      var percentage = e.target.parentNode.parentNode.querySelector(".volume__percentage");
      if (volumeButton.classList.contains("volume__button--on")) {
        e.target.src = _assets_img_volume_off_svg__WEBPACK_IMPORTED_MODULE_1__;
        var newVolume = 0;
        audio.volume = newVolume;
        percentage.style.width = newVolume * 100 + "%";
        volumeButton.classList.remove("volume__button--on");
        volumeButton.classList.add("volume__button--off");
      } else {
        e.target.src = _assets_img_volume_on_svg__WEBPACK_IMPORTED_MODULE_0__;
        var _newVolume = 0.5;
        audio.volume = _newVolume;
        percentage.style.width = _newVolume * 100 + "%";
        volumeButton.classList.remove("volume__button--off");
        volumeButton.classList.add("volume__button--on");
      }
    }
  };
}


/***/ }),

/***/ "./src/router/index.routes.js":
/*!************************************!*\
  !*** ./src/router/index.routes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _controllers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/index */ "./src/controllers/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(route, container) {
    var header, headerMenuLinks, burgerMenuLinks;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            container.innerHTML = "";
            header = document.querySelector(".header");
            headerMenuLinks = header.querySelectorAll(".menu__link");
            burgerMenuLinks = header.querySelectorAll(".burger-menu__link");
            headerMenuLinks.forEach(function (headerMenuLink) {
              return headerMenuLink.classList.remove("button--active");
            });
            burgerMenuLinks.forEach(function (burgerMenuLink) {
              return burgerMenuLink.classList.remove("button--active");
            });
            _context.t0 = route;
            _context.next = _context.t0 === "#/" ? 9 : _context.t0 === "#/quiz" ? 12 : _context.t0 === "#/results" ? 15 : _context.t0 === "#/gallery" ? 16 : 19;
            break;
          case 9:
            burgerMenuLinks[0].classList.add("button--active");
            headerMenuLinks[0].classList.add("button--active");
            return _context.abrupt("return", container.appendChild(_controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.home()));
          case 12:
            burgerMenuLinks[1].classList.add("button--active");
            headerMenuLinks[1].classList.add("button--active");
            return _context.abrupt("return", container.appendChild(_controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.quiz()));
          case 15:
            return _context.abrupt("return", container.appendChild(_controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.results()));
          case 16:
            burgerMenuLinks[2].classList.add("button--active");
            headerMenuLinks[2].classList.add("button--active");
            return _context.abrupt("return", container.appendChild(_controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.gallery()));
          case 19:
            return _context.abrupt("return", container.appendChild(_controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.notFound()));
          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function router(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pixel4.png */ "./src/assets/img/pixel4.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nul[class],\nol[class] {\n  padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nul,\nol,\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nul[class] {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.body {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100%;\n}\n\n.main {\n  flex: 1 0 auto;\n}\n\n.footer {\n  flex: 0 0 auto;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100%;\n}\n\n.home {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  align-items: center;\n}\n.home__inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n}\n.home__title {\n  font-size: 50px;\n}\n.home__subtitle {\n  font-size: 20px;\n}\n.home__wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 30%;\n  gap: 30px;\n}\n.home__arrow {\n  width: 70%;\n  filter: invert(16%) sepia(54%) saturate(5914%) hue-rotate(217deg) brightness(92%) contrast(98%);\n  transition: all 0.5s ease;\n  animation: movedown 1s linear infinite;\n}\n.home__images {\n  flex: 0 0 40%;\n  position: relative;\n  overflow: hidden;\n}\n.home__image {\n  position: relative;\n  z-index: 2;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n.home__image-background {\n  position: absolute;\n  transition: all 0.5s ease;\n  animation: rotate 1s linear infinite;\n  border-radius: 50%;\n  z-index: 1;\n  top: 0;\n  left: 0;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(360deg);\n  }\n}\n@keyframes movedown {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(30px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@media (max-width: 640px) {\n  .home {\n    flex-direction: column-reverse;\n  }\n  .home__inner {\n    text-align: center;\n    align-items: center;\n  }\n  .home__images {\n    width: 40%;\n  }\n}\n@media (max-width: 480px) {\n  .home__title {\n    font-size: 40px;\n  }\n}\n.quiz {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 15px;\n}\n.quiz__header {\n  grid-column: 1/5;\n  margin-bottom: 100px;\n  padding: 20px;\n  border-radius: 15px;\n}\n.quiz__random-game {\n  grid-column: 1/5;\n}\n.quiz__answers {\n  grid-column: 1/2;\n}\n.quiz__game-details {\n  grid-column: 2/5;\n}\n.quiz__score {\n  font-size: 30px;\n  text-align: right;\n}\n.quiz__next-level {\n  grid-column: 1/5;\n}\n\n.random-game {\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  padding: 15px;\n}\n.random-game__image {\n  width: 200px;\n  border-radius: 15px;\n}\n.random-game__inner {\n  flex-grow: 1;\n  padding: 0 0 0 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n}\n.random-game__name {\n  font-size: 30px;\n}\n.random-game__player {\n  grid-column: 1/3;\n}\n\n.player {\n  min-height: 50px;\n  min-width: 190px;\n  position: relative;\n  padding: 0 0 7px 40px;\n}\n.player__timeline {\n  background-color: #353946;\n  width: 100%;\n  position: relative;\n  margin-left: auto;\n  cursor: pointer;\n  border-radius: 5px;\n  height: 6px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.player__timeline:hover {\n  filter: drop-shadow(2px 2px 2px #000);\n}\n.player__progress {\n  background: #ff764b;\n  width: 0%;\n  height: 100%;\n  transition: 0.15s;\n  border-radius: 5px;\n}\n.player__controls {\n  margin-left: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.player__play, .player__time, .player__volume {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.player__play {\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  width: 20px;\n  height: 15px;\n  transition: transform 0.1s;\n}\n.player__play:hover {\n  filter: drop-shadow(2px 2px 2px #000);\n  transform: scale(1.1) translateY(-5%);\n}\n.player__play--start {\n  border: 7px solid rgba(0, 0, 0, 0);\n  border-left: 13px solid #ff764b;\n  border-radius: 1px;\n}\n.player__play--pause {\n  width: 12px;\n}\n.player__play--pause::before {\n  content: \"\";\n  background: #ff764b;\n  height: 15px;\n  width: 3px;\n  border-radius: 1px;\n}\n.player__play--pause::after {\n  content: \"\";\n  background: #ff764b;\n  height: 15px;\n  width: 3px;\n  border-radius: 1px;\n}\n.player__time {\n  width: 100%;\n}\n\n.volume {\n  cursor: pointer;\n}\n.volume__button {\n  position: absolute;\n  top: 35px;\n  left: -2px;\n}\n.volume__button:hover {\n  filter: drop-shadow(2px 2px 2px #000);\n  transform: scale(1.1);\n}\n.volume__image {\n  width: 30px;\n  filter: invert(63%) sepia(17%) saturate(7172%) hue-rotate(329deg) brightness(103%) contrast(101%);\n}\n.volume__slider {\n  height: 10px;\n  width: 150px;\n  background: #353946;\n  border-radius: 2px;\n}\n.volume__slider:hover {\n  filter: drop-shadow(2px 2px 2px #000);\n}\n.volume__percentage {\n  background: #ff764b;\n  border-radius: 2px;\n  height: 100%;\n  width: 75%;\n}\n\n.answers {\n  width: fit-content;\n  border-radius: 15px;\n  padding: 20px;\n}\n.answers__list {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.answers__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.answers__item:hover {\n  transform: scale(1.1);\n  filter: drop-shadow(2px 2px 2px #000);\n}\n\n.answer__indicator {\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  background: grey;\n  flex: 0 0 10px;\n}\n.answer--false .answer__indicator {\n  background: #ff764b;\n}\n.answer--true .answer__indicator {\n  background: greenyellow;\n}\n.answer__text {\n  overflow-wrap: break-word;\n  max-width: 200px;\n}\n\n.card {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 4fr;\n  grid-gap: 10px;\n}\n.card__image {\n  border-radius: 15px 15px 0px 0px;\n  grid-column: 4/5;\n  grid-row: 1/4;\n  max-height: 200px;\n  margin-left: auto;\n  border-radius: 15px;\n}\n.card__inner {\n  max-width: 200px;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 10px;\n}\n.card__name {\n  font-size: 30px;\n  grid-column: 1/4;\n  grid-row: 1/2;\n}\n.card__genre {\n  font-size: 20px;\n  grid-column: 1/4;\n  grid-row: 2/3;\n}\n.card__player {\n  grid-column: 1/4;\n  grid-row: 3/4;\n}\n.card__description {\n  grid-column: 1/5;\n  grid-row: 4/5;\n}\n\n.game-details {\n  border-radius: 15px;\n  padding: 20px;\n}\n\n.category {\n  display: block;\n  text-align: center;\n  border-radius: 15px;\n  color: white;\n  padding: 12px 30px;\n  text-decoration: none;\n  transition: 0.5s;\n  background: none;\n}\n.category--active {\n  background: #ff764b;\n}\n\n@media (max-width: 900px) {\n  .card {\n    grid-template-columns: 1fr 1fr 1fr 2fr;\n  }\n}\n@media (max-width: 790px) {\n  .random-game__image {\n    width: 150px;\n  }\n  .random-game__name,\n.quiz__score,\n.card__name {\n    font-size: 23px;\n  }\n  .card__genre {\n    font-size: 18px;\n  }\n  .card__description,\n.answer__text {\n    font-size: 15px;\n  }\n}\n@media (max-width: 750px) {\n  .quiz__header {\n    margin-bottom: 20px;\n  }\n  .quiz__header .menu__list {\n    flex-direction: column;\n  }\n}\n@media (max-width: 530px) {\n  .random-game {\n    flex-direction: column;\n    gap: 20px;\n    padding-bottom: 40px;\n  }\n  .random-game__image {\n    width: 200px;\n  }\n  .random-game__inner {\n    width: 100%;\n  }\n  .quiz {\n    grid-gap: 40px 15px;\n  }\n  .quiz__answers,\n.quiz__game-details {\n    grid-column: 1/5;\n  }\n  .card {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 2fr;\n  }\n  .card__image {\n    grid-column: 1/5;\n    grid-row: 1/2;\n    max-height: 150px;\n    margin-left: 0;\n    margin: 0 auto;\n  }\n  .card__name {\n    grid-column: 1/5;\n    grid-row: 2/3;\n  }\n  .card__genre {\n    grid-column: 1/5;\n    grid-row: 3/4;\n  }\n  .card__player {\n    grid-column: 1/5;\n    grid-row: 4/5;\n  }\n  .card__description {\n    grid-column: 1/5;\n    grid-row: 5/6;\n  }\n}\n@media (max-width: 404px) {\n  .card {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 2fr;\n  }\n  .card__image {\n    grid-column: 1/5;\n    grid-row: 1/2;\n    max-height: 150px;\n    margin-left: 0;\n    margin: 0 auto;\n  }\n  .card__name {\n    grid-column: 1/5;\n    grid-row: 2/3;\n  }\n  .card__genre {\n    grid-column: 1/5;\n    grid-row: 3/4;\n  }\n  .card__player {\n    grid-column: 1/5;\n    grid-row: 4/5;\n  }\n  .card__description {\n    grid-column: 1/5;\n    grid-row: 5/6;\n  }\n}\n.results {\n  display: flex;\n  justify-content: space-between;\n}\n.results__inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n  flex-grow: 1;\n}\n.results__title {\n  font-size: 50px;\n}\n.results__subtitle, .results__win {\n  font-size: 20px;\n}\n.results__image {\n  flex: 0 0 40%;\n  width: 200px;\n}\n\n@media (max-width: 639px) {\n  .results {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n  .results__title {\n    font-size: 40px;\n  }\n  .results__image {\n    width: 90%;\n  }\n}\n.gallery {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n.gallery__card {\n  padding: 15px;\n  border-radius: 15px;\n}\n.gallery__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  grid-gap: 20px;\n}\n\n.item {\n  position: relative;\n  cursor: pointer;\n  aspect-ratio: 1;\n  overflow: hidden;\n}\n.item__name {\n  position: absolute;\n  font-size: 20px;\n  max-width: 80%;\n  top: 0;\n  left: 10%;\n  z-index: 2;\n  transition: 1s;\n  opacity: 0;\n}\n.item__image {\n  object-fit: cover;\n  width: 280px;\n  border-radius: 15px;\n  transition: 1s;\n  aspect-ratio: 1;\n}\n.item:hover .item__image {\n  filter: brightness(30%);\n}\n.item:hover .item__name {\n  opacity: 1;\n  transform: translateY(-50%);\n  top: 50%;\n}\n\n@media (max-width: 800px) {\n  .item__name {\n    font-size: 16px;\n  }\n}\n@media (max-width: 750px) {\n  .gallery__list {\n    grid-gap: 15px;\n  }\n}\n@media (max-width: 540px) {\n  .item__name {\n    font-size: 14px;\n  }\n  .gallery__list {\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n  }\n}\n@media (max-width: 450px) {\n  .gallery__list {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(18, 1fr);\n  }\n}\n.body {\n  background: #1e1c1c;\n  color: white;\n}\n\n.header__container {\n  min-height: 80px;\n  flex-direction: row;\n  align-items: center;\n}\n.header__menu {\n  flex: 0 0 40%;\n}\n\n.burger-menu {\n  display: none;\n}\n.burger-menu--active .burger-menu__lines {\n  background-color: transparent;\n}\n.burger-menu--active .burger-menu__lines::before {\n  top: 0;\n  transform: rotate(45deg);\n}\n.burger-menu--active .burger-menu__lines::after {\n  top: 0;\n  transform: rotate(-45deg);\n}\n.burger-menu--active .burger-menu__nav {\n  right: 0;\n  transition: 0.4s;\n}\n.burger-menu--active .burger-menu__overlay {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.burger-menu__button {\n  cursor: pointer;\n  position: fixed;\n  top: 10px;\n  right: 15px;\n  display: block;\n  z-index: 8;\n  width: 50px;\n  height: 50px;\n  transition: 0.4s;\n}\n.burger-menu__lines {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.burger-menu__lines::before {\n  content: \"\";\n  top: -12px;\n}\n.burger-menu__lines::after {\n  content: \"\";\n  top: 12px;\n}\n.burger-menu__lines, .burger-menu__lines::after, .burger-menu__lines::before {\n  position: absolute;\n  width: 50px;\n  height: 4px;\n  border-radius: 5px;\n  background-color: #0249c7;\n  transition: 0.4s;\n}\n.burger-menu__nav {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  position: fixed;\n  top: 0;\n  right: -100%;\n  z-index: 7;\n  height: 100%;\n  padding: 120px 15px 0px 15px;\n  border-radius: 15px;\n  transition: 0.8s;\n  background: #242731;\n}\n.burger-menu__overlay {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 6;\n}\n\n.logo__image {\n  height: 40px;\n}\n.logo__image:hover {\n  filter: drop-shadow(2px 2px 2px #000);\n}\n\n.menu__list {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.footer__container {\n  flex-direction: row;\n  align-items: center;\n}\n\n.github__image {\n  width: 40px;\n  filter: invert(16%) sepia(54%) saturate(5914%) hue-rotate(217deg) brightness(92%) contrast(98%);\n}\n.github__image:hover {\n  filter: invert(16%) sepia(54%) saturate(5914%) hue-rotate(217deg) brightness(92%) contrast(98%) drop-shadow(2px 2px 2px #000);\n}\n\n.rs-school__image {\n  width: 70px;\n  filter: invert(16%) sepia(54%) saturate(5914%) hue-rotate(217deg) brightness(92%) contrast(98%);\n}\n.rs-school__image:hover {\n  filter: invert(16%) sepia(54%) saturate(5914%) hue-rotate(217deg) brightness(92%) contrast(98%) drop-shadow(2px 2px 2px #000);\n}\n\n.button {\n  display: block;\n  text-align: center;\n  border: none;\n  border-radius: 15px;\n  color: white;\n  padding: 10px 23px;\n  text-decoration: none;\n  transition: 0.5s;\n  background: none;\n  cursor: pointer;\n  border-bottom: 1px solid #0249c7;\n}\n.button:hover {\n  border-bottom: 1px solid #0249c7;\n  background: #0249c7 url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  transition-delay: 0.8s;\n  background-size: 180px;\n  animation: animate 0.8s steps(8) forwards;\n  filter: drop-shadow(2px 2px 2px #000);\n}\n.button--disable {\n  color: darkslategray;\n  cursor: not-allowed;\n}\n.button--disable:hover {\n  border-bottom: 1px solid #0249c7;\n  color: darkslategray;\n  background: none;\n  animation: none;\n}\n.button--active {\n  transition: 0s;\n  background: #0249c7;\n}\n.button--active:hover {\n  transition-delay: none;\n  background: #0249c7;\n  animation: none;\n  filter: none;\n}\n\n@keyframes animate {\n  0% {\n    background-position-y: 0;\n  }\n  100% {\n    background-position-y: -480px;\n  }\n}\n@media (max-width: 640px) {\n  .header__container .header__burger-menu {\n    display: block;\n  }\n  .header__container .header__menu {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/_reset.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_global.scss","webpack://./src/styles/_home.scss","webpack://./src/styles/_quiz.scss","webpack://./src/styles/_vars.scss","webpack://./src/styles/_results.scss","webpack://./src/styles/_gallery.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;ACCF;;ADEA;;;EAGE,mBAAA;ACCF;;ADEA;;EAEE,UAAA;ACCF;;ADEA;;;;;;;;;;;;;;;;EAgBE,SAAA;ACCF;;ADEA;EACE,gBAAA;ACCF;;ADEA;EACE,eAAA;EACA,cAAA;ACCF;;ADEA;;;;EAIE,aAAA;ACCF;;ADEA;EACE,qBAAA;EACA,cAAA;ACCF;;ACrDA;;EAEE,YAAA;ADwDF;;ACtDA;EACE,iCAAA;ADyDF;;ACvDA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,gBAAA;AD0DF;;ACvDA;EACE,cAAA;AD0DF;;ACxDA;EACE,cAAA;AD2DF;;ACxDA;EACE,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,gBAAA;AD2DF;;AEvFA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EACA,mBAAA;AF0FF;AExFE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;AF0FJ;AEvFE;EACE,eAAA;AFyFJ;AEtFE;EACE,eAAA;AFwFJ;AErFE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AFuFJ;AEpFE;EACE,UAAA;EACA,+FAAA;EAEA,yBAAA;EACA,sCAAA;AFqFJ;AElFE;EACE,aAAA;EACA,kBAAA;EACA,gBAAA;AFoFJ;AEjFE;EACE,kBAAA;EACA,UAAA;EACA,SAAA;EACA,6BAAA;AFmFJ;AEjFI;EACE,kBAAA;EACA,yBAAA;EACA,oCAAA;EACA,kBAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;AFmFN;;AE9EA;EACE;IACE,yBAAA;EFiFF;AACF;AE9EA;EACE;IACE,0BAAA;EFgFF;EE9EA;IACE,2BAAA;EFgFF;EE9EA;IACE,0BAAA;EFgFF;AACF;AE7EA;EACE;IACE,8BAAA;EF+EF;EE9EE;IACE,kBAAA;IACA,mBAAA;EFgFJ;EE9EE;IACE,UAAA;EFgFJ;AACF;AE7EA;EACE;IACE,eAAA;EF+EF;AACF;AG7KA;EACE,aAAA;EACA,sCAAA;EACA,cAAA;AH+KF;AG7KE;EACE,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,mBAAA;AH+KJ;AG5KE;EACE,gBAAA;AH8KJ;AG3KE;EACE,gBAAA;AH6KJ;AG1KE;EACE,gBAAA;AH4KJ;AGzKE;EACE,eAAA;EACA,iBAAA;AH2KJ;AGxKE;EACE,gBAAA;AH0KJ;;AGtKA;EACE,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;AHyKF;AGvKE;EACE,YAAA;EACA,mBAAA;AHyKJ;AGtKE;EACE,YAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,cAAA;AHwKJ;AGrKE;EACE,eAAA;AHuKJ;AGpKE;EACE,gBAAA;AHsKJ;;AGlKA;EACE,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;AHqKF;AGnKE;EACE,yBC9DkB;ED+DlB,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;AHqKJ;AGnKI;EACE,qCAAA;AHqKN;AGjKE;EACE,mBChFU;EDiFV,SAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AHmKJ;AGhKE;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;AHkKJ;AGhKE;EAGE,aAAA;EACA,8BAAA;EACA,mBAAA;AHgKJ;AG9JE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;AHgKJ;AG9JI;EACE,qCAAA;EACA,qCAAA;AHgKN;AG7JI;EACE,kCAAA;EACA,+BAAA;EACA,kBAAA;AH+JN;AG5JI;EACE,WAAA;AH8JN;AG7JM;EACE,WAAA;EACA,mBC5HM;ED6HN,YAAA;EACA,UAAA;EACA,kBAAA;AH+JR;AG7JM;EACE,WAAA;EACA,mBCnIM;EDoIN,YAAA;EACA,UAAA;EACA,kBAAA;AH+JR;AG1JE;EACE,WAAA;AH4JJ;;AGxJA;EACE,eAAA;AH2JF;AGzJE;EACE,kBAAA;EACA,SAAA;EACA,UAAA;AH2JJ;AGzJI;EACE,qCAAA;EACA,qBAAA;AH2JN;AGvJE;EACE,WAAA;EACA,iGAAA;AHyJJ;AGrJE;EACE,YAAA;EAEA,YAAA;EACA,mBCtKkB;EDuKlB,kBAAA;AHsJJ;AGrJI;EACE,qCAAA;AHuJN;AGnJE;EACE,mBChLU;EDiLV,kBAAA;EACA,YAAA;EACA,UAAA;AHqJJ;;AGjJA;EACE,kBAAA;EACA,mBAAA;EACA,aAAA;AHoJF;AGlJE;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AHoJJ;AGjJE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AHmJJ;AGlJI;EACE,qBAAA;EACA,qCAAA;AHoJN;;AG9IE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,cAAA;AHiJJ;AG9II;EACE,mBCxNQ;AJwWd;AG5II;EACE,uBAAA;AH8IN;AG3IE;EACE,yBAAA;EACA,gBAAA;AH6IJ;;AGzIA;EACE,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,cAAA;AH4IF;AG1IE;EACE,gCAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;AH4IJ;AGzIE;EACE,gBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;AH2IJ;AGxIE;EACE,eAAA;EACA,gBAAA;EACA,aAAA;AH0IJ;AGvIE;EACE,eAAA;EACA,gBAAA;EACA,aAAA;AHyIJ;AGtIE;EACE,gBAAA;EACA,aAAA;AHwIJ;AGrIE;EACE,gBAAA;EACA,aAAA;AHuIJ;;AGnIA;EACE,mBAAA;EACA,aAAA;AHsIF;;AGnIA;EACE,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,gBAAA;AHsIF;AGpIE;EACE,mBCtSU;AJ4ad;;AGnIA;EACE;IACE,sCAAA;EHsIF;AACF;AGpIA;EACE;IACE,YAAA;EHsIF;EGpIA;;;IAGE,eAAA;EHsIF;EGpIA;IACE,eAAA;EHsIF;EGpIA;;IAEE,eAAA;EHsIF;AACF;AGpIA;EACE;IACE,mBAAA;EHsIF;EGrIE;IACE,sBAAA;EHuIJ;AACF;AGnIA;EACE;IACE,sBAAA;IACA,SAAA;IACA,oBAAA;EHqIF;EGnIA;IACE,YAAA;EHqIF;EGnIA;IACE,WAAA;EHqIF;EGnIA;IACE,mBAAA;EHqIF;EGnIA;;IAEE,gBAAA;EHqIF;EGnIA;IACE,sCAAA;IACA,6CAAA;EHqIF;EGnIA;IACE,gBAAA;IACA,aAAA;IACA,iBAAA;IACA,cAAA;IACA,cAAA;EHqIF;EGnIA;IACE,gBAAA;IACA,aAAA;EHqIF;EGnIA;IACE,gBAAA;IACA,aAAA;EHqIF;EGlIA;IACE,gBAAA;IACA,aAAA;EHoIF;EGlIA;IACE,gBAAA;IACA,aAAA;EHoIF;AACF;AGlIA;EACE;IACE,sCAAA;IACA,6CAAA;EHoIF;EGlIA;IACE,gBAAA;IACA,aAAA;IACA,iBAAA;IACA,cAAA;IACA,cAAA;EHoIF;EGlIA;IACE,gBAAA;IACA,aAAA;EHoIF;EGlIA;IACE,gBAAA;IACA,aAAA;EHoIF;EGjIA;IACE,gBAAA;IACA,aAAA;EHmIF;EGjIA;IACE,gBAAA;IACA,aAAA;EHmIF;AACF;AK5hBA;EACE,aAAA;EACA,8BAAA;AL8hBF;AK5hBE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;EACA,YAAA;AL8hBJ;AK3hBE;EACE,eAAA;AL6hBJ;AK1hBE;EAEE,eAAA;AL2hBJ;AKzhBE;EACE,aAAA;EACA,YAAA;AL2hBJ;;AKxhBA;EACE;IACE,8BAAA;IACA,mBAAA;EL2hBF;EK1hBE;IACE,eAAA;EL4hBJ;EK1hBE;IACE,UAAA;EL4hBJ;AACF;AM9jBA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;ANgkBF;AM9jBE;EACE,aAAA;EACA,mBAAA;ANgkBJ;AM7jBE;EACE,aAAA;EACA,qCAAA;EACA,kCAAA;EACA,cAAA;AN+jBJ;;AM3jBA;EACE,kBAAA;EACA,eAAA;EAEA,eAAA;EACA,gBAAA;AN6jBF;AM3jBE;EACE,kBAAA;EACA,eAAA;EACA,cAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,UAAA;AN6jBJ;AM1jBE;EACE,iBAAA;EACA,YAAA;EAEA,mBAAA;EACA,cAAA;EACA,eAAA;AN2jBJ;AMvjBI;EACE,uBAAA;ANyjBN;AMtjBI;EACE,UAAA;EACA,2BAAA;EACA,QAAA;ANwjBN;;AMnjBA;EACE;IACE,eAAA;ENsjBF;AACF;AMpjBA;EACE;IACE,cAAA;ENsjBF;AACF;AMnjBA;EACE;IACE,eAAA;ENqjBF;EMnjBA;IACE,qCAAA;IACA,mCAAA;ENqjBF;AACF;AMnjBA;EACE;IACE,qCAAA;IACA,mCAAA;ENqjBF;AACF;AA7nBA;EACE,mBIRoB;EJSpB,YIFW;AJioBb;;AA3nBE;EACE,gBAAA;EACA,mBAAA;EACA,mBAAA;AA8nBJ;AA3nBE;EACE,aAAA;AA6nBJ;;AAznBA;EACE,aAAA;AA4nBF;AA1nBI;EACE,6BAAA;AA4nBN;AA1nBM;EACE,MAAA;EACA,wBAAA;AA4nBR;AAznBM;EACE,MAAA;EACA,yBAAA;AA2nBR;AAvnBI;EACE,QAAA;EACA,gBAAA;AAynBN;AAtnBI;EACE,cAAA;EACA,oCAAA;AAwnBN;AApnBE;EACE,eAAA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAsnBJ;AAnnBE;EACE,QAAA;EACA,SAAA;EACA,gCAAA;AAqnBJ;AAnnBI;EACE,WAAA;EACA,UAAA;AAqnBN;AAlnBI;EACE,WAAA;EACA,SAAA;AAonBN;AAhnBE;EAGE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,yBItFW;EJuFX,gBAAA;AAgnBJ;AA7mBE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,eAAA;EACA,MAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;EACA,4BAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBIpGc;AJmtBlB;AA5mBE;EACE,aAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;AA8mBJ;;AAzmBE;EACE,YAAA;AA4mBJ;AA3mBI;EACE,qCAAA;AA6mBN;;AAvmBE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;AA0mBJ;;AArmBE;EACE,mBAAA;EACA,mBAAA;AAwmBJ;;AAnmBE;EACE,WAAA;EACA,+FAAA;AAsmBJ;AApmBI;EACE,6HAAA;AAsmBN;;AA/lBE;EACE,WAAA;EACA,+FAAA;AAkmBJ;AAhmBI;EACE,6HAAA;AAkmBN;;AA5lBA;EACE,cAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,gCAAA;AA+lBF;AA9lBE;EACE,gCAAA;EACA,2DAAA;EACA,sBAAA;EACA,sBAAA;EACA,yCAAA;EACA,qCAAA;AAgmBJ;AA9lBE;EACE,oBAAA;EACA,mBAAA;AAgmBJ;AA/lBI;EACE,gCAAA;EACA,oBAAA;EACA,gBAAA;EACA,eAAA;AAimBN;AA9lBE;EACE,cAAA;EAEA,mBIrMW;AJoyBf;AA9lBI;EACE,sBAAA;EACA,mBIxMS;EJyMT,eAAA;EACA,YAAA;AAgmBN;;AA3lBA;EACE;IACE,wBAAA;EA8lBF;EA5lBA;IACE,6BAAA;EA8lBF;AACF;AA3lBA;EAGM;IACE,cAAA;EA2lBN;EAzlBI;IACE,aAAA;EA2lBN;AACF","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: inherit;\r\n}\r\n\r\nul[class],\r\nol[class] {\r\n  padding: 0;\r\n}\r\n\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nul,\r\nol,\r\nli,\r\nfigure,\r\nfigcaption,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\nul[class] {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n","@import \"vars\";\r\n@import \"fonts\";\r\n@import \"reset\";\r\n@import \"libs\";\r\n@import \"global\";\r\n@import \"home\";\r\n@import \"quiz\";\r\n@import \"results\";\r\n@import \"gallery\";\r\n\r\n.body {\r\n  background: $background-gradiend;\r\n  color: $color-text;\r\n}\r\n\r\n.header {\r\n  &__container {\r\n    min-height: 80px;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  &__menu {\r\n    flex: 0 0 40%;\r\n  }\r\n}\r\n\r\n.burger-menu {\r\n  display: none;\r\n  &--active {\r\n    & .burger-menu__lines {\r\n      background-color: transparent;\r\n\r\n      &::before {\r\n        top: 0;\r\n        transform: rotate(45deg);\r\n      }\r\n\r\n      &::after {\r\n        top: 0;\r\n        transform: rotate(-45deg);\r\n      }\r\n    }\r\n\r\n    & .burger-menu__nav {\r\n      right: 0;\r\n      transition: 0.4s;\r\n    }\r\n\r\n    & .burger-menu__overlay {\r\n      display: block;\r\n      background-color: rgba(0, 0, 0, 0.4);\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    cursor: pointer;\r\n    position: fixed;\r\n    top: 10px;\r\n    right: 15px;\r\n    display: block;\r\n    z-index: 8;\r\n    width: 50px;\r\n    height: 50px;\r\n    transition: 0.4s;\r\n  }\r\n\r\n  &__lines {\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    &::before {\r\n      content: \"\";\r\n      top: -12px;\r\n    }\r\n\r\n    &::after {\r\n      content: \"\";\r\n      top: 12px;\r\n    }\r\n  }\r\n\r\n  &__lines,\r\n  &__lines::after,\r\n  &__lines::before {\r\n    position: absolute;\r\n    width: 50px;\r\n    height: 4px;\r\n    border-radius: 5px;\r\n    background-color: $color-second;\r\n    transition: 0.4s;\r\n  }\r\n\r\n  &__nav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n    position: fixed;\r\n    top: 0;\r\n    right: -100%;\r\n    z-index: 7;\r\n    height: 100%;\r\n    padding: 120px 15px 0px 15px;\r\n    border-radius: 15px;\r\n    transition: 0.8s;\r\n    background: $background-card;\r\n  }\r\n\r\n  &__overlay {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 6;\r\n  }\r\n}\r\n\r\n.logo {\r\n  &__image {\r\n    height: 40px;\r\n    &:hover {\r\n      filter: drop-shadow(2px 2px 2px $color-shadow);\r\n    }\r\n  }\r\n}\r\n\r\n.menu {\r\n  &__list {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 20px;\r\n  }\r\n}\r\n\r\n.footer {\r\n  &__container {\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.github {\r\n  &__image {\r\n    width: 40px;\r\n    filter: invert(16%) sepia(54%) saturate(5914%) hue-rotate(217deg)\r\n      brightness(92%) contrast(98%);\r\n    &:hover {\r\n      filter: invert(16%) sepia(54%) saturate(5914%) hue-rotate(217deg)\r\n        brightness(92%) contrast(98%) drop-shadow(2px 2px 2px $color-shadow);\r\n    }\r\n  }\r\n}\r\n\r\n.rs-school {\r\n  &__image {\r\n    width: 70px;\r\n    filter: invert(16%) sepia(54%) saturate(5914%) hue-rotate(217deg)\r\n      brightness(92%) contrast(98%);\r\n    &:hover {\r\n      filter: invert(16%) sepia(54%) saturate(5914%) hue-rotate(217deg)\r\n        brightness(92%) contrast(98%) drop-shadow(2px 2px 2px $color-shadow);\r\n    }\r\n  }\r\n}\r\n\r\n.button {\r\n  display: block;\r\n  text-align: center;\r\n  border: none;\r\n  border-radius: 15px;\r\n  color: white;\r\n  padding: 10px 23px;\r\n  text-decoration: none;\r\n  transition: 0.5s;\r\n  background: none;\r\n  cursor: pointer;\r\n  border-bottom: 1px solid $color-second;\r\n  &:hover {\r\n    border-bottom: 1px solid $color-second;\r\n    background: $color-second url(\"../assets/img/pixel4.png\");\r\n    transition-delay: 0.8s;\r\n    background-size: 180px;\r\n    animation: animate 0.8s steps(8) forwards;\r\n    filter: drop-shadow(2px 2px 2px $color-shadow);\r\n  }\r\n  &--disable {\r\n    color: darkslategray;\r\n    cursor: not-allowed;\r\n    &:hover {\r\n      border-bottom: 1px solid $color-second;\r\n      color: darkslategray;\r\n      background: none;\r\n      animation: none;\r\n    }\r\n  }\r\n  &--active {\r\n    transition: 0s;\r\n\r\n    background: $color-second;\r\n    &:hover {\r\n      transition-delay: none;\r\n      background: $color-second;\r\n      animation: none;\r\n      filter: none;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    background-position-y: 0;\r\n  }\r\n  100% {\r\n    background-position-y: -480px;\r\n  }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .header__container {\r\n    & .header {\r\n      &__burger-menu {\r\n        display: block;\r\n      }\r\n      &__menu {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n","html,\r\nbody {\r\n  height: 100%;\r\n}\r\n.body {\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 100%;\r\n}\r\n\r\n.main {\r\n  flex: 1 0 auto;\r\n}\r\n.footer {\r\n  flex: 0 0 auto;\r\n}\r\n\r\n.container {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 20px 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 100%;\r\n}\r\n",".home {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  align-items: center;\r\n\r\n  &__inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 30px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 50px;\r\n  }\r\n\r\n  &__subtitle {\r\n    font-size: 20px;\r\n  }\r\n\r\n  &__wrap {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 30%;\r\n    gap: 30px;\r\n  }\r\n\r\n  &__arrow {\r\n    width: 70%;\r\n    filter: invert(16%) sepia(54%) saturate(5914%) hue-rotate(217deg)\r\n      brightness(92%) contrast(98%);\r\n    transition: all 0.5s ease;\r\n    animation: movedown 1s linear infinite;\r\n  }\r\n\r\n  &__images {\r\n    flex: 0 0 40%;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n\r\n  &__image {\r\n    position: relative;\r\n    z-index: 2;\r\n    left: 50%;\r\n    transform: translate(-50%, 0);\r\n\r\n    &-background {\r\n      position: absolute;\r\n      transition: all 0.5s ease;\r\n      animation: rotate 1s linear infinite;\r\n      border-radius: 50%;\r\n      z-index: 1;\r\n      top: 0;\r\n      left: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes rotate {\r\n  from {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes movedown {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  50% {\r\n    transform: translateY(30px);\r\n  }\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .home {\r\n    flex-direction: column-reverse;\r\n    &__inner {\r\n      text-align: center;\r\n      align-items: center;\r\n    }\r\n    &__images {\r\n      width: 40%;\r\n    }\r\n  }\r\n}\r\n@media (max-width: 480px) {\r\n  .home__title {\r\n    font-size: 40px;\r\n  }\r\n}\r\n",".quiz {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-gap: 15px;\r\n\r\n  &__header {\r\n    grid-column: 1/5;\r\n    margin-bottom: 100px;\r\n    padding: 20px;\r\n    border-radius: 15px;\r\n  }\r\n\r\n  &__random-game {\r\n    grid-column: 1/5;\r\n  }\r\n\r\n  &__answers {\r\n    grid-column: 1/2;\r\n  }\r\n\r\n  &__game-details {\r\n    grid-column: 2/5;\r\n  }\r\n\r\n  &__score {\r\n    font-size: 30px;\r\n    text-align: right;\r\n  }\r\n\r\n  &__next-level {\r\n    grid-column: 1/5;\r\n  }\r\n}\r\n\r\n.random-game {\r\n  border-radius: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 15px;\r\n\r\n  &__image {\r\n    width: 200px;\r\n    border-radius: 15px;\r\n  }\r\n\r\n  &__inner {\r\n    flex-grow: 1;\r\n    padding: 0 0 0 20px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-gap: 20px;\r\n  }\r\n\r\n  &__name {\r\n    font-size: 30px;\r\n  }\r\n\r\n  &__player {\r\n    grid-column: 1/3;\r\n  }\r\n}\r\n\r\n.player {\r\n  min-height: 50px;\r\n  min-width: 190px;\r\n  position: relative;\r\n  padding: 0 0 7px 40px;\r\n\r\n  &__timeline {\r\n    background-color: $background-timeline;\r\n    width: 100%;\r\n    position: relative;\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    height: 6px;\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n\r\n    &:hover {\r\n      filter: drop-shadow(2px 2px 2px $color-shadow);\r\n    }\r\n  }\r\n\r\n  &__progress {\r\n    background: $color-third;\r\n    width: 0%;\r\n    height: 100%;\r\n    transition: 0.15s;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  &__controls {\r\n    margin-left: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n  }\r\n  &__play,\r\n  &__time,\r\n  &__volume {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  &__play {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    cursor: pointer;\r\n    width: 20px;\r\n    height: 15px;\r\n    transition: transform 0.1s;\r\n\r\n    &:hover {\r\n      filter: drop-shadow(2px 2px 2px $color-shadow);\r\n      transform: scale(1.1) translateY(-5%);\r\n    }\r\n\r\n    &--start {\r\n      border: 7px solid rgba(0, 0, 0, 0);\r\n      border-left: 13px solid $color-third;\r\n      border-radius: 1px;\r\n    }\r\n\r\n    &--pause {\r\n      width: 12px;\r\n      &::before {\r\n        content: \"\";\r\n        background: $color-third;\r\n        height: 15px;\r\n        width: 3px;\r\n        border-radius: 1px;\r\n      }\r\n      &::after {\r\n        content: \"\";\r\n        background: $color-third;\r\n        height: 15px;\r\n        width: 3px;\r\n        border-radius: 1px;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__time {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.volume {\r\n  cursor: pointer;\r\n\r\n  &__button {\r\n    position: absolute;\r\n    top: 35px;\r\n    left: -2px;\r\n\r\n    &:hover {\r\n      filter: drop-shadow(2px 2px 2px $color-shadow);\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n\r\n  &__image {\r\n    width: 30px;\r\n    filter: invert(63%) sepia(17%) saturate(7172%) hue-rotate(329deg)\r\n      brightness(103%) contrast(101%);\r\n  }\r\n\r\n  &__slider {\r\n    height: 10px;\r\n\r\n    width: 150px;\r\n    background: $background-timeline;\r\n    border-radius: 2px;\r\n    &:hover {\r\n      filter: drop-shadow(2px 2px 2px $color-shadow);\r\n    }\r\n  }\r\n\r\n  &__percentage {\r\n    background: $color-third;\r\n    border-radius: 2px;\r\n    height: 100%;\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n.answers {\r\n  width: fit-content;\r\n  border-radius: 15px;\r\n  padding: 20px;\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n  }\r\n\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n    &:hover {\r\n      transform: scale(1.1);\r\n      filter: drop-shadow(2px 2px 2px $color-shadow);\r\n    }\r\n  }\r\n}\r\n\r\n.answer {\r\n  &__indicator {\r\n    border-radius: 50%;\r\n    width: 10px;\r\n    height: 10px;\r\n    background: grey;\r\n    flex: 0 0 10px;\r\n  }\r\n  &--false {\r\n    .answer__indicator {\r\n      background: $color-third;\r\n    }\r\n  }\r\n  &--true {\r\n    .answer__indicator {\r\n      background: greenyellow;\r\n    }\r\n  }\r\n  &__text {\r\n    overflow-wrap: break-word;\r\n    max-width: 200px;\r\n  }\r\n}\r\n\r\n.card {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 4fr;\r\n  grid-gap: 10px;\r\n\r\n  &__image {\r\n    border-radius: 15px 15px 0px 0px;\r\n    grid-column: 4/5;\r\n    grid-row: 1/4;\r\n    max-height: 200px;\r\n    margin-left: auto;\r\n    border-radius: 15px;\r\n  }\r\n\r\n  &__inner {\r\n    max-width: 200px;\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    gap: 10px;\r\n  }\r\n\r\n  &__name {\r\n    font-size: 30px;\r\n    grid-column: 1/4;\r\n    grid-row: 1/2;\r\n  }\r\n\r\n  &__genre {\r\n    font-size: 20px;\r\n    grid-column: 1/4;\r\n    grid-row: 2/3;\r\n  }\r\n\r\n  &__player {\r\n    grid-column: 1/4;\r\n    grid-row: 3/4;\r\n  }\r\n\r\n  &__description {\r\n    grid-column: 1/5;\r\n    grid-row: 4/5;\r\n  }\r\n}\r\n\r\n.game-details {\r\n  border-radius: 15px;\r\n  padding: 20px;\r\n}\r\n\r\n.category {\r\n  display: block;\r\n  text-align: center;\r\n  border-radius: 15px;\r\n  color: white;\r\n  padding: 12px 30px;\r\n  text-decoration: none;\r\n  transition: 0.5s;\r\n  background: none;\r\n\r\n  &--active {\r\n    background: $color-third;\r\n  }\r\n}\r\n@media (max-width: 900px) {\r\n  .card {\r\n    grid-template-columns: 1fr 1fr 1fr 2fr;\r\n  }\r\n}\r\n@media (max-width: 790px) {\r\n  .random-game__image {\r\n    width: 150px;\r\n  }\r\n  .random-game__name,\r\n  .quiz__score,\r\n  .card__name {\r\n    font-size: 23px;\r\n  }\r\n  .card__genre {\r\n    font-size: 18px;\r\n  }\r\n  .card__description,\r\n  .answer__text {\r\n    font-size: 15px;\r\n  }\r\n}\r\n@media (max-width: 750px) {\r\n  .quiz__header {\r\n    margin-bottom: 20px;\r\n    & .menu__list {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 530px) {\r\n  .random-game {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    padding-bottom: 40px;\r\n  }\r\n  .random-game__image {\r\n    width: 200px;\r\n  }\r\n  .random-game__inner {\r\n    width: 100%;\r\n  }\r\n  .quiz {\r\n    grid-gap: 40px 15px;\r\n  }\r\n  .quiz__answers,\r\n  .quiz__game-details {\r\n    grid-column: 1/5;\r\n  }\r\n  .card {\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 2fr;\r\n  }\r\n  .card__image {\r\n    grid-column: 1/5;\r\n    grid-row: 1/2;\r\n    max-height: 150px;\r\n    margin-left: 0;\r\n    margin: 0 auto;\r\n  }\r\n  .card__name {\r\n    grid-column: 1/5;\r\n    grid-row: 2/3;\r\n  }\r\n  .card__genre {\r\n    grid-column: 1/5;\r\n    grid-row: 3/4;\r\n  }\r\n\r\n  .card__player {\r\n    grid-column: 1/5;\r\n    grid-row: 4/5;\r\n  }\r\n  .card__description {\r\n    grid-column: 1/5;\r\n    grid-row: 5/6;\r\n  }\r\n}\r\n@media (max-width: 404px) {\r\n  .card {\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 2fr;\r\n  }\r\n  .card__image {\r\n    grid-column: 1/5;\r\n    grid-row: 1/2;\r\n    max-height: 150px;\r\n    margin-left: 0;\r\n    margin: 0 auto;\r\n  }\r\n  .card__name {\r\n    grid-column: 1/5;\r\n    grid-row: 2/3;\r\n  }\r\n  .card__genre {\r\n    grid-column: 1/5;\r\n    grid-row: 3/4;\r\n  }\r\n\r\n  .card__player {\r\n    grid-column: 1/5;\r\n    grid-row: 4/5;\r\n  }\r\n  .card__description {\r\n    grid-column: 1/5;\r\n    grid-row: 5/6;\r\n  }\r\n}\r\n","$color-green: #00bc8c;\r\n$color-shadow: #000;\r\n\r\n$background-gradiend: #1e1c1c;\r\n$color-second: #0249c7;\r\n$color-third: #ff764b;\r\n$background-card: #242731;\r\n$background-timeline: #353946;\r\n$background-color: #16171d;\r\n\r\n$color-text: white;\r\n",".results {\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  &__inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 30px;\r\n    flex-grow: 1;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 50px;\r\n  }\r\n\r\n  &__subtitle,\r\n  &__win {\r\n    font-size: 20px;\r\n  }\r\n  &__image {\r\n    flex: 0 0 40%;\r\n    width: 200px;\r\n  }\r\n}\r\n@media (max-width: 639px) {\r\n  .results {\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    &__title {\r\n      font-size: 40px;\r\n    }\r\n    &__image {\r\n      width: 90%;\r\n    }\r\n  }\r\n}\r\n",".gallery {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n\r\n  &__card {\r\n    padding: 15px;\r\n    border-radius: 15px;\r\n  }\r\n\r\n  &__list {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-template-rows: repeat(6, 1fr);\r\n    grid-gap: 20px;\r\n  }\r\n}\r\n\r\n.item {\r\n  position: relative;\r\n  cursor: pointer;\r\n\r\n  aspect-ratio: 1;\r\n  overflow: hidden;\r\n\r\n  &__name {\r\n    position: absolute;\r\n    font-size: 20px;\r\n    max-width: 80%;\r\n    top: 0;\r\n    left: 10%;\r\n    z-index: 2;\r\n    transition: 1s;\r\n    opacity: 0;\r\n  }\r\n\r\n  &__image {\r\n    object-fit: cover;\r\n    width: 280px;\r\n\r\n    border-radius: 15px;\r\n    transition: 1s;\r\n    aspect-ratio: 1;\r\n  }\r\n\r\n  &:hover {\r\n    & .item__image {\r\n      filter: brightness(30%);\r\n    }\r\n\r\n    & .item__name {\r\n      opacity: 1;\r\n      transform: translateY(-50%);\r\n      top: 50%;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .item__name {\r\n    font-size: 16px;\r\n  }\r\n}\r\n@media (max-width: 750px) {\r\n  .gallery__list {\r\n    grid-gap: 15px;\r\n  }\r\n}\r\n\r\n@media (max-width: 540px) {\r\n  .item__name {\r\n    font-size: 14px;\r\n  }\r\n  .gallery__list {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(12, 1fr);\r\n  }\r\n}\r\n@media (max-width: 450px) {\r\n  .gallery__list {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(18, 1fr);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/audio/dendy/dendy1.mp3":
/*!*******************************************!*\
  !*** ./src/assets/audio/dendy/dendy1.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dendy1.mp3";

/***/ }),

/***/ "./src/assets/audio/dendy/dendy2.mp3":
/*!*******************************************!*\
  !*** ./src/assets/audio/dendy/dendy2.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dendy2.mp3";

/***/ }),

/***/ "./src/assets/audio/dendy/dendy3.mp3":
/*!*******************************************!*\
  !*** ./src/assets/audio/dendy/dendy3.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dendy3.mp3";

/***/ }),

/***/ "./src/assets/audio/dendy/dendy4.mp3":
/*!*******************************************!*\
  !*** ./src/assets/audio/dendy/dendy4.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dendy4.mp3";

/***/ }),

/***/ "./src/assets/audio/dendy/dendy5.mp3":
/*!*******************************************!*\
  !*** ./src/assets/audio/dendy/dendy5.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dendy5.mp3";

/***/ }),

/***/ "./src/assets/audio/dendy/dendy6.mp3":
/*!*******************************************!*\
  !*** ./src/assets/audio/dendy/dendy6.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dendy6.mp3";

/***/ }),

/***/ "./src/assets/audio/lose.mp3":
/*!***********************************!*\
  !*** ./src/assets/audio/lose.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lose.mp3";

/***/ }),

/***/ "./src/assets/audio/mobile/mobile1.mp3":
/*!*********************************************!*\
  !*** ./src/assets/audio/mobile/mobile1.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mobile1.mp3";

/***/ }),

/***/ "./src/assets/audio/mobile/mobile2.mp3":
/*!*********************************************!*\
  !*** ./src/assets/audio/mobile/mobile2.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mobile2.mp3";

/***/ }),

/***/ "./src/assets/audio/mobile/mobile3.mp3":
/*!*********************************************!*\
  !*** ./src/assets/audio/mobile/mobile3.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mobile3.mp3";

/***/ }),

/***/ "./src/assets/audio/mobile/mobile4.mp3":
/*!*********************************************!*\
  !*** ./src/assets/audio/mobile/mobile4.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mobile4.mp3";

/***/ }),

/***/ "./src/assets/audio/mobile/mobile5.mp3":
/*!*********************************************!*\
  !*** ./src/assets/audio/mobile/mobile5.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mobile5.mp3";

/***/ }),

/***/ "./src/assets/audio/mobile/mobile6.mp3":
/*!*********************************************!*\
  !*** ./src/assets/audio/mobile/mobile6.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mobile6.mp3";

/***/ }),

/***/ "./src/assets/audio/pc/pc1.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/pc/pc1.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pc1.mp3";

/***/ }),

/***/ "./src/assets/audio/pc/pc2.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/pc/pc2.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pc2.mp3";

/***/ }),

/***/ "./src/assets/audio/pc/pc3.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/pc/pc3.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pc3.mp3";

/***/ }),

/***/ "./src/assets/audio/pc/pc4.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/pc/pc4.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pc4.mp3";

/***/ }),

/***/ "./src/assets/audio/pc/pc5.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/pc/pc5.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pc5.mp3";

/***/ }),

/***/ "./src/assets/audio/pc/pc6.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/pc/pc6.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pc6.mp3";

/***/ }),

/***/ "./src/assets/audio/ps1/psOne1.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps1/psOne1.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psOne1.mp3";

/***/ }),

/***/ "./src/assets/audio/ps1/psOne2.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps1/psOne2.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psOne2.mp3";

/***/ }),

/***/ "./src/assets/audio/ps1/psOne3.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps1/psOne3.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psOne3.mp3";

/***/ }),

/***/ "./src/assets/audio/ps1/psOne4.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps1/psOne4.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psOne4.mp3";

/***/ }),

/***/ "./src/assets/audio/ps1/psOne5.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps1/psOne5.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psOne5.mp3";

/***/ }),

/***/ "./src/assets/audio/ps1/psOne6.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps1/psOne6.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psOne6.mp3";

/***/ }),

/***/ "./src/assets/audio/ps2/psTwo1.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps2/psTwo1.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psTwo1.mp3";

/***/ }),

/***/ "./src/assets/audio/ps2/psTwo2.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps2/psTwo2.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psTwo2.mp3";

/***/ }),

/***/ "./src/assets/audio/ps2/psTwo3.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps2/psTwo3.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psTwo3.mp3";

/***/ }),

/***/ "./src/assets/audio/ps2/psTwo4.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps2/psTwo4.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psTwo4.mp3";

/***/ }),

/***/ "./src/assets/audio/ps2/psTwo5.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps2/psTwo5.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psTwo5.mp3";

/***/ }),

/***/ "./src/assets/audio/ps2/psTwo6.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/ps2/psTwo6.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "psTwo6.mp3";

/***/ }),

/***/ "./src/assets/audio/sega/sega1.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/sega/sega1.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sega1.mp3";

/***/ }),

/***/ "./src/assets/audio/sega/sega2.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/sega/sega2.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sega2.mp3";

/***/ }),

/***/ "./src/assets/audio/sega/sega3.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/sega/sega3.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sega3.mp3";

/***/ }),

/***/ "./src/assets/audio/sega/sega4.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/sega/sega4.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sega4.mp3";

/***/ }),

/***/ "./src/assets/audio/sega/sega5.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/sega/sega5.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sega5.mp3";

/***/ }),

/***/ "./src/assets/audio/sega/sega6.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/sega/sega6.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sega6.mp3";

/***/ }),

/***/ "./src/assets/audio/win.mp3":
/*!**********************************!*\
  !*** ./src/assets/audio/win.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "win.mp3";

/***/ }),

/***/ "./src/assets/img/arrow-down.svg":
/*!***************************************!*\
  !*** ./src/assets/img/arrow-down.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow-down.svg";

/***/ }),

/***/ "./src/assets/img/cat.gif":
/*!********************************!*\
  !*** ./src/assets/img/cat.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cat.gif";

/***/ }),

/***/ "./src/assets/img/curtain.jpg":
/*!************************************!*\
  !*** ./src/assets/img/curtain.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "curtain.jpg";

/***/ }),

/***/ "./src/assets/img/dendy/imgdendy1.jpeg":
/*!*********************************************!*\
  !*** ./src/assets/img/dendy/imgdendy1.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgdendy1.jpeg";

/***/ }),

/***/ "./src/assets/img/dendy/imgdendy2.jpeg":
/*!*********************************************!*\
  !*** ./src/assets/img/dendy/imgdendy2.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgdendy2.jpeg";

/***/ }),

/***/ "./src/assets/img/dendy/imgdendy3.jpeg":
/*!*********************************************!*\
  !*** ./src/assets/img/dendy/imgdendy3.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgdendy3.jpeg";

/***/ }),

/***/ "./src/assets/img/dendy/imgdendy4.jpeg":
/*!*********************************************!*\
  !*** ./src/assets/img/dendy/imgdendy4.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgdendy4.jpeg";

/***/ }),

/***/ "./src/assets/img/dendy/imgdendy5.png":
/*!********************************************!*\
  !*** ./src/assets/img/dendy/imgdendy5.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgdendy5.png";

/***/ }),

/***/ "./src/assets/img/dendy/imgdendy6.png":
/*!********************************************!*\
  !*** ./src/assets/img/dendy/imgdendy6.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgdendy6.png";

/***/ }),

/***/ "./src/assets/img/github-logo.svg":
/*!****************************************!*\
  !*** ./src/assets/img/github-logo.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github-logo.svg";

/***/ }),

/***/ "./src/assets/img/home-img.png":
/*!*************************************!*\
  !*** ./src/assets/img/home-img.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home-img.png";

/***/ }),

/***/ "./src/assets/img/home-img2.png":
/*!**************************************!*\
  !*** ./src/assets/img/home-img2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home-img2.png";

/***/ }),

/***/ "./src/assets/img/logo.svg":
/*!*********************************!*\
  !*** ./src/assets/img/logo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/img/mobile/imgmobile1.png":
/*!**********************************************!*\
  !*** ./src/assets/img/mobile/imgmobile1.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgmobile1.png";

/***/ }),

/***/ "./src/assets/img/mobile/imgmobile2.jpeg":
/*!***********************************************!*\
  !*** ./src/assets/img/mobile/imgmobile2.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgmobile2.jpeg";

/***/ }),

/***/ "./src/assets/img/mobile/imgmobile3.jpeg":
/*!***********************************************!*\
  !*** ./src/assets/img/mobile/imgmobile3.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgmobile3.jpeg";

/***/ }),

/***/ "./src/assets/img/mobile/imgmobile4.jpeg":
/*!***********************************************!*\
  !*** ./src/assets/img/mobile/imgmobile4.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgmobile4.jpeg";

/***/ }),

/***/ "./src/assets/img/mobile/imgmobile5.png":
/*!**********************************************!*\
  !*** ./src/assets/img/mobile/imgmobile5.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgmobile5.png";

/***/ }),

/***/ "./src/assets/img/mobile/imgmobile6.jpeg":
/*!***********************************************!*\
  !*** ./src/assets/img/mobile/imgmobile6.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgmobile6.jpeg";

/***/ }),

/***/ "./src/assets/img/pc/imgpc1.jpeg":
/*!***************************************!*\
  !*** ./src/assets/img/pc/imgpc1.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpc1.jpeg";

/***/ }),

/***/ "./src/assets/img/pc/imgpc2.jpeg":
/*!***************************************!*\
  !*** ./src/assets/img/pc/imgpc2.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpc2.jpeg";

/***/ }),

/***/ "./src/assets/img/pc/imgpc3.jpeg":
/*!***************************************!*\
  !*** ./src/assets/img/pc/imgpc3.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpc3.jpeg";

/***/ }),

/***/ "./src/assets/img/pc/imgpc4.jpeg":
/*!***************************************!*\
  !*** ./src/assets/img/pc/imgpc4.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpc4.jpeg";

/***/ }),

/***/ "./src/assets/img/pc/imgpc5.jpeg":
/*!***************************************!*\
  !*** ./src/assets/img/pc/imgpc5.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpc5.jpeg";

/***/ }),

/***/ "./src/assets/img/pc/imgpc6.jpeg":
/*!***************************************!*\
  !*** ./src/assets/img/pc/imgpc6.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpc6.jpeg";

/***/ }),

/***/ "./src/assets/img/pixel4.png":
/*!***********************************!*\
  !*** ./src/assets/img/pixel4.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pixel4.png";

/***/ }),

/***/ "./src/assets/img/ps1/imgpsOne1.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/ps1/imgpsOne1.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsOne1.jpeg";

/***/ }),

/***/ "./src/assets/img/ps1/imgpsOne2.png":
/*!******************************************!*\
  !*** ./src/assets/img/ps1/imgpsOne2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsOne2.png";

/***/ }),

/***/ "./src/assets/img/ps1/imgpsOne3.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/ps1/imgpsOne3.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsOne3.jpeg";

/***/ }),

/***/ "./src/assets/img/ps1/imgpsOne4.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/ps1/imgpsOne4.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsOne4.jpeg";

/***/ }),

/***/ "./src/assets/img/ps1/imgpsOne5.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/ps1/imgpsOne5.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsOne5.jpeg";

/***/ }),

/***/ "./src/assets/img/ps1/imgpsOne6.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/ps1/imgpsOne6.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsOne6.jpeg";

/***/ }),

/***/ "./src/assets/img/ps2/imgpsTwo1.png":
/*!******************************************!*\
  !*** ./src/assets/img/ps2/imgpsTwo1.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsTwo1.png";

/***/ }),

/***/ "./src/assets/img/ps2/imgpsTwo2.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/ps2/imgpsTwo2.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsTwo2.jpeg";

/***/ }),

/***/ "./src/assets/img/ps2/imgpsTwo3.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/ps2/imgpsTwo3.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsTwo3.jpeg";

/***/ }),

/***/ "./src/assets/img/ps2/imgpsTwo4.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/ps2/imgpsTwo4.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsTwo4.jpeg";

/***/ }),

/***/ "./src/assets/img/ps2/imgpsTwo5.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/ps2/imgpsTwo5.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsTwo5.jpeg";

/***/ }),

/***/ "./src/assets/img/ps2/imgpsTwo6.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/ps2/imgpsTwo6.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgpsTwo6.jpeg";

/***/ }),

/***/ "./src/assets/img/rs-school-logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/img/rs-school-logo.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rs-school-logo.svg";

/***/ }),

/***/ "./src/assets/img/sega/imgsega1.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/sega/imgsega1.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgsega1.jpeg";

/***/ }),

/***/ "./src/assets/img/sega/imgsega2.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/sega/imgsega2.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgsega2.jpeg";

/***/ }),

/***/ "./src/assets/img/sega/imgsega3.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/sega/imgsega3.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgsega3.jpeg";

/***/ }),

/***/ "./src/assets/img/sega/imgsega4.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/sega/imgsega4.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgsega4.jpeg";

/***/ }),

/***/ "./src/assets/img/sega/imgsega5.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/img/sega/imgsega5.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgsega5.jpeg";

/***/ }),

/***/ "./src/assets/img/sega/imgsega6.png":
/*!******************************************!*\
  !*** ./src/assets/img/sega/imgsega6.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgsega6.png";

/***/ }),

/***/ "./src/assets/img/volume-off.svg":
/*!***************************************!*\
  !*** ./src/assets/img/volume-off.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "volume-off.svg";

/***/ }),

/***/ "./src/assets/img/volume-on.svg":
/*!**************************************!*\
  !*** ./src/assets/img/volume-on.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "volume-on.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _router_index_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/index.routes */ "./src/router/index.routes.js");
/* harmony import */ var _listeners_clickLanguageButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/clickLanguageButton */ "./src/listeners/clickLanguageButton.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/createHtmlTag */ "./src/helpers/createHtmlTag.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _listeners_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listeners/clickBurgerMenu */ "./src/listeners/clickBurgerMenu.js");








var storage = JSON.parse(localStorage.getItem("metalknock-music-quiz"));
if (storage) {
  if (!storage.hasOwnProperty("language")) {
    storage.language = "ru";
    localStorage.setItem("metalknock-music-quiz", JSON.stringify(storage));
  }
} else {
  var storageNew = {
    language: "ru"
  };
  localStorage.setItem("metalknock-music-quiz", JSON.stringify(storageNew));
}
var currentHash = window.location.hash;
if (!(currentHash === "#/" || currentHash === "#/quiz" || currentHash === "#/gallery")) {
  window.location.hash = "#/";
}
var body = document.querySelector(".body");
var wrapper = (0,_helpers_createHtmlTag__WEBPACK_IMPORTED_MODULE_4__.createHtmlTag)("div", "wrapper", body);
var header = (0,_components_header__WEBPACK_IMPORTED_MODULE_3__.createHeader)(wrapper);
var container = (0,_components_main__WEBPACK_IMPORTED_MODULE_6__.createMain)(wrapper);
var footer = (0,_components_footer__WEBPACK_IMPORTED_MODULE_5__.createFooter)(wrapper);
var burgerMenu = header.querySelector(".burger-menu");
(0,_listeners_clickBurgerMenu__WEBPACK_IMPORTED_MODULE_7__.clickBurgerMenu)(burgerMenu);
(0,_listeners_clickLanguageButton__WEBPACK_IMPORTED_MODULE_2__.clickLanguageButton)(header);
(0,_router_index_routes__WEBPACK_IMPORTED_MODULE_1__.router)(window.location.hash, container);
window.addEventListener("hashchange", function () {
  (0,_router_index_routes__WEBPACK_IMPORTED_MODULE_1__.router)(window.location.hash, container);
});
console.log("\n\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u043A\u0430\u043A \u0432\u044B \u043C\u043E\u0433\u043B\u0438 \u0437\u0430\u043C\u0435\u0442\u0438\u0442\u044C, \u044F \u0438\u0437\u043C\u0435\u043D\u0438\u043B \u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0443 \u0432\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u044B.\n\n\u0421\u0430\u043C\u043E\u043E\u0446\u0435\u043D\u043A\u0430:\n\n\u0412\u0451\u0440\u0441\u0442\u043A\u0430, \u0434\u0438\u0437\u0430\u0439\u043D, UI \u0432\u0441\u0435\u0445 \u0442\u0440\u0451\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F +60\n  \u0421\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F (\u0432\u0451\u0440\u0441\u0442\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430\u044F - \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0435 \u043E\u0442 1920\u0440\u0445 \u0434\u043E 360\u0440\u0445) +20 \n  \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u044B (\u0432\u0451\u0440\u0441\u0442\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430\u044F - \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0435 \u043E\u0442 1920\u0440\u0445 \u0434\u043E 360\u0440\u0445) +30 \n  \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438 (\u0432\u0451\u0440\u0441\u0442\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430\u044F - \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0435 \u043E\u0442 1920\u0440\u0445 \u0434\u043E 360\u0440\u0445) +10 \n\n\u0410\u0443\u0434\u0438\u043E\u043F\u043B\u0435\u0435\u0440 +30 \n  \u0443 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u043E\u0433\u043E \u0430\u0443\u0434\u0438\u043E\u043F\u043B\u0435\u0435\u0440\u0430 \u0438\u0437 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0433\u043E \u043F\u0443\u043D\u043A\u0442\u0430 \u0435\u0441\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u0438 \u0437\u0432\u0443\u043A\u0430 +30\n\n\u0412\u0435\u0440\u0445\u043D\u044F\u044F \u043F\u0430\u043D\u0435\u043B\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u044B +20\n  \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 \u0438\u0433\u0440\u044B +10\n  \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0432\u044B\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0438\u043B\u0435\u043C +10\n\n\u0411\u043B\u043E\u043A \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u043C +20\n  \u043F\u043E\u0434\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438 \u0437\u0430\u043C\u0435\u043D\u0430 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0438\u0433\u0440\u044B \u043D\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u044B (***), \u043F\u043E\u043A\u0430 \u0438\u0433\u0440\u043E\u043A \u043D\u0435 \u0432\u044B\u0431\u0435\u0440\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 +10\n  \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430 \u0432 \u0431\u043B\u043E\u043A\u0435 \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0433\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u0438\u0433\u0440\u044B +10\n\n\u0411\u043B\u043E\u043A \u0441 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C\u0438 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 (\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0438\u0433\u0440) +60\n  \u0446\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u0438\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E/\u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432 \u0440\u0430\u0437\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0440\u044F\u0434\u043E\u043C \u0441 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u0438\u0433\u0440\u044B: +10\n  \u0437\u0432\u0443\u043A\u043E\u0432\u0430\u044F \u0438\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E/\u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430: +30\n    \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430 \u0438\u0437\u0434\u0430\u044E\u0442\u0441\u044F \u0440\u0430\u0437\u043D\u044B\u0435 \u0437\u0432\u0443\u043A\u043E\u0432\u044B\u0435 \u0441\u0438\u0433\u043D\u0430\u043B\u044B: +10\n    \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430 \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u043D\u0438\u0435 \u0430\u0443\u0434\u0438\u043E\u043F\u043B\u0435\u0435\u0440\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C\u0441\u044F: +10\n    \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u0430 \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u043D\u0438\u0435 \u0430\u0443\u0434\u0438\u043E\u043F\u043B\u0435\u0435\u0440\u0430 \u0434\u043E\u043B\u0436\u043D\u043E \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F: +10\n  \u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0438\u0433\u0440\u044B \u0432 \u0431\u043B\u043E\u043A\u0435 \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C \u0438\u0433\u0440\u044B \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043D\u0435\u0439: +10\n  \u0435\u0441\u043B\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u0443\u0436\u0435 \u0434\u0430\u043D, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0438\u0433\u0440 \u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043F\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F, \u0446\u0432\u0435\u0442 \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F: +10\n\n\u0411\u043B\u043E\u043A \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C \u0438\u0433\u0440\u044B: +30\n  \u043F\u043E\u043A\u0430 \u0438\u0433\u0440\u043E\u043A \u043D\u0435 \u043A\u043B\u0438\u043A\u043D\u0443\u043B \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0438\u0433\u0440\u044B \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430, \u0432 \u0431\u043B\u043E\u043A\u0435 \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442 \u0441 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u043F\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C \u043F\u043B\u0435\u0435\u0440 \u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0433\u0440\u044B +10\n  \u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0438\u0433\u0440\u044B \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430, \u0432 \u0431\u043B\u043E\u043A\u0435 \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C \u0438\u0433\u0440\u044B \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043D\u0435\u0439 +20\n  \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0438\u0433\u0440\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442:\n    \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\n    \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \n    \u0430\u0443\u0434\u0438\u043E\u043F\u043B\u0435\u0435\u0440 \u0441 \u043C\u0443\u0437\u044B\u043A\u043E\u0439\n    \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438\u0433\u0440\u044B.\n\n\u041A\u043D\u043E\u043F\u043A\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u0432\u043E\u043F\u0440\u043E\u0441\u0443 +30\n  \u043F\u043E\u043A\u0430 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442, \u043A\u043D\u043E\u043F\u043A\u0430 \u043D\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u0430, \u043D\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u0437\u0430\u0434\u0430\u043D\u0438\u044E. \u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0438 \u043D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u0438\u043C\u0435\u0435\u0442 \u0437\u0435\u043B\u0435\u043D\u044B\u0439, \u043D\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F - \u0441\u0435\u0440\u044B\u0439 \u0446\u0432\u0435\u0442 +10\n  \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0438\u0433\u0440\u043E\u043A \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438 \u0432\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u044B +10\n  \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0430\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0431\u0430\u043B\u043B\u043E\u0432 \u0438 \u043A\u043D\u043E\u043F\u043A\u0443 \u0441 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u0441\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437 (\u0438\u043B\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E\u0431 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0438 \u0438\u0433\u0440\u044B, \u0435\u0441\u043B\u0438 \u043D\u0430\u0431\u0440\u0430\u043D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0431\u0430\u043B\u043B\u043E\u0432) +10\n\nExtra scope +20\n  \u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0434\u0432\u0430 \u044F\u0437\u044B\u043A\u0430, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u044F\u0437\u044B\u043A \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0432 local storage \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 +10\n  \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0433\u0430\u043B\u0435\u0440\u0435\u0438 \u0432\u0441\u0435\u0445 \u0438\u0433\u0440 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F c \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043E \u043D\u0438\u0445 (\u0444\u043E\u0442\u043E, \u0430\u0443\u0434\u0438\u043E, \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435, \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435) +10\n\n\u0418\u0442\u043E\u0433\u043E: 270/270\n");
})();

/******/ })()
;
//# sourceMappingURL=bundle3b07809608ed2180c9e2.js.map