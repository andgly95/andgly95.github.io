(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-management-user-management-module"],{

/***/ "./src/app/modules/user-management/components/change-password/change-password.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/user-management/components/change-password/change-password.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"changePasswordForm\" (submit)=\"saveChangePasswordForm()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group m-form__group row\">\r\n        <label class=\"col-12 col-form-label\">Current Password</label>\r\n        <div class=\"col-12\">\r\n          <form-control-validation [vControlName]=\"'currentPassword'\" [vFromGroup]=\"changePasswordForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"currentPassword\">\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group m-form__group row\">\r\n        <label class=\"col-12 col-form-label\">New Password</label>\r\n        <div class=\"col-12\">\r\n          <form-control-validation [vControlName]=\"'newPassword'\" [vFromGroup]=\"changePasswordForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"newPassword\">\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group m-form__group row\">\r\n        <label class=\"col-12 col-form-label\">Confirm New Password</label>\r\n        <div class=\"col-12\">\r\n          <form-control-validation [vControlName]=\"'confirmNewPassword'\"\r\n                                   [VMessages]=\"changePasswordFormModel.validationMessage\"\r\n                                   [vFromGroup]=\"changePasswordForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"confirmNewPassword\">\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\">update</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/user-management/components/change-password/change-password.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/user-management/components/change-password/change-password.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/modules/form/form-service.service */ "./src/app/core/modules/form/form-service.service.ts");
/* harmony import */ var _services_user_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-management.service */ "./src/app/modules/user-management/services/user-management.service.ts");
/* harmony import */ var _models_change_password_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/change-password-form */ "./src/app/modules/user-management/models/change-password-form.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(userManagementService, formService) {
        this.userManagementService = userManagementService;
        this.formService = formService;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordFormModel = new _models_change_password_form__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordFormModel"](this.data);
        this.changePasswordForm = this.formService.getFormByModel(this.changePasswordFormModel);
        this.changePasswordForm.setValidators(this.checkPasswords);
    };
    ChangePasswordComponent.prototype.saveChangePasswordForm = function () {
        var saveData = {
            currentPassword: this.changePasswordForm.value.currentPassword,
            newPassword: this.changePasswordForm.value.newPassword,
            confirmNewPassword: this.changePasswordForm.value.confirmNewPassword
        };
        this.onSubmit.emit(saveData);
    };
    ChangePasswordComponent.prototype.checkPasswords = function (group) {
        // here we have the 'passwords' group
        var pass = group.controls.newPassword.value;
        var confirmPass = group.controls.confirmNewPassword.value;
        group
            .get('confirmNewPassword')
            .setErrors(pass === confirmPass ? null : { passwordNotEqual: true });
        return group.errors;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ChangePasswordComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "data", void 0);
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/modules/user-management/components/change-password/change-password.component.html")
        }),
        __metadata("design:paramtypes", [_services_user_management_service__WEBPACK_IMPORTED_MODULE_2__["UserManagementService"],
            _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_1__["FormService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-management/components/personal-info/personal-info.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/user-management/components/personal-info/personal-info.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"personalInfoForm\" (submit)=\"saveChangePasswordForm()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">First Name</label>\r\n          <form-control-validation [vControlName]=\"'firstName'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"firstName\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Middle Name</label>\r\n          <form-control-validation [vControlName]=\"'middleName'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"middleName\">\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-12\">\r\n          <div class=\"form-group m-form__group\">\r\n            <label class=\"col-form-label\">E-mail</label>\r\n            <form-control-validation [vControlName]=\"'email'\" [vFromGroup]=\"personalInfoForm\">\r\n              <input type=\"text\" class=\"form-control m-input\" formControlName=\"email\">\r\n            </form-control-validation>\r\n          </div>\r\n          <div class=\"form-group m-form__group\">\r\n            <label class=\"col-form-label\">Alternative E-mail</label>\r\n            <form-control-validation [vControlName]=\"'alternativeEmail'\" [vFromGroup]=\"personalInfoForm\">\r\n              <input type=\"text\" class=\"form-control m-input\" formControlName=\"alternativeEmail\">\r\n            </form-control-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12\"></div>\r\n\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Home Phone Number</label>\r\n          <form-control-validation [vControlName]=\"'homePhoneNumber'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"homePhoneNumber\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Cell Phone Number</label>\r\n          <form-control-validation [vControlName]=\"'cellPhoneNumber'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"cellPhoneNumber\">\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n      <div class=\"rol-12\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Address</label>\r\n          <form-control-validation [vControlName]=\"'address'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"address\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">City</label>\r\n          <form-control-validation [vControlName]=\"'city'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"city\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">State</label>\r\n          <form-control-validation [vControlName]=\"'state'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"state\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Zip</label>\r\n          <form-control-validation [vControlName]=\"'zip'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"zip\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Country</label>\r\n          <form-control-validation [vControlName]=\"'country'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"country\">\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n      <div class=\"rol-12\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Gander</label>\r\n          <form-control-validation [vControlName]=\"'gander'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"gander\">\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">What is your race</label>\r\n          <form-control-validation [vControlName]=\"'userRace'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"userRace\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Are you Hispanic or Latino</label>\r\n          <form-control-validation [vControlName]=\"'userIdHispanicOrLatino'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"userIdHispanicOrLatino\">\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"rol-12\">\r\n        <hr>\r\n      </div>\r\n\r\n      <div class=\"htd-quote-blog\">\r\n        Select tree security question and provide answer to them. This information can be used to reset your\r\n        password if you forget it. Answers are not case sensitive. They must be different.\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Security question1</label>\r\n          <form-control-validation [vControlName]=\"'securityQuestion1'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"securityQuestion1\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Security answer1</label>\r\n          <form-control-validation [vControlName]=\"'securityAnswer1'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"securityAnswer1\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Security question2</label>\r\n          <form-control-validation [vControlName]=\"'securityQuestion2'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"securityQuestion2\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Security answer2</label>\r\n          <form-control-validation [vControlName]=\"'securityAnswer2'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"securityAnswer2\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Security question3</label>\r\n          <form-control-validation [vControlName]=\"'securityQuestion3'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"securityQuestion3\">\r\n          </form-control-validation>\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 form-group m-form__group\">\r\n          <label class=\"col-form-label\">Security answer3</label>\r\n          <form-control-validation [vControlName]=\"'securityAnswer3'\" [vFromGroup]=\"personalInfoForm\">\r\n            <input type=\"text\" class=\"form-control m-input\" formControlName=\"securityAnswer3\">\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"rol-12\">\r\n        <hr>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\">save</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/user-management/components/personal-info/personal-info.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/user-management/components/personal-info/personal-info.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/modules/form/form-service.service */ "./src/app/core/modules/form/form-service.service.ts");
/* harmony import */ var _services_user_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-management.service */ "./src/app/modules/user-management/services/user-management.service.ts");
/* harmony import */ var _models_personal_info_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/personal-info-form */ "./src/app/modules/user-management/models/personal-info-form.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent(userManagementService, formService) {
        this.userManagementService = userManagementService;
        this.formService = formService;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
        this.personalInfoFormModel = new _models_personal_info_form__WEBPACK_IMPORTED_MODULE_3__["PersonalInfoFormModel"](this.data);
        this.personalInfoForm = this.formService.getFormByModel(this.personalInfoFormModel);
        // this.personalInfoForm.setValidators(this.checkPasswords)
    };
    PersonalInfoComponent.prototype.saveChangePasswordForm = function () {
        var saveData = {
            currentPassword: this.personalInfoForm.value.currentPassword,
            newPassword: this.personalInfoForm.value.newPassword,
            confirmNewPassword: this.personalInfoForm.value.confirmNewPassword
        };
        this.onSubmit.emit(saveData);
    };
    PersonalInfoComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.newPassword.value;
        var confirmPass = group.controls.confirmNewPassword.value;
        group
            .get('confirmNewPassword')
            .setErrors(pass === confirmPass ? null : { passwordNotEqual: true });
        return group.errors;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PersonalInfoComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalInfoComponent.prototype, "data", void 0);
    PersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-info',
            template: __webpack_require__(/*! ./personal-info.component.html */ "./src/app/modules/user-management/components/personal-info/personal-info.component.html")
        }),
        __metadata("design:paramtypes", [_services_user_management_service__WEBPACK_IMPORTED_MODULE_2__["UserManagementService"],
            _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_1__["FormService"]])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-management/models/account-recovery-view.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user-management/models/account-recovery-view.model.ts ***!
  \*******************************************************************************/
