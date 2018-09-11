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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    padding: 0px;\n    margin: 0px;\n    font-family: sans-serif;\n}\n\n#wrapper {\n    width: 80%;\n    height: 80%;\n    border: 2px solid black;\n    margin: 0 auto;\n}\n\n.form {\n    width: 30%;\n    display: inline-block;\n    height: 25%;\n    border: 2px solid grey;\n    vertical-align: top;\n}\n\n#blue_button {\n    background-color: rgb(121, 199, 250);\n    color: white;\n    padding: 5px;\n}\n\n#subtitle {\n    color: grey;\n    border-bottom: 4px solid rgb(0, 140, 255);\n}\n\n#cake_box {\n    display: inline-block;\n    height: 300px;\n    overflow: scroll;\n}\n\n.grey_button {\n    background-color: grey;\n    color: white;\n    padding: 3px 8px;\n}\n\n.form2 {\n    display: inline-block;\n    width: 25%;\n    height: 200px;\n    vertical-align: top;\n}\n\n#cake_box img {\n    width: 200px;\n    height: 200px;\n    display: inline-block;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\t<head>\n\t\t<title>Restful Tasks</title>\n</head>\n\t<body>\n\t\t<div id=\"wrapper\">\n\n      <h1>Rate my Cakes</h1>\n\n      <form class=\"form\" (submit)=\"onSubmit()\">\n          <!-- use the json pipe to see how newTask changes in real time -->\n          <p id=\"subtitle\">Be brave, submit your cake!</p>\n          <p>Baker name:</p> <input type=\"text\" name=\"newCake.bakerName\" [(ngModel)]=\"newCake.bakerName\" />\n          <p>Image url:</p> <input type=\"text\" name=\"newCake.imgURL\" [(ngModel)]=\"newCake.imgURL\" />\n          <button id=\"blue_button\">SUBMIT</button>\n      </form>\n      \n\n        <div id=\"cake_box\">\n          <div class=\"listing\" *ngFor=\"let cake of cakes\">\n            <img [src]=\"cake.imgURL\" (click)=\"show(cake._id)\">\n            <form class=\"form2\" (submit)=\"submitComment(cake)\">\n              <select name=\"newComment.rating\" [(ngModel)]=\"newComment.rating\">\n                  <option value=\"1\">1 star</option>\n                  <option value=\"2\">2 stars</option>\n                  <option value=\"3\">3 stars</option>\n                  <option value=\"4\">4 stars</option>\n                  <option value=\"5\">5 stars</option>\n              </select>\n              <textarea rows=\"4\" cols=\"20\" name=\"newComment.content\" [(ngModel)]=\"newComment.content\" placeholder=\"Enter your comment here.\"></textarea>\n              <button class=\"grey_button\">Rate!</button>\n            </form>\n          </div>\n        </div>\n      \n      <app-cake [showCakePressed]=\"showCakePressed\" *ngIf=\"currentCake\" [currentCake]=\"currentCake\" [cakeAvg]=\"cake_avg\"></app-cake>\n\n\n    </div><!--end of wrapper-->\n\t</body>\n</html>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.service */ "./src/app/root.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.cakes = {};
        this.currentCake = {};
        this.showAllPressed = false;
        this.showCakePressed = false;
        this.cake_avg = 0;
        console.log("Loaded app component");
    }
    // editedcake = null;
    // editingcake = false;
    AppComponent.prototype.ngOnInit = function () {
        this.getCakesFromService();
        this.currentCake = {};
        this.showAllPressed = false;
        this.showCakePressed = false;
        this.newComment = { content: "", rating: "", cake: {} };
        this.newCake = { imgURL: "", bakerName: "", comments: [] };
    };
    AppComponent.prototype.getCakesFromService = function () {
        var _this = this;
        var observable = this._httpService.getCakes();
        observable.subscribe(function (data) {
            _this.showAllPressed = true;
            // In this example, the array of cakes is assigned to the key 'cakes' in the data object. 
            // This may be different for you, depending on how you set up your cake API.copy
            _this.cakes = data["data"];
            // console.log("all cakes: ", this.cakes);
        });
    };
    AppComponent.prototype.show = function (cake_id) {
        var _this = this;
        // console.log("cake id: ",cake_id);
        var observable = this._httpService.getCakeByID(cake_id);
        observable.subscribe(function (data) {
            // console.log("Data in subscribe show: ", data)
            _this.currentCake = data["data"][0];
            _this.cake_avg = _this.generateAvg(_this.currentCake);
            console.log("Cake avg now: ", _this.cake_avg);
        });
        this.showCakePressed = true;
    };
    AppComponent.prototype.generateAvg = function (cake) {
        console.log("in generate avg cake: ", cake);
        var rate_count = 0;
        for (var i = 0; i < cake.comments.length; i++) {
            rate_count += Number(cake.comments[i].rating);
        }
        var avg = rate_count / cake.comments.length;
        console.log("Avg at end of function: ", avg);
        return avg;
    };
    AppComponent.prototype.onSubmit = function () {
        // console.log("In submit");
        // console.log("New cake in on submit: ", this.newCake)
        var observable = this._httpService.addNewCake(this.newCake);
        observable.subscribe(function (data) {
            console.log("in observable: ", data);
        });
        this.newCake = { title: "", description: "" };
        this.getCakesFromService();
    };
    AppComponent.prototype.submitComment = function (cake) {
        console.log("In submit comment");
        console.log("New comment in on submit: ", this.newComment);
        var observable = this._httpService.addNewComment(this.newComment);
        observable.subscribe(function (data) {
            console.log("in observable comment: ", data);
        });
        this.cakeForComment = cake;
        this.cakeForComment.comments.push(this.newComment);
        console.log("In submitComment, pending edits: ", this.cakeForComment);
        var observableComment = this._httpService.editCake(this.cakeForComment, this.cakeForComment._id);
        observableComment.subscribe(function (data) {
            console.log("in observable comment for cake: ", data);
        });
        this.newComment = { content: "", rating: "" };
        // this.getCakesFromService();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"]])
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
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.service */ "./src/app/root.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cake_cake_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cake/cake.component */ "./src/app/cake/cake.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _cake_cake_component__WEBPACK_IMPORTED_MODULE_6__["CakeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_root_service__WEBPACK_IMPORTED_MODULE_0__["RootService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cake/cake.component.css":
/*!*****************************************!*\
  !*** ./src/app/cake/cake.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cake/cake.component.html":
/*!******************************************!*\
  !*** ./src/app/cake/cake.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html lang=\"en\">\n\n<div id=\"bottom_box\" *ngIf=\"showCakePressed == true\">\n  <h1>Baked by {{currentCake.bakerName}}</h1>\n    <img [src]=\"currentCake['imgURL']\">\n    <p>Average rating: {{cakeAvg}}</p>\n\n    <div *ngFor=\"let comment of currentCake['comments']\">\n      <h3>{{comment.content}}</h3>\n      <h3>{{comment.rating}}</h3>\n    </div>\n</div>\n\n</html>\n"

/***/ }),

