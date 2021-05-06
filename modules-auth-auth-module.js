(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "../../node_modules/ngx-captcha/fesm5/ngx-captcha.js":
/*!*********************************************************************************!*\
  !*** C:/TFS/DCA/Public/PublicWeb/node_modules/ngx-captcha/fesm5/ngx-captcha.js ***!
  \*********************************************************************************/
/*! exports provided: BaseReCaptchaComponent, InvisibleReCaptchaComponent, ReCaptcha2Component, ReCaptchaType, ReCaptchaV3Service, ScriptService, NgxCaptchaModule, ɵb, ɵa, ɵd, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseReCaptchaComponent", function() { return BaseReCaptchaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvisibleReCaptchaComponent", function() { return InvisibleReCaptchaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha2Component", function() { return ReCaptcha2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaType", function() { return ReCaptchaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function() { return ReCaptchaV3Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaModule", function() { return NgxCaptchaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return InvisibleReCaptchaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ReCaptcha2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ReCaptchaV3Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ScriptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var BaseReCaptchaComponent = /** @class */ (function () {
    function BaseReCaptchaComponent(renderer, zone, injector, scriptService) {
        this.renderer = renderer;
        this.zone = zone;
        this.injector = injector;
        this.scriptService = scriptService;
        /**
         * Prefix of the captcha element
         */
        this.captchaElemPrefix = 'ngx_captcha_id_';
        /**
         * Type
         */
        this.type = 'image';
        /**
         * Tab index
         */
        this.tabIndex = 0;
        /**
         * Called when captcha receives successful response.
         * Captcha response token is passed to event.
         */
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when captcha is loaded. Event receives id of the captcha
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Indicates if captcha should be set on load
         */
        this.setupAfterLoad = false;
        /**
         * If enabled, captcha will reset after receiving success response. This is useful
         * when invisible captcha need to be resolved multiple times on same page
         */
        this.resetCaptchaAfterSuccess = false;
        /**
         * Indicates if captcha is loaded
         */
        this.isLoaded = false;
    }
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.control = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]).control;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // cleanup scripts if language changed because they need to be reloaded
        if (changes && changes["hl"]) {
            if (!changes["hl"].firstChange && (changes["hl"].currentValue !== changes["hl"].previousValue)) {
                this.scriptService.cleanup();
            }
        }
        this.setupComponent();
    };
    /**
    * Gets captcha response as per reCaptcha docs
    */
    /**
     * Gets captcha response as per reCaptcha docs
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getResponse = /**
     * Gets captcha response as per reCaptcha docs
     * @return {?}
     */
    function () {
        return this.reCaptchaApi.getResponse(this.captchaId);
    };
    /**
    * Gets Id of captcha widget
    */
    /**
     * Gets Id of captcha widget
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getCaptchaId = /**
     * Gets Id of captcha widget
     * @return {?}
     */
    function () {
        return this.captchaId;
    };
    /**
    * Resets captcha
    */
    /**
     * Resets captcha
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.resetCaptcha = /**
     * Resets captcha
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run(function () {
            _this.onChange(null);
            _this.onTouched(null);
        });
    };
    /**
    * Gets last submitted captcha response
    */
    /**
     * Gets last submitted captcha response
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getCurrentResponse = /**
     * Gets last submitted captcha response
     * @return {?}
     */
    function () {
        return this.currentResponse;
    };
    /**
    * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
    */
    /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.reloadCaptcha = /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
     * @return {?}
     */
    function () {
        this.setupComponent();
    };
    /**
     * @param {?} captchaElemId
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ensureCaptchaElem = /**
     * @param {?} captchaElemId
     * @return {?}
     */
    function (captchaElemId) {
        /** @type {?} */
        var captchaElem = document.getElementById(captchaElemId);
        if (!captchaElem) {
            throw Error("Captcha element with id '" + captchaElemId + "' was not found");
        }
        // assign captcha alem
        this.captchaElem = captchaElem;
    };
    /**
    * Responsible for instantiating captcha element
    */
    /**
     * Responsible for instantiating captcha element
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.renderReCaptcha = /**
     * Responsible for instantiating captcha element
     * @return {?}
     */
    function () {
        this.captchaId = this.reCaptchaApi.render(this.captchaElemId, this.getCaptchaProperties());
        this.ready.next();
    };
    /**
    * Called when captcha receives response
    * @param callback Callback
    */
    /**
     * Called when captcha receives response
     * @param {?} callback Callback
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.handleCallback = /**
     * Called when captcha receives response
     * @param {?} callback Callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        this.currentResponse = callback;
        this.success.next(callback);
        this.zone.run(function () {
            _this.onChange(callback);
            _this.onTouched(callback);
        });
        if (this.resetCaptchaAfterSuccess) {
            this.resetCaptcha();
        }
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getPseudoUniqueNumber = /**
     * @return {?}
     */
    function () {
        return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.setupComponent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // captcha specific setup
        this.captchaSpecificSetup();
        // create captcha wrapper
        this.createAndSetCaptchaElem();
        this.scriptService.registerCaptchaScript('explicit', function (grecaptcha) {
            _this.onloadCallback(grecaptcha);
        }, this.hl);
    };
    /**
     * Called when google's recaptcha script is ready
     * @param {?} grecapcha
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.onloadCallback = /**
     * Called when google's recaptcha script is ready
     * @param {?} grecapcha
     * @return {?}
     */
    function (grecapcha) {
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecapcha;
        if (!this.reCaptchaApi) {
            throw Error("ReCaptcha Api was not initialized correctly");
        }
        // loaded flag
        this.isLoaded = true;
        // fire load event
        this.load.next();
        // render captcha
        this.renderReCaptcha();
        // setup component if it was flagged as such
        if (this.setupAfterLoad) {
            this.setupAfterLoad = false;
            this.setupComponent();
        }
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.generateNewElemId = /**
     * @return {?}
     */
    function () {
        return this.captchaElemPrefix + this.getPseudoUniqueNumber();
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.createAndSetCaptchaElem = /**
     * @return {?}
     */
    function () {
        // generate new captcha id
        this.captchaElemId = this.generateNewElemId();
        if (!this.captchaElemId) {
            throw Error("Captcha elem Id is not set");
        }
        // remove old html
        this.captchaWrapperElem.nativeElement.innerHTML = '';
        /** @type {?} */
        var newElem = this.renderer.createElement('div');
        newElem.id = this.captchaElemId;
        this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);
        // update captcha elem
        this.ensureCaptchaElem(this.captchaElemId);
    };
    /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     * @param {?} obj
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.writeValue = /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     * @param {?} obj
     * @return {?}
     */
    function (obj) { };
    /**
     * This method helps us tie together recaptcha and our formControl values
     * @param {?} fn
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.registerOnChange = /**
     * This method helps us tie together recaptcha and our formControl values
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * At some point we might be interested whether the user has touched our component
     * @param {?} fn
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.registerOnTouched = /**
     * At some point we might be interested whether the user has touched our component
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    BaseReCaptchaComponent.propDecorators = {
        siteKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        captchaWrapperElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['captchaWrapperElem',] }],
        captchaScriptElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['captchaScriptElem',] }]
    };
    return BaseReCaptchaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var ReCaptchaType = {
    InvisibleReCaptcha: 0,
    ReCaptcha2: 1,
};
ReCaptchaType[ReCaptchaType.InvisibleReCaptcha] = 'InvisibleReCaptcha';
ReCaptchaType[ReCaptchaType.ReCaptcha2] = 'ReCaptcha2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ScriptService = /** @class */ (function () {
    function ScriptService(zone) {
        this.zone = zone;
        /**
         * Name of the global google recaptcha script
         */
        this.windowGrecaptcha = 'grecaptcha';
        /**
         * Name of the global callback
         */
        this.windowOnLoadCallbackProperty = 'ngx_captcha_onload_callback';
    }
    /**
     * @param {?} render
     * @param {?} onLoad
     * @param {?=} language
     * @return {?}
     */
    ScriptService.prototype.registerCaptchaScript = /**
     * @param {?} render
     * @param {?} onLoad
     * @param {?=} language
     * @return {?}
     */
    function (render, onLoad, language) {
        var _this = this;
        if (this.grecaptchaScriptLoaded()) {
            // recaptcha script is already loaded
            // just call the callback
            this.zone.run(function () {
                onLoad(window[_this.windowGrecaptcha]);
            });
            return;
        }
        // we need to patch the callback through global variable, otherwise callback is not accessible
        // note: https://github.com/Enngage/ngx-captcha/issues/2
        window[this.windowOnLoadCallbackProperty] = /** @type {?} */ ((function () { return _this.zone.run(onLoad.bind(_this, window[_this.windowGrecaptcha])); }));
        /** @type {?} */
        var scriptElem = document.createElement('script');
        scriptElem.innerHTML = '';
        scriptElem.src = this.getCaptchaScriptUrl(language, render);
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    };
    /**
     * @return {?}
     */
    ScriptService.prototype.cleanup = /**
     * @return {?}
     */
    function () {
        window[this.windowOnLoadCallbackProperty] = undefined;
        window[this.windowGrecaptcha] = undefined;
    };
    /**
     * Indicates if google recaptcha script is available and ready to be used
     * @return {?}
     */
    ScriptService.prototype.grecaptchaScriptLoaded = /**
     * Indicates if google recaptcha script is available and ready to be used
     * @return {?}
     */
    function () {
        if (window[this.windowOnLoadCallbackProperty] && window[this.windowGrecaptcha]) {
            return true;
        }
        return false;
    };
    /**
     * Gets language param used in script url
     * @param {?=} hl
     * @return {?}
     */
    ScriptService.prototype.getLanguageParam = /**
     * Gets language param used in script url
     * @param {?=} hl
     * @return {?}
     */
    function (hl) {
        if (!hl) {
            return '';
        }
        return "&hl=" + hl;
    };
    /**
     * Url to google api script
     * @param {?} language
     * @param {?} render
     * @return {?}
     */
    ScriptService.prototype.getCaptchaScriptUrl = /**
     * Url to google api script
     * @param {?} language
     * @param {?} render
     * @return {?}
     */
    function (language, render) {
        // tslint:disable-next-line:max-line-length
        return "https://www.google.com/recaptcha/api.js?onload=" + this.windowOnLoadCallbackProperty + "&render=" + render + this.getLanguageParam(language);
    };
    ScriptService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ScriptService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return ScriptService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InvisibleReCaptchaComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(InvisibleReCaptchaComponent, _super);
    function InvisibleReCaptchaComponent(renderer, zone, injector, scriptService) {
        var _this = _super.call(this, renderer, zone, injector, scriptService) || this;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.injector = injector;
        _this.scriptService = scriptService;
        /**
         * This size representing invisible captcha
         */
        _this.size = 'invisible';
        /**
         * Badge
         */
        _this.badge = 'bottomright';
        _this.recaptchaType = ReCaptchaType.InvisibleReCaptcha;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     */
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.execute = /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @return {?}
     */
    function () {
        // execute captcha
        this.reCaptchaApi.execute(this.captchaId);
    };
    /**
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.captchaSpecificSetup = /**
     * @return {?}
     */
    function () {
    };
    /**
    * Gets reCaptcha properties
    */
    /**
     * Gets reCaptcha properties
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.getCaptchaProperties = /**
     * Gets reCaptcha properties
     * @return {?}
     */
    function () {
        var _this = this;
        return {
            'sitekey': this.siteKey,
            'callback': function (response) { return _this.zone.run(function () { return _this.handleCallback(response); }); },
            'badge': this.badge,
            'type': this.type,
            'tabindex': this.tabIndex,
            'size': this.size
        };
    };
    InvisibleReCaptchaComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-invisible-recaptcha',
                    template: "\n  <div #captchaWrapperElem></div>",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InvisibleReCaptchaComponent; }),
                            multi: true,
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    InvisibleReCaptchaComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: ScriptService }
    ]; };
    InvisibleReCaptchaComponent.propDecorators = {
        badge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return InvisibleReCaptchaComponent;
}(BaseReCaptchaComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReCaptcha2Component = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ReCaptcha2Component, _super);
    function ReCaptcha2Component(renderer, zone, injector, scriptService) {
        var _this = _super.call(this, renderer, zone, injector, scriptService) || this;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.injector = injector;
        _this.scriptService = scriptService;
        /**
         * Name of the global expire callback
         */
        _this.windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';
        /**
         * Name of the global error callback
         */
        _this.windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';
        /**
         * Theme
         */
        _this.theme = 'light';
        /**
         * Size
         */
        _this.size = 'normal';
        /**
         * Expired callback
         */
        _this.expire = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Error callback
         */
        _this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.recaptchaType = ReCaptchaType.ReCaptcha2;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ReCaptcha2Component.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * @return {?}
     */
    ReCaptcha2Component.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        window[this.windowOnErrorCallbackProperty] = {};
        window[this.windowOnExpireCallbackProperty] = {};
    };
    /**
     * @return {?}
     */
    ReCaptcha2Component.prototype.captchaSpecificSetup = /**
     * @return {?}
     */
    function () {
        this.registerCallbacks();
    };
    /**
     * Gets reCaptcha properties
    */
    /**
     * Gets reCaptcha properties
     * @return {?}
     */
    ReCaptcha2Component.prototype.getCaptchaProperties = /**
     * Gets reCaptcha properties
     * @return {?}
     */
    function () {
        var _this = this;
        return {
            'sitekey': this.siteKey,
            'callback': function (response) { return _this.zone.run(function () { return _this.handleCallback(response); }); },
            'expired-callback': function () { return _this.zone.run(function () { return _this.handleExpireCallback(); }); },
            'error-callback': function () { return _this.zone.run(function () { return _this.handleErrorCallback(); }); },
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabIndex
        };
    };
    /**
     * Registers global callbacks
     * @return {?}
     */
    ReCaptcha2Component.prototype.registerCallbacks = /**
     * Registers global callbacks
     * @return {?}
     */
    function () {
        window[this.windowOnErrorCallbackProperty] = this.handleErrorCallback.bind(this);
        window[this.windowOnExpireCallbackProperty] = this.handleExpireCallback.bind(this);
    };
    /**
     * Handles error callback
     * @return {?}
     */
    ReCaptcha2Component.prototype.handleErrorCallback = /**
     * Handles error callback
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run(function () {
            _this.onChange(null);
            _this.onTouched(null);
        });
        this.error.next();
    };
    /**
     * Handles expired callback
     * @return {?}
     */
    ReCaptcha2Component.prototype.handleExpireCallback = /**
     * Handles expired callback
     * @return {?}
     */
    function () {
        this.expire.next();
        // reset captcha on expire callback
        this.resetCaptcha();
    };
    ReCaptcha2Component.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-recaptcha2',
                    template: "\n  <div #captchaWrapperElem></div>",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ReCaptcha2Component; }),
                            multi: true,
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    ReCaptcha2Component.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: ScriptService }
    ]; };
    ReCaptcha2Component.propDecorators = {
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        expire: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ReCaptcha2Component;
}(BaseReCaptchaComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReCaptchaV3Service = /** @class */ (function () {
    function ReCaptchaV3Service(scriptService) {
        this.scriptService = scriptService;
    }
    /**
     * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
     * this callback in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param siteKey Site key found in your google admin panel
     * @param action Action to log
     */
    /**
     * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
     * this callback in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param {?} siteKey Site key found in your google admin panel
     * @param {?} action Action to log
     * @param {?} callback
     * @return {?}
     */
    ReCaptchaV3Service.prototype.execute = /**
     * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
     * this callback in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param {?} siteKey Site key found in your google admin panel
     * @param {?} action Action to log
     * @param {?} callback
     * @return {?}
     */
    function (siteKey, action, callback) {
        this.scriptService.registerCaptchaScript(siteKey, function (grecaptcha) {
            grecaptcha.execute(siteKey, {
                action: action
            }).then(function (token) {
                callback(token);
            });
        });
    };
    ReCaptchaV3Service.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ReCaptchaV3Service.ctorParameters = function () { return [
        { type: ScriptService }
    ]; };
    return ReCaptchaV3Service;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxCaptchaModule = /** @class */ (function () {
    function NgxCaptchaModule() {
    }
    NgxCaptchaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                    ],
                    declarations: [
                        ReCaptcha2Component,
                        InvisibleReCaptchaComponent
                    ],
                    providers: [
                        ScriptService,
                        ReCaptchaV3Service
                    ],
                    exports: [
                        ReCaptcha2Component,
                        InvisibleReCaptchaComponent
                    ]
                },] },
    ];
    return NgxCaptchaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNhcHRjaGEuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1jYXB0Y2hhL2xpYi9jb21wb25lbnRzL2Jhc2UtcmVjYXB0Y2hhLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWNhcHRjaGEvbGliL21vZGVscy9yZWNhcHRjaGEtdHlwZS5lbnVtLnRzIiwibmc6Ly9uZ3gtY2FwdGNoYS9saWIvc2VydmljZXMvc2NyaXB0LnNlcnZpY2UudHMiLCJuZzovL25neC1jYXB0Y2hhL2xpYi9jb21wb25lbnRzL2ludmlzaWJsZS1yZWNhcHRjaGEuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtY2FwdGNoYS9saWIvY29tcG9uZW50cy9yZWNhcHRjaGEtMi5jb21wb25lbnQudHMiLCJuZzovL25neC1jYXB0Y2hhL2xpYi9zZXJ2aWNlcy9yZWNhcHRjaGFfdjMuc2VydmljZS50cyIsIm5nOi8vbmd4LWNhcHRjaGEvbGliL25neC1jYXB0Y2hhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbmplY3RvcixcclxuICAgIElucHV0LFxyXG4gICAgTmdab25lLFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBSZUNhcHRjaGFUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL3JlY2FwdGNoYS10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBTY3JpcHRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2NyaXB0LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZUNhcHRjaGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICAvKipcclxuICAgICogUHJlZml4IG9mIHRoZSBjYXB0Y2hhIGVsZW1lbnRcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2FwdGNoYUVsZW1QcmVmaXggPSAnbmd4X2NhcHRjaGFfaWRfJztcclxuXHJcbiAgICAvKipcclxuICAgICogR29vZ2xlJ3Mgc2l0ZSBrZXkuXHJcbiAgICAqIFlvdSBjYW4gZmluZCB0aGlzIHVuZGVyIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhXHJcbiAgICAqL1xyXG4gICAgQElucHV0KCkgc2l0ZUtleTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBUeXBlXHJcbiAgICAqL1xyXG4gICAgQElucHV0KCkgdHlwZTogJ2F1ZGlvJyB8ICdpbWFnZScgPSAnaW1hZ2UnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBMYW5ndWFnZSBjb2RlLiBBdXRvLWRldGVjdHMgdGhlIHVzZXIncyBsYW5ndWFnZSBpZiB1bnNwZWNpZmllZC5cclxuICAgICovXHJcbiAgICBASW5wdXQoKSBobDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBUYWIgaW5kZXhcclxuICAgICovXHJcbiAgICBASW5wdXQoKSB0YWJJbmRleCA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENhbGxlZCB3aGVuIGNhcHRjaGEgcmVjZWl2ZXMgc3VjY2Vzc2Z1bCByZXNwb25zZS5cclxuICAgICogQ2FwdGNoYSByZXNwb25zZSB0b2tlbiBpcyBwYXNzZWQgdG8gZXZlbnQuXHJcbiAgICAqL1xyXG4gICAgQE91dHB1dCgpIHN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICogQ2FsbGVkIHdoZW4gY2FwdGNoYSBpcyBsb2FkZWQuIEV2ZW50IHJlY2VpdmVzIGlkIG9mIHRoZSBjYXB0Y2hhXHJcbiAgICAqL1xyXG4gICAgQE91dHB1dCgpIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICogQ2FsbGVkIHdoZW4gY2FwdGNoYSBpcyBsb2FkZWQgJiByZWFkeS4gSS5lLiB3aGVuIHlvdSBuZWVkIHRvIGV4ZWN1dGUgY2FwdGNoYSBvbiBjb21wb25lbnQgbG9hZC5cclxuICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnY2FwdGNoYVdyYXBwZXJFbGVtJykgY2FwdGNoYVdyYXBwZXJFbGVtOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnY2FwdGNoYVNjcmlwdEVsZW0nKSBjYXB0Y2hhU2NyaXB0RWxlbTogRWxlbWVudFJlZjtcclxuXHJcbiAgICAvKipcclxuICAgICogSW5kaWNhdGVzIGlmIGNhcHRjaGEgc2hvdWxkIGJlIHNldCBvbiBsb2FkXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXR1cEFmdGVyTG9hZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDYXB0Y2hhIGVsZW1lbnRcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2FwdGNoYUVsZW0/OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICogSWQgb2YgdGhlIGNhcHRjaGEgZWxlbVxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBjYXB0Y2hhSWQ/OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEhvbGRzIGxhc3QgcmVzcG9uc2UgdmFsdWVcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3VycmVudFJlc3BvbnNlPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBJZiBlbmFibGVkLCBjYXB0Y2hhIHdpbGwgcmVzZXQgYWZ0ZXIgcmVjZWl2aW5nIHN1Y2Nlc3MgcmVzcG9uc2UuIFRoaXMgaXMgdXNlZnVsXHJcbiAgICAqIHdoZW4gaW52aXNpYmxlIGNhcHRjaGEgbmVlZCB0byBiZSByZXNvbHZlZCBtdWx0aXBsZSB0aW1lcyBvbiBzYW1lIHBhZ2VcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVzZXRDYXB0Y2hhQWZ0ZXJTdWNjZXNzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENhcHRjaGEgdHlwZVxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWNhcHRjaGFUeXBlOiBSZUNhcHRjaGFUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXF1aXJlZCBieSBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBwcm90ZWN0ZWQgb25Ub3VjaGVkOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICogSW5kaWNhdGVzIGlmIGNhcHRjaGEgaXMgbG9hZGVkXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGlzTG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJlZmVyZW5jZSB0byBnbG9iYWwgcmVDYXB0Y2hhIEFQSVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyByZUNhcHRjaGFBcGk/OiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIElkIG9mIHRoZSBET00gZWxlbWVudCB3cmFwcGluZyBjYXB0Y2hhXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGNhcHRjaGFFbGVtSWQ/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEZvcm0gQ29udHJvbCB0byBiZSBlbmFibGUgdXNhZ2UgaW4gcmVhY3RpdmUgZm9ybXNcclxuICAgICovXHJcbiAgICBwdWJsaWMgY29udHJvbD86IEZvcm1Db250cm9sO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxyXG4gICAgICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgICAgcHJvdGVjdGVkIHNjcmlwdFNlcnZpY2U6IFNjcmlwdFNlcnZpY2UsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmluamVjdG9yLmdldChOZ0NvbnRyb2wpLmNvbnRyb2w7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgcmVDYXB0Y2hhIHByb3BlcnRpZXNcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0Q2FwdGNoYVByb3BlcnRpZXMoKTogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBVc2VkIGZvciBjYXB0Y2hhIHNwZWNpZmljIHNldHVwXHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNhcHRjaGFTcGVjaWZpY1NldHVwKCk6IHZvaWQ7XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNsZWFudXAgc2NyaXB0cyBpZiBsYW5ndWFnZSBjaGFuZ2VkIGJlY2F1c2UgdGhleSBuZWVkIHRvIGJlIHJlbG9hZGVkXHJcbiAgICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5obCkge1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5nZXMuaGwuZmlyc3RDaGFuZ2UgJiYgKGNoYW5nZXMuaGwuY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLmhsLnByZXZpb3VzVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmlwdFNlcnZpY2UuY2xlYW51cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldHVwQ29tcG9uZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgY2FwdGNoYSByZXNwb25zZSBhcyBwZXIgcmVDYXB0Y2hhIGRvY3NcclxuICAgICovXHJcbiAgICBnZXRSZXNwb25zZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlQ2FwdGNoYUFwaS5nZXRSZXNwb25zZSh0aGlzLmNhcHRjaGFJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgSWQgb2YgY2FwdGNoYSB3aWRnZXRcclxuICAgICovXHJcbiAgICBnZXRDYXB0Y2hhSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXB0Y2hhSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJlc2V0cyBjYXB0Y2hhXHJcbiAgICAqL1xyXG4gICAgcmVzZXRDYXB0Y2hhKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZChudWxsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyBsYXN0IHN1Ym1pdHRlZCBjYXB0Y2hhIHJlc3BvbnNlXHJcbiAgICAqL1xyXG4gICAgZ2V0Q3VycmVudFJlc3BvbnNlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZWxvYWQgY2FwdGNoYS4gVXNlZnVsIHdoZW4gcHJvcGVydGllcyAoaS5lLiB0aGVtZSkgY2hhbmdlZCBhbmQgY2FwdGNoYSBuZWVkIHRvIHJlZmxlY3QgdGhlbVxyXG4gICAgKi9cclxuICAgIHJlbG9hZENhcHRjaGEoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXR1cENvbXBvbmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBlbnN1cmVDYXB0Y2hhRWxlbShjYXB0Y2hhRWxlbUlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjYXB0Y2hhRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcHRjaGFFbGVtSWQpO1xyXG5cclxuICAgICAgICBpZiAoIWNhcHRjaGFFbGVtKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDYXB0Y2hhIGVsZW1lbnQgd2l0aCBpZCAnJHtjYXB0Y2hhRWxlbUlkfScgd2FzIG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYXNzaWduIGNhcHRjaGEgYWxlbVxyXG4gICAgICAgIHRoaXMuY2FwdGNoYUVsZW0gPSBjYXB0Y2hhRWxlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogUmVzcG9uc2libGUgZm9yIGluc3RhbnRpYXRpbmcgY2FwdGNoYSBlbGVtZW50XHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlclJlQ2FwdGNoYSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcHRjaGFJZCA9IHRoaXMucmVDYXB0Y2hhQXBpLnJlbmRlcih0aGlzLmNhcHRjaGFFbGVtSWQsIHRoaXMuZ2V0Q2FwdGNoYVByb3BlcnRpZXMoKSk7XHJcbiAgICAgICAgdGhpcy5yZWFkeS5uZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENhbGxlZCB3aGVuIGNhcHRjaGEgcmVjZWl2ZXMgcmVzcG9uc2VcclxuICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrXHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGhhbmRsZUNhbGxiYWNrKGNhbGxiYWNrOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSZXNwb25zZSA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuc3VjY2Vzcy5uZXh0KGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZChjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc2V0Q2FwdGNoYUFmdGVyU3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Q2FwdGNoYSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQc2V1ZG9VbmlxdWVOdW1iZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRVVENNaWxsaXNlY29uZHMoKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDb21wb25lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY2FwdGNoYSBzcGVjaWZpYyBzZXR1cFxyXG4gICAgICAgIHRoaXMuY2FwdGNoYVNwZWNpZmljU2V0dXAoKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGNhcHRjaGEgd3JhcHBlclxyXG4gICAgICAgIHRoaXMuY3JlYXRlQW5kU2V0Q2FwdGNoYUVsZW0oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JpcHRTZXJ2aWNlLnJlZ2lzdGVyQ2FwdGNoYVNjcmlwdCgnZXhwbGljaXQnLCAoZ3JlY2FwdGNoYSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ubG9hZENhbGxiYWNrKGdyZWNhcHRjaGEpO1xyXG4gICAgICAgIH0sIHRoaXMuaGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDYWxsZWQgd2hlbiBnb29nbGUncyByZWNhcHRjaGEgc2NyaXB0IGlzIHJlYWR5XHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBvbmxvYWRDYWxsYmFjayhncmVjYXBjaGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGFzc2lnbiByZWZlcmVuY2UgdG8gcmVDYXB0Y2hhIEFwaSBvbmNlIGl0cyBsb2FkZWRcclxuICAgICAgICB0aGlzLnJlQ2FwdGNoYUFwaSA9IGdyZWNhcGNoYTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnJlQ2FwdGNoYUFwaSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgUmVDYXB0Y2hhIEFwaSB3YXMgbm90IGluaXRpYWxpemVkIGNvcnJlY3RseWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbG9hZGVkIGZsYWdcclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gZmlyZSBsb2FkIGV2ZW50XHJcbiAgICAgICAgdGhpcy5sb2FkLm5leHQoKTtcclxuXHJcbiAgICAgICAgLy8gcmVuZGVyIGNhcHRjaGFcclxuICAgICAgICB0aGlzLnJlbmRlclJlQ2FwdGNoYSgpO1xyXG5cclxuICAgICAgICAvLyBzZXR1cCBjb21wb25lbnQgaWYgaXQgd2FzIGZsYWdnZWQgYXMgc3VjaFxyXG4gICAgICAgIGlmICh0aGlzLnNldHVwQWZ0ZXJMb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBBZnRlckxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cENvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlTmV3RWxlbUlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FwdGNoYUVsZW1QcmVmaXggKyB0aGlzLmdldFBzZXVkb1VuaXF1ZU51bWJlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQW5kU2V0Q2FwdGNoYUVsZW0oKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZ2VuZXJhdGUgbmV3IGNhcHRjaGEgaWRcclxuICAgICAgICB0aGlzLmNhcHRjaGFFbGVtSWQgPSB0aGlzLmdlbmVyYXRlTmV3RWxlbUlkKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jYXB0Y2hhRWxlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDYXB0Y2hhIGVsZW0gSWQgaXMgbm90IHNldGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBodG1sXHJcbiAgICAgICAgdGhpcy5jYXB0Y2hhV3JhcHBlckVsZW0ubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIG5ldyB3cmFwcGVyIGZvciBjYXB0Y2hhXHJcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmV3RWxlbS5pZCA9IHRoaXMuY2FwdGNoYUVsZW1JZDtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNhcHRjaGFXcmFwcGVyRWxlbS5uYXRpdmVFbGVtZW50LCBuZXdFbGVtKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGNhcHRjaGEgZWxlbVxyXG4gICAgICAgIHRoaXMuZW5zdXJlQ2FwdGNoYUVsZW0odGhpcy5jYXB0Y2hhRWxlbUlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvIGJlIGFsaWduZWQgd2l0aCB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIHdlIG5lZWQgdG8gaW1wbGVtZW50IHRoaXMgbWV0aG9kXHJcbiAgICAgKiBIb3dldmVyIGFzIHdlIGRvbid0IHdhbnQgdG8gdXBkYXRlIHRoZSByZWNhcHRjaGEsIHRoaXMgZG9lc24ndCBuZWVkIHRvIGJlIGltcGxlbWVudGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGhlbHBzIHVzIHRpZSB0b2dldGhlciByZWNhcHRjaGEgYW5kIG91ciBmb3JtQ29udHJvbCB2YWx1ZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQXQgc29tZSBwb2ludCB3ZSBtaWdodCBiZSBpbnRlcmVzdGVkIHdoZXRoZXIgdGhlIHVzZXIgaGFzIHRvdWNoZWQgb3VyIGNvbXBvbmVudFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGVudW0gUmVDYXB0Y2hhVHlwZSB7XHJcblxyXG4gICAgSW52aXNpYmxlUmVDYXB0Y2hhLFxyXG4gICAgUmVDYXB0Y2hhMlxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSB2YXIgZG9jdW1lbnQ6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjcmlwdFNlcnZpY2Uge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiB0aGUgZ2xvYmFsIGdvb2dsZSByZWNhcHRjaGEgc2NyaXB0XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZWFkb25seSB3aW5kb3dHcmVjYXB0Y2hhID0gJ2dyZWNhcHRjaGEnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBOYW1lIG9mIHRoZSBnbG9iYWwgY2FsbGJhY2tcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgd2luZG93T25Mb2FkQ2FsbGJhY2tQcm9wZXJ0eSA9ICduZ3hfY2FwdGNoYV9vbmxvYWRfY2FsbGJhY2snO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNhcHRjaGFTY3JpcHQocmVuZGVyOiBzdHJpbmcgfCAnZXhwbGljaXQnLCBvbkxvYWQ6IChncmVjYXB0Y2hhOiBhbnkpID0+IHZvaWQsIGxhbmd1YWdlPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JlY2FwdGNoYVNjcmlwdExvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIC8vIHJlY2FwdGNoYSBzY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWRcclxuICAgICAgICAgICAgLy8ganVzdCBjYWxsIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uTG9hZCh3aW5kb3dbdGhpcy53aW5kb3dHcmVjYXB0Y2hhXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHBhdGNoIHRoZSBjYWxsYmFjayB0aHJvdWdoIGdsb2JhbCB2YXJpYWJsZSwgb3RoZXJ3aXNlIGNhbGxiYWNrIGlzIG5vdCBhY2Nlc3NpYmxlXHJcbiAgICAgICAgLy8gbm90ZTogaHR0cHM6Ly9naXRodWIuY29tL0VubmdhZ2Uvbmd4LWNhcHRjaGEvaXNzdWVzLzJcclxuICAgICAgICB3aW5kb3dbdGhpcy53aW5kb3dPbkxvYWRDYWxsYmFja1Byb3BlcnR5XSA9IDxhbnk+KCgpID0+IHRoaXMuem9uZS5ydW4oXHJcbiAgICAgICAgICAgIG9uTG9hZC5iaW5kKHRoaXMsIHdpbmRvd1t0aGlzLndpbmRvd0dyZWNhcHRjaGFdKVxyXG4gICAgICAgICkpO1xyXG5cclxuICAgICAgICAvLyBwcmVwYXJlIHNjcmlwdCBlbGVtXHJcbiAgICAgICAgY29uc3Qgc2NyaXB0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIHNjcmlwdEVsZW0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgc2NyaXB0RWxlbS5zcmMgPSB0aGlzLmdldENhcHRjaGFTY3JpcHRVcmwobGFuZ3VhZ2UsIHJlbmRlcik7XHJcbiAgICAgICAgc2NyaXB0RWxlbS5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgc2NyaXB0RWxlbS5kZWZlciA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGFkZCBzY3JpcHQgdG8gaGVhZGVyXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHRFbGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhbnVwKCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvd1t0aGlzLndpbmRvd09uTG9hZENhbGxiYWNrUHJvcGVydHldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHdpbmRvd1t0aGlzLndpbmRvd0dyZWNhcHRjaGFdID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIGlmIGdvb2dsZSByZWNhcHRjaGEgc2NyaXB0IGlzIGF2YWlsYWJsZSBhbmQgcmVhZHkgdG8gYmUgdXNlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdyZWNhcHRjaGFTY3JpcHRMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLndpbmRvd09uTG9hZENhbGxiYWNrUHJvcGVydHldICYmIHdpbmRvd1t0aGlzLndpbmRvd0dyZWNhcHRjaGFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGxhbmd1YWdlIHBhcmFtIHVzZWQgaW4gc2NyaXB0IHVybFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldExhbmd1YWdlUGFyYW0oaGw/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghaGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGAmaGw9JHtobH1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBVcmwgdG8gZ29vZ2xlIGFwaSBzY3JpcHRcclxuICAgICovXHJcbiAgICBwcml2YXRlIGdldENhcHRjaGFTY3JpcHRVcmwobGFuZ3VhZ2U6IHN0cmluZywgcmVuZGVyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICByZXR1cm4gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9vbmxvYWQ9JHt0aGlzLndpbmRvd09uTG9hZENhbGxiYWNrUHJvcGVydHl9JnJlbmRlcj0ke3JlbmRlcn0ke3RoaXMuZ2V0TGFuZ3VhZ2VQYXJhbShsYW5ndWFnZSl9YDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFJlQ2FwdGNoYVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvcmVjYXB0Y2hhLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFNjcmlwdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zY3JpcHQuc2VydmljZSc7XHJcbmltcG9ydCB7IEJhc2VSZUNhcHRjaGFDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtcmVjYXB0Y2hhLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1pbnZpc2libGUtcmVjYXB0Y2hhJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgI2NhcHRjaGFXcmFwcGVyRWxlbT48L2Rpdj5gLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW52aXNpYmxlUmVDYXB0Y2hhQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlUmVDYXB0Y2hhQ29tcG9uZW50IGV4dGVuZHMgQmFzZVJlQ2FwdGNoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2l6ZSByZXByZXNlbnRpbmcgaW52aXNpYmxlIGNhcHRjaGFcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2l6ZSA9ICdpbnZpc2libGUnO1xyXG5cclxuICAvKipcclxuICAgKiBCYWRnZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGJhZGdlOiAnYm90dG9tcmlnaHQnIHwgJ2JvdHRvbWxlZnQnIHwgJ2lubGluZScgPSAnYm90dG9tcmlnaHQnO1xyXG5cclxuICAvKipcclxuICAgKiBMYW5ndWFnZSBjb2RlLiBBdXRvLWRldGVjdHMgdGhlIHVzZXIncyBsYW5ndWFnZSBpZiB1bnNwZWNpZmllZC5cclxuICAgKi9cclxuICBASW5wdXQoKSBobDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgcmVjYXB0Y2hhVHlwZTogUmVDYXB0Y2hhVHlwZSA9IFJlQ2FwdGNoYVR5cGUuSW52aXNpYmxlUmVDYXB0Y2hhO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcclxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcm90ZWN0ZWQgc2NyaXB0U2VydmljZTogU2NyaXB0U2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIocmVuZGVyZXIsIHpvbmUsIGluamVjdG9yLCBzY3JpcHRTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvZ3JhbWF0aWNhbGx5IGludm9rZSB0aGUgcmVDQVBUQ0hBIGNoZWNrLiBVc2VkIGlmIHRoZSBpbnZpc2libGUgcmVDQVBUQ0hBIGlzIG9uIGEgZGl2IGluc3RlYWQgb2YgYSBidXR0b24uXHJcbiAgICovXHJcbiAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgIC8vIGV4ZWN1dGUgY2FwdGNoYVxyXG4gICAgdGhpcy5yZUNhcHRjaGFBcGkuZXhlY3V0ZSh0aGlzLmNhcHRjaGFJZCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2FwdGNoYVNwZWNpZmljU2V0dXAoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldHMgcmVDYXB0Y2hhIHByb3BlcnRpZXNcclxuICAqL1xyXG4gIHByb3RlY3RlZCBnZXRDYXB0Y2hhUHJvcGVydGllcygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJ3NpdGVrZXknOiB0aGlzLnNpdGVLZXksXHJcbiAgICAgICdjYWxsYmFjayc6IChyZXNwb25zZSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUNhbGxiYWNrKHJlc3BvbnNlKSksXHJcbiAgICAgICdiYWRnZSc6IHRoaXMuYmFkZ2UsXHJcbiAgICAgICd0eXBlJzogdGhpcy50eXBlLFxyXG4gICAgICAndGFiaW5kZXgnOiB0aGlzLnRhYkluZGV4LFxyXG4gICAgICAnc2l6ZSc6IHRoaXMuc2l6ZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBSZUNhcHRjaGFUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL3JlY2FwdGNoYS10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBTY3JpcHRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2NyaXB0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCYXNlUmVDYXB0Y2hhQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLXJlY2FwdGNoYS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtcmVjYXB0Y2hhMicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2ICNjYXB0Y2hhV3JhcHBlckVsZW0+PC9kaXY+YCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJlQ2FwdGNoYTJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZUNhcHRjaGEyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVJlQ2FwdGNoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLyoqXHJcbiAgKiBOYW1lIG9mIHRoZSBnbG9iYWwgZXhwaXJlIGNhbGxiYWNrXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgd2luZG93T25FcnJvckNhbGxiYWNrUHJvcGVydHkgPSAnbmd4X2NhcHRjaGFfZXJyb3JfY2FsbGJhY2snO1xyXG5cclxuICAvKipcclxuICAqIE5hbWUgb2YgdGhlIGdsb2JhbCBlcnJvciBjYWxsYmFja1xyXG4gICovXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHdpbmRvd09uRXhwaXJlQ2FsbGJhY2tQcm9wZXJ0eSA9ICduZ3hfY2FwdGNoYV9leHBpcmVfY2FsbGJhY2snO1xyXG5cclxuICAvKipcclxuICAgKiBUaGVtZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRoZW1lOiAnZGFyaycgfCAnbGlnaHQnID0gJ2xpZ2h0JztcclxuXHJcbiAgLyoqXHJcbiAgKiBTaXplXHJcbiAgKi9cclxuICBASW5wdXQoKSBzaXplOiAnY29tcGFjdCcgfCAnbm9ybWFsJyA9ICdub3JtYWwnO1xyXG5cclxuICAvKipcclxuICAgKiBMYW5ndWFnZSBjb2RlLiBBdXRvLWRldGVjdHMgdGhlIHVzZXIncyBsYW5ndWFnZSBpZiB1bnNwZWNpZmllZC5cclxuICAgKi9cclxuICBASW5wdXQoKSBobDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAqIEV4cGlyZWQgY2FsbGJhY2tcclxuICAqL1xyXG4gIEBPdXRwdXQoKSBleHBpcmUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICogRXJyb3IgY2FsbGJhY2tcclxuICAqL1xyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgcHJvdGVjdGVkIHJlY2FwdGNoYVR5cGU6IFJlQ2FwdGNoYVR5cGUgPSBSZUNhcHRjaGFUeXBlLlJlQ2FwdGNoYTI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxyXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByb3RlY3RlZCBzY3JpcHRTZXJ2aWNlOiBTY3JpcHRTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgc3VwZXIocmVuZGVyZXIsIHpvbmUsIGluamVjdG9yLCBzY3JpcHRTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB3aW5kb3dbdGhpcy53aW5kb3dPbkVycm9yQ2FsbGJhY2tQcm9wZXJ0eV0gPSB7fTtcclxuICAgIHdpbmRvd1t0aGlzLndpbmRvd09uRXhwaXJlQ2FsbGJhY2tQcm9wZXJ0eV0gPSB7fTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjYXB0Y2hhU3BlY2lmaWNTZXR1cCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFja3MoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgcmVDYXB0Y2hhIHByb3BlcnRpZXNcclxuICAqL1xyXG4gIHByb3RlY3RlZCBnZXRDYXB0Y2hhUHJvcGVydGllcygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJ3NpdGVrZXknOiB0aGlzLnNpdGVLZXksXHJcbiAgICAgICdjYWxsYmFjayc6IChyZXNwb25zZSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUNhbGxiYWNrKHJlc3BvbnNlKSksXHJcbiAgICAgICdleHBpcmVkLWNhbGxiYWNrJzogKCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUV4cGlyZUNhbGxiYWNrKCkpLFxyXG4gICAgICAnZXJyb3ItY2FsbGJhY2snOiAoKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMuaGFuZGxlRXJyb3JDYWxsYmFjaygpKSxcclxuICAgICAgJ3RoZW1lJzogdGhpcy50aGVtZSxcclxuICAgICAgJ3R5cGUnOiB0aGlzLnR5cGUsXHJcbiAgICAgICdzaXplJzogdGhpcy5zaXplLFxyXG4gICAgICAndGFiaW5kZXgnOiB0aGlzLnRhYkluZGV4XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGdsb2JhbCBjYWxsYmFja3NcclxuICAqL1xyXG4gIHByaXZhdGUgcmVnaXN0ZXJDYWxsYmFja3MoKTogdm9pZCB7XHJcbiAgICB3aW5kb3dbdGhpcy53aW5kb3dPbkVycm9yQ2FsbGJhY2tQcm9wZXJ0eV0gPSB0aGlzLmhhbmRsZUVycm9yQ2FsbGJhY2suYmluZCh0aGlzKTtcclxuICAgIHdpbmRvd1t0aGlzLndpbmRvd09uRXhwaXJlQ2FsbGJhY2tQcm9wZXJ0eV0gPSB0aGlzLmhhbmRsZUV4cGlyZUNhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGVycm9yIGNhbGxiYWNrXHJcbiAgKi9cclxuICBwcml2YXRlIGhhbmRsZUVycm9yQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcclxuICAgICAgdGhpcy5vblRvdWNoZWQobnVsbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVycm9yLm5leHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgZXhwaXJlZCBjYWxsYmFja1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRXhwaXJlQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGlyZS5uZXh0KCk7XHJcblxyXG4gICAgLy8gcmVzZXQgY2FwdGNoYSBvbiBleHBpcmUgY2FsbGJhY2tcclxuICAgIHRoaXMucmVzZXRDYXB0Y2hhKCk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTY3JpcHRTZXJ2aWNlIH0gZnJvbSAnLi9zY3JpcHQuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZUNhcHRjaGFWM1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBzY3JpcHRTZXJ2aWNlOiBTY3JpcHRTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVzIHJlQ2FwdGNoYSB2MyB3aXRoIGdpdmVuIGFjdGlvbiBhbmQgcGFzc2VzIHRva2VuIHZpYSBjYWxsYmFjay4gWW91IG5lZWQgdG8gdmVyaWZ5XHJcbiAgICAgKiB0aGlzIGNhbGxiYWNrIGluIHlvdXIgYmFja2VuZCB0byBnZXQgbWVhbmluZ2Z1bCByZXN1bHRzLlxyXG4gICAgICpcclxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvZG9jcy92M1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzaXRlS2V5IFNpdGUga2V5IGZvdW5kIGluIHlvdXIgZ29vZ2xlIGFkbWluIHBhbmVsXHJcbiAgICAgKiBAcGFyYW0gYWN0aW9uIEFjdGlvbiB0byBsb2dcclxuICAgICAqL1xyXG4gICAgZXhlY3V0ZShzaXRlS2V5OiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBjYWxsYmFjazogKHRva2VuOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjcmlwdFNlcnZpY2UucmVnaXN0ZXJDYXB0Y2hhU2NyaXB0KHNpdGVLZXksIChncmVjYXB0Y2hhKSA9PiB7XHJcbiAgICAgICAgICAgIGdyZWNhcHRjaGEuZXhlY3V0ZShzaXRlS2V5LCB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvblxyXG4gICAgICAgICAgICB9KS50aGVuKCh0b2tlbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodG9rZW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW52aXNpYmxlUmVDYXB0Y2hhQ29tcG9uZW50LCBSZUNhcHRjaGEyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IFJlQ2FwdGNoYVYzU2VydmljZSwgU2NyaXB0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJlQ2FwdGNoYTJDb21wb25lbnQsXG4gICAgSW52aXNpYmxlUmVDYXB0Y2hhQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFNjcmlwdFNlcnZpY2UsXG4gICAgUmVDYXB0Y2hhVjNTZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZUNhcHRjaGEyQ29tcG9uZW50LFxuICAgIEludmlzaWJsZVJlQ2FwdGNoYUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neENhcHRjaGFNb2R1bGUge1xufVxuXG5cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7SUEwSEks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

