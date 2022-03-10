(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"display_cart\" *ngIf='cartLoading === false'>\r\n  <div class=\"cart_blocks\" *ngFor=\"let item of cartArray\">\r\n    <img class=\"img_size\" src=\"{{item.img_url}}\" alt=\"item_image\">\r\n    <div class=\"cart_price\">\r\n      <div class=\"price_align\">\r\n        {{item.name}}\r\n      </div>\r\n      <div class=\"price_align\">\r\n        <em class=\"fa items_details\">&#xf156;</em><span class=\"font_weight\">{{item.discountedPrice}}</span>\r\n        <del *ngIf=\"item.discount != 0\" class=\"margin_left\">{{item.price}}</del>\r\n        <span *ngIf=\"item.discount != 0\" class=\"discount_font_color margin_left\">{{item.discount}}% off</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"remove_button\">\r\n      <button class=\"cta_addToCart\" (click)=\"removeItem(item.id)\">Remove</button>\r\n    </div>\r\n  </div>\r\n  <div *ngFor=\"let item of cartArray\" class=\"price_details\">\r\n    <p class=\"price_details_right\">{{priceDetails}}</p>\r\n    <div class=\"margin_top_price\">\r\n      <div class=\"price_margin\">\r\n        Price (1) item : <em class=\"fa items_details\">&#xf156;</em>{{item.price}}\r\n      </div>\r\n      <div class=\"price_margin\">\r\n        Discount : <em class=\"fa items_details\">&#xf156;</em>{{item.discountAmount}}\r\n      </div>\r\n      <div class=\"price_margin_payable\">\r\n        <p>Total Payable : <em class=\"fa items_details\">&#xf156;</em>{{item.discountedPrice}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"empty_cart_message\" *ngIf=\"removeCart === true && loading === false\">\r\n  <p>{{cartMessage}}</p>\r\n  <button class=\"cta_addToCart\" (click)=\"redirectToCatalogue()\">{{addItemToCartButton}}</button>\r\n</section>\r\n<div *ngIf=\"loading === true || cartLoading === true\" class=\"loader loader_alignment\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/catalogue/catalogue.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalogue/catalogue.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sort [arrayOfItemsToSort] = 'arrayOfItems' (messageEvent)=\"receiveMessage($event)\"></app-sort>\r\n<div class=\"sideBar\">\r\n  <app-filter [arrayOfItemsToSort] = 'arrayOfItems' (messageEvent)=\"receiveMessage($event)\" (filterEvent)=\"filterStatus($event)\"></app-filter>\r\n</div>\r\n<div class=\"main\" *ngIf=\"catalogueLoading === false\">\r\n  <div class=\"mobile_width\" *ngFor=\"let items of arrayOfItems\">\r\n      <img src=\"{{items.img_url}}\" alt=\"image\" class=\"image_size\">\r\n      <div class=\"item_details\">\r\n        <p class=\"no_margin_name\" [innerHTML]=\"items.name\"></p>\r\n        <div class=\"display_price\">\r\n          <p><em class=\"fa font-size\">&#xf156;</em>\r\n            <strong [innerHTML]=\"items.discountedPrice\" class=\"margin_gap\">\r\n            </strong>\r\n          </p>\r\n          <p *ngIf=\"items.discount != 0\"><em class=\"fa items_details\">&#xf156;</em>\r\n            <del [innerHTML]=\"items.price\" class=\"margin_gap\"></del>\r\n          </p>\r\n          <p *ngIf=\"items.discount != 0\" class=\"discount_font_color\">{{items.discount}}% off</p>\r\n        </div>\r\n        <div class=\"buttonAlign\">\r\n          <button class=\"cta_addToCart\" (click)=\"addToCart(items.id)\">{{buttonName}}</button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"noFilter_text\" *ngIf=\"noFilteredItems === true && catalogueLoading === false\">\r\n  Uh oh ! No items for the applied filter !\r\n</div>\r\n<div *ngIf=\"catalogueLoading === true\" class=\"loader loader_alignment\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"padding_filter\">\r\n  <p class=\"bold\">Filters</p>\r\n  <div class=\"slidecontainer\">\r\n    <ng5-slider [(ngModel)]=\"value\" [options]=\"options\" (ngModelChange)=\"sliderEvent($event)\"></ng5-slider>\r\n  </div>\r\n  <button class=\"filter_button\"(click)=\"filterItems()\">Apply</button>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <div class=\"header\">\r\n    <div class=\"icons_left\">\r\n      <span>\r\n        <img class=\"svg_icon\" src=\"../../assets/_ionicons_svg_md-star.svg\" alt=\"star_logo\">\r\n      </span>\r\n    </div>\r\n    <div class=\"icons_right\">\r\n      <span class=\"icons_gap\">\r\n        <img class=\"svg_icon\" src=\"../../assets/_ionicons_svg_md-search.svg\" alt=\"search_icon\">\r\n      </span>\r\n      <span class=\"icons_gap\" routerLink=\"/cart\">\r\n        <img class=\"svg_icon\" src=\"../../assets/_ionicons_svg_md-cart.svg\" alt=\"cart_icon\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sort/sort.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sort/sort.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"display_sort_by\">\r\n<p class=\"margin_gap_sort_by\"><strong>Sort By</strong></p>\r\n<p class=\"margin_gap\" (click)=\"highToLow()\" [ngClass]=\"{'isActive': isActiveHigh === 1}\">Price -- High to Low</p>\r\n<p class=\"margin_gap\" (click)=\"lowToHigh()\" [ngClass]=\"{'isActive': isActive === 1}\">Price -- Low to High</p>\r\n<p class=\"margin_gap\" (click)=\"sortbyDiscount()\" [ngClass]=\"{'isActive': isActiveDiscount === 1}\">Discount</p>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalogue/catalogue.component */ "./src/app/catalogue/catalogue.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");





var routes = [
    { path: '', redirectTo: '/catalogue', pathMatch: 'full' },
    { path: 'catalogue', component: _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_3__["CatalogueComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
        this.title = 'cartApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalogue/catalogue.component */ "./src/app/catalogue/catalogue.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http-service.service */ "./src/app/services/http-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort/sort.component */ "./src/app/sort/sort.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_5__["CatalogueComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__["FilterComponent"],
                _sort_sort_component__WEBPACK_IMPORTED_MODULE_11__["SortComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_13__["Ng5SliderModule"]
            ],
            providers: [_services_http_service_service__WEBPACK_IMPORTED_MODULE_8__["HttpServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cart_blocks {\n  width: 75%;\n  height: auto;\n  padding: 10px;\n  border: 2px solid #ccc;\n  display: -webkit-box;\n}\n\n.price_details {\n  width: 20%;\n  height: auto;\n  padding: 15px;\n  border: 2px solid #ccc;\n  margin-left: 1%;\n}\n\n.display_cart {\n  display: -webkit-box;\n  padding: 15px;\n}\n\n.img_size {\n  height: 150px;\n  width: 130px;\n}\n\n.price_align {\n  margin-top: 20px;\n}\n\n.margin_left {\n  margin-left: 15px;\n}\n\n.discount_font_color {\n  color: #00b300;\n  font-weight: bold;\n}\n\n.font_weight {\n  font-weight: bold;\n}\n\n.cart_price {\n  margin-left: 20px;\n}\n\n.price_details_right {\n  color: #a9a9a9;\n  font-weight: bold;\n  margin: 0;\n}\n\n.price_margin {\n  margin: 15px 0;\n  font-size: 14px;\n  color: #333;\n}\n\n.margin_top_price {\n  margin-top: 25px;\n}\n\n.price_margin_payable {\n  font-size: 18px;\n  font-weight: bold;\n  border-top: 2px solid #ccc;\n}\n\n.remove_button {\n  margin-left: 65%;\n  position: absolute;\n  margin-top: 5%;\n}\n\n.cta_addToCart {\n  outline: none;\n  border: none;\n  width: 100px;\n  height: 35px;\n  border-radius: 20px;\n  background-color: #ffd700;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.empty_cart_message {\n  text-align: center;\n  margin: auto;\n  padding-top: 10%;\n  color: #333;\n  font-size: 24px;\n}\n\n.loader_alignment {\n  margin-top: 18%;\n}\n\n@media only screen and (max-width: 767px) {\n  .display_cart {\n    display: block;\n  }\n\n  .img_size {\n    height: 80px;\n    width: 90px;\n  }\n\n  .remove_button {\n    margin-left: 55%;\n    margin-top: 3%;\n  }\n\n  .cart_blocks {\n    width: 90%;\n    padding: 15px;\n  }\n\n  .price_details {\n    width: 90%;\n    margin-top: 20px;\n    margin-left: 0;\n  }\n\n  .loader_alignment {\n    margin-top: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxcVXNlcnNcXGFrc2hhXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxjYXJ0LUFwcFxcY2FydC1BcHAvc3JjXFxhcHBcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNPSjs7QURMQTtFQUNJLGlCQUFBO0FDUUo7O0FETkE7RUFDSSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ1VKOztBRFJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDV0o7O0FEVEE7RUFDSSxnQkFBQTtBQ1lKOztBRFZBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNhSjs7QURYQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDY0o7O0FEWkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2VKOztBRGJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2dCSjs7QURkQTtFQUNJLGVBQUE7QUNpQko7O0FEZkE7RUFDSTtJQUNJLGNBQUE7RUNrQk47O0VEaEJFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUNtQk47O0VEakJFO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0VDb0JOOztFRGxCRTtJQUNJLFVBQUE7SUFDQSxhQUFBO0VDcUJOOztFRG5CRTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNzQk47O0VEcEJFO0lBQ0ksZUFBQTtFQ3VCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnRfYmxvY2tzIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG59XHJcbi5wcmljZV9kZXRhaWxzIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4uZGlzcGxheV9jYXJ0IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4uaW1nX3NpemUge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxufVxyXG4ucHJpY2VfYWxpZ24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubWFyZ2luX2xlZnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmRpc2NvdW50X2ZvbnRfY29sb3Ige1xyXG4gICAgY29sb3I6ICMwMGIzMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZm9udF93ZWlnaHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNhcnRfcHJpY2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnByaWNlX2RldGFpbHNfcmlnaHQge1xyXG4gICAgY29sb3I6ICNhOWE5YTk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucHJpY2VfbWFyZ2luIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuLm1hcmdpbl90b3BfcHJpY2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4ucHJpY2VfbWFyZ2luX3BheWFibGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2NjYztcclxufVxyXG4ucmVtb3ZlX2J1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmN0YV9hZGRUb0NhcnQge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNzAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmVtcHR5X2NhcnRfbWVzc2FnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLmxvYWRlcl9hbGlnbm1lbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTglO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5kaXNwbGF5X2NhcnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmltZ19zaXplIHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICB9XHJcbiAgICAucmVtb3ZlX2J1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIH1cclxuICAgIC5jYXJ0X2Jsb2NrcyB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnByaWNlX2RldGFpbHMge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5sb2FkZXJfYWxpZ25tZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgIiwiLmNhcnRfYmxvY2tzIHtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbn1cblxuLnByaWNlX2RldGFpbHMge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbn1cblxuLmRpc3BsYXlfY2FydCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uaW1nX3NpemUge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5wcmljZV9hbGlnbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tYXJnaW5fbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZGlzY291bnRfZm9udF9jb2xvciB7XG4gIGNvbG9yOiAjMDBiMzAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvbnRfd2VpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJ0X3ByaWNlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5wcmljZV9kZXRhaWxzX3JpZ2h0IHtcbiAgY29sb3I6ICNhOWE5YTk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG59XG5cbi5wcmljZV9tYXJnaW4ge1xuICBtYXJnaW46IDE1cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLm1hcmdpbl90b3BfcHJpY2Uge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ucHJpY2VfbWFyZ2luX3BheWFibGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2NjYztcbn1cblxuLnJlbW92ZV9idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uY3RhX2FkZFRvQ2FydCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ3MDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lbXB0eV9jYXJ0X21lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmxvYWRlcl9hbGlnbm1lbnQge1xuICBtYXJnaW4tdG9wOiAxOCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmRpc3BsYXlfY2FydCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuaW1nX3NpemUge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxuXG4gIC5yZW1vdmVfYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNTUlO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICB9XG5cbiAgLmNhcnRfYmxvY2tzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAucHJpY2VfZGV0YWlscyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLmxvYWRlcl9hbGlnbm1lbnQge1xuICAgIG1hcmdpbi10b3A6IDgwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CartComponent = /** @class */ (function () {
    function CartComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.cartArray = [];
        this.priceDetails = 'PRICE DETAILS';
        this.removeCart = false;
        this.loading = false;
        this.cartLoading = false;
        this.cartMessage = 'Your cart seems empty !';
        this.addItemToCartButton = 'Add Items';
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.cartLoading = false;
        }, 1500);
        this.cartLoading = true;
        this.dataService.currentMessage.subscribe(function (result) { return result; });
        this.dataService.cartId.subscribe(function (cartId) {
            _this.cartItems = cartId;
            _this.disCountPriceCart = _this.cartItems.dicountAmount;
        });
        this.cartArray.push(this.cartItems);
    };
    CartComponent.prototype.removeItem = function (id) {
        this.removeCart = true;
        this.cartArray = [];
    };
    CartComponent.prototype.redirectToCatalogue = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.router.navigateByUrl('catalogue');
        }, 1500);
    };
    CartComponent.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/catalogue/catalogue.component.scss":
