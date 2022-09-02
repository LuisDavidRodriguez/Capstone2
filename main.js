"use strict";
(self["webpackChunkcapstone2"] = self["webpackChunkcapstone2"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_tvmazeApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tvmazeApi.js */ "./src/modules/tvmazeApi.js");
/* harmony import */ var _modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/involvementApi.js */ "./src/modules/involvementApi.js");
/* harmony import */ var _modules_moviesManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/moviesManager.js */ "./src/modules/moviesManager.js");
/* harmony import */ var _modules_generateModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/generateModal.js */ "./src/modules/generateModal.js");
/* harmony import */ var _modules_paginator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/paginator.js */ "./src/modules/paginator.js");
/* harmony import */ var _modules_getShowData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/getShowData.js */ "./src/modules/getShowData.js");
/* harmony import */ var _modules_getComments_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/getComments.js */ "./src/modules/getComments.js");








var moviesContainer = document.getElementById('moviesSection');
var modalGenerator = document.getElementById('modal-generator');
var moviesManager = new _modules_moviesManager_js__WEBPACK_IMPORTED_MODULE_3__["default"](moviesContainer, _modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_2__.addLike); // const submitBtn = document.getElementById('submit-btn');

_modules_tvmazeApi_js__WEBPACK_IMPORTED_MODULE_1__.getShows().then(function (movies) {
  moviesManager.movies = movies;
  _modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_2__.getLikesHome().then(function (likes) {
    moviesManager.likes = likes;
    moviesManager.pageStep = 35;
    moviesManager.display();
    (0,_modules_paginator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(moviesManager);
  });
});
moviesContainer.addEventListener('click', function (event) {
  // we must look for the click but in the parent container the movieContainer
  // because when you click in the movie you click also in the image or text or title etc
  // so using the path and then filtering that path against a regex we check if the
  // click was in a movie container
  // then i will check if the array is empty the click did not happend on a movie.
  var arrMovie = event.path.filter(function (item) {
    return /movieContainer-\d+/.test(item.id);
  });
  /*
   * inside of each movieContainer we have 2 icons that will be clickable
   * we have a footer too so I dont want to open the modal that
   * if the user clicks either on an icon or the footer with the class movie__footer
   */

  if (/starBtn-\d+/.test(event.target.id) || /likeBtn-\d+/.test(event.target.id) || event.target.classList.contains('movie__footer')) {
    return;
  }

  if (arrMovie.length !== 0) {
    // get the id of the movie
    var movieId = arrMovie[0].id;
    var id = movieId.match(/\d+$/)[0]; // call your modal here my friend
    // openModal(id);    or openModal(parseInt(id, 10)) to assure tha it is a num.

    (0,_modules_generateModal_js__WEBPACK_IMPORTED_MODULE_4__["default"])(id, _modules_getShowData_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_getComments_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
  }
}); // An event listener for the close modal button

modalGenerator.addEventListener('click', function (event) {
  if (event.target.classList.contains('close-modal') || event.target.classList.contains('modal-container')) {
    var modalContainer = document.querySelector('.modal-container');
    modalContainer.remove();
  }
});

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
var GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

var addComment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(username, comment, itemId) {
    var body, headers, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = JSON.stringify({
              item_id: "item".concat(itemId),
              username: username,
              comment: comment
            });
            headers = {
              'Content-type': 'application/json; charset=UTF-8'
            };
            _context.next = 4;
            return fetch("".concat(BASE_URL).concat(GAME_ID, "/comments"), {
              method: 'POST',
              body: body,
              headers: headers
            });

          case 4:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addComment(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);

/***/ }),

/***/ "./src/modules/generateModal.js":
/*!**************************************!*\
  !*** ./src/modules/generateModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateCommentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateCommentsCounter.js */ "./src/modules/updateCommentsCounter.js");
/* harmony import */ var _printComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printComments.js */ "./src/modules/printComments.js");
/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addComment.js */ "./src/modules/addComment.js");



var BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
var GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