/***/ }),

/***/ "./src/app/core/modules/form/validators/username.validator.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/modules/form/validators/username.validator.ts ***!
  \********************************************************************/
/*! exports provided: unameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unameValidator", function() { return unameValidator; });
/* harmony import */ var _common_pattern_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-pattern-validator */ "./src/app/core/modules/form/validators/common-pattern-validator.ts");

var unameRegEx = /[a-zA-Z\d#\-_\~\!\$\&\'\(\)\*\+\,;\=\:]{3,64}/;
function unameValidator(control) {
    return Object(_common_pattern_validator__WEBPACK_IMPORTED_MODULE_0__["getCustomPatternValidator"])('unameValidator', unameRegEx)(control);
}


/***/ }),

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/modules/auth/components/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user-registration/user-registration.component */ "./src/app/modules/auth/pages/user-registration/user-registration.component.ts");
/* harmony import */ var _pages_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/account-recovery/account-recovery.component */ "./src/app/modules/auth/pages/account-recovery/account-recovery.component.ts");
/* harmony import */ var _pages_confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/confirm-registration/confirm-registration.component */ "./src/app/modules/auth/pages/confirm-registration/confirm-registration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'confirm',
        component: _pages_confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmRegistrationComponent"],
    },
    {
        path: 'reset',
        component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
    },
    {
        path: 'sign-up',
        component: _pages_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationComponent"]
    },
    {
        path: 'forgot-username',
        component: _pages_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_4__["AccountRecoveryComponent"],
        data: { forgotUsername: true }
    },
    {
        path: 'forgot-password',
        component: _pages_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_4__["AccountRecoveryComponent"],
        data: { forgotPassword: true }
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-captcha */ "../../node_modules/ngx-captcha/fesm5/ngx-captcha.js");
/* harmony import */ var _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/loader/loader.module */ "./src/app/shared/components/loader/loader.module.ts");
/* harmony import */ var _core_modules_form_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/modules/form/form.module */ "./src/app/core/modules/form/form.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_components_contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/contact-us/contact-us.module */ "./src/app/shared/components/contact-us/contact-us.module.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/modules/auth/components/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/user-registration/user-registration.component */ "./src/app/modules/auth/pages/user-registration/user-registration.component.ts");
/* harmony import */ var _pages_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/account-recovery/account-recovery.component */ "./src/app/modules/auth/pages/account-recovery/account-recovery.component.ts");
/* harmony import */ var _pages_confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/confirm-registration/confirm-registration.component */ "./src/app/modules/auth/pages/confirm-registration/confirm-registration.component.ts");
/* harmony import */ var _components_validate_token_validate_token_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/validate-token/validate-token.component */ "./src/app/modules/auth/components/validate-token/validate-token.component.ts");
/* harmony import */ var _components_recovery_options_recovery_options_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/recovery-options/recovery-options.component */ "./src/app/modules/auth/components/recovery-options/recovery-options.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var MaterialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"]
];
var BootstrapModules = [
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"]
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_modules_form_form_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ].concat(MaterialModules, BootstrapModules, [
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__["AuthRoutingModule"],
                _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                _shared_components_contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_9__["ContactUsModule"],
                ngx_captcha__WEBPACK_IMPORTED_MODULE_5__["NgxCaptchaModule"]
            ]),
            declarations: [
                _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"],
                _pages_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_13__["UserRegistrationComponent"],
                _pages_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_14__["AccountRecoveryComponent"],
                _pages_confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmRegistrationComponent"],
                _components_validate_token_validate_token_component__WEBPACK_IMPORTED_MODULE_16__["ValidateTokenComponent"],
                _components_recovery_options_recovery_options_component__WEBPACK_IMPORTED_MODULE_17__["RecoveryOptionsComponent"]
            ],
            providers: [],
            entryComponents: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/recovery-options/recovery-options.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/auth/components/recovery-options/recovery-options.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<loader *ngIf=\"!optionsLoaded\"></loader>\r\n<div *ngIf=\"optionsLoaded\">\r\n  <h5 class=\"m-portlet__body-text\">\r\n    Please select your preferred method to send a recovery token:\r\n  </h5>\r\n  <div class=\"form-group padding-left-15\">\r\n    <mat-radio-group [formControl]=\"recoveryMethod\">\r\n      <div class=\"row\" *ngFor=\"let option of recoveryOptions\">\r\n        <mat-radio-button class=\"padding-right-5\" [value]=\"option\"></mat-radio-button>\r\n        <label>{{methodDescriptions[option] + \" at \" + recoveryOptionsModel[option]}}</label>\r\n      </div>\r\n    </mat-radio-group>\r\n    <br />\r\n    <button class=\"btn btn-brand\" (click)=\"sendToken()\" [disabled]=\"!recoveryMethod.valid\">Submit</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/auth/components/recovery-options/recovery-options.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/auth/components/recovery-options/recovery-options.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RecoveryOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryOptionsComponent", function() { return RecoveryOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var projects_web_src_app_shared_enums_authMethodEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/web/src/app/shared/enums/authMethodEnum */ "./src/app/shared/enums/authMethodEnum.ts");