/*! exports provided: AccountRecoveryViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRecoveryViewModel", function() { return AccountRecoveryViewModel; });
var AccountRecoveryViewModel = /** @class */ (function () {
    function AccountRecoveryViewModel() {
    }
    return AccountRecoveryViewModel;
}());



/***/ }),

/***/ "./src/app/modules/user-management/models/change-password-form.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/user-management/models/change-password-form.ts ***!
  \************************************************************************/
/*! exports provided: ChangePasswordFormModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFormModel", function() { return ChangePasswordFormModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_modules_form_common_form_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/modules/form/common-form-constructor */ "./src/app/core/modules/form/common-form-constructor.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ChangePasswordFormValidation = {
    currentPassword: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(7)],
    newPassword: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    confirmNewPassword: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
};
var ChangePasswordFormValidationMessage = {
    'confirmNewPassword.passwordNotEqual': 'Confirmed password not equal to password field'
};
var ChangePasswordFormModel = /** @class */ (function (_super) {
    __extends(ChangePasswordFormModel, _super);
    function ChangePasswordFormModel(data) {
        var _this = _super.call(this) || this;
        _this.currentPassword = '';
        _this.newPassword = '';
        _this.confirmNewPassword = '';
        _this.setData(data);
        return _this;
    }
    Object.defineProperty(ChangePasswordFormModel.prototype, "validationRules", {
        get: function () {
            return ChangePasswordFormValidation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordFormModel.prototype, "validationMessage", {
        get: function () {
            return ChangePasswordFormValidationMessage;
        },
        enumerable: true,
        configurable: true
    });
    return ChangePasswordFormModel;
}(_core_modules_form_common_form_constructor__WEBPACK_IMPORTED_MODULE_1__["CommonFormConstructor"]));



/***/ }),

/***/ "./src/app/modules/user-management/models/forgot-password-view.model.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/user-management/models/forgot-password-view.model.ts ***!
  \******************************************************************************/