/***/ "./src/app/cake/cake.component.ts":
/*!****************************************!*\
  !*** ./src/app/cake/cake.component.ts ***!
  \****************************************/
/*! exports provided: CakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeComponent", function() { return CakeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CakeComponent = /** @class */ (function () {
    function CakeComponent() {
        this.comments = [];
        this.rate_count = 0;
    }
    CakeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CakeComponent.prototype, "currentCake", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CakeComponent.prototype, "showCakePressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CakeComponent.prototype, "cakeAvg", void 0);
    CakeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cake',
            template: __webpack_require__(/*! ./cake.component.html */ "./src/app/cake/cake.component.html"),
            styles: [__webpack_require__(/*! ./cake.component.css */ "./src/app/cake/cake.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CakeComponent);
    return CakeComponent;
}());



/***/ }),

/***/ "./src/app/root.service.ts":
/*!*********************************!*\
  !*** ./src/app/root.service.ts ***!
  \*********************************/
/*! exports provided: RootService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootService", function() { return RootService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootService = /** @class */ (function () {
    function RootService(_http) {
        this._http = _http;
        // this.getTasks();
        // this.getTaskByID();
    }
    RootService.prototype.getCakes = function () {
        return this._http.get('/api/cakes');
    };
    RootService.prototype.getCakeByID = function (cake_id) {
        console.log("In service, cake id passed: ", cake_id);
        return this._http.get('/api/cakes/' + cake_id);
    };
    RootService.prototype.addNewCake = function (newCake) {
        console.log("In service, add cake: ", newCake);
        return this._http.post('/api/cakes', newCake);
    };
    RootService.prototype.addNewComment = function (newComment) {
        console.log("In service, add comment", newComment);
        return this._http.post('/api/comments', newComment);
    };
    RootService.prototype.editCake = function (cakeForComment, cake_id) {
        return this._http.patch('/api/cakes/' + cake_id, cakeForComment);
    };
    RootService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RootService);
    return RootService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sadieflick/Desktop/DojoAssignments/MEAN/angular/rateMyCakes/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map