/* harmony import */ var _models_account_recovery_view_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/account-recovery-view.model */ "./src/app/modules/auth/models/account-recovery-view.model.ts");
/* harmony import */ var _models_token_request_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/token-request-view.model */ "./src/app/modules/auth/models/token-request-view.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RecoveryOptionsComponent = /** @class */ (function () {
    function RecoveryOptionsComponent(authService, toastr, cdRef) {
        this.authService = authService;
        this.toastr = toastr;
        this.cdRef = cdRef;
        // an event that's fired when the server sends the token
        this.onTokenSend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // an event that's fired when the server does not send the token
        this.onFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recoveryMethod = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.tokenSent = false;
        this.accountLocked = false;
        this.optionsLoaded = false;
        this.methodDescriptions = {
            email: 'Primary email',
            email2: 'Alternate email',
            phone: 'Phone number'
        };
    }
    RecoveryOptionsComponent.prototype.ngOnInit = function () {
        this.getOptions();
    };
    RecoveryOptionsComponent.prototype.getAuthMethod = function (type) {
        switch (type) {
            case 'email':
                return projects_web_src_app_shared_enums_authMethodEnum__WEBPACK_IMPORTED_MODULE_4__["AuthenticationMethodEnum"].EMAIL;
            case 'email2':
                return projects_web_src_app_shared_enums_authMethodEnum__WEBPACK_IMPORTED_MODULE_4__["AuthenticationMethodEnum"].EMAIL2;
            case 'phone':
                return projects_web_src_app_shared_enums_authMethodEnum__WEBPACK_IMPORTED_MODULE_4__["AuthenticationMethodEnum"].PHONE;
            default:
                return 0;
        }
    };
    RecoveryOptionsComponent.prototype.getRecoveryOptions = function (data) {
        return Object.keys(data).filter(function (k) { return data[k]; });
    };
    RecoveryOptionsComponent.prototype.getOptions = function () {
        var _this = this;
        var model = new _models_account_recovery_view_model__WEBPACK_IMPORTED_MODULE_5__["AccountRecoveryViewModel"]();
        model.id = this.userId;
        this.authService.recoveryOptions(model).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.recoveryOptionsModel = lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"](res);
                delete res['success'] && delete res['id'];
                //delete res['success'] && delete res['id'] && delete res['message'];
                _this.recoveryOptions = _this.getRecoveryOptions(res);
                _this.optionsLoaded = true;
                console.log(_this.recoveryOptions);
                if (_this.recoveryOptions.length === 1) {
                    _this.recoveryMethod.setValue(_this.recoveryOptions[0]);
                }
                if (!_this.cdRef['destroyed'])
                    _this.cdRef.detectChanges();
            }
            else {
                _this.toastr.error(res.message);
            }
        });
    };
    RecoveryOptionsComponent.prototype.sendToken = function () {
        var _this = this;
        console.log(this.recoveryOptionsModel);
        var model = new _models_token_request_view_model__WEBPACK_IMPORTED_MODULE_6__["TokenRequestViewModel"]();
        model.id = this.recoveryOptionsModel.id;
        model.method = this.getAuthMethod(this.recoveryMethod.value);
        this.authService.sendToken(model).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.onTokenSend.emit(true);
            }
            else {
                _this.recoveryOptions = null;
                _this.optionsLoaded = false;
                _this.toastr.error(res.message);
                _this.onFailed.emit(true);
            }
            if (!_this.cdRef['destroyed'])
                _this.cdRef.detectChanges();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecoveryOptionsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecoveryOptionsComponent.prototype, "msg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RecoveryOptionsComponent.prototype, "activation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RecoveryOptionsComponent.prototype, "onTokenSend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RecoveryOptionsComponent.prototype, "onFailed", void 0);
    RecoveryOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recovery-options',
            template: __webpack_require__(/*! ./recovery-options.component.html */ "./src/app/modules/auth/components/recovery-options/recovery-options.component.html"),
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], RecoveryOptionsComponent);
    return RecoveryOptionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/reset-password/reset-password.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/components/reset-password/reset-password.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"m-portlet\">-->\r\n<!--<div class=\"m-portlet__head\">-->\r\n<!--<div class=\"m-portlet__head-caption\">-->\r\n<!--<div class=\"m-portlet__head-title\">-->\r\n<!--<span class=\"m-portlet__head-icon\">-->\r\n<!--<i class=\"la la-gear\"></i>-->\r\n<!--</span>-->\r\n<!--<h3 class=\"m-portlet__head-text\">-->\r\n<!--Reset Password-->\r\n<!--</h3>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<div class=\"auth-container m-portlet container mt-5 mb-5 pb-4 pt-4\">\r\n  <h4 class=\"m-portlet__head-text mb-3\"> Reset Password</h4>\r\n  <loader *ngIf=\"isLoading\"></loader>\r\n  <div *ngIf=\"!tokenSent && !resetFailed && !isLoading\">\r\n    <app-recovery-options [userId]=\"userId\" (onTokenSend)=\"tokenSendRequest($event)\" (onFailed)=\"handleLock($event)\"></app-recovery-options>\r\n  </div>\r\n  <div *ngIf=\"!tokenValidated && !resetFailed && tokenSent\">\r\n    <!--<div class=\"input-group mb-12\">\r\n      <input class=\"form-control\" type=\"password\" [formControl]=\"tokenControl\"/>\r\n    </div>\r\n    <br/>\r\n    <button class=\"btn btn-brand\" (click)=\"validateToken()\" [disabled]=\"!tokenControl.valid\">Submit</button>-->\r\n    <app-validate-token [userId]=\"userId\" (onValidate)=\"validateToken($event)\" (onLock)=\"handleLock($event)\"></app-validate-token>\r\n  </div>\r\n  <div *ngIf=\"tokenValidated && !resetFailed && !passwordReset\">\r\n    <form [formGroup]=\"resetPasswordForm\" (submit)=\"resetPassword()\">\r\n      <div class=\"form-group m-form__group row\">\r\n        <label class=\"col-12 col-form-label\">Password</label>\r\n        <div class=\"col-12\">\r\n          <form-control-validation [vControlName]=\"'password'\"\r\n                                   [vFromGroup]=\"resetPasswordForm\"\r\n                                   vHideErrorMessages=\"true\">\r\n            <div class=\"input-group mb-3\">\r\n              <input [type]=\"inputType\"\r\n                     class=\"form-control m-input\"\r\n                     formControlName=\"password\"\r\n                     [ngbPopover]=\"validationPopoverBody\"\r\n                     [popoverTitle]=\"validationPopoverTitle\"\r\n                     [autoClose]=\"false\"\r\n                     triggers=\"manual\"\r\n                     #popOver=\"ngbPopover\"\r\n                     (input)=\"onInputChange($event, popOver)\" />\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\" (click)=\"toggleInputType()\">\r\n                  {{ (inputType === 'text') ? 'Hide' : 'Show' }}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group m-form__group row\">\r\n        <label class=\"col-12 col-form-label\">Re-type password</label>\r\n        <div class=\"col-12\">\r\n          <form-control-validation [vControlName]=\"'confirmPassword'\" [vFromGroup]=\"resetPasswordForm\">\r\n            <div>\r\n              <div class=\"input-group\">\r\n                <app-condition-input class=\"condition-form-control-wrapper col-12\"\r\n                                     [config]=\"confirmPasswordInputConditionConfig\"\r\n                                     [display]=\"!!resetPasswordForm.get('confirmPassword').value.length\"\r\n                                     [input]=\"resetPasswordForm.get('password').value === resetPasswordForm.get('confirmPassword').value\"\r\n                                     style=\"padding: 0\">\r\n                  <input type=\"text\" [type]=\"inputType\" class=\"form-control m-input\"\r\n                         formControlName=\"confirmPassword\" style=\"width: 85%\">\r\n                </app-condition-input>\r\n                <div class=\"input-group-append\" style=\"position:absolute; left: 85%\">\r\n                  <span class=\"input-group-text\" (click)=\"toggleInputType()\">\r\n                    {{ (inputType === 'text') ? 'Hide' : 'Show' }}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form-control-validation>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"resetPasswordForm.invalid\">\r\n        Reset Password\r\n      </button>\r\n    </form>\r\n  </div>\r\n  <div *ngIf=\"passwordReset\">\r\n    <h5 class=\"m-portlet__body-text\">\r\n      Password reset successfully. <a href=\"javascript:void(0)\" (click)=\"redirectToLogin()\">Log In</a>\r\n    </h5>\r\n  </div>\r\n  <div *ngIf=\"resetFailed && !isLoading\">\r\n    <div *ngIf=\"!accountLocked\">\r\n      <div *ngIf=\"!linkResent\">\r\n        <h5 class=\"m-portlet__body-text\">\r\n          Password reset link expired. Please <a href=\"javascript:void(0)\" (click)=\"resendLink()\">click here</a> to resend your password reset link.\r\n        </h5>\r\n      </div>\r\n      <div *ngIf=\"linkResent\">\r\n        <h5 class=\"m-portlet__body-text\">\r\n          A new link to reset your password was sent to your primary email.\r\n        </h5>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"accountLocked\">\r\n      <h5 class=\"m-portlet__body-text\">\r\n        Your account has been temporarily locked.\r\n      </h5>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--</div>-->\r\n\r\n<ng-template #validationPopoverTitle>Choose a strong password</ng-template>\r\n<ng-template #validationPopoverBody>\r\n  <ul class=\"popover-list\">\r\n    <li [ngClass]=\"{valid: isFieldValid('uppercase')}\">One uppercase letter</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('lowercase')}\">One lowercase letter</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('digit')}\">One number</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('special')}\">One special character</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('minlength')}\">At least 8 characters</li>\r\n  </ul>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/modules/auth/components/reset-password/reset-password.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/components/reset-password/reset-password.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n:host .auth-container {\n  max-width: 552px;\n  margin: 0 auto; }\n:host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n:host li.valid {\n  color: green; }\n:host li:before {\n  display: inline-block;\n  content: '•';\n  width: 1rem; }\n:host li.valid:before {\n  content: '✓'; }\n/deep/ .condition-container {\n  right: 5em !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcbW9kdWxlc1xcYXV0aFxcY29tcG9uZW50c1xccmVzZXQtcGFzc3dvcmRcXHJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUVJLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFIbEI7RUFNSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQixFQUFBO0FBUnBCO0VBV0ksWUFBWSxFQUFBO0FBWGhCO0VBY0kscUJBQXFCO0VBQ3JCLFlBQVM7RUFDVCxXQUFXLEVBQUE7QUFoQmY7RUFtQkksWUFBUyxFQUFJO0FBR2pCO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCAuYXV0aC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDU1MnB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG46aG9zdCB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG46aG9zdCBsaS52YWxpZCB7XG4gIGNvbG9yOiBncmVlbjsgfVxuXG46aG9zdCBsaTpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6ICfigKInO1xuICB3aWR0aDogMXJlbTsgfVxuXG46aG9zdCBsaS52YWxpZDpiZWZvcmUge1xuICBjb250ZW50OiAn4pyTJzsgfVxuXG4vZGVlcC8gLmNvbmRpdGlvbi1jb250YWluZXIge1xuICByaWdodDogNWVtICFpbXBvcnRhbnQ7IH1cbiIsIjpob3N0IHtcbiAgLmF1dGgtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIGxpLnZhbGlkIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gIH1cbiAgbGk6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29udGVudDogJ+KAoic7XG4gICAgd2lkdGg6IDFyZW07XG4gIH1cbiAgbGkudmFsaWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiAn4pyTJztcbiAgfVxufVxuL2RlZXAvIC5jb25kaXRpb24tY29udGFpbmVyIHtcbiAgcmlnaHQ6IDVlbSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/auth/components/reset-password/reset-password.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/auth/components/reset-password/reset-password.component.ts ***!
  \************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/modules/form/form-service.service */ "./src/app/core/modules/form/form-service.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _models_reset_password_form_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/reset-password-form.model */ "./src/app/modules/auth/models/reset-password-form.model.ts");