/*!****************************************************!*\
  !*** ./src/app/catalogue/catalogue.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  display: -webkit-flex;\n  -webkit-flex-wrap: wrap;\n  display: flex;\n  flex-wrap: wrap;\n  float: right;\n  width: 80%;\n}\n\n.main div {\n  width: 200px;\n  height: auto;\n  margin-bottom: 10px;\n}\n\n.image_size {\n  width: 150px;\n  height: 155px;\n  border-radius: 4px;\n}\n\n.sample {\n  background-color: black;\n  width: 300px;\n  height: 100%;\n  float: left;\n}\n\n.display_price {\n  display: flex;\n  float: right;\n}\n\n.margin_gap {\n  margin-right: 15px;\n}\n\n.no_margin_name {\n  margin-bottom: 0;\n}\n\n.discount_font_color {\n  color: #00b300;\n  font-weight: bold;\n}\n\n.sideBar {\n  height: auto;\n  min-height: 100%;\n  position: absolute;\n  width: 15%;\n  padding: 20px;\n  border: 1px solid #ccc;\n}\n\n.item_details {\n  font-size: 14px;\n}\n\n.buttonAlign {\n  margin-left: 15%;\n}\n\n.cta_addToCart {\n  outline: none;\n  border: none;\n  width: 100px;\n  height: 35px;\n  border-radius: 20px;\n  background-color: #ffd700;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.loader_alignment {\n  margin-top: 15%;\n}\n\n.noFilter_text {\n  text-align: center;\n  margin-top: 5%;\n  color: #333;\n  font-size: 24px;\n}\n\n@media only screen and (max-width: 767px) {\n  .margin_gap {\n    margin-right: 8px;\n  }\n\n  .main {\n    text-align: center;\n    width: auto;\n    margin-top: 30px;\n  }\n\n  .sideBar {\n    display: contents;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n\n  div.display_price {\n    text-align: center;\n    width: 175px !important;\n  }\n\n  .buttonAlign {\n    margin: 0;\n  }\n\n  .mobile_width {\n    width: 50vw !important;\n  }\n\n  .loader_alignment {\n    margin-top: 65%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ3VlL0M6XFxVc2Vyc1xcYWtzaGFcXE9uZURyaXZlXFxEb2N1bWVudHNcXGNhcnQtQXBwXFxjYXJ0LUFwcC9zcmNcXGFwcFxcY2F0YWxvZ3VlXFxjYXRhbG9ndWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhdGFsb2d1ZS9jYXRhbG9ndWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksZ0JBQUE7QUNPSjs7QURMQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ1FKOztBRE5BO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0FDVUo7O0FEUkE7RUFDSSxnQkFBQTtBQ1dKOztBRFRBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNZSjs7QURWQTtFQUNJLGVBQUE7QUNhSjs7QURYQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWkE7RUFDSTtJQUNJLGlCQUFBO0VDZU47O0VEYkU7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ2dCTjs7RURkRTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ2lCTjs7RURmRTtJQUNJLGtCQUFBO0lBQ0EsdUJBQUE7RUNrQk47O0VEaEJFO0lBQ0ksU0FBQTtFQ21CTjs7RURqQkU7SUFDSSxzQkFBQTtFQ29CTjs7RURsQkU7SUFDSSxlQUFBO0VDcUJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXRhbG9ndWUvY2F0YWxvZ3VlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbi5tYWluIGRpdiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5pbWFnZV9zaXplIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnNhbXBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5kaXNwbGF5X3ByaWNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLm1hcmdpbl9nYXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5ub19tYXJnaW5fbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5kaXNjb3VudF9mb250X2NvbG9yIHtcclxuICAgIGNvbG9yOiAjMDBiMzAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNpZGVCYXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4uaXRlbV9kZXRhaWxzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYnV0dG9uQWxpZ24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufVxyXG4uY3RhX2FkZFRvQ2FydCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ3MDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubG9hZGVyX2FsaWdubWVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuLm5vRmlsdGVyX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubWFyZ2luX2dhcCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAubWFpbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZUJhciB7XHJcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBkaXYuZGlzcGxheV9wcmljZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxNzVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbkFsaWduIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAubW9iaWxlX3dpZHRoIHtcclxuICAgICAgICB3aWR0aDogNTB2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxvYWRlcl9hbGlnbm1lbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDY1JTtcclxuICAgIH1cclxufSIsIi5tYWluIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5tYWluIGRpdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW1hZ2Vfc2l6ZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc2FtcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRpc3BsYXlfcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tYXJnaW5fZ2FwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubm9fbWFyZ2luX25hbWUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZGlzY291bnRfZm9udF9jb2xvciB7XG4gIGNvbG9yOiAjMDBiMzAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZGVCYXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1JTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLml0ZW1fZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ1dHRvbkFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbn1cblxuLmN0YV9hZGRUb0NhcnQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNzAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9hZGVyX2FsaWdubWVudCB7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cblxuLm5vRmlsdGVyX3RleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tYXJnaW5fZ2FwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIC5zaWRlQmFyIHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIGRpdi5kaXNwbGF5X3ByaWNlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE3NXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9uQWxpZ24ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5tb2JpbGVfd2lkdGgge1xuICAgIHdpZHRoOiA1MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubG9hZGVyX2FsaWdubWVudCB7XG4gICAgbWFyZ2luLXRvcDogNjUlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/catalogue/catalogue.component.ts":
/*!**************************************************!*\
  !*** ./src/app/catalogue/catalogue.component.ts ***!
  \**************************************************/
