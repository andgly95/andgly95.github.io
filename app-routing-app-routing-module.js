(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-routing-app-routing-module"],{

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: 'file-complaint',
        loadChildren: '../modules/about-us/about-us.module#AboutUsModule',
    },
    {
        path: '',
        loadChildren: '../modules/home/home.module#HomeModule'
    },
    {
        path: 'search-businesses',
        loadChildren: '../modules/browse-lotteries/browse-lotteries.module#BrowseLotteriesModule'
    },
    {
        path: 'dashboard',
        loadChildren: '../modules/dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'user-management',
        loadChildren: '../modules/user-management/user-management.module#UserManagementModule'
    },
    {
        path: 'faq',
        loadChildren: '../modules/faq/faq.module#FaqModule',
    },
    {
        path: 'business',
        loadChildren: '../modules/household/household.module#HouseholdModule',
    },
    {
        path: 'details',
        loadChildren: '../modules/details/details.module#DetailsModule',
    },
    {
        path: 'auth',
        loadChildren: '../modules/auth/auth.module#AuthModule',
    },
    {
        path: 'unauthorized',
        loadChildren: '../modules/unauthorized/unauthorized.module#UnauthorizedModule',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-routing-app-routing-module.js.map