/* harmony import */ var _models_reset_password_view_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/reset-password-view.model */ "./src/app/modules/auth/models/reset-password-view.model.ts");
/* harmony import */ var _models_forgot_password_view_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/forgot-password-view.model */ "./src/app/modules/auth/models/forgot-password-view.model.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-oauth2-oidc */ "../lib/src/public_api.ts");
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
    // passwordInputConditionConfig = [
    //   {condition: [Validators.maxLength(0)], validatorText: 'not strong'},
    //   {condition: [Validators.maxLength(15)], validatorText: 'strong'},
    //   {condition: [Validators.maxLength(25)], validatorText: 'super strong'}
    // ];
    function ResetPasswordComponent(authService, activatedRoute, cdRef, toastr, formService, oauthService) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.formService = formService;
        this.oauthService = oauthService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.inputType = 'password';
        this.isLoading = true;
        this.code = '';
        this.tokenSent = false;
        this.tokenValidated = false;
        this.confirmPasswordInputConditionConfig = [
            { condition: true, validatorText: 'match' },
            { condition: false, validatorText: 'no match' }
        ];
    }
    ResetPasswordComponent.prototype.toggleInputType = function () {
        this.inputType = (this.inputType === 'password') ? 'text' : 'password';
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPasswordForm = this.formService.getFormByModel(new _models_reset_password_form_model__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordFormModel"]());
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.userId = params['id'];
            _this.code = params['code'];
            _this.validateLink();
        });
        console.log(this);
    };
    ResetPasswordComponent.prototype.tokenSendRequest = function (event) {
        console.log(event);
        this.tokenSent = event;
        if (!this.cdRef['destroyed'])
            this.cdRef.detectChanges();
    };
    ResetPasswordComponent.prototype.validateToken = function (event) {
        this.tokenValidated = event;
        if (this.tokenValidated) {
            this.validateLink();
        }
    };
    ResetPasswordComponent.prototype.validateLink = function () {
        var _this = this;
        this.authService.validateResetPasswordLink(this.userId, this.code).subscribe(function (result) {
            if (!result) {
                _this.resetFailed = true;
            }
            _this.isLoading = false;
            if (!_this.cdRef['destroyed'])
                _this.cdRef.detectChanges();
        });
    };
    ResetPasswordComponent.prototype.handleLock = function (event) {
        this.resetFailed = this.accountLocked = event;
        if (!this.cdRef['destroyed'])
            this.cdRef.detectChanges();
    };
    ResetPasswordComponent.prototype.resendLink = function () {
        var _this = this;
        var model = new _models_forgot_password_view_model__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordViewModel"]();
        model.id = this.userId;
        this.isLoading = true;
        this.authService.forgotPassword(model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (result) {
            if (result.success) {
                _this.linkResent = true;
            }
            else {
                _this.accountLocked = true;
                _this.toastr.error(result.message);
            }
            _this.isLoading = false;
            if (!_this.cdRef['destroyed'])
                _this.cdRef.detectChanges();
        });
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        console.log(this.resetPasswordForm.value);
        var model = new _models_reset_password_view_model__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordViewModel"]({
            userId: this.userId,
            password: this.resetPasswordForm.get('password').value,
            confirmPassword: this.resetPasswordForm.get('confirmPassword').value,
            code: this.code,
        });
        this.authService.resetPassword(model, this.code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (result) {
            if (!result.success) {
                _this.resetFailed = true;
                _this.toastr.error(result.message);
                return;
            }
            _this.passwordReset = true;
            _this.cdRef.detectChanges();
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
        return (!(this.resetPasswordForm.get('password').errors &&
            this.resetPasswordForm.get('password').errors[fieldName]));
    };
    ResetPasswordComponent.prototype.redirectToLogin = function () {
        this.oauthService.initImplicitFlow('/some-state;p1=1;p2=2');
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popOver'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ResetPasswordComponent.prototype, "popOver", void 0);
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/modules/auth/components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/modules/auth/components/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_5__["FormService"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__["OAuthService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/validate-token/validate-token.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/components/validate-token/validate-token.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!tokenValidated\">\r\n  <label>Please enter the code received in secondary method of contact:</label>\r\n  <input class=\"form-control\" type=\"text\" [formControl]=\"tokenControl\" />\r\n  <br />\r\n  <button class=\"btn btn-brand\" (click)=\"submitForm()\" [disabled]=\"tokenControl.invalid\">Submit</button>\r\n  <button *ngIf=\"tokenAttempted\" (click)=\"resendToken()\" class=\"btn btn-brand\" [disabled]=\"tokenResent\">Resend</button>\r\n</div>\r\n<div *ngIf=\"tokenValidated\">\r\n  <h3 class=\"m-portlet__body-text\">\r\n    {{msg}}\r\n  </h3>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/auth/components/validate-token/validate-token.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/auth/components/validate-token/validate-token.component.ts ***!
  \************************************************************************************/
/*! exports provided: ValidateTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateTokenComponent", function() { return ValidateTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _models_token_request_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/token-request-view.model */ "./src/app/modules/auth/models/token-request-view.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ValidateTokenComponent = /** @class */ (function () {
    function ValidateTokenComponent(authService, toastr, cdRef) {
        this.authService = authService;
        this.toastr = toastr;
        this.cdRef = cdRef;
        // an event that's fired when the server accepts/rejects the token
        this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // an event that's fired when the server locks a user account
        this.onLock = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // an event that's fired when the server releases user credentials
        this.onRelease = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tokenValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ];
        this.tokenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose(this.tokenValidators));
        this.tokenValidated = false;
        this.tokenAttempted = false;
        this.tokenResent = false;
    }
    ValidateTokenComponent.prototype.resendToken = function () {
        var _this = this;
        var model = new _models_token_request_view_model__WEBPACK_IMPORTED_MODULE_4__["TokenRequestViewModel"]();
        model.id = this.userId;
        this.tokenResent = true;
        if (!this.cdRef['destroyed'])
            this.cdRef.detectChanges();
        this.authService.sendToken(model).subscribe(function (res) {
            if (!res.success) {
                _this.toastr.error(res.message);
                if (res.deleted) {
                    _this.onRelease.emit(true);
                }
                else if (res.locked) {
                    _this.onLock.emit(true);
                }
            }
        });
    };
    ValidateTokenComponent.prototype.submitForm = function () {
        var _this = this;
        var token = this.tokenControl.value;
        if (this.activation) {
            this.authService.confirmActivationToken(this.userId, token).subscribe(function (res) {
                _this.validateToken(res);
            });
        }
        else {
            this.authService.confirmTwoFactorAuthentication(this.userId, token).subscribe(function (res) {
                _this.validateToken(res);
            });
        }
    };
    ValidateTokenComponent.prototype.validateToken = function (res) {
        this.tokenValidated = res.success;
        if (!this.tokenValidated) {
            this.toastr.error(res.message);
            this.tokenAttempted = true;
            this.tokenResent = false;
        }
        this.onValidate.emit(this.tokenValidated);
        if (!this.cdRef['destroyed'])
            this.cdRef.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ValidateTokenComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ValidateTokenComponent.prototype, "msg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ValidateTokenComponent.prototype, "activation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ValidateTokenComponent.prototype, "onValidate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ValidateTokenComponent.prototype, "onLock", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ValidateTokenComponent.prototype, "onRelease", void 0);
    ValidateTokenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validate-token',
            template: __webpack_require__(/*! ./validate-token.component.html */ "./src/app/modules/auth/components/validate-token/validate-token.component.html"),
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ValidateTokenComponent);
    return ValidateTokenComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/models/account-recovery-view.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/models/account-recovery-view.model.ts ***!
  \********************************************************************/
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

/***/ "./src/app/modules/auth/models/forgot-password-view.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/auth/models/forgot-password-view.model.ts ***!
  \*******************************************************************/
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

/***/ "./src/app/modules/auth/models/forgot-username-view.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/auth/models/forgot-username-view.model.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotUsernameViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotUsernameViewModel", function() { return ForgotUsernameViewModel; });
var ForgotUsernameViewModel = /** @class */ (function () {
    function ForgotUsernameViewModel() {
    }
    return ForgotUsernameViewModel;
}());



/***/ }),