var generateModal = function generateModal(id, getShowDataFn, getCommentsFn) {
  // Grabs the modal generator
  var modalGenerator = document.querySelector('#modal-generator'); // Creates all elements for the modal

  var modalContainer = document.createElement('div');
  var commentsModal = document.createElement('div');
  var closeBtn = document.createElement('button');
  var img = document.createElement('img');
  var title = document.createElement('h1');
  var summary = document.createElement('p');
  var ulDetails = document.createElement('ul');
  var genres = document.createElement('li');
  var premiered = document.createElement('li');
  var status = document.createElement('li');
  var url = document.createElement('a');
  var h2Comments = document.createElement('h2');
  var ulComments = document.createElement('ul'); // Here should be generated the comments from the API
  // run a loop and create a li for each comment

  var h2AddComment = document.createElement('h2');
  var form = document.createElement('form');
  var nameInput = document.createElement('input');
  var commentTextArea = document.createElement('textarea');
  var submitBtn = document.createElement('button'); // Adds classes to the elements

  modalContainer.classList.add('modal-container');
  commentsModal.classList.add('comments-modal');
  closeBtn.classList.add('close-modal');
  ulDetails.classList.add('details');
  ulComments.classList.add('comments');
  submitBtn.classList.add("".concat(id));
  var promiseImg = getShowDataFn(id);
  promiseImg.then(function (showData) {
    // Adds attributes to the elements
    img.src = showData.image.medium;
    url.href = showData.url;
  });
  url.target = '_blank';
  url.rel = 'noopener noreferrer';
  form.setAttribute('action', "".concat(BASE_URL).concat(GAME_ID, "/comments"));
  form.setAttribute('method', 'POST');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'username');
  nameInput.setAttribute('placeholder', 'Your name');
  nameInput.setAttribute('required', 'required');
  nameInput.id = 'name-input';
  commentTextArea.setAttribute('name', 'comment');
  commentTextArea.setAttribute('placeholder', 'Your comment');
  commentTextArea.setAttribute('required', 'required');
  commentTextArea.id = 'comment-textarea';
  submitBtn.setAttribute('type', 'button');
  submitBtn.id = 'submit-btn';
  var promise = getShowDataFn(id);
  promise.then(function (showData) {
    // Creates text nodes
    var closeBtnText = document.createTextNode('X');
    var titleText = document.createTextNode("".concat(showData.name));
    summary.innerHTML = showData.summary;
    var genresText = document.createTextNode("Genre: ".concat(showData.genres[0]));
    var premieredText = document.createTextNode("Premiered: ".concat(showData.premiered));
    var statusText = document.createTextNode("Status: ".concat(showData.status));
    var urlText = document.createTextNode('More information');
    var h2CommentsText = document.createTextNode('Comments (0)');
    var h2AddCommentText = document.createTextNode('Add a comment');
    var submitBtnText = document.createTextNode('Submit'); // Appends text nodes to the elements

    closeBtn.appendChild(closeBtnText);
    title.appendChild(titleText);
    ulDetails.append(genres, premiered, status, url);
    genres.appendChild(genresText);
    premiered.appendChild(premieredText);
    status.appendChild(statusText);
    url.appendChild(urlText);
    h2Comments.appendChild(h2CommentsText);
    h2AddComment.appendChild(h2AddCommentText);
    submitBtn.appendChild(submitBtnText);
  }); // Appends elements to the modal

  commentsModal.append(closeBtn, img, title, summary, ulDetails, h2Comments, ulComments, h2AddComment, form);
  form.append(nameInput, commentTextArea, submitBtn);
  modalContainer.appendChild(commentsModal); // Appends modalContainer to the modalGenerator

  modalGenerator.appendChild(modalContainer); // fetch and prints comments from the API

  (0,_printComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(getCommentsFn, id, ulComments, _updateCommentsCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"], h2Comments); // Event listener for the submit button

  submitBtn.addEventListener('click', function () {
    if (nameInput.value === '' || commentTextArea.value === '') {
      nameInput.classList.add('empty-input');
      commentTextArea.classList.add('empty-input');
      setTimeout(function () {
        nameInput.classList.remove('empty-input');
        commentTextArea.classList.remove('empty-input');
      }, 1000);
      return;
    }

    var nameValue = nameInput.value;
    var commentValue = commentTextArea.value;
    nameInput.value = '';
    commentTextArea.value = '';
    (0,_addComment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(nameValue, commentValue, id).then(function () {
      (0,_printComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(getCommentsFn, id, ulComments, _updateCommentsCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"], h2Comments);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateModal);

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
var GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

var getComments = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
    var result, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(BASE_URL).concat(GAME_ID, "/comments?item_id=item").concat(id));

          case 2:
            result = _context.sent;
            _context.next = 5;
            return result.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getComments(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);

/***/ }),

/***/ "./src/modules/getShowData.js":
/*!************************************!*\
  !*** ./src/modules/getShowData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BASE_URL = 'https://api.tvmaze.com/shows'; // fetch a single show by id

var getShowData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
    var result, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("".concat(BASE_URL, "/").concat(id));

          case 3:
            result = _context.sent;
            _context.next = 6;
            return result.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getShowData(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShowData);

/***/ }),

/***/ "./src/modules/involvementApi.js":
/*!***************************************!*\
  !*** ./src/modules/involvementApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getLikesHome": () => (/* binding */ getLikesHome)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
var GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

var getLikes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var result, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(BASE_URL).concat(GAME_ID, "/likes"));

          case 2:
            result = _context.sent;
            _context.next = 5;
            return result.json();

          case 5:
            data = _context.sent;
            console.log(data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getLikes() {
    return _ref.apply(this, arguments);
  };
}();

var getLikesHome = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var result, data, status;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("".concat(BASE_URL).concat(GAME_ID, "/likes"));

          case 3:
            result = _context2.sent;
            _context2.next = 6;
            return result.json();

          case 6:
            data = _context2.sent;
            status = result.status;

            if (!(status !== 200)) {
              _context2.next = 10;
              break;
            }

            throw new Error('The pitition did not return 200');

          case 10:
            return _context2.abrupt("return", data);

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", []);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function getLikesHome() {
    return _ref2.apply(this, arguments);
  };
}();