/*! exports provided: ForgotPasswordViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordViewModel", function() { return ForgotPasswordViewModel; });
var ForgotPasswordViewModel = /** @class */ (function () {
    function ForgotPasswordViewModel() {
    }
    return ForgotPasswordViewModel;
}());



/***/ }),

/***/ "./src/app/modules/user-management/models/personal-info-form.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user-management/models/personal-info-form.ts ***!
  \**********************************************************************/
/*! exports provided: PersonalInfoFormModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoFormModel", function() { return PersonalInfoFormModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_modules_form_common_form_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/modules/form/common-form-constructor */ "./src/app/core/modules/form/common-form-constructor.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PersonalInfoFormValidation = {
    firstName: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    lastName: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    middleName: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    email: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    alternativeEmail: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    homePhoneNumber: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    cellPhoneNumber: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    address: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    city: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    state: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    zip: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    country: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    gander: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    userRace: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    userIdHispanicOrLatino: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    securityQuestion1: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    securityAnswer1: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    securityQuestion2: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    securityAnswer2: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    securityQuestion3: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    securityAnswer3: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
};
var PersonalInfoFormModel = /** @class */ (function (_super) {
    __extends(PersonalInfoFormModel, _super);
    function PersonalInfoFormModel(data) {
        var _this = _super.call(this) || this;
        _this.firstName = '';
        _this.lastName = '';
        _this.middleName = '';
        _this.email = '';
        _this.alternativeEmail = '';
        _this.homePhoneNumber = '';
        _this.cellPhoneNumber = '';
        _this.address = '';
        _this.city = '';
        _this.state = '';
        _this.zip = '';
        _this.country = '';
        _this.gander = '';
        _this.userRace = '';
        _this.userIdHispanicOrLatino = '';
        _this.securityQuestion1 = '';
        _this.securityAnswer1 = '';
        _this.securityQuestion2 = '';
        _this.securityAnswer2 = '';
        _this.securityQuestion3 = '';
        _this.securityAnswer3 = '';
        _this.setData(data);
        return _this;
    }
    Object.defineProperty(PersonalInfoFormModel.prototype, "validationRules", {
        get: function () {
            return PersonalInfoFormValidation;
        },
        enumerable: true,
        configurable: true
    });
    return PersonalInfoFormModel;
}(_core_modules_form_common_form_constructor__WEBPACK_IMPORTED_MODULE_1__["CommonFormConstructor"]));



/***/ }),

/***/ "./src/app/modules/user-management/models/reset-password-form.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user-management/models/reset-password-form.model.ts ***!
  \*****************************************************************************/
/*! exports provided: ResetPasswordFormModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordFormModel", function() { return ResetPasswordFormModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_modules_form_common_form_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/modules/form/common-form-constructor */ "./src/app/core/modules/form/common-form-constructor.ts");
/* harmony import */ var _core_modules_form_validators_uppercase_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/modules/form/validators/uppercase.validator */ "./src/app/core/modules/form/validators/uppercase.validator.ts");
/* harmony import */ var _core_modules_form_validators_lowercase_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/modules/form/validators/lowercase.validator */ "./src/app/core/modules/form/validators/lowercase.validator.ts");
/* harmony import */ var _core_modules_form_validators_digit_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/modules/form/validators/digit.validator */ "./src/app/core/modules/form/validators/digit.validator.ts");
/* harmony import */ var _core_modules_form_validators_special_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/modules/form/validators/special.validator */ "./src/app/core/modules/form/validators/special.validator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var ResetPasswordFormValidation = {
    password: [
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
        _core_modules_form_validators_uppercase_validator__WEBPACK_IMPORTED_MODULE_2__["uppercaseValidator"],
        _core_modules_form_validators_lowercase_validator__WEBPACK_IMPORTED_MODULE_3__["lowercaseValidator"],
        _core_modules_form_validators_digit_validator__WEBPACK_IMPORTED_MODULE_4__["digitValidator"],
        _core_modules_form_validators_special_validator__WEBPACK_IMPORTED_MODULE_5__["specialValidator"]
    ],
    confirmPassword: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
};
var ResetPasswordFormModel = /** @class */ (function (_super) {
    __extends(ResetPasswordFormModel, _super);
    function ResetPasswordFormModel(data) {
        var _this = _super.call(this) || this;
        _this.password = '';
        _this.confirmPassword = '';
        _this.setData(data);
        return _this;
    }
    Object.defineProperty(ResetPasswordFormModel.prototype, "validationRules", {
        get: function () {
            return ResetPasswordFormValidation;
        },
        enumerable: true,
        configurable: true
    });
    return ResetPasswordFormModel;
}(_core_modules_form_common_form_constructor__WEBPACK_IMPORTED_MODULE_1__["CommonFormConstructor"]));



/***/ }),

/***/ "./src/app/modules/user-management/models/reset-password-view.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user-management/models/reset-password-view.model.ts ***!
  \*****************************************************************************/
/*! exports provided: ResetPasswordViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordViewModel", function() { return ResetPasswordViewModel; });
var ResetPasswordViewModel = /** @class */ (function () {
    function ResetPasswordViewModel() {
    }
    return ResetPasswordViewModel;
}());



/***/ }),