/***/ "./src/app/modules/auth/models/reset-password-form.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/models/reset-password-form.model.ts ***!
  \******************************************************************/
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
        _core_modules_form_validators_special_validator__WEBPACK_IMPORTED_MODULE_5__["specialValidator"],
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

/***/ "./src/app/modules/auth/models/reset-password-view.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/models/reset-password-view.model.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordViewModel", function() { return ResetPasswordViewModel; });
/* harmony import */ var _core_modules_form_common_form_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/modules/form/common-form-constructor */ "./src/app/core/modules/form/common-form-constructor.ts");
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

var ResetPasswordViewModel = /** @class */ (function (_super) {
    __extends(ResetPasswordViewModel, _super);
    function ResetPasswordViewModel(data) {
        var _this = _super.call(this) || this;
        _this.userId = null;
        _this.email = null;
        _this.password = null;
        _this.confirmPassword = null;
        _this.code = null;
        _this.setData(data);
        return _this;
    }
    return ResetPasswordViewModel;
}(_core_modules_form_common_form_constructor__WEBPACK_IMPORTED_MODULE_0__["CommonFormConstructor"]));



/***/ }),

/***/ "./src/app/modules/auth/models/token-request-view.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/auth/models/token-request-view.model.ts ***!
  \*****************************************************************/
/*! exports provided: TokenRequestViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenRequestViewModel", function() { return TokenRequestViewModel; });
var TokenRequestViewModel = /** @class */ (function () {
    function TokenRequestViewModel() {
    }
    return TokenRequestViewModel;
}());



/***/ }),

/***/ "./src/app/modules/auth/models/user-registration-form.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/auth/models/user-registration-form.model.ts ***!
  \*********************************************************************/
/*! exports provided: UserRegistrationFormModel, hasTwoFactorAuthentication, passwordsMatch, emailsDistinct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationFormModel", function() { return UserRegistrationFormModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTwoFactorAuthentication", function() { return hasTwoFactorAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordsMatch", function() { return passwordsMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailsDistinct", function() { return emailsDistinct; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_modules_form_common_form_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/modules/form/common-form-constructor */ "./src/app/core/modules/form/common-form-constructor.ts");
/* harmony import */ var _core_modules_form_validators_email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/modules/form/validators/email.validator */ "./src/app/core/modules/form/validators/email.validator.ts");
/* harmony import */ var _core_modules_form_validators_phone_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/modules/form/validators/phone.validator */ "./src/app/core/modules/form/validators/phone.validator.ts");
/* harmony import */ var _core_modules_form_validators_uppercase_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/modules/form/validators/uppercase.validator */ "./src/app/core/modules/form/validators/uppercase.validator.ts");
/* harmony import */ var _core_modules_form_validators_lowercase_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/modules/form/validators/lowercase.validator */ "./src/app/core/modules/form/validators/lowercase.validator.ts");
/* harmony import */ var _core_modules_form_validators_digit_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/modules/form/validators/digit.validator */ "./src/app/core/modules/form/validators/digit.validator.ts");
/* harmony import */ var _core_modules_form_validators_special_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/modules/form/validators/special.validator */ "./src/app/core/modules/form/validators/special.validator.ts");
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








var UserRegistrationFormValidation = {
    userName: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(64)],
    //firstName: [Validators.required],
    //lastName: [Validators.required],
    email: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _core_modules_form_validators_email_validator__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]],
    password: [
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
        _core_modules_form_validators_uppercase_validator__WEBPACK_IMPORTED_MODULE_4__["uppercaseValidator"],
        _core_modules_form_validators_lowercase_validator__WEBPACK_IMPORTED_MODULE_5__["lowercaseValidator"],
        _core_modules_form_validators_digit_validator__WEBPACK_IMPORTED_MODULE_6__["digitValidator"],
        _core_modules_form_validators_special_validator__WEBPACK_IMPORTED_MODULE_7__["specialValidator"]
    ],
    //recaptcha: [Validators.required], // rajiv - commented out as requested by HPD
    confirmPassword: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    isAgree: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue],
    twoFactorMethod: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
    phone: [_core_modules_form_validators_phone_validator__WEBPACK_IMPORTED_MODULE_3__["phoneValidator"]],
    email2: [_core_modules_form_validators_email_validator__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]]
};
var UserRegistrationFormValidationMessages = {
    'userName.duplicate': 'That username is taken. Please try another one.',
    'email.duplicate': 'This email is already registered',
    'phone.duplicate': 'This phone is already registered',
    'email2.duplicate': 'This email is already registered',
};
var UserRegistrationFormModel = /** @class */ (function (_super) {
    __extends(UserRegistrationFormModel, _super);
    function UserRegistrationFormModel(data) {
        var _this = _super.call(this) || this;
        _this.userName = '';
        _this.firstName = '';
        _this.lastName = '';
        _this.email = '';
        _this.password = '';
        //recaptcha = ''; // rajiv - commented out as requested by HPD
        _this.confirmPassword = '';
        _this.phone = '';
        _this.email2 = '';
        _this.twoFactorMethod = '';
        _this.isAgree = false;
        _this.setData(data);
        return _this;
    }
    Object.defineProperty(UserRegistrationFormModel.prototype, "validationRules", {
        get: function () {
            return UserRegistrationFormValidation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegistrationFormModel.prototype, "validationMessages", {
        get: function () {
            return UserRegistrationFormValidationMessages;
        },
        enumerable: true,
        configurable: true
    });
    return UserRegistrationFormModel;
}(_core_modules_form_common_form_constructor__WEBPACK_IMPORTED_MODULE_1__["CommonFormConstructor"]));

function hasTwoFactorAuthentication(c) {
    if (!c.get('phone').value && !c.get('email2').value)
        return { missingTwoFactorAuthentication: true };
    return null;
}
function passwordsMatch(c) {
    if (c.get('password').value !== c.get('confirmPassword').value)
        return { passwordNotConfirmed: true };
    return null;
}
function emailsDistinct(c) {
    if (!c.get('email').value || !c.get('email2').value)
        return null;
    if (c.get('email').value.toLowerCase() === c.get('email2').value.toLowerCase())
        return { emailsNotDistinct: true };
    return null;
}


/***/ }),

