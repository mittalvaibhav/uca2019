(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-book/add-book.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-book/add-book.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ib29rL2FkZC1ib29rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-book/add-book.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-book/add-book.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Book Name</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter book name\" name=\"bookName\" [(ngModel)]=\"newBook.bookName\">\n    </div>\n    <p>{{newBook.bookName}}</p>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Author Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"authorName\" [(ngModel)]=\"newBook.authorName\">\n    </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" name=\"isAvailable\" [(ngModel)]=\"newBook.isAvailable\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">isAvailable</label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Book Version</label>\n      <input type=\"text\" class=\"form-control\" name=\"bookVersion\" [(ngModel)]=\"newBook.bookVersion\">\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"submitBook()\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-book/add-book.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-book/add-book.component.ts ***!
  \************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../book-data.service */ "./src/app/book-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(bookDataService, router) {
        this.bookDataService = bookDataService;
        this.router = router;
        this.newBook = {
            bookName: "Old Value"
        };
    }
    AddBookComponent.prototype.ngOnInit = function () {
    };
    AddBookComponent.prototype.submitBook = function () {
        var _this = this;
        console.log("The new book value is: " + this.newBook.bookName);
        var dataObject = JSON.parse(JSON.stringify(this.newBook));
        this.bookDataService.addNewBook(dataObject).subscribe(function (response) {
            alert("Book added successfully");
            _this.router.navigateByUrl("");
        }, function (error) {
            alert("Error adding book, please try again");
        });
    };
    AddBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/add-book/add-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_data_service__WEBPACK_IMPORTED_MODULE_2__["BookDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-header-bar [attUserName]=\"userName\"></app-header-bar>\r\n    <app-nav-bar [attUserName]=\"userName\" (updateUserNameEvent)=\"getNewUserName($event)\"></app-nav-bar>\r\n    <app-main-page></app-main-page>\r\n    <app-footer-bar></app-footer-bar>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
        this.userName = "Akshay";
        this.name = "Math";
    }
    AppComponent.prototype.getNewUserName = function (userName) {
        this.userName = userName;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-bar/header-bar.component */ "./src/app/header-bar/header-bar.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer-bar/footer-bar.component */ "./src/app/footer-bar/footer-bar.component.ts");
/* harmony import */ var _request_book_request_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request-book/request-book.component */ "./src/app/request-book/request-book.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recent_books_recent_books_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recent-books/recent-books.component */ "./src/app/recent-books/recent-books.component.ts");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/add-book/add-book.component.ts");
/* harmony import */ var _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-book/edit-book.component */ "./src/app/edit-book/edit-book.component.ts");