/*! exports provided: CatalogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueComponent", function() { return CatalogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_view_model_cart_view_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/view-model/cart.view-model */ "./src/app/models/view-model/cart.view-model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CatalogueComponent = /** @class */ (function () {
    function CatalogueComponent(userService, dataService, router) {
        this.userService = userService;
        this.dataService = dataService;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.buttonName = 'Add to Cart';
        this.catalogueLoading = false;
        this.noFilteredItems = false;
        this.vm = new _models_view_model_cart_view_model__WEBPACK_IMPORTED_MODULE_5__["CartViewModel"]();
    }
    CatalogueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCatalogueItems();
        setTimeout(function () {
            _this.catalogueLoading = false;
        }, 1500);
        this.catalogueLoading = true;
    };
    CatalogueComponent.prototype.getCatalogueItems = function () {
        var data = this.userService.getItems();
        this.arrayOfItems = data;
        this.dataService.changeMessage(this.arrayOfItems);
        this.itemLength = Object.keys(data).length;
        for (var i = 0; i < this.itemLength; i++) {
            this.discountPrice = (data[i].discount * data[i].price) / 100;
            // tslint:disable-next-line:no-string-literal
            data[i]['discountedPrice'] = data[i].price - Math.ceil(this.discountPrice);
            // data[i]['discountAmount'] = data[i].price - data[i].discountedPrice;
        }
    };
    CatalogueComponent.prototype.addToCart = function (id) {
        var _this = this;
        this.arrayOfItems.forEach(function (element) {
            // tslint:disable-next-line:no-conditional-assignment
            if (element.id === id) {
                _this.dataService.changeCart(element);
                _this.router.navigateByUrl('cart');
            }
        });
    };
    // tslint:disable-next-line:use-life-cycle-interface
    CatalogueComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    CatalogueComponent.prototype.receiveMessage = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.catalogueLoading = false;
        }, 1500);
        this.arrayOfItems = event;
        this.catalogueLoading = true;
    };
    CatalogueComponent.prototype.filterStatus = function (event) {
        this.noFilteredItems = event;
    };
    CatalogueComponent.ctorParameters = function () { return [
        { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    CatalogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalogue',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./catalogue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/catalogue/catalogue.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./catalogue.component.scss */ "./src/app/catalogue/catalogue.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CatalogueComponent);
    return CatalogueComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.scss":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter_button {\n  width: 100px;\n  height: 35px;\n  border: none;\n  outline: none;\n  background-color: #009ade;\n  border-radius: 20px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.slidecontainer {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n@media only screen and (max-width: 767px) {\n  .slidecontainer {\n    width: auto;\n    margin: 0 7%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyL0M6XFxVc2Vyc1xcYWtzaGFcXE9uZURyaXZlXFxEb2N1bWVudHNcXGNhcnQtQXBwXFxjYXJ0LUFwcC9zcmNcXGFwcFxcZmlsdGVyXFxmaWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUU7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDR0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyX2J1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWFkZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNsaWRlY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNsaWRlY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIG1hcmdpbjogMCA3JTtcclxuICAgIH1cclxuICB9IiwiLmZpbHRlcl9idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2xpZGVjb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2xpZGVjb250YWluZXIge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMCA3JTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");




var FilterComponent = /** @class */ (function () {
    function FilterComponent(dataService) {
        this.dataService = dataService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterItemLoad = false;
        this.noFilteredItems = false;
        this.value = 100;
        this.options = {
            floor: 0,
            ceil: 600,
            translate: function (value, label) {
                switch (label) {
                    case ng5_slider__WEBPACK_IMPORTED_MODULE_3__["LabelType"].Low:
                        return '<span>Min price:</span> \u20B9' + value;
                    default:
                        return '\u20B9' + value;
                }
            }
        };
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent.prototype.sliderEvent = function (value) {
        this.arrayOfItemsToSort = this.arrayOfItemsToSort.filter(function (item) { return item.discountedPrice >= value; });
    };
    FilterComponent.prototype.filterItems = function () {
        this.messageEvent.emit(this.arrayOfItemsToSort);
        if (this.arrayOfItemsToSort.length === 0) {
            this.noFilteredItems = true;
            this.filterEvent.emit(this.noFilteredItems);
        }
    };
    FilterComponent.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "arrayOfItemsToSort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "messageEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "filterEvent", void 0);
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.component.scss */ "./src/app/filter/filter.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  width: 100%;\n  height: 60px;\n  background-color: #009ade;\n}\n\n.icons_right {\n  float: right;\n  margin-right: 5%;\n  margin-top: 20px;\n  cursor: pointer;\n}\n\n.icons_gap {\n  margin: 0 15px;\n}\n\n.svg_icon {\n  height: 30px;\n  width: 30px;\n}\n\n.icons_left {\n  float: left;\n  margin-left: 30px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcYWtzaGFcXE9uZURyaXZlXFxEb2N1bWVudHNcXGNhcnQtQXBwXFxjYXJ0LUFwcC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWRlO1xyXG59XHJcbi5pY29uc19yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaWNvbnNfZ2FwIHtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcbi5zdmdfaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG4uaWNvbnNfbGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufSIsIi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWRlO1xufVxuXG4uaWNvbnNfcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25zX2dhcCB7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuXG4uc3ZnX2ljb24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uaWNvbnNfbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/view-model/cart.view-model.ts":
/*!******************************************************!*\
  !*** ./src/app/models/view-model/cart.view-model.ts ***!
  \******************************************************/
/*! exports provided: CartViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartViewModel", function() { return CartViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CartViewModel = /** @class */ (function () {
    function CartViewModel() {
        this.cartData = new Array();
    }
    return CartViewModel;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentMessage = this.messageSource.asObservable();
        this.obj = {};
        this.cartInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.obj);
        this.cartId = this.cartInfo.asObservable();
    }
    DataService.prototype.changeMessage = function (data) {
        this.messageSource.next(data);
    };
    DataService.prototype.changeCart = function (cartData) {
        this.cartInfo.next(cartData);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/http-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/http-service.service.ts ***!
  \**************************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(http) {
        this.http = http;
    }
    HttpServiceService.prototype.jsonGet = function (url) {
        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mainUrl;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get(url, httpOptions);
    };
    HttpServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/services/user-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-service.service.ts ***!
  \**************************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserServiceService = /** @class */ (function () {
    function UserServiceService() {
    }
    UserServiceService.prototype.getItems = function () {
        var products = [
            {
                "id": 1,
                "img_url": "./assets/kurkure.jpg",
                "price": 20,
                "discount": 5,
                "name": "Kurkure"
            },
            {
                "id": 2,
                "img_url": './assets/kitkat.jpg',
                "price": 10,
                "discount": 0,
                "name": "Kitkat"
            },
            {
                "id": 3,
                "img_url": './assets/celebrations.jpg',
                "price": 450,
                "discount": 10,
                "name": "Cadbury Celebrations"
            },
            {
                "id": 4,
                "img_url": './assets/maggi.jpg',
                "price": 60,
                "discount": 0,
                "name": "Maggi"
            },
            {
                "id": 5,
                "img_url": './assets/iphone.jpg',
                "price": 350,
                "discount": 20,
                "name": "iPhone 13 Pro Max 128GB"
            },
        ];
        return products;
    };
    UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/app/sort/sort.component.scss":
/*!******************************************!*\
  !*** ./src/app/sort/sort.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".display_sort_by {\n  display: flex;\n  padding: 20px;\n}\n\n.margin_gap {\n  margin-right: 20px;\n  color: #808080;\n  cursor: pointer;\n}\n\n.margin_gap_sort_by {\n  cursor: pointer;\n  color: #000;\n  margin-right: 20px;\n}\n\n.isActive {\n  color: #009ade;\n  text-decoration: underline;\n}\n\n@media only screen and (max-width: 767px) {\n  .display_sort_by {\n    padding: 10px;\n    font-size: 14px;\n  }\n\n  .margin_gap {\n    margin-right: 10px;\n  }\n}\n\n.slidecontainer {\n  width: 15%;\n  /* Width of the outside container */\n  margin-bottom: 20px;\n  margin-left: 20px;\n}\n\n/* The slider itself */\n\n.slider {\n  -webkit-appearance: none;\n  /* Override default CSS styles */\n  -moz-appearance: none;\n       appearance: none;\n  width: 100%;\n  /* Full-width */\n  height: 20px;\n  /* Specified height */\n  background: #d3d3d3;\n  /* Grey background */\n  outline: none;\n  /* Remove outline */\n  opacity: 0.7;\n  /* Set transparency (for mouse-over effects on hover) */\n  /* 0.2 seconds transition on hover */\n  transition: opacity 0.2s;\n  border-radius: 20px;\n}\n\n/* Mouse-over effects */\n\n.slider:hover {\n  opacity: 1;\n  /* Fully shown on mouse-over */\n}\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  /* Override default look */\n  appearance: none;\n  width: 20px;\n  /* Set a specific slider handle width */\n  height: 20px;\n  /* Slider handle height */\n  background: #009ade;\n  /* Green background */\n  cursor: pointer;\n  /* Cursor on hover */\n  border-radius: 70%;\n}\n\n.slider::-moz-range-thumb {\n  width: 25px;\n  /* Set a specific slider handle width */\n  height: 25px;\n  /* Slider handle height */\n  background: #4CAF50;\n  /* Green background */\n  cursor: pointer;\n  /* Cursor on hover */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29ydC9DOlxcVXNlcnNcXGFrc2hhXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxjYXJ0LUFwcFxcY2FydC1BcHAvc3JjXFxhcHBcXHNvcnRcXHNvcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NvcnQvc29ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNJSjs7QURGQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGVBQUE7RUNLTjs7RURIRTtJQUNJLGtCQUFBO0VDTU47QUFDRjs7QURIQTtFQUNJLFVBQUE7RUFBWSxtQ0FBQTtFQUNaLG1CQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURIRSxzQkFBQTs7QUFDQTtFQUNFLHdCQUFBO0VBQTJCLGdDQUFBO0VBQzNCLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxxQkFBQTtFQUNkLG1CQUFBO0VBQXFCLG9CQUFBO0VBQ3JCLGFBQUE7RUFBZSxtQkFBQTtFQUNmLFlBQUE7RUFBYyx1REFBQTtFQUNXLG9DQUFBO0VBQ3pCLHdCQUFBO0VBQ0EsbUJBQUE7QUNhSjs7QURWRSx1QkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFBWSw4QkFBQTtBQ2NoQjs7QURYRSxnSEFBQTs7QUFDQTtFQUNFLHdCQUFBO0VBQTBCLDBCQUFBO0VBQzFCLGdCQUFBO0VBQ0EsV0FBQTtFQUFhLHVDQUFBO0VBQ2IsWUFBQTtFQUFjLHlCQUFBO0VBQ2QsbUJBQUE7RUFBcUIscUJBQUE7RUFDckIsZUFBQTtFQUFpQixvQkFBQTtFQUNqQixrQkFBQTtBQ21CSjs7QURoQkU7RUFDRSxXQUFBO0VBQWEsdUNBQUE7RUFDYixZQUFBO0VBQWMseUJBQUE7RUFDZCxtQkFBQTtFQUFxQixxQkFBQTtFQUNyQixlQUFBO0VBQWlCLG9CQUFBO0FDdUJyQiIsImZpbGUiOiJzcmMvYXBwL3NvcnQvc29ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5X3NvcnRfYnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLm1hcmdpbl9nYXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hcmdpbl9nYXBfc29ydF9ieSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uaXNBY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDlhZGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuZGlzcGxheV9zb3J0X2J5IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fZ2FwIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbGlkZWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTUlOyAvKiBXaWR0aCBvZiB0aGUgb3V0c2lkZSBjb250YWluZXIgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHNsaWRlciBpdHNlbGYgKi9cclxuICAuc2xpZGVyIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgIC8qIE92ZXJyaWRlIGRlZmF1bHQgQ1NTIHN0eWxlcyAqL1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsLXdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDIwcHg7IC8qIFNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7IC8qIEdyZXkgYmFja2dyb3VuZCAqL1xyXG4gICAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlIG91dGxpbmUgKi9cclxuICAgIG9wYWNpdHk6IDAuNzsgLyogU2V0IHRyYW5zcGFyZW5jeSAoZm9yIG1vdXNlLW92ZXIgZWZmZWN0cyBvbiBob3ZlcikgKi9cclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzOyAvKiAwLjIgc2Vjb25kcyB0cmFuc2l0aW9uIG9uIGhvdmVyICovXHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xyXG4gIC5zbGlkZXI6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTsgLyogRnVsbHkgc2hvd24gb24gbW91c2Utb3ZlciAqL1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgc2xpZGVyIGhhbmRsZSAodXNlIC13ZWJraXQtIChDaHJvbWUsIE9wZXJhLCBTYWZhcmksIEVkZ2UpIGFuZCAtbW96LSAoRmlyZWZveCkgdG8gb3ZlcnJpZGUgZGVmYXVsdCBsb29rKSAqL1xyXG4gIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogT3ZlcnJpZGUgZGVmYXVsdCBsb29rICovXHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDIwcHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cclxuICAgIGhlaWdodDogMjBweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQ6ICMwMDlhZGU7IC8qIEdyZWVuIGJhY2tncm91bmQgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA3MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gICAgd2lkdGg6IDI1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cclxuICAgIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7IC8qIEdyZWVuIGJhY2tncm91bmQgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXHJcbiAgfSIsIi5kaXNwbGF5X3NvcnRfYnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubWFyZ2luX2dhcCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hcmdpbl9nYXBfc29ydF9ieSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmlzQWN0aXZlIHtcbiAgY29sb3I6ICMwMDlhZGU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5kaXNwbGF5X3NvcnRfYnkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLm1hcmdpbl9nYXAge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuLnNsaWRlY29udGFpbmVyIHtcbiAgd2lkdGg6IDE1JTtcbiAgLyogV2lkdGggb2YgdGhlIG91dHNpZGUgY29udGFpbmVyICovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4vKiBUaGUgc2xpZGVyIGl0c2VsZiAqL1xuLnNsaWRlciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBDU1Mgc3R5bGVzICovXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsLXdpZHRoICovXG4gIGhlaWdodDogMjBweDtcbiAgLyogU3BlY2lmaWVkIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xuICAvKiBHcmV5IGJhY2tncm91bmQgKi9cbiAgb3V0bGluZTogbm9uZTtcbiAgLyogUmVtb3ZlIG91dGxpbmUgKi9cbiAgb3BhY2l0eTogMC43O1xuICAvKiBTZXQgdHJhbnNwYXJlbmN5IChmb3IgbW91c2Utb3ZlciBlZmZlY3RzIG9uIGhvdmVyKSAqL1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vKiBNb3VzZS1vdmVyIGVmZmVjdHMgKi9cbi5zbGlkZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICAvKiBGdWxseSBzaG93biBvbiBtb3VzZS1vdmVyICovXG59XG5cbi8qIFRoZSBzbGlkZXIgaGFuZGxlICh1c2UgLXdlYmtpdC0gKENocm9tZSwgT3BlcmEsIFNhZmFyaSwgRWRnZSkgYW5kIC1tb3otIChGaXJlZm94KSB0byBvdmVycmlkZSBkZWZhdWx0IGxvb2spICovXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBsb29rICovXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXG4gIGhlaWdodDogMjBweDtcbiAgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cbiAgYmFja2dyb3VuZDogIzAwOWFkZTtcbiAgLyogR3JlZW4gYmFja2dyb3VuZCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIEN1cnNvciBvbiBob3ZlciAqL1xuICBib3JkZXItcmFkaXVzOiA3MCU7XG59XG5cbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMjVweDtcbiAgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xuICBoZWlnaHQ6IDI1cHg7XG4gIC8qIFNsaWRlciBoYW5kbGUgaGVpZ2h0ICovXG4gIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gIC8qIEdyZWVuIGJhY2tncm91bmQgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBDdXJzb3Igb24gaG92ZXIgKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/sort/sort.component.ts":
/*!****************************************!*\
  !*** ./src/app/sort/sort.component.ts ***!
  \****************************************/
/*! exports provided: SortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortComponent", function() { return SortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortComponent = /** @class */ (function () {
    function SortComponent() {
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isActive = 0;
        this.isActiveHigh = 0;
        this.isActiveDiscount = 0;
    }
    SortComponent.prototype.ngOnInit = function () {
    };
    SortComponent.prototype.highToLow = function () {
        this.isActiveHigh = 1;
        this.isActive = 0;
        this.isActiveDiscount = 0;
        this.arrayOfItemsToSort.sort(function (itemPriceHigh, itemPriceLow) {
            return itemPriceHigh.discountedPrice - itemPriceLow.discountedPrice;
        });
        return this.arrayOfItemsToSort.reverse();
    };
    SortComponent.prototype.lowToHigh = function () {
        this.isActive = 1;
        this.isActiveHigh = 0;
        this.isActiveDiscount = 0;
        this.arrayOfItemsToSort.sort(function (itemPriceHigh, itemPriceLow) {
            return itemPriceHigh.discountedPrice - itemPriceLow.discountedPrice;
        });
    };
    SortComponent.prototype.sortbyDiscount = function () {
        this.isActiveDiscount = 1;
        this.isActiveHigh = 0;
        this.isActive = 0;
        this.arrayOfItemsToSort.sort(function (lowDiscount, highDiscount) {
            return lowDiscount.discount - highDiscount.discount;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortComponent.prototype, "arrayOfItemsToSort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortComponent.prototype, "messageEvent", void 0);
    SortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sort',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sort.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sort/sort.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sort.component.scss */ "./src/app/sort/sort.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SortComponent);
    return SortComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    mainUrl: 'https://api.myjson.com/bins/qzuzi'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aksha\OneDrive\Documents\cart-App\cart-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map