/***/ "./src/app/modules/user-management/pages/account-recovery/account-recovery.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/account-recovery/account-recovery.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet container\">\r\n  <div class=\"m-portlet__head\">\r\n    <div class=\"m-portlet__head-caption\">\r\n      <div class=\"m-portlet__head-title\">\r\n        <span class=\"m-portlet__head-icon\">\r\n          <i class=\"la la-gear\"></i>\r\n        </span>\r\n        <h3 class=\"m-portlet__head-text\">\r\n          Account Recovery\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"m-portlet__body\">\r\n    <div *ngIf=\"!optionsLoaded\">\r\n      <label>Enter your username or email address:</label>\r\n      <input class=\"form-control\" type=\"text\" [formControl]=\"recoveryControl\" />\r\n      <br />\r\n      <button class=\"btn btn-brand\" (click)=\"getOptions()\" [disabled]=\"!recoveryControl.valid\">Submit</button>\r\n    </div>\r\n    <div *ngIf=\"optionsLoaded && !tokenSent\">\r\n      <div class=\"form-group\">\r\n        <mat-radio-group [formControl]=\"recoveryMethod\">\r\n          <div class=\"row\" *ngFor=\"let option of recoveryOptions\">\r\n            <mat-radio-button class=\"padding-right-5\" [value]=\"option\"></mat-radio-button>\r\n            <label>{{methodDescriptions[option] + \" at \" + recoveryOptionsModel[option]}}</label>\r\n          </div>\r\n        </mat-radio-group>\r\n        <br />\r\n        <button class=\"btn btn-brand\" (click)=\"submitForm()\" [disabled]=\"!recoveryMethod.valid\">Submit</button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"tokenSent\">\r\n      <h3 class=\"m-portlet__body-text\">\r\n        A link to reset your password was sent to your email.\r\n      </h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/user-management/pages/account-recovery/account-recovery.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/account-recovery/account-recovery.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC9wYWdlcy9hY2NvdW50LXJlY292ZXJ5L2FjY291bnQtcmVjb3ZlcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/user-management/pages/account-recovery/account-recovery.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/account-recovery/account-recovery.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AccountRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRecoveryComponent", function() { return AccountRecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_enums_authMethodEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/enums/authMethodEnum */ "./src/app/shared/enums/authMethodEnum.ts");
/* harmony import */ var _models_account_recovery_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/account-recovery-view.model */ "./src/app/modules/user-management/models/account-recovery-view.model.ts");
/* harmony import */ var _models_forgot_password_view_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/forgot-password-view.model */ "./src/app/modules/user-management/models/forgot-password-view.model.ts");
/* harmony import */ var _services_user_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user-management.service */ "./src/app/modules/user-management/services/user-management.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AccountRecoveryComponent = /** @class */ (function () {
    function AccountRecoveryComponent(userService, activatedRoute, cdRef, toastr) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.optionsLoaded = false;
        this.tokenSent = false;
        this.methodDescriptions = {
            email: 'Primary email',
            email2: 'Secondary email',
            phone: 'Phone number'
        };
    }
    AccountRecoveryComponent.prototype.ngOnInit = function () {
        this.recoveryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.recoveryMethod = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.recoveryMethod.valueChanges.subscribe(function (v) { return console.log(v); });
        this.activatedRoute.queryParams.subscribe(function (params) {
            //this.userId = params['id'];
            //this.code = params['code'];
        });
    };
    AccountRecoveryComponent.prototype.getRecoveryOptions = function (data) {
        return Object.keys(data).filter(function (k) { return data[k]; });
    };
    AccountRecoveryComponent.prototype.getOptions = function () {
        var _this = this;
        var model = new _models_account_recovery_view_model__WEBPACK_IMPORTED_MODULE_6__["AccountRecoveryViewModel"]();
        var recoveryParam = this.recoveryControl.value;
        if (recoveryParam.includes('@')) {
            model.email = recoveryParam;
        }
        else {
            model.username = recoveryParam;
        }
        this.userService.recoveryOptions(model).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.recoveryOptionsModel = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](res);
                delete res['success'] && delete res['id'];
                _this.recoveryOptions = _this.getRecoveryOptions(res);
                _this.optionsLoaded = true;
                if (!_this.cdRef['destroyed'])
                    _this.cdRef.detectChanges();
            }
            else {
                _this.toastr.error('Could not verify your username or email address');
            }
        });
    };
    AccountRecoveryComponent.prototype.getAuthMethod = function (type) {
        switch (type) {
            case 'email':
                return _shared_enums_authMethodEnum__WEBPACK_IMPORTED_MODULE_5__["AuthenticationMethodEnum"].EMAIL;
            case 'email2':
                return _shared_enums_authMethodEnum__WEBPACK_IMPORTED_MODULE_5__["AuthenticationMethodEnum"].EMAIL2;
            case 'phone':
                return _shared_enums_authMethodEnum__WEBPACK_IMPORTED_MODULE_5__["AuthenticationMethodEnum"].PHONE;
            default:
                return 0;
        }
    };
    AccountRecoveryComponent.prototype.submitForm = function () {
        var _this = this;
        console.log(this.recoveryOptionsModel);
        var model = new _models_forgot_password_view_model__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordViewModel"]();
        model.id = this.recoveryOptionsModel.id;
        model.method = this.getAuthMethod(this.recoveryMethod.value);
        this.userService.forgotPassword(model).subscribe(function (res) {
            console.log(res);
            _this.tokenSent = true;
            if (!_this.cdRef['destroyed'])
                _this.cdRef.detectChanges();
        });
    };
    AccountRecoveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-acccount-recovery',
            template: __webpack_require__(/*! ./account-recovery.component.html */ "./src/app/modules/user-management/pages/account-recovery/account-recovery.component.html"),
            styles: [__webpack_require__(/*! ./account-recovery.component.scss */ "./src/app/modules/user-management/pages/account-recovery/account-recovery.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_management_service__WEBPACK_IMPORTED_MODULE_8__["UserManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AccountRecoveryComponent);
    return AccountRecoveryComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-management/pages/confirm-registration/confirm-registration.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/confirm-registration/confirm-registration.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet\">\r\n  <div class=\"m-portlet__head\">\r\n    <div class=\"m-portlet__head-caption\">\r\n      <div class=\"m-portlet__head-title\">\r\n        <span class=\"m-portlet__head-icon\">\r\n          <i class=\"la la-gear\"></i>\r\n        </span>\r\n        <h3 class=\"m-portlet__head-text\">\r\n          Confirm Registration\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"m-portlet__body\">\r\n    <div *ngIf=\"emailConfirmed && !tokenValidated\">\r\n      <input class=\"form-control\" type=\"text\" [formControl]=\"tokenControl\" />\r\n      <br />\r\n      <button class=\"btn btn-brand\" (click)=\"submitForm()\">Submit</button>\r\n    </div>\r\n    <div *ngIf=\"tokenValidated\">\r\n      <h3 class=\"m-portlet__body-text\">\r\n        Thank you for confirming your account!\r\n      </h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/user-management/pages/confirm-registration/confirm-registration.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/confirm-registration/confirm-registration.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC9wYWdlcy9jb25maXJtLXJlZ2lzdHJhdGlvbi9jb25maXJtLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/user-management/pages/confirm-registration/confirm-registration.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/confirm-registration/confirm-registration.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ConfirmRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmRegistrationComponent", function() { return ConfirmRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-management.service */ "./src/app/modules/user-management/services/user-management.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmRegistrationComponent = /** @class */ (function () {
    function ConfirmRegistrationComponent(userService, activatedRoute, cdRef, toastr) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.code = '';
        this.emailConfirmed = false;
        this.tokenValidated = false;
    }
    ConfirmRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tokenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        //this.tokenControl.valueChanges.subscribe(value => console.log(value));
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.userId = params['id'];
            _this.code = params['code'];
            _this.userService.confirmRegistration(_this.userId, _this.code).subscribe(function (data) {
                if (data.success) {
                    _this.emailConfirmed = true;
                    if (!_this.cdRef['destroyed'])
                        _this.cdRef.detectChanges();
                }
                else {
                    alert('Error: Email could not be verified.');
                }
            });
        });
    };
    ConfirmRegistrationComponent.prototype.submitForm = function () {
        var _this = this;
        console.log(this.userId, this.code);
        console.log(this.tokenControl.value);
        var token = this.tokenControl.value;
        this.userService.confirmOTP(this.userId, token).subscribe(function (res) {
            if (res.success) {
                //this.toastr.success(res.message);
                _this.tokenValidated = true;
                if (!_this.cdRef['destroyed'])
                    _this.cdRef.detectChanges();
            }
            else {
                _this.toastr.error(res.message);
            }
        });
    };
    ConfirmRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-registration',
            template: __webpack_require__(/*! ./confirm-registration.component.html */ "./src/app/modules/user-management/pages/confirm-registration/confirm-registration.component.html"),
            styles: [__webpack_require__(/*! ./confirm-registration.component.scss */ "./src/app/modules/user-management/pages/confirm-registration/confirm-registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_management_service__WEBPACK_IMPORTED_MODULE_2__["UserManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ConfirmRegistrationComponent);
    return ConfirmRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-management/pages/reset-password/reset-password.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/reset-password/reset-password.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet\">\r\n  <div class=\"m-portlet__head\">\r\n    <div class=\"m-portlet__head-caption\">\r\n      <div class=\"m-portlet__head-title\">\r\n        <span class=\"m-portlet__head-icon\">\r\n          <i class=\"la la-gear\"></i>\r\n        </span>\r\n        <h3 class=\"m-portlet__head-text\">\r\n          Reset Password\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"m-portlet__body\">\r\n    <div *ngIf=\"!tokenValidated\">\r\n        <div class=\"input-group mb-3\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"password\"\r\n            [formControl]=\"tokenControl\"/>\r\n        </div>\r\n      <br />\r\n      <button class=\"btn btn-brand\" (click)=\"validateToken()\" [disabled]=\"!tokenControl.valid\">Submit</button>\r\n    </div>\r\n    <div *ngIf=\"tokenValidated && !passwordReset\">\r\n      <form [formGroup]=\"resetPasswordForm\" (submit)=\"resetPassword()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4 center\">\r\n            <div class=\"form-group m-form__group row\">\r\n              <label class=\"col-12 col-form-label\">Password</label>\r\n              <div class=\"col-12\">\r\n                <form-control-validation\r\n                  [vControlName]=\"'password'\"\r\n                  [vFromGroup]=\"resetPasswordForm\"\r\n                  [vHideErrorMessages]=\"true\">\r\n                  <app-condition-input\r\n                    [config]=\"passwordInputConditionConfig\"\r\n                    [input]=\"resetPasswordForm.get('password')\">\r\n                    <div class=\"input-group mb-3\">\r\n                      <input\r\n                        [type]=\"inputType\"\r\n                        class=\"form-control m-input\"\r\n                        formControlName=\"password\"\r\n                        [ngbPopover]=\"validationPopoverBody\"\r\n                        [popoverTitle]=\"validationPopoverTitle\"\r\n                        [autoClose]=\"false\"\r\n                        triggers=\"manual\"\r\n                        #popOver=\"ngbPopover\"\r\n                        (input)=\"onInputChange($event, popOver)\"/>\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\" (click)=\"toggleInputType()\">\r\n                          {{ (inputType==='text') ? 'Hide' : 'Show' }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </app-condition-input>\r\n                </form-control-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group m-form__group row\">\r\n              <label class=\"col-12 col-form-label\">Re-type password</label>\r\n              <div class=\"col-12\">\r\n                <form-control-validation [vControlName]=\"'confirmPassword'\" [vFromGroup]=\"resetPasswordForm\">\r\n                  <app-condition-input\r\n                    [config]=\"confirmPasswordInputConditionConfig\"\r\n                    [display]=\"!!resetPasswordForm.get('confirmPassword').value.length\"\r\n                    [input]=\"resetPasswordForm.get('password').value === resetPasswordForm.get('confirmPassword').value\">\r\n                    <input type=\"text\" class=\"form-control m-input\"\r\n                      formControlName=\"confirmPassword\">\r\n                  </app-condition-input>\r\n                </form-control-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"resetPasswordForm.invalid\">\r\n              Reset Password\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div *ngIf=\"passwordReset\">\r\n      <h3 class=\"m-portlet__body-text\">\r\n        Password reset successfully.\r\n      </h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #validationPopoverTitle><p>Choose a strong password</p></ng-template>\r\n<ng-template #validationPopoverBody>\r\n  <ul class=\"popover-list\">\r\n    <li [ngClass]=\"{valid: isFieldValid('uppercase')}\">One uppercase letter</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('lowercase')}\">One lowercase letter</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('digit')}\">One number</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('special')}\">One special character</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('minlength')}\">At least 8 characters</li>\r\n  </ul>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/modules/user-management/pages/reset-password/reset-password.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/reset-password/reset-password.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n:host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n:host li.valid {\n  color: green; }\n:host li:before {\n  display: inline-block;\n  content: '•';\n  width: 16px; }\n:host li.valid:before {\n  content: '✓'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvcGFnZXMvcmVzZXQtcGFzc3dvcmQvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcbW9kdWxlc1xcdXNlci1tYW5hZ2VtZW50XFxwYWdlc1xccmVzZXQtcGFzc3dvcmRcXHJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUdJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7QUFMcEI7RUFRSSxZQUFZLEVBQUE7QUFSaEI7RUFXSSxxQkFBcUI7RUFDckIsWUFBUztFQUNULFdBQVcsRUFBQTtBQWJmO0VBZ0JJLFlBQVMsRUFBSSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC9wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbjpob3N0IGxpLnZhbGlkIHtcbiAgY29sb3I6IGdyZWVuOyB9XG5cbjpob3N0IGxpOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogJ+KAoic7XG4gIHdpZHRoOiAxNnB4OyB9XG5cbjpob3N0IGxpLnZhbGlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICfinJMnOyB9XG4iLCI6aG9zdCB7XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgbGkudmFsaWQge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxuICBsaTpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb250ZW50OiAn4oCiJztcbiAgICB3aWR0aDogMTZweDtcbiAgfVxuICBsaS52YWxpZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfinJMnO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/user-management/pages/reset-password/reset-password.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/reset-password/reset-password.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/modules/form/form-service.service */ "./src/app/core/modules/form/form-service.service.ts");
/* harmony import */ var _services_user_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-management.service */ "./src/app/modules/user-management/services/user-management.service.ts");
/* harmony import */ var _models_reset_password_form_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/reset-password-form.model */ "./src/app/modules/user-management/models/reset-password-form.model.ts");
/* harmony import */ var _models_reset_password_view_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/reset-password-view.model */ "./src/app/modules/user-management/models/reset-password-view.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(userService, activatedRoute, cdRef, toastr, formService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.formService = formService;
        this.inputType = 'password';
        this.tokenValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\d{6}/)
        ];
        this.code = '';
        this.tokenValidated = false;
        this.confirmPasswordInputConditionConfig = [
            { condition: true, validatorText: 'match' },
            { condition: false, validatorText: 'no match' }
        ];
        this.passwordInputConditionConfig = [
            { condition: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(0)], validatorText: 'not strong' },
            { condition: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)], validatorText: 'strong' },
            { condition: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)], validatorText: 'super strong' }
        ];
    }
    ResetPasswordComponent.prototype.toggleInputType = function () {
        this.inputType = (this.inputType === 'password') ? 'text' : 'password';
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tokenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose(this.tokenValidators));
        //this.tokenControl.valueChanges.subscribe(value => console.log(value));
        this.resetPasswordForm = this.formService.getFormByModel(new _models_reset_password_form_model__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordFormModel"]());
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.userId = params['id'];
            _this.code = params['code'];
        });
        console.log(this);
    };
    ResetPasswordComponent.prototype.validateToken = function () {
        var _this = this;
        console.log(this.userId, this.code);
        console.log(this.tokenControl.value);
        var token = this.tokenControl.value;
        this.userService.confirmTwoFactorAuthentication(this.userId, token)
            .subscribe(function (res) {
            if (res.success) {
                // this.toastr.success(res.message);
                _this.tokenValidated = true;
                if (!_this.cdRef['destroyed'])
                    _this.cdRef.detectChanges();
            }
            else {
                _this.toastr.error(res.message);
            }
        });
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        console.log(this.resetPasswordForm.value);
        var model = new _models_reset_password_view_model__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordViewModel"]();
        model.userId = this.userId;
        model.password = this.resetPasswordForm.get('password').value;
        model.confirmPassword = this.resetPasswordForm.get('confirmPassword').value;
        this.userService.resetPassword(model, this.code).subscribe(function (result) {
            if (result.success) {
                _this.passwordReset = true;
                if (!_this.cdRef['destroyed'])
                    _this.cdRef.detectChanges();
            }
            else {
                _this.toastr.error(result.message);
            }
        });
    };
    ResetPasswordComponent.prototype.onInputChange = function (event, popOver) {
        if (event.target.value && !popOver.isOpen()) {
            popOver.open();
            return;
        }
        else if (!event.target.value && popOver.isOpen()) {
            popOver.close();
            return;
        }
    };
    ResetPasswordComponent.prototype.isFieldValid = function (type) {
        var fieldName = (type === 'minlength') ? type : type + "Validator";
        return (this.resetPasswordForm.get('password').errors && this.resetPasswordForm.get('password').errors[fieldName])
            ? false
            : true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popOver'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ResetPasswordComponent.prototype, "popOver", void 0);
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/modules/user-management/pages/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/modules/user-management/pages/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_management_service__WEBPACK_IMPORTED_MODULE_5__["UserManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_4__["FormService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-management/pages/user-account/user-account.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/user-account/user-account.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet\">\r\n  <div class=\"m-portlet__head\">\r\n    <div class=\"m-portlet__head-caption\">\r\n      <div class=\"m-portlet__head-title\">\r\n        <span class=\"m-portlet__head-icon\">\r\n          <i class=\"la la-gear\"></i>\r\n        </span>\r\n        <h3 class=\"m-portlet__head-text\">\r\n          My Account\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"m-portlet__body pt-2\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Personal Info\">\r\n            <ng-template ngbTabContent>\r\n              <app-personal-info></app-personal-info>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Change Password\">\r\n            <ng-template ngbTabContent>\r\n              <app-change-password (onSubmit)=\"onSubmitChangePasswordForm($event)\"></app-change-password>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/user-management/pages/user-account/user-account.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/user-account/user-account.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC9wYWdlcy91c2VyLWFjY291bnQvdXNlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/user-management/pages/user-account/user-account.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/user-management/pages/user-account/user-account.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/modules/form/form-service.service */ "./src/app/core/modules/form/form-service.service.ts");
/* harmony import */ var _services_user_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-management.service */ "./src/app/modules/user-management/services/user-management.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserAccountComponent = /** @class */ (function () {
    function UserAccountComponent(userManagementService, formService) {
        this.userManagementService = userManagementService;
        this.formService = formService;
    }
    UserAccountComponent.prototype.ngOnInit = function () {
        //this.userManagementService.getUserRegister().subscribe(v => {
        //  console.log(v);
        //});
        // this.userRegistrationForm = this.formService.getFormByModel(new UserRegistrationFormModel());
    };
    UserAccountComponent.prototype.onSubmitChangePasswordForm = function (data) {
        console.log(data);
    };
    UserAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-account',
            template: __webpack_require__(/*! ./user-account.component.html */ "./src/app/modules/user-management/pages/user-account/user-account.component.html"),
            styles: [__webpack_require__(/*! ./user-account.component.scss */ "./src/app/modules/user-management/pages/user-account/user-account.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_management_service__WEBPACK_IMPORTED_MODULE_2__["UserManagementService"],
            _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_1__["FormService"]])
    ], UserAccountComponent);
    return UserAccountComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-management/services/user-management.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user-management/services/user-management.service.ts ***!
  \*****************************************************************************/