/***/ "./src/app/modules/auth/pages/account-recovery/account-recovery.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/account-recovery/account-recovery.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title-bar [title]=\"'Account Recovery'\">\r\n  <span breadcrumbs>\r\n    / Account Recovery\r\n  </span>\r\n</title-bar>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <m-portlet>\r\n        <!--<div mPortletHeadTitle>\r\n        </div>-->\r\n        <!--<div mPortletHeadTools>\r\n        </div>-->\r\n        <m-portlet-body cssAnimation=\"fade-in-top stagger\">\r\n          <loader *ngIf=\"isLoading\"></loader>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div *ngIf=\"forgotUsername && !isLoading\">\r\n                <div *ngIf=\"!unameSent\">\r\n                  <label>Enter your primary email address:</label>\r\n                  <input class=\"form-control\" type=\"text\" [formControl]=\"forgotUnameCtrl\" />\r\n                  <small *ngIf=\"forgotUnameCtrl.invalid && forgotUnameCtrl.dirty\">Please enter a valid email address</small>\r\n                  <br />\r\n                  <div class=\"row\">\r\n                    <ngx-recaptcha2 [formControl]=\"captchaCtrl\"\r\n                                    class=\"recaptcha self-center\"\r\n                                    [siteKey]=\"captchaKey\"\r\n                                    (expire)=\"onRecaptchaUpdateEvent()\"\r\n                                    (success)=\"onRecaptchaUpdateEvent($event)\">\r\n                    </ngx-recaptcha2>\r\n                  </div>\r\n                  <br />\r\n                  <button class=\"btn btn-brand\" (click)=\"forgotUsernameRequest()\" [disabled]=\"captchaCtrl.invalid || forgotUnameCtrl.invalid\">Submit</button>\r\n                </div>\r\n                <div *ngIf=\"unameSent\">\r\n                  <h3 class=\"m-portlet__body-text\">\r\n                    Your username was sent to your primary email.\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"forgotPassword && !isLoading\">\r\n                <div *ngIf=\"!linkSent && !accountLocked\">\r\n                  <label>Enter your username or email address:</label>\r\n                  <input class=\"form-control\" type=\"text\" [formControl]=\"forgotPwrdCtrl\" />\r\n                  <br />\r\n                  <div class=\"row\">\r\n                    <ngx-recaptcha2 [formControl]=\"captchaCtrl\"\r\n                                    class=\"recaptcha self-center\"\r\n                                    [siteKey]=\"captchaKey\"\r\n                                    (expire)=\"onRecaptchaUpdateEvent()\"\r\n                                    (success)=\"onRecaptchaUpdateEvent($event)\">\r\n                    </ngx-recaptcha2>\r\n                  </div>\r\n                  <br />\r\n                  <button class=\"btn btn-brand\" (click)=\"forgotPasswordRequest()\" [disabled]=\"captchaCtrl.invalid || forgotPwrdCtrl.invalid\">Submit</button>\r\n                </div>\r\n                <div *ngIf=\"linkSent\">\r\n                  <h5 class=\"m-portlet__body-text\">\r\n                    A link to reset your password was sent to your primary email.\r\n                  </h5>\r\n                </div>\r\n                <div *ngIf=\"accountLocked\">\r\n                  <h5 class=\"m-portlet__body-text\">\r\n                    Your account has been locked temporarily.\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          \r\n        </m-portlet-body>\r\n      </m-portlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--<div class=\"m-portlet container\">\r\n  <div class=\"m-portlet__head\">\r\n    <div class=\"m-portlet__head-caption\">\r\n      <div class=\"m-portlet__head-title\">\r\n        \r\n        <h3 class=\"m-portlet__head-text\">\r\n          Account Recovery\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"m-portlet__body\">\r\n    \r\n  </div>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/modules/auth/pages/account-recovery/account-recovery.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/account-recovery/account-recovery.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvYWNjb3VudC1yZWNvdmVyeS9hY2NvdW50LXJlY292ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/auth/pages/account-recovery/account-recovery.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/auth/pages/account-recovery/account-recovery.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AccountRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRecoveryComponent", function() { return AccountRecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _models_forgot_password_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/forgot-password-view.model */ "./src/app/modules/auth/models/forgot-password-view.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var projects_web_src_app_core_modules_form_validators_email_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/web/src/app/core/modules/form/validators/email.validator */ "./src/app/core/modules/form/validators/email.validator.ts");
/* harmony import */ var _models_forgot_username_view_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/forgot-username-view.model */ "./src/app/modules/auth/models/forgot-username-view.model.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-oauth2-oidc */ "../lib/src/public_api.ts");
/* harmony import */ var projects_web_src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! projects/web/src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var projects_web_src_app_core_modules_form_validators_username_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/web/src/app/core/modules/form/validators/username.validator */ "./src/app/core/modules/form/validators/username.validator.ts");
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
    function AccountRecoveryComponent(authService, activatedRoute, cdRef, toastr, oAuthService, router) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.oAuthService = oAuthService;
        this.router = router;
        this.forgotUsername = false;
        this.forgotPassword = false;
        this.isLoading = false;
        this.unameSent = false;
        this.linkSent = false;
        this.accountLocked = false;
        this.captchaKey = projects_web_src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].recaptchaKey;
        // uname cannot have @
        this.customPasswordRecoveryValidator = function (c) { return (c.value && c.value.includes('@')) ? Object(projects_web_src_app_core_modules_form_validators_email_validator__WEBPACK_IMPORTED_MODULE_6__["emailValidator"])(c) : Object(projects_web_src_app_core_modules_form_validators_username_validator__WEBPACK_IMPORTED_MODULE_10__["unameValidator"])(c); };
    }
    AccountRecoveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.oAuthService.hasValidAccessToken()) {
            this.router.navigate(['/']);
        }
        this.forgotUnameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, projects_web_src_app_core_modules_form_validators_email_validator__WEBPACK_IMPORTED_MODULE_6__["emailValidator"]]);
        this.forgotPwrdCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.customPasswordRecoveryValidator]);
        this.captchaCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.activatedRoute.queryParams.subscribe(function (params) {
            //this.userId = params['id'];
            //this.code = params['code'];
        });
        this.activatedRoute.data.subscribe(function (data) {
            if (data.forgotUsername) {
                _this.forgotUsername = true;
            }
            else if (data.forgotPassword) {
                _this.forgotPassword = true;
            }
        });
    };
    AccountRecoveryComponent.prototype.forgotUsernameRequest = function () {
        var _this = this;
        var email = this.forgotUnameCtrl.value;
        this.forgotUnameCtrl.setErrors({ submitted: true });
        this.forgotUnameCtrl.setValue(null);
        var model = new _models_forgot_username_view_model__WEBPACK_IMPORTED_MODULE_7__["ForgotUsernameViewModel"]();
        model.email = email;
        this.isLoading = true;
        this.authService.forgotUsername(model).subscribe(function (data) {
            if (data.success) {
                _this.unameSent = true;
            }
            else {
                _this.toastr.error(data.message);
            }
            _this.isLoading = false;
            if (!_this.cdRef['destroyed'])
                _this.cdRef.detectChanges();
        });
    };
    AccountRecoveryComponent.prototype.forgotPasswordRequest = function () {
        var _this = this;
        var value = this.forgotPwrdCtrl.value;
        this.forgotPwrdCtrl.setErrors({ submitted: true });
        this.forgotPwrdCtrl.setValue(null);
        var model = new _models_forgot_password_view_model__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordViewModel"]();
        if (value.includes('@')) {
            model.email = value;
        }
        else {
            model.username = value;
        }
        this.isLoading = true;
        this.authService.forgotPassword(model).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.linkSent = true;
            }
            else {
                if (res.locked)
                    _this.accountLocked = true;
                _this.toastr.error(res.message);
            }
            _this.isLoading = false;
            if (!_this.cdRef['destroyed'])
                _this.cdRef.detectChanges();
        });
    };
    AccountRecoveryComponent.prototype.onRecaptchaUpdateEvent = function (event) {
        // console.log(event);
        this.captchaCtrl.updateValueAndValidity();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AccountRecoveryComponent.prototype, "forgotUsername", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AccountRecoveryComponent.prototype, "forgotPassword", void 0);
    AccountRecoveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-acccount-recovery',
            template: __webpack_require__(/*! ./account-recovery.component.html */ "./src/app/modules/auth/pages/account-recovery/account-recovery.component.html"),
            styles: [__webpack_require__(/*! ./account-recovery.component.scss */ "./src/app/modules/auth/pages/account-recovery/account-recovery.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__["OAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccountRecoveryComponent);
    return AccountRecoveryComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/confirm-registration/confirm-registration.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/confirm-registration/confirm-registration.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title-bar [title]=\"'Registration Confirmed'\"></title-bar>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <m-portlet>\r\n        <!--<div mPortletHeadTitle>         \r\n        </div>-->\r\n        <!--<div mPortletHeadTools>          \r\n        </div>-->\r\n        <m-portlet-body cssAnimation=\"fade-in-top stagger\">\r\n          <div *ngIf=\"isLoading\">\r\n            <loader></loader>\r\n          </div>\r\n          <div *ngIf=\"!isLoading\">\r\n            <div *ngIf=\"emailConfirmed && !accountReleased\">\r\n              <app-validate-token *ngIf=\"!tokenValid\" [userId]=\"userId\" (onValidate)=\"validateToken($event)\" (onRelease)=\"handleRelease($event)\" [activation]=\"true\"></app-validate-token>\r\n              <div *ngIf=\"tokenValid\">\r\n                <h5 class=\"m-portlet__body-text\">\r\n                  Your account is successfully activated. Please log into your account. <a href=\"javascript:void(0);\" class=\"m-link\" (click)=\"redirectToLogin()\">Log In</a>\r\n                </h5>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"linkExpired\">\r\n              <div *ngIf=\"!linkResent\">\r\n                <h4 class=\"m-portlet__body-text\">This link has expired</h4>\r\n                <a href=\"javascript:void(0);\" class=\"m-link\" (click)=\"retryActivation()\">Resend activation link</a>\r\n              </div>\r\n              <div *ngIf=\"linkResent\">\r\n                <h3 class=\"m-portlet__body-text\">A new activation link was sent to your email.</h3>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"accountReleased\">\r\n              Account credentials released. Please <a href=\"javascript:void(0);\" class=\"m-link\" (click)=\"redirectToRegistration()\">register</a> again.\r\n            </div>\r\n          </div>\r\n        </m-portlet-body>\r\n      </m-portlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/auth/pages/confirm-registration/confirm-registration.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/confirm-registration/confirm-registration.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvY29uZmlybS1yZWdpc3RyYXRpb24vY29uZmlybS1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/auth/pages/confirm-registration/confirm-registration.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/confirm-registration/confirm-registration.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConfirmRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmRegistrationComponent", function() { return ConfirmRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ "../lib/src/public_api.ts");
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
    function ConfirmRegistrationComponent(authService, activatedRoute, cdRef, toastr, oauthService, router) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.oauthService = oauthService;
        this.router = router;
        this.code = '';
        this.isLoading = true;
        this.linkExpired = false;
        this.linkResent = false;
        this.emailConfirmed = false;
        this.accountReleased = false;
        this.tokenValid = false;
    }
    ConfirmRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.oauthService.hasValidAccessToken()) {
            this.router.navigate(['/']);
        }
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.userId = params['id'];
            _this.code = params['code'];
            _this.authService.confirmRegistration(_this.userId, _this.code).subscribe(function (data) {
                _this.isLoading = false;
                if (data.redirect)
                    _this.router.navigate(['/']);
                if (data.success) {
                    _this.emailConfirmed = true;
                    _this.toastr.success("Your primary email address has been confirmed.");
                }
                else {
                    _this.linkExpired = true;
                }
                if (!_this.cdRef['destroyed'])
                    _this.cdRef.detectChanges();
            });
        });
    };
    ConfirmRegistrationComponent.prototype.validateToken = function (event) {
        this.tokenValid = event;
        if (!this.cdRef['destroyed'])
            this.cdRef.detectChanges();
    };
    ConfirmRegistrationComponent.prototype.handleRelease = function (event) {
        this.accountReleased = event;
        if (!this.cdRef['destroyed'])
            this.cdRef.detectChanges();
    };
    ConfirmRegistrationComponent.prototype.redirectToLogin = function () {
        this.oauthService.initImplicitFlow('/some-state;p1=1;p2=2');
    };
    ConfirmRegistrationComponent.prototype.redirectToRegistration = function () {
        this.router.navigate(['/auth/sign-up']);
    };
    ConfirmRegistrationComponent.prototype.retryActivation = function () {
        var _this = this;
        this.isLoading = true;
        this.authService.retryActivation(this.userId).subscribe(function (res) {
            _this.isLoading = false;
            if (res.success) {
                _this.linkResent = true;
            }
            else {
                _this.toastr.error(res.message);
            }
            if (!_this.cdRef['destroyed'])
                _this.cdRef.detectChanges();
        });
    };
    ConfirmRegistrationComponent.prototype.log = function () {
        Array.from(arguments).forEach(function (a) { return console.log(a); });
    };
    ConfirmRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-registration',
            template: __webpack_require__(/*! ./confirm-registration.component.html */ "./src/app/modules/auth/pages/confirm-registration/confirm-registration.component.html"),
            styles: [__webpack_require__(/*! ./confirm-registration.component.scss */ "./src/app/modules/auth/pages/confirm-registration/confirm-registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["OAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConfirmRegistrationComponent);
    return ConfirmRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/user-registration/user-registration.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/user-registration/user-registration.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title-bar [title]=\"'New User Registration'\"></title-bar>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <m-portlet>\r\n        <!--<div mPortletHeadTitle>\r\n        </div>-->\r\n        <!--<div mPortletHeadTools>\r\n        </div>-->\r\n        <m-portlet-body cssAnimation=\"fade-in-top stagger\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"auth-container\">\r\n                <!--<h4 class=\"m-portlet__head-text mb-3\">Sign Up</h4>-->\r\n                <loader *ngIf=\"isLoading\"></loader>\r\n                <form [formGroup]=\"userRegistrationForm\" *ngIf=\"!userCreated && !isLoading\">\r\n                  <h5>How you’ll login</h5>\r\n                  <div class=\"form-group m-form__group row\">\r\n                    <label class=\"col-12\">User Name</label>\r\n                    <div class=\"col-12\">\r\n                      <form-control-validation [vControlName]=\"'userName'\" [vFromGroup]=\"userRegistrationForm\" [VMessages]=\"userRegistrationFormModel.validationMessages\">\r\n                        <input type=\"text\" class=\"form-control m-input\" formControlName=\"userName\" userName validateDistinct=\"0\">\r\n                      </form-control-validation>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group m-form__group row\">\r\n                    <label class=\"col-12\">Password</label>\r\n                    <div class=\"col-12\">\r\n                      <form-control-validation [vControlName]=\"'password'\" [vFromGroup]=\"userRegistrationForm\"\r\n                                               vHideErrorMessages=\"true\">\r\n                        <div class=\"input-group\">\r\n                          <input [type]=\"isPasswordVisible ? 'text' : 'password' \" class=\"form-control m-input\"\r\n                                 formControlName=\"password\"\r\n                                 [ngbPopover]=\"validationPopoverBody\"\r\n                                 [popoverTitle]=\"validationPopoverTitle\"\r\n                                 (input)=\"onInputChange($event, popOverPassword)\"\r\n                                 #popOverPassword=\"ngbPopover\"\r\n                                 [autoClose]=\"false\"\r\n                                 placement=\"left\"\r\n                                 triggers=\"onFocus\">\r\n\r\n                          <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-primary\" type=\"button\" (click)=\"isPasswordVisible = !isPasswordVisible\">\r\n                              {{!isPasswordVisible ? 'Show' : 'Hide'}}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </form-control-validation>\r\n                      <small *ngIf=\"userRegistrationForm.get('password').touched && userRegistrationForm.get('password').errors?.required\">This field is required</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group m-form__group row\">\r\n                    <label class=\"col-12\">Re-type password</label>\r\n                    <div class=\"col-12\">\r\n                      <form-control-validation [vControlName]=\"'confirmPassword'\" [vFromGroup]=\"userRegistrationForm\">\r\n                        <div class=\"input-group\">\r\n                          <app-condition-input class=\"condition-form-control-wrapper\"\r\n                                               [config]=\"confirmPasswordInputConditionConfig\"\r\n                                               [display]=\"!!userRegistrationForm.get('confirmPassword').value.length\"\r\n                                               [input]=\"userRegistrationForm.get('password').value === userRegistrationForm.get('confirmPassword').value\">\r\n                            <input [type]=\"isConfirmPasswordVisible ? 'text' : 'password'\" type=\"text\" class=\"form-control m-input\"\r\n                                   formControlName=\"confirmPassword\">\r\n                          </app-condition-input>\r\n\r\n                          <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-primary\" type=\"button\"\r\n                                    (click)=\"isConfirmPasswordVisible = !isConfirmPasswordVisible\">\r\n                              {{!isConfirmPasswordVisible ? 'Show' : 'Hide'}}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </form-control-validation>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <h5 class=\"mt-lg\">A little more about you</h5>\r\n\r\n                  <!--<div class=\"form-group m-form__group row\">\r\n                    <label class=\"col-12 col-form-label\">First Name</label>\r\n                    <div class=\"col-12\">\r\n                      <form-control-validation [vControlName]=\"'firstName'\" [vFromGroup]=\"userRegistrationForm\">\r\n                        <input type=\"text\" class=\"form-control m-input\" formControlName=\"firstName\">\r\n                      </form-control-validation>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group m-form__group row\">\r\n                    <label class=\"col-12 col-form-label\">Last Name</label>\r\n                    <div class=\"col-12\">\r\n                      <form-control-validation [vControlName]=\"'lastName'\" [vFromGroup]=\"userRegistrationForm\">\r\n                        <input type=\"text\" class=\"form-control m-input\" formControlName=\"lastName\">\r\n                      </form-control-validation>\r\n                    </div>\r\n                  </div>-->\r\n                  <div class=\"form-group m-form__group row\">\r\n                    <label class=\"col-12\">Primary email address</label>\r\n                    <small class=\"col-12 text-muted mb-sm\">You must have access to this email in case you need to recover your account.</small>\r\n                    <div class=\"col-12\">\r\n                      <form-control-validation [vControlName]=\"'email'\" [vFromGroup]=\"userRegistrationForm\" [VMessages]=\"userRegistrationFormModel.validationMessages\">\r\n                        <input type=\"text\" class=\"form-control m-input\" formControlName=\"email\" noSpaces validateDistinct=\"1\">\r\n                      </form-control-validation>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <h5 class=\"mt-lg\">Additional contact information</h5>\r\n                  <p>\r\n                    These can be used to help you regain access to your account, if you ever forget your username or need to reset\r\n                    your password.\r\n                  </p>\r\n                  <mat-radio-group [formControl]=\"twoFactorMethod\">\r\n                    <div>\r\n                      <mat-radio-button class=\"padding-right-5\" value=\"P\"></mat-radio-button>\r\n                      <label>Phone</label>\r\n                    </div>\r\n                    <div>\r\n                      <mat-radio-button class=\"padding-right-5\" value=\"E\"></mat-radio-button>\r\n                      <label>Alternate email</label>\r\n                    </div>\r\n                  </mat-radio-group>\r\n\r\n                  <div *ngIf=\"userRegistrationForm.get('twoFactorMethod').value === 'E'\">\r\n                    <div class=\"form-group m-form__group\">\r\n                      <label>Alternate email address</label>\r\n                      <form-control-validation [vControlName]=\"'email2'\" [vFromGroup]=\"userRegistrationForm\" [VMessages]=\"userRegistrationFormModel.validationMessages\">\r\n                        <input type=\"text\" class=\"form-control m-input\" formControlName=\"email2\" noSpaces validateDistinct=\"3\">\r\n                      </form-control-validation>\r\n                      <small class=\"text-danger\" *ngIf=\"userRegistrationForm.invalid && userRegistrationForm.get('email2').touched && userRegistrationForm.errors?.emailsNotDistinct\">Alternate email cannot be the same as primary email.</small>\r\n                    </div>\r\n\r\n                    <ngb-alert class=\"mb-4\" type=\"info-block\" [dismissible]=\"false\">\r\n                      <i class=\"material-icons\">info</i>\r\n                      <div class=\"pl-3\">\r\n                        <b>Don’t have two email addresses?</b> Use the email address of a trusted friend or family\r\n                        member.\r\n                      </div>\r\n                    </ngb-alert>\r\n                  </div>\r\n\r\n                  <div class=\"form-group m-form__group\" *ngIf=\"userRegistrationForm.get('twoFactorMethod').value === 'P'\">\r\n                    <label>Phone number</label>\r\n                    <form-control-validation [vControlName]=\"'phone'\" [vFromGroup]=\"userRegistrationForm\" [VMessages]=\"userRegistrationFormModel.validationMessages\">\r\n                      <input type=\"text\" class=\"form-control m-input\" formControlName=\"phone\" [textMask]=\"{mask: phoneMask, guide: false}\" validateDistinct=\"2\">\r\n                    </form-control-validation>\r\n                  </div>\r\n\r\n                  <h5 class=\"mt-lg\">One last thing…</h5>\r\n\r\n                  <!--rajiv - commented out as requested by HPD -->\r\n                  <!--<ngx-recaptcha2 formControlName=\"recaptcha\"\r\n                  class=\"recaptcha\"\r\n                  [siteKey]=\"captchaKey\"\r\n                  (expire)=\"onRecaptchaUpdateEvent()\"\r\n                  (success)=\"onRecaptchaUpdateEvent($event)\">\r\n                  </ngx-recaptcha2>-->\r\n\r\n                  <div class=\"display-flex pt-2\">\r\n                    <label class=\"m-checkbox m-checkbox--solid m-checkbox--brand\">\r\n                      <input class=\"form-control\" type=\"checkbox\" name=\"isActive\" formControlName=\"isAgree\">\r\n                      <span></span>\r\n                    </label>\r\n\r\n                    <div>\r\n                      By checking this box, you agree to the DCA <a href=\"\" target=\"_blank\">Terms and Conditions</a>.\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"text-right pt-md\">\r\n                    <button class=\"btn btn-primary\" type=\"submit\" (click)=\"saveUserForm()\" [disabled]=\"userRegistrationForm.invalid\">\r\n                      Create my Account\r\n                    </button>\r\n                  </div>\r\n                </form>\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"userCreated\">\r\n            <div class=\"col-12\">\r\n              <h5>\r\n                Please activate your account by going to the link sent to your primary email.\r\n              </h5>\r\n            </div>\r\n          </div>\r\n        </m-portlet-body>\r\n      </m-portlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--<div class=\"m-portlet\">-->\r\n<!--<div class=\"m-portlet__head\">-->\r\n<!--<div class=\"m-portlet__head-caption\">-->\r\n<!--<div class=\"m-portlet__head-title\">-->\r\n<!--<span class=\"m-portlet__head-icon\">-->\r\n<!--<i class=\"la la-gear\"></i>-->\r\n<!--</span>-->\r\n<!--<h3 class=\"m-portlet__head-text\">-->\r\n<!--User Manager-->\r\n<!--</h3>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"m-portlet__body pt-2\">-->\r\n<!--&lt;!&ndash;<loader *ngIf=\"isLoadingData\"></loader>&ndash;&gt;-->\r\n<!--<div class=\"row\" *ngIf=\"!userCreated\">-->\r\n<!--<div class=\"col-12\">-->\r\n<!--<h4>Create your account</h4>-->\r\n<!--<p>You'll need an account to start saving and application for lotteries.</p>-->\r\n<!--<br>-->\r\n<!--<form [formGroup]=\"userRegistrationForm\" (submit)=\"saveUserForm()\">-->\r\n<!--<div class=\"row\">-->\r\n<!--<div class=\"col-4\">-->\r\n<!--<div class=\"form-group m-form__group row\">-->\r\n<!--<label class=\"col-12 col-form-label\">First Name</label>-->\r\n<!--<div class=\"col-12\">-->\r\n<!--<form-control-validation [vControlName]=\"'firstName'\" [vFromGroup]=\"userRegistrationForm\">-->\r\n<!--<input type=\"text\" class=\"form-control m-input\" formControlName=\"firstName\">-->\r\n<!--</form-control-validation>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group m-form__group row\">-->\r\n<!--<label class=\"col-12 col-form-label\">Last Name</label>-->\r\n<!--<div class=\"col-12\">-->\r\n<!--<form-control-validation [vControlName]=\"'lastName'\" [vFromGroup]=\"userRegistrationForm\">-->\r\n<!--<input type=\"text\" class=\"form-control m-input\" formControlName=\"lastName\">-->\r\n<!--</form-control-validation>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group m-form__group row\">-->\r\n<!--<label class=\"col-12 col-form-label\">User Name</label>-->\r\n<!--<div class=\"col-12\">-->\r\n<!--<form-control-validation [vControlName]=\"'userName'\" [vFromGroup]=\"userRegistrationForm\">-->\r\n<!--<input type=\"text\" class=\"form-control m-input\" formControlName=\"userName\">-->\r\n<!--</form-control-validation>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group m-form__group row\">-->\r\n<!--<label class=\"col-12 col-form-label\">Email Address (This will be your account name)</label>-->\r\n<!--<div class=\"col-12\">-->\r\n<!--<form-control-validation [vControlName]=\"'email'\" [vFromGroup]=\"userRegistrationForm\">-->\r\n<!--<input type=\"text\" class=\"form-control m-input\" formControlName=\"email\">-->\r\n<!--</form-control-validation>-->\r\n<!--<button type=\"button\" [disabled]=\"true\" class=\"btn btn-link\">or link a social account</button>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group m-form__group row\">-->\r\n<!--<label class=\"col-12 col-form-label\">Password</label>-->\r\n<!--<div class=\"col-12\">-->\r\n<!--<form-control-validation [vControlName]=\"'password'\" [vFromGroup]=\"userRegistrationForm\">-->\r\n<!--<app-condition-input [config]=\"passwordInputConditionConfig\"-->\r\n<!--[input]=\"userRegistrationForm.get('password')\">-->\r\n<!--<input type=\"text\" class=\"form-control m-input\" formControlName=\"password\">-->\r\n<!--</app-condition-input>-->\r\n<!--</form-control-validation>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group m-form__group row\">-->\r\n<!--<label class=\"col-12 col-form-label\">Re-type password</label>-->\r\n<!--<div class=\"col-12\">-->\r\n<!--<form-control-validation [vControlName]=\"'confirmPassword'\" [vFromGroup]=\"userRegistrationForm\">-->\r\n<!--<app-condition-input [config]=\"confirmPasswordInputConditionConfig\"-->\r\n<!--[display]=\"!!userRegistrationForm.get('confirmPassword').value.length\"-->\r\n<!--[input]=\"userRegistrationForm.get('password').value === userRegistrationForm.get('confirmPassword').value\">-->\r\n<!--<input type=\"text\" class=\"form-control m-input\" formControlName=\"confirmPassword\">-->\r\n<!--</app-condition-input>-->\r\n<!--</form-control-validation>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group m-form__group row\">-->\r\n<!--<label class=\"col-12 col-form-label\">Choose confirmation by phone or secondary email:</label>-->\r\n<!--<div class=\"col-12\">-->\r\n<!--<div class=\"form-group m-form__group margin-left-20\">-->\r\n<!--<mat-radio-group formControlName=\"confirmOTP\">-->\r\n<!--<div class=\"row\">-->\r\n<!--<mat-radio-button value=\"P\"></mat-radio-button>-->\r\n<!--<label>Phone</label>-->\r\n<!--</div>-->\r\n<!--<div class=\"row\">-->\r\n<!--<mat-radio-button value=\"E\"></mat-radio-button>-->\r\n<!--<label>Email</label>-->\r\n<!--</div>-->\r\n<!--</mat-radio-group>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group m-form__group\" *ngIf=\"confirmOTP.value === 'P'\">-->\r\n<!--<label>Phone</label>-->\r\n<!--<form-control-validation [vControlName]=\"'phone'\" [vFromGroup]=\"userRegistrationForm\">-->\r\n<!--<input type=\"text\" class=\"form-control m-input\" formControlName=\"phone\">-->\r\n<!--</form-control-validation>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group m-form__group\" *ngIf=\"confirmOTP.value === 'E'\">-->\r\n<!--<label>Secondary Email</label>-->\r\n<!--<form-control-validation [vControlName]=\"'email2'\" [vFromGroup]=\"userRegistrationForm\">-->\r\n<!--<input type=\"text\" class=\"form-control m-input\" formControlName=\"email2\">-->\r\n<!--</form-control-validation>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<h5 class=\"pt-2\">Legal Disclaimer</h5>-->\r\n<!--<p>-->\r\n<!--Privacy Statement: The information you provide through NYC Housing-->\r\n<!--<br>-->\r\n<!--Connect is subject to tje NYC.goc privacy policy.-->\r\n<!--</p>-->\r\n<!--<div class=\"form-group m-form__group row mb-4\">-->\r\n<!--<div class=\"col-12\">-->\r\n<!--<label class=\"m-checkbox m-checkbox&#45;&#45;solid m-checkbox&#45;&#45;brand\">-->\r\n<!--<input class=\"form-control\" type=\"checkbox\" name=\"isActive\" formControlName=\"isAgree\"> I Agree-->\r\n<!--<span></span>-->\r\n<!--</label>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"userRegistrationForm.invalid\">-->\r\n<!--Create my Account-->\r\n<!--</button>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</form>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div *ngIf=\"userCreated\">-->\r\n<!--<h3 class=\"m-portlet__body-text\">Your account has been created. Please confirm your registration by clicking the-->\r\n<!--link sent to your email.</h3>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n\r\n\r\n<ng-template #validationPopoverTitle>Choose a strong password</ng-template>\r\n<ng-template #validationPopoverBody>\r\n  <ul class=\"popover-list\">\r\n    <li [ngClass]=\"{valid: isFieldValid('uppercase')}\"> One uppercase letter</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('lowercase')}\"> One lowercase letter</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('digit')}\"> One number</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('special')}\"> One special character</li>\r\n    <li [ngClass]=\"{valid: isFieldValid('minlength')}\"> At least 8 characters</li>\r\n  </ul>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/modules/auth/pages/user-registration/user-registration.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/user-registration/user-registration.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host h5 {\n  margin-bottom: 0.667rem; }\n:host .auth-container {\n  margin: 0 auto; }\n:host .condition-form-control-wrapper {\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0; }\n:host /deep/ app-condition-input input {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n:host .alert-info-block {\n  color: #017ace;\n  background-color: #f1f9ff;\n  border-color: #017ace;\n  display: flex;\n  padding: 12px 16px; }\n:host .alert-info-block .material-icons {\n    font-size: 48px !important; }\n:host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n:host li.valid {\n  color: green; }\n:host li:before {\n  display: inline;\n  content: '•';\n  width: 1rem; }\n:host li.valid:before {\n  content: '✓'; }\n:host .recaptcha {\n  display: flex;\n  justify-content: center;\n  padding: 0.313rem 0 1.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy91c2VyLXJlZ2lzdHJhdGlvbi91c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy91c2VyLXJlZ2lzdHJhdGlvbi9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy91c2VyLXJlZ2lzdHJhdGlvbi9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXBwXFxtb2R1bGVzXFxhdXRoXFxwYWdlc1xcdXNlci1yZWdpc3RyYXRpb25cXHVzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQix1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQStGQSwyQkFBQTtBQWFBLFlBQUE7QUFNQSx1QkFBQTtBQTZCQSxlQUFBO0FBeUNBLFlBQUE7QUFxQkEsWUFBQTtBQ3ZOQTtFQUVJLHVCRDRIaUIsRUFBQTtBQzlIckI7RUFPSSxjQUFjLEVBQUE7QUFQbEI7RUFZSSxjQUFjO0VBQ2QsU0FBUztFQUNULGdCQUFnQixFQUFBO0FBZHBCO0VBb0JRLDBCQUEyQjtFQUMzQiw2QkFBNkIsRUFBQTtBQXJCckM7RUEyQkksY0RnQ1U7RUMvQlYseUJEa0NlO0VDakNmLHFCRDhCVTtFQzdCVixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7QUEvQnRCO0lBa0NNLDBCQUEwQixFQUFBO0FBbENoQztFQXdDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQixFQUFBO0FBMUNwQjtFQThDSSxZQUFZLEVBQUE7QUE5Q2hCO0VBa0RJLGVBQWU7RUFDZixZQUFTO0VBQ1QsV0FBVyxFQUFBO0FBcERmO0VBd0RJLFlBQVMsRUFBSTtBQXhEakI7RUE0REksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIElNUE9SVEFOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUGxlYXNlIGNvbnN1bHQgd2l0aCBZdXJ5IGJlZm9yZSBhZGRpbmcgc29tZSBuZXcgQ1NTIHZhcmlhYmxlcy4gICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFRhYmxlIG9mIENvbnRlbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUeXBvZ3JhcGh5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFRoZW1lIENvbG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTaGFkb3dzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNwYWNpbmcgR3VpZGVsaW5lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQW5pbWF0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBDb3JuZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cbi8qIFNoYWRvd3MgKi9cbi8qIFNwYWNpbmcgR3VpZGVsaW5lcyAqL1xuLyogQW5pbWF0aW9ucyAqL1xuLyogQm9yZGVycyAqL1xuLyogQ29ybmVycyAqL1xuOmhvc3QgaDUge1xuICBtYXJnaW4tYm90dG9tOiAwLjY2N3JlbTsgfVxuXG46aG9zdCAuYXV0aC1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG46aG9zdCAuY29uZGl0aW9uLWZvcm0tY29udHJvbC13cmFwcGVyIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHdpZHRoOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG46aG9zdCAvZGVlcC8gYXBwLWNvbmRpdGlvbi1pbnB1dCBpbnB1dCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgfVxuXG46aG9zdCAuYWxlcnQtaW5mby1ibG9jayB7XG4gIGNvbG9yOiAjMDE3YWNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmOWZmO1xuICBib3JkZXItY29sb3I6ICMwMTdhY2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEycHggMTZweDsgfVxuICA6aG9zdCAuYWxlcnQtaW5mby1ibG9jayAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50OyB9XG5cbjpob3N0IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbjpob3N0IGxpLnZhbGlkIHtcbiAgY29sb3I6IGdyZWVuOyB9XG5cbjpob3N0IGxpOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY29udGVudDogJ+KAoic7XG4gIHdpZHRoOiAxcmVtOyB9XG5cbjpob3N0IGxpLnZhbGlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICfinJMnOyB9XG5cbjpob3N0IC5yZWNhcHRjaGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4zMTNyZW0gMCAxLjI1cmVtOyB9XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIElNUE9SVEFOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUGxlYXNlIGNvbnN1bHQgd2l0aCBZdXJ5IGJlZm9yZSBhZGRpbmcgc29tZSBuZXcgQ1NTIHZhcmlhYmxlcy4gICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFRhYmxlIG9mIENvbnRlbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUeXBvZ3JhcGh5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFRoZW1lIENvbG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTaGFkb3dzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNwYWNpbmcgR3VpZGVsaW5lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQW5pbWF0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBDb3JuZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9UeXBvZ3JhcGh5XG4kZm9udC1tYWluOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtaGVhZGluZzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiRmb250LWxpbmVhd2Vzb21lOiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNnB4LzEgXCJMaW5lQXdlc29tZVwiO1xuJGZvbnQtZm9udGF3ZXNvbWU6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuJGh0bWwtZm9udC1zaXplLWxnOiAxNnB4O1xuJGh0bWwtZm9udC1zaXplLW1kOiAxNXB4O1xuJGh0bWwtZm9udC1zaXplLXNtOiAxNHB4O1xuJGh0bWwtZm9udC1zaXplLXhzOiAxM3B4O1xuXG4kaHRtbC1mb250LXdlaWdodDogNDAwO1xuXG4vLyBUaGVtZSBDb2xvcnNcbiRjb2xvci1vZmZzZXQ6IDYlOyAvLyB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgbGlnaHRlciBhbmQgZGFya2VyIHZhcmllbnRzIG9mIGEgc3BlY2lmaWMgY29sb3JcblxuJGJhc2U6ICNmYWZhZmE7IC8vdXNlZCBwcmltYXJpbHkgYXMgb2ZmLXdoaXRlIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuXG4kcHJpbWFyeTogIzAyMDA2MztcbiRzZWNvbmRhcnk6ICNmYWZhZmE7XG4kc2Vjb25kYXJ5LWJsdWU6IHJnYigxMDksIDE3OCwgMjU1KTsgLy8gd2Ugc2hvdWxkIHJlcGxhY2UgdGhpc1xuJGFjY2VudDogI2ZjYjMyMzsgLy8jMDBjNWRjO1xuJGZvY3VzOiAjOTgxNmY0O1xuXG4kc3VjY2VzczogIzAwZTZhYjtcbiR3YXJuaW5nOiAjZmZiODIyO1xuJGRhbmdlcjogI2ZmMmIyYjsgLy8jZjQ1MTZjO1xuJGluZm86ICM1NTc4ZWI7IC8vIzM2YTNmNztcblxuJG1ldGFsOiAjYzRjNWQ2O1xuJG1ldGFsLWxpZ2h0OiBsaWdodGVuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG4kbWV0YWwtZGFyazogZGFya2VuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG5cbi8vIGdyZXlzXG4kbGlnaHQ6ICNmZmY7XG4kZGFyazogIzJjMmUzZTtcbiRncmV5LTIwOiAjMzMzMzMzO1xuJGdyZXktMzA6ICM0ZDRkNGQ7XG4kZ3JleS01MDogIzgwODA4MDtcbiRncmV5LTcwOiAjYjNiM2IzO1xuJGdyZXktOTA6ICNlNmU2ZTY7XG4kZ3JleS05NTogI2YyZjJmMjtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZjtcblxuLy8gRXh0ZW5kZWQgQ29sb3IgUGFsZXR0ZVxuLy8gVE9ETzogUmV2aWV3IHRoZXNlIGNvbG9yc1xuJGRhcmstYmx1ZTogIzAyMzk3MDtcbiRibHVlOiAjMDE3YWNlO1xuJGNlcnVsZWFuOiAjMDE3YWNlO1xuJGxpZ2h0LWJsdWU6ICNjY2VhZmY7XG4kcGFsZS1ibHVlOiAjZjFmOWZmO1xuJGRhcmstdGVhbDogIzAwNjQ2ZTtcbiR0ZWFsOiAjMDBjMWQ0O1xuJGxpZ2h0LXRlYWw6ICNjY2ZhZmY7XG4kcGFsZS10ZWFsOiAjZjVmZWZmO1xuJGRhcmstZ3JlZW46ICMwYTVjNDA7XG4kZ3JlZW46ICMxNGI4ODE7XG4kbGlnaHQtZ3JlZW46ICNhM2Y1ZDk7XG4kcGFsZS1ncmVlbjogI2Y2ZmVmYjtcbiRkYXJrLXllbGxvdzogIzk5NzQwMDtcbiR5ZWxsb3c6ICNmZmNlMzM7XG4kbGlnaHQteWVsbG93OiAjZmZmM2NjO1xuJHBhbGUteWVsbG93OiAjZmZmZGY1O1xuJGRhcmstcmVkOiAjNjYwYTAwO1xuJHJlZDogI2NjMTQwMDtcbiRsaWdodC1yZWQ6ICNmZmQxY2M7XG4kcGFsZS1yZWQ6ICNmZmY2ZjU7XG5cblxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gIFwiYWNjZW50XCI6ICRhY2NlbnQsXG4gIFwic3VjY2Vzc1wiOiAkc3VjY2VzcywgXG4gIFwid2FybmluZ1wiOiAkd2FybmluZywgXG4gIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJtZXRhbFwiOiAkbWV0YWwsXG4gIFwiZm9jdXNcIjogJGZvY3VzLFxuICBcImdyZXktMjBcIjogJGdyZXktMjAsIFxuICBcImdyZXktMzBcIjogJGdyZXktMzAsXG4gIFwiZ3JleS01MFwiOiAkZ3JleS01MCxcbiAgXCJncmV5LTcwXCI6ICRncmV5LTcwLFxuICBcImdyZXktOTBcIjogJGdyZXktOTAsXG4gIFwiZ3JleS05NVwiOiAkZ3JleS05NSxcbiAgXCJiYXNlXCI6ICRiYXNlLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcIndoaXRlXCI6ICR3aGl0ZSxcbiAgXCJibGFja1wiOiAkYmxhY2ssXG4gIFwiYmx1ZVwiOiAkYmx1ZVxuKTtcblxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG4kZ3Qtc21hbGwtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHNtKSAhZGVmYXVsdDsgLy8gNTc2XG4kZ3QtbWVkaXVtLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBtZCkgIWRlZmF1bHQ7IC8vIDc2OFxuJGd0LWxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBsZykgIWRlZmF1bHQ7IC8vIDk5MlxuJGd0LXhsYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgeGwpICFkZWZhdWx0OyAvLyAxMjAwXG5cbi8qIFNoYWRvd3MgKi9cbiRzaGFkb3ctc206IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XG4kc2hhZG93LW1kOiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMDgpOyAvL2RlZmF1bHRcbiRzaGFkb3ctbGc6IDAgMTVweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwwLDAsMC4wOCk7XG4kc2hhZG93LWVsZXZhdGU6ICRzaGFkb3ctbGc7IC8vIG9uIGhvdmVyXG5cbi8qIFNwYWNpbmcgR3VpZGVsaW5lcyAqL1xuJHNwYWNpbmcteHhzOiAwLjMzM3JlbTsgICAgIC8vIHNtYWxsIGdhcCAgICAgICAgICAgLSA1cHggICAgKHh4cylcbiRzcGFjaW5nLXhzOiAwLjY2N3JlbTsgICAgICAvLyBSZWxhdGVkIERpcmVjdGx5ICAgIC0gMTBweCAgICh4cylcbiRzcGFjaW5nLXNtOiAxcmVtOyAgICAgICAgICAvLyBSZWxhdGVkIEluZGlyZWN0bHkgIC0gMTVweCAgIChzbSlcbiRzcGFjaW5nLW1kOiAxLjMzcmVtOyAgICAgICAvLyBSZWxhdGVkIEdyb3VwICAgICAgIC0gMjBweCAgIChtZCkgIC8vZGVmYXVsdFxuJHNwYWNpbmctbGc6IDJyZW07ICAgICAgICAgIC8vIFVucmVsYXRlZCBHcm91cCAgICAgLSAzMHB4ICAgKGxnKVxuJHNwYWNpbmcteGw6IDIuNjY3cmVtOyAgICAgIC8vIE5ldyBTZWN0aW9uICAgICAgICAgLSA0MHB4ICAgKHhsKVxuJHNwYWNpbmcteHhsOiA0cmVtOyAgICAgICAgIC8vIE5ldyBTZWN0aW9uIChMYXJnZSkgLSA2MHB4ICAgKHh4bClcblxuJHNwYWNpbmctc2l6ZXM6IChcbiAgXCIwXCI6IDAsXG4gIFwiNVwiOiAkc3BhY2luZy14eHMsXG4gIFwiMTBcIjogJHNwYWNpbmcteHMsXG4gIFwiMTVcIjogJHNwYWNpbmctc20sXG4gIFwiMjBcIjogJHNwYWNpbmctbWQsXG4gIFwiMzBcIjogJHNwYWNpbmctbGcsXG4gIFwiNDBcIjogJHNwYWNpbmcteGwsXG4gIFwiNjBcIjogJHNwYWNpbmcteHhsLFxuICBcIjE1LWVtXCI6IDEuNXJlbSxcbiAgXCIyMi1lbVwiOiAyLjJyZW0sXG4gIFwieHhzXCI6ICRzcGFjaW5nLXh4cyxcbiAgXCJ4c1wiOiAkc3BhY2luZy14cyxcbiAgXCJzbVwiOiAkc3BhY2luZy1zbSxcbiAgXCJtZFwiOiAkc3BhY2luZy1tZCxcbiAgXCJsZ1wiOiAkc3BhY2luZy1sZyxcbiAgXCJ4bFwiOiAkc3BhY2luZy14bCxcbiAgXCJ4eGxcIjogJHNwYWNpbmcteHhsLCAgXG4gICk7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbiRhbmltYXRpb24teHM6IGFsbCAwLjFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1zaDogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLW1kOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7IC8vZGVmYXVsdFxuJGFuaW1hdGlvbi1sZzogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXhsOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teHhsOiBhbGwgMS4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblxuJGFuaW1hdGlvbi1kZWZhdWx0OiAkYW5pbWF0aW9uLW1kO1xuXG4kYW5pbWF0aW9uLWZhZGUtaW46IGZhZGUtaW4gMXMgYm90aDtcbiRhbmltYXRpb24tZmFkZS1vdXQ6IGZhZGUtb3V0IDFzIGVhc2Utb3V0IGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tdG9wOiBmYWRlLWluLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tOiBmYWRlLWluLWJvdHRvbSAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyOiBwdWZmLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjQ3MCwgMC4wMDAsIDAuNzQ1LCAwLjcxNSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyOiBwdWZmLW91dC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBib3RoO1xuJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsOiBzaGFrZS1ob3Jpem9udGFsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1KSBib3RoO1xuJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2s6IGZvY3VzLWluLWNvbnRyYWN0LWJjayAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7IC8vIGZvciB0ZXh0XG4kYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3A6IHNjYWxlLWluLXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4kYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wOiBzY2FsZS1vdXQtdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbiRhbmltYXRpb24tcHVsc2UtaW5maW5pdGU6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIGluZmluaXRlO1xuJGFuaW1hdGlvbi1wdWxzZS0zOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyAzO1xuJGFuaW1hdGlvbi1wdWxzZS0xOiBzaGFkb3ctcHVsc2UgMXMgMTtcblxuLy8gWW91IGNhbiB1c2UgYW55IG9mIHRoZXNlIG5hbWVzIHRvIGFuaW1hdGUgSFRNTCBlbGVtZW50cyBvbiBpbml0aWF0aW9uXG4kYW5pbWF0aW9uczogKFxuICBcImZhZGUtaW5cIjogJGFuaW1hdGlvbi1mYWRlLWluLFxuICBcImZhZGUtb3V0XCI6ICRhbmltYXRpb24tZmFkZS1vdXQsXG4gIFwiZmFkZS1pbi10b3BcIjogJGFuaW1hdGlvbi1mYWRlLWluLXRvcCxcbiAgXCJmYWRlLWluLWJvdHRvbVwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tLFxuICBcInB1ZmYtaW4tY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXIsXG4gIFwicHVmZi1vdXQtY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyLFxuICBcInNoYWtlLWhvcml6b250YWxcIjogJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsLFxuICBcImZvY3VzLWluLWNvbnRyYWN0LWJja1wiOiAkYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjayxcbiAgXCJzY2FsZS1pbi12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcCxcbiAgXCJzY2FsZS1vdXQtdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wLFxuICBcInB1bHNlLWluZmluaXRlXCI6ICRhbmltYXRpb24tcHVsc2UtaW5maW5pdGUsXG4gIFwicHVsc2UtM1wiOiAkYW5pbWF0aW9uLXB1bHNlLTMsXG4gIFwicHVsc2UtMVwiOiAkYW5pbWF0aW9uLXB1bHNlLTFcbik7XG5cbi8qIEJvcmRlcnMgKi9cbiRib3JkZXItc2l6ZS1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXNpemUtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXNpemUtbGc6IDAuNXJlbTtcbiRib3JkZXItc2l6ZS0xOiAxcHg7XG4kYm9yZGVyLXNpemUtMjogMnB4O1xuJGJvcmRlci1zaXplLTM6IDNweDtcbiRib3JkZXItc2l6ZS01OiA1cHg7XG4kYm9yZGVyLXNpemUtMTA6IDEwcHg7XG5cbiRib3JkZXItc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXNpemUtc20sXG4gIFwibWRcIjogJGJvcmRlci1zaXplLW1kLFxuICBcImxnXCI6ICRib3JkZXItc2l6ZS1sZyxcbiAgXCIxXCI6ICRib3JkZXItc2l6ZS0xLFxuICBcIjJcIjogJGJvcmRlci1zaXplLTIsXG4gIFwiM1wiOiAkYm9yZGVyLXNpemUtMyxcbiAgXCI1XCI6ICRib3JkZXItc2l6ZS01LFxuICBcIjEwXCI6ICRib3JkZXItc2l6ZS0xMFxuKTtcblxuLyogQ29ybmVycyAqL1xuJGJvcmRlci1yYWRpdXMtc206IDAuMTI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1sZzogMC41cmVtO1xuJGJvcmRlci1yYWRpdXMtMjogMnB4O1xuJGJvcmRlci1yYWRpdXMtNDogNHB4O1xuJGJvcmRlci1yYWRpdXMtNjogNnB4O1xuJGJvcmRlci1yYWRpdXMtMTA6IDEwcHg7XG4kYm9yZGVyLXJhZGl1cy0xNTogMTVweDtcbiRib3JkZXItcmFkaXVzLTIwOiAyMHB4O1xuJGJvcmRlci1yYWRpdXMtaGFsZjogNTAlO1xuJGJvcmRlci1yYWRpdXMtZnVsbDogMTAwJTtcblxuJGJvcmRlci1yYWRpdXMtc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXJhZGl1cy1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXJhZGl1cy1tZCwgLy9kZWZhdWx0XG4gIFwibGdcIjogJGJvcmRlci1yYWRpdXMtbGcsXG4gIFwiMlwiOiAkYm9yZGVyLXJhZGl1cy0yLFxuICBcIjRcIjogJGJvcmRlci1yYWRpdXMtNCxcbiAgXCI2XCI6ICRib3JkZXItcmFkaXVzLTYsXG4gIFwiMTBcIjogJGJvcmRlci1yYWRpdXMtMTAsXG4gIFwiMTVcIjogJGJvcmRlci1yYWRpdXMtMTUsXG4gIFwiMjBcIjogJGJvcmRlci1yYWRpdXMtMjAsXG4gIFwiaGFsZlwiOiAkYm9yZGVyLXJhZGl1cy1oYWxmLFxuICBcImZ1bGxcIjogJGJvcmRlci1yYWRpdXMtZnVsbCxcbik7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICBoNSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkc3BhY2luZy14cztcclxuICB9XHJcblxyXG4gIC5hdXRoLWNvbnRhaW5lciB7XHJcbiAgICAvL21heC13aWR0aDogNTUycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG5cclxuICAuY29uZGl0aW9uLWZvcm0tY29udHJvbC13cmFwcGVyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgd2lkdGg6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC9kZWVwLyB7XHJcbiAgICBhcHAtY29uZGl0aW9uLWlucHV0IHtcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwIDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFsZXJ0LWluZm8tYmxvY2sge1xyXG4gICAgY29sb3I6ICRibHVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBhbGUtYmx1ZTtcclxuICAgIGJvcmRlci1jb2xvcjogJGJsdWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG5cclxuICAgIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgbGkudmFsaWQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuXHJcbiAgbGk6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbnRlbnQ6ICfigKInO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgfVxyXG5cclxuICBsaS52YWxpZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ+Kckyc7XHJcbiAgfVxyXG5cclxuICAucmVjYXB0Y2hhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMzEzcmVtIDAgMS4yNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/auth/pages/user-registration/user-registration.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/user-registration/user-registration.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/modules/form/form-service.service */ "./src/app/core/modules/form/form-service.service.ts");
/* harmony import */ var _core_modules_form_validators_email_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/modules/form/validators/email.validator */ "./src/app/core/modules/form/validators/email.validator.ts");
/* harmony import */ var _core_modules_form_validators_phone_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/modules/form/validators/phone.validator */ "./src/app/core/modules/form/validators/phone.validator.ts");
/* harmony import */ var _core_addons_textmask_directive_addons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/addons/textmask-directive-addons */ "./src/app/core/addons/textmask-directive-addons/index.ts");
/* harmony import */ var _models_user_registration_form_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/user-registration-form.model */ "./src/app/modules/auth/models/user-registration-form.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(authService, formService, toastr, cdRef) {
        this.authService = authService;
        this.formService = formService;
        this.toastr = toastr;
        this.cdRef = cdRef;
        this.isLoadingData = true;
        //captchaKey = environment.recaptchaKey;   // rajiv - commented out as requested by HPD
        this.isPasswordVisible = false;
        this.isConfirmPasswordVisible = false;
        this.userCreated = false;
        this.isLoading = false;
        this.confirmPasswordInputConditionConfig = [
            { condition: true, validatorText: 'match' },
            { condition: false, validatorText: 'no match' }
        ];
        this.passwordInputConditionConfig = [
            { condition: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(0)], validatorText: 'not strong' },
            { condition: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)], validatorText: 'strong' },
            { condition: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)], validatorText: 'super strong' }
        ];
        this.phoneMask = _core_addons_textmask_directive_addons__WEBPACK_IMPORTED_MODULE_6__["phoneMask"];
        this.userRegistrationFormModel = new _models_user_registration_form_model__WEBPACK_IMPORTED_MODULE_7__["UserRegistrationFormModel"]();
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.authService.getUserRegister().subscribe(v => {
        //  console.log(v);
        //});
        this.userRegistrationForm = this.formService.getFormByModel(new _models_user_registration_form_model__WEBPACK_IMPORTED_MODULE_7__["UserRegistrationFormModel"](), [
            _models_user_registration_form_model__WEBPACK_IMPORTED_MODULE_7__["hasTwoFactorAuthentication"],
            _models_user_registration_form_model__WEBPACK_IMPORTED_MODULE_7__["passwordsMatch"],
            _models_user_registration_form_model__WEBPACK_IMPORTED_MODULE_7__["emailsDistinct"]
        ]);
        this.userNameControl = this.userRegistrationForm.get('userName');
        this.emailControl = this.userRegistrationForm.get('email');
        this.phoneControl = this.userRegistrationForm.get('phone');
        this.altEmailControl = this.userRegistrationForm.get('email2');
        this.twoFactorMethod = this.userRegistrationForm.get('twoFactorMethod');
        this.twoFactorMethod.valueChanges.subscribe(function (value) {
            if (value === "P") {
                _this.phoneControl.setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _core_modules_form_validators_phone_validator__WEBPACK_IMPORTED_MODULE_5__["phoneValidator"]
                ]);
                _this.altEmailControl.setValue(null);
                _this.altEmailControl.setValidators([_core_modules_form_validators_email_validator__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]]);
            }
            else if (value === "E") {
                _this.altEmailControl.setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _core_modules_form_validators_email_validator__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]
                ]);
                _this.phoneControl.setValue(null);
                _this.phoneControl.setValidators([_core_modules_form_validators_phone_validator__WEBPACK_IMPORTED_MODULE_5__["phoneValidator"]]);
            }
            _this.phoneControl.updateValueAndValidity();
            _this.altEmailControl.updateValueAndValidity();
        });
        console.log(this.userRegistrationForm);
    };
    UserRegistrationComponent.prototype.printMessage = function (data) {
        if (!data.success && data.message) {
            this.toastr.error(data.message);
        }
        else if (data.success && data.message) {
            this.toastr.success(data.message);
        }
    };
    UserRegistrationComponent.prototype.userExists = function (uname, email, phone, email2) {
        return this.authService.userExists(uname, email, phone, email2);
    };
    UserRegistrationComponent.prototype.setDuplicateControl = function (data, c) {
        if (!data.success) {
            c.setErrors({ duplicate: true });
        }
        else {
            if (c.hasError('duplicate'))
                delete c.errors['duplicate'];
        }
        if (!this.cdRef['destroyed'])
            this.cdRef.detectChanges();
    };
    UserRegistrationComponent.prototype.saveUserForm = function () {
        var _this = this;
        var saveData = this.userRegistrationForm.value;
        saveData.phone = (saveData.phone) ? saveData.phone.replace(/(\-|\(|\)|\s)/g, '') : null;
        this.isLoading = true;
        this.authService.saveUser(saveData).subscribe(function (res) {
            _this.userCreated = true;
            _this.isLoading = false;
            if (!_this.cdRef['destroyed'])
                _this.cdRef.detectChanges();
        });
    };
    // rajiv - commented out as requested by HPD
    //onRecaptchaUpdateEvent(event?:any){
    //  // console.log(event);
    //  this.userRegistrationForm.updateValueAndValidity();
    //}
    UserRegistrationComponent.prototype.isFieldValid = function (type) {
        //console.log('type', type)
        //console.log('this.userRegistrationForm.get(\'password\').errors',this.userRegistrationForm.get('password').errors)
        var fieldName = (type === 'minlength') ? type : type + "Validator";
        return (!(this.userRegistrationForm.get('password').errors &&
            this.userRegistrationForm.get('password').errors[fieldName]));
    };
    UserRegistrationComponent.prototype.onInputChange = function (event, popOver) {
        if (event.target.value && !popOver.isOpen() && this.userRegistrationForm.get('password').invalid) {
            popOver.open();
            return;
        }
        else if ((!event.target.value && popOver.isOpen()) || this.userRegistrationForm.get('password').valid) {
            popOver.close();
            return;
        }
    };
    UserRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-registration',
            template: __webpack_require__(/*! ./user-registration.component.html */ "./src/app/modules/auth/pages/user-registration/user-registration.component.html"),
            styles: [__webpack_require__(/*! ./user-registration.component.scss */ "./src/app/modules/auth/pages/user-registration/user-registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _core_modules_form_form_service_service__WEBPACK_IMPORTED_MODULE_3__["FormService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map