var addLike = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
    var body, headers, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = JSON.stringify({
              item_id: id
            });
            headers = {
              'Content-type': 'application/json; charset=UTF-8'
            };
            _context3.next = 4;
            return fetch("".concat(BASE_URL).concat(GAME_ID, "/likes"), {
              method: 'POST',
              body: body,
              headers: headers
            });

          case 4:
            result = _context3.sent;
            console.log(result);
            return _context3.abrupt("return", result);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function addLike(_x) {
    return _ref3.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/modules/moviesManager.js":
/*!**************************************!*\
  !*** ./src/modules/moviesManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoviesManager)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _parentContainer = /*#__PURE__*/new WeakMap();

var _callBackAddLikeAsync = /*#__PURE__*/new WeakMap();

var _totalItems = /*#__PURE__*/new WeakMap();

var _actualPage = /*#__PURE__*/new WeakMap();

var _rangeDisplayed = /*#__PURE__*/new WeakMap();

var _itemsDisplayed = /*#__PURE__*/new WeakMap();

var _totalPages = /*#__PURE__*/new WeakMap();

var _pageStep = /*#__PURE__*/new WeakMap();

var _movies = /*#__PURE__*/new WeakMap();

var _likes = /*#__PURE__*/new WeakMap();

var _paginate = /*#__PURE__*/new WeakSet();

var _createMovie = /*#__PURE__*/new WeakSet();

var _createMovieBody = /*#__PURE__*/new WeakSet();

var _createFooter = /*#__PURE__*/new WeakSet();

/* eslint-disable max-len */

/* eslint-disable no-plusplus */
var MoviesManager = /*#__PURE__*/function () {
  function MoviesManager(container, callBackAddLikeAsync) {
    _classCallCheck(this, MoviesManager);

    _classPrivateMethodInitSpec(this, _createFooter);

    _classPrivateMethodInitSpec(this, _createMovieBody);

    _classPrivateMethodInitSpec(this, _createMovie);

    _classPrivateMethodInitSpec(this, _paginate);

    _classPrivateFieldInitSpec(this, _parentContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _callBackAddLikeAsync, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _totalItems, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _actualPage, {
      writable: true,
      value: 1
    });

    _classPrivateFieldInitSpec(this, _rangeDisplayed, {
      writable: true,
      value: ''
    });

    _classPrivateFieldInitSpec(this, _itemsDisplayed, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _totalPages, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _pageStep, {
      writable: true,
      value: 30
    });

    _classPrivateFieldInitSpec(this, _movies, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _likes, {
      writable: true,
      value: []
    });

    _classPrivateFieldSet(this, _parentContainer, container);

    _classPrivateFieldSet(this, _callBackAddLikeAsync, callBackAddLikeAsync);
  }

  _createClass(MoviesManager, [{
    key: "movies",
    set: function set(movies) {
      _classPrivateFieldSet(this, _movies, movies);

      _classPrivateFieldSet(this, _totalItems, movies.length);
    }
  }, {
    key: "likes",
    set: function set(likes) {
      _classPrivateFieldSet(this, _likes, likes);
    }
  }, {
    key: "pageStep",
    set: function set(step) {
      _classPrivateFieldSet(this, _pageStep, step);
    }
  }, {
    key: "parentContainer",
    get: function get() {
      return _classPrivateFieldGet(this, _parentContainer);
    }
  }, {
    key: "totalItems",
    get: function get() {
      return _classPrivateFieldGet(this, _totalItems);
    }
  }, {
    key: "totalPages",
    get: function get() {
      return _classPrivateFieldGet(this, _totalPages);
    }
  }, {
    key: "actualPage",
    get: function get() {
      return _classPrivateFieldGet(this, _actualPage);
    }
  }, {
    key: "itemsDisplayed",
    get: function get() {
      return _classPrivateFieldGet(this, _itemsDisplayed);
    }
  }, {
    key: "rangeDisplayed",
    get: function get() {
      return _classPrivateFieldGet(this, _rangeDisplayed);
    }
  }, {
    key: "getArrPages",
    value: /*#__PURE__*/_regeneratorRuntime().mark(function getArrPages() {
      var i;
      return _regeneratorRuntime().wrap(function getArrPages$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 1;

            case 1:
              if (!(i <= _classPrivateFieldGet(this, _totalPages))) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return i;

            case 4:
              i++;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, getArrPages, this);
    })
  }, {
    key: "display",
    value: function display() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var arr = _classPrivateMethodGet(this, _paginate, _paginate2).call(this, page);

      arr.forEach(function (item) {
        var movie = _classPrivateMethodGet(_this, _createMovie, _createMovie2).call(_this, item);

        _classPrivateFieldGet(_this, _parentContainer).append(movie);
      });
    }
  }, {
    key: "clearParent",
    value: function clearParent() {
      _classPrivateFieldGet(this, _parentContainer).textContent = '';
    }
  }]);

  return MoviesManager;
}();

function _paginate2() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var initialIndex = 0;
  var finalIndex = 0;
  finalIndex = _classPrivateFieldGet(this, _pageStep) * page;
  initialIndex = finalIndex - _classPrivateFieldGet(this, _pageStep); // in case final index is out of the boundaries of the arr

  if (finalIndex > _classPrivateFieldGet(this, _totalItems)) {
    finalIndex = _classPrivateFieldGet(this, _totalItems);
  }

  _classPrivateFieldSet(this, _actualPage, page);

  _classPrivateFieldSet(this, _itemsDisplayed, finalIndex - initialIndex);

  _classPrivateFieldSet(this, _rangeDisplayed, "".concat(initialIndex, " to ").concat(finalIndex));

  _classPrivateFieldSet(this, _totalPages, Math.ceil(_classPrivateFieldGet(this, _totalItems) / _classPrivateFieldGet(this, _pageStep)) || 0); // console.log('paginate from: ', initialIndex, 'to: ', finalIndex, 'actual page: ', this.#actualPage);


  return _classPrivateFieldGet(this, _movies).slice(initialIndex, finalIndex);
}

function _createMovie2(data) {
  var movieContainer = document.createElement('article');
  var img = document.createElement('img');

  var movieBody = _classPrivateMethodGet(this, _createMovieBody, _createMovieBody2).call(this, data);

  var footerMovie = _classPrivateMethodGet(this, _createFooter, _createFooter2).call(this, data.id);

  movieContainer.className = 'movie';
  img.className = 'movie__img';
  img.src = data.image.medium;
  movieContainer.id = "movieContainer-".concat(data.id);
  movieContainer.append(img, movieBody, footerMovie);
  return movieContainer;
}

function _createMovieBody2(_ref) {
  var name = _ref.name,
      summary = _ref.summary;
  var movieBody = document.createElement('section');
  var title = document.createElement('h3');
  var description = document.createElement('p');
  movieBody.className = 'movie__body';
  title.className = 'movie__body__title';
  description.className = 'movie__body__description';
  /*
    the api delivers inside the summary some html items
    <p><b>Under the Dome</b> is the story of a small town that is su
    I will delete them well I will keep the <b> tags, I dont like to much cause
    i must use innerHtml
  */

  summary = summary.replace(/<[^b]>|<\/[^b]>/g, '');
  title.textContent = name;
  description.innerHTML = "".concat(summary.substring(0, 70), "...");
  movieBody.append(title, description);
  return movieBody;
}