/*! exports provided: UserManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementService", function() { return UserManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_identity_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/identity-api.service */ "./src/app/core/services/identity-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserManagementService = /** @class */ (function () {
    function UserManagementService(identityApiService) {
        this.identityApiService = identityApiService;
    }
    UserManagementService.prototype.getUserRegister = function () {
        return this.identityApiService.get('Account/Register');
    };
    UserManagementService.prototype.userExists = function (uname, email, phone, email2) {
        return this.identityApiService.getAnonymous('Manage/UserExists?uname=' +
            uname +
            '&email=' +
            email +
            '&phone=' +
            phone +
            '&email2=' +
            email2);
    };
    UserManagementService.prototype.confirmRegistration = function (id, code) {
        return this.identityApiService.getAnonymous("Account/ConfirmEmail?id=" + id + "&code=" + decodeURIComponent(code));
    };
    UserManagementService.prototype.confirmOTP = function (id, token) {
        return this.identityApiService.postAnonymous('Account/ConfirmOTP', { id: id, token: token });
    };
    UserManagementService.prototype.confirmTwoFactorAuthentication = function (id, token) {
        return this.identityApiService.postAnonymous('Account/ConfirmTwoFactorAuthentication', {
            id: id,
            token: token
        });
    };
    UserManagementService.prototype.recoveryOptions = function (model) {
        return this.identityApiService.postAnonymous('Account/RecoveryOptions', model);
    };
    UserManagementService.prototype.forgotPassword = function (model) {
        return this.identityApiService.postAnonymous('Account/ForgotPassword', model);
    };
    UserManagementService.prototype.resetPassword = function (model, code) {
        return this.identityApiService.postAnonymous("Account/ResetPassword?code=" + code, model);
    };
    UserManagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_identity_api_service__WEBPACK_IMPORTED_MODULE_1__["IdentityApiService"]])
    ], UserManagementService);
    return UserManagementService;
}());