var routes = [
    { path: "", component: _recent_books_recent_books_component__WEBPACK_IMPORTED_MODULE_12__["RecentBooksComponent"] },
    { path: "requestBook", component: _request_book_request_book_component__WEBPACK_IMPORTED_MODULE_10__["RequestBookComponent"] },
    { path: "addBook", component: _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_13__["AddBookComponent"] },
    { path: "editBook", component: _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_14__["EditBookComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_6__["HeaderBarComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"],
                _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_9__["FooterBarComponent"],
                _request_book_request_book_component__WEBPACK_IMPORTED_MODULE_10__["RequestBookComponent"],
                _recent_books_recent_books_component__WEBPACK_IMPORTED_MODULE_12__["RecentBooksComponent"],
                _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_13__["AddBookComponent"],
                _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_14__["EditBookComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/book-data.service.ts ***!
  \**************************************/
/*! exports provided: BookDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDataService", function() { return BookDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BookDataService = /** @class */ (function () {
    function BookDataService(httpClient) {
        this.httpClient = httpClient;
    }
    BookDataService.prototype.getLatestBooks = function () {
        return this.httpClient.get("http://localhost:8080/book/getRecentBooks");
        // return this.booksList;
    };
    BookDataService.prototype.addNewBook = function (newBook) {
        return this.httpClient.post("http://localhost:8080/book/addNewBook", newBook);
    };
    BookDataService.prototype.updateBook = function (book) {
        var bookId = book._id;
        return this.httpClient.put("http://localhost:8080/book/updateBook?id=" + bookId, book);
    };
    BookDataService.prototype.setSelectedBookForEdit = function (selectedBook) {
        this.selectedBookForEdit = selectedBook;
    };
    BookDataService.prototype.getSelectedBookForEdit = function () {
        return this.selectedBookForEdit;
    };
    BookDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BookDataService);
    return BookDataService;
}());



/***/ }),

/***/ "./src/app/edit-book/edit-book.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-book/edit-book.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYm9vay9lZGl0LWJvb2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-book/edit-book.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-book/edit-book.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"bookName\">Book Name</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter book name\" name=\"bookName\" [(ngModel)]=\"selectedBook.bookName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"authorName\">Author Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"authorName\" [(ngModel)]=\"selectedBook.authorName\">\n    </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" name=\"isAvailable\" [(ngModel)]=\"selectedBook.isAvailable\">\n      <label class=\"form-check-label\" for=\"isAvailable\">isAvailable</label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"bookVersion\">Book Version</label>\n      <input type=\"text\" class=\"form-control\" name=\"bookVersion\" [(ngModel)]=\"selectedBook.bookVersion\">\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"updateBook()\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/edit-book/edit-book.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-book/edit-book.component.ts ***!
  \**************************************************/
/*! exports provided: EditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookComponent", function() { return EditBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../book-data.service */ "./src/app/book-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditBookComponent = /** @class */ (function () {
    function EditBookComponent(bookDataService, router) {
        this.bookDataService = bookDataService;
        this.router = router;
    }
    EditBookComponent.prototype.ngOnInit = function () {
        this.selectedBook = this.bookDataService.getSelectedBookForEdit();
        console.log("Selected book in edit book component is: " + JSON.stringify(this.selectedBook));
    };
    EditBookComponent.prototype.updateBook = function () {
        var _this = this;
        this.bookDataService.updateBook(this.selectedBook).subscribe(function (response) {
            console.log(response);
            alert("Book details updated successfully");
            _this.router.navigateByUrl('');
        }, function (error) {
            alert("error updateing book");
        });
    };
    EditBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-book',
            template: __webpack_require__(/*! ./edit-book.component.html */ "./src/app/edit-book/edit-book.component.html"),
            styles: [__webpack_require__(/*! ./edit-book.component.css */ "./src/app/edit-book/edit-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_data_service__WEBPACK_IMPORTED_MODULE_2__["BookDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci1iYXIvZm9vdGVyLWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color: gray;display: flex; margin-top: 20px\">\n  <h5>Twitter &nbsp; </h5>\n  <h5>Facebook</h5>\n</div>"

/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.ts ***!
  \****************************************************/
/*! exports provided: FooterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBarComponent", function() { return FooterBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterBarComponent = /** @class */ (function () {
    function FooterBarComponent() {
    }
    FooterBarComponent.prototype.ngOnInit = function () {
    };
    FooterBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-bar',
            template: __webpack_require__(/*! ./footer-bar.component.html */ "./src/app/footer-bar/footer-bar.component.html"),
            styles: [__webpack_require__(/*! ./footer-bar.component.css */ "./src/app/footer-bar/footer-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterBarComponent);
    return FooterBarComponent;
}());



/***/ }),

/***/ "./src/app/header-bar/header-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @media(min-width: 800px) {\r\n    h1 {\r\n        background-color: red;\r\n    }\r\n\r\n    .col-md-1 {\r\n        width: 8%;\r\n    }\r\n\r\n    .col-md-6 {\r\n        width: 50%\r\n    }\r\n}\r\n\r\n@media(max-width: 800px) {\r\n\r\n    h1 {\r\n        background-color: yellow;\r\n    }\r\n\r\n    .col-sm-1 {\r\n        width: 8%;\r\n    }\r\n\r\n    .col-sm-12 {\r\n        width: 100%;\r\n    }\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLWJhci9oZWFkZXItYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1iYXIvaGVhZGVyLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQG1lZGlhKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1tZC0xIHtcclxuICAgICAgICB3aWR0aDogOCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1tZC02IHtcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXNtLTEge1xyXG4gICAgICAgIHdpZHRoOiA4JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXNtLTEyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/header-bar/header-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-9\">\n            <h1 style=\"text-align: center\">{{name}} library</h1>\n        </div>\n        <div class=\"col-md-3\">\n            <h5 style=\"font-style: italic\">Welcome {{attUserName}}</h5>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/header-bar/header-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return HeaderBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent() {
        this.name = "UCA";
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
        console.log("The input attribute value is : " + this.attUserName);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderBarComponent.prototype, "attUserName", void 0);
    HeaderBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-bar',
            template: __webpack_require__(/*! ./header-bar.component.html */ "./src/app/header-bar/header-bar.component.html"),
            styles: [__webpack_require__(/*! ./header-bar.component.css */ "./src/app/header-bar/header-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../book-data.service */ "./src/app/book-data.service.ts");



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(bookDataService) {
        this.bookDataService = bookDataService;
        this.showTable = true;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        // this.booksList = this.bookDataService.getLatestBooks();
    };
    MainPageComponent.prototype.toggleTableVisibility = function () {
        this.showTable = !this.showTable;
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_data_service__WEBPACK_IMPORTED_MODULE_2__["BookDataService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Library</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/addBook\">Add book</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/requestBook\">Request book</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Delete book</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" tabindex=\"-1\">Search</a>\n      </li>\n      <button (click)=\"updateUser()\">Update User</button>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.updateUserNameEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.updateUser = function () {
        this.updateUserNameEvent.emit("HardCoded UserName");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavBarComponent.prototype, "attUserName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NavBarComponent.prototype, "updateUserNameEvent", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/recent-books/recent-books.component.css":
/*!*********************************************************!*\
  !*** ./src/app/recent-books/recent-books.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2VudC1ib29rcy9yZWNlbnQtYm9va3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recent-books/recent-books.component.html":
/*!**********************************************************!*\
  !*** ./src/app/recent-books/recent-books.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"showTable\" class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Book Name</th>\n        <th scope=\"col\">Author Name</th>\n        <th scope=\"col\">Is Available</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let book of booksList; let i = index\">\n        <th scope=\"row\">{{i+1}}</th>\n        <td>{{book.bookName}}</td>\n        <td>{{book.authorName}}</td>\n        <td>{{book.isAvailable}}</td>\n        <td>\n          <button (click)=\"editBook(book)\">Edit Book</button>\n          <button (click)=\"deleteBook()\">Delete Book</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/recent-books/recent-books.component.ts":
/*!********************************************************!*\
  !*** ./src/app/recent-books/recent-books.component.ts ***!
  \********************************************************/
/*! exports provided: RecentBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentBooksComponent", function() { return RecentBooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../book-data.service */ "./src/app/book-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RecentBooksComponent = /** @class */ (function () {
    function RecentBooksComponent(bookDataService, router) {
        this.bookDataService = bookDataService;
        this.router = router;
        this.showTable = true;
    }
    RecentBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookDataService.getLatestBooks().subscribe(function (response) {
            _this.booksList = response;
            console.log("The response is: ", response);
        });
    };
    RecentBooksComponent.prototype.editBook = function (selectedBook) {
        this.bookDataService.setSelectedBookForEdit(selectedBook);
        this.router.navigateByUrl('editBook');
    };
    RecentBooksComponent.prototype.deleteBook = function () {
        console.log('delete book called');
    };
    RecentBooksComponent.prototype.toggleTableVisibility = function () {
        this.showTable = !this.showTable;
    };
    RecentBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recent-books',
            template: __webpack_require__(/*! ./recent-books.component.html */ "./src/app/recent-books/recent-books.component.html"),
            styles: [__webpack_require__(/*! ./recent-books.component.css */ "./src/app/recent-books/recent-books.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_data_service__WEBPACK_IMPORTED_MODULE_2__["BookDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RecentBooksComponent);
    return RecentBooksComponent;
}());



/***/ }),

/***/ "./src/app/request-book/request-book.component.css":
/*!*********************************************************!*\
  !*** ./src/app/request-book/request-book.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtYm9vay9yZXF1ZXN0LWJvb2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/request-book/request-book.component.html":
/*!**********************************************************!*\
  !*** ./src/app/request-book/request-book.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <input />\n</form>"

/***/ }),

/***/ "./src/app/request-book/request-book.component.ts":
/*!********************************************************!*\
  !*** ./src/app/request-book/request-book.component.ts ***!
  \********************************************************/
/*! exports provided: RequestBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestBookComponent", function() { return RequestBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequestBookComponent = /** @class */ (function () {
    function RequestBookComponent() {
    }
    RequestBookComponent.prototype.ngOnInit = function () {
    };
    RequestBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-book',
            template: __webpack_require__(/*! ./request-book.component.html */ "./src/app/request-book/request-book.component.html"),
            styles: [__webpack_require__(/*! ./request-book.component.css */ "./src/app/request-book/request-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RequestBookComponent);
    return RequestBookComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Vaibhav\UCA-2019\FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map