function _createFooter2(id) {
  var _this2 = this;

  // eslint-disable-next-line camelcase
  var arrLikes = _classPrivateFieldGet(this, _likes).filter(function (_ref2) {
    var item_id = _ref2.item_id;
    return item_id === id;
  });

  var footer = document.createElement('section');
  var auxiliarDiv1 = document.createElement('div');
  var auxiliarDiv2 = document.createElement('div');
  var starInfo = document.createElement('span');
  var likeInfo = document.createElement('span');
  var starIcon = document.createElement('i');
  var likeIcon = document.createElement('i');
  footer.className = 'movie__footer';
  starIcon.className = 'fa-solid fa-star star-btn';
  likeIcon.className = 'fa-solid fa-heart like-btn';
  starInfo.className = 'info'; // starInfo.id = 'starInfo';
  // likeInfo.id = 'likeInfo';

  starIcon.id = "starBtn-".concat(id);
  likeIcon.id = "likeBtn-".concat(id); // check if the movie has info about likes first

  if (arrLikes.length !== 0) {
    var _arrLikes$ = arrLikes[0],
        likes = _arrLikes$.likes,
        stars = _arrLikes$.stars;
    starInfo.textContent = stars;
    likeInfo.textContent = likes;
  }

  likeIcon.addEventListener('click', function () {
    likeIcon.classList.add('fa-beat', 'active');
    likeIcon.style = '--fa-animation-duration: 0.5s;';

    var promise = _classPrivateFieldGet(_this2, _callBackAddLikeAsync).call(_this2, id);

    promise.then(function (result) {
      var status = result.status;

      if (status === 201) {
        var previousLikes = parseInt(likeInfo.textContent, 10) || 0;
        likeInfo.textContent = 'added!';
        setTimeout(function () {
          likeInfo.textContent = previousLikes + 1;
        }, 1200);
      }
    });
    promise["finally"](function () {
      likeIcon.classList.remove('fa-beat', 'active');
      likeIcon.style = '';
    });
  });
  auxiliarDiv1.append(starInfo, starIcon);
  auxiliarDiv2.append(likeInfo, likeIcon);
  footer.append(auxiliarDiv2);
  return footer;
}



/***/ }),

/***/ "./src/modules/paginator.js":
/*!**********************************!*\
  !*** ./src/modules/paginator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _involvementApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementApi.js */ "./src/modules/involvementApi.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-use-before-define */

/* eslint-disable no-plusplus */

var paginatorInfo = document.getElementById('paginatorInfo');
var paginatorList = document.getElementById('paginatorList');
var text1 = document.createElement('span');
var text2 = document.createElement('span');
paginatorInfo.append(text1, text2);

var createPages = function createPages(moviesManager) {
  var arrPages = _toConsumableArray(moviesManager.getArrPages());

  text1.textContent = "page: ".concat(moviesManager.actualPage, ", showing ").concat(moviesManager.itemsDisplayed, " titles");
  text2.textContent = "from ".concat(moviesManager.rangeDisplayed, ". Total titles: ").concat(moviesManager.totalItems);
  arrPages.forEach(function (page) {
    var li = document.createElement('li');
    li.className = 'li-page';
    li.textContent = page;
    li.addEventListener('click', function () {
      pageClickHandler(moviesManager, li, page);
    });
    paginatorList.append(li);
  });
  var first = paginatorList.querySelectorAll('li')[0];
  first.classList.add('active');
};

var pageClickHandler = function pageClickHandler(moviesManager, li, page) {
  var parentContainer = moviesManager.parentContainer; // select the previous element with the class active and remove it

  var arrItems = paginatorList.querySelectorAll('.active');
  arrItems.forEach(function (item) {
    return item.classList.remove('active');
  });
  li.classList.add('active'); // every time the user change a page i want to get again the likes in case other
  // users have added more likes

  _involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.getLikesHome().then(function (likes) {
    moviesManager.likes = likes;
  });
  runAnimation(parentContainer).then(function () {
    window.scrollTo(0, 0);
    moviesManager.clearParent();
    moviesManager.display(page);
    text1.textContent = "page: ".concat(moviesManager.actualPage, ", showing ").concat(moviesManager.itemsDisplayed, " titles");
    text2.textContent = "from ".concat(moviesManager.rangeDisplayed, ". Total titles: ").concat(moviesManager.totalItems);
    window.history.pushState({
      prevUrl: window.location.href
    }, 'title', "page-".concat(page));
  });
};

var runAnimation = function runAnimation(parentContainer) {
  // add a class to all the cards
  var movies = parentContainer.querySelectorAll('.movie');
  movies.forEach(function (movie) {
    return movie.classList.add('animationOut');
  }); // once the animation is done we resolve the promise
  // I just want to practise with promises jajajajajajajaja
  // it is not nessesarly at all

  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 500);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPages);

/***/ }),

/***/ "./src/modules/printComments.js":
/*!**************************************!*\
  !*** ./src/modules/printComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var printComments = function printComments(commentsPromise, id, commentsContainer, callback, commentsTitle) {
  commentsPromise(id).then(function (comments) {
    if (comments.error) {
      var li = document.createElement('li');
      var liText = document.createTextNode('No comments yet, be the first!');
      li.appendChild(liText);
      commentsContainer.appendChild(li);
      return 0;
    }

    var commentsCounter = 0;
    commentsContainer.innerHTML = '';
    comments.forEach(function (comment) {
      commentsCounter += 1;
      var li = document.createElement('li');
      var liText = document.createTextNode("".concat(comment.username, " on ").concat(comment.creation_date, ": ").concat(comment.comment));
      li.classList.add('comment');
      li.appendChild(liText);
      commentsContainer.appendChild(li);
    });
    callback(commentsCounter, commentsTitle);
    return commentsCounter;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printComments);

/***/ }),