/***/ }),

/***/ "./src/app/modules/user-management/user-management-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user-management/user-management-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: UserManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function() { return UserManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management.component */ "./src/app/modules/user-management/user-management.component.ts");
/* harmony import */ var _pages_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user-account/user-account.component */ "./src/app/modules/user-management/pages/user-account/user-account.component.ts");
/* harmony import */ var _pages_confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/confirm-registration/confirm-registration.component */ "./src/app/modules/user-management/pages/confirm-registration/confirm-registration.component.ts");
/* harmony import */ var _pages_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/account-recovery/account-recovery.component */ "./src/app/modules/user-management/pages/account-recovery/account-recovery.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/modules/user-management/pages/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _user_management_component__WEBPACK_IMPORTED_MODULE_2__["UserManagementComponent"],
        children: [
            {
                path: 'account',
                component: _pages_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_3__["UserAccountComponent"]
            },
            {
                path: 'confirm',
                component: _pages_confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmRegistrationComponent"]
            },
            {
                path: 'recovery',
                component: _pages_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_5__["AccountRecoveryComponent"]
            },
            {
                path: 'reset',
                component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var UserManagementRoutingModule = /** @class */ (function () {
    function UserManagementRoutingModule() {
    }
    UserManagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserManagementRoutingModule);
    return UserManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/user-management/user-management.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"pt-5 pb-4\">\r\n        Menu: &nbsp;\r\n        <a routerLink=\"/user-management/reset\">reset</a> &nbsp;/&nbsp;\r\n        <a routerLink=\"/user-management/confirm\">confirm</a> &nbsp;/&nbsp;\r\n        <a routerLink=\"/user-management/account\">account</a> &nbsp;/&nbsp;\r\n        <a routerLink=\"/user-management/recovery\">recovery</a> &nbsp;/&nbsp;\r\n      </div>\r\n\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/user-management/user-management.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/user-management/user-management.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent() {
    }
    UserManagementComponent.prototype.ngOnInit = function () { };
    UserManagementComponent.prototype.ngOnDestroy = function () { };
    UserManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./user-management.component.html */ "./src/app/modules/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.scss */ "./src/app/modules/user-management/user-management.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-management/user-management.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/loader/loader.module */ "./src/app/shared/components/loader/loader.module.ts");
/* harmony import */ var _core_modules_form_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/modules/form/form.module */ "./src/app/core/modules/form/form.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _services_user_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user-management.service */ "./src/app/modules/user-management/services/user-management.service.ts");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-management.component */ "./src/app/modules/user-management/user-management.component.ts");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-management-routing.module */ "./src/app/modules/user-management/user-management-routing.module.ts");
/* harmony import */ var _pages_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/user-account/user-account.component */ "./src/app/modules/user-management/pages/user-account/user-account.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/modules/user-management/components/change-password/change-password.component.ts");
/* harmony import */ var _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/personal-info/personal-info.component */ "./src/app/modules/user-management/components/personal-info/personal-info.component.ts");
/* harmony import */ var _pages_confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/confirm-registration/confirm-registration.component */ "./src/app/modules/user-management/pages/confirm-registration/confirm-registration.component.ts");
/* harmony import */ var _pages_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/account-recovery/account-recovery.component */ "./src/app/modules/user-management/pages/account-recovery/account-recovery.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/modules/user-management/pages/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var MaterialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"]
];
var BootstrapModules = [
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"]
];
var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ].concat(MaterialModules, BootstrapModules, [
                _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _user_management_routing_module__WEBPACK_IMPORTED_MODULE_10__["UserManagementRoutingModule"],
                _core_modules_form_form_module__WEBPACK_IMPORTED_MODULE_6__["FormModule"]
            ]),
            declarations: [
                _user_management_component__WEBPACK_IMPORTED_MODULE_9__["UserManagementComponent"],
                _pages_confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmRegistrationComponent"],
                _pages_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_15__["AccountRecoveryComponent"],
                _pages_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_11__["UserAccountComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordComponent"],
                _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_16__["ResetPasswordComponent"],
                _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_13__["PersonalInfoComponent"],
            ],
            providers: [
                _services_user_management_service__WEBPACK_IMPORTED_MODULE_8__["UserManagementService"],
            ],
            entryComponents: []
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-user-management-user-management-module.js.map