/***/ "./src/modules/tvmazeApi.js":
/*!**********************************!*\
  !*** ./src/modules/tvmazeApi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getShows": () => (/* binding */ getShows)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BASE_URL = 'https://api.tvmaze.com/shows';

var getShows = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var result, data, status;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(BASE_URL);

          case 3:
            result = _context.sent;
            _context.next = 6;
            return result.json();

          case 6:
            data = _context.sent;
            status = result.status;

            if (!(status !== 200)) {
              _context.next = 10;
              break;
            }

            throw new Error('The pitition did not return 200');

          case 10:
            return _context.abrupt("return", data);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", []);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function getShows() {
    return _ref.apply(this, arguments);
  };
}(); // eslint-disable-next-line import/prefer-default-export




/***/ }),

/***/ "./src/modules/updateCommentsCounter.js":
/*!**********************************************!*\
  !*** ./src/modules/updateCommentsCounter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var updateCommentsCounter = function updateCommentsCounter(commentsNumber, commentsTitle) {
  var commentsTitleText = document.createTextNode("Comments (".concat(commentsNumber, ")"));
  commentsTitle.replaceChild(commentsTitleText, commentsTitle.firstChild);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCommentsCounter);

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nul {\n  padding-inline-start: 0;\n  list-style: none;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\na {\n  text-decoration: none;\n  word-wrap: break-word;\n}\n\n::before {\n  box-sizing: border-box;\n}\n\n::after {\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  background-color: #003049;\n  height: 80px;\n}\nheader .logo {\n  margin-left: 5%;\n  display: inline-block;\n  height: 80%;\n}\n\nheader .menu {\n  display: flex;\n  margin-left: 5%;\n  height: 100%;\n}\nheader .menu ul {\n  display: flex;\n}\nheader .menu ul a {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  padding: 5px;\n  color: #eae2b7;\n  font-family: \"Roboto\", sans-serif;\n  transition: all 0.5s linear;\n}\nheader .menu ul a:hover {\n  background-color: #d62828;\n}\n\nfooter {\n  font-family: \"Roboto\", sans-serif;\n  height: 80px;\n  background-color: #003049;\n  color: #eae2b7;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding-left: 5%;\n}\nfooter a {\n  font-weight: bold;\n  color: #fcbf49;\n}\n\n#modal-generator .modal-container {\n  font-family: \"Roboto\", sans-serif;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.6);\n}\n#modal-generator .modal-container .comments-modal {\n  background-color: #eae2b7;\n  margin: 5% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n#modal-generator .modal-container .comments-modal .close-modal {\n  position: absolute;\n  top: 15%;\n  right: 20%;\n  padding: 0.5rem 0.8rem;\n  border: none;\n  background-color: #fcbf49;\n  color: #003049;\n  font-weight: bolder;\n  border-radius: 5px;\n  font-size: larger;\n}\n#modal-generator .modal-container .comments-modal img {\n  width: 50%;\n}\n#modal-generator .modal-container .comments-modal ul.details {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  row-gap: 1rem;\n  column-gap: 5rem;\n}\n#modal-generator .modal-container .comments-modal ul.comments {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n#modal-generator .modal-container .comments-modal form {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n#modal-generator .modal-container h1,\n#modal-generator .modal-container h2 {\n  font-family: \"Roboto Slab\", serif;\n}\n#modal-generator .modal-container .empty-input {\n  outline: 3px solid #d62828;\n}\n\n.movies-section {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 30px 30px;\n  margin: 30px 10px;\n  justify-items: center;\n}\n@media screen and (min-width: 480px) {\n  .movies-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (min-width: 768px) {\n  .movies-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (min-width: 960px) {\n  .movies-section {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media screen and (min-width: 1200px) {\n  .movies-section {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n\n.movie {\n  width: 250px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 2px 2px 5px 2px #d62828;\n  transition: transform 0.8s linear;\n  border-radius: 5px 5px 30px 5px;\n}\n.movie:hover {\n  cursor: pointer;\n  transform: scale(1.01);\n}\n.movie.animationOut {\n  transform: translateX(-1500px);\n}\n.movie__img {\n  display: block;\n  min-height: 60%;\n  padding: 5px;\n}\n.movie__body {\n  height: 30%;\n  padding: 5px;\n  text-align: center;\n}\n.movie__body__title {\n  color: #003049;\n  font-family: \"Roboto Slab\", serif;\n}\n.movie__body__description {\n  margin-top: 5px;\n  font-family: \"Roboto\", sans-serif;\n  color: #004163;\n}\n.movie__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 10%;\n  width: 100%;\n  background-color: rgba(214, 40, 40, 0.3);\n  border-radius: 0 0 30px 5px;\n}\n.movie__footer:hover {\n  cursor: default;\n}\n.movie__footer div {\n  width: 100%;\n  pointer-events: none;\n}\n.movie__footer div span {\n  text-align: end;\n  display: inline-block;\n  width: 42%;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0 10px 0 0;\n  color: #d62828;\n  font-weight: 600;\n  transition: all 0.2s ease-in-out;\n}\n.movie__footer div .like-btn {\n  transition: all 0.5s ease-in-out;\n  pointer-events: auto;\n}\n.movie__footer div .like-btn.active {\n  color: #d62828;\n  cursor: pointer;\n}\n.movie__footer div .like-btn:hover {\n  color: #d62828;\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.paginator {\n  margin: 10px;\n  height: 40px;\n  background-color: #eae2b7;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.7em;\n  display: flex;\n  align-items: center;\n}\n.paginator__info {\n  margin: 0 10px;\n}\n.paginator__info > span {\n  display: block;\n}\n.paginator__list {\n  height: 100%;\n  display: flex;\n}\n.paginator .li-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 5px;\n  min-width: 30px;\n  transition: all 0.5s linear;\n}\n.paginator .li-page.active {\n  background-color: #f77f00;\n}\n.paginator .li-page:hover {\n  background-color: #f77f00;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/2_base/_config.scss","webpack://./src/styles/main.scss","webpack://./src/styles/3_layout/_header.scss","webpack://./src/styles/1_abstracts/_variables.scss","webpack://./src/styles/3_layout/_footer.scss","webpack://./src/styles/3_layout/_comments-modal.scss","webpack://./src/styles/3_layout/_movies-section.scss","webpack://./src/styles/1_abstracts/_mixin.scss","webpack://./src/styles/4_components/_cards.scss","webpack://./src/styles/4_components/_paginator.scss"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ACAF;;ADGA;EACE,uBAAA;ACAF;;ADIA;EACE,uBAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;ACDF;;ADIA;EACE,qBAAA;EACA,qBAAA;ACDF;;ADIA;EACE,sBAAA;ACDF;;ADIA;EACE,sBAAA;ACDF;;AC1BA;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,YCWU;AFkBZ;AC3BE;EACE,eAAA;EACA,qBAAA;EACA,WAAA;AD6BJ;;ACzBA;EACE,aAAA;EACA,eAAA;EACA,YAAA;AD4BF;AC1BE;EACE,aAAA;AD4BJ;AC1BI;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,cAAA;EACA,iCCdiB;EDejB,2BAAA;AD4BN;AC1BM;EACE,yBAAA;AD4BR;;AG3DA;EACE,iCDYqB;ECXrB,YDaU;ECZV,yBAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;EACA,gBAAA;AH8DF;AG5DE;EACE,iBAAA;EACA,cAAA;AH8DJ;;AIzEE;EACE,iCFWmB;EEVnB,eAAA;EACA,UAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,8BAAA;EACA,oCAAA;AJ4EJ;AI1EI;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AJ4EN;AI1EM;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,sBAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;AJ4ER;AIzEM;EACE,UAAA;AJ2ER;AIxEM;EACE,aAAA;EACA,qCAAA;EACA,aAAA;EACA,gBAAA;AJ0ER;AIvEM;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AJyER;AItEM;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AJwER;AIpEI;;EAEE,iCFlDY;AFwHlB;AInEI;EACE,0BAAA;AJqEN;;AK1IA;EACE,aAAA;EACA,0BAAA;EACA,mBAAA;EACA,iBAAA;EACA,qBAAA;AL6IF;AM3IE;EDPF;IAQI,qCAAA;EL8IF;AACF;AMzIE;EDdF;IAYI,qCAAA;EL+IF;AACF;AMxIE;EDpBF;IAgBI,qCAAA;ELgJF;AACF;AMvIE;ED1BF;IAoBI,qCAAA;ELiJF;AACF;;AOxJA;EACE,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mCAAA;EACA,iCAAA;EAhBE,+BAAA;AP4KJ;AOxJE;EACE,eAAA;EACA,sBAAA;AP0JJ;AOvJE;EACE,8BAAA;APyJJ;AOtJE;EACE,cAAA;EACA,eAAA;EACA,YAAA;APwJJ;AOrJE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;APuJJ;AOrJI;EACE,cAAA;EACA,iCLhCY;AFuLlB;AOpJI;EACE,eAAA;EACA,iCLtCiB;EKuCjB,cAAA;APsJN;AOlJE;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,WAAA;EACA,WAAA;EACA,wCAAA;EArDA,2BAAA;AP0MJ;AOjJI;EACE,eAAA;APmJN;AOhJI;EACE,WAAA;EACA,oBAAA;APkJN;AOhJM;EACE,eAAA;EACA,qBAAA;EACA,UAAA;EACA,iCLjEe;EKkEf,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,gCAAA;APkJR;AO/IM;EACE,gCAAA;EACA,oBAAA;APiJR;AO/IQ;EACE,cAAA;EACA,eAAA;APiJV;AO9IQ;EACE,cAAA;EACA,eAAA;EACA,qBAAA;APgJV;AQhPA;EACE,YAAA;EACA,YAAA;EACA,yBAAA;EACA,iCNQqB;EMPrB,gBAAA;EACA,aAAA;EACA,mBAAA;ARkPF;AQhPE;EACE,cAAA;ARkPJ;AQ/OE;EACE,cAAA;ARiPJ;AQ9OE;EACE,YAAA;EACA,aAAA;ARgPJ;AQ7OE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,2BAAA;AR+OJ;AQ7OI;EACE,yBAAA;AR+ON;AQ5OI;EACE,yBAAA;EACA,eAAA;AR8ON","sourcesContent":["@use '../1_abstracts/functions' as f;\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n//yeah I get ride of that hideous padding once and for all for all my ul!!\r\nul {\r\n  padding-inline-start: 0;\r\n  list-style: none;\r\n  margin-block-start: 0;\r\n  margin-block-end: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  word-wrap: break-word;\r\n}\r\n\r\n::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\n::after {\r\n  box-sizing: border-box;\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,700&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nul {\n  padding-inline-start: 0;\n  list-style: none;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\na {\n  text-decoration: none;\n  word-wrap: break-word;\n}\n\n::before {\n  box-sizing: border-box;\n}\n\n::after {\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  background-color: #003049;\n  height: 80px;\n}\nheader .logo {\n  margin-left: 5%;\n  display: inline-block;\n  height: 80%;\n}\n\nheader .menu {\n  display: flex;\n  margin-left: 5%;\n  height: 100%;\n}\nheader .menu ul {\n  display: flex;\n}\nheader .menu ul a {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  padding: 5px;\n  color: #eae2b7;\n  font-family: \"Roboto\", sans-serif;\n  transition: all 0.5s linear;\n}\nheader .menu ul a:hover {\n  background-color: #d62828;\n}\n\nfooter {\n  font-family: \"Roboto\", sans-serif;\n  height: 80px;\n  background-color: #003049;\n  color: #eae2b7;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding-left: 5%;\n}\nfooter a {\n  font-weight: bold;\n  color: #fcbf49;\n}\n\n#modal-generator .modal-container {\n  font-family: \"Roboto\", sans-serif;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.6);\n}\n#modal-generator .modal-container .comments-modal {\n  background-color: #eae2b7;\n  margin: 5% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n#modal-generator .modal-container .comments-modal .close-modal {\n  position: absolute;\n  top: 15%;\n  right: 20%;\n  padding: 0.5rem 0.8rem;\n  border: none;\n  background-color: #fcbf49;\n  color: #003049;\n  font-weight: bolder;\n  border-radius: 5px;\n  font-size: larger;\n}\n#modal-generator .modal-container .comments-modal img {\n  width: 50%;\n}\n#modal-generator .modal-container .comments-modal ul.details {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  row-gap: 1rem;\n  column-gap: 5rem;\n}\n#modal-generator .modal-container .comments-modal ul.comments {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n#modal-generator .modal-container .comments-modal form {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n#modal-generator .modal-container h1,\n#modal-generator .modal-container h2 {\n  font-family: \"Roboto Slab\", serif;\n}\n#modal-generator .modal-container .empty-input {\n  outline: 3px solid #d62828;\n}\n\n.movies-section {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 30px 30px;\n  margin: 30px 10px;\n  justify-items: center;\n}\n@media screen and (min-width: 480px) {\n  .movies-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (min-width: 768px) {\n  .movies-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (min-width: 960px) {\n  .movies-section {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media screen and (min-width: 1200px) {\n  .movies-section {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n\n.movie {\n  width: 250px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 2px 2px 5px 2px #d62828;\n  transition: transform 0.8s linear;\n  border-radius: 5px 5px 30px 5px;\n}\n.movie:hover {\n  cursor: pointer;\n  transform: scale(1.01);\n}\n.movie.animationOut {\n  transform: translateX(-1500px);\n}\n.movie__img {\n  display: block;\n  min-height: 60%;\n  padding: 5px;\n}\n.movie__body {\n  height: 30%;\n  padding: 5px;\n  text-align: center;\n}\n.movie__body__title {\n  color: #003049;\n  font-family: \"Roboto Slab\", serif;\n}\n.movie__body__description {\n  margin-top: 5px;\n  font-family: \"Roboto\", sans-serif;\n  color: #004163;\n}\n.movie__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 10%;\n  width: 100%;\n  background-color: rgba(214, 40, 40, 0.3);\n  border-radius: 0 0 30px 5px;\n}\n.movie__footer:hover {\n  cursor: default;\n}\n.movie__footer div {\n  width: 100%;\n  pointer-events: none;\n}\n.movie__footer div span {\n  text-align: end;\n  display: inline-block;\n  width: 42%;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0 10px 0 0;\n  color: #d62828;\n  font-weight: 600;\n  transition: all 0.2s ease-in-out;\n}\n.movie__footer div .like-btn {\n  transition: all 0.5s ease-in-out;\n  pointer-events: auto;\n}\n.movie__footer div .like-btn.active {\n  color: #d62828;\n  cursor: pointer;\n}\n.movie__footer div .like-btn:hover {\n  color: #d62828;\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.paginator {\n  margin: 10px;\n  height: 40px;\n  background-color: #eae2b7;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.7em;\n  display: flex;\n  align-items: center;\n}\n.paginator__info {\n  margin: 0 10px;\n}\n.paginator__info > span {\n  display: block;\n}\n.paginator__list {\n  height: 100%;\n  display: flex;\n}\n.paginator .li-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 5px;\n  min-width: 30px;\n  transition: all 0.5s linear;\n}\n.paginator .li-page.active {\n  background-color: #f77f00;\n}\n.paginator .li-page:hover {\n  background-color: #f77f00;\n  cursor: pointer;\n}","@use '../1_abstracts/functions' as f;\r\n@use '../1_abstracts/variables' as v;\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: f.getcolor('primary');\r\n  height: v.$navHeight;\r\n\r\n  .logo {\r\n    margin-left: 5%;\r\n    display: inline-block;\r\n    height: 80%;\r\n  }\r\n}\r\n\r\nheader .menu {\r\n  display: flex;\r\n  margin-left: 5%;\r\n  height: 100%;\r\n\r\n  ul {\r\n    display: flex;\r\n\r\n    a {\r\n      display: flex;\r\n      align-items: center;\r\n      height: 100%;\r\n      padding: 5px;\r\n      color: f.getcolor('background');\r\n      font-family: v.$fontFamilyPharagraph;\r\n      transition: all 0.5s linear;\r\n\r\n      &:hover {\r\n        background-color: f.getcolor('accent');\r\n      }\r\n    }\r\n  }\r\n}\r\n","$brand-color: (\r\n  'primary':    #003049,\r\n  'secondary':  #fcbf49,\r\n  'accent':     #d62828,\r\n  'background': #eae2b7,\r\n  'hover':      #f77f00,\r\n);\r\n\r\n$break-points: (\r\n  'base': 0,\r\n  'small': 480px,\r\n  'medium': 768px,\r\n  'large': 960px,\r\n  'xlarge': 1200px,\r\n);\r\n\r\n$fontFamilyPharagraph: 'Roboto', sans-serif;\r\n$fontFamilyTitle: 'Roboto Slab', serif;\r\n$navHeight: 80px;\r\n","@use '../1_abstracts/functions' as f;\r\n@use '../1_abstracts/variables' as v;\r\n\r\nfooter {\r\n  font-family: $fontFamilyPharagraph;\r\n  height: v.$navHeight;\r\n  background-color: f.getcolor('primary');\r\n  color: f.getcolor('background');\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n  padding-left: 5%;\r\n\r\n  a {\r\n    font-weight: bold;\r\n    color: f.getcolor('secondary');\r\n  }\r\n}\r\n","@use '../1_abstracts/functions' as f;\n@use '../1_abstracts/variables' as v;\n\n#modal-generator {\n  .modal-container {\n    font-family: v.$fontFamilyPharagraph;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.6);\n\n    .comments-modal {\n      background-color: f.getcolor('background');\n      margin: 5% auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 70%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 1rem;\n\n      .close-modal {\n        position: absolute;\n        top: 15%;\n        right: 20%;\n        padding: 0.5rem 0.8rem;\n        border: none;\n        background-color: f.getcolor('secondary');\n        color: f.getcolor('primary');\n        font-weight: bolder;\n        border-radius: 5px;\n        font-size: larger;\n      }\n\n      img {\n        width: 50%;\n      }\n\n      ul.details {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        row-gap: 1rem;\n        column-gap: 5rem;\n      }\n\n      ul.comments {\n        display: flex;\n        flex-direction: column;\n        gap: 0.8rem;\n      }\n\n      form {\n        margin-top: 1rem;\n        display: flex;\n        flex-direction: column;\n        gap: 0.8rem;\n      }\n    }\n\n    h1,\n    h2 {\n      font-family: v.$fontFamilyTitle;\n    }\n\n    .empty-input {\n      outline: 3px solid f.getcolor('accent');\n    }\n  }\n}\n","@use '../1_abstracts/mixin';\r\n\r\n.movies-section {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-gap: 30px 30px;\r\n  margin: 30px 10px;\r\n  justify-items: center;\r\n\r\n  @include mixin.small {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  @include mixin.medium {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  @include mixin.large {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n\r\n  @include mixin.xlarge {\r\n    grid-template-columns: repeat(5, 1fr);\r\n  }\r\n}\r\n","@use 'functions' as f;\r\n\r\n@mixin base {\r\n  @media screen and (min-width: f.get-break-point('base')) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin small {\r\n  @media screen and (min-width: f.get-break-point('small')) {\r\n    @content;\r\n  }\r\n}\r\n\r\n// desktop\r\n@mixin medium {\r\n  @media screen and (min-width: f.get-break-point('medium')) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin large {\r\n  @media screen and (min-width: f.get-break-point('large')) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin xlarge {\r\n  @media screen and (min-width: f.get-break-point('xlarge')) {\r\n    @content;\r\n  }\r\n}\r\n","@use '../1_abstracts/mixin';\r\n@use '../1_abstracts/functions' as f;\r\n@use '../1_abstracts/variables' as v;\r\n\r\n@mixin border-radius ($card: true) {\r\n  @if $card == true {\r\n    // this porder is for all the body\r\n    border-radius: 5px 5px 30px 5px;\r\n  }\r\n\r\n  @else {\r\n    // i will add also a border radious to the footer\r\n    border-radius: 0 0 30px 5px;\r\n  }\r\n}\r\n\r\n.movie {\r\n  width: 250px;\r\n  height: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-shadow: 2px 2px 5px 2px f.getcolor('accent');\r\n  transition: transform 0.8s linear;\r\n\r\n  @include border-radius();\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n    transform: scale(1.01);\r\n  }\r\n\r\n  &.animationOut {\r\n    transform: translateX(-1500px);\r\n  }\r\n\r\n  &__img {\r\n    display: block;\r\n    min-height: 60%;\r\n    padding: 5px;\r\n  }\r\n\r\n  &__body {\r\n    height: 30%;\r\n    padding: 5px;\r\n    text-align: center;\r\n\r\n    &__title {\r\n      color: f.getcolor('primary');\r\n      font-family: v.$fontFamilyTitle;\r\n    }\r\n\r\n    &__description {\r\n      margin-top: 5px;\r\n      font-family: v.$fontFamilyPharagraph;\r\n      color: lighten(f.getcolor('primary'), 5%);\r\n    }\r\n  }\r\n\r\n  &__footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    height: 10%;\r\n    width: 100%;\r\n    background-color: transparentize(f.getcolor('accent'), 0.7);\r\n\r\n    @include border-radius(false);\r\n\r\n    &:hover {\r\n      cursor: default;\r\n    }\r\n\r\n    div {\r\n      width: 100%;\r\n      pointer-events: none;\r\n\r\n      & span {\r\n        text-align: end;\r\n        display: inline-block;\r\n        width: 42%;\r\n        font-family: v.$fontFamilyPharagraph;\r\n        margin: 0 10px 0 0;\r\n        color: f.getcolor('accent');\r\n        font-weight: 600;\r\n        transition: all 0.2s ease-in-out;\r\n      }\r\n\r\n      & .like-btn {\r\n        transition: all 0.5s ease-in-out;\r\n        pointer-events: auto;\r\n\r\n        &.active {\r\n          color: f.getcolor('accent');\r\n          cursor: pointer;\r\n        }\r\n\r\n        &:hover {\r\n          color: f.getcolor('accent');\r\n          cursor: pointer;\r\n          transform: scale(1.2);\r\n        }\r\n      }\r\n\r\n      .star-btn {\r\n        @extend .star-btn;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@use '../1_abstracts/functions' as f;\n@use '../1_abstracts/mixin';\n@use '../1_abstracts/variables' as v;\n\n.paginator {\n  margin: 10px;\n  height: 40px;\n  background-color: f.getcolor('background');\n  font-family: v.$fontFamilyPharagraph;\n  font-size: 0.7em;\n  display: flex;\n  align-items: center;\n\n  &__info {\n    margin: 0 10px;\n  }\n\n  &__info > span {\n    display: block;\n  }\n\n  &__list {\n    height: 100%;\n    display: flex;\n  }\n\n  .li-page {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    padding: 5px;\n    min-width: 30px;\n    transition: all 0.5s linear;\n\n    &.active {\n      background-color: f.getcolor('hover');\n    }\n\n    &:hover {\n      background-color: f.getcolor('hover');\n      cursor: pointer;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=main.js.map