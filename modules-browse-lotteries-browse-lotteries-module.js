(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-browse-lotteries-browse-lotteries-module"],{

/***/ "../../node_modules/ng2-nouislider/src/ng2-nouislider.js":
/*!*************************************************************************************!*\
  !*** C:/TFS/DCA/Public/PublicWeb/node_modules/ng2-nouislider/src/ng2-nouislider.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noUiSlider = __webpack_require__(/*! nouislider */ "../../node_modules/nouislider/distribute/nouislider.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var DefaultFormatter = (function () {
    function DefaultFormatter() {
    }
    DefaultFormatter.prototype.to = function (value) {
        // formatting with http://stackoverflow.com/a/26463364/478584
        return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    };
    ;
    DefaultFormatter.prototype.from = function (value) {
        return parseFloat(value);
    };
    return DefaultFormatter;
}());
exports.DefaultFormatter = DefaultFormatter;
var NouisliderComponent = (function () {
    function NouisliderComponent(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.config = {};
        this.change = new core_1.EventEmitter(true);
        this.update = new core_1.EventEmitter(true);
        this.slide = new core_1.EventEmitter(true);
        this.set = new core_1.EventEmitter(true);
        this.start = new core_1.EventEmitter(true);
        this.end = new core_1.EventEmitter(true);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.eventHandler = function (emitter, values, handle, unencoded) {
            var v = _this.toValues(values);
            var emitEvents = false;
            if (_this.value === undefined) {
                _this.value = v;
                return;
            }
            if (Array.isArray(v) && _this.value[handle] != v[handle]) {
                emitEvents = true;
            }
            if (!Array.isArray(v) && _this.value != v) {
                emitEvents = true;
            }
            if (emitEvents) {
                emitter.emit(v);
                _this.onChange(v);
            }
            if (Array.isArray(v)) {
                _this.value[handle] = v[handle];
            }
            else {
                _this.value = v;
            }
        };
        this.defaultKeyHandler = function (e) {
            var stepSize = _this.slider.steps();
            var index = parseInt(e.target.getAttribute('data-handle'));
            var sign = 1;
            var multiplier = 1;
            var step = 0;
            var delta = 0;
            switch (e.which) {
                case 34:// PageDown
                    multiplier = _this.config.pageSteps;
                case 40: // ArrowDown
                case 37:// ArrowLeft
                    sign = -1;
                    step = stepSize[index][0];
                    e.preventDefault();
                    break;
                case 33:// PageUp
                    multiplier = _this.config.pageSteps;
                case 38: // ArrowUp
                case 39:// ArrowRight
                    step = stepSize[index][1];
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            delta = sign * multiplier * step;
            var newValue;
            if (Array.isArray(_this.value)) {
                newValue = [].concat(_this.value);
                newValue[index] = newValue[index] + delta;
            }
            else {
                newValue = _this.value + delta;
            }
            _this.slider.set(newValue);
        };
    }
    NouisliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var inputsConfig = JSON.parse(JSON.stringify({
            behaviour: this.behaviour,
            connect: this.connect,
            limit: this.limit,
            start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
            step: this.step,
            pageSteps: this.pageSteps,
            keyboard: this.keyboard,
            onKeydown: this.onKeydown,
            range: this.range || this.config.range || { min: this.min, max: this.max },
            tooltips: this.tooltips,
            snap: this.snap,
            animate: this.animate
        }));
        inputsConfig.tooltips = this.tooltips || this.config.tooltips;
        inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
        this.slider = noUiSlider.create(this.el.nativeElement.querySelector('div'), Object.assign(this.config, inputsConfig));
        this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));
        if (this.config.keyboard) {
            if (this.config.pageSteps === undefined) {
                this.config.pageSteps = 10;
            }
            var _loop_1 = function (handle) {
                handle.setAttribute('tabindex', 0);
                handle.addEventListener('click', function () {
                    handle.focus();
                });
                if (this_1.config.onKeydown === undefined) {
                    handle.addEventListener('keydown', this_1.defaultKeyHandler);
                }
                else {
                    handle.addEventListener('keydown', this_1.config.onKeydown);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
                var handle = _a[_i];
                _loop_1(handle);
            }
        }
        this.slider.on('set', function (values, handle, unencoded) {
            _this.eventHandler(_this.set, values, handle, unencoded);
        });
        this.slider.on('update', function (values, handle, unencoded) {
            _this.update.emit(_this.toValues(values));
        });
        this.slider.on('change', function (values, handle, unencoded) {
            _this.change.emit(_this.toValues(values));
        });
        this.slider.on('slide', function (values, handle, unencoded) {
            _this.eventHandler(_this.slide, values, handle, unencoded);
        });
        this.slider.on('start', function (values, handle, unencoded) {
            _this.start.emit(_this.toValues(values));
        });
        this.slider.on('end', function (values, handle, unencoded) {
            _this.end.emit(_this.toValues(values));
        });
    };
    NouisliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.slider && (changes.min || changes.max || changes.step || changes.range)) {
            setTimeout(function () {
                _this.slider.updateOptions({
                    range: Object.assign({}, {
                        min: _this.min,
                        max: _this.max
                    }, _this.range || {}),
                    step: _this.step
                });
            });
        }
    };
    NouisliderComponent.prototype.toValues = function (values) {
        var v = values.map(this.config.format.from);
        return (v.length == 1 ? v[0] : v);
    };
    NouisliderComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (this.slider) {
            setTimeout(function () {
                _this.slider.set(value);
            });
        }
    };
    NouisliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NouisliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NouisliderComponent.prototype.setDisabledState = function (isDisabled) {
        isDisabled
            ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'disabled', 'true')
            : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], 'disabled');
    };
    NouisliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'nouislider',
                    host: {
                        '[class.ng2-nouislider]': 'true'
                    },
                    template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
                    styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(function () { return NouisliderComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NouisliderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    NouisliderComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'behaviour': [{ type: core_1.Input },],
        'connect': [{ type: core_1.Input },],
        'limit': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'snap': [{ type: core_1.Input },],
        'animate': [{ type: core_1.Input },],
        'range': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'pageSteps': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'ngModel': [{ type: core_1.Input },],
        'keyboard': [{ type: core_1.Input },],
        'onKeydown': [{ type: core_1.Input },],
        'formControl': [{ type: core_1.Input },],
        'tooltips': [{ type: core_1.Input },],
        'change': [{ type: core_1.Output },],
        'update': [{ type: core_1.Output },],
        'slide': [{ type: core_1.Output },],
        'set': [{ type: core_1.Output },],
        'start': [{ type: core_1.Output },],
        'end': [{ type: core_1.Output },],
    };
    return NouisliderComponent;
}());
exports.NouisliderComponent = NouisliderComponent;
var NouisliderModule = (function () {
    function NouisliderModule() {
    }
    NouisliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    exports: [NouisliderComponent],
                    declarations: [NouisliderComponent],
                },] },
    ];
    /** @nocollapse */
    NouisliderModule.ctorParameters = function () { return []; };
    return NouisliderModule;
}());
exports.NouisliderModule = NouisliderModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nMi1ub3Vpc2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXlDO0FBQ3pDLHNDQVd1QjtBQUN2Qix3Q0FJd0I7QUFPeEI7SUFBQTtJQVNBLENBQUM7SUFSQyw2QkFBRSxHQUFGLFVBQUcsS0FBYTtRQUNkLDZEQUE2RDtRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQUEsQ0FBQztJQUVGLCtCQUFJLEdBQUosVUFBSyxLQUFhO1FBQ2hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSw0Q0FBZ0I7QUFZN0I7SUFnQ0UsNkJBQW9CLEVBQWMsRUFBVSxRQUFvQjtRQUFoRSxpQkFBcUU7UUFBakQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFoQnhELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFNakIsV0FBTSxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsV0FBTSxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsVUFBSyxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsUUFBRyxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsVUFBSyxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsUUFBRyxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEQsYUFBUSxHQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDbkMsY0FBUyxHQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFnSHBDLGlCQUFZLEdBQUcsVUFBQyxPQUEwQixFQUFFLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQ3ZHLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDakIsQ0FBQztRQUNILENBQUMsQ0FBQTtRQUVPLHNCQUFpQixHQUFHLFVBQUMsQ0FBZ0I7WUFDM0MsSUFBSSxRQUFRLEdBQVUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQWUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMxRSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLFVBQVUsR0FBVyxDQUFDLENBQUM7WUFDM0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsTUFBTSxDQUFDLENBQUUsQ0FBQyxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxDQUFHLFdBQVc7b0JBQ25CLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDckMsS0FBSyxFQUFFLENBQUMsQ0FBRSxZQUFZO2dCQUN0QixLQUFLLEVBQUUsQ0FBRyxZQUFZO29CQUNwQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1YsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixLQUFLLENBQUM7Z0JBRVIsS0FBSyxFQUFFLENBQUcsU0FBUztvQkFDakIsVUFBVSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNyQyxLQUFLLEVBQUUsQ0FBQyxDQUFFLFVBQVU7Z0JBQ3BCLEtBQUssRUFBRSxDQUFHLGFBQWE7b0JBQ3JCLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDbkIsS0FBSyxDQUFDO2dCQUVSO29CQUNFLEtBQUssQ0FBQztZQUNWLENBQUM7WUFFRCxLQUFLLEdBQUcsSUFBSSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxRQUEyQixDQUFDO1lBRWhDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sUUFBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUM7WUFFRCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUE7SUEvS21FLENBQUM7SUFFckUsc0NBQVEsR0FBUjtRQUFBLGlCQWlFQztRQWhFQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDM0MsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQzdFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDeEUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUMsQ0FBQztRQUNKLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM5RCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBRWxGLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQ3pDLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFckYsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUM3QixDQUFDO29DQUNPLE1BQU07Z0JBQ1osTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFBLENBQUMsT0FBSyxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBSyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVELENBQUM7WUFDSCxDQUFDOztZQVZELEdBQUcsQ0FBQSxDQUFlLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7Z0JBQTFCLElBQUksTUFBTSxTQUFBO3dCQUFOLE1BQU07YUFVYjtRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUMxRSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzdFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzdFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzVFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDNUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDMUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQXhCLGlCQVlDO1FBWEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakYsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO29CQUN4QixLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7d0JBQ3ZCLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRzt3QkFDYixHQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUc7cUJBQ2QsRUFBRSxLQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJO2lCQUNoQixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLE1BQWdCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsS0FBVTtRQUFyQixpQkFNQztRQUxDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsOENBQWdCLEdBQWhCLFVBQWlCLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQ0FBaUIsR0FBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsOENBQWdCLEdBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLFVBQVU7Y0FDTixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztjQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQW9FSSw4QkFBVSxHQUEwQjtRQUMzQyxFQUFFLElBQUksRUFBRSxnQkFBUyxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN4QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsSUFBSSxFQUFFO3dCQUNKLHdCQUF3QixFQUFFLE1BQU07cUJBQ2pDO29CQUNELFFBQVEsRUFBRSwyREFBMkQ7b0JBQ3JFLE1BQU0sRUFBRSxDQUFDLHNHQU1SLENBQUM7b0JBQ0YsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSx5QkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBbUIsRUFBbkIsQ0FBbUIsQ0FBQzs0QkFDbEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0YsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLGtDQUFjLEdBQW1FLGNBQU0sT0FBQTtRQUM5RixFQUFDLElBQUksRUFBRSxpQkFBVSxHQUFHO1FBQ3BCLEVBQUMsSUFBSSxFQUFFLGdCQUFTLEdBQUc7S0FDbEIsRUFINkYsQ0FHN0YsQ0FBQztJQUNLLGtDQUFjLEdBQTJDO1FBQ2hFLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzlCLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQy9CLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzNCLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQ3pCLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQ3pCLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzNCLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzFCLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzVCLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQy9CLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzVCLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzdCLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzlCLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQy9CLGFBQWEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQ2pDLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzlCLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzdCLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzVCLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzFCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzVCLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO0tBQ3pCLENBQUM7SUFDRiwwQkFBQztDQXRRRCxBQXNRQyxJQUFBO0FBdFFZLGtEQUFtQjtBQTBRaEM7SUFBQTtJQVVBLENBQUM7SUFWc0MsMkJBQVUsR0FBMEI7UUFDM0UsRUFBRSxJQUFJLEVBQUUsZUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN2QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDOUIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ3BDLEVBQUcsRUFBRTtLQUNMLENBQUM7SUFDRixrQkFBa0I7SUFDWCwrQkFBYyxHQUFtRSxjQUFNLE9BQUEsRUFDN0YsRUFENkYsQ0FDN0YsQ0FBQztJQUNGLHVCQUFDO0NBVkQsQUFVQyxJQUFBO0FBVlksNENBQWdCIiwiZmlsZSI6Im5nMi1ub3Vpc2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIE5nTW9kdWxlLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUNvbnRyb2wsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3VpRm9ybWF0dGVyIHtcbiAgdG8odmFsdWU6IG51bWJlcik6IHN0cmluZztcbiAgZnJvbSh2YWx1ZTogc3RyaW5nKTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZvcm1hdHRlciBpbXBsZW1lbnRzIE5vdWlGb3JtYXR0ZXIge1xuICB0byh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyBmb3JtYXR0aW5nIHdpdGggaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY0NjMzNjQvNDc4NTg0XG4gICAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKSkudG9GaXhlZCgyKSkpO1xuICB9O1xuXG4gIGZyb20odmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE5vdWlzbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHB1YmxpYyBzbGlkZXI6IGFueTtcbiAgcHVibGljIGhhbmRsZXM6IGFueVtdO1xuICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICBwdWJsaWMgYmVoYXZpb3VyOiBzdHJpbmc7XG4gICBwdWJsaWMgY29ubmVjdDogYm9vbGVhbltdO1xuICAgcHVibGljIGxpbWl0OiBudW1iZXI7XG4gICBwdWJsaWMgbWluOiBudW1iZXI7XG4gICBwdWJsaWMgbWF4OiBudW1iZXI7XG4gICBwdWJsaWMgc25hcDogYm9vbGVhbjtcbiAgIHB1YmxpYyBhbmltYXRlOiBib29sZWFuIHwgYm9vbGVhbltdO1xuICAgcHVibGljIHJhbmdlOiBhbnk7XG4gICBwdWJsaWMgc3RlcDogbnVtYmVyO1xuICAgcHVibGljIGZvcm1hdDogTm91aUZvcm1hdHRlcjtcbiAgIHB1YmxpYyBwYWdlU3RlcHM6IG51bWJlcjtcbiAgIHB1YmxpYyBjb25maWc6IGFueSA9IHt9O1xuICAgcHVibGljIG5nTW9kZWw6IG51bWJlciB8IG51bWJlcltdO1xuICAgcHVibGljIGtleWJvYXJkOiBib29sZWFuO1xuICAgcHVibGljIG9uS2V5ZG93bjogYW55O1xuICAgcHVibGljIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgIHB1YmxpYyB0b29sdGlwczogQXJyYXk8YW55PjtcbiAgIHB1YmxpYyBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyB1cGRhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzbGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIHNldDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIHN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gIHByaXZhdGUgdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXIgOiBSZW5kZXJlcjIpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGxldCBpbnB1dHNDb25maWcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGJlaGF2aW91cjogdGhpcy5iZWhhdmlvdXIsXG4gICAgICBjb25uZWN0OiB0aGlzLmNvbm5lY3QsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgIHN0YXJ0OiB0aGlzLmZvcm1Db250cm9sICE9PSB1bmRlZmluZWQgPyB0aGlzLmZvcm1Db250cm9sLnZhbHVlIDogdGhpcy5uZ01vZGVsLFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgICAgcGFnZVN0ZXBzOiB0aGlzLnBhZ2VTdGVwcyxcbiAgICAgIGtleWJvYXJkOiB0aGlzLmtleWJvYXJkLFxuICAgICAgb25LZXlkb3duOiB0aGlzLm9uS2V5ZG93bixcbiAgICAgIHJhbmdlOiB0aGlzLnJhbmdlIHx8IHRoaXMuY29uZmlnLnJhbmdlIHx8IHttaW46IHRoaXMubWluLCBtYXg6IHRoaXMubWF4fSxcbiAgICAgIHRvb2x0aXBzOiB0aGlzLnRvb2x0aXBzLFxuICAgICAgc25hcDogdGhpcy5zbmFwLFxuICAgICAgYW5pbWF0ZTogdGhpcy5hbmltYXRlXG4gICAgfSkpO1xuICAgIGlucHV0c0NvbmZpZy50b29sdGlwcyA9IHRoaXMudG9vbHRpcHMgfHwgdGhpcy5jb25maWcudG9vbHRpcHM7XG4gICAgaW5wdXRzQ29uZmlnLmZvcm1hdCA9IHRoaXMuZm9ybWF0IHx8IHRoaXMuY29uZmlnLmZvcm1hdCB8fCBuZXcgRGVmYXVsdEZvcm1hdHRlcigpO1xuXG4gICAgdGhpcy5zbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKSxcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGlucHV0c0NvbmZpZylcbiAgICApO1xuXG4gICAgdGhpcy5oYW5kbGVzID0gW10uc2xpY2UuY2FsbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vVWktaGFuZGxlJykpO1xuXG4gICAgaWYodGhpcy5jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIGlmKHRoaXMuY29uZmlnLnBhZ2VTdGVwcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnBhZ2VTdGVwcyA9IDEwO1xuICAgICAgfVxuICAgICAgZm9yKGxldCBoYW5kbGUgb2YgdGhpcy5oYW5kbGVzKSB7XG4gICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBoYW5kbGUuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm9uS2V5ZG93biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmRlZmF1bHRLZXlIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY29uZmlnLm9uS2V5ZG93bik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlci5vbignc2V0JywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcih0aGlzLnNldCwgdmFsdWVzLCBoYW5kbGUsIHVuZW5jb2RlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbigndXBkYXRlJywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMudG9WYWx1ZXModmFsdWVzKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignY2hhbmdlJywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudG9WYWx1ZXModmFsdWVzKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignc2xpZGUnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKHRoaXMuc2xpZGUsIHZhbHVlcywgaGFuZGxlLCB1bmVuY29kZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ3N0YXJ0JywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0LmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdlbmQnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZW5kLmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xuICAgIGlmICh0aGlzLnNsaWRlciAmJiAoY2hhbmdlcy5taW4gfHwgY2hhbmdlcy5tYXggfHwgY2hhbmdlcy5zdGVwIHx8IGNoYW5nZXMucmFuZ2UpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zbGlkZXIudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgcmFuZ2U6IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4XG4gICAgICAgICAgfSwgdGhpcy5yYW5nZSB8fCB7fSksXG4gICAgICAgICAgc3RlcDogdGhpcy5zdGVwXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9WYWx1ZXModmFsdWVzOiBzdHJpbmdbXSk6IGFueSB8IGFueVtdIHtcbiAgICBsZXQgdiA9IHZhbHVlcy5tYXAodGhpcy5jb25maWcuZm9ybWF0LmZyb20pO1xuICAgIHJldHVybiAodi5sZW5ndGggPT0gMSA/IHZbMF0gOiB2KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2xpZGVyLnNldCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpc0Rpc2FibGVkXG4gICAgICA/IHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLCAnZGlzYWJsZWQnLCAndHJ1ZScpXG4gICAgICA6IHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLCAnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIHByaXZhdGUgZXZlbnRIYW5kbGVyID0gKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+LCB2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgIGxldCB2ID0gdGhpcy50b1ZhbHVlcyh2YWx1ZXMpO1xuICAgIGxldCBlbWl0RXZlbnRzID0gZmFsc2U7XG4gICAgaWYodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSAmJiB0aGlzLnZhbHVlW2hhbmRsZV0gIT0gdltoYW5kbGVdKSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoIUFycmF5LmlzQXJyYXkodikgJiYgdGhpcy52YWx1ZSAhPSB2KSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZW1pdEV2ZW50cykge1xuICAgICAgZW1pdHRlci5lbWl0KHYpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgdGhpcy52YWx1ZVtoYW5kbGVdID0gdltoYW5kbGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRLZXlIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBsZXQgc3RlcFNpemU6IGFueVtdID0gdGhpcy5zbGlkZXIuc3RlcHMoKTtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludCgoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFuZGxlJykpO1xuICAgIGxldCBzaWduID0gMTtcbiAgICBsZXQgbXVsdGlwbGllcjogbnVtYmVyID0gMTtcbiAgICBsZXQgc3RlcCA9IDA7XG4gICAgbGV0IGRlbHRhID0gMDtcblxuICAgIHN3aXRjaCAoIGUud2hpY2ggKSB7XG4gICAgICBjYXNlIDM0OiAgLy8gUGFnZURvd25cbiAgICAgICAgbXVsdGlwbGllciA9IHRoaXMuY29uZmlnLnBhZ2VTdGVwcztcbiAgICAgIGNhc2UgNDA6ICAvLyBBcnJvd0Rvd25cbiAgICAgIGNhc2UgMzc6ICAvLyBBcnJvd0xlZnRcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgICBzdGVwID0gc3RlcFNpemVbaW5kZXhdWzBdO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDMzOiAgLy8gUGFnZVVwXG4gICAgICAgIG11bHRpcGxpZXIgPSB0aGlzLmNvbmZpZy5wYWdlU3RlcHM7XG4gICAgICBjYXNlIDM4OiAgLy8gQXJyb3dVcFxuICAgICAgY2FzZSAzOTogIC8vIEFycm93UmlnaHRcbiAgICAgICAgc3RlcCA9IHN0ZXBTaXplW2luZGV4XVsxXTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgPSBzaWduICogbXVsdGlwbGllciAqIHN0ZXA7XG4gICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgfCBudW1iZXJbXTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gW10uY29uY2F0KHRoaXMudmFsdWUpO1xuICAgICAgbmV3VmFsdWVbaW5kZXhdID0gbmV3VmFsdWVbaW5kZXhdICsgZGVsdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy52YWx1ZSArIGRlbHRhO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLnNldChuZXdWYWx1ZSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdub3Vpc2xpZGVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubmcyLW5vdWlzbGlkZXJdJzogJ3RydWUnXG4gIH0sXG4gIHRlbXBsYXRlOiAnPGRpdiBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWRcIj48L2Rpdj4nLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdWlzbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiBSZW5kZXJlcjIsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidkaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidiZWhhdmlvdXInOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nY29ubmVjdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidsaW1pdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidtaW4nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nbWF4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3NuYXAnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nYW5pbWF0ZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidyYW5nZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidzdGVwJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2Zvcm1hdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidwYWdlU3RlcHMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nY29uZmlnJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ25nTW9kZWwnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4na2V5Ym9hcmQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nb25LZXlkb3duJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2Zvcm1Db250cm9sJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3Rvb2x0aXBzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2NoYW5nZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4ndXBkYXRlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidzbGlkZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc2V0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidzdGFydCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nZW5kJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbn07XG59XG5cblxuXG5leHBvcnQgY2xhc3MgTm91aXNsaWRlck1vZHVsZSB7IHN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW05vdWlzbGlkZXJDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3Vpc2xpZGVyQ29tcG9uZW50XSxcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/nouislider/distribute/nouislider.js":
/*!************************************************************************************!*\
  !*** C:/TFS/DCA/Public/PublicWeb/node_modules/nouislider/distribute/nouislider.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 13.1.1 - 2/14/2019 */
(function(factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function() {
    "use strict";

    var VERSION = "13.1.1";

    //region Helper Methods

    function isValidFormatter(entry) {
        return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
    }

    function removeElement(el) {
        el.parentElement.removeChild(el);
    }

    function isSet(value) {
        return value !== null && value !== undefined;
    }

    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }

    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function(a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }

    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }

    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);

        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }

        return orientation
            ? rect.top + pageOffset.y - docElem.clientTop
            : rect.left + pageOffset.x - docElem.clientLeft;
    }

    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }

    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function() {
                removeClass(element, className);
            }, duration);
        }
    }

    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }

    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }

    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }

    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += " " + className;
        }
    }

    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(
                new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
                " "
            );
        }
    }

    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList
            ? el.classList.contains(className)
            : new RegExp("\\b" + className + "\\b").test(el.className);
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;

        return {
            x: x,
            y: y
        };
    }

    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                  start: "pointerdown",
                  move: "pointermove",
                  end: "pointerup"
              }
            : window.navigator.msPointerEnabled
                ? {
                      start: "MSPointerDown",
                      move: "MSPointerMove",
                      end: "MSPointerUp"
                  }
                : {
                      start: "mousedown touchstart",
                      move: "mousemove touchmove",
                      end: "mouseup touchend"
                  };
    }

    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;

        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassive = true;
                }
            });

            window.addEventListener("test", null, opts);
        } catch (e) {}
        /* eslint-enable */

        return supportsPassive;
    }

    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }

    //endregion

    //region Range Calculation

    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }

    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value) {
        return (value * 100) / (range[1] - range[0]);
    }

    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0]);
    }

    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }

    function getJ(value, arr) {
        var j = 1;

        while (value >= arr[j]) {
            j += 1;
        }

        return j;
    }

    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }

        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }

    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }

        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }

    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }

        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];

        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }

            return a;
        }

        if (!xSteps[j - 1]) {
            return value;
        }

        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }

    function handleEntryPoint(index, value, that) {
        var percentage;

        // Wrap numerical input in an array.
        if (typeof value === "number") {
            value = [value];
        }

        // Reject any invalid input, by testing whether value is an array.
        if (!Array.isArray(value)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
        }

        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        } else if (index === "max") {
            percentage = 100;
        } else {
            percentage = parseFloat(index);
        }

        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
        }

        // Store values.
        that.xPct.push(percentage);
        that.xVal.push(value[0]);

        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value[1])) {
                that.xSteps[0] = value[1];
            }
        } else {
            that.xSteps.push(isNaN(value[1]) ? false : value[1]);
        }

        that.xHighestCompleteStep.push(0);
    }

    function handleStepPoint(i, n, that) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }

        // Step over zero-length ranges (#948);
        if (that.xVal[i] === that.xVal[i + 1]) {
            that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];

            return;
        }

        // Factor to range ratio
        that.xSteps[i] =
            fromPercentage([that.xVal[i], that.xVal[i + 1]], n) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);

        var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = that.xVal[i] + that.xNumSteps[i] * highestStep;

        that.xHighestCompleteStep[i] = step;
    }

    //endregion

    //region Spectrum

    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.xHighestCompleteStep = [];

        this.snap = snap;

        var index;
        var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']

        // Map the object keys to an array.
        for (index in entry) {
            if (entry.hasOwnProperty(index)) {
                ordered.push([entry[index], index]);
            }
        }

        // Sort all entries by value (numeric sort).
        if (ordered.length && typeof ordered[0][0] === "object") {
            ordered.sort(function(a, b) {
                return a[0][0] - b[0][0];
            });
        } else {
            ordered.sort(function(a, b) {
                return a[0] - b[0];
            });
        }

        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            handleEntryPoint(ordered[index][1], ordered[index][0], this);
        }

        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);

        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            handleStepPoint(index, this.xNumSteps[index], this);
        }
    }

    Spectrum.prototype.getMargin = function(value) {
        var step = this.xNumSteps[0];

        if (step && (value / step) % 1 !== 0) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        }

        return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
    };

    Spectrum.prototype.toStepping = function(value) {
        value = toStepping(this.xVal, this.xPct, value);

        return value;
    };

    Spectrum.prototype.fromStepping = function(value) {
        return fromStepping(this.xVal, this.xPct, value);
    };

    Spectrum.prototype.getStep = function(value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);

        return value;
    };

    Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
        var j = getJ(value, this.xPct);

        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }

        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };

    Spectrum.prototype.getNearbySteps = function(value) {
        var j = getJ(value, this.xPct);

        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2]
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1]
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j]
            }
        };
    };

    Spectrum.prototype.countStepDecimals = function() {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };

    // Outside testing
    Spectrum.prototype.convert = function(value) {
        return this.getStep(this.toStepping(value));
    };

    //endregion

    //region Options

    /*	Every input option is tested and parsed. This'll prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */

    var defaultFormatter = {
        to: function(value) {
            return value !== undefined && value.toFixed(2);
        },
        from: Number
    };

    function validateFormat(entry) {
        // Any object with a to and from method is supported.
        if (isValidFormatter(entry)) {
            return true;
        }

        throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
    }

    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
        }

        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }

    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
        }

        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
        }

        // Catch equal start or end.
        if (entry.min === entry.max) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
        }

        parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
    }

    function testStart(parsed, entry) {
        entry = asArray(entry);

        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
        }

        // Store the number of handles.
        parsed.handles = entry.length;

        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }

    function testSnap(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
        }
    }

    function testAnimate(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
        }
    }

    function testAnimationDuration(parsed, entry) {
        parsed.animationDuration = entry;

        if (typeof entry !== "number") {
            throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
        }
    }

    function testConnect(parsed, entry) {
        var connect = [false];
        var i;

        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        } else if (entry === "upper") {
            entry = [false, true];
        }

        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }

            connect.push(false);
        }

        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
        } else {
            connect = entry;
        }

        parsed.connect = connect;
    }

    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
        }
    }

    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
        }

        // Issue #582
        if (entry === 0) {
            return;
        }

        parsed.margin = parsed.spectrum.getMargin(entry);

        if (!parsed.margin) {
            throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
        }
    }

    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
        }

        parsed.limit = parsed.spectrum.getMargin(entry);

        if (!parsed.limit || parsed.handles < 2) {
            throw new Error(
                "noUiSlider (" +
                    VERSION +
                    "): 'limit' option is only supported on linear sliders with 2 or more handles."
            );
        }
    }

    function testPadding(parsed, entry) {
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (entry === 0) {
            return;
        }

        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }

        // 'getMargin' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getMargin(entry[0]), parsed.spectrum.getMargin(entry[1])];

        if (parsed.padding[0] === false || parsed.padding[1] === false) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
        }

        if (parsed.padding[0] < 0 || parsed.padding[1] < 0) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
        }

        if (parsed.padding[0] + parsed.padding[1] >= 100) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
        }
    }

    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
        }
    }

    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
        }

        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;

        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
            }

            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }

        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit"
            );
        }

        parsed.events = {
            tap: tap || snap,
            drag: drag,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }

    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }

        if (entry === true) {
            parsed.tooltips = [];

            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(true);
            }
        } else {
            parsed.tooltips = asArray(entry);

            if (parsed.tooltips.length !== parsed.handles) {
                throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
            }

            parsed.tooltips.forEach(function(formatter) {
                if (
                    typeof formatter !== "boolean" &&
                    (typeof formatter !== "object" || typeof formatter.to !== "function")
                ) {
                    throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
                }
            });
        }
    }

    function testAriaFormat(parsed, entry) {
        parsed.ariaFormat = entry;
        validateFormat(entry);
    }

    function testFormat(parsed, entry) {
        parsed.format = entry;
        validateFormat(entry);
    }

    function testKeyboardSupport(parsed, entry) {
        parsed.keyboardSupport = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
        }
    }

    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }

    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
        }

        parsed.cssPrefix = entry;
    }

    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
        }

        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};

            for (var key in entry) {
                if (!entry.hasOwnProperty(key)) {
                    continue;
                }

                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            }
        } else {
            parsed.cssClasses = entry;
        }
    }

    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);

        var parsed = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };

        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses }
        };

        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: {
                target: "target",
                base: "base",
                origin: "origin",
                handle: "handle",
                handleLower: "handle-lower",
                handleUpper: "handle-upper",
                touchArea: "touch-area",
                horizontal: "horizontal",
                vertical: "vertical",
                background: "background",
                connect: "connect",
                connects: "connects",
                ltr: "ltr",
                rtl: "rtl",
                draggable: "draggable",
                drag: "state-drag",
                tap: "state-tap",
                active: "active",
                tooltip: "tooltip",
                pips: "pips",
                pipsHorizontal: "pips-horizontal",
                pipsVertical: "pips-vertical",
                marker: "marker",
                markerHorizontal: "marker-horizontal",
                markerVertical: "marker-vertical",
                markerNormal: "marker-normal",
                markerLarge: "marker-large",
                markerSub: "marker-sub",
                value: "value",
                valueHorizontal: "value-horizontal",
                valueVertical: "value-vertical",
                valueNormal: "value-normal",
                valueLarge: "value-large",
                valueSub: "value-sub"
            }
        };

        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }

        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function(name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
                }

                return true;
            }

            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });

        // Forward pips options
        parsed.pips = options.pips;

        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;

        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";

        // Pips don't move, so we can place them using left/top.
        var styles = [["left", "top"], ["right", "bottom"]];

        parsed.style = styles[parsed.dir][parsed.ort];

        return parsed;
    }

    //endregion

    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();

        // All variables local to 'scope' are prefixed with 'scope_'

        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;

        // Override for the 'animate' option
        var scope_ShouldAnimate = true;

        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};

        // Exposed API
        var scope_Self;

        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;

        // Pips constants
        var PIPS_NONE = -1;
        var PIPS_NO_VALUE = 0;
        var PIPS_LARGE_VALUE = 1;
        var PIPS_SMALL_VALUE = 2;

        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;

        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");

            if (className) {
                addClass(div, className);
            }

            addTarget.appendChild(div);

            return div;
        }

        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);

            addNodeTo(handle, options.cssClasses.touchArea);

            handle.setAttribute("data-handle", handleNumber);

            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function(event) {
                    return eventKeydown(event, handleNumber);
                });
            }

            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            } else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }

            return origin;
        }

        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }

            return addNodeTo(base, options.cssClasses.connect);
        }

        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);

            scope_Handles = [];
            scope_Connects = [];

            scope_Connects.push(addConnect(connectBase, connectOptions[0]));

            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]

            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }

        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);

            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            } else {
                addClass(addTarget, options.cssClasses.rtl);
            }

            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            } else {
                addClass(addTarget, options.cssClasses.vertical);
            }

            return addNodeTo(addTarget, options.cssClasses.base);
        }

        function addTooltip(handle, handleNumber) {
            if (!options.tooltips[handleNumber]) {
                return false;
            }

            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }

        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }

        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update.tooltips");
                scope_Tooltips.forEach(function(tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }

        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();

            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);

            bindEvent("update.tooltips", function(values, handleNumber, unencoded) {
                if (!scope_Tooltips[handleNumber]) {
                    return;
                }

                var formattedValue = values[handleNumber];

                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }

                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }

        function aria() {
            bindEvent("update", function(values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function(index) {
                    var handle = scope_Handles[index];

                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);

                    var now = positions[index];

                    // Formatted value for display
                    var text = options.ariaFormat.to(unencoded[index]);

                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);

                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }

        function getGroup(mode, values, stepped) {
            // Use the range.
            if (mode === "range" || mode === "steps") {
                return scope_Spectrum.xVal;
            }

            if (mode === "count") {
                if (values < 2) {
                    throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
                }

                // Divide 0 - 100 in 'count' parts.
                var interval = values - 1;
                var spread = 100 / interval;

                values = [];

                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }

                values.push(100);

                mode = "positions";
            }

            if (mode === "positions") {
                // Map all percentages to on-range values.
                return values.map(function(value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                });
            }

            if (mode === "values") {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (stepped) {
                    return values.map(function(value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }

                // Otherwise, we can simply use the values.
                return values;
            }
        }

        function generateSpread(density, mode, group) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return (value + increment).toFixed(7) / 1;
            }

            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;

            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(
                group.slice().sort(function(a, b) {
                    return a - b;
                })
            );

            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }

            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }

            group.forEach(function(current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = mode === "steps";

                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }

                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }

                // Low can be 0, so test for false. If high is undefined,
                // we are at the last subrange. Index 0 is already handled.
                if (low === false || high === undefined) {
                    return;
                }

                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);

                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;

                    steps = pctDifference / density;
                    realSteps = Math.round(steps);

                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;

                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }

                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE;

                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst) {
                        type = 0;
                    }

                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }

                    // Update the percentage count.
                    prevPct = newPct;
                }
            });

            return indexes;
        }

        function addMarking(spread, filterFunc, formatter) {
            var element = scope_Document.createElement("div");

            var valueSizeClasses = [];
            valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
            valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
            valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;

            var markerSizeClasses = [];
            markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
            markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
            markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;

            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];

            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }

            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;

                if (type === PIPS_NONE) {
                    return;
                }

                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";

                // Values are only appended for points marked '1' or '2'.
                if (type > PIPS_NO_VALUE) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", value);
                    node.style[options.style] = offset + "%";
                    node.innerHTML = formatter.to(value);
                }
            }

            // Append all points.
            Object.keys(spread).forEach(function(offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });

            return element;
        }

        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }

        function pips(grid) {
            // Fix #669
            removePips();

            var mode = grid.mode;
            var density = grid.density || 1;
            var filter = grid.filter || false;
            var values = grid.values || false;
            var stepped = grid.stepped || false;
            var group = getGroup(mode, values, stepped);
            var spread = generateSpread(density, mode, group);
            var format = grid.format || {
                to: Math.round
            };

            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));

            return scope_Pips;
        }

        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = "offset" + ["Width", "Height"][options.ort];
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }

        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList

            var method = function(e) {
                e = fixEvent(e, data.pageOffset, data.target || element);

                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }

                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (scope_Target.hasAttribute("disabled") && !data.doNotReject) {
                    return false;
                }

                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }

                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }

                e.calcPoint = e.points[options.ort];

                // Call the event handler with the event [ and additional data ].
                callback(e, data);
            };

            var methods = [];

            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function(eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });

            return methods;
        }

        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;

            var x;
            var y;

            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }

            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function(checkTouch) {
                    return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target);
                };

                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);

                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }

                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                } else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);

                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }

                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }

            pageOffset = pageOffset || getPageOffset(scope_Document);

            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }

            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435

            return e;
        }

        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();

            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);

            return options.dir ? 100 - proposal : proposal;
        }

        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(proposal) {
            var closest = 100;
            var handleNumber = false;

            scope_Handles.forEach(function(handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }

                var pos = Math.abs(scope_Locations[index] - proposal);

                if (pos < closest || (pos === 100 && closest === 100)) {
                    handleNumber = index;
                    closest = pos;
                }
            });

            return handleNumber;
        }

        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }

        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }

            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;

            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
        }

        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }

            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function(c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });

            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();

                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }

            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }

        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return false;
            }

            var handle;

            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];

                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;

                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }

            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();

            // Record the event listeners.
            var listeners = [];

            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });

            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;

                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }

                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }

            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("start", handleNumber);
            });
        }

        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();

            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);

            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return false;
            }

            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            setHandle(handleNumber, proposal, true, true);

            setZindex();

            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);

            if (options.events.snap) {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }

        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);

            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);

            Object.keys(scope_Events).forEach(function(targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function(callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }

        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isHandleDisabled(handleNumber)) {
                return false;
            }

            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];

            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            } else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
            }

            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0];
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1];

            if (!isDown && !isUp) {
                return true;
            }

            event.preventDefault();

            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];

            // At the edge of a slider, do nothing
            if (step === null) {
                return false;
            }

            // No step set, use the default of 10% of the sub-range
            if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, 10);
            }

            // Step over zero-length ranges (#948);
            step = Math.max(step, 0.0000001);

            // Decrement for down steps
            step = (isDown ? -1 : 1) * step;

            scope_ShouldAnimate = false;

            valueSetHandle(handleNumber, scope_Values[handleNumber] + step, true);

            scope_ShouldAnimate = true;

            return false;
        }

        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function(handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }

            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }

            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }

            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function(connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }

                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];

                    addClass(connect, options.cssClasses.draggable);

                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }

                    eventHolders.forEach(function(eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: [handleBefore, handleAfter],
                            handleNumbers: [index - 1, index]
                        });
                    });
                });
            }
        }

        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);

            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function(a, index) {
                    fireEvent("update", index);
                });
            }
        }

        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event && namespacedEvent.substring(event.length);

            Object.keys(scope_Events).forEach(function(bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);

                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    delete scope_Events[bind];
                }
            });
        }

        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function(targetEvent) {
                var eventType = targetEvent.split(".")[0];

                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function(callback) {
                        callback.call(
                            // Use the slider public API as the scope ('this')
                            scope_Self,
                            // Return values as array, so arg_1[arg_2] is always valid.
                            scope_Values.map(options.format.to),
                            // Handle index, 0 or 1
                            handleNumber,
                            // Un-formatted slider values
                            scope_Values.slice(),
                            // Event is fired by tap, true or false
                            tap || false,
                            // Left offset of the handle, in relation to the slider
                            scope_Locations.slice()
                        );
                    });
                }
            });
        }

        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    to = Math.max(to, reference[handleNumber - 1] + options.margin);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    to = Math.min(to, reference[handleNumber + 1] - options.margin);
                }
            }

            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    to = Math.min(to, reference[handleNumber - 1] + options.limit);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    to = Math.max(to, reference[handleNumber + 1] - options.limit);
                }
            }

            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    to = Math.max(to, options.padding[0]);
                }

                if (handleNumber === scope_Handles.length - 1) {
                    to = Math.min(to, 100 - options.padding[1]);
                }
            }

            to = scope_Spectrum.getStep(to);

            // Limit percentage to the 0 - 100 range
            to = limit(to);

            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }

            return to;
        }

        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }

        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers) {
            var proposals = locations.slice();

            var b = [!upward, upward];
            var f = [upward, !upward];

            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();

            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }

            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function(handleNumber, o) {
                    var to = checkHandlePosition(
                        proposals,
                        handleNumber,
                        proposals[handleNumber] + proposal,
                        b[o],
                        f[o],
                        false
                    );

                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    } else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }

            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }

            var state = false;

            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function(handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });

            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function(handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
            }
        }

        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }

        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;

            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

            var rule = "translate(" + inRuleOrder(transformDirection(to, 0) - scope_DirOffset + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = rule;

            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }

        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function(handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = zIndex;
            });
        }

        // Test suggested values and apply margin, step.
        function setHandle(handleNumber, to, lookBackward, lookForward) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

            if (to === false) {
                return false;
            }

            updateHandlePosition(handleNumber, to);

            return true;
        }

        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }

            var l = 0;
            var h = 100;

            if (index !== 0) {
                l = scope_Locations[index - 1];
            }

            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }

            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";

            scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
        }

        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }

            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }

            to = options.format.from(to);
            to = scope_Spectrum.toStepping(to);

            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }

            return to;
        }

        // Set the slider value.
        function valueSet(input, fireSetEvent) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;

            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent;

            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit && scope_ShouldAnimate) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function(handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
            });

            // Second pass. Now that all base values are set, apply constraints
            scope_HandleNumbers.forEach(function(handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true);
            });

            setZindex();

            scope_HandleNumbers.forEach(function(handleNumber) {
                fireEvent("update", handleNumber);

                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }

        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }

        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent) {
            var values = [];

            // Ensure numeric input
            handleNumber = Number(handleNumber);

            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
            }

            for (var i = 0; i < scope_HandleNumbers.length; i++) {
                values[i] = null;
            }

            values[handleNumber] = value;

            valueSet(values, fireSetEvent);
        }

        // Get the slider value.
        function valueGet() {
            var values = scope_Values.map(options.format.to);

            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }

            return values;
        }

        // Removes classes from the root and empties it.
        function destroy() {
            for (var key in options.cssClasses) {
                if (!options.cssClasses.hasOwnProperty(key)) {
                    continue;
                }
                removeClass(scope_Target, options.cssClasses[key]);
            }

            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }

            delete scope_Target.noUiSlider;
        }

        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;

            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }

            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            } else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }

            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }

            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            } else if (location === 0) {
                decrement = null;
            }

            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();

            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }

            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }

            return [decrement, increment];
        }

        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }

        // Updateable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();

            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];

            // Only change options that we're actually passed to update.
            updateAble.forEach(function(name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });

            var newOptions = testOptions(originalOptions);

            // Load new options into the slider state
            updateAble.forEach(function(name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });

            scope_Spectrum = newOptions.spectrum;

            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;

            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            } else {
                removePips();
            }

            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            } else {
                removeTooltips();
            }

            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(optionsToUpdate.start || v, fireSetEvent);
        }

        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);

            addElements(options.connect, scope_Base);

            // Attach user events.
            bindSliderEvents(options.events);

            // Use the public value method to set the start values.
            valueSet(options.start);

            if (options.pips) {
                pips(options.pips);
            }

            if (options.tooltips) {
                tooltips();
            }

            aria();
        }

        setupSlider();

        // noinspection JSUnusedGlobalSymbols
        scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function(a, b, c) {
                moveHandles(a, b, scope_Locations, c);
            },
            options: originalOptions, // Issue #600, #678
            updateOptions: updateOptions,
            target: scope_Target, // Issue #597
            removePips: removePips,
            removeTooltips: removeTooltips,
            pips: pips // Issue #594
        };

        return scope_Self;
    }

    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
        }

        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
        }

        // Test the options and create the slider environment;
        var options = testOptions(originalOptions, target);
        var api = scope(target, options, originalOptions);

        target.noUiSlider = api;

        return api;
    }

    // Use an object instead of a function for future expandability;
    return {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        version: VERSION,
        create: initialize
    };
});


/***/ }),

/***/ "./src/app/core/class-helper.ts":
/*!**************************************!*\
  !*** ./src/app/core/class-helper.ts ***!
  \**************************************/
/*! exports provided: ClassHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassHelper", function() { return ClassHelper; });
var ClassHelper = /** @class */ (function () {
    function ClassHelper() {
    }
    ClassHelper.prototype.setData = function (data) {
        var _this = this;
        if (!data) {
            return false;
        }
        Object.keys(data).forEach(function (name) {
            if (data[name] != null && typeof data[name] !== 'undefined' && _this.hasOwnProperty(name)) {
                _this[name] = data[name];
            }
        });
    };
    return ClassHelper;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/browse-lotteries-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/browse-lotteries-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BrowseLotteriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseLotteriesRoutingModule", function() { return BrowseLotteriesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _browse_lotteries_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse-lotteries.component */ "./src/app/modules/browse-lotteries/browse-lotteries.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _browse_lotteries_component__WEBPACK_IMPORTED_MODULE_2__["BrowseLotteriesComponent"]
    }
];
var BrowseLotteriesRoutingModule = /** @class */ (function () {
    function BrowseLotteriesRoutingModule() {
    }
    BrowseLotteriesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BrowseLotteriesRoutingModule);
    return BrowseLotteriesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/browse-lotteries.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/browse-lotteries.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title-bar [title]=\"'Find a Business'\"></title-bar>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <!-- <mat-tab-group [(selectedIndex)]=\"selectedTab\" (selectedTabChange)=\"selectTab($event.index)\"> -->\r\n        <!-- <mat-tab> -->\r\n          <!-- <ng-template mat-tab-label> -->\r\n            <!-- <span class=\"font-lg\">Licenses</span>\r\n          </ng-template> -->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <app-lottery-search [householdType]=\"HouseholdTypeEnum.Rentals\"\r\n                                  [filtersModel]=\"lotteryFiltersRentals\"\r\n                                  [filtersData]=\"filtersDataRentalsTab\"\r\n                                  [refreshSearchEvent$]=\"refreshSearchRentalsTab$\"\r\n                                  [visibleFiltersConf]=\"availableFiltersRentals\">\r\n              </app-lottery-search>\r\n            </div>\r\n          </div>\r\n        <!-- </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            <span class=\"font-lg\">Violation</span>\r\n          </ng-template>\r\n          <div *ngIf=\"isLoadingData\" class=\"pt-20 pb-20\">\r\n            <loader></loader>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"!isLoadingData\">\r\n            <div class=\"col-md-12\">\r\n              <app-lottery-search [householdType]=\"HouseholdTypeEnum.Sales\"\r\n                                  [filtersModel]=\"lotteryFiltersSales\"\r\n                                  [filtersData]=\"filtersDataSalesTab\"\r\n                                  [refreshSearchEvent$]=\"refreshSearchSalesTab$\"\r\n                                  [visibleFiltersConf]=\"availableFiltersSales\">\r\n              </app-lottery-search>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/browse-lotteries.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/browse-lotteries.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n/deep/ .noUi-target .noUi-connect {\n  background: #017ace; }\n:host {\n  /* .popup-star {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    cursor: pointer;\n\n    i.la {\n      color: #fff;\n      font-size: 2rem;\n    }\n  } */ }\n:host .lottery-details-description {\n    cursor: pointer;\n    display: none;\n    position: relative;\n    border-top: 1px solid #e5e5e5;\n    overflow: hidden; }\n:host .lottery-details-description:after, :host .lottery-details-description:before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 1px;\n      left: 0;\n      background: #ffffff;\n      box-shadow: 0 0 18px 9px #ffffff; }\n:host .lottery-details-description:after {\n      bottom: 0; }\n:host .lottery-details-description:before {\n      top: 0; }\n:host .lottery-details-description .lottery-details-description-scroll {\n      overflow-x: auto;\n      height: 100%;\n      max-height: 19.313rem;\n      padding: 1.125rem 1rem; }\n:host .lottery-details-description .lottery-details-description-title {\n      font-size: 0.875rem;\n      font-weight: 600;\n      color: #41505b;\n      cursor: pointer; }\n:host .lottery-details-description .lottery-details-description-title + .lottery-details-description-content {\n        margin-top: 0.625rem; }\n:host .lottery-details-description .lottery-details-description-content {\n      font-size: 0.875rem;\n      font-weight: 500;\n      color: #41505b; }\n:host .lottery-details-description .lottery-details-description-content .details-label {\n        font-weight: 100; }\n:host .lottery-details-description .lottery-details-description-content + .lottery-details-description-title {\n        margin-top: 1.375rem; }\n:host .lottery-result-item {\n    height: 27rem;\n    position: relative;\n    background: #ffffff;\n    margin-bottom: 2rem; }\n:host .lottery-result-item .lottery-result-space-container {\n      position: relative;\n      height: 100%;\n      z-index: 0;\n      box-shadow: 0px 1px 5px 1px #c3c3c3; }\n:host .lottery-result-item .lottery-result-container {\n      position: absolute;\n      width: 100%;\n      background: #ffffff; }\n:host .lottery-result-item .lottery-result-container .favorite-star-icon {\n        position: absolute;\n        top: 1rem;\n        right: 1rem;\n        z-index: 1; }\n:host .lottery-result-item .lottery-result-container .details-unit-desc {\n        margin-bottom: 0.625rem; }\n:host .lottery-result-item .lottery-result-container .details-unit-desc span {\n          display: inline-block;\n          height: 1.313rem;\n          width: 1.313rem;\n          color: #9b9b9b;\n          box-shadow: 0 0 0 1px #9b9b9b;\n          border-radius: 50%;\n          text-align: center;\n          font-size: 12px;\n          font-weight: 500;\n          margin-right: 0.688rem; }\n:host .lottery-result-item:hover .lottery-result-space-container {\n      margin: -1.075rem -1.875rem;\n      z-index: 1; }\n:host .lottery-result-item:hover .lottery-result-container {\n      box-shadow: 0px 1px 5px 1px rgba(1, 122, 206, 0.8); }\n:host .lottery-result-item:hover .lottery-details-description {\n      display: block; }\n:host .lottery-result-item:hover .lottery-carousel {\n      height: 18rem; }\n:host .lottery-carousel {\n    height: 16.875rem; }\n:host .lottery-details {\n    padding: 1rem 1.125rem 21px;\n    cursor: pointer;\n    /*.subway-type-iconset {\n      border-radius: 50%;\n      height: 1.5rem;\n      width: 1.5rem;\n      text-align: center;\n      display: inline-block;\n\n      + .subway-type-iconset {\n        margin-left: 0.2rem;\n      }\n    }*/ }\n:host .lottery-details .lottery-details-expiration-time {\n      font-size: 0.75rem;\n      font-weight: 500;\n      color: #889aa9;\n      margin-bottom: 0.313rem; }\n:host .lottery-details .lottery-details-title {\n      font-size: 1.25rem;\n      font-weight: bold;\n      color: #41505b;\n      margin-bottom: 0.188rem; }\n:host .lottery-details .lottery-details-location {\n      font-size: 0.875rem;\n      color: #41505b; }\n:host .lottery-details .facilities-iconset + .facilities-iconset {\n      margin-left: 0.4rem; }\n:host .lottery-icons-section {\n    padding: 1.5rem 0 0 0; }\n:host .paginator {\n    display: flex;\n    justify-content: center;\n    padding: 1rem; }\n:host .bottom-info {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    border-bottom: 1px solid #c5d5e2;\n    background: rgba(232, 238, 243, 0.5); }\n:host .bottom-info .info-item {\n      display: flex;\n      flex-direction: row;\n      align-items: flex-start;\n      margin-top: 32px;\n      margin-bottom: 32px; }\n:host .bottom-info .info-item .info-item-img-container {\n        width: 85px;\n        height: 85px;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n:host .bottom-info .info-item .info-item-img-container img {\n          max-width: 85px;\n          max-height: 81px; }\n:host .bottom-info .text-section p {\n      width: 237px;\n      margin-top: 10px;\n      font-size: 14px;\n      line-height: 22px;\n      letter-spacing: 0.02px;\n      color: #41505b; }\n:host .bottom-info .text-section p.link {\n      color: #00adc7;\n      font-weight: bold; }\n:host .map-tooltip {\n    position: absolute;\n    z-index: 1; }\n:host .map-view {\n    height: 800px; }\n:host .grid-view-map-container {\n    max-height: 26.5rem;\n    height: 26.5rem; }\n:host .grid-view-map-container-sticky {\n    position: fixed;\n    height: 26.5rem;\n    top: 0;\n    flex: 0 0 33.33333333%;\n    max-width: 25.333333%;\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXBwXFxtb2R1bGVzXFxicm93c2UtbG90dGVyaWVzXFxicm93c2UtbG90dGVyaWVzLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2Jyb3dzZS1sb3R0ZXJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUErRkEsMkJBQUE7QUFhQSxZQUFBO0FBTUEsdUJBQUE7QUE2QkEsZUFBQTtBQXlDQSxZQUFBO0FBcUJBLFlBQUE7QUN2TkE7RUFHSSxtQkR3RFUsRUFBQTtBQ3BEZDtFQStIRTs7Ozs7Ozs7OztLQ3ZHRyxFRGlIQztBQXpJTjtJQUdJLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixnQkFBZ0IsRUFBQTtBQVBwQjtNQVdNLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLFdBQVc7TUFDWCxPQUFPO01BQ1AsbUJEK0JTO01DOUJULGdDRDhCUyxFQUFBO0FDL0NmO01BcUJNLFNBQVMsRUFBQTtBQXJCZjtNQXlCTSxNQUFNLEVBQUE7QUF6Qlo7TUE2Qk0sZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsc0JBQXNCLEVBQUE7QUFoQzVCO01Bb0NNLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWUsRUFBQTtBQXZDckI7UUEwQ1Esb0JBQW9CLEVBQUE7QUExQzVCO01BK0NNLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsY0FBYyxFQUFBO0FBakRwQjtRQW9EUSxnQkFBZ0IsRUFBQTtBQXBEeEI7UUF3RFEsb0JBQW9CLEVBQUE7QUF4RDVCO0lBOERJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJEakJXO0lDa0JYLG1CQUFtQixFQUFBO0FBakV2QjtNQW9FTSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFVBQVU7TUFDVixtQ0FBbUMsRUFBQTtBQXZFekM7TUEyRU0sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxtQkQ5QlMsRUFBQTtBQy9DZjtRQWdGUSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7UUFDWCxVQUFVLEVBQUE7QUFuRmxCO1FBdUZRLHVCQUF1QixFQUFBO0FBdkYvQjtVQTBGVSxxQkFBcUI7VUFDckIsZ0JBQWdCO1VBQ2hCLGVBQWU7VUFDZixjQUFjO1VBQ2QsNkJBQTZCO1VBQzdCLGtCQUFrQjtVQUNsQixrQkFBa0I7VUFDbEIsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQixzQkFBc0IsRUFBQTtBQW5HaEM7TUEwR1EsMkJBQTJCO01BQzNCLFVBQVUsRUFBQTtBQTNHbEI7TUErR1Esa0RBQWtELEVBQUE7QUEvRzFEO01BbUhRLGNBQWMsRUFBQTtBQW5IdEI7TUF1SFEsYUFBYSxFQUFBO0FBdkhyQjtJQTZISSxpQkFBaUIsRUFBQTtBQTdIckI7SUEySUksMkJBQTJCO0lBQzNCLGVBQWU7SUFvQmY7Ozs7Ozs7Ozs7TUN6Q0UsRURtREM7QUExS1A7TUErSU0sa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsdUJBQXVCLEVBQUE7QUFsSjdCO01Bc0pNLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsY0FBYztNQUNkLHVCQUF1QixFQUFBO0FBeko3QjtNQTZKTSxtQkFBbUI7TUFDbkIsY0FBYyxFQUFBO0FBOUpwQjtNQTZLUSxtQkFBbUIsRUFBQTtBQTdLM0I7SUFtTEkscUJBQXFCLEVBQUE7QUFuTHpCO0lBdUxJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYSxFQUFBO0FBekxqQjtJQTZMSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLG9DQUFvQyxFQUFBO0FBbE14QztNQXFNTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7QUF6TXpCO1FBNE1RLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBQTtBQWhOL0I7VUFtTlUsZUFBZTtVQUNmLGdCQUFnQixFQUFBO0FBcE4xQjtNQTJOUSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsc0JBQXNCO01BQ3RCLGNBQWMsRUFBQTtBQWhPdEI7TUFvT1EsY0FBYztNQUNkLGlCQUFpQixFQUFBO0FBck96QjtJQTJPSSxrQkFBa0I7SUFFbEIsVUFBVSxFQUFBO0FBN09kO0lBaVBJLGFBQWEsRUFBQTtBQWpQakI7SUFxUEksbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtBQXRQbkI7SUEwUEksZUFBZTtJQUNmLGVBQWU7SUFDZixNQUFNO0lBQ04sc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixXQUFXLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2Jyb3dzZS1sb3R0ZXJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIElNUE9SVEFOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUGxlYXNlIGNvbnN1bHQgd2l0aCBZdXJ5IGJlZm9yZSBhZGRpbmcgc29tZSBuZXcgQ1NTIHZhcmlhYmxlcy4gICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFRhYmxlIG9mIENvbnRlbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUeXBvZ3JhcGh5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFRoZW1lIENvbG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTaGFkb3dzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNwYWNpbmcgR3VpZGVsaW5lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQW5pbWF0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBDb3JuZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9UeXBvZ3JhcGh5XG4kZm9udC1tYWluOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtaGVhZGluZzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiRmb250LWxpbmVhd2Vzb21lOiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNnB4LzEgXCJMaW5lQXdlc29tZVwiO1xuJGZvbnQtZm9udGF3ZXNvbWU6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuJGh0bWwtZm9udC1zaXplLWxnOiAxNnB4O1xuJGh0bWwtZm9udC1zaXplLW1kOiAxNXB4O1xuJGh0bWwtZm9udC1zaXplLXNtOiAxNHB4O1xuJGh0bWwtZm9udC1zaXplLXhzOiAxM3B4O1xuXG4kaHRtbC1mb250LXdlaWdodDogNDAwO1xuXG4vLyBUaGVtZSBDb2xvcnNcbiRjb2xvci1vZmZzZXQ6IDYlOyAvLyB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgbGlnaHRlciBhbmQgZGFya2VyIHZhcmllbnRzIG9mIGEgc3BlY2lmaWMgY29sb3JcblxuJGJhc2U6ICNmYWZhZmE7IC8vdXNlZCBwcmltYXJpbHkgYXMgb2ZmLXdoaXRlIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuXG4kcHJpbWFyeTogIzAyMDA2MztcbiRzZWNvbmRhcnk6ICNmYWZhZmE7XG4kc2Vjb25kYXJ5LWJsdWU6IHJnYigxMDksIDE3OCwgMjU1KTsgLy8gd2Ugc2hvdWxkIHJlcGxhY2UgdGhpc1xuJGFjY2VudDogI2ZjYjMyMzsgLy8jMDBjNWRjO1xuJGZvY3VzOiAjOTgxNmY0O1xuXG4kc3VjY2VzczogIzAwZTZhYjtcbiR3YXJuaW5nOiAjZmZiODIyO1xuJGRhbmdlcjogI2ZmMmIyYjsgLy8jZjQ1MTZjO1xuJGluZm86ICM1NTc4ZWI7IC8vIzM2YTNmNztcblxuJG1ldGFsOiAjYzRjNWQ2O1xuJG1ldGFsLWxpZ2h0OiBsaWdodGVuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG4kbWV0YWwtZGFyazogZGFya2VuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG5cbi8vIGdyZXlzXG4kbGlnaHQ6ICNmZmY7XG4kZGFyazogIzJjMmUzZTtcbiRncmV5LTIwOiAjMzMzMzMzO1xuJGdyZXktMzA6ICM0ZDRkNGQ7XG4kZ3JleS01MDogIzgwODA4MDtcbiRncmV5LTcwOiAjYjNiM2IzO1xuJGdyZXktOTA6ICNlNmU2ZTY7XG4kZ3JleS05NTogI2YyZjJmMjtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZjtcblxuLy8gRXh0ZW5kZWQgQ29sb3IgUGFsZXR0ZVxuLy8gVE9ETzogUmV2aWV3IHRoZXNlIGNvbG9yc1xuJGRhcmstYmx1ZTogIzAyMzk3MDtcbiRibHVlOiAjMDE3YWNlO1xuJGNlcnVsZWFuOiAjMDE3YWNlO1xuJGxpZ2h0LWJsdWU6ICNjY2VhZmY7XG4kcGFsZS1ibHVlOiAjZjFmOWZmO1xuJGRhcmstdGVhbDogIzAwNjQ2ZTtcbiR0ZWFsOiAjMDBjMWQ0O1xuJGxpZ2h0LXRlYWw6ICNjY2ZhZmY7XG4kcGFsZS10ZWFsOiAjZjVmZWZmO1xuJGRhcmstZ3JlZW46ICMwYTVjNDA7XG4kZ3JlZW46ICMxNGI4ODE7XG4kbGlnaHQtZ3JlZW46ICNhM2Y1ZDk7XG4kcGFsZS1ncmVlbjogI2Y2ZmVmYjtcbiRkYXJrLXllbGxvdzogIzk5NzQwMDtcbiR5ZWxsb3c6ICNmZmNlMzM7XG4kbGlnaHQteWVsbG93OiAjZmZmM2NjO1xuJHBhbGUteWVsbG93OiAjZmZmZGY1O1xuJGRhcmstcmVkOiAjNjYwYTAwO1xuJHJlZDogI2NjMTQwMDtcbiRsaWdodC1yZWQ6ICNmZmQxY2M7XG4kcGFsZS1yZWQ6ICNmZmY2ZjU7XG5cblxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gIFwiYWNjZW50XCI6ICRhY2NlbnQsXG4gIFwic3VjY2Vzc1wiOiAkc3VjY2VzcywgXG4gIFwid2FybmluZ1wiOiAkd2FybmluZywgXG4gIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJtZXRhbFwiOiAkbWV0YWwsXG4gIFwiZm9jdXNcIjogJGZvY3VzLFxuICBcImdyZXktMjBcIjogJGdyZXktMjAsIFxuICBcImdyZXktMzBcIjogJGdyZXktMzAsXG4gIFwiZ3JleS01MFwiOiAkZ3JleS01MCxcbiAgXCJncmV5LTcwXCI6ICRncmV5LTcwLFxuICBcImdyZXktOTBcIjogJGdyZXktOTAsXG4gIFwiZ3JleS05NVwiOiAkZ3JleS05NSxcbiAgXCJiYXNlXCI6ICRiYXNlLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcIndoaXRlXCI6ICR3aGl0ZSxcbiAgXCJibGFja1wiOiAkYmxhY2ssXG4gIFwiYmx1ZVwiOiAkYmx1ZVxuKTtcblxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG4kZ3Qtc21hbGwtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHNtKSAhZGVmYXVsdDsgLy8gNTc2XG4kZ3QtbWVkaXVtLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBtZCkgIWRlZmF1bHQ7IC8vIDc2OFxuJGd0LWxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBsZykgIWRlZmF1bHQ7IC8vIDk5MlxuJGd0LXhsYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgeGwpICFkZWZhdWx0OyAvLyAxMjAwXG5cbi8qIFNoYWRvd3MgKi9cbiRzaGFkb3ctc206IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XG4kc2hhZG93LW1kOiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMDgpOyAvL2RlZmF1bHRcbiRzaGFkb3ctbGc6IDAgMTVweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwwLDAsMC4wOCk7XG4kc2hhZG93LWVsZXZhdGU6ICRzaGFkb3ctbGc7IC8vIG9uIGhvdmVyXG5cbi8qIFNwYWNpbmcgR3VpZGVsaW5lcyAqL1xuJHNwYWNpbmcteHhzOiAwLjMzM3JlbTsgICAgIC8vIHNtYWxsIGdhcCAgICAgICAgICAgLSA1cHggICAgKHh4cylcbiRzcGFjaW5nLXhzOiAwLjY2N3JlbTsgICAgICAvLyBSZWxhdGVkIERpcmVjdGx5ICAgIC0gMTBweCAgICh4cylcbiRzcGFjaW5nLXNtOiAxcmVtOyAgICAgICAgICAvLyBSZWxhdGVkIEluZGlyZWN0bHkgIC0gMTVweCAgIChzbSlcbiRzcGFjaW5nLW1kOiAxLjMzcmVtOyAgICAgICAvLyBSZWxhdGVkIEdyb3VwICAgICAgIC0gMjBweCAgIChtZCkgIC8vZGVmYXVsdFxuJHNwYWNpbmctbGc6IDJyZW07ICAgICAgICAgIC8vIFVucmVsYXRlZCBHcm91cCAgICAgLSAzMHB4ICAgKGxnKVxuJHNwYWNpbmcteGw6IDIuNjY3cmVtOyAgICAgIC8vIE5ldyBTZWN0aW9uICAgICAgICAgLSA0MHB4ICAgKHhsKVxuJHNwYWNpbmcteHhsOiA0cmVtOyAgICAgICAgIC8vIE5ldyBTZWN0aW9uIChMYXJnZSkgLSA2MHB4ICAgKHh4bClcblxuJHNwYWNpbmctc2l6ZXM6IChcbiAgXCIwXCI6IDAsXG4gIFwiNVwiOiAkc3BhY2luZy14eHMsXG4gIFwiMTBcIjogJHNwYWNpbmcteHMsXG4gIFwiMTVcIjogJHNwYWNpbmctc20sXG4gIFwiMjBcIjogJHNwYWNpbmctbWQsXG4gIFwiMzBcIjogJHNwYWNpbmctbGcsXG4gIFwiNDBcIjogJHNwYWNpbmcteGwsXG4gIFwiNjBcIjogJHNwYWNpbmcteHhsLFxuICBcIjE1LWVtXCI6IDEuNXJlbSxcbiAgXCIyMi1lbVwiOiAyLjJyZW0sXG4gIFwieHhzXCI6ICRzcGFjaW5nLXh4cyxcbiAgXCJ4c1wiOiAkc3BhY2luZy14cyxcbiAgXCJzbVwiOiAkc3BhY2luZy1zbSxcbiAgXCJtZFwiOiAkc3BhY2luZy1tZCxcbiAgXCJsZ1wiOiAkc3BhY2luZy1sZyxcbiAgXCJ4bFwiOiAkc3BhY2luZy14bCxcbiAgXCJ4eGxcIjogJHNwYWNpbmcteHhsLCAgXG4gICk7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbiRhbmltYXRpb24teHM6IGFsbCAwLjFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1zaDogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLW1kOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7IC8vZGVmYXVsdFxuJGFuaW1hdGlvbi1sZzogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXhsOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teHhsOiBhbGwgMS4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblxuJGFuaW1hdGlvbi1kZWZhdWx0OiAkYW5pbWF0aW9uLW1kO1xuXG4kYW5pbWF0aW9uLWZhZGUtaW46IGZhZGUtaW4gMXMgYm90aDtcbiRhbmltYXRpb24tZmFkZS1vdXQ6IGZhZGUtb3V0IDFzIGVhc2Utb3V0IGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tdG9wOiBmYWRlLWluLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tOiBmYWRlLWluLWJvdHRvbSAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyOiBwdWZmLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjQ3MCwgMC4wMDAsIDAuNzQ1LCAwLjcxNSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyOiBwdWZmLW91dC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBib3RoO1xuJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsOiBzaGFrZS1ob3Jpem9udGFsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1KSBib3RoO1xuJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2s6IGZvY3VzLWluLWNvbnRyYWN0LWJjayAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7IC8vIGZvciB0ZXh0XG4kYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3A6IHNjYWxlLWluLXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4kYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wOiBzY2FsZS1vdXQtdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbiRhbmltYXRpb24tcHVsc2UtaW5maW5pdGU6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIGluZmluaXRlO1xuJGFuaW1hdGlvbi1wdWxzZS0zOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyAzO1xuJGFuaW1hdGlvbi1wdWxzZS0xOiBzaGFkb3ctcHVsc2UgMXMgMTtcblxuLy8gWW91IGNhbiB1c2UgYW55IG9mIHRoZXNlIG5hbWVzIHRvIGFuaW1hdGUgSFRNTCBlbGVtZW50cyBvbiBpbml0aWF0aW9uXG4kYW5pbWF0aW9uczogKFxuICBcImZhZGUtaW5cIjogJGFuaW1hdGlvbi1mYWRlLWluLFxuICBcImZhZGUtb3V0XCI6ICRhbmltYXRpb24tZmFkZS1vdXQsXG4gIFwiZmFkZS1pbi10b3BcIjogJGFuaW1hdGlvbi1mYWRlLWluLXRvcCxcbiAgXCJmYWRlLWluLWJvdHRvbVwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tLFxuICBcInB1ZmYtaW4tY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXIsXG4gIFwicHVmZi1vdXQtY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyLFxuICBcInNoYWtlLWhvcml6b250YWxcIjogJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsLFxuICBcImZvY3VzLWluLWNvbnRyYWN0LWJja1wiOiAkYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjayxcbiAgXCJzY2FsZS1pbi12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcCxcbiAgXCJzY2FsZS1vdXQtdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wLFxuICBcInB1bHNlLWluZmluaXRlXCI6ICRhbmltYXRpb24tcHVsc2UtaW5maW5pdGUsXG4gIFwicHVsc2UtM1wiOiAkYW5pbWF0aW9uLXB1bHNlLTMsXG4gIFwicHVsc2UtMVwiOiAkYW5pbWF0aW9uLXB1bHNlLTFcbik7XG5cbi8qIEJvcmRlcnMgKi9cbiRib3JkZXItc2l6ZS1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXNpemUtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXNpemUtbGc6IDAuNXJlbTtcbiRib3JkZXItc2l6ZS0xOiAxcHg7XG4kYm9yZGVyLXNpemUtMjogMnB4O1xuJGJvcmRlci1zaXplLTM6IDNweDtcbiRib3JkZXItc2l6ZS01OiA1cHg7XG4kYm9yZGVyLXNpemUtMTA6IDEwcHg7XG5cbiRib3JkZXItc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXNpemUtc20sXG4gIFwibWRcIjogJGJvcmRlci1zaXplLW1kLFxuICBcImxnXCI6ICRib3JkZXItc2l6ZS1sZyxcbiAgXCIxXCI6ICRib3JkZXItc2l6ZS0xLFxuICBcIjJcIjogJGJvcmRlci1zaXplLTIsXG4gIFwiM1wiOiAkYm9yZGVyLXNpemUtMyxcbiAgXCI1XCI6ICRib3JkZXItc2l6ZS01LFxuICBcIjEwXCI6ICRib3JkZXItc2l6ZS0xMFxuKTtcblxuLyogQ29ybmVycyAqL1xuJGJvcmRlci1yYWRpdXMtc206IDAuMTI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1sZzogMC41cmVtO1xuJGJvcmRlci1yYWRpdXMtMjogMnB4O1xuJGJvcmRlci1yYWRpdXMtNDogNHB4O1xuJGJvcmRlci1yYWRpdXMtNjogNnB4O1xuJGJvcmRlci1yYWRpdXMtMTA6IDEwcHg7XG4kYm9yZGVyLXJhZGl1cy0xNTogMTVweDtcbiRib3JkZXItcmFkaXVzLTIwOiAyMHB4O1xuJGJvcmRlci1yYWRpdXMtaGFsZjogNTAlO1xuJGJvcmRlci1yYWRpdXMtZnVsbDogMTAwJTtcblxuJGJvcmRlci1yYWRpdXMtc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXJhZGl1cy1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXJhZGl1cy1tZCwgLy9kZWZhdWx0XG4gIFwibGdcIjogJGJvcmRlci1yYWRpdXMtbGcsXG4gIFwiMlwiOiAkYm9yZGVyLXJhZGl1cy0yLFxuICBcIjRcIjogJGJvcmRlci1yYWRpdXMtNCxcbiAgXCI2XCI6ICRib3JkZXItcmFkaXVzLTYsXG4gIFwiMTBcIjogJGJvcmRlci1yYWRpdXMtMTAsXG4gIFwiMTVcIjogJGJvcmRlci1yYWRpdXMtMTUsXG4gIFwiMjBcIjogJGJvcmRlci1yYWRpdXMtMjAsXG4gIFwiaGFsZlwiOiAkYm9yZGVyLXJhZGl1cy1oYWxmLFxuICBcImZ1bGxcIjogJGJvcmRlci1yYWRpdXMtZnVsbCxcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbi9kZWVwLyB7XG4gIC8vbm8gdWkgc2xpZGVyIGNvbG9yIG92ZXJyaWRlXG4gIC5ub1VpLXRhcmdldCAubm9VaS1jb25uZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgfVxufVxuXG46aG9zdCB7XG4gICRoaWRlTG90dGVyeURldGFpbHNEZXNjcmlwdGlvbjogbG90dGVyeS1kZXRhaWxzLWRlc2NyaXB0aW9uOyAvLyB0aGlzIGNsYXNzIG5hbWUgdXNlZCBpbiBzZXZlcmFsIHBsYWNlc1xuICAuI3skaGlkZUxvdHRlcnlEZXRhaWxzRGVzY3JpcHRpb259IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxOHB4IDlweCAkd2hpdGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgIH1cblxuICAgIC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb24tc2Nyb2xsIHtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAxOS4zMTNyZW07XG4gICAgICBwYWRkaW5nOiAxLjEyNXJlbSAxcmVtO1xuICAgIH1cblxuICAgIC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb24tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQxNTA1YjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJiArIC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb24tY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNjI1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb24tY29udGVudCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjNDE1MDViO1xuXG4gICAgICAuZGV0YWlscy1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB9XG5cbiAgICAgICYgKyAubG90dGVyeS1kZXRhaWxzLWRlc2NyaXB0aW9uLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS4zNzVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvdHRlcnktcmVzdWx0LWl0ZW0ge1xuICAgIGhlaWdodDogMjdyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgLmxvdHRlcnktcmVzdWx0LXNwYWNlLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB6LWluZGV4OiAwO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMXB4ICNjM2MzYzM7XG4gICAgfVxuXG4gICAgLmxvdHRlcnktcmVzdWx0LWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcblxuICAgICAgLmZhdm9yaXRlLXN0YXItaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICByaWdodDogMXJlbTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgLmRldGFpbHMtdW5pdC1kZXNjIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMS4zMTNyZW07XG4gICAgICAgICAgd2lkdGg6IDEuMzEzcmVtO1xuICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjOWI5YjliO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjY4OHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLmxvdHRlcnktcmVzdWx0LXNwYWNlLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogLTEuMDc1cmVtIC0xLjg3NXJlbTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgLmxvdHRlcnktcmVzdWx0LWNvbnRhaW5lciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDFweCByZ2JhKDEsIDEyMiwgMjA2LCAwLjgpO1xuICAgICAgfVxuXG4gICAgICAuI3skaGlkZUxvdHRlcnlEZXRhaWxzRGVzY3JpcHRpb259IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5sb3R0ZXJ5LWNhcm91c2VsIHtcbiAgICAgICAgaGVpZ2h0OiAxOHJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG90dGVyeS1jYXJvdXNlbCB7XG4gICAgaGVpZ2h0OiAxNi44NzVyZW07XG4gIH1cbiAgLyogLnBvcHVwLXN0YXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgaS5sYSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH0gKi9cbiAgLmxvdHRlcnktZGV0YWlscyB7XG4gICAgcGFkZGluZzogMXJlbSAxLjEyNXJlbSAyMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5sb3R0ZXJ5LWRldGFpbHMtZXhwaXJhdGlvbi10aW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzg4OWFhOTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMzEzcmVtO1xuICAgIH1cblxuICAgIC5sb3R0ZXJ5LWRldGFpbHMtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzQxNTA1YjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMTg4cmVtO1xuICAgIH1cblxuICAgIC5sb3R0ZXJ5LWRldGFpbHMtbG9jYXRpb24ge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiAjNDE1MDViO1xuICAgIH1cbiAgICAvKi5zdWJ3YXktdHlwZS1pY29uc2V0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgKyAuc3Vid2F5LXR5cGUtaWNvbnNldCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XG4gICAgICB9XG4gICAgfSovXG4gICAgLmZhY2lsaXRpZXMtaWNvbnNldCB7XG4gICAgICArIC5mYWNpbGl0aWVzLWljb25zZXQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC40cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5sb3R0ZXJ5LWljb25zLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwIDAgMDtcbiAgfVxuXG4gIC5wYWdpbmF0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC5ib3R0b20taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNWQ1ZTI7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDIzOCwgMjQzLCAwLjUpO1xuXG4gICAgLmluZm8taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgICAgIC5pbmZvLWl0ZW0taW1nLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA4NXB4O1xuICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4NXB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDgxcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dC1zZWN0aW9uIHtcbiAgICAgIHAge1xuICAgICAgICB3aWR0aDogMjM3cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAycHg7XG4gICAgICAgIGNvbG9yOiAjNDE1MDViO1xuICAgICAgfVxuXG4gICAgICBwLmxpbmsge1xuICAgICAgICBjb2xvcjogIzAwYWRjNztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hcC10b29sdGlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9kaXNwbGF5OiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAubWFwLXZpZXcge1xuICAgIGhlaWdodDogODAwcHg7XG4gIH1cblxuICAuZ3JpZC12aWV3LW1hcC1jb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IDI2LjVyZW07XG4gICAgaGVpZ2h0OiAyNi41cmVtO1xuICB9XG5cbiAgLmdyaWQtdmlldy1tYXAtY29udGFpbmVyLXN0aWNreSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMjYuNXJlbTtcbiAgICB0b3A6IDA7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDI1LjMzMzMzMyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQbGVhc2UgY29uc3VsdCB3aXRoIFl1cnkgYmVmb3JlIGFkZGluZyBzb21lIG5ldyBDU1MgdmFyaWFibGVzLiAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogVGFibGUgb2YgQ29udGVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFR5cG9ncmFwaHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVGhlbWUgQ29sb3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNoYWRvd3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU3BhY2luZyBHdWlkZWxpbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBBbmltYXRpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIENvcm5lcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuLyogU2hhZG93cyAqL1xuLyogU3BhY2luZyBHdWlkZWxpbmVzICovXG4vKiBBbmltYXRpb25zICovXG4vKiBCb3JkZXJzICovXG4vKiBDb3JuZXJzICovXG4vZGVlcC8gLm5vVWktdGFyZ2V0IC5ub1VpLWNvbm5lY3Qge1xuICBiYWNrZ3JvdW5kOiAjMDE3YWNlOyB9XG5cbjpob3N0IHtcbiAgLyogLnBvcHVwLXN0YXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgaS5sYSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH0gKi8gfVxuICA6aG9zdCAubG90dGVyeS1kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIDpob3N0IC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb246YWZ0ZXIsIDpob3N0IC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb246YmVmb3JlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDE4cHggOXB4ICNmZmZmZmY7IH1cbiAgICA6aG9zdCAubG90dGVyeS1kZXRhaWxzLWRlc2NyaXB0aW9uOmFmdGVyIHtcbiAgICAgIGJvdHRvbTogMDsgfVxuICAgIDpob3N0IC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb246YmVmb3JlIHtcbiAgICAgIHRvcDogMDsgfVxuICAgIDpob3N0IC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb24gLmxvdHRlcnktZGV0YWlscy1kZXNjcmlwdGlvbi1zY3JvbGwge1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDE5LjMxM3JlbTtcbiAgICAgIHBhZGRpbmc6IDEuMTI1cmVtIDFyZW07IH1cbiAgICA6aG9zdCAubG90dGVyeS1kZXRhaWxzLWRlc2NyaXB0aW9uIC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb24tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQxNTA1YjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgOmhvc3QgLmxvdHRlcnktZGV0YWlscy1kZXNjcmlwdGlvbiAubG90dGVyeS1kZXRhaWxzLWRlc2NyaXB0aW9uLXRpdGxlICsgLmxvdHRlcnktZGV0YWlscy1kZXNjcmlwdGlvbi1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC42MjVyZW07IH1cbiAgICA6aG9zdCAubG90dGVyeS1kZXRhaWxzLWRlc2NyaXB0aW9uIC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb24tY29udGVudCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjNDE1MDViOyB9XG4gICAgICA6aG9zdCAubG90dGVyeS1kZXRhaWxzLWRlc2NyaXB0aW9uIC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb24tY29udGVudCAuZGV0YWlscy1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7IH1cbiAgICAgIDpob3N0IC5sb3R0ZXJ5LWRldGFpbHMtZGVzY3JpcHRpb24gLmxvdHRlcnktZGV0YWlscy1kZXNjcmlwdGlvbi1jb250ZW50ICsgLmxvdHRlcnktZGV0YWlscy1kZXNjcmlwdGlvbi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMzc1cmVtOyB9XG4gIDpob3N0IC5sb3R0ZXJ5LXJlc3VsdC1pdGVtIHtcbiAgICBoZWlnaHQ6IDI3cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07IH1cbiAgICA6aG9zdCAubG90dGVyeS1yZXN1bHQtaXRlbSAubG90dGVyeS1yZXN1bHQtc3BhY2UtY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAxcHggI2MzYzNjMzsgfVxuICAgIDpob3N0IC5sb3R0ZXJ5LXJlc3VsdC1pdGVtIC5sb3R0ZXJ5LXJlc3VsdC1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyB9XG4gICAgICA6aG9zdCAubG90dGVyeS1yZXN1bHQtaXRlbSAubG90dGVyeS1yZXN1bHQtY29udGFpbmVyIC5mYXZvcml0ZS1zdGFyLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMXJlbTtcbiAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgIHotaW5kZXg6IDE7IH1cbiAgICAgIDpob3N0IC5sb3R0ZXJ5LXJlc3VsdC1pdGVtIC5sb3R0ZXJ5LXJlc3VsdC1jb250YWluZXIgLmRldGFpbHMtdW5pdC1kZXNjIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07IH1cbiAgICAgICAgOmhvc3QgLmxvdHRlcnktcmVzdWx0LWl0ZW0gLmxvdHRlcnktcmVzdWx0LWNvbnRhaW5lciAuZGV0YWlscy11bml0LWRlc2Mgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMS4zMTNyZW07XG4gICAgICAgICAgd2lkdGg6IDEuMzEzcmVtO1xuICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjOWI5YjliO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjY4OHJlbTsgfVxuICAgIDpob3N0IC5sb3R0ZXJ5LXJlc3VsdC1pdGVtOmhvdmVyIC5sb3R0ZXJ5LXJlc3VsdC1zcGFjZS1jb250YWluZXIge1xuICAgICAgbWFyZ2luOiAtMS4wNzVyZW0gLTEuODc1cmVtO1xuICAgICAgei1pbmRleDogMTsgfVxuICAgIDpob3N0IC5sb3R0ZXJ5LXJlc3VsdC1pdGVtOmhvdmVyIC5sb3R0ZXJ5LXJlc3VsdC1jb250YWluZXIge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMXB4IHJnYmEoMSwgMTIyLCAyMDYsIDAuOCk7IH1cbiAgICA6aG9zdCAubG90dGVyeS1yZXN1bHQtaXRlbTpob3ZlciAubG90dGVyeS1kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgOmhvc3QgLmxvdHRlcnktcmVzdWx0LWl0ZW06aG92ZXIgLmxvdHRlcnktY2Fyb3VzZWwge1xuICAgICAgaGVpZ2h0OiAxOHJlbTsgfVxuICA6aG9zdCAubG90dGVyeS1jYXJvdXNlbCB7XG4gICAgaGVpZ2h0OiAxNi44NzVyZW07IH1cbiAgOmhvc3QgLmxvdHRlcnktZGV0YWlscyB7XG4gICAgcGFkZGluZzogMXJlbSAxLjEyNXJlbSAyMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKi5zdWJ3YXktdHlwZS1pY29uc2V0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgKyAuc3Vid2F5LXR5cGUtaWNvbnNldCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XG4gICAgICB9XG4gICAgfSovIH1cbiAgICA6aG9zdCAubG90dGVyeS1kZXRhaWxzIC5sb3R0ZXJ5LWRldGFpbHMtZXhwaXJhdGlvbi10aW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzg4OWFhOTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMzEzcmVtOyB9XG4gICAgOmhvc3QgLmxvdHRlcnktZGV0YWlscyAubG90dGVyeS1kZXRhaWxzLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICM0MTUwNWI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjE4OHJlbTsgfVxuICAgIDpob3N0IC5sb3R0ZXJ5LWRldGFpbHMgLmxvdHRlcnktZGV0YWlscy1sb2NhdGlvbiB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6ICM0MTUwNWI7IH1cbiAgICA6aG9zdCAubG90dGVyeS1kZXRhaWxzIC5mYWNpbGl0aWVzLWljb25zZXQgKyAuZmFjaWxpdGllcy1pY29uc2V0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjRyZW07IH1cbiAgOmhvc3QgLmxvdHRlcnktaWNvbnMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMS41cmVtIDAgMCAwOyB9XG4gIDpob3N0IC5wYWdpbmF0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTsgfVxuICA6aG9zdCAuYm90dG9tLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzVkNWUyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMyLCAyMzgsIDI0MywgMC41KTsgfVxuICAgIDpob3N0IC5ib3R0b20taW5mbyAuaW5mby1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxuICAgICAgOmhvc3QgLmJvdHRvbS1pbmZvIC5pbmZvLWl0ZW0gLmluZm8taXRlbS1pbWctY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICAgIGhlaWdodDogODVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAgICAgOmhvc3QgLmJvdHRvbS1pbmZvIC5pbmZvLWl0ZW0gLmluZm8taXRlbS1pbWctY29udGFpbmVyIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4NXB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDgxcHg7IH1cbiAgICA6aG9zdCAuYm90dG9tLWluZm8gLnRleHQtc2VjdGlvbiBwIHtcbiAgICAgIHdpZHRoOiAyMzdweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAycHg7XG4gICAgICBjb2xvcjogIzQxNTA1YjsgfVxuICAgIDpob3N0IC5ib3R0b20taW5mbyAudGV4dC1zZWN0aW9uIHAubGluayB7XG4gICAgICBjb2xvcjogIzAwYWRjNztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4gIDpob3N0IC5tYXAtdG9vbHRpcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7IH1cbiAgOmhvc3QgLm1hcC12aWV3IHtcbiAgICBoZWlnaHQ6IDgwMHB4OyB9XG4gIDpob3N0IC5ncmlkLXZpZXctbWFwLWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogMjYuNXJlbTtcbiAgICBoZWlnaHQ6IDI2LjVyZW07IH1cbiAgOmhvc3QgLmdyaWQtdmlldy1tYXAtY29udGFpbmVyLXN0aWNreSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMjYuNXJlbTtcbiAgICB0b3A6IDA7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDI1LjMzMzMzMyU7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/browse-lotteries.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/browse-lotteries.component.ts ***!
  \************************************************************************/
/*! exports provided: BrowseLotteriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseLotteriesComponent", function() { return BrowseLotteriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/api/lottery-api.service */ "./src/app/shared/services/api/lottery-api.service.ts");
/* harmony import */ var _shared_components_map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/map/map.component */ "./src/app/shared/components/map/map.component.ts");
/* harmony import */ var _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/enums/developmentEnums */ "./src/app/shared/enums/developmentEnums.ts");
/* harmony import */ var _components_filters_filter_models_filters_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/filters/filter-models/filters.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/filters.class.ts");
/* harmony import */ var _services_browse_lotteries_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/browse-lotteries.service */ "./src/app/modules/browse-lotteries/services/browse-lotteries.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BrowseLotteriesComponent = /** @class */ (function () {
    function BrowseLotteriesComponent(lotteryApiService, browseLotteriesService, route, router, cdRef) {
        this.lotteryApiService = lotteryApiService;
        this.browseLotteriesService = browseLotteriesService;
        this.route = route;
        this.router = router;
        this.cdRef = cdRef;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.householdSize = null;
        this.income = '';
        this.lotteryResultData = [];
        this.salesResultData = [];
        this.isLoadingData = false;
        this.isSearching = true;
        this.isSearchingSales = true;
        // selectedTab: number;
        // orderBy: OrderFilterbyModel = {
        //   columnName: 'expiresInDays',
        //   ascending: true
        // };
        this.lotteryFiltersRentals = new _components_filters_filter_models_filters_class__WEBPACK_IMPORTED_MODULE_8__["FiltersModel"]({ householdType: _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_7__["HouseholdTypeEnum"].Rentals });
        this.lotteryFiltersSales = new _components_filters_filter_models_filters_class__WEBPACK_IMPORTED_MODULE_8__["FiltersModel"]({ householdType: _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_7__["HouseholdTypeEnum"].Sales });
        //filterOptions
        this.propertyTypes = [
            { id: 2, name: 'Condo/Coop' },
            { id: 1, name: 'Small Home' }
        ];
        this.subways = [
            { id: '1', isSelected: false, color: 'red' },
            { id: '2', isSelected: false, color: 'red' },
            { id: '3', isSelected: false, color: 'red' },
            { id: '4', isSelected: false, color: 'green' },
            { id: '5', isSelected: false, color: 'green' },
            { id: '6', isSelected: false, color: 'green' },
            { id: '7', isSelected: false, color: 'purple' },
            { id: 'A', isSelected: false, color: 'blue' },
            { id: 'C', isSelected: false, color: 'blue' },
            { id: 'E', isSelected: false, color: 'blue' },
            { id: 'B', isSelected: false, color: 'orange' },
            { id: 'D', isSelected: false, color: 'orange' },
            { id: 'F', isSelected: false, color: 'orange' },
            { id: 'M', isSelected: false, color: 'orange' },
            { id: 'G', isSelected: false, color: 'limeGreen' },
            { id: 'J', isSelected: false, color: 'brown' },
            { id: 'Z', isSelected: false, color: 'brown' },
            { id: 'L', isSelected: false, color: 'lightGray' },
            { id: 'S', isSelected: false, color: 'darkGray' },
            { id: 'N', isSelected: false, color: 'yellow' },
            { id: 'Q', isSelected: false, color: 'yellow' },
            { id: 'R', isSelected: false, color: 'yellow' },
            { id: 'W', isSelected: false, color: 'yellow' }
        ];
        this.availableFiltersRentals = {
            monthlyRent: true
        };
        this.availableFiltersSales = {
            price: true,
            ownershipType: true
        };
        this.refreshSearchRentalsTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.refreshSearchSalesTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ObserveFilterSetFromQueryParams$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.HouseholdTypeEnum = _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_7__["HouseholdTypeEnum"];
        this.isTransitioning = false;
    }
    BrowseLotteriesComponent.prototype.ngOnInit = function () {
        // this.loadFilterOptions();
        // this.getLotteriesForSalesAndRental();
        // this.route.queryParams
        //   .pipe(takeUntil(this.ngUnsubscribe))
        //   .subscribe((queryFilterParams) => {
        //     this.householdSize = queryFilterParams['householdSize'] || null;
        //     this.income = queryFilterParams['householdIncome'] || null;
        //     this.householdType = queryFilterParams['householdType'] || null;
        //     const filterParams = this.browseLotteriesService.queryParamsToFiltersValues(queryFilterParams);
        //     this.ObserveFilterSetFromQueryParams$.next(filterParams);
        //     this.ObserveFilterSetFromQueryParams$.complete();
        //   });
    };
    BrowseLotteriesComponent.prototype.loadFilterOptions = function () {
        var _this = this;
        this.isLoadingData = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.ObserveFilterSetFromQueryParams$, this.lotteryApiService.getUnitLayoutTypes(), this.lotteryApiService.getHouseholdSizeOptions(), 
        //this.lotteryApiService.getNearbyPlaceTypes(),
        this.lotteryApiService.getActiveAmenities(), this.lotteryApiService.getNeighborhoods()).subscribe(function (_a) {
            var filtersSetFromQueryParams = _a[0], unitLayoutTypesResult = _a[1], householdSizeOptionsResult = _a[2], 
            //nearbyPlaceTypeResult,
            activeAmenitiesResult = _a[3], neighborhoodResult = _a[4];
            _this.isLoadingData = false;
            var filtersAPIData = {
                householdSizes: householdSizeOptionsResult,
                unitLayoutTypes: unitLayoutTypesResult,
                amenities: activeAmenitiesResult,
                neighborhoods: _this.createNeighborhoodsDataModel(neighborhoodResult),
                propertyTypes: _this.propertyTypes,
                subways: _this.subways
            };
            _this.filtersDataRentalsTab = _this.clone(filtersAPIData);
            _this.filtersDataSalesTab = _this.clone(filtersAPIData);
            // const savedIndex = localStorage.getItem('lotteryTypeSelectedTabIndex');
            // if (savedIndex) {
            //   this.selectedTab = parseInt(savedIndex);
            //   this.lotteryFiltersRentals = new FiltersModel(JSON.parse(localStorage.getItem('lotteryFiltersRentals')));
            //   this.lotteryFiltersSales = new FiltersModel(JSON.parse(localStorage.getItem('lotteryFiltersSales')));
            // }
            // else {
            //const filterDataSet = this.browseLotteriesService.formattingQueryParamsToFilterModel(filtersSetFromQueryParams, filtersAPIData);
            _this.lotteryFiltersRentals.setData({ price: { minPrice: null, maxPrice: null } });
            _this.lotteryFiltersSales.setData({ monthlyRent: { minRent: null, maxRent: null } });
            // }
            // this.selectTab(this.selectedTab);
            _this.cdRef.detectChanges();
        });
    };
    // selectTab(index) {
    //   this.isTransitioning = true;
    //   // this.selectedTab = index;
    //   if (this.selectedTab == 0) {
    //     this.householdType = HouseholdTypeEnum.Rentals.toString();
    //     this.refreshSearchRentalsTab$.next();
    //   } else if (this.selectedTab == 1) {
    //     this.householdType = HouseholdTypeEnum.Sales.toString();
    //     this.refreshSearchSalesTab$.next()
    //   }
    //   //This is here as a quick fix for eradict map placement when switching between tabs
    //   setTimeout(() => {
    //     this.isTransitioning = false;
    //   }, .5);
    //   localStorage.setItem('lotteryTypeSelectedTabIndex', this.selectedTab.toString());
    // }
    BrowseLotteriesComponent.prototype.updateLotteryResultData = function (lotteries) {
        return lotteries.map(function (item, index) {
            var subwayArray = item.trains
                ? lodash__WEBPACK_IMPORTED_MODULE_4__["uniq"](item.trains.split(',')).sort()
                : [];
            var markers = [];
            for (var i = 0; i < Math.ceil(Math.random() * 3); i++) {
                var randomNumber = (Math.random() * (0.001 - 0.006) + 0.006).toFixed(3);
                var randomNumber2 = (Math.random() * (0.001 - 0.006) + 0.006).toFixed(3);
                var lang = parseFloat((40.728225 + index * randomNumber).toFixed(6));
                var long = parseFloat((-73.799986 + index * randomNumber2).toFixed(6));
                var latlng = new google.maps.LatLng(lang, long);
                markers.push({ latlng: latlng });
            }
            var entity = {
                mainImage: (item.defaultPhotoStream)
                    ? (item.defaultPhotoStream)
                    : '/assets/images/demo-lottery-house.png',
                markers: markers,
                details: {
                    lotteryId: item.lotteryId,
                    street: item.lotteryName,
                    area: ((item.neighborhood)
                        ? item.neighborhood
                        : 'Neighborhood') + ' | ' + ((item.borough) ? item.borough : 'Borough'),
                    subwayServices: subwayArray,
                    images: [
                        (item.defaultPhotoStream) ? (item.defaultPhotoStream) : '/assets/images/demo-lottery-house.png'
                    ],
                    lotteryName: item.lotteryName.trim(),
                    isAddedToFavorite: false,
                    expirationDate: new Date(),
                    expirationDateText: (item.endIn > 0) ? ('Lottery closing in ' + item.endIn + ' days') : ((item.endIn === 0) ? ('Lottery ends today') : ('')),
                    expiresInDays: item.endId,
                    minIncome: item.minIncome,
                    maxIncome: item.maxIncome,
                    minHousehold: item.minHouseholdSize,
                    maxHousehold: item.maxHouseholdSize,
                    mobilityPref: item.mobility,
                    units: item.units,
                    studios: item.studios,
                    oneBR: item.oneBR,
                    twoBR: item.twoBR,
                    threeBR: item.threeBR,
                    visionHearingPref: item.visionHearing
                }
            };
            return entity;
        });
    };
    BrowseLotteriesComponent.prototype.clone = function (obj) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](obj);
    };
    BrowseLotteriesComponent.prototype.getLotteriesForSalesAndRental = function () {
        var _this = this;
        var lotterySearchModel = {
            UnitTypes: [],
            NearbyPlaces: [],
            NearbySubways: [],
            Amenities: [],
            Boroughs: [],
            HouseholdSize: this.householdSize,
            Income: this.income.replace(/,/g, ''),
            HouseholdType: this.householdType
        };
        // Rental Search: Here for now until refactor
        this.lotteryApiService.searchLotteries(lotterySearchModel)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (lotteries) {
            _this.lotteryResultData = _this.updateLotteryResultData(lotteries); //Rental Lottery Result Data
            _this.isSearching = false;
            console.log(_this.lotteryResultData);
            // this.cdRef.detectChanges();
        });
        // Sales Search: Here for now until refactor
        var tempSearchModel = __assign({}, lotterySearchModel);
        tempSearchModel.OwnerTypes = [];
        tempSearchModel.HouseholdType = 1;
        this.lotteryApiService.searchLotteries(tempSearchModel)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (lotteries) {
            _this.salesResultData = _this.updateLotteryResultData(lotteries); //Sales Lottery Result Data
            _this.isSearchingSales = false;
        });
    };
    BrowseLotteriesComponent.prototype.createNeighborhoodsDataModel = function (neighborhoodApiData) {
        return [
            { title: 'Manhattan' },
            { title: 'Bronx' },
            { title: 'Brooklyn' },
            { title: 'Queens' },
            { title: 'Staten Island' },
        ].map(function (borough, index) {
            borough.id = index + 1;
            borough.subList = neighborhoodApiData
                .filter(function (n) { return n.boroughId === borough.id; })
                .map(function (n) {
                n.parentId = borough.id;
                n.title = n.name;
                return n;
            });
            return borough;
        });
    };
    BrowseLotteriesComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]),
        __metadata("design:type", _shared_components_map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"])
    ], BrowseLotteriesComponent.prototype, "map", void 0);
    BrowseLotteriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./browse-lotteries.component.html */ "./src/app/modules/browse-lotteries/browse-lotteries.component.html"),
            styles: [__webpack_require__(/*! ./browse-lotteries.component.scss */ "./src/app/modules/browse-lotteries/browse-lotteries.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_5__["LotteryApiService"],
            _services_browse_lotteries_service__WEBPACK_IMPORTED_MODULE_9__["BrowseLotteriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], BrowseLotteriesComponent);
    return BrowseLotteriesComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/browse-lotteries.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/browse-lotteries.module.ts ***!
  \*********************************************************************/
/*! exports provided: BrowseLotteriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseLotteriesModule", function() { return BrowseLotteriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "../../node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "../../node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_components_lottery_card_with_bg_image_lottery_card_with_bg_image_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/lottery-card-with-bg-image/lottery-card-with-bg-image.module */ "./src/app/shared/components/lottery-card-with-bg-image/lottery-card-with-bg-image.module.ts");
/* harmony import */ var _shared_components_lottery_card_details_lottery_card_details_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/lottery-card-details/lottery-card-details.module */ "./src/app/shared/components/lottery-card-details/lottery-card-details.module.ts");
/* harmony import */ var _shared_components_pure_carousel_pure_carousel_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/pure-carousel/pure-carousel.module */ "./src/app/shared/components/pure-carousel/pure-carousel.module.ts");
/* harmony import */ var _browse_lotteries_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./browse-lotteries-routing.module */ "./src/app/modules/browse-lotteries/browse-lotteries-routing.module.ts");
/* harmony import */ var _browse_lotteries_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./browse-lotteries.component */ "./src/app/modules/browse-lotteries/browse-lotteries.component.ts");
/* harmony import */ var _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/filters/filters.component */ "./src/app/modules/browse-lotteries/components/filters/filters.component.ts");
/* harmony import */ var _components_lottery_result_header_lottery_result_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/lottery-result-header/lottery-result-header.component */ "./src/app/modules/browse-lotteries/components/lottery-result-header/lottery-result-header.component.ts");
/* harmony import */ var _components_filter_tags_input_filter_tags_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/filter-tags-input/filter-tags-input.component */ "./src/app/modules/browse-lotteries/components/filter-tags-input/filter-tags-input.component.ts");
/* harmony import */ var _components_filters_components_filter_selector_modal_filter_selector_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/filters/components/filter-selector-modal/filter-selector-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/filter-selector-modal/filter-selector-modal.component.ts");
/* harmony import */ var _components_filters_components_max_payment_modal_max_payment_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/filters/components/max-payment-modal/max-payment-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/max-payment-modal/max-payment-modal.component.ts");
/* harmony import */ var _components_filters_components_neighborhoods_modal_neighborhoods_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/filters/components/neighborhoods-modal/neighborhoods-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal.component.ts");
/* harmony import */ var _components_filters_components_nearby_subway_modal_nearby_subway_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/filters/components/nearby-subway-modal/nearby-subway-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/nearby-subway-modal/nearby-subway-modal.component.ts");
/* harmony import */ var _components_filters_components_household_income_modal_household_income_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/filters/components/household-income-modal/household-income-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/household-income-modal/household-income-modal.component.ts");
/* harmony import */ var _components_filters_components_single_select_modal_single_select_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/filters/components/single-select-modal/single-select-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/single-select-modal/single-select-modal.component.ts");
/* harmony import */ var _components_lottery_result_list_lottery_result_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/lottery-result-list/lottery-result-list.component */ "./src/app/modules/browse-lotteries/components/lottery-result-list/lottery-result-list.component.ts");
/* harmony import */ var _components_lottery_search_lottery_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/lottery-search/lottery-search.component */ "./src/app/modules/browse-lotteries/components/lottery-search/lottery-search.component.ts");
/* harmony import */ var _components_filters_components_lottery_filters_modal_lottery_filters_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/filters/components/lottery-filters-modal/lottery-filters-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottery-filters-modal.component.ts");
/* harmony import */ var _components_filters_components_lottery_filters_summary_lottery_filters_summary_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/filters/components/lottery-filters-summary/lottery-filters-summary.component */ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-summary/lottery-filters-summary.component.ts");
/* harmony import */ var _services_browse_lotteries_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/browse-lotteries.service */ "./src/app/modules/browse-lotteries/services/browse-lotteries.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var MaterialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"]
];
var BrowseLotteriesModule = /** @class */ (function () {
    function BrowseLotteriesModule() {
    }
    BrowseLotteriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _browse_lotteries_routing_module__WEBPACK_IMPORTED_MODULE_11__["BrowseLotteriesRoutingModule"],
                _shared_components_lottery_card_with_bg_image_lottery_card_with_bg_image_module__WEBPACK_IMPORTED_MODULE_8__["LotteryCardWithBgImageModule"],
                _shared_components_pure_carousel_pure_carousel_module__WEBPACK_IMPORTED_MODULE_10__["PureCarouselModule"],
                _shared_components_lottery_card_details_lottery_card_details_module__WEBPACK_IMPORTED_MODULE_9__["LotteryCardDetailsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ].concat(MaterialModules, [
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot()
            ]),
            declarations: [
                _browse_lotteries_component__WEBPACK_IMPORTED_MODULE_12__["BrowseLotteriesComponent"],
                _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_13__["BrowseLotteriesFiltersComponent"],
                _components_filters_components_filter_selector_modal_filter_selector_modal_component__WEBPACK_IMPORTED_MODULE_16__["FilterSelectorModal"],
                _components_filters_components_neighborhoods_modal_neighborhoods_modal_component__WEBPACK_IMPORTED_MODULE_18__["NeighborhoodsModalComponent"],
                _components_lottery_result_header_lottery_result_header_component__WEBPACK_IMPORTED_MODULE_14__["LotteryResultHeaderComponent"],
                _components_filter_tags_input_filter_tags_input_component__WEBPACK_IMPORTED_MODULE_15__["FilterTagsInputComponent"],
                _components_filters_components_max_payment_modal_max_payment_modal_component__WEBPACK_IMPORTED_MODULE_17__["MaxPaymentModalComponent"],
                _components_filters_components_household_income_modal_household_income_modal_component__WEBPACK_IMPORTED_MODULE_20__["HouseholdIncomeModalComponent"],
                _components_filters_components_nearby_subway_modal_nearby_subway_modal_component__WEBPACK_IMPORTED_MODULE_19__["NearbySubwayModalComponent"],
                _components_filters_components_single_select_modal_single_select_modal_component__WEBPACK_IMPORTED_MODULE_21__["SingleSelectModalComponent"],
                _components_lottery_result_list_lottery_result_list_component__WEBPACK_IMPORTED_MODULE_22__["LotteryResultListComponent"],
                _components_lottery_search_lottery_search_component__WEBPACK_IMPORTED_MODULE_23__["LotterySearchComponent"],
                _components_filters_components_lottery_filters_modal_lottery_filters_modal_component__WEBPACK_IMPORTED_MODULE_24__["LotteryFiltersModalComponent"],
                _components_filters_components_lottery_filters_summary_lottery_filters_summary_component__WEBPACK_IMPORTED_MODULE_25__["LotteryFiltersSummaryComponent"]
            ],
            exports: [_components_filters_filters_component__WEBPACK_IMPORTED_MODULE_13__["BrowseLotteriesFiltersComponent"]],
            entryComponents: [
                _components_filters_components_filter_selector_modal_filter_selector_modal_component__WEBPACK_IMPORTED_MODULE_16__["FilterSelectorModal"],
                _components_filters_components_neighborhoods_modal_neighborhoods_modal_component__WEBPACK_IMPORTED_MODULE_18__["NeighborhoodsModalComponent"],
                _components_filters_components_max_payment_modal_max_payment_modal_component__WEBPACK_IMPORTED_MODULE_17__["MaxPaymentModalComponent"],
                _components_filters_components_household_income_modal_household_income_modal_component__WEBPACK_IMPORTED_MODULE_20__["HouseholdIncomeModalComponent"],
                _components_filters_components_nearby_subway_modal_nearby_subway_modal_component__WEBPACK_IMPORTED_MODULE_19__["NearbySubwayModalComponent"],
                _components_filters_components_single_select_modal_single_select_modal_component__WEBPACK_IMPORTED_MODULE_21__["SingleSelectModalComponent"],
                _components_filters_components_lottery_filters_modal_lottery_filters_modal_component__WEBPACK_IMPORTED_MODULE_24__["LotteryFiltersModalComponent"]
            ],
            providers: [_services_browse_lotteries_service__WEBPACK_IMPORTED_MODULE_26__["BrowseLotteriesService"]]
        })
    ], BrowseLotteriesModule);
    return BrowseLotteriesModule;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filter-tags-input/filter-tags-input.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filter-tags-input/filter-tags-input.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"search-icon\">\r\n  <mat-icon class=\"d-inline-block\">search</mat-icon>\r\n</div>-->\r\n\r\n<div class=\"form-control\">\r\n  <div class=\"row\">\r\n    <div class=\"col-auto\" *ngIf=\"data.tags.length\">\r\n      <mat-chip-list>\r\n        <mat-chip *ngFor=\"let tag of data.tags\" (removed)=\"onDeleteTag.emit(tag)\">\r\n          {{tag.title}}\r\n          <mat-icon matChipRemove>cancel</mat-icon>\r\n        </mat-chip>\r\n      </mat-chip-list>\r\n    </div>\r\n    <div class=\"col\">\r\n      <input type=\"text\" class=\"search-input\" placeholder=\"Search\"\r\n             (input)=\"onChangeInput.emit($event.target.value)\">\r\n    </div>  \r\n    \r\n  </div>\r\n  \r\n</div>\r\n\r\n<!--<span class=\"badge badge-pill custom-badge-tag\" *ngFor=\"let tag of data.tags\" (click)=\"onDeleteTag.emit(tag)\">\r\n    {{tag.title}}\r\n  <mat-icon>close</mat-icon>\r\n  </span>-->\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filter-tags-input/filter-tags-input.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filter-tags-input/filter-tags-input.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host {\n  /*.custom-badge-tag {\n    display: inline-flex;\n    align-content: center;\n    font-size: 0.875rem;\n    font-weight: 100;\n    background: $grey-95;\n    color: $grey-20;\n    padding: 0 12px 0 10px;\n    height: 30px;\n    align-items: center;\n    border-radius: 1rem;\n    margin-bottom: 4px;\n\n    & + .custom-badge-tag {\n      margin-left: 0.5rem;\n    }\n\n    .mat-icon {\n      height: auto;\n      width: auto;\n      font-size: 0.875rem !important;\n      margin-left: 8px;\n      color: #8e8e8e;\n      cursor: pointer;\n    }\n\n    &:hover {\n      color: $dark-blue;\n      background: $light-blue;\n\n      .mat-icon {\n        color: #0087dc;\n      }\n    }\n  }*/\n  /*.search-icon {\n    height: 30px;\n    display: flex;\n    align-items: center;\n    margin-right: 0.5rem;\n\n    .mat-icon {\n      height: auto;\n      width: auto;\n      font-size: 1.313rem !important;\n    }\n  }*/ }\n:host .form-control {\n    padding: 0;\n    padding-left: 1.15rem;\n    padding-right: 1.15rem;\n    cursor: pointer; }\n:host .form-control .col-auto {\n      flex: 0 1 auto; }\n:host .form-control .mat-chip-list {\n      display: block;\n      margin-top: 0.5rem !important;\n      margin-bottom: 0.5rem !important; }\n:host .form-control .mat-chip-list .mat-chip-list-wrapper {\n        margin: 0 !important; }\n:host .form-control .search-input {\n      border: none;\n      display: block;\n      outline: none;\n      padding: .85rem 0;\n      width: 100%;\n      font-weight: 400;\n      min-height: 30px;\n      transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);\n      /*&:focus {\n      font-size: 1rem;\n    }*/ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlci10YWdzLWlucHV0L0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvZmlsdGVyLXRhZ3MtaW5wdXQvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcbW9kdWxlc1xcYnJvd3NlLWxvdHRlcmllc1xcY29tcG9uZW50c1xcZmlsdGVyLXRhZ3MtaW5wdXRcXGZpbHRlci10YWdzLWlucHV0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvZmlsdGVyLXRhZ3MtaW5wdXQvZmlsdGVyLXRhZ3MtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUErRkEsMkJBQUE7QUFhQSxZQUFBO0FBTUEsdUJBQUE7QUE2QkEsZUFBQTtBQXlDQSxZQUFBO0FBcUJBLFlBQUE7QUN2TkE7RUF3REU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKRTtFRHVDRjs7Ozs7Ozs7Ozs7SUMzQkUsRURzQ0M7QUF0R0w7SUFRSSxVQUFVO0lBSVYscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixlQUFlLEVBQUE7QUFkbkI7TUFpQk0sY0FBYyxFQUFBO0FBakJwQjtNQXFCTSxjQUFjO01BQ2QsNkJBQTZCO01BQzdCLGdDQUFnQyxFQUFBO0FBdkJ0QztRQTBCUSxvQkFBb0IsRUFBQTtBQTFCNUI7TUF1Q00sWUFBWTtNQUNaLGNBQWM7TUFDZCxhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLFdBQVc7TUFJWCxnQkFBZ0I7TUFFaEIsZ0JBQWdCO01BQ2hCLHNERDBHNkM7TUN6RzdDOztNQ3NDQSxFRHBDQyIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2Jyb3dzZS1sb3R0ZXJpZXMvY29tcG9uZW50cy9maWx0ZXItdGFncy1pbnB1dC9maWx0ZXItdGFncy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQbGVhc2UgY29uc3VsdCB3aXRoIFl1cnkgYmVmb3JlIGFkZGluZyBzb21lIG5ldyBDU1MgdmFyaWFibGVzLiAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogVGFibGUgb2YgQ29udGVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFR5cG9ncmFwaHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVGhlbWUgQ29sb3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNoYWRvd3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU3BhY2luZyBHdWlkZWxpbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBBbmltYXRpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIENvcm5lcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL1R5cG9ncmFwaHlcbiRmb250LW1haW46IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1oZWFkaW5nOiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtbGluZWF3ZXNvbWU6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE2cHgvMSBcIkxpbmVBd2Vzb21lXCI7XG4kZm9udC1mb250YXdlc29tZTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4kaHRtbC1mb250LXNpemUtbGc6IDE2cHg7XG4kaHRtbC1mb250LXNpemUtbWQ6IDE1cHg7XG4kaHRtbC1mb250LXNpemUtc206IDE0cHg7XG4kaHRtbC1mb250LXNpemUteHM6IDEzcHg7XG5cbiRodG1sLWZvbnQtd2VpZ2h0OiA0MDA7XG5cbi8vIFRoZW1lIENvbG9yc1xuJGNvbG9yLW9mZnNldDogNiU7IC8vIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBsaWdodGVyIGFuZCBkYXJrZXIgdmFyaWVudHMgb2YgYSBzcGVjaWZpYyBjb2xvclxuXG4kYmFzZTogI2ZhZmFmYTsgLy91c2VkIHByaW1hcmlseSBhcyBvZmYtd2hpdGUgYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG5cbiRwcmltYXJ5OiAjMDIwMDYzO1xuJHNlY29uZGFyeTogI2ZhZmFmYTtcbiRzZWNvbmRhcnktYmx1ZTogcmdiKDEwOSwgMTc4LCAyNTUpOyAvLyB3ZSBzaG91bGQgcmVwbGFjZSB0aGlzXG4kYWNjZW50OiAjZmNiMzIzOyAvLyMwMGM1ZGM7XG4kZm9jdXM6ICM5ODE2ZjQ7XG5cbiRzdWNjZXNzOiAjMDBlNmFiO1xuJHdhcm5pbmc6ICNmZmI4MjI7XG4kZGFuZ2VyOiAjZmYyYjJiOyAvLyNmNDUxNmM7XG4kaW5mbzogIzU1NzhlYjsgLy8jMzZhM2Y3O1xuXG4kbWV0YWw6ICNjNGM1ZDY7XG4kbWV0YWwtbGlnaHQ6IGxpZ2h0ZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcbiRtZXRhbC1kYXJrOiBkYXJrZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcblxuLy8gZ3JleXNcbiRsaWdodDogI2ZmZjtcbiRkYXJrOiAjMmMyZTNlO1xuJGdyZXktMjA6ICMzMzMzMzM7XG4kZ3JleS0zMDogIzRkNGQ0ZDtcbiRncmV5LTUwOiAjODA4MDgwO1xuJGdyZXktNzA6ICNiM2IzYjM7XG4kZ3JleS05MDogI2U2ZTZlNjtcbiRncmV5LTk1OiAjZjJmMmYyO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG4vLyBFeHRlbmRlZCBDb2xvciBQYWxldHRlXG4vLyBUT0RPOiBSZXZpZXcgdGhlc2UgY29sb3JzXG4kZGFyay1ibHVlOiAjMDIzOTcwO1xuJGJsdWU6ICMwMTdhY2U7XG4kY2VydWxlYW46ICMwMTdhY2U7XG4kbGlnaHQtYmx1ZTogI2NjZWFmZjtcbiRwYWxlLWJsdWU6ICNmMWY5ZmY7XG4kZGFyay10ZWFsOiAjMDA2NDZlO1xuJHRlYWw6ICMwMGMxZDQ7XG4kbGlnaHQtdGVhbDogI2NjZmFmZjtcbiRwYWxlLXRlYWw6ICNmNWZlZmY7XG4kZGFyay1ncmVlbjogIzBhNWM0MDtcbiRncmVlbjogIzE0Yjg4MTtcbiRsaWdodC1ncmVlbjogI2EzZjVkOTtcbiRwYWxlLWdyZWVuOiAjZjZmZWZiO1xuJGRhcmsteWVsbG93OiAjOTk3NDAwO1xuJHllbGxvdzogI2ZmY2UzMztcbiRsaWdodC15ZWxsb3c6ICNmZmYzY2M7XG4kcGFsZS15ZWxsb3c6ICNmZmZkZjU7XG4kZGFyay1yZWQ6ICM2NjBhMDA7XG4kcmVkOiAjY2MxNDAwO1xuJGxpZ2h0LXJlZDogI2ZmZDFjYztcbiRwYWxlLXJlZDogI2ZmZjZmNTtcblxuXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJhY2NlbnRcIjogJGFjY2VudCxcbiAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLCBcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLCBcbiAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgXCJpbmZvXCI6ICRpbmZvLFxuICBcIm1ldGFsXCI6ICRtZXRhbCxcbiAgXCJmb2N1c1wiOiAkZm9jdXMsXG4gIFwiZ3JleS0yMFwiOiAkZ3JleS0yMCwgXG4gIFwiZ3JleS0zMFwiOiAkZ3JleS0zMCxcbiAgXCJncmV5LTUwXCI6ICRncmV5LTUwLFxuICBcImdyZXktNzBcIjogJGdyZXktNzAsXG4gIFwiZ3JleS05MFwiOiAkZ3JleS05MCxcbiAgXCJncmV5LTk1XCI6ICRncmV5LTk1LFxuICBcImJhc2VcIjogJGJhc2UsXG4gIFwibGlnaHRcIjogJGxpZ2h0LFxuICBcImRhcmtcIjogJGRhcmssXG4gIFwid2hpdGVcIjogJHdoaXRlLFxuICBcImJsYWNrXCI6ICRibGFjayxcbiAgXCJibHVlXCI6ICRibHVlXG4pO1xuXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcbiRndC1zbWFsbC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgc20pICFkZWZhdWx0OyAvLyA1NzZcbiRndC1tZWRpdW0td2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIG1kKSAhZGVmYXVsdDsgLy8gNzY4XG4kZ3QtbGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIGxnKSAhZGVmYXVsdDsgLy8gOTkyXG4kZ3QteGxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCB4bCkgIWRlZmF1bHQ7IC8vIDEyMDBcblxuLyogU2hhZG93cyAqL1xuJHNoYWRvdy1zbTogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEwKTtcbiRzaGFkb3ctbWQ6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4wOCk7IC8vZGVmYXVsdFxuJHNoYWRvdy1sZzogMCAxNXB4IDMwcHggMCByZ2JhKDAsMCwwLDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgwLDAsMCwwLjA4KTtcbiRzaGFkb3ctZWxldmF0ZTogJHNoYWRvdy1sZzsgLy8gb24gaG92ZXJcblxuLyogU3BhY2luZyBHdWlkZWxpbmVzICovXG4kc3BhY2luZy14eHM6IDAuMzMzcmVtOyAgICAgLy8gc21hbGwgZ2FwICAgICAgICAgICAtIDVweCAgICAoeHhzKVxuJHNwYWNpbmcteHM6IDAuNjY3cmVtOyAgICAgIC8vIFJlbGF0ZWQgRGlyZWN0bHkgICAgLSAxMHB4ICAgKHhzKVxuJHNwYWNpbmctc206IDFyZW07ICAgICAgICAgIC8vIFJlbGF0ZWQgSW5kaXJlY3RseSAgLSAxNXB4ICAgKHNtKVxuJHNwYWNpbmctbWQ6IDEuMzNyZW07ICAgICAgIC8vIFJlbGF0ZWQgR3JvdXAgICAgICAgLSAyMHB4ICAgKG1kKSAgLy9kZWZhdWx0XG4kc3BhY2luZy1sZzogMnJlbTsgICAgICAgICAgLy8gVW5yZWxhdGVkIEdyb3VwICAgICAtIDMwcHggICAobGcpXG4kc3BhY2luZy14bDogMi42NjdyZW07ICAgICAgLy8gTmV3IFNlY3Rpb24gICAgICAgICAtIDQwcHggICAoeGwpXG4kc3BhY2luZy14eGw6IDRyZW07ICAgICAgICAgLy8gTmV3IFNlY3Rpb24gKExhcmdlKSAtIDYwcHggICAoeHhsKVxuXG4kc3BhY2luZy1zaXplczogKFxuICBcIjBcIjogMCxcbiAgXCI1XCI6ICRzcGFjaW5nLXh4cyxcbiAgXCIxMFwiOiAkc3BhY2luZy14cyxcbiAgXCIxNVwiOiAkc3BhY2luZy1zbSxcbiAgXCIyMFwiOiAkc3BhY2luZy1tZCxcbiAgXCIzMFwiOiAkc3BhY2luZy1sZyxcbiAgXCI0MFwiOiAkc3BhY2luZy14bCxcbiAgXCI2MFwiOiAkc3BhY2luZy14eGwsXG4gIFwiMTUtZW1cIjogMS41cmVtLFxuICBcIjIyLWVtXCI6IDIuMnJlbSxcbiAgXCJ4eHNcIjogJHNwYWNpbmcteHhzLFxuICBcInhzXCI6ICRzcGFjaW5nLXhzLFxuICBcInNtXCI6ICRzcGFjaW5nLXNtLFxuICBcIm1kXCI6ICRzcGFjaW5nLW1kLFxuICBcImxnXCI6ICRzcGFjaW5nLWxnLFxuICBcInhsXCI6ICRzcGFjaW5nLXhsLFxuICBcInh4bFwiOiAkc3BhY2luZy14eGwsICBcbiAgKTtcblxuLyogQW5pbWF0aW9ucyAqL1xuJGFuaW1hdGlvbi14czogYWxsIDAuMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXNoOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tbWQ6IGFsbCAwLjM1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTsgLy9kZWZhdWx0XG4kYW5pbWF0aW9uLWxnOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teGw6IGFsbCAwLjhzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14eGw6IGFsbCAxLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuXG4kYW5pbWF0aW9uLWRlZmF1bHQ6ICRhbmltYXRpb24tbWQ7XG5cbiRhbmltYXRpb24tZmFkZS1pbjogZmFkZS1pbiAxcyBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLW91dDogZmFkZS1vdXQgMXMgZWFzZS1vdXQgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi10b3A6IGZhZGUtaW4tdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi1ib3R0b206IGZhZGUtaW4tYm90dG9tIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXI6IHB1ZmYtaW4tY2VudGVyIDAuN3MgY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXI6IHB1ZmYtb3V0LWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGJvdGg7XG4kYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWw6IHNoYWtlLWhvcml6b250YWwgMC44cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpIGJvdGg7XG4kYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjazogZm9jdXMtaW4tY29udHJhY3QtYmNrIDFzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDsgLy8gZm9yIHRleHRcbiRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcDogc2NhbGUtaW4tdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3A6IHNjYWxlLW91dC12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSBib3RoO1xuJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZTogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgaW5maW5pdGU7XG4kYW5pbWF0aW9uLXB1bHNlLTM6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIDM7XG4kYW5pbWF0aW9uLXB1bHNlLTE6IHNoYWRvdy1wdWxzZSAxcyAxO1xuXG4vLyBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlc2UgbmFtZXMgdG8gYW5pbWF0ZSBIVE1MIGVsZW1lbnRzIG9uIGluaXRpYXRpb25cbiRhbmltYXRpb25zOiAoXG4gIFwiZmFkZS1pblwiOiAkYW5pbWF0aW9uLWZhZGUtaW4sXG4gIFwiZmFkZS1vdXRcIjogJGFuaW1hdGlvbi1mYWRlLW91dCxcbiAgXCJmYWRlLWluLXRvcFwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tdG9wLFxuICBcImZhZGUtaW4tYm90dG9tXCI6ICRhbmltYXRpb24tZmFkZS1pbi1ib3R0b20sXG4gIFwicHVmZi1pbi1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcixcbiAgXCJwdWZmLW91dC1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXIsXG4gIFwic2hha2UtaG9yaXpvbnRhbFwiOiAkYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWwsXG4gIFwiZm9jdXMtaW4tY29udHJhY3QtYmNrXCI6ICRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrLFxuICBcInNjYWxlLWluLXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wLFxuICBcInNjYWxlLW91dC12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3AsXG4gIFwicHVsc2UtaW5maW5pdGVcIjogJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZSxcbiAgXCJwdWxzZS0zXCI6ICRhbmltYXRpb24tcHVsc2UtMyxcbiAgXCJwdWxzZS0xXCI6ICRhbmltYXRpb24tcHVsc2UtMVxuKTtcblxuLyogQm9yZGVycyAqL1xuJGJvcmRlci1zaXplLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItc2l6ZS1tZDogMC4yNXJlbTtcbiRib3JkZXItc2l6ZS1sZzogMC41cmVtO1xuJGJvcmRlci1zaXplLTE6IDFweDtcbiRib3JkZXItc2l6ZS0yOiAycHg7XG4kYm9yZGVyLXNpemUtMzogM3B4O1xuJGJvcmRlci1zaXplLTU6IDVweDtcbiRib3JkZXItc2l6ZS0xMDogMTBweDtcblxuJGJvcmRlci1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItc2l6ZS1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXNpemUtbWQsXG4gIFwibGdcIjogJGJvcmRlci1zaXplLWxnLFxuICBcIjFcIjogJGJvcmRlci1zaXplLTEsXG4gIFwiMlwiOiAkYm9yZGVyLXNpemUtMixcbiAgXCIzXCI6ICRib3JkZXItc2l6ZS0zLFxuICBcIjVcIjogJGJvcmRlci1zaXplLTUsXG4gIFwiMTBcIjogJGJvcmRlci1zaXplLTEwXG4pO1xuXG4vKiBDb3JuZXJzICovXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1tZDogMC4yNXJlbTtcbiRib3JkZXItcmFkaXVzLWxnOiAwLjVyZW07XG4kYm9yZGVyLXJhZGl1cy0yOiAycHg7XG4kYm9yZGVyLXJhZGl1cy00OiA0cHg7XG4kYm9yZGVyLXJhZGl1cy02OiA2cHg7XG4kYm9yZGVyLXJhZGl1cy0xMDogMTBweDtcbiRib3JkZXItcmFkaXVzLTE1OiAxNXB4O1xuJGJvcmRlci1yYWRpdXMtMjA6IDIwcHg7XG4kYm9yZGVyLXJhZGl1cy1oYWxmOiA1MCU7XG4kYm9yZGVyLXJhZGl1cy1mdWxsOiAxMDAlO1xuXG4kYm9yZGVyLXJhZGl1cy1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItcmFkaXVzLXNtLFxuICBcIm1kXCI6ICRib3JkZXItcmFkaXVzLW1kLCAvL2RlZmF1bHRcbiAgXCJsZ1wiOiAkYm9yZGVyLXJhZGl1cy1sZyxcbiAgXCIyXCI6ICRib3JkZXItcmFkaXVzLTIsXG4gIFwiNFwiOiAkYm9yZGVyLXJhZGl1cy00LFxuICBcIjZcIjogJGJvcmRlci1yYWRpdXMtNixcbiAgXCIxMFwiOiAkYm9yZGVyLXJhZGl1cy0xMCxcbiAgXCIxNVwiOiAkYm9yZGVyLXJhZGl1cy0xNSxcbiAgXCIyMFwiOiAkYm9yZGVyLXJhZGl1cy0yMCxcbiAgXCJoYWxmXCI6ICRib3JkZXItcmFkaXVzLWhhbGYsXG4gIFwiZnVsbFwiOiAkYm9yZGVyLXJhZGl1cy1mdWxsLFxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAvL2Rpc3BsYXk6IGZsZXg7XG4gIC8vcGFkZGluZzogMCAxcmVtIDhweDtcbiAgLy9mbGV4LXdyYXA6IHdyYXA7XG4gIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5LTkwO1xuICAvL21heC1oZWlnaHQ6IDEwMHB4O1xuICAvL292ZXJmbG93LXg6IGF1dG87XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLy9kaXNwbGF5OiBmbGV4O1xuICAgIC8vZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAvL2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMTVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMS4xNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAuY29sLWF1dG8ge1xyXG4gICAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIH1cblxuICAgIC5tYXQtY2hpcC1saXN0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcblxuICAgICAgLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5tYXQtY2hpcCB7XG5cblxuICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIC8vbWFyZ2luLXJpZ2h0OiAkc3BhY2luZy1zbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IC44NXJlbSAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvL2Rpc3BsYXk6IGZsZXg7XG4gICAgICAvL2ZsZXgtZ3JvdzogMTtcbiAgICAgIC8vZm9udC1zaXplOiAwLjYyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAvL21hcmdpbjogMCAwIDAgMC41cmVtO1xuICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgIHRyYW5zaXRpb246ICRhbmltYXRpb24tbWQ7XG4gICAgICAvKiY6Zm9jdXMge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH0qL1xuICAgIH1cbiAgfVxuICAvKi5jdXN0b20tYmFkZ2UtdGFnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGJhY2tncm91bmQ6ICRncmV5LTk1O1xuICAgIGNvbG9yOiAkZ3JleS0yMDtcbiAgICBwYWRkaW5nOiAwIDEycHggMCAxMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgJiArIC5jdXN0b20tYmFkZ2UtdGFnIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIGNvbG9yOiAjOGU4ZThlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRkYXJrLWJsdWU7XG4gICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtYmx1ZTtcblxuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6ICMwMDg3ZGM7XG4gICAgICB9XG4gICAgfVxuICB9Ki9cbiAgLyouc2VhcmNoLWljb24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG5cbiAgICAubWF0LWljb24ge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBmb250LXNpemU6IDEuMzEzcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9Ki9cbn1cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQbGVhc2UgY29uc3VsdCB3aXRoIFl1cnkgYmVmb3JlIGFkZGluZyBzb21lIG5ldyBDU1MgdmFyaWFibGVzLiAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogVGFibGUgb2YgQ29udGVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFR5cG9ncmFwaHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVGhlbWUgQ29sb3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNoYWRvd3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU3BhY2luZyBHdWlkZWxpbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBBbmltYXRpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIENvcm5lcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuLyogU2hhZG93cyAqL1xuLyogU3BhY2luZyBHdWlkZWxpbmVzICovXG4vKiBBbmltYXRpb25zICovXG4vKiBCb3JkZXJzICovXG4vKiBDb3JuZXJzICovXG46aG9zdCB7XG4gIC8qLmN1c3RvbS1iYWRnZS10YWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgYmFja2dyb3VuZDogJGdyZXktOTU7XG4gICAgY29sb3I6ICRncmV5LTIwO1xuICAgIHBhZGRpbmc6IDAgMTJweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG5cbiAgICAmICsgLmN1c3RvbS1iYWRnZS10YWcge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAubWF0LWljb24ge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgY29sb3I6ICM4ZThlOGU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJGRhcmstYmx1ZTtcbiAgICAgIGJhY2tncm91bmQ6ICRsaWdodC1ibHVlO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBjb2xvcjogIzAwODdkYztcbiAgICAgIH1cbiAgICB9XG4gIH0qL1xuICAvKi5zZWFyY2gtaWNvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcblxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMS4zMTNyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gIH0qLyB9XG4gIDpob3N0IC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjE1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMTVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgOmhvc3QgLmZvcm0tY29udHJvbCAuY29sLWF1dG8ge1xuICAgICAgZmxleDogMCAxIGF1dG87IH1cbiAgICA6aG9zdCAuZm9ybS1jb250cm9sIC5tYXQtY2hpcC1saXN0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAgICAgOmhvc3QgLmZvcm0tY29udHJvbCAubWF0LWNoaXAtbGlzdCAubWF0LWNoaXAtbGlzdC13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cbiAgICA6aG9zdCAuZm9ybS1jb250cm9sIC5zZWFyY2gtaW5wdXQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgcGFkZGluZzogLjg1cmVtIDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICAgICAgLyomOmZvY3VzIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9Ki8gfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filter-tags-input/filter-tags-input.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filter-tags-input/filter-tags-input.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: FilterTagsInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTagsInputComponent", function() { return FilterTagsInputComponent; });
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

var FilterTagsInputComponent = /** @class */ (function () {
    function FilterTagsInputComponent() {
        this.data = {};
        this.onChangeInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeleteTag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FilterTagsInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterTagsInputComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FilterTagsInputComponent.prototype, "onChangeInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FilterTagsInputComponent.prototype, "onDeleteTag", void 0);
    FilterTagsInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-tags-input',
            template: __webpack_require__(/*! ./filter-tags-input.component.html */ "./src/app/modules/browse-lotteries/components/filter-tags-input/filter-tags-input.component.html"),
            styles: [__webpack_require__(/*! ./filter-tags-input.component.scss */ "./src/app/modules/browse-lotteries/components/filter-tags-input/filter-tags-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterTagsInputComponent);
    return FilterTagsInputComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/filter-selector-modal/filter-selector-modal.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/filter-selector-modal/filter-selector-modal.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 mat-dialog-title class=\"filter-modal-title-section\">\r\n  <p class=\"title\">\r\n    {{displayName}}\r\n  </p>\r\n  <p class=\"close-button\" (click)=\"onDoneClick()\">\r\n    <i class=\"la la-close\"></i>\r\n  </p>\r\n</h5>\r\n<mat-dialog-content\r\n class=\"amenities-filter-form-container\">\r\n  <p>\r\n    <span class=\"control\" (click)=\"selectAll()\" [ngClass]=\"isSelectAllActive()\">\r\n      Select All\r\n    </span>\r\n    /\r\n    <span\r\n      class=\"control\" (click)=\"clearAll()\" [ngClass]=\"isClearAllActive()\">\r\n      Clear All\r\n    </span>\r\n  </p>\r\n  <form [formGroup]=\"filterForm\">\r\n      <div *ngIf=\"!isRadioButtonGroup\">\r\n          <div *ngFor=\"let field of filterValues\" class=\"amenity-form-field\">\r\n              <mat-checkbox\r\n               id=\"{{field.amenityTypeId}}\"\r\n               formControlName=\"{{field.fieldName}}\"\r\n               labelPosition=\"after\">\r\n                {{field.displayName}}\r\n              </mat-checkbox>\r\n            </div>\r\n      </div>\r\n\r\n  </form>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/filter-selector-modal/filter-selector-modal.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/filter-selector-modal/filter-selector-modal.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host .mat-dialog-title {\n  margin: 0;\n  display: flex;\n  justify-content: space-between; }\n:host .control {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvY29tcG9uZW50cy9maWx0ZXItc2VsZWN0b3ItbW9kYWwvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2Jyb3dzZS1sb3R0ZXJpZXMvY29tcG9uZW50cy9maWx0ZXJzL2NvbXBvbmVudHMvZmlsdGVyLXNlbGVjdG9yLW1vZGFsL0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhcHBcXG1vZHVsZXNcXGJyb3dzZS1sb3R0ZXJpZXNcXGNvbXBvbmVudHNcXGZpbHRlcnNcXGNvbXBvbmVudHNcXGZpbHRlci1zZWxlY3Rvci1tb2RhbFxcZmlsdGVyLXNlbGVjdG9yLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBK0ZBLDJCQUFBO0FBYUEsWUFBQTtBQU1BLHVCQUFBO0FBNkJBLGVBQUE7QUF5Q0EsWUFBQTtBQXFCQSxZQUFBO0FDdk5BO0VBRUksU0FBUztFQUNULGFBQWE7RUFDYiw4QkFBOEIsRUFBQTtBQUpsQztFQVFJLGVBQWUsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2Jyb3dzZS1sb3R0ZXJpZXMvY29tcG9uZW50cy9maWx0ZXJzL2NvbXBvbmVudHMvZmlsdGVyLXNlbGVjdG9yLW1vZGFsL2ZpbHRlci1zZWxlY3Rvci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQbGVhc2UgY29uc3VsdCB3aXRoIFl1cnkgYmVmb3JlIGFkZGluZyBzb21lIG5ldyBDU1MgdmFyaWFibGVzLiAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogVGFibGUgb2YgQ29udGVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFR5cG9ncmFwaHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVGhlbWUgQ29sb3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNoYWRvd3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU3BhY2luZyBHdWlkZWxpbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBBbmltYXRpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIENvcm5lcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL1R5cG9ncmFwaHlcbiRmb250LW1haW46IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1oZWFkaW5nOiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtbGluZWF3ZXNvbWU6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE2cHgvMSBcIkxpbmVBd2Vzb21lXCI7XG4kZm9udC1mb250YXdlc29tZTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4kaHRtbC1mb250LXNpemUtbGc6IDE2cHg7XG4kaHRtbC1mb250LXNpemUtbWQ6IDE1cHg7XG4kaHRtbC1mb250LXNpemUtc206IDE0cHg7XG4kaHRtbC1mb250LXNpemUteHM6IDEzcHg7XG5cbiRodG1sLWZvbnQtd2VpZ2h0OiA0MDA7XG5cbi8vIFRoZW1lIENvbG9yc1xuJGNvbG9yLW9mZnNldDogNiU7IC8vIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBsaWdodGVyIGFuZCBkYXJrZXIgdmFyaWVudHMgb2YgYSBzcGVjaWZpYyBjb2xvclxuXG4kYmFzZTogI2ZhZmFmYTsgLy91c2VkIHByaW1hcmlseSBhcyBvZmYtd2hpdGUgYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG5cbiRwcmltYXJ5OiAjMDIwMDYzO1xuJHNlY29uZGFyeTogI2ZhZmFmYTtcbiRzZWNvbmRhcnktYmx1ZTogcmdiKDEwOSwgMTc4LCAyNTUpOyAvLyB3ZSBzaG91bGQgcmVwbGFjZSB0aGlzXG4kYWNjZW50OiAjZmNiMzIzOyAvLyMwMGM1ZGM7XG4kZm9jdXM6ICM5ODE2ZjQ7XG5cbiRzdWNjZXNzOiAjMDBlNmFiO1xuJHdhcm5pbmc6ICNmZmI4MjI7XG4kZGFuZ2VyOiAjZmYyYjJiOyAvLyNmNDUxNmM7XG4kaW5mbzogIzU1NzhlYjsgLy8jMzZhM2Y3O1xuXG4kbWV0YWw6ICNjNGM1ZDY7XG4kbWV0YWwtbGlnaHQ6IGxpZ2h0ZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcbiRtZXRhbC1kYXJrOiBkYXJrZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcblxuLy8gZ3JleXNcbiRsaWdodDogI2ZmZjtcbiRkYXJrOiAjMmMyZTNlO1xuJGdyZXktMjA6ICMzMzMzMzM7XG4kZ3JleS0zMDogIzRkNGQ0ZDtcbiRncmV5LTUwOiAjODA4MDgwO1xuJGdyZXktNzA6ICNiM2IzYjM7XG4kZ3JleS05MDogI2U2ZTZlNjtcbiRncmV5LTk1OiAjZjJmMmYyO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG4vLyBFeHRlbmRlZCBDb2xvciBQYWxldHRlXG4vLyBUT0RPOiBSZXZpZXcgdGhlc2UgY29sb3JzXG4kZGFyay1ibHVlOiAjMDIzOTcwO1xuJGJsdWU6ICMwMTdhY2U7XG4kY2VydWxlYW46ICMwMTdhY2U7XG4kbGlnaHQtYmx1ZTogI2NjZWFmZjtcbiRwYWxlLWJsdWU6ICNmMWY5ZmY7XG4kZGFyay10ZWFsOiAjMDA2NDZlO1xuJHRlYWw6ICMwMGMxZDQ7XG4kbGlnaHQtdGVhbDogI2NjZmFmZjtcbiRwYWxlLXRlYWw6ICNmNWZlZmY7XG4kZGFyay1ncmVlbjogIzBhNWM0MDtcbiRncmVlbjogIzE0Yjg4MTtcbiRsaWdodC1ncmVlbjogI2EzZjVkOTtcbiRwYWxlLWdyZWVuOiAjZjZmZWZiO1xuJGRhcmsteWVsbG93OiAjOTk3NDAwO1xuJHllbGxvdzogI2ZmY2UzMztcbiRsaWdodC15ZWxsb3c6ICNmZmYzY2M7XG4kcGFsZS15ZWxsb3c6ICNmZmZkZjU7XG4kZGFyay1yZWQ6ICM2NjBhMDA7XG4kcmVkOiAjY2MxNDAwO1xuJGxpZ2h0LXJlZDogI2ZmZDFjYztcbiRwYWxlLXJlZDogI2ZmZjZmNTtcblxuXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJhY2NlbnRcIjogJGFjY2VudCxcbiAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLCBcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLCBcbiAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgXCJpbmZvXCI6ICRpbmZvLFxuICBcIm1ldGFsXCI6ICRtZXRhbCxcbiAgXCJmb2N1c1wiOiAkZm9jdXMsXG4gIFwiZ3JleS0yMFwiOiAkZ3JleS0yMCwgXG4gIFwiZ3JleS0zMFwiOiAkZ3JleS0zMCxcbiAgXCJncmV5LTUwXCI6ICRncmV5LTUwLFxuICBcImdyZXktNzBcIjogJGdyZXktNzAsXG4gIFwiZ3JleS05MFwiOiAkZ3JleS05MCxcbiAgXCJncmV5LTk1XCI6ICRncmV5LTk1LFxuICBcImJhc2VcIjogJGJhc2UsXG4gIFwibGlnaHRcIjogJGxpZ2h0LFxuICBcImRhcmtcIjogJGRhcmssXG4gIFwid2hpdGVcIjogJHdoaXRlLFxuICBcImJsYWNrXCI6ICRibGFjayxcbiAgXCJibHVlXCI6ICRibHVlXG4pO1xuXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcbiRndC1zbWFsbC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgc20pICFkZWZhdWx0OyAvLyA1NzZcbiRndC1tZWRpdW0td2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIG1kKSAhZGVmYXVsdDsgLy8gNzY4XG4kZ3QtbGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIGxnKSAhZGVmYXVsdDsgLy8gOTkyXG4kZ3QteGxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCB4bCkgIWRlZmF1bHQ7IC8vIDEyMDBcblxuLyogU2hhZG93cyAqL1xuJHNoYWRvdy1zbTogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEwKTtcbiRzaGFkb3ctbWQ6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4wOCk7IC8vZGVmYXVsdFxuJHNoYWRvdy1sZzogMCAxNXB4IDMwcHggMCByZ2JhKDAsMCwwLDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgwLDAsMCwwLjA4KTtcbiRzaGFkb3ctZWxldmF0ZTogJHNoYWRvdy1sZzsgLy8gb24gaG92ZXJcblxuLyogU3BhY2luZyBHdWlkZWxpbmVzICovXG4kc3BhY2luZy14eHM6IDAuMzMzcmVtOyAgICAgLy8gc21hbGwgZ2FwICAgICAgICAgICAtIDVweCAgICAoeHhzKVxuJHNwYWNpbmcteHM6IDAuNjY3cmVtOyAgICAgIC8vIFJlbGF0ZWQgRGlyZWN0bHkgICAgLSAxMHB4ICAgKHhzKVxuJHNwYWNpbmctc206IDFyZW07ICAgICAgICAgIC8vIFJlbGF0ZWQgSW5kaXJlY3RseSAgLSAxNXB4ICAgKHNtKVxuJHNwYWNpbmctbWQ6IDEuMzNyZW07ICAgICAgIC8vIFJlbGF0ZWQgR3JvdXAgICAgICAgLSAyMHB4ICAgKG1kKSAgLy9kZWZhdWx0XG4kc3BhY2luZy1sZzogMnJlbTsgICAgICAgICAgLy8gVW5yZWxhdGVkIEdyb3VwICAgICAtIDMwcHggICAobGcpXG4kc3BhY2luZy14bDogMi42NjdyZW07ICAgICAgLy8gTmV3IFNlY3Rpb24gICAgICAgICAtIDQwcHggICAoeGwpXG4kc3BhY2luZy14eGw6IDRyZW07ICAgICAgICAgLy8gTmV3IFNlY3Rpb24gKExhcmdlKSAtIDYwcHggICAoeHhsKVxuXG4kc3BhY2luZy1zaXplczogKFxuICBcIjBcIjogMCxcbiAgXCI1XCI6ICRzcGFjaW5nLXh4cyxcbiAgXCIxMFwiOiAkc3BhY2luZy14cyxcbiAgXCIxNVwiOiAkc3BhY2luZy1zbSxcbiAgXCIyMFwiOiAkc3BhY2luZy1tZCxcbiAgXCIzMFwiOiAkc3BhY2luZy1sZyxcbiAgXCI0MFwiOiAkc3BhY2luZy14bCxcbiAgXCI2MFwiOiAkc3BhY2luZy14eGwsXG4gIFwiMTUtZW1cIjogMS41cmVtLFxuICBcIjIyLWVtXCI6IDIuMnJlbSxcbiAgXCJ4eHNcIjogJHNwYWNpbmcteHhzLFxuICBcInhzXCI6ICRzcGFjaW5nLXhzLFxuICBcInNtXCI6ICRzcGFjaW5nLXNtLFxuICBcIm1kXCI6ICRzcGFjaW5nLW1kLFxuICBcImxnXCI6ICRzcGFjaW5nLWxnLFxuICBcInhsXCI6ICRzcGFjaW5nLXhsLFxuICBcInh4bFwiOiAkc3BhY2luZy14eGwsICBcbiAgKTtcblxuLyogQW5pbWF0aW9ucyAqL1xuJGFuaW1hdGlvbi14czogYWxsIDAuMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXNoOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tbWQ6IGFsbCAwLjM1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTsgLy9kZWZhdWx0XG4kYW5pbWF0aW9uLWxnOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teGw6IGFsbCAwLjhzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14eGw6IGFsbCAxLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuXG4kYW5pbWF0aW9uLWRlZmF1bHQ6ICRhbmltYXRpb24tbWQ7XG5cbiRhbmltYXRpb24tZmFkZS1pbjogZmFkZS1pbiAxcyBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLW91dDogZmFkZS1vdXQgMXMgZWFzZS1vdXQgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi10b3A6IGZhZGUtaW4tdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi1ib3R0b206IGZhZGUtaW4tYm90dG9tIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXI6IHB1ZmYtaW4tY2VudGVyIDAuN3MgY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXI6IHB1ZmYtb3V0LWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGJvdGg7XG4kYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWw6IHNoYWtlLWhvcml6b250YWwgMC44cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpIGJvdGg7XG4kYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjazogZm9jdXMtaW4tY29udHJhY3QtYmNrIDFzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDsgLy8gZm9yIHRleHRcbiRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcDogc2NhbGUtaW4tdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3A6IHNjYWxlLW91dC12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSBib3RoO1xuJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZTogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgaW5maW5pdGU7XG4kYW5pbWF0aW9uLXB1bHNlLTM6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIDM7XG4kYW5pbWF0aW9uLXB1bHNlLTE6IHNoYWRvdy1wdWxzZSAxcyAxO1xuXG4vLyBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlc2UgbmFtZXMgdG8gYW5pbWF0ZSBIVE1MIGVsZW1lbnRzIG9uIGluaXRpYXRpb25cbiRhbmltYXRpb25zOiAoXG4gIFwiZmFkZS1pblwiOiAkYW5pbWF0aW9uLWZhZGUtaW4sXG4gIFwiZmFkZS1vdXRcIjogJGFuaW1hdGlvbi1mYWRlLW91dCxcbiAgXCJmYWRlLWluLXRvcFwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tdG9wLFxuICBcImZhZGUtaW4tYm90dG9tXCI6ICRhbmltYXRpb24tZmFkZS1pbi1ib3R0b20sXG4gIFwicHVmZi1pbi1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcixcbiAgXCJwdWZmLW91dC1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXIsXG4gIFwic2hha2UtaG9yaXpvbnRhbFwiOiAkYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWwsXG4gIFwiZm9jdXMtaW4tY29udHJhY3QtYmNrXCI6ICRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrLFxuICBcInNjYWxlLWluLXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wLFxuICBcInNjYWxlLW91dC12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3AsXG4gIFwicHVsc2UtaW5maW5pdGVcIjogJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZSxcbiAgXCJwdWxzZS0zXCI6ICRhbmltYXRpb24tcHVsc2UtMyxcbiAgXCJwdWxzZS0xXCI6ICRhbmltYXRpb24tcHVsc2UtMVxuKTtcblxuLyogQm9yZGVycyAqL1xuJGJvcmRlci1zaXplLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItc2l6ZS1tZDogMC4yNXJlbTtcbiRib3JkZXItc2l6ZS1sZzogMC41cmVtO1xuJGJvcmRlci1zaXplLTE6IDFweDtcbiRib3JkZXItc2l6ZS0yOiAycHg7XG4kYm9yZGVyLXNpemUtMzogM3B4O1xuJGJvcmRlci1zaXplLTU6IDVweDtcbiRib3JkZXItc2l6ZS0xMDogMTBweDtcblxuJGJvcmRlci1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItc2l6ZS1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXNpemUtbWQsXG4gIFwibGdcIjogJGJvcmRlci1zaXplLWxnLFxuICBcIjFcIjogJGJvcmRlci1zaXplLTEsXG4gIFwiMlwiOiAkYm9yZGVyLXNpemUtMixcbiAgXCIzXCI6ICRib3JkZXItc2l6ZS0zLFxuICBcIjVcIjogJGJvcmRlci1zaXplLTUsXG4gIFwiMTBcIjogJGJvcmRlci1zaXplLTEwXG4pO1xuXG4vKiBDb3JuZXJzICovXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1tZDogMC4yNXJlbTtcbiRib3JkZXItcmFkaXVzLWxnOiAwLjVyZW07XG4kYm9yZGVyLXJhZGl1cy0yOiAycHg7XG4kYm9yZGVyLXJhZGl1cy00OiA0cHg7XG4kYm9yZGVyLXJhZGl1cy02OiA2cHg7XG4kYm9yZGVyLXJhZGl1cy0xMDogMTBweDtcbiRib3JkZXItcmFkaXVzLTE1OiAxNXB4O1xuJGJvcmRlci1yYWRpdXMtMjA6IDIwcHg7XG4kYm9yZGVyLXJhZGl1cy1oYWxmOiA1MCU7XG4kYm9yZGVyLXJhZGl1cy1mdWxsOiAxMDAlO1xuXG4kYm9yZGVyLXJhZGl1cy1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItcmFkaXVzLXNtLFxuICBcIm1kXCI6ICRib3JkZXItcmFkaXVzLW1kLCAvL2RlZmF1bHRcbiAgXCJsZ1wiOiAkYm9yZGVyLXJhZGl1cy1sZyxcbiAgXCIyXCI6ICRib3JkZXItcmFkaXVzLTIsXG4gIFwiNFwiOiAkYm9yZGVyLXJhZGl1cy00LFxuICBcIjZcIjogJGJvcmRlci1yYWRpdXMtNixcbiAgXCIxMFwiOiAkYm9yZGVyLXJhZGl1cy0xMCxcbiAgXCIxNVwiOiAkYm9yZGVyLXJhZGl1cy0xNSxcbiAgXCIyMFwiOiAkYm9yZGVyLXJhZGl1cy0yMCxcbiAgXCJoYWxmXCI6ICRib3JkZXItcmFkaXVzLWhhbGYsXG4gIFwiZnVsbFwiOiAkYm9yZGVyLXJhZGl1cy1mdWxsLFxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmNvbnRyb2wge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/filter-selector-modal/filter-selector-modal.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/filter-selector-modal/filter-selector-modal.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: FilterSelectorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSelectorModal", function() { return FilterSelectorModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FilterSelectorModal = /** @class */ (function () {
    function FilterSelectorModal(filterRef, data, fb) {
        this.filterRef = filterRef;
        this.data = data;
        this.fb = fb;
        this.triggerElementRef = data.triggerRef;
        this.displayName = data.displayName;
        this.filterValues = data.sourceData;
        this.selectedFields = data.selectedFields;
        this.filterForm = fb.group({});
        this.buildForm();
    }
    FilterSelectorModal.prototype.ngOnInit = function () {
        var rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
        console.log(rect, rect.bottom);
        this.filterRef.updatePosition({
            left: rect.left - 50 + "px",
            top: rect.bottom + 20 + "px"
        });
    };
    FilterSelectorModal.prototype.onDoneClick = function () {
        this.filterRef.close({ data: this.filterForm.value });
    };
    FilterSelectorModal.prototype.buildForm = function () {
        var _this = this;
        this.filterValues.forEach(function (field) {
            _this.filterForm.addControl(field.fieldName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.selectedFields[field.fieldName]));
        });
    };
    FilterSelectorModal.prototype.selectAll = function () {
        var _this = this;
        Object.keys(this.filterForm.controls).forEach(function (key) { return _this.filterForm.get(key).setValue(true); });
    };
    FilterSelectorModal.prototype.clearAll = function () {
        this.filterForm.reset();
    };
    FilterSelectorModal.prototype.isSelectAllActive = function () {
        var _this = this;
        return {
            active: Object.keys(this.filterForm.controls).some(function (key) {
                return _this.filterForm.get(key).value === null;
            })
        };
    };
    FilterSelectorModal.prototype.isClearAllActive = function () {
        var _this = this;
        return {
            active: Object.keys(this.filterForm.controls).some(function (key) {
                return _this.filterForm.get(key).value === true;
            })
        };
    };
    FilterSelectorModal.prototype.getFilterFormData = function () {
        return this.filterForm.value;
    };
    FilterSelectorModal.prototype.getData = function () {
        return this.filterForm.value;
    };
    FilterSelectorModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filter-selector-modal',
            template: __webpack_require__(/*! ./filter-selector-modal.component.html */ "./src/app/modules/browse-lotteries/components/filters/components/filter-selector-modal/filter-selector-modal.component.html"),
            styles: [__webpack_require__(/*! ./filter-selector-modal.component.scss */ "./src/app/modules/browse-lotteries/components/filters/components/filter-selector-modal/filter-selector-modal.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FilterSelectorModal);
    return FilterSelectorModal;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/household-income-modal/household-income-modal.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/household-income-modal/household-income-modal.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 mat-dialog-title class=\"filter-modal-title-section\">\n  <div class=\"title\">Annual Household Income</div>\n  <span class=\"close-button\" (click)=\"onDoneClick()\">\n    <i class=\"la la-close\"></i>\n  </span>\n</h5>\n\n<mat-dialog-content>\n  <div class=\"row\">\n    <!-- <div class=\"col-md-12\"> -->\n      <!-- <div class=\"form-group margin-bottom-0\"> -->\n        <!--<label></label>-->\n        <!-- <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">$</span>\n          </div>\n          <input digitsAndDecimals [digits]=\"7\" [decimals]=\"2\" type=\"text\" class=\"form-control m-input text-right\"\n                 placeholder=\"0.00\"\n                 [(ngModel)]=\"householdIncome\" />\n        </div> -->\n        <!--<input class=\"form-control\" [(ngModel)]=\"income\" type=\"number\" />-->\n      <!-- </div> -->\n\n      <mat-form-field class=\"col-12\">\n          <input digitsAndDecimals [digits]=\"7\" [decimals]=\"2\" matInput type=\"text\" placeholder=\"Income\" [(ngModel)]=\"householdIncome\">\n          <button mat-button *ngIf=\"householdIncome\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"householdIncome=''\">\n            <mat-icon>close</mat-icon>\n          </button>\n        </mat-form-field>\n    <!-- </div> -->\n  </div>\n  <!--<nouislider #slider [config]=\"sliderConfigDetails\" [(ngModel)]=\"sliderRange\"></nouislider>-->\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/household-income-modal/household-income-modal.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/household-income-modal/household-income-modal.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host .filter-modal-title-section {\n  display: flex;\n  justify-content: space-between; }\n:host .filter-modal-title-section p {\n    margin: 0; }\n:host .mat-dialog-content {\n  width: rem;\n  max-width: calc(100vw - 30px);\n  padding: 1.33rem 1.33rem 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvY29tcG9uZW50cy9ob3VzZWhvbGQtaW5jb21lLW1vZGFsL0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvZmlsdGVycy9jb21wb25lbnRzL2hvdXNlaG9sZC1pbmNvbWUtbW9kYWwvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcbW9kdWxlc1xcYnJvd3NlLWxvdHRlcmllc1xcY29tcG9uZW50c1xcZmlsdGVyc1xcY29tcG9uZW50c1xcaG91c2Vob2xkLWluY29tZS1tb2RhbFxcaG91c2Vob2xkLWluY29tZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQStGQSwyQkFBQTtBQWFBLFlBQUE7QUFNQSx1QkFBQTtBQTZCQSxlQUFBO0FBeUNBLFlBQUE7QUFxQkEsWUFBQTtBQ3ZOQTtFQUVJLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTtBQUhsQztJQU1NLFNBQVMsRUFBQTtBQU5mO0VBV0ksVUFBVTtFQUNWLDZCQUE2QjtFQUM3QiwwQkFBa0MsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2Jyb3dzZS1sb3R0ZXJpZXMvY29tcG9uZW50cy9maWx0ZXJzL2NvbXBvbmVudHMvaG91c2Vob2xkLWluY29tZS1tb2RhbC9ob3VzZWhvbGQtaW5jb21lLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vVHlwb2dyYXBoeVxuJGZvbnQtbWFpbjogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LWhlYWRpbmc6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1saW5lYXdlc29tZTogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweC8xIFwiTGluZUF3ZXNvbWVcIjtcbiRmb250LWZvbnRhd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiRodG1sLWZvbnQtc2l6ZS1sZzogMTZweDtcbiRodG1sLWZvbnQtc2l6ZS1tZDogMTVweDtcbiRodG1sLWZvbnQtc2l6ZS1zbTogMTRweDtcbiRodG1sLWZvbnQtc2l6ZS14czogMTNweDtcblxuJGh0bWwtZm9udC13ZWlnaHQ6IDQwMDtcblxuLy8gVGhlbWUgQ29sb3JzXG4kY29sb3Itb2Zmc2V0OiA2JTsgLy8gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIGxpZ2h0ZXIgYW5kIGRhcmtlciB2YXJpZW50cyBvZiBhIHNwZWNpZmljIGNvbG9yXG5cbiRiYXNlOiAjZmFmYWZhOyAvL3VzZWQgcHJpbWFyaWx5IGFzIG9mZi13aGl0ZSBib2R5IGJhY2tncm91bmQgY29sb3JcblxuJHByaW1hcnk6ICMwMjAwNjM7XG4kc2Vjb25kYXJ5OiAjZmFmYWZhO1xuJHNlY29uZGFyeS1ibHVlOiByZ2IoMTA5LCAxNzgsIDI1NSk7IC8vIHdlIHNob3VsZCByZXBsYWNlIHRoaXNcbiRhY2NlbnQ6ICNmY2IzMjM7IC8vIzAwYzVkYztcbiRmb2N1czogIzk4MTZmNDtcblxuJHN1Y2Nlc3M6ICMwMGU2YWI7XG4kd2FybmluZzogI2ZmYjgyMjtcbiRkYW5nZXI6ICNmZjJiMmI7IC8vI2Y0NTE2YztcbiRpbmZvOiAjNTU3OGViOyAvLyMzNmEzZjc7XG5cbiRtZXRhbDogI2M0YzVkNjtcbiRtZXRhbC1saWdodDogbGlnaHRlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuJG1ldGFsLWRhcms6IGRhcmtlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuXG4vLyBncmV5c1xuJGxpZ2h0OiAjZmZmO1xuJGRhcms6ICMyYzJlM2U7XG4kZ3JleS0yMDogIzMzMzMzMztcbiRncmV5LTMwOiAjNGQ0ZDRkO1xuJGdyZXktNTA6ICM4MDgwODA7XG4kZ3JleS03MDogI2IzYjNiMztcbiRncmV5LTkwOiAjZTZlNmU2O1xuJGdyZXktOTU6ICNmMmYyZjI7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbi8vIEV4dGVuZGVkIENvbG9yIFBhbGV0dGVcbi8vIFRPRE86IFJldmlldyB0aGVzZSBjb2xvcnNcbiRkYXJrLWJsdWU6ICMwMjM5NzA7XG4kYmx1ZTogIzAxN2FjZTtcbiRjZXJ1bGVhbjogIzAxN2FjZTtcbiRsaWdodC1ibHVlOiAjY2NlYWZmO1xuJHBhbGUtYmx1ZTogI2YxZjlmZjtcbiRkYXJrLXRlYWw6ICMwMDY0NmU7XG4kdGVhbDogIzAwYzFkNDtcbiRsaWdodC10ZWFsOiAjY2NmYWZmO1xuJHBhbGUtdGVhbDogI2Y1ZmVmZjtcbiRkYXJrLWdyZWVuOiAjMGE1YzQwO1xuJGdyZWVuOiAjMTRiODgxO1xuJGxpZ2h0LWdyZWVuOiAjYTNmNWQ5O1xuJHBhbGUtZ3JlZW46ICNmNmZlZmI7XG4kZGFyay15ZWxsb3c6ICM5OTc0MDA7XG4keWVsbG93OiAjZmZjZTMzO1xuJGxpZ2h0LXllbGxvdzogI2ZmZjNjYztcbiRwYWxlLXllbGxvdzogI2ZmZmRmNTtcbiRkYXJrLXJlZDogIzY2MGEwMDtcbiRyZWQ6ICNjYzE0MDA7XG4kbGlnaHQtcmVkOiAjZmZkMWNjO1xuJHBhbGUtcmVkOiAjZmZmNmY1O1xuXG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcImFjY2VudFwiOiAkYWNjZW50LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsIFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmcsIFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImluZm9cIjogJGluZm8sXG4gIFwibWV0YWxcIjogJG1ldGFsLFxuICBcImZvY3VzXCI6ICRmb2N1cyxcbiAgXCJncmV5LTIwXCI6ICRncmV5LTIwLCBcbiAgXCJncmV5LTMwXCI6ICRncmV5LTMwLFxuICBcImdyZXktNTBcIjogJGdyZXktNTAsXG4gIFwiZ3JleS03MFwiOiAkZ3JleS03MCxcbiAgXCJncmV5LTkwXCI6ICRncmV5LTkwLFxuICBcImdyZXktOTVcIjogJGdyZXktOTUsXG4gIFwiYmFzZVwiOiAkYmFzZSxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJ3aGl0ZVwiOiAkd2hpdGUsXG4gIFwiYmxhY2tcIjogJGJsYWNrLFxuICBcImJsdWVcIjogJGJsdWVcbik7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuJGd0LXNtYWxsLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBzbSkgIWRlZmF1bHQ7IC8vIDU3NlxuJGd0LW1lZGl1bS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbWQpICFkZWZhdWx0OyAvLyA3NjhcbiRndC1sYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbGcpICFkZWZhdWx0OyAvLyA5OTJcbiRndC14bGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHhsKSAhZGVmYXVsdDsgLy8gMTIwMFxuXG4vKiBTaGFkb3dzICovXG4kc2hhZG93LXNtOiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xuJHNoYWRvdy1tZDogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjA4KTsgLy9kZWZhdWx0XG4kc2hhZG93LWxnOiAwIDE1cHggMzBweCAwIHJnYmEoMCwwLDAsMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuJHNoYWRvdy1lbGV2YXRlOiAkc2hhZG93LWxnOyAvLyBvbiBob3ZlclxuXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbiRzcGFjaW5nLXh4czogMC4zMzNyZW07ICAgICAvLyBzbWFsbCBnYXAgICAgICAgICAgIC0gNXB4ICAgICh4eHMpXG4kc3BhY2luZy14czogMC42NjdyZW07ICAgICAgLy8gUmVsYXRlZCBEaXJlY3RseSAgICAtIDEwcHggICAoeHMpXG4kc3BhY2luZy1zbTogMXJlbTsgICAgICAgICAgLy8gUmVsYXRlZCBJbmRpcmVjdGx5ICAtIDE1cHggICAoc20pXG4kc3BhY2luZy1tZDogMS4zM3JlbTsgICAgICAgLy8gUmVsYXRlZCBHcm91cCAgICAgICAtIDIwcHggICAobWQpICAvL2RlZmF1bHRcbiRzcGFjaW5nLWxnOiAycmVtOyAgICAgICAgICAvLyBVbnJlbGF0ZWQgR3JvdXAgICAgIC0gMzBweCAgIChsZylcbiRzcGFjaW5nLXhsOiAyLjY2N3JlbTsgICAgICAvLyBOZXcgU2VjdGlvbiAgICAgICAgIC0gNDBweCAgICh4bClcbiRzcGFjaW5nLXh4bDogNHJlbTsgICAgICAgICAvLyBOZXcgU2VjdGlvbiAoTGFyZ2UpIC0gNjBweCAgICh4eGwpXG5cbiRzcGFjaW5nLXNpemVzOiAoXG4gIFwiMFwiOiAwLFxuICBcIjVcIjogJHNwYWNpbmcteHhzLFxuICBcIjEwXCI6ICRzcGFjaW5nLXhzLFxuICBcIjE1XCI6ICRzcGFjaW5nLXNtLFxuICBcIjIwXCI6ICRzcGFjaW5nLW1kLFxuICBcIjMwXCI6ICRzcGFjaW5nLWxnLFxuICBcIjQwXCI6ICRzcGFjaW5nLXhsLFxuICBcIjYwXCI6ICRzcGFjaW5nLXh4bCxcbiAgXCIxNS1lbVwiOiAxLjVyZW0sXG4gIFwiMjItZW1cIjogMi4ycmVtLFxuICBcInh4c1wiOiAkc3BhY2luZy14eHMsXG4gIFwieHNcIjogJHNwYWNpbmcteHMsXG4gIFwic21cIjogJHNwYWNpbmctc20sXG4gIFwibWRcIjogJHNwYWNpbmctbWQsXG4gIFwibGdcIjogJHNwYWNpbmctbGcsXG4gIFwieGxcIjogJHNwYWNpbmcteGwsXG4gIFwieHhsXCI6ICRzcGFjaW5nLXh4bCwgIFxuICApO1xuXG4vKiBBbmltYXRpb25zICovXG4kYW5pbWF0aW9uLXhzOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tc2g6IGFsbCAwLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1tZDogYWxsIDAuMzVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpOyAvL2RlZmF1bHRcbiRhbmltYXRpb24tbGc6IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14bDogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXh4bDogYWxsIDEuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cbiRhbmltYXRpb24tZGVmYXVsdDogJGFuaW1hdGlvbi1tZDtcblxuJGFuaW1hdGlvbi1mYWRlLWluOiBmYWRlLWluIDFzIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtb3V0OiBmYWRlLW91dCAxcyBlYXNlLW91dCBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLXRvcDogZmFkZS1pbi10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbTogZmFkZS1pbi1ib3R0b20gMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcjogcHVmZi1pbi1jZW50ZXIgMC43cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcjogcHVmZi1vdXQtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgYm90aDtcbiRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbDogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcbiRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoOyAvLyBmb3IgdGV4dFxuJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wOiBzY2FsZS1pbi12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcDogc2NhbGUtb3V0LXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG4kYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyBpbmZpbml0ZTtcbiRhbmltYXRpb24tcHVsc2UtMzogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgMztcbiRhbmltYXRpb24tcHVsc2UtMTogc2hhZG93LXB1bHNlIDFzIDE7XG5cbi8vIFlvdSBjYW4gdXNlIGFueSBvZiB0aGVzZSBuYW1lcyB0byBhbmltYXRlIEhUTUwgZWxlbWVudHMgb24gaW5pdGlhdGlvblxuJGFuaW1hdGlvbnM6IChcbiAgXCJmYWRlLWluXCI6ICRhbmltYXRpb24tZmFkZS1pbixcbiAgXCJmYWRlLW91dFwiOiAkYW5pbWF0aW9uLWZhZGUtb3V0LFxuICBcImZhZGUtaW4tdG9wXCI6ICRhbmltYXRpb24tZmFkZS1pbi10b3AsXG4gIFwiZmFkZS1pbi1ib3R0b21cIjogJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbSxcbiAgXCJwdWZmLWluLWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyLFxuICBcInB1ZmYtb3V0LWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcixcbiAgXCJzaGFrZS1ob3Jpem9udGFsXCI6ICRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbCxcbiAgXCJmb2N1cy1pbi1jb250cmFjdC1iY2tcIjogJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2ssXG4gIFwic2NhbGUtaW4tdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3AsXG4gIFwic2NhbGUtb3V0LXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcCxcbiAgXCJwdWxzZS1pbmZpbml0ZVwiOiAkYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlLFxuICBcInB1bHNlLTNcIjogJGFuaW1hdGlvbi1wdWxzZS0zLFxuICBcInB1bHNlLTFcIjogJGFuaW1hdGlvbi1wdWxzZS0xXG4pO1xuXG4vKiBCb3JkZXJzICovXG4kYm9yZGVyLXNpemUtc206IDAuMTI1cmVtO1xuJGJvcmRlci1zaXplLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1zaXplLWxnOiAwLjVyZW07XG4kYm9yZGVyLXNpemUtMTogMXB4O1xuJGJvcmRlci1zaXplLTI6IDJweDtcbiRib3JkZXItc2l6ZS0zOiAzcHg7XG4kYm9yZGVyLXNpemUtNTogNXB4O1xuJGJvcmRlci1zaXplLTEwOiAxMHB4O1xuXG4kYm9yZGVyLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1zaXplLXNtLFxuICBcIm1kXCI6ICRib3JkZXItc2l6ZS1tZCxcbiAgXCJsZ1wiOiAkYm9yZGVyLXNpemUtbGcsXG4gIFwiMVwiOiAkYm9yZGVyLXNpemUtMSxcbiAgXCIyXCI6ICRib3JkZXItc2l6ZS0yLFxuICBcIjNcIjogJGJvcmRlci1zaXplLTMsXG4gIFwiNVwiOiAkYm9yZGVyLXNpemUtNSxcbiAgXCIxMFwiOiAkYm9yZGVyLXNpemUtMTBcbik7XG5cbi8qIENvcm5lcnMgKi9cbiRib3JkZXItcmFkaXVzLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItcmFkaXVzLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNXJlbTtcbiRib3JkZXItcmFkaXVzLTI6IDJweDtcbiRib3JkZXItcmFkaXVzLTQ6IDRweDtcbiRib3JkZXItcmFkaXVzLTY6IDZweDtcbiRib3JkZXItcmFkaXVzLTEwOiAxMHB4O1xuJGJvcmRlci1yYWRpdXMtMTU6IDE1cHg7XG4kYm9yZGVyLXJhZGl1cy0yMDogMjBweDtcbiRib3JkZXItcmFkaXVzLWhhbGY6IDUwJTtcbiRib3JkZXItcmFkaXVzLWZ1bGw6IDEwMCU7XG5cbiRib3JkZXItcmFkaXVzLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1yYWRpdXMtc20sXG4gIFwibWRcIjogJGJvcmRlci1yYWRpdXMtbWQsIC8vZGVmYXVsdFxuICBcImxnXCI6ICRib3JkZXItcmFkaXVzLWxnLFxuICBcIjJcIjogJGJvcmRlci1yYWRpdXMtMixcbiAgXCI0XCI6ICRib3JkZXItcmFkaXVzLTQsXG4gIFwiNlwiOiAkYm9yZGVyLXJhZGl1cy02LFxuICBcIjEwXCI6ICRib3JkZXItcmFkaXVzLTEwLFxuICBcIjE1XCI6ICRib3JkZXItcmFkaXVzLTE1LFxuICBcIjIwXCI6ICRib3JkZXItcmFkaXVzLTIwLFxuICBcImhhbGZcIjogJGJvcmRlci1yYWRpdXMtaGFsZixcbiAgXCJmdWxsXCI6ICRib3JkZXItcmFkaXVzLWZ1bGwsXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5maWx0ZXItbW9kYWwtdGl0bGUtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIHdpZHRoOiByZW07XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzMHB4KTtcclxuICAgIHBhZGRpbmc6ICRzcGFjaW5nLW1kICRzcGFjaW5nLW1kIDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/household-income-modal/household-income-modal.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/household-income-modal/household-income-modal.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: HouseholdIncomeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseholdIncomeModalComponent", function() { return HouseholdIncomeModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HouseholdIncomeModalComponent = /** @class */ (function () {
    //@ViewChild('slider', { read: ElementRef }) slider: ElementRef;
    //sliderRange: any[];
    //sliderConfigDetails: any = {
    //  connect: true,
    //  start: this.sliderRange,
    //  step: 100,
    //  tooltips: true,
    //  range: {
    //    min: 0,
    //    max: 0
    //  }
    //};
    function HouseholdIncomeModalComponent(filterRef, data) {
        this.filterRef = filterRef;
        this.data = data;
        this.triggerElementRef = data.triggerRef;
        //this.sliderConfigDetails.range.min = data.min;
        //this.sliderConfigDetails.range.max = data.max;
        if (data.householdIncome) {
            this.householdIncome = data.householdIncome;
        }
        else {
            this.householdIncome = null;
        }
    }
    HouseholdIncomeModalComponent.prototype.ngOnInit = function () {
        var rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
        console.log(rect, rect.bottom);
        this.filterRef.updatePosition({
            left: rect.left - 0 + "px",
            top: rect.bottom + 20 + "px"
        });
    };
    HouseholdIncomeModalComponent.prototype.onDoneClick = function () {
        //this.sliderConfigDetails.start = this.sliderRange;
        this.filterRef.close({ data: this.householdIncome });
    };
    HouseholdIncomeModalComponent.prototype.getData = function () {
        return this.householdIncome;
    };
    HouseholdIncomeModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-household-income-modal',
            template: __webpack_require__(/*! ./household-income-modal.component.html */ "./src/app/modules/browse-lotteries/components/filters/components/household-income-modal/household-income-modal.component.html"),
            styles: [__webpack_require__(/*! ./household-income-modal.component.scss */ "./src/app/modules/browse-lotteries/components/filters/components/household-income-modal/household-income-modal.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], HouseholdIncomeModalComponent);
    return HouseholdIncomeModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottary.validation.class.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottary.validation.class.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: customValidatorFn, validateMinMax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customValidatorFn", function() { return customValidatorFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMinMax", function() { return validateMinMax; });
function customValidatorFn(minControl, maxControl) {
    var _this = this;
    return function (group) { return validateMinMax.call(_this, group, minControl, maxControl); };
}
function validateMinMax(group, minControlName, maxControlName) {
    //console.log('GROUP: ', group);
    var minControl = group.get(minControlName), maxControl = group.get(maxControlName);
    var minValue = parseInt(minControl.value), maxValue = parseInt(maxControl.value);
    if ((!minValue && minValue !== 0) || (!maxValue && maxValue !== 0) || minValue <= maxValue) {
        if (minControl.hasError('maxNumber') || maxControl.hasError('minNumber')) {
            if (minControl.hasError('maxNumber')) {
                delete minControl.errors['maxNumber'];
                minControl.updateValueAndValidity({ onlySelf: true });
            }
            if (maxControl.hasError('minNumber')) {
                delete maxControl.errors['minNumber'];
                maxControl.updateValueAndValidity({ onlySelf: true });
            }
        }
        if (group.hasError('invalidControlValues')) {
            delete group.errors['invalidControlValues'];
            group.updateValueAndValidity({ onlySelf: true });
        }
        return null;
    }
    return { invalidControlValues: true };
}


/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottery-filters-modal.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottery-filters-modal.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"filtersForm\">\r\n  <h2 mat-dialog-title>Refine Lottery Search</h2>\r\n  <mat-dialog-content class=\"mat-typography\">\r\n    <!--<h3>Household Info</h3>-->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">\r\n        <div class=\"form-group\">\r\n          <label>Your household size</label>\r\n          <div>\r\n            <dropdown-selector [control]=\"householdSizeFormControl\">\r\n              <dropdown-selector-option-radiobtn class=\"d-block\"\r\n                                        *ngFor=\"let householdSize of householdSizes\"\r\n                                        [value]=\"householdSize.value\"\r\n                                        [label]=\"householdSize.name\">\r\n                {{householdSize.name}}\r\n              </dropdown-selector-option-radiobtn>\r\n            </dropdown-selector>\r\n\r\n            <!--<select class=\"form-control m-input\" ngDefaultControl name=\"householdSize\"-->\r\n            <!--[formControl]=\"householdSizeFormControl\">-->\r\n            <!--<option [ngValue]=\"null\">Any</option>-->\r\n            <!--<option *ngFor=\"let householdSize of householdSizes\"-->\r\n            <!--[value]=\"householdSize.value\">-->\r\n            <!--{{householdSize.name}}-->\r\n            <!--</option>-->\r\n            <!--</select>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">\r\n        <div class=\"form-group\">\r\n          <label>Your household income</label>\r\n          <div>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">$</span>\r\n              </div>\r\n              <input digitsAndDecimals [digits]=\"7\" [decimals]=\"2\" type=\"text\" class=\"form-control m-input\"\r\n                     placeholder=\"0.00\"\r\n                     [formControl]=\"householdIncomeFormControl\"/>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\" *ngIf=\"visibleFiltersConf.monthlyRent\">\r\n        <div class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <label>Minimum Monthly Rent</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">$</span>\r\n                </div>\r\n                <input numbersOnly maxlength=\"5\" type=\"text\" id=\"rentMinFormControl\" name=\"rentMinFormControl\"\r\n                       class=\"form-control m-input\"\r\n                       formControlName=\"rentMinFormControl\"/>\r\n              </div>\r\n            </div>\r\n            <!--<div class=\"col-2 align-items-center display-flex justify-content-center\">\r\n              <hr class=\"m-separator w-100\">\r\n            </div>-->\r\n            <div class=\"col-6\">\r\n              <label>Maximum Monthly Rent</label>\r\n              <div class=\"input-group\"\r\n                   [class.shake-horizontal]=\"(rentMaxFormControl.invalid && rentMaxFormControl.errors?.minNumber) || (rentMinFormControl.invalid && rentMinFormControl.errors?.maxNumber)\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">$</span>\r\n                </div>\r\n                <input numbersOnly maxlength=\"5\" type=\"text\" id=\"rentMaxFormControl\" name=\"rentMaxFormControl\"\r\n                       class=\"form-control m-input\"\r\n                       formControlName=\"rentMaxFormControl\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <div\r\n              *ngIf=\"(rentMaxFormControl.invalid && rentMaxFormControl.errors?.minNumber) || (rentMinFormControl.invalid && rentMinFormControl.errors?.maxNumber)\"\r\n              class=\"form-control-feedback block fade-in\">\r\n              Max monthly rent must be greater than min monthly rent\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\" *ngIf=\"visibleFiltersConf?.price\">\r\n        <div class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <label>Minimum Sale Price</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">$</span>\r\n                </div>\r\n                <input numbersOnly maxlength=\"7\" type=\"text\" id=\"priceMinFormControl\" name=\"priceMinFormControl\"\r\n                       class=\"form-control m-input\"\r\n                       formControlName=\"priceMinFormControl\"/>\r\n              </div>\r\n            </div>\r\n            <!--<div class=\"col-2 align-items-center display-flex justify-content-center\">\r\n              <hr class=\"m-separator w-100\">\r\n            </div>-->\r\n            <div class=\"col-6\">\r\n              <label>Maximum Sale Price</label>\r\n              <div class=\"input-group\"\r\n                   [class.shake-horizontal]=\"(priceMaxFormControl.invalid && priceMaxFormControl.errors?.minNumber) || (priceMinFormControl.invalid && priceMinFormControl.errors?.maxNumber)\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">$</span>\r\n                </div>\r\n                <input numbersOnly maxlength=\"7\" type=\"text\" id=\"priceMaxFormControl\" name=\"priceMaxFormControl\"\r\n                       class=\"form-control m-input\"\r\n                       [formControl]=\"priceMaxFormControl\"/>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div\r\n                *ngIf=\"(priceMaxFormControl.invalid && priceMaxFormControl.errors?.minNumber) || (priceMinFormControl.invalid && priceMinFormControl.errors?.maxNumber)\"\r\n                class=\"form-control-feedback fade-in\">\r\n                Max price must be greater than min price\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\r\n        <div class=\"form-group\">\r\n          <label># of Bedrooms</label>\r\n          <dropdown-selector [control]=\"unitLayoutTypeFormControl\">\r\n            <dropdown-selector-option-checkbox class=\"d-block\"\r\n                                      *ngFor=\"let unitType of unitLayoutTypes\"\r\n                                      [value]=\"unitType.unitLayoutTypeId\"\r\n                                      [label]=\"unitType.name\">\r\n              {{unitType.name}}\r\n            </dropdown-selector-option-checkbox>\r\n          </dropdown-selector>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <label>Neighborhoods</label>\r\n        <neighborhoods [selectedNeighborhoods]=\"tempFiltersModel.neighborhoods\"\r\n                       [sourceData]=\"neighborhoods\"></neighborhoods>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Nearby Subways</label>\r\n          <dropdown-selector [control]=\"subwaysFormControl\" placement=\"top-left\">\r\n            <div class=\"row container\">\r\n              <div class=\"col-4\">\r\n                <dropdown-selector-option-checkbox class=\"d-block\"\r\n                                          *ngFor=\"let subway of subways | slice:0:8\"\r\n                                          [value]=\"subway.id\"\r\n                                          [label]=\"subway.id\">\r\n                  <div class=\"subway-type-iconset subway-type-{{subway.id}}\">{{subway.id}}</div>\r\n                </dropdown-selector-option-checkbox>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <dropdown-selector-option-checkbox class=\"d-block\"\r\n                                          *ngFor=\"let subway of subways | slice:8:16\"\r\n                                          [value]=\"subway.id\"\r\n                                          [label]=\"subway.id\">\r\n                  <div class=\"subway-type-iconset subway-type-{{subway.id}}\">{{subway.id}}</div>\r\n                </dropdown-selector-option-checkbox>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <dropdown-selector-option-checkbox class=\"d-block\"\r\n                                          *ngFor=\"let subway of subways | slice:16\"\r\n                                          [value]=\"subway.id\"\r\n                                          [label]=\"subway.id\">\r\n                  <div class=\"subway-type-iconset subway-type-{{subway.id}}\">{{subway.id}}</div>\r\n                </dropdown-selector-option-checkbox>\r\n              </div>\r\n            </div>\r\n          </dropdown-selector>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\" *ngIf=\"visibleFiltersConf.ownershipType\">\r\n        <div class=\"form-group\">\r\n          <label>Property Ownership</label>\r\n          <dropdown-selector [control]=\"ownershipTypeFormControl\">\r\n            <dropdown-selector-option-checkbox class=\"d-block\"\r\n                                      *ngFor=\"let propertyType of propertyTypes\"\r\n                                      [value]=\"propertyType.id\"\r\n                                      [label]=\"propertyType.name\">\r\n              {{propertyType.name}}\r\n            </dropdown-selector-option-checkbox>\r\n          </dropdown-selector>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Amenities</label>\r\n          <dropdown-selector [control]=\"amenitiesFormControl\" placement=\"top-left\">\r\n            <dropdown-selector-option-checkbox class=\"d-block\"\r\n                                      *ngFor=\"let amenity of amenities\"\r\n                                      [value]=\"amenity.amenityTypeId\"\r\n                                      [label]=\"amenity.amenityName\">\r\n              {{amenity.amenityName}}\r\n            </dropdown-selector-option-checkbox>\r\n          </dropdown-selector>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align=\"end\">\r\n    <button class=\"btn btn-primary\" (click)=\"closeAndSearch()\" [disabled]=\"filtersForm.invalid\"><i\r\n      class=\"la la-search\"></i> Search\r\n    </button>\r\n    <button class=\"btn btn-secondary\" mat-dialog-close><i class=\"la la-times\"></i> Cancel</button>\r\n  </mat-dialog-actions>\r\n\r\n  <!--<div>FILTERS MODEL: {{tempFiltersModel | json }}</div>-->\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottery-filters-modal.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottery-filters-modal.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host {\n  max-width: 992px;\n  /*.filter-modal {\r\n    width: 800px;\r\n  }*/ }\n/deep/ {\n  /* TODO: Replace with global subway-iconset */\n  /*.subway-icon {\r\n    width: 1.563rem;\r\n    height: 1.563rem;\r\n    background-color: #bbb;\r\n    color: #ffffff;\r\n    border-radius: 50%;\r\n    font-size: 0.875rem;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    display: inline-block;\r\n    line-height: 1.7858;\r\n  }\r\n\r\n  .red {\r\n    background-color: #ee352e;\r\n  }\r\n\r\n  .green {\r\n    background-color: #00933c;\r\n  }\r\n\r\n  .purple {\r\n    background-color: #b933ad;\r\n  }\r\n\r\n  .blue {\r\n    background-color: #0039a6;\r\n  }\r\n\r\n  .orange {\r\n    background-color: #ff6319;\r\n  }\r\n\r\n  .limeGreen {\r\n    background-color: #6cbe45;\r\n  }\r\n\r\n  .brown {\r\n    background-color: #996633;\r\n  }\r\n\r\n  .lightGray {\r\n    background-color: #a7a9ac;\r\n  }\r\n\r\n  .darkGray {\r\n    background-color: #808183;\r\n  }\r\n\r\n  .yellow {\r\n    background-color: #fccc0a;\r\n    color: #000000;\r\n  }*/ }\n/deep/ .mat-dialog-container {\n    overflow: visible; }\n/deep/ .mat-dialog-container .mat-dialog-content {\n      overflow: visible; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvY29tcG9uZW50cy9sb3R0ZXJ5LWZpbHRlcnMtbW9kYWwvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2Jyb3dzZS1sb3R0ZXJpZXMvY29tcG9uZW50cy9maWx0ZXJzL2NvbXBvbmVudHMvbG90dGVyeS1maWx0ZXJzLW1vZGFsL0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhcHBcXG1vZHVsZXNcXGJyb3dzZS1sb3R0ZXJpZXNcXGNvbXBvbmVudHNcXGZpbHRlcnNcXGNvbXBvbmVudHNcXGxvdHRlcnktZmlsdGVycy1tb2RhbFxcbG90dGVyeS1maWx0ZXJzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvZmlsdGVycy9jb21wb25lbnRzL2xvdHRlcnktZmlsdGVycy1tb2RhbC9sb3R0ZXJ5LWZpbHRlcnMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUErRkEsMkJBQUE7QUFhQSxZQUFBO0FBTUEsdUJBQUE7QUE2QkEsZUFBQTtBQXlDQSxZQUFBO0FBcUJBLFlBQUE7QUN0TkE7RUFDRSxnQkQ0R1M7RUMxR1Q7O0lDaUJFLEVEZkM7QUFHTDtFQVFFLDZDQUFBO0VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMyREUsRURQQztBQTdETDtJQUVJLGlCQUFpQixFQUFBO0FBRnJCO01BS00saUJBQWlCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvZmlsdGVycy9jb21wb25lbnRzL2xvdHRlcnktZmlsdGVycy1tb2RhbC9sb3R0ZXJ5LWZpbHRlcnMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIElNUE9SVEFOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUGxlYXNlIGNvbnN1bHQgd2l0aCBZdXJ5IGJlZm9yZSBhZGRpbmcgc29tZSBuZXcgQ1NTIHZhcmlhYmxlcy4gICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFRhYmxlIG9mIENvbnRlbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUeXBvZ3JhcGh5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFRoZW1lIENvbG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTaGFkb3dzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNwYWNpbmcgR3VpZGVsaW5lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQW5pbWF0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBDb3JuZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9UeXBvZ3JhcGh5XG4kZm9udC1tYWluOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtaGVhZGluZzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiRmb250LWxpbmVhd2Vzb21lOiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNnB4LzEgXCJMaW5lQXdlc29tZVwiO1xuJGZvbnQtZm9udGF3ZXNvbWU6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuJGh0bWwtZm9udC1zaXplLWxnOiAxNnB4O1xuJGh0bWwtZm9udC1zaXplLW1kOiAxNXB4O1xuJGh0bWwtZm9udC1zaXplLXNtOiAxNHB4O1xuJGh0bWwtZm9udC1zaXplLXhzOiAxM3B4O1xuXG4kaHRtbC1mb250LXdlaWdodDogNDAwO1xuXG4vLyBUaGVtZSBDb2xvcnNcbiRjb2xvci1vZmZzZXQ6IDYlOyAvLyB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgbGlnaHRlciBhbmQgZGFya2VyIHZhcmllbnRzIG9mIGEgc3BlY2lmaWMgY29sb3JcblxuJGJhc2U6ICNmYWZhZmE7IC8vdXNlZCBwcmltYXJpbHkgYXMgb2ZmLXdoaXRlIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuXG4kcHJpbWFyeTogIzAyMDA2MztcbiRzZWNvbmRhcnk6ICNmYWZhZmE7XG4kc2Vjb25kYXJ5LWJsdWU6IHJnYigxMDksIDE3OCwgMjU1KTsgLy8gd2Ugc2hvdWxkIHJlcGxhY2UgdGhpc1xuJGFjY2VudDogI2ZjYjMyMzsgLy8jMDBjNWRjO1xuJGZvY3VzOiAjOTgxNmY0O1xuXG4kc3VjY2VzczogIzAwZTZhYjtcbiR3YXJuaW5nOiAjZmZiODIyO1xuJGRhbmdlcjogI2ZmMmIyYjsgLy8jZjQ1MTZjO1xuJGluZm86ICM1NTc4ZWI7IC8vIzM2YTNmNztcblxuJG1ldGFsOiAjYzRjNWQ2O1xuJG1ldGFsLWxpZ2h0OiBsaWdodGVuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG4kbWV0YWwtZGFyazogZGFya2VuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG5cbi8vIGdyZXlzXG4kbGlnaHQ6ICNmZmY7XG4kZGFyazogIzJjMmUzZTtcbiRncmV5LTIwOiAjMzMzMzMzO1xuJGdyZXktMzA6ICM0ZDRkNGQ7XG4kZ3JleS01MDogIzgwODA4MDtcbiRncmV5LTcwOiAjYjNiM2IzO1xuJGdyZXktOTA6ICNlNmU2ZTY7XG4kZ3JleS05NTogI2YyZjJmMjtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZjtcblxuLy8gRXh0ZW5kZWQgQ29sb3IgUGFsZXR0ZVxuLy8gVE9ETzogUmV2aWV3IHRoZXNlIGNvbG9yc1xuJGRhcmstYmx1ZTogIzAyMzk3MDtcbiRibHVlOiAjMDE3YWNlO1xuJGNlcnVsZWFuOiAjMDE3YWNlO1xuJGxpZ2h0LWJsdWU6ICNjY2VhZmY7XG4kcGFsZS1ibHVlOiAjZjFmOWZmO1xuJGRhcmstdGVhbDogIzAwNjQ2ZTtcbiR0ZWFsOiAjMDBjMWQ0O1xuJGxpZ2h0LXRlYWw6ICNjY2ZhZmY7XG4kcGFsZS10ZWFsOiAjZjVmZWZmO1xuJGRhcmstZ3JlZW46ICMwYTVjNDA7XG4kZ3JlZW46ICMxNGI4ODE7XG4kbGlnaHQtZ3JlZW46ICNhM2Y1ZDk7XG4kcGFsZS1ncmVlbjogI2Y2ZmVmYjtcbiRkYXJrLXllbGxvdzogIzk5NzQwMDtcbiR5ZWxsb3c6ICNmZmNlMzM7XG4kbGlnaHQteWVsbG93OiAjZmZmM2NjO1xuJHBhbGUteWVsbG93OiAjZmZmZGY1O1xuJGRhcmstcmVkOiAjNjYwYTAwO1xuJHJlZDogI2NjMTQwMDtcbiRsaWdodC1yZWQ6ICNmZmQxY2M7XG4kcGFsZS1yZWQ6ICNmZmY2ZjU7XG5cblxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gIFwiYWNjZW50XCI6ICRhY2NlbnQsXG4gIFwic3VjY2Vzc1wiOiAkc3VjY2VzcywgXG4gIFwid2FybmluZ1wiOiAkd2FybmluZywgXG4gIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJtZXRhbFwiOiAkbWV0YWwsXG4gIFwiZm9jdXNcIjogJGZvY3VzLFxuICBcImdyZXktMjBcIjogJGdyZXktMjAsIFxuICBcImdyZXktMzBcIjogJGdyZXktMzAsXG4gIFwiZ3JleS01MFwiOiAkZ3JleS01MCxcbiAgXCJncmV5LTcwXCI6ICRncmV5LTcwLFxuICBcImdyZXktOTBcIjogJGdyZXktOTAsXG4gIFwiZ3JleS05NVwiOiAkZ3JleS05NSxcbiAgXCJiYXNlXCI6ICRiYXNlLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcIndoaXRlXCI6ICR3aGl0ZSxcbiAgXCJibGFja1wiOiAkYmxhY2ssXG4gIFwiYmx1ZVwiOiAkYmx1ZVxuKTtcblxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG4kZ3Qtc21hbGwtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHNtKSAhZGVmYXVsdDsgLy8gNTc2XG4kZ3QtbWVkaXVtLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBtZCkgIWRlZmF1bHQ7IC8vIDc2OFxuJGd0LWxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBsZykgIWRlZmF1bHQ7IC8vIDk5MlxuJGd0LXhsYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgeGwpICFkZWZhdWx0OyAvLyAxMjAwXG5cbi8qIFNoYWRvd3MgKi9cbiRzaGFkb3ctc206IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XG4kc2hhZG93LW1kOiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMDgpOyAvL2RlZmF1bHRcbiRzaGFkb3ctbGc6IDAgMTVweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwwLDAsMC4wOCk7XG4kc2hhZG93LWVsZXZhdGU6ICRzaGFkb3ctbGc7IC8vIG9uIGhvdmVyXG5cbi8qIFNwYWNpbmcgR3VpZGVsaW5lcyAqL1xuJHNwYWNpbmcteHhzOiAwLjMzM3JlbTsgICAgIC8vIHNtYWxsIGdhcCAgICAgICAgICAgLSA1cHggICAgKHh4cylcbiRzcGFjaW5nLXhzOiAwLjY2N3JlbTsgICAgICAvLyBSZWxhdGVkIERpcmVjdGx5ICAgIC0gMTBweCAgICh4cylcbiRzcGFjaW5nLXNtOiAxcmVtOyAgICAgICAgICAvLyBSZWxhdGVkIEluZGlyZWN0bHkgIC0gMTVweCAgIChzbSlcbiRzcGFjaW5nLW1kOiAxLjMzcmVtOyAgICAgICAvLyBSZWxhdGVkIEdyb3VwICAgICAgIC0gMjBweCAgIChtZCkgIC8vZGVmYXVsdFxuJHNwYWNpbmctbGc6IDJyZW07ICAgICAgICAgIC8vIFVucmVsYXRlZCBHcm91cCAgICAgLSAzMHB4ICAgKGxnKVxuJHNwYWNpbmcteGw6IDIuNjY3cmVtOyAgICAgIC8vIE5ldyBTZWN0aW9uICAgICAgICAgLSA0MHB4ICAgKHhsKVxuJHNwYWNpbmcteHhsOiA0cmVtOyAgICAgICAgIC8vIE5ldyBTZWN0aW9uIChMYXJnZSkgLSA2MHB4ICAgKHh4bClcblxuJHNwYWNpbmctc2l6ZXM6IChcbiAgXCIwXCI6IDAsXG4gIFwiNVwiOiAkc3BhY2luZy14eHMsXG4gIFwiMTBcIjogJHNwYWNpbmcteHMsXG4gIFwiMTVcIjogJHNwYWNpbmctc20sXG4gIFwiMjBcIjogJHNwYWNpbmctbWQsXG4gIFwiMzBcIjogJHNwYWNpbmctbGcsXG4gIFwiNDBcIjogJHNwYWNpbmcteGwsXG4gIFwiNjBcIjogJHNwYWNpbmcteHhsLFxuICBcIjE1LWVtXCI6IDEuNXJlbSxcbiAgXCIyMi1lbVwiOiAyLjJyZW0sXG4gIFwieHhzXCI6ICRzcGFjaW5nLXh4cyxcbiAgXCJ4c1wiOiAkc3BhY2luZy14cyxcbiAgXCJzbVwiOiAkc3BhY2luZy1zbSxcbiAgXCJtZFwiOiAkc3BhY2luZy1tZCxcbiAgXCJsZ1wiOiAkc3BhY2luZy1sZyxcbiAgXCJ4bFwiOiAkc3BhY2luZy14bCxcbiAgXCJ4eGxcIjogJHNwYWNpbmcteHhsLCAgXG4gICk7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbiRhbmltYXRpb24teHM6IGFsbCAwLjFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1zaDogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLW1kOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7IC8vZGVmYXVsdFxuJGFuaW1hdGlvbi1sZzogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXhsOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teHhsOiBhbGwgMS4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblxuJGFuaW1hdGlvbi1kZWZhdWx0OiAkYW5pbWF0aW9uLW1kO1xuXG4kYW5pbWF0aW9uLWZhZGUtaW46IGZhZGUtaW4gMXMgYm90aDtcbiRhbmltYXRpb24tZmFkZS1vdXQ6IGZhZGUtb3V0IDFzIGVhc2Utb3V0IGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tdG9wOiBmYWRlLWluLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tOiBmYWRlLWluLWJvdHRvbSAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyOiBwdWZmLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjQ3MCwgMC4wMDAsIDAuNzQ1LCAwLjcxNSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyOiBwdWZmLW91dC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBib3RoO1xuJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsOiBzaGFrZS1ob3Jpem9udGFsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1KSBib3RoO1xuJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2s6IGZvY3VzLWluLWNvbnRyYWN0LWJjayAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7IC8vIGZvciB0ZXh0XG4kYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3A6IHNjYWxlLWluLXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4kYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wOiBzY2FsZS1vdXQtdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbiRhbmltYXRpb24tcHVsc2UtaW5maW5pdGU6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIGluZmluaXRlO1xuJGFuaW1hdGlvbi1wdWxzZS0zOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyAzO1xuJGFuaW1hdGlvbi1wdWxzZS0xOiBzaGFkb3ctcHVsc2UgMXMgMTtcblxuLy8gWW91IGNhbiB1c2UgYW55IG9mIHRoZXNlIG5hbWVzIHRvIGFuaW1hdGUgSFRNTCBlbGVtZW50cyBvbiBpbml0aWF0aW9uXG4kYW5pbWF0aW9uczogKFxuICBcImZhZGUtaW5cIjogJGFuaW1hdGlvbi1mYWRlLWluLFxuICBcImZhZGUtb3V0XCI6ICRhbmltYXRpb24tZmFkZS1vdXQsXG4gIFwiZmFkZS1pbi10b3BcIjogJGFuaW1hdGlvbi1mYWRlLWluLXRvcCxcbiAgXCJmYWRlLWluLWJvdHRvbVwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tLFxuICBcInB1ZmYtaW4tY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXIsXG4gIFwicHVmZi1vdXQtY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyLFxuICBcInNoYWtlLWhvcml6b250YWxcIjogJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsLFxuICBcImZvY3VzLWluLWNvbnRyYWN0LWJja1wiOiAkYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjayxcbiAgXCJzY2FsZS1pbi12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcCxcbiAgXCJzY2FsZS1vdXQtdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wLFxuICBcInB1bHNlLWluZmluaXRlXCI6ICRhbmltYXRpb24tcHVsc2UtaW5maW5pdGUsXG4gIFwicHVsc2UtM1wiOiAkYW5pbWF0aW9uLXB1bHNlLTMsXG4gIFwicHVsc2UtMVwiOiAkYW5pbWF0aW9uLXB1bHNlLTFcbik7XG5cbi8qIEJvcmRlcnMgKi9cbiRib3JkZXItc2l6ZS1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXNpemUtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXNpemUtbGc6IDAuNXJlbTtcbiRib3JkZXItc2l6ZS0xOiAxcHg7XG4kYm9yZGVyLXNpemUtMjogMnB4O1xuJGJvcmRlci1zaXplLTM6IDNweDtcbiRib3JkZXItc2l6ZS01OiA1cHg7XG4kYm9yZGVyLXNpemUtMTA6IDEwcHg7XG5cbiRib3JkZXItc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXNpemUtc20sXG4gIFwibWRcIjogJGJvcmRlci1zaXplLW1kLFxuICBcImxnXCI6ICRib3JkZXItc2l6ZS1sZyxcbiAgXCIxXCI6ICRib3JkZXItc2l6ZS0xLFxuICBcIjJcIjogJGJvcmRlci1zaXplLTIsXG4gIFwiM1wiOiAkYm9yZGVyLXNpemUtMyxcbiAgXCI1XCI6ICRib3JkZXItc2l6ZS01LFxuICBcIjEwXCI6ICRib3JkZXItc2l6ZS0xMFxuKTtcblxuLyogQ29ybmVycyAqL1xuJGJvcmRlci1yYWRpdXMtc206IDAuMTI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1sZzogMC41cmVtO1xuJGJvcmRlci1yYWRpdXMtMjogMnB4O1xuJGJvcmRlci1yYWRpdXMtNDogNHB4O1xuJGJvcmRlci1yYWRpdXMtNjogNnB4O1xuJGJvcmRlci1yYWRpdXMtMTA6IDEwcHg7XG4kYm9yZGVyLXJhZGl1cy0xNTogMTVweDtcbiRib3JkZXItcmFkaXVzLTIwOiAyMHB4O1xuJGJvcmRlci1yYWRpdXMtaGFsZjogNTAlO1xuJGJvcmRlci1yYWRpdXMtZnVsbDogMTAwJTtcblxuJGJvcmRlci1yYWRpdXMtc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXJhZGl1cy1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXJhZGl1cy1tZCwgLy9kZWZhdWx0XG4gIFwibGdcIjogJGJvcmRlci1yYWRpdXMtbGcsXG4gIFwiMlwiOiAkYm9yZGVyLXJhZGl1cy0yLFxuICBcIjRcIjogJGJvcmRlci1yYWRpdXMtNCxcbiAgXCI2XCI6ICRib3JkZXItcmFkaXVzLTYsXG4gIFwiMTBcIjogJGJvcmRlci1yYWRpdXMtMTAsXG4gIFwiMTVcIjogJGJvcmRlci1yYWRpdXMtMTUsXG4gIFwiMjBcIjogJGJvcmRlci1yYWRpdXMtMjAsXG4gIFwiaGFsZlwiOiAkYm9yZGVyLXJhZGl1cy1oYWxmLFxuICBcImZ1bGxcIjogJGJvcmRlci1yYWRpdXMtZnVsbCxcbik7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcblxyXG46aG9zdCB7XHJcbiAgbWF4LXdpZHRoOiAkZ3QtbGFyZ2Utd2lkdGg7XHJcblxyXG4gIC8qLmZpbHRlci1tb2RhbCB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgfSovXHJcbn1cclxuXHJcbi9kZWVwLyB7XHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxuICB9XHJcbiAgLyogVE9ETzogUmVwbGFjZSB3aXRoIGdsb2JhbCBzdWJ3YXktaWNvbnNldCAqL1xyXG4gIC8qLnN1YndheS1pY29uIHtcclxuICAgIHdpZHRoOiAxLjU2M3JlbTtcclxuICAgIGhlaWdodDogMS41NjNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMS43ODU4O1xyXG4gIH1cclxuXHJcbiAgLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzNTJlO1xyXG4gIH1cclxuXHJcbiAgLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDkzM2M7XHJcbiAgfVxyXG5cclxuICAucHVycGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTMzYWQ7XHJcbiAgfVxyXG5cclxuICAuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzOWE2O1xyXG4gIH1cclxuXHJcbiAgLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MzE5O1xyXG4gIH1cclxuXHJcbiAgLmxpbWVHcmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmNiZTQ1O1xyXG4gIH1cclxuXHJcbiAgLmJyb3duIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTY2MzM7XHJcbiAgfVxyXG5cclxuICAubGlnaHRHcmF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2E5YWM7XHJcbiAgfVxyXG5cclxuICAuZGFya0dyYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODE4MztcclxuICB9XHJcblxyXG4gIC55ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjY2MwYTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH0qL1xyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQbGVhc2UgY29uc3VsdCB3aXRoIFl1cnkgYmVmb3JlIGFkZGluZyBzb21lIG5ldyBDU1MgdmFyaWFibGVzLiAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogVGFibGUgb2YgQ29udGVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFR5cG9ncmFwaHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVGhlbWUgQ29sb3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNoYWRvd3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU3BhY2luZyBHdWlkZWxpbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBBbmltYXRpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIENvcm5lcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuLyogU2hhZG93cyAqL1xuLyogU3BhY2luZyBHdWlkZWxpbmVzICovXG4vKiBBbmltYXRpb25zICovXG4vKiBCb3JkZXJzICovXG4vKiBDb3JuZXJzICovXG46aG9zdCB7XG4gIG1heC13aWR0aDogOTkycHg7XG4gIC8qLmZpbHRlci1tb2RhbCB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgfSovIH1cblxuL2RlZXAvIHtcbiAgLyogVE9ETzogUmVwbGFjZSB3aXRoIGdsb2JhbCBzdWJ3YXktaWNvbnNldCAqL1xuICAvKi5zdWJ3YXktaWNvbiB7XHJcbiAgICB3aWR0aDogMS41NjNyZW07XHJcbiAgICBoZWlnaHQ6IDEuNTYzcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzg1ODtcclxuICB9XHJcblxyXG4gIC5yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzUyZTtcclxuICB9XHJcblxyXG4gIC5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MzNjO1xyXG4gIH1cclxuXHJcbiAgLnB1cnBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkzM2FkO1xyXG4gIH1cclxuXHJcbiAgLmJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzlhNjtcclxuICB9XHJcblxyXG4gIC5vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjMxOTtcclxuICB9XHJcblxyXG4gIC5saW1lR3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZjYmU0NTtcclxuICB9XHJcblxyXG4gIC5icm93biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk2NjMzO1xyXG4gIH1cclxuXHJcbiAgLmxpZ2h0R3JheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdhOWFjO1xyXG4gIH1cclxuXHJcbiAgLmRhcmtHcmF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgxODM7XHJcbiAgfVxyXG5cclxuICAueWVsbG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2NjMGE7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9Ki8gfVxuICAvZGVlcC8gLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuICAgIC9kZWVwLyAubWF0LWRpYWxvZy1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottery-filters-modal.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottery-filters-modal.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: LotteryFiltersModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryFiltersModalComponent", function() { return LotteryFiltersModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _filter_models_filters_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../filter-models/filters.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/filters.class.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_custom_validation_custom_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/custom-validation/custom-validation */ "./src/app/shared/custom-validation/custom-validation.ts");
/* harmony import */ var _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/enums/developmentEnums */ "./src/app/shared/enums/developmentEnums.ts");
/* harmony import */ var _lottary_validation_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lottary.validation.class */ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottary.validation.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var LotteryFiltersModalComponent = /** @class */ (function () {
    //public minPricePlaceholder: number = 1;
    //public maxPricePlaceholder: number = 1000000;
    function LotteryFiltersModalComponent(data, dialogRef, cdRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.cdRef = cdRef;
        this.tempFiltersModel = new _filter_models_filters_class__WEBPACK_IMPORTED_MODULE_1__["FiltersModel"]();
        this.householdIncomeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.householdSizeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.rentMinFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.rentMaxFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.priceMinFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.priceMaxFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.amenitiesFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.ownershipTypeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.subwaysFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.unitLayoutTypeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.neighborhoodsFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.filtersModel = this.data.filtersModel;
        this.householdSizes = this.data.filtersData.householdSizes;
        this.unitLayoutTypes = this.data.filtersData.unitLayoutTypes;
        this.amenities = this.data.filtersData.amenities;
        this.neighborhoods = this.data.filtersData.neighborhoods;
        this.subways = this.data.filtersData.subways;
        this.propertyTypes = this.data.filtersData.propertyTypes;
        this.visibleFiltersConf = this.data.visibleFiltersConf;
    }
    LotteryFiltersModalComponent.prototype.createForm = function () {
        var validatorFn = (this.filtersModel.householdType === _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_5__["HouseholdTypeEnum"].Rentals) ?
            Object(_lottary_validation_class__WEBPACK_IMPORTED_MODULE_6__["customValidatorFn"])('rentMinFormControl', 'rentMaxFormControl')
            : Object(_lottary_validation_class__WEBPACK_IMPORTED_MODULE_6__["customValidatorFn"])('priceMinFormControl', 'priceMaxFormControl');
        this.filtersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            householdIncomeFormControl: this.householdIncomeFormControl,
            householdSizeFormControl: this.householdSizeFormControl,
            rentMinFormControl: this.rentMinFormControl,
            rentMaxFormControl: this.rentMaxFormControl,
            priceMinFormControl: this.priceMinFormControl,
            priceMaxFormControl: this.priceMaxFormControl,
            amenitiesFormControl: this.amenitiesFormControl,
            ownershipTypeFormControl: this.ownershipTypeFormControl,
            subwaysFormControl: this.subwaysFormControl,
            unitLayoutTypeFormControl: this.unitLayoutTypeFormControl,
            neighborhoodsFormControl: this.neighborhoodsFormControl
        }, validatorFn);
    };
    LotteryFiltersModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        Object.assign(this.tempFiltersModel, this.filtersModel);
        // set default value
        //if (this.visibleFiltersConf.monthlyRent && !this.tempFiltersModel.monthlyRent) {
        //  this.tempFiltersModel.monthlyRent = { minRent: 0, maxRent: 10000 };      
        //}
        //if (this.visibleFiltersConf.price && !this.tempFiltersModel.price) {
        //  this.tempFiltersModel.price = { minPrice: 0, maxPrice: 1000000 };
        //}
        this.householdIncomeFormControl.setValue(this.tempFiltersModel.householdIncome);
        this.householdSizeFormControl.setValue(this.tempFiltersModel.householdSize);
        if (this.tempFiltersModel.monthlyRent) {
            this.rentMinFormControl.setValue(this.tempFiltersModel.monthlyRent.minRent);
            this.rentMaxFormControl.setValue(this.tempFiltersModel.monthlyRent.maxRent);
        }
        else {
            this.tempFiltersModel.monthlyRent = {
                minRent: null,
                maxRent: null
            };
        }
        if (this.tempFiltersModel.price) {
            this.priceMinFormControl.setValue(this.tempFiltersModel.price.minPrice);
            this.priceMaxFormControl.setValue(this.tempFiltersModel.price.maxPrice);
        }
        else {
            this.tempFiltersModel.price = {
                minPrice: null,
                maxPrice: null
            };
        }
        this.filtersForm.controls['priceMaxFormControl'].setValidators([_shared_custom_validation_custom_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].minNumber(this.priceMinFormControl)]);
        this.filtersForm.controls['rentMaxFormControl'].setValidators([_shared_custom_validation_custom_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].minNumber(this.rentMinFormControl)]);
        this.filtersForm.controls['priceMinFormControl'].setValidators([_shared_custom_validation_custom_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].maxNumber(this.priceMaxFormControl)]);
        this.filtersForm.controls['rentMinFormControl'].setValidators([_shared_custom_validation_custom_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].maxNumber(this.rentMaxFormControl)]);
        this.rentMinFormControl.valueChanges.subscribe(function (value) { return _this.tempFiltersModel.monthlyRent.minRent = value; });
        this.rentMaxFormControl.valueChanges.subscribe(function (value) { return _this.tempFiltersModel.monthlyRent.maxRent = value; });
        this.priceMinFormControl.valueChanges.subscribe(function (value) { return _this.tempFiltersModel.price.minPrice = value; });
        this.priceMaxFormControl.valueChanges.subscribe(function (value) { return _this.tempFiltersModel.price.maxPrice = value; });
        //this.priceMaxFormControl.setValidators([CustomValidators.minNumber(this.priceMinFormControl)]);
        this.amenitiesFormControl.setValue(this.tempFiltersModel.amenities);
        this.ownershipTypeFormControl.setValue(this.tempFiltersModel.ownershipType);
        this.subwaysFormControl.setValue(this.tempFiltersModel.subways);
        this.unitLayoutTypeFormControl.setValue(this.tempFiltersModel.unitLayoutTypes);
        this.neighborhoodsFormControl.setValue(this.tempFiltersModel.neighborhoods);
        this.householdIncomeFormControl.valueChanges.subscribe(function (value) {
            _this.tempFiltersModel.householdIncome = value;
        });
        this.householdSizeFormControl.valueChanges.subscribe(function (value) { return _this.tempFiltersModel.householdSize = value; });
        this.amenitiesFormControl.valueChanges.subscribe(function (value) { return _this.tempFiltersModel.amenities = value; });
        this.ownershipTypeFormControl.valueChanges.subscribe(function (value) { return _this.tempFiltersModel.ownershipType = value; });
        this.subwaysFormControl.valueChanges.subscribe(function (value) { return _this.tempFiltersModel.subways = value; });
        this.unitLayoutTypeFormControl.valueChanges.subscribe(function (value) { return _this.tempFiltersModel.unitLayoutTypes = value; });
        this.neighborhoodsFormControl.valueChanges.subscribe(function (value) { return _this.tempFiltersModel.neighborhoods = value.slice(); });
    };
    LotteryFiltersModalComponent.prototype.onChangeMinPrice = function (event) {
        var min = parseInt(event);
        min = (this.tempFiltersModel.price && min >= this.tempFiltersModel.price.maxPrice ? 0 : min);
        this.tempFiltersModel.price.minPrice = min;
    };
    LotteryFiltersModalComponent.prototype.onChangeMaxPrice = function (event) {
        var max = parseInt(event);
        max = (this.tempFiltersModel.price && max <= this.tempFiltersModel.price.minPrice ? 1000000 : max);
        this.tempFiltersModel.price.maxPrice = max;
    };
    //validatePrice(c: AbstractControl): ValidatorFn {
    //  if (c.get('priceMinFormControl') >= c.get('priceMaxFormControl')) return 
    //    //this.tempFiltersModel.price.minPrice >= this.tempFiltersModel.price.maxPrice) {
    //    return { range: true };
    //  }
    //  return null;
    //}
    LotteryFiltersModalComponent.prototype.closeAndSearch = function () {
        this.dialogRef.close(this.tempFiltersModel);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _filter_models_filters_class__WEBPACK_IMPORTED_MODULE_1__["FiltersModel"])
    ], LotteryFiltersModalComponent.prototype, "filtersModel", void 0);
    LotteryFiltersModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lottery-filters-modal',
            template: __webpack_require__(/*! ./lottery-filters-modal.component.html */ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottery-filters-modal.component.html"),
            styles: [__webpack_require__(/*! ./lottery-filters-modal.component.scss */ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottery-filters-modal.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], LotteryFiltersModalComponent);
    return LotteryFiltersModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-summary/lottery-filters-summary.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-summary/lottery-filters-summary.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex align-items-baseline\" *ngIf=\"labelsModel.length\">\r\n  <div class=\"col-auto\">\r\n    <span class=\"filter-label\">Filters:</span>\r\n  </div>\r\n  <div class=\"col\">\r\n    <span *ngFor=\"let filterGroup of labelsModel\">\r\n      {{filterGroup.title}}\r\n      <mat-chip-list>\r\n        <mat-chip class=\"fade-in-top stagger\"\r\n                  *ngFor=\"let filter of filterGroup.filterValue\"\r\n                  (removed)=\"clearFilter(filterGroup, filter)\">\r\n          {{filter.label}}\r\n          <mat-icon matChipRemove>cancel</mat-icon>\r\n        </mat-chip>\r\n      </mat-chip-list>\r\n    </span>\r\n\r\n    <a href=\"javascript:;\" class=\"m-link filter-label ml-xs\" (click)=\"clearAll()\">Clear filters</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-summary/lottery-filters-summary.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-summary/lottery-filters-summary.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .filter-label {\n  line-height: 2rem; }\n\n:host ::ng-deep .mat-chip-list {\n  display: inline; }\n\n:host ::ng-deep .mat-chip-list .mat-chip-list-wrapper {\n    display: inline;\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvY29tcG9uZW50cy9sb3R0ZXJ5LWZpbHRlcnMtc3VtbWFyeS9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXBwXFxtb2R1bGVzXFxicm93c2UtbG90dGVyaWVzXFxjb21wb25lbnRzXFxmaWx0ZXJzXFxjb21wb25lbnRzXFxsb3R0ZXJ5LWZpbHRlcnMtc3VtbWFyeVxcbG90dGVyeS1maWx0ZXJzLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBaUIsRUFBQTs7QUFGckI7RUFNSSxlQUFlLEVBQUE7O0FBTm5CO0lBU00sZUFBZTtJQUNmLFNBQVMsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2Jyb3dzZS1sb3R0ZXJpZXMvY29tcG9uZW50cy9maWx0ZXJzL2NvbXBvbmVudHMvbG90dGVyeS1maWx0ZXJzLXN1bW1hcnkvbG90dGVyeS1maWx0ZXJzLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xyXG4gIC5maWx0ZXItbGFiZWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAubWF0LWNoaXAtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcblxyXG4gICAgLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-summary/lottery-filters-summary.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-summary/lottery-filters-summary.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: LotteryFiltersSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryFiltersSummaryComponent", function() { return LotteryFiltersSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _filter_models_filters_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../filter-models/filters.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/filters.class.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LotteryFiltersSummaryComponent = /** @class */ (function () {
    function LotteryFiltersSummaryComponent() {
        this.labelsModel = [];
        this.filtersModel = {};
        this.filtersData = {};
        this.onChangeFilterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LotteryFiltersSummaryComponent.prototype.ngAfterViewInit = function () {
    };
    LotteryFiltersSummaryComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filtersModel &&
            changes.filtersModel.currentValue != changes.filtersModel.previousValue) {
            this.transformToLabels(changes.filtersModel.currentValue);
        }
    };
    LotteryFiltersSummaryComponent.prototype.clearFilter = function (filterGroup, deletedFilter) {
        this.deleteFilterItemAndUpdateFilterMode(filterGroup, deletedFilter);
        this.onChangeFilterEvent.emit(this.filtersModel);
        this.transformToLabels(this.filtersModel);
    };
    LotteryFiltersSummaryComponent.prototype.deleteFilterItemAndUpdateFilterMode = function (filterGroup, deletedFilter) {
        var filterModel = this.filtersModel[filterGroup.filterType];
        if (lodash__WEBPACK_IMPORTED_MODULE_2__["isObject"](filterModel) && !lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"](filterModel)) {
            this.filtersModel[filterGroup.filterType] =
                lodash__WEBPACK_IMPORTED_MODULE_2__["keys"](filterModel)
                    .forEach(function (key) {
                    filterModel[key] = null;
                });
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_2__["isString"](filterModel) || lodash__WEBPACK_IMPORTED_MODULE_2__["isNumber"](filterModel)) {
            this.filtersModel[filterGroup.filterType] = null;
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"](filterModel)) {
            this.filtersModel[filterGroup.filterType] = filterModel.filter(function (item) {
                return item != deletedFilter.value;
            });
        }
    };
    LotteryFiltersSummaryComponent.prototype.clearAll = function () {
        var type = this.filtersModel.householdType;
        this.filtersModel = new _filter_models_filters_class__WEBPACK_IMPORTED_MODULE_1__["FiltersModel"]();
        this.filtersModel.householdType = type;
        this.onChangeFilterEvent.emit(this.filtersModel);
        this.transformToLabels(this.filtersModel);
    };
    LotteryFiltersSummaryComponent.prototype.transformToLabels = function (data) {
        var _this = this;
        if (!this.filtersData) {
            return;
        }
        this.labelsModel = [];
        lodash__WEBPACK_IMPORTED_MODULE_2__["keys"](data).forEach(function (filterType) {
            var filterValue = data[filterType];
            if (lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](filterValue)) {
                return;
            }
            if (filterType == 'monthlyRent' && !filterValue.maxRent && !filterValue.minRent) {
                return;
            }
            if (filterType == 'price' && !filterValue.maxPrice && !filterValue.minPrice) {
                return;
            }
            var filterData = _this.getLabelByFilterType(filterType, filterValue);
            if (filterData)
                _this.labelsModel.push(__assign({}, filterData, { filterType: filterType }));
        });
    };
    LotteryFiltersSummaryComponent.prototype.getLabelByFilterType = function (filterType, filterValue) {
        switch (filterType) {
            // case 'householdType':
            //   return this.getFilterHouseholdType(filterValue);
            case 'householdIncome':
                return this.getFilterIncome(filterValue);
            case 'amenities':
                return this.getFilterAmenities(filterValue);
            case 'householdSize':
                return this.getFilterHouseholdSize(filterValue);
            case 'monthlyRent':
                return this.getFilterMonthlyRent(filterValue);
            case 'neighborhoods':
                return this.getFilterNeighborhoods(filterValue);
            case 'ownershipType':
                return this.getFilterOwnershipType(filterValue);
            case 'price':
                return this.getFilterPrice(filterValue);
            case 'subways':
                return this.getFilterSubways(filterValue);
            case 'unitLayoutTypes':
                return this.getFilterUnitLayoutTypes(filterValue);
            default:
                return null;
        }
    };
    LotteryFiltersSummaryComponent.prototype.getFilterHouseholdType = function (filterValue) {
        return {
            title: "household type:",
            filterValue: [{
                    label: "" + filterValue,
                    value: filterValue
                }]
        };
    };
    LotteryFiltersSummaryComponent.prototype.getFilterIncome = function (filterValue) {
        return {
            title: "income:",
            filterValue: [{
                    label: "$" + filterValue,
                    value: filterValue
                }]
        };
    };
    LotteryFiltersSummaryComponent.prototype.getFilterAmenities = function (filterValue) {
        var sourceData = this.filtersData['amenities'];
        if (!sourceData) {
            return {};
        }
        var filterLabels2 = sourceData
            .filter(function (item) { return filterValue.indexOf(item.amenityTypeId) >= 0; })
            .map(function (item) { return ({
            label: item.amenityName,
            value: item.amenityTypeId
        }); });
        return {
            title: "amenit" + (filterValue.length > 1 ? 'ies' : 'y') + ":",
            filterValue: filterLabels2
        };
    };
    LotteryFiltersSummaryComponent.prototype.getFilterHouseholdSize = function (filterValue) {
        var householdSizeData = this.filtersData['householdSizes'];
        if (!householdSizeData) {
            return {};
        }
        var filterLabels3 = householdSizeData
            .filter(function (item) { return (item.value + '') == filterValue; })
            .map(function (item) { return ({
            label: item.name,
            value: item.value
        }); });
        return {
            title: "room for:",
            filterValue: filterLabels3
        };
    };
    LotteryFiltersSummaryComponent.prototype.getFilterMonthlyRent = function (filterValue) {
        if (filterValue.minRent && !filterValue.maxRent)
            return {
                title: "min rent:",
                filterValue: [{
                        label: "$" + filterValue.minRent,
                        value: filterValue.minRent
                    }] //only min rent entered
            };
        else if (!filterValue.minRent && filterValue.maxRent)
            return {
                title: "max rent:",
                filterValue: [{
                        label: "$" + filterValue.maxRent,
                        value: filterValue.maxRent
                    }] //only max rent entered
            };
        else if (!filterValue.minRent && !filterValue.maxRent)
            return {
                title: '',
                filterValue: [{}]
            }; // no rents entered
        else
            return {
                title: "rent:",
                filterValue: [{
                        label: "$" + filterValue.minRent + " - $" + filterValue.maxRent,
                        minRent: filterValue.minRent,
                        maxRent: filterValue.maxRent
                    }] // both rents entered
            };
    };
    LotteryFiltersSummaryComponent.prototype.getFilterNeighborhoods = function (filterValue) {
        return {
            title: "neighborhood:",
            filterValue: filterValue.map(function (item) {
                return {
                    label: item.title || item.name,
                    value: item
                };
            })
        };
    };
    LotteryFiltersSummaryComponent.prototype.getFilterOwnershipType = function (filterValue) {
        var ownershipData = this.filtersData['propertyTypes'];
        if (!ownershipData) {
            return {};
        }
        var filterLabels1 = ownershipData
            .filter(function (item) { return filterValue.indexOf(item.id) >= 0; })
            .map(function (item) { return ({
            label: item.name,
            value: item.id
        }); });
        return {
            title: "owner type" + (filterValue.length > 1 ? 's' : '') + ":",
            filterValue: filterLabels1
        };
    };
    LotteryFiltersSummaryComponent.prototype.getFilterPrice = function (filterValue) {
        if (filterValue.minPrice && !filterValue.maxPrice)
            return {
                title: "min price:",
                filterValue: [{
                        label: "$" + filterValue.minPrice,
                        value: filterValue.minPrice
                    }] //only min price entered
            };
        else if (!filterValue.minPrice && filterValue.maxPrice)
            return {
                title: "max price:",
                filterValue: [{
                        label: "$" + filterValue.maxPrice,
                        value: filterValue.maxPrice
                    }] //only max price entered
            };
        else if (!filterValue.minPrice && !filterValue.maxPrice)
            return {
                title: '',
                filterValue: [{}]
            }; // no prices entered
        else
            return {
                title: "price:",
                filterValue: [{
                        label: "$" + filterValue.minPrice + " - $" + filterValue.maxPrice,
                        minPrice: filterValue.minPrice,
                        maxPrice: filterValue.maxPrice
                    }] // both prices entered
            };
    };
    LotteryFiltersSummaryComponent.prototype.getFilterSubways = function (filterValue) {
        return {
            title: "near subway line" + (filterValue.length > 1 ? 's' : '') + ":",
            filterValue: filterValue.map(function (subwayValue) { return ({
                label: subwayValue,
                value: subwayValue
            }); })
        };
    };
    LotteryFiltersSummaryComponent.prototype.getFilterUnitLayoutTypes = function (filterValue) {
        var sourceData = this.filtersData["unitLayoutTypes"];
        if (!sourceData) {
            return {};
        }
        var filterLabels = sourceData
            .filter(function (item) { return filterValue.indexOf(item.unitLayoutTypeId) >= 0; })
            .map(function (item) { return ({
            label: item.name,
            value: item.unitLayoutTypeId
        }); });
        return {
            title: "bedroom type" + (filterValue.length > 1 ? 's' : '') + ":",
            filterValue: filterLabels
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _filter_models_filters_class__WEBPACK_IMPORTED_MODULE_1__["FiltersModel"])
    ], LotteryFiltersSummaryComponent.prototype, "filtersModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _filter_models_filters_class__WEBPACK_IMPORTED_MODULE_1__["FiltersModel"])
    ], LotteryFiltersSummaryComponent.prototype, "filtersData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LotteryFiltersSummaryComponent.prototype, "onChangeFilterEvent", void 0);
    LotteryFiltersSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lottery-filters-summary',
            template: __webpack_require__(/*! ./lottery-filters-summary.component.html */ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-summary/lottery-filters-summary.component.html"),
            styles: [__webpack_require__(/*! ./lottery-filters-summary.component.scss */ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-summary/lottery-filters-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LotteryFiltersSummaryComponent);
    return LotteryFiltersSummaryComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/max-payment-modal/max-payment-modal.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/max-payment-modal/max-payment-modal.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 mat-dialog-title class=\"filter-modal-title-section\">\n  <p class=\"title\">{{displayName}}</p>\n  <p class=\"close-button\" (click)=\"onDoneClick()\">\n    <i class=\"la la-close\"></i>\n  </p>\n</h5>\n\n<mat-dialog-content class=\"d-flex align-items-center\">\n      <nouislider class=\"col-11\" #slider [config]=\"sliderConfigDetails\" [(ngModel)]=\"sliderRange\" [tooltips]=\"[ true, true ]\"></nouislider>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/max-payment-modal/max-payment-modal.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/max-payment-modal/max-payment-modal.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host .filter-modal-title-section {\n  display: flex;\n  justify-content: space-between; }\n:host .filter-modal-title-section p {\n    margin: 0; }\n:host .mat-dialog-content {\n  width: 40rem;\n  height: 11rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvY29tcG9uZW50cy9tYXgtcGF5bWVudC1tb2RhbC9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvY29tcG9uZW50cy9tYXgtcGF5bWVudC1tb2RhbC9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXBwXFxtb2R1bGVzXFxicm93c2UtbG90dGVyaWVzXFxjb21wb25lbnRzXFxmaWx0ZXJzXFxjb21wb25lbnRzXFxtYXgtcGF5bWVudC1tb2RhbFxcbWF4LXBheW1lbnQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUErRkEsMkJBQUE7QUFhQSxZQUFBO0FBTUEsdUJBQUE7QUE2QkEsZUFBQTtBQXlDQSxZQUFBO0FBcUJBLFlBQUE7QUN2TkE7RUFFSSxhQUFhO0VBQ2IsOEJBQThCLEVBQUE7QUFIbEM7SUFNTSxTQUFTLEVBQUE7QUFOZjtFQVdJLFlBQVk7RUFDWixhQUFhLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvZmlsdGVycy9jb21wb25lbnRzL21heC1wYXltZW50LW1vZGFsL21heC1wYXltZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vVHlwb2dyYXBoeVxuJGZvbnQtbWFpbjogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LWhlYWRpbmc6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1saW5lYXdlc29tZTogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweC8xIFwiTGluZUF3ZXNvbWVcIjtcbiRmb250LWZvbnRhd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiRodG1sLWZvbnQtc2l6ZS1sZzogMTZweDtcbiRodG1sLWZvbnQtc2l6ZS1tZDogMTVweDtcbiRodG1sLWZvbnQtc2l6ZS1zbTogMTRweDtcbiRodG1sLWZvbnQtc2l6ZS14czogMTNweDtcblxuJGh0bWwtZm9udC13ZWlnaHQ6IDQwMDtcblxuLy8gVGhlbWUgQ29sb3JzXG4kY29sb3Itb2Zmc2V0OiA2JTsgLy8gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIGxpZ2h0ZXIgYW5kIGRhcmtlciB2YXJpZW50cyBvZiBhIHNwZWNpZmljIGNvbG9yXG5cbiRiYXNlOiAjZmFmYWZhOyAvL3VzZWQgcHJpbWFyaWx5IGFzIG9mZi13aGl0ZSBib2R5IGJhY2tncm91bmQgY29sb3JcblxuJHByaW1hcnk6ICMwMjAwNjM7XG4kc2Vjb25kYXJ5OiAjZmFmYWZhO1xuJHNlY29uZGFyeS1ibHVlOiByZ2IoMTA5LCAxNzgsIDI1NSk7IC8vIHdlIHNob3VsZCByZXBsYWNlIHRoaXNcbiRhY2NlbnQ6ICNmY2IzMjM7IC8vIzAwYzVkYztcbiRmb2N1czogIzk4MTZmNDtcblxuJHN1Y2Nlc3M6ICMwMGU2YWI7XG4kd2FybmluZzogI2ZmYjgyMjtcbiRkYW5nZXI6ICNmZjJiMmI7IC8vI2Y0NTE2YztcbiRpbmZvOiAjNTU3OGViOyAvLyMzNmEzZjc7XG5cbiRtZXRhbDogI2M0YzVkNjtcbiRtZXRhbC1saWdodDogbGlnaHRlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuJG1ldGFsLWRhcms6IGRhcmtlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuXG4vLyBncmV5c1xuJGxpZ2h0OiAjZmZmO1xuJGRhcms6ICMyYzJlM2U7XG4kZ3JleS0yMDogIzMzMzMzMztcbiRncmV5LTMwOiAjNGQ0ZDRkO1xuJGdyZXktNTA6ICM4MDgwODA7XG4kZ3JleS03MDogI2IzYjNiMztcbiRncmV5LTkwOiAjZTZlNmU2O1xuJGdyZXktOTU6ICNmMmYyZjI7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbi8vIEV4dGVuZGVkIENvbG9yIFBhbGV0dGVcbi8vIFRPRE86IFJldmlldyB0aGVzZSBjb2xvcnNcbiRkYXJrLWJsdWU6ICMwMjM5NzA7XG4kYmx1ZTogIzAxN2FjZTtcbiRjZXJ1bGVhbjogIzAxN2FjZTtcbiRsaWdodC1ibHVlOiAjY2NlYWZmO1xuJHBhbGUtYmx1ZTogI2YxZjlmZjtcbiRkYXJrLXRlYWw6ICMwMDY0NmU7XG4kdGVhbDogIzAwYzFkNDtcbiRsaWdodC10ZWFsOiAjY2NmYWZmO1xuJHBhbGUtdGVhbDogI2Y1ZmVmZjtcbiRkYXJrLWdyZWVuOiAjMGE1YzQwO1xuJGdyZWVuOiAjMTRiODgxO1xuJGxpZ2h0LWdyZWVuOiAjYTNmNWQ5O1xuJHBhbGUtZ3JlZW46ICNmNmZlZmI7XG4kZGFyay15ZWxsb3c6ICM5OTc0MDA7XG4keWVsbG93OiAjZmZjZTMzO1xuJGxpZ2h0LXllbGxvdzogI2ZmZjNjYztcbiRwYWxlLXllbGxvdzogI2ZmZmRmNTtcbiRkYXJrLXJlZDogIzY2MGEwMDtcbiRyZWQ6ICNjYzE0MDA7XG4kbGlnaHQtcmVkOiAjZmZkMWNjO1xuJHBhbGUtcmVkOiAjZmZmNmY1O1xuXG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcImFjY2VudFwiOiAkYWNjZW50LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsIFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmcsIFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImluZm9cIjogJGluZm8sXG4gIFwibWV0YWxcIjogJG1ldGFsLFxuICBcImZvY3VzXCI6ICRmb2N1cyxcbiAgXCJncmV5LTIwXCI6ICRncmV5LTIwLCBcbiAgXCJncmV5LTMwXCI6ICRncmV5LTMwLFxuICBcImdyZXktNTBcIjogJGdyZXktNTAsXG4gIFwiZ3JleS03MFwiOiAkZ3JleS03MCxcbiAgXCJncmV5LTkwXCI6ICRncmV5LTkwLFxuICBcImdyZXktOTVcIjogJGdyZXktOTUsXG4gIFwiYmFzZVwiOiAkYmFzZSxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJ3aGl0ZVwiOiAkd2hpdGUsXG4gIFwiYmxhY2tcIjogJGJsYWNrLFxuICBcImJsdWVcIjogJGJsdWVcbik7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuJGd0LXNtYWxsLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBzbSkgIWRlZmF1bHQ7IC8vIDU3NlxuJGd0LW1lZGl1bS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbWQpICFkZWZhdWx0OyAvLyA3NjhcbiRndC1sYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbGcpICFkZWZhdWx0OyAvLyA5OTJcbiRndC14bGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHhsKSAhZGVmYXVsdDsgLy8gMTIwMFxuXG4vKiBTaGFkb3dzICovXG4kc2hhZG93LXNtOiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xuJHNoYWRvdy1tZDogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjA4KTsgLy9kZWZhdWx0XG4kc2hhZG93LWxnOiAwIDE1cHggMzBweCAwIHJnYmEoMCwwLDAsMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuJHNoYWRvdy1lbGV2YXRlOiAkc2hhZG93LWxnOyAvLyBvbiBob3ZlclxuXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbiRzcGFjaW5nLXh4czogMC4zMzNyZW07ICAgICAvLyBzbWFsbCBnYXAgICAgICAgICAgIC0gNXB4ICAgICh4eHMpXG4kc3BhY2luZy14czogMC42NjdyZW07ICAgICAgLy8gUmVsYXRlZCBEaXJlY3RseSAgICAtIDEwcHggICAoeHMpXG4kc3BhY2luZy1zbTogMXJlbTsgICAgICAgICAgLy8gUmVsYXRlZCBJbmRpcmVjdGx5ICAtIDE1cHggICAoc20pXG4kc3BhY2luZy1tZDogMS4zM3JlbTsgICAgICAgLy8gUmVsYXRlZCBHcm91cCAgICAgICAtIDIwcHggICAobWQpICAvL2RlZmF1bHRcbiRzcGFjaW5nLWxnOiAycmVtOyAgICAgICAgICAvLyBVbnJlbGF0ZWQgR3JvdXAgICAgIC0gMzBweCAgIChsZylcbiRzcGFjaW5nLXhsOiAyLjY2N3JlbTsgICAgICAvLyBOZXcgU2VjdGlvbiAgICAgICAgIC0gNDBweCAgICh4bClcbiRzcGFjaW5nLXh4bDogNHJlbTsgICAgICAgICAvLyBOZXcgU2VjdGlvbiAoTGFyZ2UpIC0gNjBweCAgICh4eGwpXG5cbiRzcGFjaW5nLXNpemVzOiAoXG4gIFwiMFwiOiAwLFxuICBcIjVcIjogJHNwYWNpbmcteHhzLFxuICBcIjEwXCI6ICRzcGFjaW5nLXhzLFxuICBcIjE1XCI6ICRzcGFjaW5nLXNtLFxuICBcIjIwXCI6ICRzcGFjaW5nLW1kLFxuICBcIjMwXCI6ICRzcGFjaW5nLWxnLFxuICBcIjQwXCI6ICRzcGFjaW5nLXhsLFxuICBcIjYwXCI6ICRzcGFjaW5nLXh4bCxcbiAgXCIxNS1lbVwiOiAxLjVyZW0sXG4gIFwiMjItZW1cIjogMi4ycmVtLFxuICBcInh4c1wiOiAkc3BhY2luZy14eHMsXG4gIFwieHNcIjogJHNwYWNpbmcteHMsXG4gIFwic21cIjogJHNwYWNpbmctc20sXG4gIFwibWRcIjogJHNwYWNpbmctbWQsXG4gIFwibGdcIjogJHNwYWNpbmctbGcsXG4gIFwieGxcIjogJHNwYWNpbmcteGwsXG4gIFwieHhsXCI6ICRzcGFjaW5nLXh4bCwgIFxuICApO1xuXG4vKiBBbmltYXRpb25zICovXG4kYW5pbWF0aW9uLXhzOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tc2g6IGFsbCAwLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1tZDogYWxsIDAuMzVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpOyAvL2RlZmF1bHRcbiRhbmltYXRpb24tbGc6IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14bDogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXh4bDogYWxsIDEuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cbiRhbmltYXRpb24tZGVmYXVsdDogJGFuaW1hdGlvbi1tZDtcblxuJGFuaW1hdGlvbi1mYWRlLWluOiBmYWRlLWluIDFzIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtb3V0OiBmYWRlLW91dCAxcyBlYXNlLW91dCBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLXRvcDogZmFkZS1pbi10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbTogZmFkZS1pbi1ib3R0b20gMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcjogcHVmZi1pbi1jZW50ZXIgMC43cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcjogcHVmZi1vdXQtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgYm90aDtcbiRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbDogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcbiRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoOyAvLyBmb3IgdGV4dFxuJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wOiBzY2FsZS1pbi12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcDogc2NhbGUtb3V0LXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG4kYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyBpbmZpbml0ZTtcbiRhbmltYXRpb24tcHVsc2UtMzogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgMztcbiRhbmltYXRpb24tcHVsc2UtMTogc2hhZG93LXB1bHNlIDFzIDE7XG5cbi8vIFlvdSBjYW4gdXNlIGFueSBvZiB0aGVzZSBuYW1lcyB0byBhbmltYXRlIEhUTUwgZWxlbWVudHMgb24gaW5pdGlhdGlvblxuJGFuaW1hdGlvbnM6IChcbiAgXCJmYWRlLWluXCI6ICRhbmltYXRpb24tZmFkZS1pbixcbiAgXCJmYWRlLW91dFwiOiAkYW5pbWF0aW9uLWZhZGUtb3V0LFxuICBcImZhZGUtaW4tdG9wXCI6ICRhbmltYXRpb24tZmFkZS1pbi10b3AsXG4gIFwiZmFkZS1pbi1ib3R0b21cIjogJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbSxcbiAgXCJwdWZmLWluLWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyLFxuICBcInB1ZmYtb3V0LWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcixcbiAgXCJzaGFrZS1ob3Jpem9udGFsXCI6ICRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbCxcbiAgXCJmb2N1cy1pbi1jb250cmFjdC1iY2tcIjogJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2ssXG4gIFwic2NhbGUtaW4tdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3AsXG4gIFwic2NhbGUtb3V0LXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcCxcbiAgXCJwdWxzZS1pbmZpbml0ZVwiOiAkYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlLFxuICBcInB1bHNlLTNcIjogJGFuaW1hdGlvbi1wdWxzZS0zLFxuICBcInB1bHNlLTFcIjogJGFuaW1hdGlvbi1wdWxzZS0xXG4pO1xuXG4vKiBCb3JkZXJzICovXG4kYm9yZGVyLXNpemUtc206IDAuMTI1cmVtO1xuJGJvcmRlci1zaXplLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1zaXplLWxnOiAwLjVyZW07XG4kYm9yZGVyLXNpemUtMTogMXB4O1xuJGJvcmRlci1zaXplLTI6IDJweDtcbiRib3JkZXItc2l6ZS0zOiAzcHg7XG4kYm9yZGVyLXNpemUtNTogNXB4O1xuJGJvcmRlci1zaXplLTEwOiAxMHB4O1xuXG4kYm9yZGVyLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1zaXplLXNtLFxuICBcIm1kXCI6ICRib3JkZXItc2l6ZS1tZCxcbiAgXCJsZ1wiOiAkYm9yZGVyLXNpemUtbGcsXG4gIFwiMVwiOiAkYm9yZGVyLXNpemUtMSxcbiAgXCIyXCI6ICRib3JkZXItc2l6ZS0yLFxuICBcIjNcIjogJGJvcmRlci1zaXplLTMsXG4gIFwiNVwiOiAkYm9yZGVyLXNpemUtNSxcbiAgXCIxMFwiOiAkYm9yZGVyLXNpemUtMTBcbik7XG5cbi8qIENvcm5lcnMgKi9cbiRib3JkZXItcmFkaXVzLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItcmFkaXVzLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNXJlbTtcbiRib3JkZXItcmFkaXVzLTI6IDJweDtcbiRib3JkZXItcmFkaXVzLTQ6IDRweDtcbiRib3JkZXItcmFkaXVzLTY6IDZweDtcbiRib3JkZXItcmFkaXVzLTEwOiAxMHB4O1xuJGJvcmRlci1yYWRpdXMtMTU6IDE1cHg7XG4kYm9yZGVyLXJhZGl1cy0yMDogMjBweDtcbiRib3JkZXItcmFkaXVzLWhhbGY6IDUwJTtcbiRib3JkZXItcmFkaXVzLWZ1bGw6IDEwMCU7XG5cbiRib3JkZXItcmFkaXVzLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1yYWRpdXMtc20sXG4gIFwibWRcIjogJGJvcmRlci1yYWRpdXMtbWQsIC8vZGVmYXVsdFxuICBcImxnXCI6ICRib3JkZXItcmFkaXVzLWxnLFxuICBcIjJcIjogJGJvcmRlci1yYWRpdXMtMixcbiAgXCI0XCI6ICRib3JkZXItcmFkaXVzLTQsXG4gIFwiNlwiOiAkYm9yZGVyLXJhZGl1cy02LFxuICBcIjEwXCI6ICRib3JkZXItcmFkaXVzLTEwLFxuICBcIjE1XCI6ICRib3JkZXItcmFkaXVzLTE1LFxuICBcIjIwXCI6ICRib3JkZXItcmFkaXVzLTIwLFxuICBcImhhbGZcIjogJGJvcmRlci1yYWRpdXMtaGFsZixcbiAgXCJmdWxsXCI6ICRib3JkZXItcmFkaXVzLWZ1bGwsXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5maWx0ZXItbW9kYWwtdGl0bGUtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIGhlaWdodDogMTFyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/max-payment-modal/max-payment-modal.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/max-payment-modal/max-payment-modal.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: MaxPaymentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPaymentModalComponent", function() { return MaxPaymentModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MaxPaymentModalComponent = /** @class */ (function () {
    function MaxPaymentModalComponent(filterRef, data) {
        this.filterRef = filterRef;
        this.data = data;
        this.sliderConfigDetails = {
            connect: true,
            start: this.sliderRange,
            step: 100,
            tooltips: true,
            range: {
                min: 0,
                max: 0
            },
            pips: {
                mode: 'positions',
                values: [0, 25, 50, 75, 100],
                density: 4
            }
        };
        this.triggerElementRef = data.triggerRef;
        this.sliderConfigDetails.range.min = data.min;
        this.sliderConfigDetails.range.max = data.max;
        this.displayName = data.displayName;
        if (data.value.length) {
            this.sliderRange = data.value;
        }
        else {
            this.sliderRange = [this.sliderConfigDetails.range.min, this.sliderConfigDetails.range.max];
        }
    }
    MaxPaymentModalComponent.prototype.ngOnInit = function () {
        var rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
        console.log(rect, rect.bottom);
        this.filterRef.updatePosition({
            left: rect.left - 50 + "px",
            top: rect.bottom + 20 + "px"
        });
    };
    MaxPaymentModalComponent.prototype.onDoneClick = function () {
        this.sliderConfigDetails.start = this.sliderRange;
        this.filterRef.close({ data: this.sliderRange });
    };
    MaxPaymentModalComponent.prototype.getData = function () {
        return this.sliderRange;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slider', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MaxPaymentModalComponent.prototype, "slider", void 0);
    MaxPaymentModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-max-payment-modal',
            template: __webpack_require__(/*! ./max-payment-modal.component.html */ "./src/app/modules/browse-lotteries/components/filters/components/max-payment-modal/max-payment-modal.component.html"),
            styles: [__webpack_require__(/*! ./max-payment-modal.component.scss */ "./src/app/modules/browse-lotteries/components/filters/components/max-payment-modal/max-payment-modal.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], MaxPaymentModalComponent);
    return MaxPaymentModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/nearby-subway-modal/nearby-subway-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/nearby-subway-modal/nearby-subway-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 mat-dialog-title class=\"filter-modal-title-section\">\n    <p class=\"title\">Nearby Subways</p>\n    <p class=\"close-button\" (click)=\"onDoneClick()\">\n      <i class=\"la la-close\"></i>\n    </p>\n</h5>\n\n<mat-dialog-content class=\"amenities-filter-form-container\">\n  <p>\n    <span class=\"control\" (click)=\"selectAll()\" [ngClass]=\"isSelectAllActive()\">\n      Select All\n    </span>\n    /\n    <span class=\"control\" (click)=\"clearAll()\" [ngClass]=\"isClearAllActive()\">\n      Clear All\n    </span>\n  </p>\n\n\n  <div class=\"filter-modal-content-section\">\n    <div #subwayList *ngFor=\"let train of subwayData; let i = index\" class=\"checkbox-container\">\n      <mat-checkbox class=\"checkbox\" [(ngModel)]=\"train.isSelected\"\n        (change)=\"updateSelectedButtons()\">\n        <span class=\"subway-icon\" [ngClass]=\"train.color\">{{train.id}}</span>\n      </mat-checkbox>\n    </div>\n  </div>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/nearby-subway-modal/nearby-subway-modal.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/nearby-subway-modal/nearby-subway-modal.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host .filter-modal-title-section {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 0.75rem; }\n:host .filter-modal-title-section p {\n    margin: 0; }\n:host mat-dialog-content p {\n  margin-bottom: 1.5rem; }\n:host mat-dialog-content p .active {\n    cursor: pointer; }\n:host mat-dialog-content .filter-modal-content-section {\n  -webkit-columns: 6.75rem 4;\n          columns: 6.75rem 4; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container {\n    margin-bottom: 0.75rem; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .subway-icon {\n      width: 1.563rem;\n      height: 1.563rem;\n      background-color: #bbb;\n      color: #ffffff;\n      border-radius: 50%;\n      font-size: 0.875rem;\n      font-weight: bold;\n      text-align: center;\n      display: inline-block;\n      line-height: 1.7858; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .red {\n      background-color: #ee352e; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .green {\n      background-color: #00933c; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .purple {\n      background-color: #b933ad; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .blue {\n      background-color: #0039a6; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .orange {\n      background-color: #ff6319; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .limeGreen {\n      background-color: #6cbe45; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .brown {\n      background-color: #996633; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .lightGray {\n      background-color: #a7a9ac; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .darkGray {\n      background-color: #808183; }\n:host mat-dialog-content .filter-modal-content-section .checkbox-container .yellow {\n      background-color: #fccc0a;\n      color: #000000; }\n:host .control {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvY29tcG9uZW50cy9uZWFyYnktc3Vid2F5LW1vZGFsL0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvZmlsdGVycy9jb21wb25lbnRzL25lYXJieS1zdWJ3YXktbW9kYWwvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcbW9kdWxlc1xcYnJvd3NlLWxvdHRlcmllc1xcY29tcG9uZW50c1xcZmlsdGVyc1xcY29tcG9uZW50c1xcbmVhcmJ5LXN1YndheS1tb2RhbFxcbmVhcmJ5LXN1YndheS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQStGQSwyQkFBQTtBQWFBLFlBQUE7QUFNQSx1QkFBQTtBQTZCQSxlQUFBO0FBeUNBLFlBQUE7QUFxQkEsWUFBQTtBQ3ZOQTtFQUVJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7QUFKdkI7SUFPTSxTQUFTLEVBQUE7QUFQZjtFQWFNLHFCQUFxQixFQUFBO0FBYjNCO0lBZ0JRLGVBQWUsRUFBQTtBQWhCdkI7RUFxQk0sMEJBQWtCO1VBQWxCLGtCQUFrQixFQUFBO0FBckJ4QjtJQXdCUSxzQkFBc0IsRUFBQTtBQXhCOUI7TUEyQlUsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsbUJBQW1CLEVBQUE7QUFwQzdCO01Bd0NVLHlCQUF5QixFQUFBO0FBeENuQztNQTRDVSx5QkFBeUIsRUFBQTtBQTVDbkM7TUFnRFUseUJBQXlCLEVBQUE7QUFoRG5DO01Bb0RVLHlCQUF5QixFQUFBO0FBcERuQztNQXdEVSx5QkFBeUIsRUFBQTtBQXhEbkM7TUE0RFUseUJBQXlCLEVBQUE7QUE1RG5DO01BZ0VVLHlCQUF5QixFQUFBO0FBaEVuQztNQW9FVSx5QkFBeUIsRUFBQTtBQXBFbkM7TUF3RVUseUJBQXlCLEVBQUE7QUF4RW5DO01BNEVVLHlCQUF5QjtNQUN6QixjQUFjLEVBQUE7QUE3RXhCO0VBb0ZJLGVBQWUsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2Jyb3dzZS1sb3R0ZXJpZXMvY29tcG9uZW50cy9maWx0ZXJzL2NvbXBvbmVudHMvbmVhcmJ5LXN1YndheS1tb2RhbC9uZWFyYnktc3Vid2F5LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vVHlwb2dyYXBoeVxuJGZvbnQtbWFpbjogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LWhlYWRpbmc6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1saW5lYXdlc29tZTogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweC8xIFwiTGluZUF3ZXNvbWVcIjtcbiRmb250LWZvbnRhd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiRodG1sLWZvbnQtc2l6ZS1sZzogMTZweDtcbiRodG1sLWZvbnQtc2l6ZS1tZDogMTVweDtcbiRodG1sLWZvbnQtc2l6ZS1zbTogMTRweDtcbiRodG1sLWZvbnQtc2l6ZS14czogMTNweDtcblxuJGh0bWwtZm9udC13ZWlnaHQ6IDQwMDtcblxuLy8gVGhlbWUgQ29sb3JzXG4kY29sb3Itb2Zmc2V0OiA2JTsgLy8gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIGxpZ2h0ZXIgYW5kIGRhcmtlciB2YXJpZW50cyBvZiBhIHNwZWNpZmljIGNvbG9yXG5cbiRiYXNlOiAjZmFmYWZhOyAvL3VzZWQgcHJpbWFyaWx5IGFzIG9mZi13aGl0ZSBib2R5IGJhY2tncm91bmQgY29sb3JcblxuJHByaW1hcnk6ICMwMjAwNjM7XG4kc2Vjb25kYXJ5OiAjZmFmYWZhO1xuJHNlY29uZGFyeS1ibHVlOiByZ2IoMTA5LCAxNzgsIDI1NSk7IC8vIHdlIHNob3VsZCByZXBsYWNlIHRoaXNcbiRhY2NlbnQ6ICNmY2IzMjM7IC8vIzAwYzVkYztcbiRmb2N1czogIzk4MTZmNDtcblxuJHN1Y2Nlc3M6ICMwMGU2YWI7XG4kd2FybmluZzogI2ZmYjgyMjtcbiRkYW5nZXI6ICNmZjJiMmI7IC8vI2Y0NTE2YztcbiRpbmZvOiAjNTU3OGViOyAvLyMzNmEzZjc7XG5cbiRtZXRhbDogI2M0YzVkNjtcbiRtZXRhbC1saWdodDogbGlnaHRlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuJG1ldGFsLWRhcms6IGRhcmtlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuXG4vLyBncmV5c1xuJGxpZ2h0OiAjZmZmO1xuJGRhcms6ICMyYzJlM2U7XG4kZ3JleS0yMDogIzMzMzMzMztcbiRncmV5LTMwOiAjNGQ0ZDRkO1xuJGdyZXktNTA6ICM4MDgwODA7XG4kZ3JleS03MDogI2IzYjNiMztcbiRncmV5LTkwOiAjZTZlNmU2O1xuJGdyZXktOTU6ICNmMmYyZjI7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbi8vIEV4dGVuZGVkIENvbG9yIFBhbGV0dGVcbi8vIFRPRE86IFJldmlldyB0aGVzZSBjb2xvcnNcbiRkYXJrLWJsdWU6ICMwMjM5NzA7XG4kYmx1ZTogIzAxN2FjZTtcbiRjZXJ1bGVhbjogIzAxN2FjZTtcbiRsaWdodC1ibHVlOiAjY2NlYWZmO1xuJHBhbGUtYmx1ZTogI2YxZjlmZjtcbiRkYXJrLXRlYWw6ICMwMDY0NmU7XG4kdGVhbDogIzAwYzFkNDtcbiRsaWdodC10ZWFsOiAjY2NmYWZmO1xuJHBhbGUtdGVhbDogI2Y1ZmVmZjtcbiRkYXJrLWdyZWVuOiAjMGE1YzQwO1xuJGdyZWVuOiAjMTRiODgxO1xuJGxpZ2h0LWdyZWVuOiAjYTNmNWQ5O1xuJHBhbGUtZ3JlZW46ICNmNmZlZmI7XG4kZGFyay15ZWxsb3c6ICM5OTc0MDA7XG4keWVsbG93OiAjZmZjZTMzO1xuJGxpZ2h0LXllbGxvdzogI2ZmZjNjYztcbiRwYWxlLXllbGxvdzogI2ZmZmRmNTtcbiRkYXJrLXJlZDogIzY2MGEwMDtcbiRyZWQ6ICNjYzE0MDA7XG4kbGlnaHQtcmVkOiAjZmZkMWNjO1xuJHBhbGUtcmVkOiAjZmZmNmY1O1xuXG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcImFjY2VudFwiOiAkYWNjZW50LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsIFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmcsIFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImluZm9cIjogJGluZm8sXG4gIFwibWV0YWxcIjogJG1ldGFsLFxuICBcImZvY3VzXCI6ICRmb2N1cyxcbiAgXCJncmV5LTIwXCI6ICRncmV5LTIwLCBcbiAgXCJncmV5LTMwXCI6ICRncmV5LTMwLFxuICBcImdyZXktNTBcIjogJGdyZXktNTAsXG4gIFwiZ3JleS03MFwiOiAkZ3JleS03MCxcbiAgXCJncmV5LTkwXCI6ICRncmV5LTkwLFxuICBcImdyZXktOTVcIjogJGdyZXktOTUsXG4gIFwiYmFzZVwiOiAkYmFzZSxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJ3aGl0ZVwiOiAkd2hpdGUsXG4gIFwiYmxhY2tcIjogJGJsYWNrLFxuICBcImJsdWVcIjogJGJsdWVcbik7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuJGd0LXNtYWxsLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBzbSkgIWRlZmF1bHQ7IC8vIDU3NlxuJGd0LW1lZGl1bS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbWQpICFkZWZhdWx0OyAvLyA3NjhcbiRndC1sYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbGcpICFkZWZhdWx0OyAvLyA5OTJcbiRndC14bGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHhsKSAhZGVmYXVsdDsgLy8gMTIwMFxuXG4vKiBTaGFkb3dzICovXG4kc2hhZG93LXNtOiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xuJHNoYWRvdy1tZDogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjA4KTsgLy9kZWZhdWx0XG4kc2hhZG93LWxnOiAwIDE1cHggMzBweCAwIHJnYmEoMCwwLDAsMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuJHNoYWRvdy1lbGV2YXRlOiAkc2hhZG93LWxnOyAvLyBvbiBob3ZlclxuXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbiRzcGFjaW5nLXh4czogMC4zMzNyZW07ICAgICAvLyBzbWFsbCBnYXAgICAgICAgICAgIC0gNXB4ICAgICh4eHMpXG4kc3BhY2luZy14czogMC42NjdyZW07ICAgICAgLy8gUmVsYXRlZCBEaXJlY3RseSAgICAtIDEwcHggICAoeHMpXG4kc3BhY2luZy1zbTogMXJlbTsgICAgICAgICAgLy8gUmVsYXRlZCBJbmRpcmVjdGx5ICAtIDE1cHggICAoc20pXG4kc3BhY2luZy1tZDogMS4zM3JlbTsgICAgICAgLy8gUmVsYXRlZCBHcm91cCAgICAgICAtIDIwcHggICAobWQpICAvL2RlZmF1bHRcbiRzcGFjaW5nLWxnOiAycmVtOyAgICAgICAgICAvLyBVbnJlbGF0ZWQgR3JvdXAgICAgIC0gMzBweCAgIChsZylcbiRzcGFjaW5nLXhsOiAyLjY2N3JlbTsgICAgICAvLyBOZXcgU2VjdGlvbiAgICAgICAgIC0gNDBweCAgICh4bClcbiRzcGFjaW5nLXh4bDogNHJlbTsgICAgICAgICAvLyBOZXcgU2VjdGlvbiAoTGFyZ2UpIC0gNjBweCAgICh4eGwpXG5cbiRzcGFjaW5nLXNpemVzOiAoXG4gIFwiMFwiOiAwLFxuICBcIjVcIjogJHNwYWNpbmcteHhzLFxuICBcIjEwXCI6ICRzcGFjaW5nLXhzLFxuICBcIjE1XCI6ICRzcGFjaW5nLXNtLFxuICBcIjIwXCI6ICRzcGFjaW5nLW1kLFxuICBcIjMwXCI6ICRzcGFjaW5nLWxnLFxuICBcIjQwXCI6ICRzcGFjaW5nLXhsLFxuICBcIjYwXCI6ICRzcGFjaW5nLXh4bCxcbiAgXCIxNS1lbVwiOiAxLjVyZW0sXG4gIFwiMjItZW1cIjogMi4ycmVtLFxuICBcInh4c1wiOiAkc3BhY2luZy14eHMsXG4gIFwieHNcIjogJHNwYWNpbmcteHMsXG4gIFwic21cIjogJHNwYWNpbmctc20sXG4gIFwibWRcIjogJHNwYWNpbmctbWQsXG4gIFwibGdcIjogJHNwYWNpbmctbGcsXG4gIFwieGxcIjogJHNwYWNpbmcteGwsXG4gIFwieHhsXCI6ICRzcGFjaW5nLXh4bCwgIFxuICApO1xuXG4vKiBBbmltYXRpb25zICovXG4kYW5pbWF0aW9uLXhzOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tc2g6IGFsbCAwLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1tZDogYWxsIDAuMzVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpOyAvL2RlZmF1bHRcbiRhbmltYXRpb24tbGc6IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14bDogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXh4bDogYWxsIDEuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cbiRhbmltYXRpb24tZGVmYXVsdDogJGFuaW1hdGlvbi1tZDtcblxuJGFuaW1hdGlvbi1mYWRlLWluOiBmYWRlLWluIDFzIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtb3V0OiBmYWRlLW91dCAxcyBlYXNlLW91dCBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLXRvcDogZmFkZS1pbi10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbTogZmFkZS1pbi1ib3R0b20gMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcjogcHVmZi1pbi1jZW50ZXIgMC43cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcjogcHVmZi1vdXQtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgYm90aDtcbiRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbDogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcbiRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoOyAvLyBmb3IgdGV4dFxuJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wOiBzY2FsZS1pbi12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcDogc2NhbGUtb3V0LXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG4kYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyBpbmZpbml0ZTtcbiRhbmltYXRpb24tcHVsc2UtMzogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgMztcbiRhbmltYXRpb24tcHVsc2UtMTogc2hhZG93LXB1bHNlIDFzIDE7XG5cbi8vIFlvdSBjYW4gdXNlIGFueSBvZiB0aGVzZSBuYW1lcyB0byBhbmltYXRlIEhUTUwgZWxlbWVudHMgb24gaW5pdGlhdGlvblxuJGFuaW1hdGlvbnM6IChcbiAgXCJmYWRlLWluXCI6ICRhbmltYXRpb24tZmFkZS1pbixcbiAgXCJmYWRlLW91dFwiOiAkYW5pbWF0aW9uLWZhZGUtb3V0LFxuICBcImZhZGUtaW4tdG9wXCI6ICRhbmltYXRpb24tZmFkZS1pbi10b3AsXG4gIFwiZmFkZS1pbi1ib3R0b21cIjogJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbSxcbiAgXCJwdWZmLWluLWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyLFxuICBcInB1ZmYtb3V0LWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcixcbiAgXCJzaGFrZS1ob3Jpem9udGFsXCI6ICRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbCxcbiAgXCJmb2N1cy1pbi1jb250cmFjdC1iY2tcIjogJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2ssXG4gIFwic2NhbGUtaW4tdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3AsXG4gIFwic2NhbGUtb3V0LXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcCxcbiAgXCJwdWxzZS1pbmZpbml0ZVwiOiAkYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlLFxuICBcInB1bHNlLTNcIjogJGFuaW1hdGlvbi1wdWxzZS0zLFxuICBcInB1bHNlLTFcIjogJGFuaW1hdGlvbi1wdWxzZS0xXG4pO1xuXG4vKiBCb3JkZXJzICovXG4kYm9yZGVyLXNpemUtc206IDAuMTI1cmVtO1xuJGJvcmRlci1zaXplLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1zaXplLWxnOiAwLjVyZW07XG4kYm9yZGVyLXNpemUtMTogMXB4O1xuJGJvcmRlci1zaXplLTI6IDJweDtcbiRib3JkZXItc2l6ZS0zOiAzcHg7XG4kYm9yZGVyLXNpemUtNTogNXB4O1xuJGJvcmRlci1zaXplLTEwOiAxMHB4O1xuXG4kYm9yZGVyLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1zaXplLXNtLFxuICBcIm1kXCI6ICRib3JkZXItc2l6ZS1tZCxcbiAgXCJsZ1wiOiAkYm9yZGVyLXNpemUtbGcsXG4gIFwiMVwiOiAkYm9yZGVyLXNpemUtMSxcbiAgXCIyXCI6ICRib3JkZXItc2l6ZS0yLFxuICBcIjNcIjogJGJvcmRlci1zaXplLTMsXG4gIFwiNVwiOiAkYm9yZGVyLXNpemUtNSxcbiAgXCIxMFwiOiAkYm9yZGVyLXNpemUtMTBcbik7XG5cbi8qIENvcm5lcnMgKi9cbiRib3JkZXItcmFkaXVzLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItcmFkaXVzLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNXJlbTtcbiRib3JkZXItcmFkaXVzLTI6IDJweDtcbiRib3JkZXItcmFkaXVzLTQ6IDRweDtcbiRib3JkZXItcmFkaXVzLTY6IDZweDtcbiRib3JkZXItcmFkaXVzLTEwOiAxMHB4O1xuJGJvcmRlci1yYWRpdXMtMTU6IDE1cHg7XG4kYm9yZGVyLXJhZGl1cy0yMDogMjBweDtcbiRib3JkZXItcmFkaXVzLWhhbGY6IDUwJTtcbiRib3JkZXItcmFkaXVzLWZ1bGw6IDEwMCU7XG5cbiRib3JkZXItcmFkaXVzLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1yYWRpdXMtc20sXG4gIFwibWRcIjogJGJvcmRlci1yYWRpdXMtbWQsIC8vZGVmYXVsdFxuICBcImxnXCI6ICRib3JkZXItcmFkaXVzLWxnLFxuICBcIjJcIjogJGJvcmRlci1yYWRpdXMtMixcbiAgXCI0XCI6ICRib3JkZXItcmFkaXVzLTQsXG4gIFwiNlwiOiAkYm9yZGVyLXJhZGl1cy02LFxuICBcIjEwXCI6ICRib3JkZXItcmFkaXVzLTEwLFxuICBcIjE1XCI6ICRib3JkZXItcmFkaXVzLTE1LFxuICBcIjIwXCI6ICRib3JkZXItcmFkaXVzLTIwLFxuICBcImhhbGZcIjogJGJvcmRlci1yYWRpdXMtaGFsZixcbiAgXCJmdWxsXCI6ICRib3JkZXItcmFkaXVzLWZ1bGwsXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5maWx0ZXItbW9kYWwtdGl0bGUtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwIDAgMC43NXJlbTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICAuYWN0aXZlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLW1vZGFsLWNvbnRlbnQtc2VjdGlvbiB7XHJcbiAgICAgIGNvbHVtbnM6IDYuNzVyZW0gNDtcclxuXHJcbiAgICAgIC5jaGVja2JveC1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcblxyXG4gICAgICAgIC5zdWJ3YXktaWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMS41NjNyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuNTYzcmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzg1ODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzUyZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MzNjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnB1cnBsZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkzM2FkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsdWUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzlhNjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vcmFuZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjMxOTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW1lR3JlZW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjYmU0NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5icm93biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk2NjMzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpZ2h0R3JheSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdhOWFjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRhcmtHcmF5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgxODM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueWVsbG93IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2NjMGE7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250cm9sIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/nearby-subway-modal/nearby-subway-modal.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/nearby-subway-modal/nearby-subway-modal.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: NearbySubwayModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbySubwayModalComponent", function() { return NearbySubwayModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NearbySubwayModalComponent = /** @class */ (function () {
    function NearbySubwayModalComponent(filterRef, data) {
        this.filterRef = filterRef;
        this.data = data;
        this.isAllSelected = false;
        this.triggerElementRef = data.triggerRef;
        this.subwayData = data.sourceData;
    }
    NearbySubwayModalComponent.prototype.ngOnInit = function () {
        var rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
        console.log(rect, rect.bottom);
        this.filterRef.updatePosition({
            left: rect.left - 50 + "px",
            top: rect.bottom + 20 + "px"
        });
        this.updateSelectedButtons();
    };
    NearbySubwayModalComponent.prototype.selectAll = function () {
        this.isAllSelected = true;
        this.subwayData.forEach(function (i) { return (i.isSelected = true); });
    };
    NearbySubwayModalComponent.prototype.clearAll = function () {
        this.isAllSelected = false;
        this.subwayData.forEach(function (i) { return (i.isSelected = false); });
    };
    NearbySubwayModalComponent.prototype.onDoneClick = function () {
        this.filterRef.close({ data: this.subwayData });
    };
    NearbySubwayModalComponent.prototype.updateSelectedButtons = function () {
        this.isAllSelected = this.subwayData.length == this.subwayData.filter(function (i) { return i.isSelected; }).length;
    };
    NearbySubwayModalComponent.prototype.isSelectAllActive = function () {
        return {
            active: this.subwayData.some(function (i) { return !i.isSelected; })
        };
    };
    NearbySubwayModalComponent.prototype.isClearAllActive = function () {
        return {
            active: this.subwayData.some(function (i) { return i.isSelected; })
        };
    };
    NearbySubwayModalComponent.prototype.getData = function () {
        return this.subwayData;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('subwayList', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NearbySubwayModalComponent.prototype, "subwayList", void 0);
    NearbySubwayModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nearby-subway-modal',
            template: __webpack_require__(/*! ./nearby-subway-modal.component.html */ "./src/app/modules/browse-lotteries/components/filters/components/nearby-subway-modal/nearby-subway-modal.component.html"),
            styles: [__webpack_require__(/*! ./nearby-subway-modal.component.scss */ "./src/app/modules/browse-lotteries/components/filters/components/nearby-subway-modal/nearby-subway-modal.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NearbySubwayModalComponent);
    return NearbySubwayModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal-animations.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal-animations.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: tabsAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabsAnimations", function() { return tabsAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");

var tabsAnimations = {
    /** Animation translates a tab along the X axis. */
    translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('translateTab', [
        // Note: transitions to `none` instead of 0, because some browsers might blur the content.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('mainListIsVisible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0%, 0, 0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('mainListIsHidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-100%, 0, 0)', display: 'none' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('subListIsVisible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0%, 0, 0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('subListIsHidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(100%, 0, 0)', display: 'none' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('subTreeListIsVisible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0%, 0, 0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('subTreeListIsHidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(100%, 0, 0)', display: 'none' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ])
};


/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 mat-dialog-title class=\"filter-modal-title-section\">\r\n  <p class=\"title\">\r\n    {{displayName}}\r\n  </p>\r\n  <p class=\"close-button\" (click)=\"onDoneClick()\">\r\n    <i class=\"la la-close\"></i>\r\n  </p>\r\n</h5>\r\n<div mat-dialog-content class=\"filter-container\">\r\n  <app-filter-tags-input\r\n    [data]=\"{ tags: selectedNeighborhoods }\"\r\n    (onChangeInput)=\"onChangeFilterTagInput($event)\"\r\n    (onDeleteTag)=\"onDeleteFilterTag($event)\">\r\n  </app-filter-tags-input>\r\n\r\n  <div class=\"list-wrapper\">\r\n    <div [@translateTab]=\"!isActiveMainList ? 'mainListIsHidden' : 'mainListIsVisible'\"\r\n         class=\"neighborhoods-list-section\">\r\n      <div *ngFor=\"let item of filteredList;\">\r\n        <div class=\"neighborhoods-list\">\r\n          <mat-checkbox [(ngModel)]=\"item.isSelected \"\r\n                        (change)=\"onChangeNeighborhoodsGroup(item)\" class=\"neighborhoods-checkbox\">\r\n            <div class=\"neighborhoods-title\">\r\n              {{item.title}}\r\n            </div>\r\n          </mat-checkbox>\r\n          <div *ngIf=\"item.subList?.length && !isActiveTreeList\" class=\"neighborhoods-icons-section\"\r\n               (click)=\"switchToSubList(item.id);\">\r\n            <mat-icon>keyboard_arrow_right</mat-icon>\r\n          </div>\r\n\r\n          <div *ngIf=\"item.subList?.length && isActiveTreeList\" class=\"neighborhoods-icons-section open-section\">\r\n            <mat-icon>keyboard_arrow_down</mat-icon>\r\n          </div>\r\n        </div>\r\n\r\n        <div  *ngIf=\"isActiveTreeList\" [@translateTab]=\"isActiveTreeList ? 'subTreeListIsVisible' : 'subTreeListIsHidden'\">\r\n          <div *ngFor=\"let subItem of item.subList\" class=\"neighborhoods-list neighborhoods-list-subtree\">\r\n            <mat-checkbox [(ngModel)]=\"subItem.isSelected\"\r\n                          (change)=\"onChangeNeighborhoodsGroup(subItem)\" class=\"neighborhoods-checkbox\">\r\n              <div class=\"neighborhoods-title\">\r\n                {{subItem.title}}\r\n              </div>\r\n            </mat-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"!filteredList.length\" class=\"neighborhoods-list\">\r\n        no search result\r\n      </div>\r\n    </div>\r\n\r\n    <div [@translateTab]=\"!isActiveMainList ? 'subListIsVisible' : 'subListIsHidden'\"\r\n         class=\"neighborhoods-sublist-section\">\r\n      <div (click)=\"switchToMainList()\" class=\"neighborhoods-list-back-btn\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>\r\n        Go back\r\n      </div>\r\n\r\n      <div class=\"neighborhoods-sublist-body\">\r\n        <div class=\"sub-list neighborhoods-list\" *ngFor=\"let subItem of subList\">\r\n          <mat-checkbox [(ngModel)]=\"subItem.isSelected\"\r\n                        class=\"neighborhoods-checkbox\"\r\n                        (change)=\"onChangeNeighborhoodsItem(subItem)\">\r\n            <div class=\"neighborhoods-title\">\r\n              {{subItem.title}}\r\n              <div class=\"neighborhoods-sub-info\">{{subItem.id}}</div>\r\n            </div>\r\n          </mat-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host {\n  display: block;\n  width: 29.813rem; }\n:host .mat-dialog-title {\n    margin: 0;\n    display: flex;\n    justify-content: space-between; }\n:host .neighborhoods-list {\n    display: flex;\n    align-items: center;\n    height: 64px;\n    border-bottom: 1px solid #e6e6e6;\n    padding: 0 1rem; }\n:host .neighborhoods-list-subtree {\n    padding-left: 2rem; }\n:host .neighborhoods-title {\n    flex-grow: 1;\n    margin: 0 0 0 12px; }\n:host .neighborhoods-sub-info {\n    font-size: 0.75rem;\n    color: #808080; }\n:host .list-wrapper {\n    position: relative;\n    height: 320px; }\n:host .neighborhoods-list-section {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 320px; }\n:host .neighborhoods-sublist-section {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n:host .neighborhoods-sublist-body {\n    position: absolute;\n    top: 48px;\n    left: 0;\n    width: 100%;\n    height: 272px; }\n:host .filter-container {\n    padding: 0 0;\n    overflow-y: auto;\n    margin-bottom: -24px; }\n:host .neighborhoods-list-back-btn {\n    cursor: pointer;\n    border-bottom: 1px solid #e6e6e6;\n    display: flex;\n    align-items: center;\n    height: 48px;\n    padding: 0 1rem;\n    color: #017ace;\n    font-weight: 500; }\n:host .neighborhoods-list-back-btn:hover {\n      color: #023970; }\n:host .neighborhoods-list-back-btn /deep/ .mat-icon {\n      height: auto;\n      width: auto;\n      margin-left: -5px; }\n:host .neighborhoods-icons-section {\n    height: 100%;\n    width: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    cursor: pointer; }\n:host .neighborhoods-icons-section .mat-icon {\n      width: auto;\n      height: auto;\n      font-size: 2rem !important;\n      color: #017ace; }\n:host .neighborhoods-icons-section.open-section .mat-icon {\n      color: #b3b3b3; }\n:host .neighborhoods-checkbox {\n    display: flex;\n    flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvY29tcG9uZW50cy9uZWlnaGJvcmhvb2RzLW1vZGFsL0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvZmlsdGVycy9jb21wb25lbnRzL25laWdoYm9yaG9vZHMtbW9kYWwvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcbW9kdWxlc1xcYnJvd3NlLWxvdHRlcmllc1xcY29tcG9uZW50c1xcZmlsdGVyc1xcY29tcG9uZW50c1xcbmVpZ2hib3Job29kcy1tb2RhbFxcbmVpZ2hib3Job29kcy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQStGQSwyQkFBQTtBQWFBLFlBQUE7QUFNQSx1QkFBQTtBQTZCQSxlQUFBO0FBeUNBLFlBQUE7QUFxQkEsWUFBQTtBQ3ZOQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQUZsQjtJQUtJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOEJBQThCLEVBQUE7QUFQbEM7SUFXSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQ0RxQ2E7SUNwQ2IsZUFBZSxFQUFBO0FBZm5CO0lBbUJJLGtCQUFrQixFQUFBO0FBbkJ0QjtJQXVCSSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7QUF4QnRCO0lBNEJJLGtCQUFrQjtJQUNsQixjRG9CYSxFQUFBO0FDakRqQjtJQWlDSSxrQkFBa0I7SUFDbEIsYUFBYSxFQUFBO0FBbENqQjtJQXNDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBRVgsYUFBYSxFQUFBO0FBM0NqQjtJQStDSSwwQ0FBa0M7WUFBbEMsa0NBQWtDLEVBQUE7QUEvQ3RDO0lBbURJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFFWCxhQUFhLEVBQUE7QUF4RGpCO0lBNERJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0JBQW9CLEVBQUE7QUE5RHhCO0lBa0VJLGVBQWU7SUFDZixnQ0RoQmE7SUNpQmIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNEYlU7SUNjVixnQkFBZ0IsRUFBQTtBQXpFcEI7TUE0RU0sY0RsQmEsRUFBQTtBQzFEbkI7TUFpRlEsWUFBWTtNQUNaLFdBQVc7TUFDWCxpQkFBaUIsRUFBQTtBQW5GekI7SUF5RkksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUE5Rm5CO01BaUdNLFdBQVc7TUFDWCxZQUFZO01BQ1osMEJBQTBCO01BQzFCLGNEekNRLEVBQUE7QUMzRGQ7TUF5R1EsY0R2RFMsRUFBQTtBQ2xEakI7SUErR0ksYUFBYTtJQUNiLFlBQVksRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2Jyb3dzZS1sb3R0ZXJpZXMvY29tcG9uZW50cy9maWx0ZXJzL2NvbXBvbmVudHMvbmVpZ2hib3Job29kcy1tb2RhbC9uZWlnaGJvcmhvb2RzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vVHlwb2dyYXBoeVxuJGZvbnQtbWFpbjogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LWhlYWRpbmc6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1saW5lYXdlc29tZTogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweC8xIFwiTGluZUF3ZXNvbWVcIjtcbiRmb250LWZvbnRhd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiRodG1sLWZvbnQtc2l6ZS1sZzogMTZweDtcbiRodG1sLWZvbnQtc2l6ZS1tZDogMTVweDtcbiRodG1sLWZvbnQtc2l6ZS1zbTogMTRweDtcbiRodG1sLWZvbnQtc2l6ZS14czogMTNweDtcblxuJGh0bWwtZm9udC13ZWlnaHQ6IDQwMDtcblxuLy8gVGhlbWUgQ29sb3JzXG4kY29sb3Itb2Zmc2V0OiA2JTsgLy8gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIGxpZ2h0ZXIgYW5kIGRhcmtlciB2YXJpZW50cyBvZiBhIHNwZWNpZmljIGNvbG9yXG5cbiRiYXNlOiAjZmFmYWZhOyAvL3VzZWQgcHJpbWFyaWx5IGFzIG9mZi13aGl0ZSBib2R5IGJhY2tncm91bmQgY29sb3JcblxuJHByaW1hcnk6ICMwMjAwNjM7XG4kc2Vjb25kYXJ5OiAjZmFmYWZhO1xuJHNlY29uZGFyeS1ibHVlOiByZ2IoMTA5LCAxNzgsIDI1NSk7IC8vIHdlIHNob3VsZCByZXBsYWNlIHRoaXNcbiRhY2NlbnQ6ICNmY2IzMjM7IC8vIzAwYzVkYztcbiRmb2N1czogIzk4MTZmNDtcblxuJHN1Y2Nlc3M6ICMwMGU2YWI7XG4kd2FybmluZzogI2ZmYjgyMjtcbiRkYW5nZXI6ICNmZjJiMmI7IC8vI2Y0NTE2YztcbiRpbmZvOiAjNTU3OGViOyAvLyMzNmEzZjc7XG5cbiRtZXRhbDogI2M0YzVkNjtcbiRtZXRhbC1saWdodDogbGlnaHRlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuJG1ldGFsLWRhcms6IGRhcmtlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuXG4vLyBncmV5c1xuJGxpZ2h0OiAjZmZmO1xuJGRhcms6ICMyYzJlM2U7XG4kZ3JleS0yMDogIzMzMzMzMztcbiRncmV5LTMwOiAjNGQ0ZDRkO1xuJGdyZXktNTA6ICM4MDgwODA7XG4kZ3JleS03MDogI2IzYjNiMztcbiRncmV5LTkwOiAjZTZlNmU2O1xuJGdyZXktOTU6ICNmMmYyZjI7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbi8vIEV4dGVuZGVkIENvbG9yIFBhbGV0dGVcbi8vIFRPRE86IFJldmlldyB0aGVzZSBjb2xvcnNcbiRkYXJrLWJsdWU6ICMwMjM5NzA7XG4kYmx1ZTogIzAxN2FjZTtcbiRjZXJ1bGVhbjogIzAxN2FjZTtcbiRsaWdodC1ibHVlOiAjY2NlYWZmO1xuJHBhbGUtYmx1ZTogI2YxZjlmZjtcbiRkYXJrLXRlYWw6ICMwMDY0NmU7XG4kdGVhbDogIzAwYzFkNDtcbiRsaWdodC10ZWFsOiAjY2NmYWZmO1xuJHBhbGUtdGVhbDogI2Y1ZmVmZjtcbiRkYXJrLWdyZWVuOiAjMGE1YzQwO1xuJGdyZWVuOiAjMTRiODgxO1xuJGxpZ2h0LWdyZWVuOiAjYTNmNWQ5O1xuJHBhbGUtZ3JlZW46ICNmNmZlZmI7XG4kZGFyay15ZWxsb3c6ICM5OTc0MDA7XG4keWVsbG93OiAjZmZjZTMzO1xuJGxpZ2h0LXllbGxvdzogI2ZmZjNjYztcbiRwYWxlLXllbGxvdzogI2ZmZmRmNTtcbiRkYXJrLXJlZDogIzY2MGEwMDtcbiRyZWQ6ICNjYzE0MDA7XG4kbGlnaHQtcmVkOiAjZmZkMWNjO1xuJHBhbGUtcmVkOiAjZmZmNmY1O1xuXG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcImFjY2VudFwiOiAkYWNjZW50LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsIFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmcsIFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImluZm9cIjogJGluZm8sXG4gIFwibWV0YWxcIjogJG1ldGFsLFxuICBcImZvY3VzXCI6ICRmb2N1cyxcbiAgXCJncmV5LTIwXCI6ICRncmV5LTIwLCBcbiAgXCJncmV5LTMwXCI6ICRncmV5LTMwLFxuICBcImdyZXktNTBcIjogJGdyZXktNTAsXG4gIFwiZ3JleS03MFwiOiAkZ3JleS03MCxcbiAgXCJncmV5LTkwXCI6ICRncmV5LTkwLFxuICBcImdyZXktOTVcIjogJGdyZXktOTUsXG4gIFwiYmFzZVwiOiAkYmFzZSxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJ3aGl0ZVwiOiAkd2hpdGUsXG4gIFwiYmxhY2tcIjogJGJsYWNrLFxuICBcImJsdWVcIjogJGJsdWVcbik7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuJGd0LXNtYWxsLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBzbSkgIWRlZmF1bHQ7IC8vIDU3NlxuJGd0LW1lZGl1bS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbWQpICFkZWZhdWx0OyAvLyA3NjhcbiRndC1sYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbGcpICFkZWZhdWx0OyAvLyA5OTJcbiRndC14bGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHhsKSAhZGVmYXVsdDsgLy8gMTIwMFxuXG4vKiBTaGFkb3dzICovXG4kc2hhZG93LXNtOiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xuJHNoYWRvdy1tZDogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjA4KTsgLy9kZWZhdWx0XG4kc2hhZG93LWxnOiAwIDE1cHggMzBweCAwIHJnYmEoMCwwLDAsMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuJHNoYWRvdy1lbGV2YXRlOiAkc2hhZG93LWxnOyAvLyBvbiBob3ZlclxuXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbiRzcGFjaW5nLXh4czogMC4zMzNyZW07ICAgICAvLyBzbWFsbCBnYXAgICAgICAgICAgIC0gNXB4ICAgICh4eHMpXG4kc3BhY2luZy14czogMC42NjdyZW07ICAgICAgLy8gUmVsYXRlZCBEaXJlY3RseSAgICAtIDEwcHggICAoeHMpXG4kc3BhY2luZy1zbTogMXJlbTsgICAgICAgICAgLy8gUmVsYXRlZCBJbmRpcmVjdGx5ICAtIDE1cHggICAoc20pXG4kc3BhY2luZy1tZDogMS4zM3JlbTsgICAgICAgLy8gUmVsYXRlZCBHcm91cCAgICAgICAtIDIwcHggICAobWQpICAvL2RlZmF1bHRcbiRzcGFjaW5nLWxnOiAycmVtOyAgICAgICAgICAvLyBVbnJlbGF0ZWQgR3JvdXAgICAgIC0gMzBweCAgIChsZylcbiRzcGFjaW5nLXhsOiAyLjY2N3JlbTsgICAgICAvLyBOZXcgU2VjdGlvbiAgICAgICAgIC0gNDBweCAgICh4bClcbiRzcGFjaW5nLXh4bDogNHJlbTsgICAgICAgICAvLyBOZXcgU2VjdGlvbiAoTGFyZ2UpIC0gNjBweCAgICh4eGwpXG5cbiRzcGFjaW5nLXNpemVzOiAoXG4gIFwiMFwiOiAwLFxuICBcIjVcIjogJHNwYWNpbmcteHhzLFxuICBcIjEwXCI6ICRzcGFjaW5nLXhzLFxuICBcIjE1XCI6ICRzcGFjaW5nLXNtLFxuICBcIjIwXCI6ICRzcGFjaW5nLW1kLFxuICBcIjMwXCI6ICRzcGFjaW5nLWxnLFxuICBcIjQwXCI6ICRzcGFjaW5nLXhsLFxuICBcIjYwXCI6ICRzcGFjaW5nLXh4bCxcbiAgXCIxNS1lbVwiOiAxLjVyZW0sXG4gIFwiMjItZW1cIjogMi4ycmVtLFxuICBcInh4c1wiOiAkc3BhY2luZy14eHMsXG4gIFwieHNcIjogJHNwYWNpbmcteHMsXG4gIFwic21cIjogJHNwYWNpbmctc20sXG4gIFwibWRcIjogJHNwYWNpbmctbWQsXG4gIFwibGdcIjogJHNwYWNpbmctbGcsXG4gIFwieGxcIjogJHNwYWNpbmcteGwsXG4gIFwieHhsXCI6ICRzcGFjaW5nLXh4bCwgIFxuICApO1xuXG4vKiBBbmltYXRpb25zICovXG4kYW5pbWF0aW9uLXhzOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tc2g6IGFsbCAwLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1tZDogYWxsIDAuMzVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpOyAvL2RlZmF1bHRcbiRhbmltYXRpb24tbGc6IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14bDogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXh4bDogYWxsIDEuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cbiRhbmltYXRpb24tZGVmYXVsdDogJGFuaW1hdGlvbi1tZDtcblxuJGFuaW1hdGlvbi1mYWRlLWluOiBmYWRlLWluIDFzIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtb3V0OiBmYWRlLW91dCAxcyBlYXNlLW91dCBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLXRvcDogZmFkZS1pbi10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbTogZmFkZS1pbi1ib3R0b20gMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcjogcHVmZi1pbi1jZW50ZXIgMC43cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcjogcHVmZi1vdXQtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgYm90aDtcbiRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbDogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcbiRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoOyAvLyBmb3IgdGV4dFxuJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wOiBzY2FsZS1pbi12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcDogc2NhbGUtb3V0LXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG4kYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyBpbmZpbml0ZTtcbiRhbmltYXRpb24tcHVsc2UtMzogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgMztcbiRhbmltYXRpb24tcHVsc2UtMTogc2hhZG93LXB1bHNlIDFzIDE7XG5cbi8vIFlvdSBjYW4gdXNlIGFueSBvZiB0aGVzZSBuYW1lcyB0byBhbmltYXRlIEhUTUwgZWxlbWVudHMgb24gaW5pdGlhdGlvblxuJGFuaW1hdGlvbnM6IChcbiAgXCJmYWRlLWluXCI6ICRhbmltYXRpb24tZmFkZS1pbixcbiAgXCJmYWRlLW91dFwiOiAkYW5pbWF0aW9uLWZhZGUtb3V0LFxuICBcImZhZGUtaW4tdG9wXCI6ICRhbmltYXRpb24tZmFkZS1pbi10b3AsXG4gIFwiZmFkZS1pbi1ib3R0b21cIjogJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbSxcbiAgXCJwdWZmLWluLWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyLFxuICBcInB1ZmYtb3V0LWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcixcbiAgXCJzaGFrZS1ob3Jpem9udGFsXCI6ICRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbCxcbiAgXCJmb2N1cy1pbi1jb250cmFjdC1iY2tcIjogJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2ssXG4gIFwic2NhbGUtaW4tdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3AsXG4gIFwic2NhbGUtb3V0LXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcCxcbiAgXCJwdWxzZS1pbmZpbml0ZVwiOiAkYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlLFxuICBcInB1bHNlLTNcIjogJGFuaW1hdGlvbi1wdWxzZS0zLFxuICBcInB1bHNlLTFcIjogJGFuaW1hdGlvbi1wdWxzZS0xXG4pO1xuXG4vKiBCb3JkZXJzICovXG4kYm9yZGVyLXNpemUtc206IDAuMTI1cmVtO1xuJGJvcmRlci1zaXplLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1zaXplLWxnOiAwLjVyZW07XG4kYm9yZGVyLXNpemUtMTogMXB4O1xuJGJvcmRlci1zaXplLTI6IDJweDtcbiRib3JkZXItc2l6ZS0zOiAzcHg7XG4kYm9yZGVyLXNpemUtNTogNXB4O1xuJGJvcmRlci1zaXplLTEwOiAxMHB4O1xuXG4kYm9yZGVyLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1zaXplLXNtLFxuICBcIm1kXCI6ICRib3JkZXItc2l6ZS1tZCxcbiAgXCJsZ1wiOiAkYm9yZGVyLXNpemUtbGcsXG4gIFwiMVwiOiAkYm9yZGVyLXNpemUtMSxcbiAgXCIyXCI6ICRib3JkZXItc2l6ZS0yLFxuICBcIjNcIjogJGJvcmRlci1zaXplLTMsXG4gIFwiNVwiOiAkYm9yZGVyLXNpemUtNSxcbiAgXCIxMFwiOiAkYm9yZGVyLXNpemUtMTBcbik7XG5cbi8qIENvcm5lcnMgKi9cbiRib3JkZXItcmFkaXVzLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItcmFkaXVzLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNXJlbTtcbiRib3JkZXItcmFkaXVzLTI6IDJweDtcbiRib3JkZXItcmFkaXVzLTQ6IDRweDtcbiRib3JkZXItcmFkaXVzLTY6IDZweDtcbiRib3JkZXItcmFkaXVzLTEwOiAxMHB4O1xuJGJvcmRlci1yYWRpdXMtMTU6IDE1cHg7XG4kYm9yZGVyLXJhZGl1cy0yMDogMjBweDtcbiRib3JkZXItcmFkaXVzLWhhbGY6IDUwJTtcbiRib3JkZXItcmFkaXVzLWZ1bGw6IDEwMCU7XG5cbiRib3JkZXItcmFkaXVzLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1yYWRpdXMtc20sXG4gIFwibWRcIjogJGJvcmRlci1yYWRpdXMtbWQsIC8vZGVmYXVsdFxuICBcImxnXCI6ICRib3JkZXItcmFkaXVzLWxnLFxuICBcIjJcIjogJGJvcmRlci1yYWRpdXMtMixcbiAgXCI0XCI6ICRib3JkZXItcmFkaXVzLTQsXG4gIFwiNlwiOiAkYm9yZGVyLXJhZGl1cy02LFxuICBcIjEwXCI6ICRib3JkZXItcmFkaXVzLTEwLFxuICBcIjE1XCI6ICRib3JkZXItcmFkaXVzLTE1LFxuICBcIjIwXCI6ICRib3JkZXItcmFkaXVzLTIwLFxuICBcImhhbGZcIjogJGJvcmRlci1yYWRpdXMtaGFsZixcbiAgXCJmdWxsXCI6ICRib3JkZXItcmFkaXVzLWZ1bGwsXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjkuODEzcmVtO1xuXG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAubmVpZ2hib3Job29kcy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS05MDtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cblxuICAubmVpZ2hib3Job29kcy1saXN0LXN1YnRyZWUge1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgfVxuXG4gIC5uZWlnaGJvcmhvb2RzLXRpdGxlIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xuICB9XG5cbiAgLm5laWdoYm9yaG9vZHMtc3ViLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBjb2xvcjogJGdyZXktNTA7XG4gIH1cblxuICAubGlzdC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgfVxuXG4gIC5uZWlnaGJvcmhvb2RzLWxpc3Qtc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgfVxuXG4gIC5uZWlnaGJvcmhvb2RzLXN1Ymxpc3Qtc2VjdGlvbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxuXG4gIC5uZWlnaGJvcmhvb2RzLXN1Ymxpc3QtYm9keSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDhweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiAyNzJweDtcbiAgfVxuXG4gIC5maWx0ZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDA7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAtMjRweDsgLy8gcmVtb3ZlIG1vZGFsIHNwYWNlXG4gIH1cblxuICAubmVpZ2hib3Job29kcy1saXN0LWJhY2stYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5LTkwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJGRhcmstYmx1ZTtcbiAgICB9XG5cbiAgICAvZGVlcC8ge1xuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5laWdoYm9yaG9vZHMtaWNvbnMtc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5tYXQtaWNvbiB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICRibHVlO1xuICAgIH1cblxuICAgICYub3Blbi1zZWN0aW9uIHtcbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiAkZ3JleS03MDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmVpZ2hib3Job29kcy1jaGVja2JveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: NeighborhoodsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeighborhoodsModalComponent", function() { return NeighborhoodsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _neighborhoods_modal_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neighborhoods-modal-animations */ "./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal-animations.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NeighborhoodsModalComponent = /** @class */ (function () {
    function NeighborhoodsModalComponent(filterRef, data, fb) {
        this.filterRef = filterRef;
        this.data = data;
        this.fb = fb;
        this.activeSubListIndex = null;
        this.subList = [];
        this.isActiveMainList = true;
        this.isActiveTreeList = false;
        this.triggerElementRef = data.triggerRef;
        this.sourceData = data.sourceData;
        this.filteredList = data.sourceData;
        this.displayName = data.displayName;
        this.selectedNeighborhoods = data.selectedNeighborhoods;
    }
    NeighborhoodsModalComponent.prototype.ngOnInit = function () {
        var rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
        this.filterRef.updatePosition({
            left: rect.left - 50 + "px",
            top: rect.bottom + 20 + "px"
        });
    };
    NeighborhoodsModalComponent.prototype.onDoneClick = function () {
        this.filterRef.close({ data: this.selectedNeighborhoods });
    };
    NeighborhoodsModalComponent.prototype.onDeleteFilterTag = function (item) {
        this.deleteSelectedNeighborhoodFromList(item);
        item.isSelected = false;
    };
    NeighborhoodsModalComponent.prototype.deleteSelectedNeighborhoodFromList = function (item) {
        var deletedItemId = this.selectedNeighborhoods.indexOf(item);
        return this.selectedNeighborhoods.splice(deletedItemId, 1)[0];
    };
    NeighborhoodsModalComponent.prototype.onChangeFilterTagInput = function (value) {
        var _this = this;
        var inputValue = value.toLowerCase();
        if (inputValue) {
            this.isActiveTreeList = true;
            this.switchToMainList();
            this.filteredList = this.sourceData
                .map(function (item) {
                var _item = __assign({}, item);
                var filteredSubList = _item.subList.filter(function (subItem) {
                    return _this.applyFilerToProps(subItem, inputValue);
                });
                _item.subList = filteredSubList.slice();
                return _item;
            })
                .filter(function (item) { return item.subList.length || _this.applyFilerToProps(item, inputValue); });
        }
        else {
            this.isActiveTreeList = false;
            this.filteredList = this.sourceData;
        }
    };
    NeighborhoodsModalComponent.prototype.applyFilerToProps = function (lotteryObj, inputValue) {
        return (lotteryObj.title.toLowerCase().indexOf(inputValue) >= 0 ||
            (lotteryObj.id + '').indexOf(inputValue) >= 0);
    };
    NeighborhoodsModalComponent.prototype.onChangeNeighborhoodsItem = function (subItem) {
        var _this = this;
        if (!subItem.isSelected) {
            this.deleteSelectedNeighborhoodFromList(subItem);
            return;
        }
        // add sub item
        this.selectedNeighborhoods.push(subItem);
        var parentId = subItem.parentId;
        // remove parent selected item
        this.selectedNeighborhoods
            .filter(function (item) { return item.isSelected && item.id == parentId; })
            .forEach(function (item) {
            _this.deleteSelectedNeighborhoodFromList(item);
            item.isSelected = false;
        });
    };
    NeighborhoodsModalComponent.prototype.onChangeNeighborhoodsGroup = function (item) {
        var _this = this;
        if (!item.isSelected) {
            this.deleteSelectedNeighborhoodFromList(item);
            return;
        }
        this.selectedNeighborhoods.push(item);
        item.subList
            .filter(function (subItem) { return subItem.isSelected; })
            .forEach(function (subItem) {
            _this.deleteSelectedNeighborhoodFromList(subItem);
            subItem.isSelected = false;
        });
    };
    NeighborhoodsModalComponent.prototype.switchToSubList = function (listId) {
        this.isActiveMainList = false;
        this.isActiveTreeList = false;
        this.activeSubListIndex = listId;
        this.remapSubList();
    };
    NeighborhoodsModalComponent.prototype.remapSubList = function () {
        var _this = this;
        if (!this.filteredList.length) {
            this.subList = [];
            return;
        }
        this.subList =
            lodash__WEBPACK_IMPORTED_MODULE_4__["chain"](this.filteredList)
                .filter(function (i) { return i.id === _this.activeSubListIndex; })
                .first()
                .get('subList')
                .value() || [];
    };
    NeighborhoodsModalComponent.prototype.switchToMainList = function () {
        this.isActiveMainList = true;
        this.activeSubListIndex = null;
    };
    NeighborhoodsModalComponent.prototype.getData = function () {
        return this.selectedNeighborhoods;
    };
    NeighborhoodsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'neighborhoods-modal',
            template: __webpack_require__(/*! ./neighborhoods-modal.component.html */ "./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal.component.html"),
            animations: [_neighborhoods_modal_animations__WEBPACK_IMPORTED_MODULE_3__["tabsAnimations"].translateTab],
            styles: [__webpack_require__(/*! ./neighborhoods-modal.component.scss */ "./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NeighborhoodsModalComponent);
    return NeighborhoodsModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/single-select-modal/single-select-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/single-select-modal/single-select-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 mat-dialog-title class=\"filter-modal-title-section\">\n    <p class=\"title\">\n      {{displayName}}\n    </p>\n    <p class=\"close-button\" (click)=\"onDoneClick()\">\n      <i class=\"la la-close\"></i>\n    </p>\n  </h5>\n  <mat-dialog-content>\n\n    <form [formGroup]=\"filterForm\" class=\"group-list\">\n      <div *ngIf=\"isRadioButtonGroup\">\n          <mat-radio-group aria-label=\"Select an option\"  [formControlName]=\"controlName\" class=\"d-flex flex-column\" >\n              <mat-radio-button *ngFor=\"let field of filterValues\" color=\"accent\" labelPosition=\"after\" value=\"{{field.fieldName}}\">{{field.displayName}}</mat-radio-button>\n          </mat-radio-group>\n      </div>\n    </form>\n\n  </mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/single-select-modal/single-select-modal.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/single-select-modal/single-select-modal.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-dialog-title {\n  margin: 0;\n  display: flex;\n  justify-content: space-between; }\n\n:host .control {\n  cursor: pointer; }\n\n:host form.group-list {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvY29tcG9uZW50cy9zaW5nbGUtc2VsZWN0LW1vZGFsL0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhcHBcXG1vZHVsZXNcXGJyb3dzZS1sb3R0ZXJpZXNcXGNvbXBvbmVudHNcXGZpbHRlcnNcXGNvbXBvbmVudHNcXHNpbmdsZS1zZWxlY3QtbW9kYWxcXHNpbmdsZS1zZWxlY3QtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxTQUFTO0VBQ1QsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUpsQztFQVFJLGVBQWUsRUFBQTs7QUFSbkI7RUFZSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvZmlsdGVycy9jb21wb25lbnRzL3NpbmdsZS1zZWxlY3QtbW9kYWwvc2luZ2xlLXNlbGVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAubWF0LWRpYWxvZy10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRyb2wge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgZm9ybS5ncm91cC1saXN0e1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/components/single-select-modal/single-select-modal.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/components/single-select-modal/single-select-modal.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SingleSelectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSelectModalComponent", function() { return SingleSelectModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SingleSelectModalComponent = /** @class */ (function () {
    function SingleSelectModalComponent(filterRef, data, fb) {
        this.filterRef = filterRef;
        this.data = data;
        this.fb = fb;
        this.isRadioButtonGroup = true;
        this.triggerElementRef = data.triggerRef;
        this.displayName = data.displayName;
        this.filterValues = data.sourceData;
        this.selectedField = data.selectedField;
        this.isRadioButtonGroup = data.isRadioGroup;
        this.controlName = data.displayName.replace(/\s/g, ""); //remove any whitespace in string to set as formcontrolname
        this.filterForm = fb.group({});
        this.buildForm();
    }
    SingleSelectModalComponent.prototype.ngOnInit = function () {
        var rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
        console.log(rect, rect.bottom);
        this.filterRef.updatePosition({
            left: rect.left - 50 + "px",
            top: rect.bottom + 20 + "px"
        });
    };
    SingleSelectModalComponent.prototype.onDoneClick = function () {
        this.filterRef.close({ data: this.filterForm.value });
    };
    SingleSelectModalComponent.prototype.buildForm = function () {
        this.filterForm.addControl(this.controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.selectedField));
    };
    SingleSelectModalComponent.prototype.getFilterFormData = function () {
        return this.filterForm.value;
    };
    SingleSelectModalComponent.prototype.getData = function () {
        return this.filterForm.get(this.controlName).value;
    };
    SingleSelectModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-select-modal',
            template: __webpack_require__(/*! ./single-select-modal.component.html */ "./src/app/modules/browse-lotteries/components/filters/components/single-select-modal/single-select-modal.component.html"),
            styles: [__webpack_require__(/*! ./single-select-modal.component.scss */ "./src/app/modules/browse-lotteries/components/filters/components/single-select-modal/single-select-modal.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SingleSelectModalComponent);
    return SingleSelectModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filter-models/filter.class.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filter-models/filter.class.ts ***!
  \*******************************************************************************************/
/*! exports provided: FilterEntityClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterEntityClass", function() { return FilterEntityClass; });
var FilterEntityClass = /** @class */ (function () {
    function FilterEntityClass(data) {
        this.modalRef = {};
        this.sourceData = [];
        this.displayName = '';
        this.triggerRef = {};
        this.isSelected = false;
        this.uiLabel = '';
        this.setData(data);
    }
    FilterEntityClass.prototype.setData = function (data) {
        var _this = this;
        if (!data) {
            return false;
        }
        Object.keys(data).forEach(function (name) {
            if (data[name] != null && typeof data[name] !== 'undefined' && _this.hasOwnProperty(name)) {
                _this[name] = data[name];
            }
        });
    };
    FilterEntityClass.prototype.resetFilters = function () {
        console.log('not implemented');
    };
    FilterEntityClass.prototype.updateLabelSelected = function (count) {
        return count ? count === this.sourceData.length ? 'All' : count + " Selected" : 'Any';
    };
    FilterEntityClass.prototype.updateLabel = function () {
    };
    FilterEntityClass.prototype.setModalResult = function (data) {
    };
    FilterEntityClass.prototype.getData = function () { };
    return FilterEntityClass;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filter-models/filters.class.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filter-models/filters.class.ts ***!
  \********************************************************************************************/
/*! exports provided: FiltersModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersModel", function() { return FiltersModel; });
/* harmony import */ var _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/enums/developmentEnums */ "./src/app/shared/enums/developmentEnums.ts");
/* harmony import */ var _core_class_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/class-helper */ "./src/app/core/class-helper.ts");
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


var FiltersModel = /** @class */ (function (_super) {
    __extends(FiltersModel, _super);
    function FiltersModel(data) {
        var _this = _super.call(this) || this;
        _this.householdType = _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_0__["HouseholdTypeEnum"].Rentals;
        _this.householdIncome = null;
        _this.householdSize = null;
        _this.unitLayoutTypes = [];
        _this.monthlyRent = null;
        _this.price = null;
        _this.ownershipType = [];
        _this.neighborhoods = [];
        _this.subways = [];
        _this.amenities = [];
        _this.setData(data);
        return _this;
    }
    FiltersModel.prototype.count = function () {
        var count = 0;
        if (this.householdIncome)
            count++;
        if (this.householdSize)
            count++;
        if (this.monthlyRent)
            count++;
        if (this.price)
            count++;
        if (this.unitLayoutTypes)
            count += this.unitLayoutTypes.length;
        if (this.ownershipType)
            count += this.ownershipType.length;
        if (this.neighborhoods)
            count += this.neighborhoods.length;
        if (this.subways)
            count += this.subways.length;
        if (this.amenities)
            count += this.amenities.length;
        //householdType is ignored since it is always set
        return count;
    };
    return FiltersModel;
}(_core_class_helper__WEBPACK_IMPORTED_MODULE_1__["ClassHelper"]));



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filter-models/household-income-filter.class.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filter-models/household-income-filter.class.ts ***!
  \************************************************************************************************************/
/*! exports provided: HouseholdIncomeFilterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseholdIncomeFilterClass", function() { return HouseholdIncomeFilterClass; });
/* harmony import */ var _filter_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/filter.class.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
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


var HouseholdIncomeFilterClass = /** @class */ (function (_super) {
    __extends(HouseholdIncomeFilterClass, _super);
    function HouseholdIncomeFilterClass(value) {
        var _this = _super.call(this, value) || this;
        _this.householdIncome = null;
        _this.currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]('en-US');
        _this.uiLabel = _this.updateLabel();
        return _this;
    }
    HouseholdIncomeFilterClass.prototype.resetFilters = function () {
        this.householdIncome = null;
        this.isSelected = false;
        this.uiLabel = this.updateLabel();
    };
    HouseholdIncomeFilterClass.prototype.setModalResult = function (income) {
        this.householdIncome = income;
        this.isSelected = this.householdIncome != null;
        this.uiLabel = this.updateLabel();
    };
    HouseholdIncomeFilterClass.prototype.updateLabel = function () {
        return this.householdIncome ? this.currencyPipe.transform(this.householdIncome, '', true, '0.0') : 'Any';
    };
    HouseholdIncomeFilterClass.prototype.getClosedPopupData = function (modalRef) {
        return modalRef.householdIncome;
    };
    HouseholdIncomeFilterClass.prototype.getData = function () {
        return this.householdIncome;
    };
    HouseholdIncomeFilterClass.prototype.populateData = function (data) {
        this.householdIncome = data;
        this.isSelected = this.householdIncome != null;
        this.uiLabel = this.updateLabel();
    };
    return HouseholdIncomeFilterClass;
}(_filter_class__WEBPACK_IMPORTED_MODULE_0__["FilterEntityClass"]));



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filter-models/list-filter.class.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filter-models/list-filter.class.ts ***!
  \************************************************************************************************/
/*! exports provided: ListFilterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterClass", function() { return ListFilterClass; });
/* harmony import */ var _filter_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/filter.class.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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


var ListFilterClass = /** @class */ (function (_super) {
    __extends(ListFilterClass, _super);
    function ListFilterClass(data) {
        var _this = _super.call(this, data) || this;
        _this.usedFiltersCount = 0;
        _this.selectedFields = {};
        _this.displayName = data.displayName;
        _this.uiLabel = _this.updateLabel();
        return _this;
    }
    ListFilterClass.prototype.resetFilters = function () {
        this.usedFiltersCount = 0;
        this.selectedFields = {};
        this.isSelected = false;
        this.uiLabel = this.updateLabel();
    };
    ListFilterClass.prototype.setModalResult = function (result) {
        var _this = this;
        this.selectedFields = result;
        this.usedFiltersCount = Object.keys(this.selectedFields).filter(function (fieldName) { return _this.selectedFields[fieldName]; }).length;
        this.isSelected = this.usedFiltersCount > 0;
        this.uiLabel = this.updateLabel();
    };
    ListFilterClass.prototype.updateLabel = function () {
        return this.updateLabelSelected(this.usedFiltersCount);
        //this.usedFiltersCount ? `${this.usedFiltersCount} Selected` : 'Any';
    };
    ListFilterClass.prototype.getClosedPopupData = function (modalRef) {
        return modalRef.getFilterFormData();
    };
    ListFilterClass.prototype.getData = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["pickBy"](this.selectedFields);
    };
    ListFilterClass.prototype.populateData = function (data) {
        var _this = this;
        var fieldData = data.split(',');
        fieldData.forEach(function (fieldName, idx, fieldArray) {
            _this.selectedFields[fieldName] = true;
        });
        this.usedFiltersCount = fieldData.length;
        this.isSelected = this.usedFiltersCount > 0;
        this.uiLabel = this.updateLabel();
    };
    return ListFilterClass;
}(_filter_class__WEBPACK_IMPORTED_MODULE_0__["FilterEntityClass"]));



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filter-models/max-payment-filter.class.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filter-models/max-payment-filter.class.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MaxPaymentFilterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPaymentFilterClass", function() { return MaxPaymentFilterClass; });
/* harmony import */ var _filter_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/filter.class.ts");
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

var MaxPaymentFilterClass = /** @class */ (function (_super) {
    __extends(MaxPaymentFilterClass, _super);
    function MaxPaymentFilterClass(value) {
        var _this = _super.call(this, value) || this;
        _this.min = 0;
        _this.max = 10000;
        _this.value = [];
        _this.uiLabel = _this.updateLabel();
        return _this;
    }
    MaxPaymentFilterClass.prototype.resetFilters = function () {
        this.value = [];
        this.isSelected = false;
        this.uiLabel = this.updateLabel();
    };
    MaxPaymentFilterClass.prototype.setModalResult = function (data) {
        this.value = data;
        this.isSelected = this.value.length > 0;
        this.uiLabel = this.updateLabel();
    };
    MaxPaymentFilterClass.prototype.updateLabel = function () {
        return this.value.length ? "$ " + this.value[0] + " - " + this.value[1] : 'Any';
    };
    MaxPaymentFilterClass.prototype.getClosedPopupData = function (modalRef) {
        return modalRef.sliderRange;
    };
    MaxPaymentFilterClass.prototype.getData = function () {
        return this.value;
    };
    MaxPaymentFilterClass.prototype.populateData = function (data) {
        var sortedValues = data.split(',').filter(function (val) { return !isNaN(val); }).map(function (val) { return Number.parseInt(val); }).sort().reverse();
        this.max = (sortedValues[0] && sortedValues[0] <= 10000) ? sortedValues[0] : 10000;
        this.min = (sortedValues[1] && 0 < sortedValues[1] && sortedValues[1] < 10000) ? sortedValues[1] : 0;
        this.value = [this.min, this.max];
        this.isSelected = this.value.length > 0;
        this.uiLabel = this.updateLabel();
    };
    return MaxPaymentFilterClass;
}(_filter_class__WEBPACK_IMPORTED_MODULE_0__["FilterEntityClass"]));



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filter-models/neighborhoods-filter.class.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filter-models/neighborhoods-filter.class.ts ***!
  \*********************************************************************************************************/
/*! exports provided: NeighborhoodsFilterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeighborhoodsFilterClass", function() { return NeighborhoodsFilterClass; });
/* harmony import */ var _filter_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/filter.class.ts");
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

var NeighborhoodsFilterClass = /** @class */ (function (_super) {
    __extends(NeighborhoodsFilterClass, _super);
    function NeighborhoodsFilterClass(value) {
        var _this = _super.call(this, value) || this;
        _this.inputValue = '';
        _this.selectedNeighborhoods = [];
        _this.uiLabel = _this.updateLabelSelected(_this.selectedNeighborhoods.length);
        return _this;
    }
    NeighborhoodsFilterClass.prototype.resetFilters = function () {
        this.inputValue = '';
        this.selectedNeighborhoods = [];
        this.sourceData.forEach(function (item) { return item.isSelected = false; });
        this.isSelected = false;
        this.uiLabel = this.updateLabel();
    };
    NeighborhoodsFilterClass.prototype.setModalResult = function () {
        this.isSelected = this.selectedNeighborhoods.length > 0;
        this.uiLabel = this.updateLabel();
    };
    NeighborhoodsFilterClass.prototype.getClosedPopupData = function () {
        return this.selectedNeighborhoods;
    };
    NeighborhoodsFilterClass.prototype.getData = function () {
        return this.selectedNeighborhoods;
    };
    NeighborhoodsFilterClass.prototype.updateLabel = function () {
        return this.selectedNeighborhoods.length ? this.selectedNeighborhoods.length + " Selected" : 'Any';
    };
    NeighborhoodsFilterClass.prototype.populateData = function (data) {
        var _this = this;
        var fieldData = data.split(',');
        this.sourceData.forEach(function (borough) {
            if (fieldData.includes(borough.title)) {
                _this.selectedNeighborhoods.push(borough);
                borough.isSelected = true;
            }
            borough.subList.forEach(function (subBorough) {
                if (fieldData.includes(subBorough.name)) {
                    _this.selectedNeighborhoods.push(subBorough);
                    subBorough.isSelected = true;
                }
            });
        });
        this.setModalResult();
    };
    return NeighborhoodsFilterClass;
}(_filter_class__WEBPACK_IMPORTED_MODULE_0__["FilterEntityClass"]));



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filter-models/single-filter.class.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filter-models/single-filter.class.ts ***!
  \**************************************************************************************************/
/*! exports provided: SingleFilterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleFilterClass", function() { return SingleFilterClass; });
/* harmony import */ var _filter_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/filter.class.ts");
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

var SingleFilterClass = /** @class */ (function (_super) {
    __extends(SingleFilterClass, _super);
    function SingleFilterClass(data) {
        var _this = _super.call(this, data) || this;
        _this.usedFiltersCount = 0;
        _this.selectedField = null;
        _this.uiLabel = '';
        _this.selectType = 'radio';
        _this.isRadioGroup = true;
        _this.displayName = data.displayName;
        _this.selectType = data.formType || _this.selectType;
        _this.isRadioGroup = _this.selectType === 'radio';
        return _this;
    }
    SingleFilterClass.prototype.resetFilters = function () {
        this.usedFiltersCount = 0;
        this.selectedField = null;
        this.isSelected = false;
        this.updateLabel();
    };
    SingleFilterClass.prototype.setModalResult = function (result) {
        //This will get the first object property value
        this.selectedField = result[Object.keys(result)[0]]; //since this is a result from a single select reactive form, the return is an object with one property and value set
        this.isSelected = this.usedFiltersCount > 0;
        this.updateLabel();
    };
    SingleFilterClass.prototype.updateLabel = function () {
        var _this = this;
        var selectedValueText = 'Any';
        if (this.selectedField) {
            //SourceData selected value displayname is the UiLabel
            selectedValueText = this.sourceData.length > 0 ? this.sourceData.find(function (r) { return r.fieldName.toString() === (_this.selectedField); }).displayName : 'Any';
        }
        this.uiLabel = selectedValueText;
    };
    SingleFilterClass.prototype.getClosedPopupData = function (modalRef) {
        return modalRef.getFilterFormData();
    };
    SingleFilterClass.prototype.getData = function () {
        return this.selectedField;
    };
    SingleFilterClass.prototype.populateData = function (data) {
        var fieldData = data.split(',');
        this.selectedField = data;
        this.usedFiltersCount = fieldData.length;
        this.isSelected = this.usedFiltersCount > 0;
        this.updateLabel();
    };
    return SingleFilterClass;
}(_filter_class__WEBPACK_IMPORTED_MODULE_0__["FilterEntityClass"]));



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filter-models/subway-list-filter.class.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filter-models/subway-list-filter.class.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SubwayListFilterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubwayListFilterClass", function() { return SubwayListFilterClass; });
/* harmony import */ var _filter_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/filter.class.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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


var SubwayListFilterClass = /** @class */ (function (_super) {
    __extends(SubwayListFilterClass, _super);
    function SubwayListFilterClass(data) {
        var _this = _super.call(this, data) || this;
        _this.selectedFields = [];
        _this.displayName = data.displayName;
        _this.uiLabel = _this.updateLabelSelected(_this.selectedFields.length);
        return _this;
    }
    SubwayListFilterClass.prototype.resetFilters = function () {
        this.selectedFields = [];
        this.sourceData.forEach(function (item) { return item.isSelected = false; });
        this.uiLabel = this.updateLabel();
    };
    SubwayListFilterClass.prototype.setModalResult = function (result) {
        this.selectedFields = result;
        this.uiLabel = this.updateLabel();
    };
    SubwayListFilterClass.prototype.updateLabel = function () {
        var selectedCount = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.selectedFields, 'isSelected').length;
        this.isSelected = selectedCount > 0;
        return this.updateLabelSelected(selectedCount);
        // return selectedCount ? `${selectedCount} Selected` : 'Any';
    };
    SubwayListFilterClass.prototype.getClosedPopupData = function (modalRef) {
        return modalRef.subwayData;
    };
    SubwayListFilterClass.prototype.getData = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.selectedFields, 'isSelected');
    };
    SubwayListFilterClass.prototype.populateData = function (data) {
        var _this = this;
        var fieldData = data.split(',');
        this.sourceData.forEach(function (item, idx) {
            if (fieldData.includes(item.id)) {
                item.isSelected = true;
                _this.selectedFields.push(item);
            }
        });
        this.uiLabel = this.updateLabel();
    };
    return SubwayListFilterClass;
}(_filter_class__WEBPACK_IMPORTED_MODULE_0__["FilterEntityClass"]));



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filters.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filters.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row lottery-filters-container\">\r\n  <div class=\"container\">\r\n    <div class=\"title-container\">\r\n      <div class=\"title\">\r\n        Find the right{{isRentalListing ? ' rental ':' '}}lottery for you <small>(Optional)</small>\r\n        <!--<div class=\"description\">\r\n          Choose the options that best fit your household needs\r\n        </div>-->\r\n      </div>\r\n\r\n      <div class=\"text-right font-grey-50\" >\r\n        {{usedFiltersCount}} filter applied - <button type=\"button\" class=\"btn btn-link pl-1 pr-1 m-link\" (click)=\"clearFilterValues()\">Clear</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!--<div class=\"row\">\r\n      <div class=\"col-md-12 d-flex flex-row justify-content-between\">\r\n        <h3 class=\"\">Find the right rental lottery for you</h3>\r\n        <div class=\"text-right\">{{usedFiltersCount}} out of 6 filters set</div>\r\n      </div>\r\n    </div-->\r\n\r\n    <!-- FILTERS SECTION -->\r\n    <div class=\"row margin-bottom-20 filters-row justify-content-around\">\r\n\r\n      <!-- HOUSEHOLD INCOME -->\r\n      <div class=\"col-sm-4 col-6\" [ngClass]=\"{'col-md-2': isRentalListing,'col-md-auto':!isRentalListing}\">\r\n        <div class=\"filter-button shadow-2 hoverable\" [class.active]=\"filterMaps.householdIncome.isSelected\" #householdIncomeButton (click)=\"openFilter('householdIncome')\">\r\n          <!--<div class=\"filter-button-img-container filter-img-max-payment\"\r\n           [class.filter-used]=\"filterMaps.maxPayment.isSelected\">\r\n          </div>-->\r\n          <div class=\"name\">\r\n            Household Income\r\n          </div>\r\n          <div class=\"value\">\r\n            {{filterMaps.householdIncome.uiLabel}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- HOUSEHOLD SIZE -->\r\n      <div class=\"col-sm-4 col-6\" [ngClass]=\"{'col-md-2': isRentalListing,'col-md-auto':!isRentalListing}\">\r\n        <div class=\"filter-button shadow-2 hoverable\" [class.active]=\"filterMaps.householdSize.selectedField\" #householdSizeButton (click)=\"openFilter('householdSize')\">\r\n          <div class=\"name\">\r\n            Household Size\r\n          </div>\r\n          <div class=\"value\">\r\n            {{ filterMaps.householdSize.uiLabel}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- LAYOUT TYPE/BEDROOMS -->\r\n      <!-- <div class=\"col-md-auto col-sm-4 col-6\" [ngClass]=\"{'col-md-2': isRentalListing,'col-md-auto':!isRentalListing}\">\r\n          <div class=\"filter-button shadow-2 hoverable\" [class.active]=\"filterValues.householdSize\" #bedroomsButton (click)=\"openFilter('bedrooms')\">\r\n            <div class=\"name\">\r\n              Layout Type\r\n            </div>\r\n            <div class=\"value\">\r\n              {{filterMaps.bedrooms.uiLabel}}\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n      <!-- MAX MONTHLY/PRICE RANGE -->\r\n      <div class=\"col-sm-4 col-6\" [ngClass]=\"{'col-md-2': isRentalListing,'col-md-auto':!isRentalListing}\">\r\n        <div class=\"filter-button shadow-2 hoverable\" [class.active]=\"filterMaps.maxPayment.isSelected\" #maxPaymentButton (click)=\"openFilter('maxPayment')\">\r\n          <!--<div class=\"filter-button-img-container filter-img-max-payment\"\r\n           [class.filter-used]=\"filterMaps.maxPayment.isSelected\">\r\n          </div>-->\r\n          <div class=\"name\">\r\n            {{isRentalListing? 'Max Monthly Rent':'Price'}}\r\n          </div>\r\n          <div class=\"value\">\r\n            {{filterMaps.maxPayment.uiLabel}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- OWNERSHIP/PROPERTY TYPE -->\r\n      <div class=\"col-md-auto col-sm-4 col-6\" *ngIf=\"!isRentalListing\">\r\n          <div class=\"filter-button shadow-2 hoverable\" [class.active]=\"filterMaps.propertyType.isSelected\" #propertyTypeButton (click)=\"openFilter('propertyType')\">\r\n\r\n          <div class=\"name\">\r\n            Property Type\r\n          </div>\r\n\r\n          <div class=\"value\">\r\n            {{ filterMaps.propertyType.uiLabel}}\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- NEIGHBORHOODS -->\r\n      <div class=\"col-sm-4 col-6\" [ngClass]=\"{'col-md-2': isRentalListing,'col-md-auto':!isRentalListing}\">\r\n        <div class=\"filter-button shadow-2 hoverable\" [class.active]=\"filterMaps.neighborhoods.isSelected\" #neighborhoodsButton (click)=\"openFilter('neighborhoods')\">\r\n          <!--<div class=\"filter-button-img-container filter-img-neighborhoods\"\r\n           [class.filter-used]=\"filterMaps.neighborhoods.isSelected\">\r\n          </div>-->\r\n          <div class=\"name\">\r\n            Neighborhoods\r\n          </div>\r\n          <div class=\"value\">\r\n            {{ filterMaps.neighborhoods.uiLabel}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- NEARBY SUBWAYS -->\r\n      <div class=\"col-sm-4 col-6\" [ngClass]=\"{'col-md-2': isRentalListing,'col-md-auto':!isRentalListing}\">\r\n        <div class=\"filter-button shadow-2 hoverable\" [class.active]=\"filterMaps.nearbySubways.isSelected\" #nearbySubwaysButton (click)=\"openFilter('nearbySubways')\">\r\n          <!--<div class=\"filter-button-img-container filter-img-nearby-subways\"\r\n           [class.filter-used]=\"filterMaps.nearbySubways.isSelected\">\r\n          </div>-->\r\n          <div class=\"name\">\r\n            Nearby Subways\r\n          </div>\r\n          <div class=\"value\">\r\n            {{ filterMaps.nearbySubways.uiLabel}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- BUILDINGAMENITIES/ACCOMENDATIONS -->\r\n      <div class=\"col-sm-4 col-6\" [ngClass]=\"{'col-md-2': isRentalListing,'col-md-auto':!isRentalListing}\">\r\n        <div class=\"filter-button shadow-2 hoverable\" [class.active]=\"filterMaps.buildingAmenities.isSelected\" #buildingAmenitiesButton (click)=\"openFilter('buildingAmenities')\">\r\n          <!--<div class=\"filter-button-img-container filter-img-building-amenities\"\r\n           [class.filter-used]=\"filterMaps.buildingAmenities.isSelected\">\r\n          </div>-->\r\n          <div class=\"name\">\r\n            Accommodations\r\n          </div>\r\n          <div class=\"value\">\r\n            {{ filterMaps.buildingAmenities.uiLabel}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--<div class=\"col-md-auto col-sm-4 col-6\">\r\n      <div class=\"filter-button shadow-2 hoverable\" [class.active]=\"filterMaps.nearbyPlaces.isSelected\" #nearbyPlacesButton (click)=\"openFilter('nearbyPlaces')\">\r\n        <div class=\"filter-button-img-container filter-img-nearby-places\"\r\n        [class.filter-used]=\"filterMaps.nearbyPlaces.isSelected\">\r\n        </div>\r\n        <div class=\"name\">\r\n          Nearby Places\r\n        </div>\r\n        <div class=\"value\">\r\n          {{ filterMaps.nearbyPlaces.uiLabel}}\r\n        </div>\r\n      </div>\r\n      </div>-->\r\n    </div>\r\n\r\n    <!-- SEARCH BUTTON -->\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <button class=\"btn btn-primary shadow-2 hoverable\" (click)=\"searchLotteries()\">\r\n          Find matching lotteries\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <!--<div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"second-stage-title\">\r\n          <p class=\"title\">Find the right lottery for you</p>\r\n          <ng-container *ngIf=\"!isFilterExpanded\">\r\n            <p class=\"filters-counter\"></p>\r\n            <p class=\"edit-button\" (click)=\"toggleFilterRow()\">Edit</p>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filters.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filters.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host .lottery-filters-container .filter-button {\n  height: 6.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  cursor: pointer;\n  padding-bottom: 5px;\n  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin-bottom: 1rem; }\n:host .lottery-filters-container .filter-button .name {\n    font-size: 0.9rem;\n    margin-bottom: 0.667rem;\n    letter-spacing: -0.0169rem;\n    color: #808080;\n    font-weight: 500;\n    text-align: center; }\n:host .lottery-filters-container .filter-button .value {\n    font-size: 1rem;\n    letter-spacing: -0.0192rem;\n    text-align: center;\n    color: #c4c5d6;\n    font-weight: 400; }\n:host .lottery-filters-container .filter-button.active {\n    border-bottom: 5px solid #020063;\n    padding-bottom: 0; }\n:host .lottery-filters-container .filter-button.active .value {\n      color: #020063; }\n:host .filters-row div {\n  padding-left: .5em;\n  padding-right: .5em;\n  min-width: 104px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2Jyb3dzZS1sb3R0ZXJpZXMvY29tcG9uZW50cy9maWx0ZXJzL0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhcHBcXG1vZHVsZXNcXGJyb3dzZS1sb3R0ZXJpZXNcXGNvbXBvbmVudHNcXGZpbHRlcnNcXGZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUErRkEsMkJBQUE7QUFhQSxZQUFBO0FBTUEsdUJBQUE7QUE2QkEsZUFBQTtBQXlDQSxZQUFBO0FBcUJBLFlBQUE7QUN2TkE7RUFNTSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCRDJDUztFQzFDVCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNERDhJNkM7RUM3STdDLG1CRGdIVyxFQUFBO0FDL0hqQjtJQWtCUSxpQkFBaUI7SUFDakIsdUJEMkdhO0lDMUdiLDBCQUEwQjtJQUMxQixjRDRCUztJQzNCVCxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7QUF2QjFCO0lBMkJRLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGNEVU87SUNUUCxnQkFBZ0IsRUFBQTtBQS9CeEI7SUFtQ1EsZ0NETlM7SUNPVCxpQkFBaUIsRUFBQTtBQXBDekI7TUF1Q1UsY0RWTyxFQUFBO0FDN0JqQjtFQThDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBIiwiZmlsZSI6InByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQbGVhc2UgY29uc3VsdCB3aXRoIFl1cnkgYmVmb3JlIGFkZGluZyBzb21lIG5ldyBDU1MgdmFyaWFibGVzLiAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogVGFibGUgb2YgQ29udGVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFR5cG9ncmFwaHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVGhlbWUgQ29sb3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNoYWRvd3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU3BhY2luZyBHdWlkZWxpbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBBbmltYXRpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIENvcm5lcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL1R5cG9ncmFwaHlcbiRmb250LW1haW46IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1oZWFkaW5nOiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtbGluZWF3ZXNvbWU6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE2cHgvMSBcIkxpbmVBd2Vzb21lXCI7XG4kZm9udC1mb250YXdlc29tZTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4kaHRtbC1mb250LXNpemUtbGc6IDE2cHg7XG4kaHRtbC1mb250LXNpemUtbWQ6IDE1cHg7XG4kaHRtbC1mb250LXNpemUtc206IDE0cHg7XG4kaHRtbC1mb250LXNpemUteHM6IDEzcHg7XG5cbiRodG1sLWZvbnQtd2VpZ2h0OiA0MDA7XG5cbi8vIFRoZW1lIENvbG9yc1xuJGNvbG9yLW9mZnNldDogNiU7IC8vIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBsaWdodGVyIGFuZCBkYXJrZXIgdmFyaWVudHMgb2YgYSBzcGVjaWZpYyBjb2xvclxuXG4kYmFzZTogI2ZhZmFmYTsgLy91c2VkIHByaW1hcmlseSBhcyBvZmYtd2hpdGUgYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG5cbiRwcmltYXJ5OiAjMDIwMDYzO1xuJHNlY29uZGFyeTogI2ZhZmFmYTtcbiRzZWNvbmRhcnktYmx1ZTogcmdiKDEwOSwgMTc4LCAyNTUpOyAvLyB3ZSBzaG91bGQgcmVwbGFjZSB0aGlzXG4kYWNjZW50OiAjZmNiMzIzOyAvLyMwMGM1ZGM7XG4kZm9jdXM6ICM5ODE2ZjQ7XG5cbiRzdWNjZXNzOiAjMDBlNmFiO1xuJHdhcm5pbmc6ICNmZmI4MjI7XG4kZGFuZ2VyOiAjZmYyYjJiOyAvLyNmNDUxNmM7XG4kaW5mbzogIzU1NzhlYjsgLy8jMzZhM2Y3O1xuXG4kbWV0YWw6ICNjNGM1ZDY7XG4kbWV0YWwtbGlnaHQ6IGxpZ2h0ZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcbiRtZXRhbC1kYXJrOiBkYXJrZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcblxuLy8gZ3JleXNcbiRsaWdodDogI2ZmZjtcbiRkYXJrOiAjMmMyZTNlO1xuJGdyZXktMjA6ICMzMzMzMzM7XG4kZ3JleS0zMDogIzRkNGQ0ZDtcbiRncmV5LTUwOiAjODA4MDgwO1xuJGdyZXktNzA6ICNiM2IzYjM7XG4kZ3JleS05MDogI2U2ZTZlNjtcbiRncmV5LTk1OiAjZjJmMmYyO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG4vLyBFeHRlbmRlZCBDb2xvciBQYWxldHRlXG4vLyBUT0RPOiBSZXZpZXcgdGhlc2UgY29sb3JzXG4kZGFyay1ibHVlOiAjMDIzOTcwO1xuJGJsdWU6ICMwMTdhY2U7XG4kY2VydWxlYW46ICMwMTdhY2U7XG4kbGlnaHQtYmx1ZTogI2NjZWFmZjtcbiRwYWxlLWJsdWU6ICNmMWY5ZmY7XG4kZGFyay10ZWFsOiAjMDA2NDZlO1xuJHRlYWw6ICMwMGMxZDQ7XG4kbGlnaHQtdGVhbDogI2NjZmFmZjtcbiRwYWxlLXRlYWw6ICNmNWZlZmY7XG4kZGFyay1ncmVlbjogIzBhNWM0MDtcbiRncmVlbjogIzE0Yjg4MTtcbiRsaWdodC1ncmVlbjogI2EzZjVkOTtcbiRwYWxlLWdyZWVuOiAjZjZmZWZiO1xuJGRhcmsteWVsbG93OiAjOTk3NDAwO1xuJHllbGxvdzogI2ZmY2UzMztcbiRsaWdodC15ZWxsb3c6ICNmZmYzY2M7XG4kcGFsZS15ZWxsb3c6ICNmZmZkZjU7XG4kZGFyay1yZWQ6ICM2NjBhMDA7XG4kcmVkOiAjY2MxNDAwO1xuJGxpZ2h0LXJlZDogI2ZmZDFjYztcbiRwYWxlLXJlZDogI2ZmZjZmNTtcblxuXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJhY2NlbnRcIjogJGFjY2VudCxcbiAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLCBcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLCBcbiAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgXCJpbmZvXCI6ICRpbmZvLFxuICBcIm1ldGFsXCI6ICRtZXRhbCxcbiAgXCJmb2N1c1wiOiAkZm9jdXMsXG4gIFwiZ3JleS0yMFwiOiAkZ3JleS0yMCwgXG4gIFwiZ3JleS0zMFwiOiAkZ3JleS0zMCxcbiAgXCJncmV5LTUwXCI6ICRncmV5LTUwLFxuICBcImdyZXktNzBcIjogJGdyZXktNzAsXG4gIFwiZ3JleS05MFwiOiAkZ3JleS05MCxcbiAgXCJncmV5LTk1XCI6ICRncmV5LTk1LFxuICBcImJhc2VcIjogJGJhc2UsXG4gIFwibGlnaHRcIjogJGxpZ2h0LFxuICBcImRhcmtcIjogJGRhcmssXG4gIFwid2hpdGVcIjogJHdoaXRlLFxuICBcImJsYWNrXCI6ICRibGFjayxcbiAgXCJibHVlXCI6ICRibHVlXG4pO1xuXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcbiRndC1zbWFsbC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgc20pICFkZWZhdWx0OyAvLyA1NzZcbiRndC1tZWRpdW0td2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIG1kKSAhZGVmYXVsdDsgLy8gNzY4XG4kZ3QtbGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIGxnKSAhZGVmYXVsdDsgLy8gOTkyXG4kZ3QteGxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCB4bCkgIWRlZmF1bHQ7IC8vIDEyMDBcblxuLyogU2hhZG93cyAqL1xuJHNoYWRvdy1zbTogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEwKTtcbiRzaGFkb3ctbWQ6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4wOCk7IC8vZGVmYXVsdFxuJHNoYWRvdy1sZzogMCAxNXB4IDMwcHggMCByZ2JhKDAsMCwwLDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgwLDAsMCwwLjA4KTtcbiRzaGFkb3ctZWxldmF0ZTogJHNoYWRvdy1sZzsgLy8gb24gaG92ZXJcblxuLyogU3BhY2luZyBHdWlkZWxpbmVzICovXG4kc3BhY2luZy14eHM6IDAuMzMzcmVtOyAgICAgLy8gc21hbGwgZ2FwICAgICAgICAgICAtIDVweCAgICAoeHhzKVxuJHNwYWNpbmcteHM6IDAuNjY3cmVtOyAgICAgIC8vIFJlbGF0ZWQgRGlyZWN0bHkgICAgLSAxMHB4ICAgKHhzKVxuJHNwYWNpbmctc206IDFyZW07ICAgICAgICAgIC8vIFJlbGF0ZWQgSW5kaXJlY3RseSAgLSAxNXB4ICAgKHNtKVxuJHNwYWNpbmctbWQ6IDEuMzNyZW07ICAgICAgIC8vIFJlbGF0ZWQgR3JvdXAgICAgICAgLSAyMHB4ICAgKG1kKSAgLy9kZWZhdWx0XG4kc3BhY2luZy1sZzogMnJlbTsgICAgICAgICAgLy8gVW5yZWxhdGVkIEdyb3VwICAgICAtIDMwcHggICAobGcpXG4kc3BhY2luZy14bDogMi42NjdyZW07ICAgICAgLy8gTmV3IFNlY3Rpb24gICAgICAgICAtIDQwcHggICAoeGwpXG4kc3BhY2luZy14eGw6IDRyZW07ICAgICAgICAgLy8gTmV3IFNlY3Rpb24gKExhcmdlKSAtIDYwcHggICAoeHhsKVxuXG4kc3BhY2luZy1zaXplczogKFxuICBcIjBcIjogMCxcbiAgXCI1XCI6ICRzcGFjaW5nLXh4cyxcbiAgXCIxMFwiOiAkc3BhY2luZy14cyxcbiAgXCIxNVwiOiAkc3BhY2luZy1zbSxcbiAgXCIyMFwiOiAkc3BhY2luZy1tZCxcbiAgXCIzMFwiOiAkc3BhY2luZy1sZyxcbiAgXCI0MFwiOiAkc3BhY2luZy14bCxcbiAgXCI2MFwiOiAkc3BhY2luZy14eGwsXG4gIFwiMTUtZW1cIjogMS41cmVtLFxuICBcIjIyLWVtXCI6IDIuMnJlbSxcbiAgXCJ4eHNcIjogJHNwYWNpbmcteHhzLFxuICBcInhzXCI6ICRzcGFjaW5nLXhzLFxuICBcInNtXCI6ICRzcGFjaW5nLXNtLFxuICBcIm1kXCI6ICRzcGFjaW5nLW1kLFxuICBcImxnXCI6ICRzcGFjaW5nLWxnLFxuICBcInhsXCI6ICRzcGFjaW5nLXhsLFxuICBcInh4bFwiOiAkc3BhY2luZy14eGwsICBcbiAgKTtcblxuLyogQW5pbWF0aW9ucyAqL1xuJGFuaW1hdGlvbi14czogYWxsIDAuMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXNoOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tbWQ6IGFsbCAwLjM1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTsgLy9kZWZhdWx0XG4kYW5pbWF0aW9uLWxnOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teGw6IGFsbCAwLjhzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14eGw6IGFsbCAxLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuXG4kYW5pbWF0aW9uLWRlZmF1bHQ6ICRhbmltYXRpb24tbWQ7XG5cbiRhbmltYXRpb24tZmFkZS1pbjogZmFkZS1pbiAxcyBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLW91dDogZmFkZS1vdXQgMXMgZWFzZS1vdXQgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi10b3A6IGZhZGUtaW4tdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi1ib3R0b206IGZhZGUtaW4tYm90dG9tIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXI6IHB1ZmYtaW4tY2VudGVyIDAuN3MgY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXI6IHB1ZmYtb3V0LWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGJvdGg7XG4kYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWw6IHNoYWtlLWhvcml6b250YWwgMC44cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpIGJvdGg7XG4kYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjazogZm9jdXMtaW4tY29udHJhY3QtYmNrIDFzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDsgLy8gZm9yIHRleHRcbiRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcDogc2NhbGUtaW4tdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3A6IHNjYWxlLW91dC12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSBib3RoO1xuJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZTogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgaW5maW5pdGU7XG4kYW5pbWF0aW9uLXB1bHNlLTM6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIDM7XG4kYW5pbWF0aW9uLXB1bHNlLTE6IHNoYWRvdy1wdWxzZSAxcyAxO1xuXG4vLyBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlc2UgbmFtZXMgdG8gYW5pbWF0ZSBIVE1MIGVsZW1lbnRzIG9uIGluaXRpYXRpb25cbiRhbmltYXRpb25zOiAoXG4gIFwiZmFkZS1pblwiOiAkYW5pbWF0aW9uLWZhZGUtaW4sXG4gIFwiZmFkZS1vdXRcIjogJGFuaW1hdGlvbi1mYWRlLW91dCxcbiAgXCJmYWRlLWluLXRvcFwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tdG9wLFxuICBcImZhZGUtaW4tYm90dG9tXCI6ICRhbmltYXRpb24tZmFkZS1pbi1ib3R0b20sXG4gIFwicHVmZi1pbi1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcixcbiAgXCJwdWZmLW91dC1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXIsXG4gIFwic2hha2UtaG9yaXpvbnRhbFwiOiAkYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWwsXG4gIFwiZm9jdXMtaW4tY29udHJhY3QtYmNrXCI6ICRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrLFxuICBcInNjYWxlLWluLXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wLFxuICBcInNjYWxlLW91dC12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3AsXG4gIFwicHVsc2UtaW5maW5pdGVcIjogJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZSxcbiAgXCJwdWxzZS0zXCI6ICRhbmltYXRpb24tcHVsc2UtMyxcbiAgXCJwdWxzZS0xXCI6ICRhbmltYXRpb24tcHVsc2UtMVxuKTtcblxuLyogQm9yZGVycyAqL1xuJGJvcmRlci1zaXplLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItc2l6ZS1tZDogMC4yNXJlbTtcbiRib3JkZXItc2l6ZS1sZzogMC41cmVtO1xuJGJvcmRlci1zaXplLTE6IDFweDtcbiRib3JkZXItc2l6ZS0yOiAycHg7XG4kYm9yZGVyLXNpemUtMzogM3B4O1xuJGJvcmRlci1zaXplLTU6IDVweDtcbiRib3JkZXItc2l6ZS0xMDogMTBweDtcblxuJGJvcmRlci1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItc2l6ZS1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXNpemUtbWQsXG4gIFwibGdcIjogJGJvcmRlci1zaXplLWxnLFxuICBcIjFcIjogJGJvcmRlci1zaXplLTEsXG4gIFwiMlwiOiAkYm9yZGVyLXNpemUtMixcbiAgXCIzXCI6ICRib3JkZXItc2l6ZS0zLFxuICBcIjVcIjogJGJvcmRlci1zaXplLTUsXG4gIFwiMTBcIjogJGJvcmRlci1zaXplLTEwXG4pO1xuXG4vKiBDb3JuZXJzICovXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1tZDogMC4yNXJlbTtcbiRib3JkZXItcmFkaXVzLWxnOiAwLjVyZW07XG4kYm9yZGVyLXJhZGl1cy0yOiAycHg7XG4kYm9yZGVyLXJhZGl1cy00OiA0cHg7XG4kYm9yZGVyLXJhZGl1cy02OiA2cHg7XG4kYm9yZGVyLXJhZGl1cy0xMDogMTBweDtcbiRib3JkZXItcmFkaXVzLTE1OiAxNXB4O1xuJGJvcmRlci1yYWRpdXMtMjA6IDIwcHg7XG4kYm9yZGVyLXJhZGl1cy1oYWxmOiA1MCU7XG4kYm9yZGVyLXJhZGl1cy1mdWxsOiAxMDAlO1xuXG4kYm9yZGVyLXJhZGl1cy1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItcmFkaXVzLXNtLFxuICBcIm1kXCI6ICRib3JkZXItcmFkaXVzLW1kLCAvL2RlZmF1bHRcbiAgXCJsZ1wiOiAkYm9yZGVyLXJhZGl1cy1sZyxcbiAgXCIyXCI6ICRib3JkZXItcmFkaXVzLTIsXG4gIFwiNFwiOiAkYm9yZGVyLXJhZGl1cy00LFxuICBcIjZcIjogJGJvcmRlci1yYWRpdXMtNixcbiAgXCIxMFwiOiAkYm9yZGVyLXJhZGl1cy0xMCxcbiAgXCIxNVwiOiAkYm9yZGVyLXJhZGl1cy0xNSxcbiAgXCIyMFwiOiAkYm9yZGVyLXJhZGl1cy0yMCxcbiAgXCJoYWxmXCI6ICRib3JkZXItcmFkaXVzLWhhbGYsXG4gIFwiZnVsbFwiOiAkYm9yZGVyLXJhZGl1cy1mdWxsLFxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuXHJcbiAgLmxvdHRlcnktZmlsdGVycy1jb250YWluZXIge1xyXG5cclxuICAgIC5maWx0ZXItYnV0dG9uIHtcclxuICAgICAgLy9tYXgtd2lkdGg6IDEwLjVyZW07XHJcbiAgICAgIGhlaWdodDogNi41cmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246ICRhbmltYXRpb24tbWQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICRzcGFjaW5nLXNtO1xyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRzcGFjaW5nLXhzO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTY5cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkZ3JleS01MDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnZhbHVlIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxOTJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAkbWV0YWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkcHJpbWFyeTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy9TZXQgdGhlIG1pbiB3aWR0aCBhbmQgcGFkZGluZyBmb3IgZWFjaCBmaWx0ZXJcclxuICAuZmlsdGVycy1yb3cgZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuNWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogLjVlbTtcclxuICAgIG1pbi13aWR0aDogMTA0cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/filters/filters.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/filters/filters.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BrowseLotteriesFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseLotteriesFiltersComponent", function() { return BrowseLotteriesFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/api/lottery-api.service */ "./src/app/shared/services/api/lottery-api.service.ts");
/* harmony import */ var _core_addons_textmask_directive_addons___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/addons/textmask-directive-addons/ */ "./src/app/core/addons/textmask-directive-addons/index.ts");
/* harmony import */ var _filter_models_max_payment_filter_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-models/max-payment-filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/max-payment-filter.class.ts");
/* harmony import */ var _filter_models_list_filter_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-models/list-filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/list-filter.class.ts");
/* harmony import */ var _filter_models_neighborhoods_filter_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter-models/neighborhoods-filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/neighborhoods-filter.class.ts");
/* harmony import */ var _components_filter_selector_modal_filter_selector_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/filter-selector-modal/filter-selector-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/filter-selector-modal/filter-selector-modal.component.ts");
/* harmony import */ var _components_neighborhoods_modal_neighborhoods_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/neighborhoods-modal/neighborhoods-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/neighborhoods-modal/neighborhoods-modal.component.ts");
/* harmony import */ var _components_max_payment_modal_max_payment_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/max-payment-modal/max-payment-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/max-payment-modal/max-payment-modal.component.ts");
/* harmony import */ var _components_nearby_subway_modal_nearby_subway_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/nearby-subway-modal/nearby-subway-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/nearby-subway-modal/nearby-subway-modal.component.ts");
/* harmony import */ var _filter_models_subway_list_filter_class__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter-models/subway-list-filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/subway-list-filter.class.ts");
/* harmony import */ var _filter_models_household_income_filter_class__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./filter-models/household-income-filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/household-income-filter.class.ts");
/* harmony import */ var _components_household_income_modal_household_income_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/household-income-modal/household-income-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/household-income-modal/household-income-modal.component.ts");
/* harmony import */ var _components_single_select_modal_single_select_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/single-select-modal/single-select-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/single-select-modal/single-select-modal.component.ts");
/* harmony import */ var _filter_models_single_filter_class__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./filter-models/single-filter.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/single-filter.class.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var cloneObject = function (o) { return JSON.parse(JSON.stringify(o)); };
//neighborhoodsList.forEach((item, key) => {
//  item.id = key + 1;
//  subList.forEach((subItem, keySub) => {
//    subItem.id = item.id * 100 + (keySub + 1);
//    subItem.isSelected = false;
//    subItem.parentId = item.id;
//  });
//  item.subList = cloneObject(subList);
//  item.isSelected = false;
//});
var BrowseLotteriesFiltersComponent = /** @class */ (function () {
    function BrowseLotteriesFiltersComponent(filter, cdRef, overlay, lotteryApiService, router) {
        var _this = this;
        this.filter = filter;
        this.cdRef = cdRef;
        this.overlay = overlay;
        this.lotteryApiService = lotteryApiService;
        this.router = router;
        this.isRentalListing = true;
        this.onChangeFiltersValues = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.neighborhoodsList = [
            { title: 'Manhattan' },
            { title: 'Bronx' },
            { title: 'Brooklyn' },
            { title: 'Queens' },
            { title: 'Staten Island' },
        ];
        this.isFilterExpanded = true;
        this.usedFiltersCount = 0;
        this.dollarAmount = _core_addons_textmask_directive_addons___WEBPACK_IMPORTED_MODULE_7__["dollarAmount"];
        this.filterMaps = {
            neighborhoods: new _filter_models_neighborhoods_filter_class__WEBPACK_IMPORTED_MODULE_10__["NeighborhoodsFilterClass"]({
                displayName: 'Neighborhoods',
                modalRef: _components_neighborhoods_modal_neighborhoods_modal_component__WEBPACK_IMPORTED_MODULE_12__["NeighborhoodsModalComponent"],
                sourceData: this.neighborhoodsList
            }),
            householdSize: new _filter_models_single_filter_class__WEBPACK_IMPORTED_MODULE_19__["SingleFilterClass"]({
                displayName: 'Household Size',
                modalRef: _components_single_select_modal_single_select_modal_component__WEBPACK_IMPORTED_MODULE_18__["SingleSelectModalComponent"],
                formType: 'radio'
            }),
            bedrooms: new _filter_models_list_filter_class__WEBPACK_IMPORTED_MODULE_9__["ListFilterClass"]({
                displayName: 'Number of Bedrooms',
                modalRef: _components_filter_selector_modal_filter_selector_modal_component__WEBPACK_IMPORTED_MODULE_11__["FilterSelectorModal"]
            }),
            nearbySubways: new _filter_models_subway_list_filter_class__WEBPACK_IMPORTED_MODULE_15__["SubwayListFilterClass"]({
                displayName: 'Nearby Subways',
                modalRef: _components_nearby_subway_modal_nearby_subway_modal_component__WEBPACK_IMPORTED_MODULE_14__["NearbySubwayModalComponent"],
                sourceData: [
                    { id: '1', isSelected: false, color: 'red' },
                    { id: '2', isSelected: false, color: 'red' },
                    { id: '3', isSelected: false, color: 'red' },
                    { id: '4', isSelected: false, color: 'green' },
                    { id: '5', isSelected: false, color: 'green' },
                    { id: '6', isSelected: false, color: 'green' },
                    { id: '7', isSelected: false, color: 'purple' },
                    { id: 'A', isSelected: false, color: 'blue' },
                    { id: 'C', isSelected: false, color: 'blue' },
                    { id: 'E', isSelected: false, color: 'blue' },
                    { id: 'B', isSelected: false, color: 'orange' },
                    { id: 'D', isSelected: false, color: 'orange' },
                    { id: 'F', isSelected: false, color: 'orange' },
                    { id: 'M', isSelected: false, color: 'orange' },
                    { id: 'G', isSelected: false, color: 'limeGreen' },
                    { id: 'J', isSelected: false, color: 'brown' },
                    { id: 'Z', isSelected: false, color: 'brown' },
                    { id: 'L', isSelected: false, color: 'lightGray' },
                    { id: 'S', isSelected: false, color: 'darkGray' },
                    { id: 'N', isSelected: false, color: 'yellow' },
                    { id: 'Q', isSelected: false, color: 'yellow' },
                    { id: 'R', isSelected: false, color: 'yellow' },
                    { id: 'W', isSelected: false, color: 'yellow' }
                ]
            }),
            propertyType: new _filter_models_list_filter_class__WEBPACK_IMPORTED_MODULE_9__["ListFilterClass"]({
                displayName: 'Property Types',
                modalRef: _components_filter_selector_modal_filter_selector_modal_component__WEBPACK_IMPORTED_MODULE_11__["FilterSelectorModal"],
                sourceData: [
                    {
                        fieldName: '2',
                        displayName: 'Condo/Coop'
                    },
                    {
                        fieldName: '1',
                        displayName: 'Small Home'
                    }
                ]
            }),
            buildingAmenities: new _filter_models_list_filter_class__WEBPACK_IMPORTED_MODULE_9__["ListFilterClass"]({
                displayName: 'Accommodations',
                modalRef: _components_filter_selector_modal_filter_selector_modal_component__WEBPACK_IMPORTED_MODULE_11__["FilterSelectorModal"]
            }),
            nearbyPlaces: new _filter_models_list_filter_class__WEBPACK_IMPORTED_MODULE_9__["ListFilterClass"]({
                displayName: 'Nearby Places',
                modalRef: _components_filter_selector_modal_filter_selector_modal_component__WEBPACK_IMPORTED_MODULE_11__["FilterSelectorModal"]
            }),
            maxPayment: new _filter_models_max_payment_filter_class__WEBPACK_IMPORTED_MODULE_8__["MaxPaymentFilterClass"]({
                modalRef: _components_max_payment_modal_max_payment_modal_component__WEBPACK_IMPORTED_MODULE_13__["MaxPaymentModalComponent"]
            }),
            householdIncome: new _filter_models_household_income_filter_class__WEBPACK_IMPORTED_MODULE_16__["HouseholdIncomeFilterClass"]({
                modalRef: _components_household_income_modal_household_income_modal_component__WEBPACK_IMPORTED_MODULE_17__["HouseholdIncomeModalComponent"]
            })
        };
        this.filterValues = {
            householdSize: '',
            householdIncome: '',
            householdType: '',
        };
        this.householdTypes = [
            { name: "Sales", value: 1 },
            { name: "Rentals", value: 2 }
        ];
        //If navigation begins close active modal
        this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]; }).subscribe(function (event) {
            _this.closeActiveModal();
        });
    }
    BrowseLotteriesFiltersComponent.prototype.ngOnChanges = function (changes) {
        //If switching between rentals/sales tab close modal
        if (changes.isTransitioning.currentValue) {
            this.closeActiveModal();
        }
    };
    BrowseLotteriesFiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.populateFields();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(this.lotteryApiService.getUnitLayoutTypes(), this.lotteryApiService.getHouseholdSizeOptions(), this.lotteryApiService.getNearbyPlaceTypes(), this.lotteryApiService.getActiveAmenities(), this.lotteryApiService.getNeighborhoods()
        //this.lotteryApiService.getHouseholdSizeOptions() //This is redundant
        ).subscribe(function (_a) {
            //const householdIncomeData = this.income;
            var unitLayoutTypesResult = _a[0], householdSizeOptionsResult = _a[1], nearbyPlaceTypeResult = _a[2], activeAmenitiesResult = _a[3], neighborhoodResult = _a[4]
            //, householdSizOptionsResult  //This is redundant
            ;
            _this.filterMaps.householdIncome.setData({ income: _this.income });
            var unitLayoutData = unitLayoutTypesResult.map(function (item) { return ({
                fieldName: item.name.replace(/\W/gi, '_'),
                displayName: item.name
            }); });
            _this.filterMaps.bedrooms.setData({ sourceData: unitLayoutData });
            // HOUSEHOLD SIZE
            _this.householdSizes = householdSizeOptionsResult;
            var householdSizeData = householdSizeOptionsResult.map(function (item) { return ({
                fieldName: item.value,
                displayName: item.name
            }); });
            _this.filterMaps.householdSize.setData({ sourceData: householdSizeData });
            _this.filterMaps.householdSize.updateLabel();
            var nearbyPlaceData = nearbyPlaceTypeResult.map(function (item) { return ({
                fieldName: item.placeType,
                displayName: item.placeType
            }); });
            _this.filterMaps.nearbyPlaces.setData({ sourceData: nearbyPlaceData });
            var activeAmenitiesData = activeAmenitiesResult.map(function (item) { return ({
                fieldName: item.amenityTypeId,
                displayName: item.amenityName,
                amenityTypeId: item.amenityTypeId,
                amenityCategoryId: item.amenityCategoryId
            }); });
            _this.filterMaps.buildingAmenities.setData({ sourceData: activeAmenitiesData });
            _this.filterMaps.neighborhoods.sourceData.forEach(function (borough, index) {
                borough.id = index + 1;
                borough.subList = neighborhoodResult.filter(function (n) { return n.boroughId === borough.id; }).map(function (n) {
                    n.parentId = borough.id;
                    n.isSelected = false;
                    //n.id = n.neighborhoodId;
                    n.title = n.name;
                    return n;
                });
            });
            // MAX PAYMENT/PRICE RANGE
            _this.filterMaps.maxPayment.displayName = _this.isRentalListing ? 'Max Monthly Rent' : 'Price Range';
            if (!_this.isRentalListing) {
                _this.filterMaps.maxPayment.min = 0;
                _this.filterMaps.maxPayment.max = 1000000;
            }
            if (!_this.cdRef["destroyed"])
                _this.cdRef.detectChanges();
        });
    };
    BrowseLotteriesFiltersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_4__["keys"](this.filterMaps).forEach(function (type) {
            _this.filterMaps[type].triggerRef = _this[type + "ButtonRef"];
        });
        this.searchLotteries();
    };
    BrowseLotteriesFiltersComponent.prototype.populateFields = function () {
        this.filterValues.householdSize = this.householdSize || null;
        this.filterValues.householdIncome = this.income || null;
        this.filterValues.householdType = (this.householdType) ? this.householdType : 1;
        console.log("Filter Params:", this.filterParams);
        this.setFilterValues(this.filterParams);
        this.cdRef.detectChanges();
    };
    ;
    BrowseLotteriesFiltersComponent.prototype.setFilterValues = function (valuesMap) {
        var _this = this;
        if (valuesMap) {
            Object.keys(valuesMap).forEach(function (filterName) {
                _this.filterMaps[filterName].populateData(valuesMap[filterName]);
            });
        }
    };
    BrowseLotteriesFiltersComponent.prototype.clearFilterValues = function () {
        var _this = this;
        Object.keys(this.filterMaps).forEach(function (filterName) {
            _this.filterMaps[filterName].resetFilters();
        });
    };
    BrowseLotteriesFiltersComponent.prototype.openFilter = function (type) {
        var _this = this;
        if (this.activeModalRef) {
            this.activeModalRef.close({
                data: this.activeModalRef.componentInstance.data.getClosedPopupData(this.activeModalRef.componentInstance),
                isAnotherModalOpen: true,
                modalType: type
            });
            return;
        }
        this.activeModalRef = this.filter.open(this.filterMaps[type].modalRef, {
            data: this.filterMaps[type],
            hasBackdrop: false,
            panelClass: 'filter-modal',
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            position: { 'top': '0', 'left': '0' },
        });
        this.activeModalRef.beforeClose().subscribe(function (_a) {
            var data = _a.data, isAnotherModalOpen = _a.isAnotherModalOpen, modalType = _a.modalType, activateSearch = _a.activateSearch;
            console.log("Model return:", data, isAnotherModalOpen, modalType, activateSearch);
            _this.filterMaps[type].setModalResult(data);
            // this.updateUsedFiltersCount();
            _this.activeModalRef = null;
            if (isAnotherModalOpen) {
                _this.openFilter(modalType);
            }
            if (activateSearch) {
                _this.emitFilterChanges();
            }
        });
    };
    //toggleFilterRow() {
    //  this.isFilterExpanded = !this.isFilterExpanded;
    //}
    BrowseLotteriesFiltersComponent.prototype.searchLotteries = function () {
        if (this.activeModalRef) {
            this.closeActiveModal();
        }
        else {
            this.emitFilterChanges();
        }
        //this.toggleFilterRow();
    };
    BrowseLotteriesFiltersComponent.prototype.getFiltersValues = function () {
        var _this = this;
        console.log('GETTING', this.filterMaps);
        return lodash__WEBPACK_IMPORTED_MODULE_4__["keys"](this.filterMaps).reduce(function (obj, filterName) {
            var filterData = _this.filterMaps[filterName].getData();
            if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](filterData)) {
                obj[filterName] = filterData;
            }
            return obj;
        }, {});
    };
    BrowseLotteriesFiltersComponent.prototype.updateUsedFiltersCount = function () {
        var allFilterData = this.getFiltersValues();
        this.usedFiltersCount = lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](allFilterData) ? 0 : lodash__WEBPACK_IMPORTED_MODULE_4__["size"](allFilterData);
    };
    BrowseLotteriesFiltersComponent.prototype.updateQueryParams = function () {
        // const allFilterData = this.getFiltersValues();
        // const params = Object.keys(allFilterData).reduce((paramsObj, filterName) => {
        //   const formatingData = this.formattingToQueryParams(filterName, allFilterData);
        //   paramsObj[filterName] = formatingData;
        //   return paramsObj;
        // }, {});
        // console.log('PARAMS', params)
        // this.router.navigate(
        //   ['/search-businesses'],
        //   {
        //     queryParams: {
        //       ...this.filterValues,
        //       ...params
        //     }
        //   }
        // );
    };
    BrowseLotteriesFiltersComponent.prototype.formattingToQueryParams = function (filterName, filterData) {
        var mappingData;
        if (filterName === "nearbySubways") {
            mappingData = filterData[filterName].map(function (subway) { return subway.id; }).join(',');
        }
        else if (filterName === "neighborhoods") {
            mappingData = filterData[filterName].map(function (item) { return item.title; }).join(',');
        }
        else if (filterName === "maxPayment") {
            mappingData = filterData[filterName].join(',');
        }
        else if (filterName === "householdIncome") {
            mappingData = filterData[filterName];
        }
        else if (filterName === "householdSize") {
            mappingData = filterData[filterName];
        }
        else {
            mappingData = Object.keys(filterData[filterName]).join(',');
        }
        console.log('filtering', filterName, filterData);
        return mappingData;
    };
    BrowseLotteriesFiltersComponent.prototype.closeActiveModal = function () {
        if (this.activeModalRef) {
            this.activeModalRef.close({
                data: this.activeModalRef.componentInstance.getData(),
                activateSearch: true,
            });
        }
    };
    BrowseLotteriesFiltersComponent.prototype.emitFilterChanges = function () {
        //For now we only want to emit event for rental lotter searches
        //TODO: Update this component properly for rental and sales type lottery listings
        //if (this.isRentalListing) {
        this.onChangeFiltersValues.emit(__assign({}, this.filterValues, this.getFiltersValues()));
        this.updateQueryParams();
        this.updateUsedFiltersCount();
        //}
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BrowseLotteriesFiltersComponent.prototype, "householdSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BrowseLotteriesFiltersComponent.prototype, "income", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BrowseLotteriesFiltersComponent.prototype, "householdType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BrowseLotteriesFiltersComponent.prototype, "filterParams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BrowseLotteriesFiltersComponent.prototype, "isRentalListing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BrowseLotteriesFiltersComponent.prototype, "isTransitioning", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BrowseLotteriesFiltersComponent.prototype, "onChangeFiltersValues", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('householdIncomeButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BrowseLotteriesFiltersComponent.prototype, "householdIncomeButtonRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('maxPaymentButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BrowseLotteriesFiltersComponent.prototype, "maxPaymentButtonRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('neighborhoodsButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BrowseLotteriesFiltersComponent.prototype, "neighborhoodsButtonRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bedroomsButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BrowseLotteriesFiltersComponent.prototype, "bedroomsButtonRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('buildingAmenitiesButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BrowseLotteriesFiltersComponent.prototype, "buildingAmenitiesButtonRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nearbySubwaysButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BrowseLotteriesFiltersComponent.prototype, "nearbySubwaysButtonRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nearbyPlacesButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BrowseLotteriesFiltersComponent.prototype, "nearbyPlacesButtonRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('householdSizeButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BrowseLotteriesFiltersComponent.prototype, "householdSizeButtonRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('propertyTypeButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BrowseLotteriesFiltersComponent.prototype, "propertyTypeButtonRef", void 0);
    BrowseLotteriesFiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browse-lotteries-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/modules/browse-lotteries/components/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/modules/browse-lotteries/components/filters/filters.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"],
            _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_6__["LotteryApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BrowseLotteriesFiltersComponent);
    return BrowseLotteriesFiltersComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/lottery-result-header/lottery-result-header.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/lottery-result-header/lottery-result-header.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isSearching\" class=\"fade-in text-center\">\r\n  <loader></loader>\r\n</div>\r\n<div *ngIf=\"!isSearching\" class=\"fade-in\">\r\n  <div class=\"title-container\">\r\n    <div class=\"title\">\r\n      {{label}} <!--<small>(Optional)</small>-->\r\n      <!--<div class=\"description\">\r\n\r\n      </div>-->\r\n    </div>\r\n\r\n    <div class=\"d-flex justify-content-end\">\r\n      <div class=\"col-auto\">\r\n        <span class=\"pr-10\">Sort by</span>\r\n        <div class=\"d-inline-block\">\r\n          <!--<app-select-arrow class=\"lottery-result-filter-selector\">-->\r\n          <select [formControl]=\"filterSelectControl\" class=\"form-control\">\r\n            <option *ngFor=\"let item of orderByOptions\" [ngValue]=\"item\">{{item.label}}</option>\r\n\r\n            <!-- <option [ngValue]=\"1\">\r\n              Closing date (soonest first)\r\n            </option>\r\n            <option [ngValue]=\"2\">\r\n              Closing date (latest first)\r\n            </option> -->\r\n            <!-- <option [ngValue]=\"3\">\r\n              Opening date (soonest first)\r\n            </option> -->\r\n            <!-- <option [ngValue]=\"4\">\r\n              Development name (A-Z)\r\n            </option>\r\n            <option [ngValue]=\"5\">\r\n              Development name (Z-A)\r\n            </option> -->\r\n          </select>\r\n          <!--</app-select-arrow>-->\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div>\r\n        <!--<div #searchSection class=\"lottery-search-section\" (click)=\"onOpenSearchInput()\">-->\r\n        <!--<i class=\"fa fa-search\"></i>-->\r\n        <!--<input type=\"text\" class=\"lottery-search-input\"-->\r\n        <!--[class.is-open]=\"isSearchInputVisible\"-->\r\n        <!--[formControl]=\"searchInputControl\"-->\r\n        <!--placeholder=\"Please set a search value\">-->\r\n        <!--</div>-->\r\n        <!--<div class=\"vertical-separator\"></div>-->\r\n\r\n        <div class=\"btn-group m-btn-group m-btn-group--pill ml-20\" role=\"group\" aria-label=\"...\">\r\n          <button type=\"button\" class=\"m-btn btn btn-secondary border\" [class.active]=\"activeViewMode === ViewMode.LIST\" (click)=\"onChangeViewModeFn(ViewMode.LIST)\">\r\n            <i class=\"la la-th-large\"></i> Grid View\r\n          </button>\r\n          <button type=\"button\" class=\"m-btn btn btn-secondary border\" [class.active]=\"activeViewMode !== ViewMode.LIST\" (click)=\"onChangeViewModeFn(ViewMode.MAP)\">\r\n            <i class=\"la la-map\"></i> Map View\r\n          </button>\r\n        </div>\r\n\r\n        <!--<div class=\"m-btn-group btn-group m-btn-group--pill mr-2 margin-left-15\" role=\"group\">\r\n          <button class=\"m-btn btn btn-secondary active border\" type=\"button\">\r\n            <i class=\"la la-th-large\"></i> Grid View\r\n          </button>\r\n          <button class=\"m-btn btn btn-secondary border\" type=\"button\">\r\n            <i class=\"la la-list\"></i> Map View\r\n          </button>\r\n        </div>-->\r\n        <!--<div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn d-flex align-items-center\"\r\n                  [ngClass]=\"{'btn-blue': activeViewMode === ViewMode.LIST, 'btn-secondary border-dark': activeViewMode !== ViewMode.LIST}\"\r\n                  (click)=\"onChangeViewModeFn(ViewMode.LIST)\">\r\n            <mat-icon>apps</mat-icon>\r\n            View on grid\r\n          </button>\r\n          <button type=\"button\" class=\"btn d-flex align-items-center\"\r\n                  [ngClass]=\"{'btn-blue': activeViewMode === ViewMode.MAP, 'btn-secondary border-dark': activeViewMode !== ViewMode.MAP}\"\r\n                  (click)=\"onChangeViewModeFn(ViewMode.MAP)\">\r\n            <mat-icon>map</mat-icon>\r\n            View on map\r\n          </button>\r\n        </div>-->\r\n        <!--<div class=\"lottery-switch-view-icon\" -->\r\n        <!--&gt;-->\r\n        <!---->\r\n        <!--</div>-->\r\n        <!--<div class=\"lottery-switch-view-icon\" [class.is-active]=\"activeViewMode == ViewMode.MAP\"-->\r\n        <!--&gt;-->\r\n        <!--<i class=\"fa fa-map-marker-alt\"></i>-->\r\n        <!--</div>-->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!--<div class=\"lottery-units-info\">\r\n    <span *ngIf=\"!isSearching\" class=\"lottery-result-cont\">\r\n      {{label}}\r\n    </span>\r\n    <span *ngIf=\"isSearching\" class=\"lottery-result-cont\">\r\n      <i class=\"fa fa-spinner fa-pulse\"></i> Searching...\r\n    </span>\r\n  </div>\r\n  <div class=\"lottery-action-section\">-->\r\n  <!--<div #searchSection class=\"lottery-search-section\" (click)=\"onOpenSearchInput()\">-->\r\n  <!--<i class=\"fa fa-search\"></i>-->\r\n  <!--<input type=\"text\" class=\"lottery-search-input\"-->\r\n  <!--[class.is-open]=\"isSearchInputVisible\"-->\r\n  <!--[formControl]=\"searchInputControl\"-->\r\n  <!--placeholder=\"Please set a search value\">-->\r\n  <!--</div>-->\r\n  <!--<div class=\"vertical-separator\"></div>-->\r\n  <!--Sort by\r\n  <app-select-arrow class=\"lottery-result-filter-selector\">\r\n    <select [formControl]=\"filterSelectControl\">\r\n      <option [ngValue]=\"1\">\r\n        Closing date (soonest first)\r\n      </option>\r\n      <option [ngValue]=\"2\">\r\n        Closing date (latest first)\r\n      </option>\r\n      <option [ngValue]=\"3\">\r\n        Opening date (soonest first)\r\n      </option>\r\n      <option [ngValue]=\"4\">\r\n        Development name (A-Z)\r\n      </option>\r\n      <option [ngValue]=\"5\">\r\n        Development name (Z-A)\r\n      </option>\r\n    </select>\r\n  </app-select-arrow>\r\n\r\n  <div class=\"btn-group\">\r\n    <button type=\"button\" class=\"btn d-flex align-items-center\"\r\n            [ngClass]=\"{'btn-blue': activeViewMode === ViewMode.LIST, 'btn-secondary border-dark': activeViewMode !== ViewMode.LIST}\"\r\n            (click)=\"onChangeViewModeFn(ViewMode.LIST)\">\r\n      <mat-icon>apps</mat-icon>\r\n      View on grid\r\n    </button>\r\n    <button type=\"button\" class=\"btn d-flex align-items-center\"\r\n            [ngClass]=\"{'btn-blue': activeViewMode === ViewMode.MAP, 'btn-secondary border-dark': activeViewMode !== ViewMode.MAP}\"\r\n            (click)=\"onChangeViewModeFn(ViewMode.MAP)\">\r\n      <mat-icon>map</mat-icon>\r\n      View on map\r\n    </button>\r\n  </div>-->\r\n  <!--<div class=\"lottery-switch-view-icon\" -->\r\n  <!--&gt;-->\r\n  <!---->\r\n  <!--</div>-->\r\n  <!--<div class=\"lottery-switch-view-icon\" [class.is-active]=\"activeViewMode == ViewMode.MAP\"-->\r\n  <!--&gt;-->\r\n  <!--<i class=\"fa fa-map-marker-alt\"></i>-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/lottery-result-header/lottery-result-header.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/lottery-result-header/lottery-result-header.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host {\n  /*display: flex;\r\n  padding: 2rem 0 3.75rem;\r\n  justify-content: space-between;*/\n  /*.lottery-units-info {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n  }*/\n  /*.lottery-action-section {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    flex-grow: 2;\r\n  }\r\n\r\n  .lottery-result-cont {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n    color: #41505b;\r\n    white-space: nowrap;\r\n    margin-right: 2.813rem;\r\n  }\r\n\r\n  .lottery-result-filter-selector {\r\n    height: calc(2.4rem + 2px);\r\n    color: #51575c;\r\n    padding: 0 9px;\r\n    font-size: 0.875rem;\r\n    border: 1px solid #c5d5e2;\r\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    border-radius: 1px;\r\n    margin: 0 48px 0 16px;\r\n  }*/\n  /*.lottery-switch-view-icon {\r\n    width: 2.3rem;\r\n    height: 2.3rem;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    & + .lottery-switch-view-icon {\r\n      margin-left: 0.938rem;\r\n    }\r\n\r\n    i {\r\n      font-size: 2.3rem;\r\n      color: #a8b0b5;\r\n    }\r\n\r\n    &.is-active {\r\n      i {\r\n        color: #51575c;\r\n      }\r\n    }\r\n  }*/\n  /*.navigation-buttons {\r\n    .btn-hpd:not(.btn-primary-hpd) {\r\n      color: $grey-50;\r\n    }\r\n  }\r\n\r\n  .mat-icon {\r\n    height: auto;\r\n    width: auto;\r\n  }*/ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2xvdHRlcnktcmVzdWx0LWhlYWRlci9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2xvdHRlcnktcmVzdWx0LWhlYWRlci9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXBwXFxtb2R1bGVzXFxicm93c2UtbG90dGVyaWVzXFxjb21wb25lbnRzXFxsb3R0ZXJ5LXJlc3VsdC1oZWFkZXJcXGxvdHRlcnktcmVzdWx0LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2xvdHRlcnktcmVzdWx0LWhlYWRlci9sb3R0ZXJ5LXJlc3VsdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUErRkEsMkJBQUE7QUFhQSxZQUFBO0FBTUEsdUJBQUE7QUE2QkEsZUFBQTtBQXlDQSxZQUFBO0FBcUJBLFlBQUE7QUN2TkE7RUFDRTs7a0NDbUJnQztFRGZoQzs7OztJQ29CRTtFRGRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN1Q0U7RUR5QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGRTtFRGlDRjs7Ozs7Ozs7O0lDdkJFLEVEZ0NDIiwiZmlsZSI6InByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2xvdHRlcnktcmVzdWx0LWhlYWRlci9sb3R0ZXJ5LXJlc3VsdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIElNUE9SVEFOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUGxlYXNlIGNvbnN1bHQgd2l0aCBZdXJ5IGJlZm9yZSBhZGRpbmcgc29tZSBuZXcgQ1NTIHZhcmlhYmxlcy4gICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFRhYmxlIG9mIENvbnRlbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUeXBvZ3JhcGh5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFRoZW1lIENvbG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTaGFkb3dzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNwYWNpbmcgR3VpZGVsaW5lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQW5pbWF0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBDb3JuZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9UeXBvZ3JhcGh5XG4kZm9udC1tYWluOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtaGVhZGluZzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiRmb250LWxpbmVhd2Vzb21lOiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNnB4LzEgXCJMaW5lQXdlc29tZVwiO1xuJGZvbnQtZm9udGF3ZXNvbWU6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuJGh0bWwtZm9udC1zaXplLWxnOiAxNnB4O1xuJGh0bWwtZm9udC1zaXplLW1kOiAxNXB4O1xuJGh0bWwtZm9udC1zaXplLXNtOiAxNHB4O1xuJGh0bWwtZm9udC1zaXplLXhzOiAxM3B4O1xuXG4kaHRtbC1mb250LXdlaWdodDogNDAwO1xuXG4vLyBUaGVtZSBDb2xvcnNcbiRjb2xvci1vZmZzZXQ6IDYlOyAvLyB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgbGlnaHRlciBhbmQgZGFya2VyIHZhcmllbnRzIG9mIGEgc3BlY2lmaWMgY29sb3JcblxuJGJhc2U6ICNmYWZhZmE7IC8vdXNlZCBwcmltYXJpbHkgYXMgb2ZmLXdoaXRlIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuXG4kcHJpbWFyeTogIzAyMDA2MztcbiRzZWNvbmRhcnk6ICNmYWZhZmE7XG4kc2Vjb25kYXJ5LWJsdWU6IHJnYigxMDksIDE3OCwgMjU1KTsgLy8gd2Ugc2hvdWxkIHJlcGxhY2UgdGhpc1xuJGFjY2VudDogI2ZjYjMyMzsgLy8jMDBjNWRjO1xuJGZvY3VzOiAjOTgxNmY0O1xuXG4kc3VjY2VzczogIzAwZTZhYjtcbiR3YXJuaW5nOiAjZmZiODIyO1xuJGRhbmdlcjogI2ZmMmIyYjsgLy8jZjQ1MTZjO1xuJGluZm86ICM1NTc4ZWI7IC8vIzM2YTNmNztcblxuJG1ldGFsOiAjYzRjNWQ2O1xuJG1ldGFsLWxpZ2h0OiBsaWdodGVuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG4kbWV0YWwtZGFyazogZGFya2VuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG5cbi8vIGdyZXlzXG4kbGlnaHQ6ICNmZmY7XG4kZGFyazogIzJjMmUzZTtcbiRncmV5LTIwOiAjMzMzMzMzO1xuJGdyZXktMzA6ICM0ZDRkNGQ7XG4kZ3JleS01MDogIzgwODA4MDtcbiRncmV5LTcwOiAjYjNiM2IzO1xuJGdyZXktOTA6ICNlNmU2ZTY7XG4kZ3JleS05NTogI2YyZjJmMjtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZjtcblxuLy8gRXh0ZW5kZWQgQ29sb3IgUGFsZXR0ZVxuLy8gVE9ETzogUmV2aWV3IHRoZXNlIGNvbG9yc1xuJGRhcmstYmx1ZTogIzAyMzk3MDtcbiRibHVlOiAjMDE3YWNlO1xuJGNlcnVsZWFuOiAjMDE3YWNlO1xuJGxpZ2h0LWJsdWU6ICNjY2VhZmY7XG4kcGFsZS1ibHVlOiAjZjFmOWZmO1xuJGRhcmstdGVhbDogIzAwNjQ2ZTtcbiR0ZWFsOiAjMDBjMWQ0O1xuJGxpZ2h0LXRlYWw6ICNjY2ZhZmY7XG4kcGFsZS10ZWFsOiAjZjVmZWZmO1xuJGRhcmstZ3JlZW46ICMwYTVjNDA7XG4kZ3JlZW46ICMxNGI4ODE7XG4kbGlnaHQtZ3JlZW46ICNhM2Y1ZDk7XG4kcGFsZS1ncmVlbjogI2Y2ZmVmYjtcbiRkYXJrLXllbGxvdzogIzk5NzQwMDtcbiR5ZWxsb3c6ICNmZmNlMzM7XG4kbGlnaHQteWVsbG93OiAjZmZmM2NjO1xuJHBhbGUteWVsbG93OiAjZmZmZGY1O1xuJGRhcmstcmVkOiAjNjYwYTAwO1xuJHJlZDogI2NjMTQwMDtcbiRsaWdodC1yZWQ6ICNmZmQxY2M7XG4kcGFsZS1yZWQ6ICNmZmY2ZjU7XG5cblxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gIFwiYWNjZW50XCI6ICRhY2NlbnQsXG4gIFwic3VjY2Vzc1wiOiAkc3VjY2VzcywgXG4gIFwid2FybmluZ1wiOiAkd2FybmluZywgXG4gIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJtZXRhbFwiOiAkbWV0YWwsXG4gIFwiZm9jdXNcIjogJGZvY3VzLFxuICBcImdyZXktMjBcIjogJGdyZXktMjAsIFxuICBcImdyZXktMzBcIjogJGdyZXktMzAsXG4gIFwiZ3JleS01MFwiOiAkZ3JleS01MCxcbiAgXCJncmV5LTcwXCI6ICRncmV5LTcwLFxuICBcImdyZXktOTBcIjogJGdyZXktOTAsXG4gIFwiZ3JleS05NVwiOiAkZ3JleS05NSxcbiAgXCJiYXNlXCI6ICRiYXNlLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcIndoaXRlXCI6ICR3aGl0ZSxcbiAgXCJibGFja1wiOiAkYmxhY2ssXG4gIFwiYmx1ZVwiOiAkYmx1ZVxuKTtcblxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG4kZ3Qtc21hbGwtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHNtKSAhZGVmYXVsdDsgLy8gNTc2XG4kZ3QtbWVkaXVtLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBtZCkgIWRlZmF1bHQ7IC8vIDc2OFxuJGd0LWxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBsZykgIWRlZmF1bHQ7IC8vIDk5MlxuJGd0LXhsYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgeGwpICFkZWZhdWx0OyAvLyAxMjAwXG5cbi8qIFNoYWRvd3MgKi9cbiRzaGFkb3ctc206IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XG4kc2hhZG93LW1kOiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMDgpOyAvL2RlZmF1bHRcbiRzaGFkb3ctbGc6IDAgMTVweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwwLDAsMC4wOCk7XG4kc2hhZG93LWVsZXZhdGU6ICRzaGFkb3ctbGc7IC8vIG9uIGhvdmVyXG5cbi8qIFNwYWNpbmcgR3VpZGVsaW5lcyAqL1xuJHNwYWNpbmcteHhzOiAwLjMzM3JlbTsgICAgIC8vIHNtYWxsIGdhcCAgICAgICAgICAgLSA1cHggICAgKHh4cylcbiRzcGFjaW5nLXhzOiAwLjY2N3JlbTsgICAgICAvLyBSZWxhdGVkIERpcmVjdGx5ICAgIC0gMTBweCAgICh4cylcbiRzcGFjaW5nLXNtOiAxcmVtOyAgICAgICAgICAvLyBSZWxhdGVkIEluZGlyZWN0bHkgIC0gMTVweCAgIChzbSlcbiRzcGFjaW5nLW1kOiAxLjMzcmVtOyAgICAgICAvLyBSZWxhdGVkIEdyb3VwICAgICAgIC0gMjBweCAgIChtZCkgIC8vZGVmYXVsdFxuJHNwYWNpbmctbGc6IDJyZW07ICAgICAgICAgIC8vIFVucmVsYXRlZCBHcm91cCAgICAgLSAzMHB4ICAgKGxnKVxuJHNwYWNpbmcteGw6IDIuNjY3cmVtOyAgICAgIC8vIE5ldyBTZWN0aW9uICAgICAgICAgLSA0MHB4ICAgKHhsKVxuJHNwYWNpbmcteHhsOiA0cmVtOyAgICAgICAgIC8vIE5ldyBTZWN0aW9uIChMYXJnZSkgLSA2MHB4ICAgKHh4bClcblxuJHNwYWNpbmctc2l6ZXM6IChcbiAgXCIwXCI6IDAsXG4gIFwiNVwiOiAkc3BhY2luZy14eHMsXG4gIFwiMTBcIjogJHNwYWNpbmcteHMsXG4gIFwiMTVcIjogJHNwYWNpbmctc20sXG4gIFwiMjBcIjogJHNwYWNpbmctbWQsXG4gIFwiMzBcIjogJHNwYWNpbmctbGcsXG4gIFwiNDBcIjogJHNwYWNpbmcteGwsXG4gIFwiNjBcIjogJHNwYWNpbmcteHhsLFxuICBcIjE1LWVtXCI6IDEuNXJlbSxcbiAgXCIyMi1lbVwiOiAyLjJyZW0sXG4gIFwieHhzXCI6ICRzcGFjaW5nLXh4cyxcbiAgXCJ4c1wiOiAkc3BhY2luZy14cyxcbiAgXCJzbVwiOiAkc3BhY2luZy1zbSxcbiAgXCJtZFwiOiAkc3BhY2luZy1tZCxcbiAgXCJsZ1wiOiAkc3BhY2luZy1sZyxcbiAgXCJ4bFwiOiAkc3BhY2luZy14bCxcbiAgXCJ4eGxcIjogJHNwYWNpbmcteHhsLCAgXG4gICk7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbiRhbmltYXRpb24teHM6IGFsbCAwLjFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1zaDogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLW1kOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7IC8vZGVmYXVsdFxuJGFuaW1hdGlvbi1sZzogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXhsOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teHhsOiBhbGwgMS4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblxuJGFuaW1hdGlvbi1kZWZhdWx0OiAkYW5pbWF0aW9uLW1kO1xuXG4kYW5pbWF0aW9uLWZhZGUtaW46IGZhZGUtaW4gMXMgYm90aDtcbiRhbmltYXRpb24tZmFkZS1vdXQ6IGZhZGUtb3V0IDFzIGVhc2Utb3V0IGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tdG9wOiBmYWRlLWluLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tOiBmYWRlLWluLWJvdHRvbSAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyOiBwdWZmLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjQ3MCwgMC4wMDAsIDAuNzQ1LCAwLjcxNSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyOiBwdWZmLW91dC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBib3RoO1xuJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsOiBzaGFrZS1ob3Jpem9udGFsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1KSBib3RoO1xuJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2s6IGZvY3VzLWluLWNvbnRyYWN0LWJjayAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7IC8vIGZvciB0ZXh0XG4kYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3A6IHNjYWxlLWluLXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4kYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wOiBzY2FsZS1vdXQtdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbiRhbmltYXRpb24tcHVsc2UtaW5maW5pdGU6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIGluZmluaXRlO1xuJGFuaW1hdGlvbi1wdWxzZS0zOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyAzO1xuJGFuaW1hdGlvbi1wdWxzZS0xOiBzaGFkb3ctcHVsc2UgMXMgMTtcblxuLy8gWW91IGNhbiB1c2UgYW55IG9mIHRoZXNlIG5hbWVzIHRvIGFuaW1hdGUgSFRNTCBlbGVtZW50cyBvbiBpbml0aWF0aW9uXG4kYW5pbWF0aW9uczogKFxuICBcImZhZGUtaW5cIjogJGFuaW1hdGlvbi1mYWRlLWluLFxuICBcImZhZGUtb3V0XCI6ICRhbmltYXRpb24tZmFkZS1vdXQsXG4gIFwiZmFkZS1pbi10b3BcIjogJGFuaW1hdGlvbi1mYWRlLWluLXRvcCxcbiAgXCJmYWRlLWluLWJvdHRvbVwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tLFxuICBcInB1ZmYtaW4tY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXIsXG4gIFwicHVmZi1vdXQtY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyLFxuICBcInNoYWtlLWhvcml6b250YWxcIjogJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsLFxuICBcImZvY3VzLWluLWNvbnRyYWN0LWJja1wiOiAkYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjayxcbiAgXCJzY2FsZS1pbi12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcCxcbiAgXCJzY2FsZS1vdXQtdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wLFxuICBcInB1bHNlLWluZmluaXRlXCI6ICRhbmltYXRpb24tcHVsc2UtaW5maW5pdGUsXG4gIFwicHVsc2UtM1wiOiAkYW5pbWF0aW9uLXB1bHNlLTMsXG4gIFwicHVsc2UtMVwiOiAkYW5pbWF0aW9uLXB1bHNlLTFcbik7XG5cbi8qIEJvcmRlcnMgKi9cbiRib3JkZXItc2l6ZS1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXNpemUtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXNpemUtbGc6IDAuNXJlbTtcbiRib3JkZXItc2l6ZS0xOiAxcHg7XG4kYm9yZGVyLXNpemUtMjogMnB4O1xuJGJvcmRlci1zaXplLTM6IDNweDtcbiRib3JkZXItc2l6ZS01OiA1cHg7XG4kYm9yZGVyLXNpemUtMTA6IDEwcHg7XG5cbiRib3JkZXItc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXNpemUtc20sXG4gIFwibWRcIjogJGJvcmRlci1zaXplLW1kLFxuICBcImxnXCI6ICRib3JkZXItc2l6ZS1sZyxcbiAgXCIxXCI6ICRib3JkZXItc2l6ZS0xLFxuICBcIjJcIjogJGJvcmRlci1zaXplLTIsXG4gIFwiM1wiOiAkYm9yZGVyLXNpemUtMyxcbiAgXCI1XCI6ICRib3JkZXItc2l6ZS01LFxuICBcIjEwXCI6ICRib3JkZXItc2l6ZS0xMFxuKTtcblxuLyogQ29ybmVycyAqL1xuJGJvcmRlci1yYWRpdXMtc206IDAuMTI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1sZzogMC41cmVtO1xuJGJvcmRlci1yYWRpdXMtMjogMnB4O1xuJGJvcmRlci1yYWRpdXMtNDogNHB4O1xuJGJvcmRlci1yYWRpdXMtNjogNnB4O1xuJGJvcmRlci1yYWRpdXMtMTA6IDEwcHg7XG4kYm9yZGVyLXJhZGl1cy0xNTogMTVweDtcbiRib3JkZXItcmFkaXVzLTIwOiAyMHB4O1xuJGJvcmRlci1yYWRpdXMtaGFsZjogNTAlO1xuJGJvcmRlci1yYWRpdXMtZnVsbDogMTAwJTtcblxuJGJvcmRlci1yYWRpdXMtc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXJhZGl1cy1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXJhZGl1cy1tZCwgLy9kZWZhdWx0XG4gIFwibGdcIjogJGJvcmRlci1yYWRpdXMtbGcsXG4gIFwiMlwiOiAkYm9yZGVyLXJhZGl1cy0yLFxuICBcIjRcIjogJGJvcmRlci1yYWRpdXMtNCxcbiAgXCI2XCI6ICRib3JkZXItcmFkaXVzLTYsXG4gIFwiMTBcIjogJGJvcmRlci1yYWRpdXMtMTAsXG4gIFwiMTVcIjogJGJvcmRlci1yYWRpdXMtMTUsXG4gIFwiMjBcIjogJGJvcmRlci1yYWRpdXMtMjAsXG4gIFwiaGFsZlwiOiAkYm9yZGVyLXJhZGl1cy1oYWxmLFxuICBcImZ1bGxcIjogJGJvcmRlci1yYWRpdXMtZnVsbCxcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgLypkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDJyZW0gMCAzLjc1cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xyXG5cclxuICAvKi5sb3R0ZXJ5LXVuaXRzLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfSovXHJcblxyXG4gIC8qLmxvdHRlcnktYWN0aW9uLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1ncm93OiAyO1xyXG4gIH1cclxuXHJcbiAgLmxvdHRlcnktcmVzdWx0LWNvbnQge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNDE1MDViO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbi1yaWdodDogMi44MTNyZW07XHJcbiAgfVxyXG5cclxuICAubG90dGVyeS1yZXN1bHQtZmlsdGVyLXNlbGVjdG9yIHtcclxuICAgIGhlaWdodDogY2FsYygyLjRyZW0gKyAycHgpO1xyXG4gICAgY29sb3I6ICM1MTU3NWM7XHJcbiAgICBwYWRkaW5nOiAwIDlweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzVkNWUyO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgbWFyZ2luOiAwIDQ4cHggMCAxNnB4O1xyXG4gIH0qL1xyXG5cclxuICAvLy5sb3R0ZXJ5LXNlYXJjaC1zZWN0aW9uIHtcclxuICAvLyAgZGlzcGxheTogZmxleDtcclxuICAvLyAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgLy9cclxuICAvLyAgLmxvdHRlcnktc2VhcmNoLWlucHV0IHtcclxuICAvLyAgICBoZWlnaHQ6IGNhbGMoMS45NXJlbSArIDJweCk7XHJcbiAgLy8gICAgY29sb3I6ICM1MTU3NWM7XHJcbiAgLy8gICAgcGFkZGluZzogMDtcclxuICAvLyAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIC8vICAgIGJvcmRlcjogbm9uZTtcclxuICAvLyAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M1ZDVlMjtcclxuICAvLyAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgLy8gICAgd2lkdGg6IDA7XHJcbiAgLy8gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgLy9cclxuICAvLyAgICAmLmlzLW9wZW4ge1xyXG4gIC8vICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gICAgICBwYWRkaW5nOiAwIDlweDtcclxuICAvLyAgICB9XHJcbiAgLy9cclxuICAvLyAgICAmOmZvY3VzIHtcclxuICAvLyAgICAgIG91dGxpbmU6IDA7XHJcbiAgLy8gICAgfVxyXG4gIC8vICB9XHJcbiAgLy9cclxuICAvLyAgaSB7XHJcbiAgLy8gICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgLy8gICAgY29sb3I6ICM1MTU3NWM7XHJcbiAgLy9cclxuICAvLyAgICArIC5sb3R0ZXJ5LXNlYXJjaC1pbnB1dCB7XHJcbiAgLy8gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAvLyAgICB9XHJcbiAgLy8gIH1cclxuICAvL31cclxuXHJcbiAgLyoubG90dGVyeS1zd2l0Y2gtdmlldy1pY29uIHtcclxuICAgIHdpZHRoOiAyLjNyZW07XHJcbiAgICBoZWlnaHQ6IDIuM3JlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgJiArIC5sb3R0ZXJ5LXN3aXRjaC12aWV3LWljb24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMC45MzhyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgICBjb2xvcjogI2E4YjBiNTtcclxuICAgIH1cclxuXHJcbiAgICAmLmlzLWFjdGl2ZSB7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjNTE1NzVjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSovXHJcblxyXG4gIC8vLnZlcnRpY2FsLXNlcGFyYXRvciB7XHJcbiAgLy8gIGhlaWdodDogMTAwJTtcclxuICAvLyAgd2lkdGg6IDFweDtcclxuICAvLyAgYmFja2dyb3VuZDogIzUxNTc1YztcclxuICAvLyAgbWFyZ2luOiAwIDEuMjVyZW07XHJcbiAgLy99XHJcblxyXG4gIC8qLm5hdmlnYXRpb24tYnV0dG9ucyB7XHJcbiAgICAuYnRuLWhwZDpub3QoLmJ0bi1wcmltYXJ5LWhwZCkge1xyXG4gICAgICBjb2xvcjogJGdyZXktNTA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfSovXHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXG4vKiBTaGFkb3dzICovXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbi8qIEFuaW1hdGlvbnMgKi9cbi8qIEJvcmRlcnMgKi9cbi8qIENvcm5lcnMgKi9cbjpob3N0IHtcbiAgLypkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDJyZW0gMCAzLjc1cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xuICAvKi5sb3R0ZXJ5LXVuaXRzLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfSovXG4gIC8qLmxvdHRlcnktYWN0aW9uLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1ncm93OiAyO1xyXG4gIH1cclxuXHJcbiAgLmxvdHRlcnktcmVzdWx0LWNvbnQge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNDE1MDViO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbi1yaWdodDogMi44MTNyZW07XHJcbiAgfVxyXG5cclxuICAubG90dGVyeS1yZXN1bHQtZmlsdGVyLXNlbGVjdG9yIHtcclxuICAgIGhlaWdodDogY2FsYygyLjRyZW0gKyAycHgpO1xyXG4gICAgY29sb3I6ICM1MTU3NWM7XHJcbiAgICBwYWRkaW5nOiAwIDlweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzVkNWUyO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgbWFyZ2luOiAwIDQ4cHggMCAxNnB4O1xyXG4gIH0qL1xuICAvKi5sb3R0ZXJ5LXN3aXRjaC12aWV3LWljb24ge1xyXG4gICAgd2lkdGg6IDIuM3JlbTtcclxuICAgIGhlaWdodDogMi4zcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAmICsgLmxvdHRlcnktc3dpdGNoLXZpZXctaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjkzOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICAgIGNvbG9yOiAjYThiMGI1O1xyXG4gICAgfVxyXG5cclxuICAgICYuaXMtYWN0aXZlIHtcclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICM1MTU3NWM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9Ki9cbiAgLyoubmF2aWdhdGlvbi1idXR0b25zIHtcclxuICAgIC5idG4taHBkOm5vdCguYnRuLXByaW1hcnktaHBkKSB7XHJcbiAgICAgIGNvbG9yOiAkZ3JleS01MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9Ki8gfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/lottery-result-header/lottery-result-header.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/lottery-result-header/lottery-result-header.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LotteryResultHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryResultHeaderComponent", function() { return LotteryResultHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "../../node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var _models_index_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/index.enum */ "./src/app/modules/browse-lotteries/models/index.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LotteryResultHeaderComponent = /** @class */ (function () {
    function LotteryResultHeaderComponent(cdRef) {
        this.cdRef = cdRef;
        this.onChangeViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.orderByOptions = [
            {
                label: 'Newest',
                value: {
                    columnName: 'expiresInDays',
                    ascending: true
                }
            },
            {
                label: 'Oldest',
                value: {
                    columnName: 'expiresInDays',
                    ascending: false
                }
            }
        ];
        // isSearchInputVisible = false;
        this.ViewMode = _models_index_enum__WEBPACK_IMPORTED_MODULE_3__["ViewLotteryResultMode"];
    }
    LotteryResultHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.searchInputControl = new FormControl('');
        this.filterSelectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.orderByOptions[0]);
        document.addEventListener('click', this.offClickHandler.bind(this));
        // this.searchInputControl.valueChanges
        //   .debounceTime(700)
        //   .subscribe(value => this.onSearch.emit(value));
        this.filterSelectControl.valueChanges.subscribe(function (value) { return _this.onFilter.emit(value.value); });
    };
    LotteryResultHeaderComponent.prototype.ngOnDestroy = function () {
        document.removeEventListener('click', this.offClickHandler.bind(this));
    };
    LotteryResultHeaderComponent.prototype.offClickHandler = function (event) {
        // if (!this.searchSection.nativeElement.contains(event.target)) {
        //   this.isSearchInputVisible = false; // need change to Observable maybe
        // }
        this.cdRef.markForCheck();
    };
    // onOpenSearchInput() {
    //   if (!this.isSearchInputVisible) {
    //     this.isSearchInputVisible = true;
    //   }
    // }
    LotteryResultHeaderComponent.prototype.onChangeViewModeFn = function (ViewModeValue) {
        this.activeViewMode = ViewModeValue;
        this.onChangeViewMode.emit(ViewModeValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LotteryResultHeaderComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LotteryResultHeaderComponent.prototype, "activeViewMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LotteryResultHeaderComponent.prototype, "isSearching", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LotteryResultHeaderComponent.prototype, "onChangeViewMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LotteryResultHeaderComponent.prototype, "onSearch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LotteryResultHeaderComponent.prototype, "onFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchSection', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LotteryResultHeaderComponent.prototype, "searchSection", void 0);
    LotteryResultHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lottery-result-header',
            template: __webpack_require__(/*! ./lottery-result-header.component.html */ "./src/app/modules/browse-lotteries/components/lottery-result-header/lottery-result-header.component.html"),
            styles: [__webpack_require__(/*! ./lottery-result-header.component.scss */ "./src/app/modules/browse-lotteries/components/lottery-result-header/lottery-result-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], LotteryResultHeaderComponent);
    return LotteryResultHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/lottery-result-list/lottery-result-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/lottery-result-list/lottery-result-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- RESULTS GRID v2-->\r\n<div  *ngIf=\"ViewMode.GRID == viewModeActive\">\r\n  <div class=\"row\" *ngIf=\"lotteryResultData.length\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-12 fade-in-bottom stagger\" *ngFor=\"let lottery of lotteryResultData | orderBy:orderBy.columnName:orderBy.ascending| paginate: {id: paginatorId, itemsPerPage: pageSize, currentPage: p}; let idx = index;\">\r\n      <app-lottery-grid-card [lottery]=\"lottery\" [enteredLotteryId]=\"enteredLotteryId\" (onClickEvent)=\"onLotteryClickEvent($event)\" [viewMode]=\"cardViewType\">\r\n        <div class=\"d-flex justify-content-between pb-15 pl-15 pr-15\">\r\n          <button class=\"btn btn-primary btn-sm col-6 m-btn--pill\">Open Details</button>\r\n          <button class=\"btn btn-accent btn-sm col-6 m-btn--pill\">File Complaint</button>\r\n        </div>\r\n      </app-lottery-grid-card>\r\n    </div>\r\n  </div>  \r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12 fade-in\" *ngIf=\"lotteryResultData && lotteryResultData.length > pageSize\">\r\n    <pagination-controls [id]=\"paginatorId\"\r\n                         class=\"paginator\"\r\n                         (pageChange)=\"pageChanged($event)\"\r\n                         maxSize=\"5\"\r\n                         previousLabel=\"\"\r\n                         nextLabel=\"\">\r\n    </pagination-controls>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/lottery-result-list/lottery-result-list.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/lottery-result-list/lottery-result-list.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2Jyb3dzZS1sb3R0ZXJpZXMvY29tcG9uZW50cy9sb3R0ZXJ5LXJlc3VsdC1saXN0L2xvdHRlcnktcmVzdWx0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/lottery-result-list/lottery-result-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/lottery-result-list/lottery-result-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LotteryResultListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryResultListComponent", function() { return LotteryResultListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_index_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/index.enum */ "./src/app/modules/browse-lotteries/models/index.enum.ts");
/* harmony import */ var _models_order_filterby_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/order-filterby.model */ "./src/app/modules/browse-lotteries/models/order-filterby.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LotteryResultListComponent = /** @class */ (function () {
    function LotteryResultListComponent(cd, router) {
        this.cd = cd;
        this.router = router;
        this.ViewMode = _models_index_enum__WEBPACK_IMPORTED_MODULE_1__["ViewLotteryResultMode"];
        this.cardViewType = 'summary';
        this.p = 1; //page number
        this.pageSize = 12;
    }
    LotteryResultListComponent.prototype.ngOnInit = function () {
    };
    LotteryResultListComponent.prototype.onLotteryClickEvent = function (lottery) {
        var id = lottery.details.lotteryId;
        this.enteredLotteryId = id;
        this.router.navigate(['/details/' + id]);
    };
    LotteryResultListComponent.prototype.pageChanged = function ($event) {
        this.p = $event;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LotteryResultListComponent.prototype, "lotteryResultData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LotteryResultListComponent.prototype, "viewModeActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_order_filterby_model__WEBPACK_IMPORTED_MODULE_2__["OrderFilterbyModel"])
    ], LotteryResultListComponent.prototype, "orderBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LotteryResultListComponent.prototype, "paginatorId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LotteryResultListComponent.prototype, "lotteriesSortOrder", void 0);
    LotteryResultListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lottery-result-list',
            template: __webpack_require__(/*! ./lottery-result-list.component.html */ "./src/app/modules/browse-lotteries/components/lottery-result-list/lottery-result-list.component.html"),
            styles: [__webpack_require__(/*! ./lottery-result-list.component.scss */ "./src/app/modules/browse-lotteries/components/lottery-result-list/lottery-result-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LotteryResultListComponent);
    return LotteryResultListComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/lottery-search/lottery-search.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/lottery-search/lottery-search.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-section-header underline [subtitle]=\"subtitle\" [description]=\"description\"> -->\r\n<!-- <ng-template #title>\r\n    <span *ngIf=\"!isSearching\">{{lotteryResults.length}}</span>\r\n    <span *ngIf=\"isSearching\">Loading</span>\r\n    <span *ngIf=\"filtersModel.householdType == 2\"> Business</span>\r\n    <span *ngIf=\"filtersModel.householdType == 1\"> Violated</span>\r\n    Licenses\r\n  </ng-template> -->\r\n<!-- <ng-template #subtitle> -->\r\n<div class=\"\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <!-- <input type=\"text\" placeholder=\"Refine your search to find the right business\" class=\"m-input form-control\"> -->\r\n      <div class=\"input-group col-12\">\r\n        <!-- <ng4geo-autocomplete [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"\r\n          style=\"width: 89%\">\r\n        </ng4geo-autocomplete> -->\r\n        <input class=\"form-control\" placeholder=\"Refine your search to find the right business\"\r\n          [formControl]=\"businessSearch\">\r\n        <div class=\"input-group-append\">\r\n          <span class=\"input-group-text\">\r\n            <i class=\"la la-search\"></i>\r\n          </span></div>\r\n      </div>\r\n\r\n    </div>\r\n    <mat-form-field class=\"col-4\">\r\n      <mat-label>Business Type</mat-label>\r\n      <mat-select multiple class=\"m-select\" id=\"ddlRelationship\" ngbTooltip=\"License Type\"\r\n        tooltipClass=\"custom-tooltip\">\r\n        <!-- <mat-option value=\"\" disabled selected>License Type</mat-option> -->\r\n        <mat-option *ngFor=\"let item of businessTypeList\" [value]=\"item\">{{item}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <div class=\"col-2\">\r\n      <button class=\"btn btn-secondary m-btn--pill\" (click)=\"toggleFilters()\"><span><i\r\n            class=\"la la-plus\"></i></span><span>Additional Filters</span></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"animated\" *ngIf=\"filtersOpen\">\r\n    <div class=\"row\">\r\n      <div class=\"col-3 d-flex justify-content-center\">\r\n\r\n        <mat-checkbox class=\"example-margin\" [formControl]=\"complaintCheckbox\">\r\n          <mat-label>Businesses with Complaints</mat-label>\r\n        </mat-checkbox>\r\n      </div>\r\n      <div class=\"col-3 d-flex justify-content-center\">\r\n\r\n        <mat-checkbox class=\"example-margin\" [formControl]=\"scaleCheckbox\">\r\n          <mat-label>Businesses with Scales </mat-label>\r\n        </mat-checkbox>\r\n      </div>\r\n      <div class=\"col-3 d-flex justify-content-center\">\r\n\r\n        <mat-checkbox class=\"example-margin\">\r\n          <mat-label>Businesses with Vehicles</mat-label>\r\n        </mat-checkbox>\r\n      </div>\r\n      <div class=\"col-3 d-flex justify-content-center\">\r\n\r\n        <mat-checkbox class=\"example-margin\">\r\n          <mat-label>Gas Stations</mat-label>\r\n        </mat-checkbox>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<hr />\r\n<!-- \r\n  </ng-template>\r\n  <ng-template #description>\r\n    <app-lottery-filters-summary [filtersModel]=\"filtersModel\" [filtersData]=\"filtersData\"\r\n      (onChangeFilterEvent)=\"onChangeFilterEvent($event)\"></app-lottery-filters-summary>\r\n  </ng-template>\r\n</app-section-header> -->\r\n\r\n\r\n<div *ngIf=\"isSearching\" class=\"fade-in pt-20 pb-20\">\r\n  <loader></loader>\r\n</div>\r\n<div *ngIf=\"!isSearching\" class=\"fade-in\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-40\" *ngIf=\"this.filteredData\">\r\n      <app-map style=\"min-height: 800px; margin-top: -16px\" [markers]=\"getFilteredData()\" (fileComplaint)=\"navigateToComplaint($event)\"></app-map>\r\n    </div>\r\n    <!-- <div class=\"col-6\">\r\n      <app-lottery-result-list [lotteryResultData]=\"searchResults\" [viewModeActive]=\"activeViewMode\" [orderBy]=\"orderBy\"\r\n        [paginatorId]=\"paginatorId\"></app-lottery-result-list>\r\n    </div> -->\r\n  </div>\r\n\r\n  <!-- <div class=\"row\" *ngIf=\"lotteryResults && !lotteryResults.length\">\r\n    <div class=\"col-12 mb-md font-lg\">\r\n      <p *ngIf=\"filtersModel.count()\">No business found that match your search criteria.</p>\r\n      <p *ngIf=\"!filtersModel.count()\">\r\n        There are no\r\n        <span *ngIf=\"filtersModel.householdType == 2\">Business</span>\r\n        <span *ngIf=\"filtersModel.householdType == 1\"> Violated</span>\r\n        licenses available at this time.\r\n      </p>\r\n    </div>\r\n  </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/lottery-search/lottery-search.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/lottery-search/lottery-search.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host .sort-control {\n  width: 10rem;\n  margin-right: 1rem;\n  padding-left: 0.5rem;\n  padding-right: .5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvYnJvd3NlLWxvdHRlcmllcy9jb21wb25lbnRzL2xvdHRlcnktc2VhcmNoL0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvbG90dGVyeS1zZWFyY2gvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcbW9kdWxlc1xcYnJvd3NlLWxvdHRlcmllc1xcY29tcG9uZW50c1xcbG90dGVyeS1zZWFyY2hcXGxvdHRlcnktc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBK0ZBLDJCQUFBO0FBYUEsWUFBQTtBQU1BLHVCQUFBO0FBNkJBLGVBQUE7QUF5Q0EsWUFBQTtBQXFCQSxZQUFBO0FDdk5BO0VBRUksWUFBWTtFQUNaLGtCRDRIYTtFQzNIYixvQkFBb0I7RUFDcEIsb0JBQW9CLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9icm93c2UtbG90dGVyaWVzL2NvbXBvbmVudHMvbG90dGVyeS1zZWFyY2gvbG90dGVyeS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIElNUE9SVEFOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUGxlYXNlIGNvbnN1bHQgd2l0aCBZdXJ5IGJlZm9yZSBhZGRpbmcgc29tZSBuZXcgQ1NTIHZhcmlhYmxlcy4gICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFRhYmxlIG9mIENvbnRlbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUeXBvZ3JhcGh5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFRoZW1lIENvbG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTaGFkb3dzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNwYWNpbmcgR3VpZGVsaW5lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQW5pbWF0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBDb3JuZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9UeXBvZ3JhcGh5XG4kZm9udC1tYWluOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtaGVhZGluZzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiRmb250LWxpbmVhd2Vzb21lOiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNnB4LzEgXCJMaW5lQXdlc29tZVwiO1xuJGZvbnQtZm9udGF3ZXNvbWU6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuJGh0bWwtZm9udC1zaXplLWxnOiAxNnB4O1xuJGh0bWwtZm9udC1zaXplLW1kOiAxNXB4O1xuJGh0bWwtZm9udC1zaXplLXNtOiAxNHB4O1xuJGh0bWwtZm9udC1zaXplLXhzOiAxM3B4O1xuXG4kaHRtbC1mb250LXdlaWdodDogNDAwO1xuXG4vLyBUaGVtZSBDb2xvcnNcbiRjb2xvci1vZmZzZXQ6IDYlOyAvLyB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgbGlnaHRlciBhbmQgZGFya2VyIHZhcmllbnRzIG9mIGEgc3BlY2lmaWMgY29sb3JcblxuJGJhc2U6ICNmYWZhZmE7IC8vdXNlZCBwcmltYXJpbHkgYXMgb2ZmLXdoaXRlIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuXG4kcHJpbWFyeTogIzAyMDA2MztcbiRzZWNvbmRhcnk6ICNmYWZhZmE7XG4kc2Vjb25kYXJ5LWJsdWU6IHJnYigxMDksIDE3OCwgMjU1KTsgLy8gd2Ugc2hvdWxkIHJlcGxhY2UgdGhpc1xuJGFjY2VudDogI2ZjYjMyMzsgLy8jMDBjNWRjO1xuJGZvY3VzOiAjOTgxNmY0O1xuXG4kc3VjY2VzczogIzAwZTZhYjtcbiR3YXJuaW5nOiAjZmZiODIyO1xuJGRhbmdlcjogI2ZmMmIyYjsgLy8jZjQ1MTZjO1xuJGluZm86ICM1NTc4ZWI7IC8vIzM2YTNmNztcblxuJG1ldGFsOiAjYzRjNWQ2O1xuJG1ldGFsLWxpZ2h0OiBsaWdodGVuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG4kbWV0YWwtZGFyazogZGFya2VuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG5cbi8vIGdyZXlzXG4kbGlnaHQ6ICNmZmY7XG4kZGFyazogIzJjMmUzZTtcbiRncmV5LTIwOiAjMzMzMzMzO1xuJGdyZXktMzA6ICM0ZDRkNGQ7XG4kZ3JleS01MDogIzgwODA4MDtcbiRncmV5LTcwOiAjYjNiM2IzO1xuJGdyZXktOTA6ICNlNmU2ZTY7XG4kZ3JleS05NTogI2YyZjJmMjtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZjtcblxuLy8gRXh0ZW5kZWQgQ29sb3IgUGFsZXR0ZVxuLy8gVE9ETzogUmV2aWV3IHRoZXNlIGNvbG9yc1xuJGRhcmstYmx1ZTogIzAyMzk3MDtcbiRibHVlOiAjMDE3YWNlO1xuJGNlcnVsZWFuOiAjMDE3YWNlO1xuJGxpZ2h0LWJsdWU6ICNjY2VhZmY7XG4kcGFsZS1ibHVlOiAjZjFmOWZmO1xuJGRhcmstdGVhbDogIzAwNjQ2ZTtcbiR0ZWFsOiAjMDBjMWQ0O1xuJGxpZ2h0LXRlYWw6ICNjY2ZhZmY7XG4kcGFsZS10ZWFsOiAjZjVmZWZmO1xuJGRhcmstZ3JlZW46ICMwYTVjNDA7XG4kZ3JlZW46ICMxNGI4ODE7XG4kbGlnaHQtZ3JlZW46ICNhM2Y1ZDk7XG4kcGFsZS1ncmVlbjogI2Y2ZmVmYjtcbiRkYXJrLXllbGxvdzogIzk5NzQwMDtcbiR5ZWxsb3c6ICNmZmNlMzM7XG4kbGlnaHQteWVsbG93OiAjZmZmM2NjO1xuJHBhbGUteWVsbG93OiAjZmZmZGY1O1xuJGRhcmstcmVkOiAjNjYwYTAwO1xuJHJlZDogI2NjMTQwMDtcbiRsaWdodC1yZWQ6ICNmZmQxY2M7XG4kcGFsZS1yZWQ6ICNmZmY2ZjU7XG5cblxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gIFwiYWNjZW50XCI6ICRhY2NlbnQsXG4gIFwic3VjY2Vzc1wiOiAkc3VjY2VzcywgXG4gIFwid2FybmluZ1wiOiAkd2FybmluZywgXG4gIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJtZXRhbFwiOiAkbWV0YWwsXG4gIFwiZm9jdXNcIjogJGZvY3VzLFxuICBcImdyZXktMjBcIjogJGdyZXktMjAsIFxuICBcImdyZXktMzBcIjogJGdyZXktMzAsXG4gIFwiZ3JleS01MFwiOiAkZ3JleS01MCxcbiAgXCJncmV5LTcwXCI6ICRncmV5LTcwLFxuICBcImdyZXktOTBcIjogJGdyZXktOTAsXG4gIFwiZ3JleS05NVwiOiAkZ3JleS05NSxcbiAgXCJiYXNlXCI6ICRiYXNlLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcIndoaXRlXCI6ICR3aGl0ZSxcbiAgXCJibGFja1wiOiAkYmxhY2ssXG4gIFwiYmx1ZVwiOiAkYmx1ZVxuKTtcblxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG4kZ3Qtc21hbGwtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHNtKSAhZGVmYXVsdDsgLy8gNTc2XG4kZ3QtbWVkaXVtLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBtZCkgIWRlZmF1bHQ7IC8vIDc2OFxuJGd0LWxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBsZykgIWRlZmF1bHQ7IC8vIDk5MlxuJGd0LXhsYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgeGwpICFkZWZhdWx0OyAvLyAxMjAwXG5cbi8qIFNoYWRvd3MgKi9cbiRzaGFkb3ctc206IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XG4kc2hhZG93LW1kOiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMDgpOyAvL2RlZmF1bHRcbiRzaGFkb3ctbGc6IDAgMTVweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwwLDAsMC4wOCk7XG4kc2hhZG93LWVsZXZhdGU6ICRzaGFkb3ctbGc7IC8vIG9uIGhvdmVyXG5cbi8qIFNwYWNpbmcgR3VpZGVsaW5lcyAqL1xuJHNwYWNpbmcteHhzOiAwLjMzM3JlbTsgICAgIC8vIHNtYWxsIGdhcCAgICAgICAgICAgLSA1cHggICAgKHh4cylcbiRzcGFjaW5nLXhzOiAwLjY2N3JlbTsgICAgICAvLyBSZWxhdGVkIERpcmVjdGx5ICAgIC0gMTBweCAgICh4cylcbiRzcGFjaW5nLXNtOiAxcmVtOyAgICAgICAgICAvLyBSZWxhdGVkIEluZGlyZWN0bHkgIC0gMTVweCAgIChzbSlcbiRzcGFjaW5nLW1kOiAxLjMzcmVtOyAgICAgICAvLyBSZWxhdGVkIEdyb3VwICAgICAgIC0gMjBweCAgIChtZCkgIC8vZGVmYXVsdFxuJHNwYWNpbmctbGc6IDJyZW07ICAgICAgICAgIC8vIFVucmVsYXRlZCBHcm91cCAgICAgLSAzMHB4ICAgKGxnKVxuJHNwYWNpbmcteGw6IDIuNjY3cmVtOyAgICAgIC8vIE5ldyBTZWN0aW9uICAgICAgICAgLSA0MHB4ICAgKHhsKVxuJHNwYWNpbmcteHhsOiA0cmVtOyAgICAgICAgIC8vIE5ldyBTZWN0aW9uIChMYXJnZSkgLSA2MHB4ICAgKHh4bClcblxuJHNwYWNpbmctc2l6ZXM6IChcbiAgXCIwXCI6IDAsXG4gIFwiNVwiOiAkc3BhY2luZy14eHMsXG4gIFwiMTBcIjogJHNwYWNpbmcteHMsXG4gIFwiMTVcIjogJHNwYWNpbmctc20sXG4gIFwiMjBcIjogJHNwYWNpbmctbWQsXG4gIFwiMzBcIjogJHNwYWNpbmctbGcsXG4gIFwiNDBcIjogJHNwYWNpbmcteGwsXG4gIFwiNjBcIjogJHNwYWNpbmcteHhsLFxuICBcIjE1LWVtXCI6IDEuNXJlbSxcbiAgXCIyMi1lbVwiOiAyLjJyZW0sXG4gIFwieHhzXCI6ICRzcGFjaW5nLXh4cyxcbiAgXCJ4c1wiOiAkc3BhY2luZy14cyxcbiAgXCJzbVwiOiAkc3BhY2luZy1zbSxcbiAgXCJtZFwiOiAkc3BhY2luZy1tZCxcbiAgXCJsZ1wiOiAkc3BhY2luZy1sZyxcbiAgXCJ4bFwiOiAkc3BhY2luZy14bCxcbiAgXCJ4eGxcIjogJHNwYWNpbmcteHhsLCAgXG4gICk7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbiRhbmltYXRpb24teHM6IGFsbCAwLjFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1zaDogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLW1kOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7IC8vZGVmYXVsdFxuJGFuaW1hdGlvbi1sZzogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXhsOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teHhsOiBhbGwgMS4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblxuJGFuaW1hdGlvbi1kZWZhdWx0OiAkYW5pbWF0aW9uLW1kO1xuXG4kYW5pbWF0aW9uLWZhZGUtaW46IGZhZGUtaW4gMXMgYm90aDtcbiRhbmltYXRpb24tZmFkZS1vdXQ6IGZhZGUtb3V0IDFzIGVhc2Utb3V0IGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tdG9wOiBmYWRlLWluLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tOiBmYWRlLWluLWJvdHRvbSAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyOiBwdWZmLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjQ3MCwgMC4wMDAsIDAuNzQ1LCAwLjcxNSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyOiBwdWZmLW91dC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBib3RoO1xuJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsOiBzaGFrZS1ob3Jpem9udGFsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1KSBib3RoO1xuJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2s6IGZvY3VzLWluLWNvbnRyYWN0LWJjayAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7IC8vIGZvciB0ZXh0XG4kYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3A6IHNjYWxlLWluLXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4kYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wOiBzY2FsZS1vdXQtdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbiRhbmltYXRpb24tcHVsc2UtaW5maW5pdGU6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIGluZmluaXRlO1xuJGFuaW1hdGlvbi1wdWxzZS0zOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyAzO1xuJGFuaW1hdGlvbi1wdWxzZS0xOiBzaGFkb3ctcHVsc2UgMXMgMTtcblxuLy8gWW91IGNhbiB1c2UgYW55IG9mIHRoZXNlIG5hbWVzIHRvIGFuaW1hdGUgSFRNTCBlbGVtZW50cyBvbiBpbml0aWF0aW9uXG4kYW5pbWF0aW9uczogKFxuICBcImZhZGUtaW5cIjogJGFuaW1hdGlvbi1mYWRlLWluLFxuICBcImZhZGUtb3V0XCI6ICRhbmltYXRpb24tZmFkZS1vdXQsXG4gIFwiZmFkZS1pbi10b3BcIjogJGFuaW1hdGlvbi1mYWRlLWluLXRvcCxcbiAgXCJmYWRlLWluLWJvdHRvbVwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tLFxuICBcInB1ZmYtaW4tY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXIsXG4gIFwicHVmZi1vdXQtY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyLFxuICBcInNoYWtlLWhvcml6b250YWxcIjogJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsLFxuICBcImZvY3VzLWluLWNvbnRyYWN0LWJja1wiOiAkYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjayxcbiAgXCJzY2FsZS1pbi12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcCxcbiAgXCJzY2FsZS1vdXQtdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wLFxuICBcInB1bHNlLWluZmluaXRlXCI6ICRhbmltYXRpb24tcHVsc2UtaW5maW5pdGUsXG4gIFwicHVsc2UtM1wiOiAkYW5pbWF0aW9uLXB1bHNlLTMsXG4gIFwicHVsc2UtMVwiOiAkYW5pbWF0aW9uLXB1bHNlLTFcbik7XG5cbi8qIEJvcmRlcnMgKi9cbiRib3JkZXItc2l6ZS1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXNpemUtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXNpemUtbGc6IDAuNXJlbTtcbiRib3JkZXItc2l6ZS0xOiAxcHg7XG4kYm9yZGVyLXNpemUtMjogMnB4O1xuJGJvcmRlci1zaXplLTM6IDNweDtcbiRib3JkZXItc2l6ZS01OiA1cHg7XG4kYm9yZGVyLXNpemUtMTA6IDEwcHg7XG5cbiRib3JkZXItc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXNpemUtc20sXG4gIFwibWRcIjogJGJvcmRlci1zaXplLW1kLFxuICBcImxnXCI6ICRib3JkZXItc2l6ZS1sZyxcbiAgXCIxXCI6ICRib3JkZXItc2l6ZS0xLFxuICBcIjJcIjogJGJvcmRlci1zaXplLTIsXG4gIFwiM1wiOiAkYm9yZGVyLXNpemUtMyxcbiAgXCI1XCI6ICRib3JkZXItc2l6ZS01LFxuICBcIjEwXCI6ICRib3JkZXItc2l6ZS0xMFxuKTtcblxuLyogQ29ybmVycyAqL1xuJGJvcmRlci1yYWRpdXMtc206IDAuMTI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1sZzogMC41cmVtO1xuJGJvcmRlci1yYWRpdXMtMjogMnB4O1xuJGJvcmRlci1yYWRpdXMtNDogNHB4O1xuJGJvcmRlci1yYWRpdXMtNjogNnB4O1xuJGJvcmRlci1yYWRpdXMtMTA6IDEwcHg7XG4kYm9yZGVyLXJhZGl1cy0xNTogMTVweDtcbiRib3JkZXItcmFkaXVzLTIwOiAyMHB4O1xuJGJvcmRlci1yYWRpdXMtaGFsZjogNTAlO1xuJGJvcmRlci1yYWRpdXMtZnVsbDogMTAwJTtcblxuJGJvcmRlci1yYWRpdXMtc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXJhZGl1cy1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXJhZGl1cy1tZCwgLy9kZWZhdWx0XG4gIFwibGdcIjogJGJvcmRlci1yYWRpdXMtbGcsXG4gIFwiMlwiOiAkYm9yZGVyLXJhZGl1cy0yLFxuICBcIjRcIjogJGJvcmRlci1yYWRpdXMtNCxcbiAgXCI2XCI6ICRib3JkZXItcmFkaXVzLTYsXG4gIFwiMTBcIjogJGJvcmRlci1yYWRpdXMtMTAsXG4gIFwiMTVcIjogJGJvcmRlci1yYWRpdXMtMTUsXG4gIFwiMjBcIjogJGJvcmRlci1yYWRpdXMtMjAsXG4gIFwiaGFsZlwiOiAkYm9yZGVyLXJhZGl1cy1oYWxmLFxuICBcImZ1bGxcIjogJGJvcmRlci1yYWRpdXMtZnVsbCxcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgLnNvcnQtY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjaW5nLXNtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/browse-lotteries/components/lottery-search/lottery-search.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/components/lottery-search/lottery-search.component.ts ***!
  \************************************************************************************************/
/*! exports provided: LotterySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotterySearchComponent", function() { return LotterySearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/api/lottery-api.service */ "./src/app/shared/services/api/lottery-api.service.ts");
/* harmony import */ var _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/enums/developmentEnums */ "./src/app/shared/enums/developmentEnums.ts");
/* harmony import */ var _filters_components_lottery_filters_modal_lottery_filters_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filters/components/lottery-filters-modal/lottery-filters-modal.component */ "./src/app/modules/browse-lotteries/components/filters/components/lottery-filters-modal/lottery-filters-modal.component.ts");
/* harmony import */ var _services_browse_lotteries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/browse-lotteries.service */ "./src/app/modules/browse-lotteries/services/browse-lotteries.service.ts");
/* harmony import */ var _models_index_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/index.enum */ "./src/app/modules/browse-lotteries/models/index.enum.ts");
/* harmony import */ var _filters_filter_models_filters_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../filters/filter-models/filters.class */ "./src/app/modules/browse-lotteries/components/filters/filter-models/filters.class.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _household_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../household/services/utility/utility.service */ "./src/app/modules/household/services/utility/utility.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var LotterySearchComponent = /** @class */ (function () {
    function LotterySearchComponent(lotteryApiService, browseLotteriesService, matDialog, cdRef, router, utilSvc) {
        this.lotteryApiService = lotteryApiService;
        this.browseLotteriesService = browseLotteriesService;
        this.matDialog = matDialog;
        this.cdRef = cdRef;
        this.router = router;
        this.utilSvc = utilSvc;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.activeViewMode = _models_index_enum__WEBPACK_IMPORTED_MODULE_8__["ViewLotteryResultMode"].GRID;
        this.filtersModel = {};
        this.filtersData = {};
        this.filtersOpen = false;
        this.complaintCheckbox = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"](false);
        this.scaleCheckbox = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"](false);
        this.businessTypeList = [
            'Amusement Arcade',
            'Amusement Device - Permanent',
            'Amusement Device - Portable',
            'Amusement Device - Temporary',
            'Auction House',
            'Auctioneer',
            'Bingo Game Operator',
            'Booting Company',
            'Car Wash',
            'Commercial Lessor',
            'Dealer in Products for the Disabled',
            'Debt Collection Agency',
            'Electronic & Home Appliance Service Dealer',
            'Electronic Cigarette Retail Dealer',
            'Electronics Store',
            'Employment Agency',
            'Games of Chance',
            'Gaming Café',
            'Garage',
            'Garage and Parking Lot',
            'General Vendor',
            'General Vendor Distributor',
            'Home Improvement Contractor',
            'Home Improvement Salesperson',
            'Horse Drawn Cab Driver',
            'Horse Drawn Cab Owner',
            'Industrial Laundry',
            'Industrial Laundry Delivery',
            'Locksmith',
            'Locksmith Apprentice',
            'Newsstand',
            'Parking Lot',
            'Pawnbroker',
            'Pedicab Business',
            'Pedicab Driver',
            'Pool or Billiard Room',
            'Process Server Individual',
            'Process Serving Agency',
            'Retail Laundry',
            'Scale Dealer/Repairer',
            'Scrap Metal Processor',
            'Secondhand Dealer Auto',
            'Secondhand Dealer General',
            'Sidewalk Café',
            'Sightseeing Bus',
            'Sightseeing Guide',
            'Special Sale (e.g., Going Out of Business, Liquidation, etc.)',
            'Stoop Line Stand',
            'Storage Warehouse',
            'Temporary Street Fair Vendor Permit',
            'Ticket Seller Business',
            'Ticket Seller Individual',
            'Tobacco Retail Dealer',
            'Tow Truck Company',
            'Tow Truck Driver',
            'Tow Truck Exemption'
        ];
        this.lotteryResults = [];
        this.orderByOptions = [
            {
                label: 'Ascending',
                value: {
                    columnName: 'endIn',
                    ascending: false,
                }
            },
            {
                label: 'Descending',
                value: {
                    columnName: 'endIn',
                    ascending: true,
                }
            }
        ];
        this.searchResults = [
            {
                details: {
                    amenities: "Pet-friendly,Dog park,Dog washing station,Garages,Covered parking",
                    area: "109 PARK AVENUE",
                    borough: "Manhattan",
                    description: null,
                    endIn: 16,
                    expirationDate: "2019-15-12T02:27:05",
                    expirationDateText: "License renews in 16 days",
                    fourBR: 0,
                    images: ["/assets/images/deli-img.png"],
                    isAddedToFavorite: false,
                    lotteryEndDate: "2019-12-31T00:00:00",
                    lotteryId: 1334,
                    lotteryName: "MY DELI FOOD MARKET INC",
                    maxHousehold: null,
                    maxIncome: null,
                    minHousehold: null,
                    minIncome: null,
                    mobilityPref: "Mobility",
                    oneBR: 0,
                    ownerType: "",
                    ownerTypeId: null,
                    propertyType: "Rental",
                    propertyTypeId: 2,
                    street: "Tobacco Retail Dealer License",
                    studios: 0,
                    subwayServices: [],
                    threeBR: 0,
                    twoBR: 5,
                    unitLayouts: null,
                    units: 5,
                    visionHearingPref: null
                },
                mainImage: "/assets/images/deli-img.png",
                markers: [
                    {
                        address: "990 AVENUE OF THE AMERICAS",
                        city: "NEW YORK",
                        color: null,
                        draggable: false,
                        fullAddress: "$(item.address), $(item.city), $(item.state) $(item.zip)",
                        iconUrl: "/assets/images/map-marker.svg",
                        id: 0,
                        index: 0,
                        label: "",
                        lat: "40.751259332358",
                        lng: "-73.9863813278208",
                        markerLabel: "",
                        state: "New York",
                        trainName: null,
                        type: "building",
                        zip: "10018"
                    },
                    {
                        address: "550 WEST   34 STREET",
                        city: "NEW YORK",
                        color: null,
                        draggable: false,
                        fullAddress: "$(item.address), $(item.city), $(item.state) $(item.zip)",
                        iconUrl: "/assets/images/map-marker.svg",
                        id: 0,
                        index: 1,
                        label: "",
                        lat: "40.7542400180493",
                        lng: "-74.0017650175111",
                        markerLabel: "",
                        state: "New York",
                        trainName: null,
                        type: "building",
                        zip: "10001"
                    }
                ]
            }
        ];
        this.searchMarkers = [
            {
                address: "990 AVENUE OF THE AMERICAS",
                city: "NEW YORK",
                color: null,
                draggable: false,
                fullAddress: "$(item.address), $(item.city), $(item.state) $(item.zip)",
                iconUrl: "/assets/images/map-marker.svg",
                id: 0,
                index: 0,
                label: "",
                lat: "40.751259332358",
                lng: "-74.00000",
                markerLabel: "",
                state: "New York",
                trainName: null,
                type: "building",
                zip: "10018"
            },
            {
                address: "550 WEST   34 STREET",
                city: "NEW YORK",
                color: null,
                draggable: false,
                fullAddress: "$(item.address), $(item.city), $(item.state) $(item.zip)",
                iconUrl: "/assets/images/map-marker.svg",
                id: 1,
                index: 1,
                label: "",
                lat: "40.7520400180493",
                lng: "-74.0017650175111",
                markerLabel: "",
                state: "New York",
                trainName: null,
                type: "building",
                zip: "10001"
            },
            {
                address: "550 WEST   34 STREET",
                city: "NEW YORK",
                color: null,
                draggable: false,
                fullAddress: "$(item.address), $(item.city), $(item.state) $(item.zip)",
                iconUrl: "/assets/images/map-marker.svg",
                id: 2,
                index: 2,
                label: "",
                lat: "40.7502400180493",
                lng: "-74.0007650175111",
                markerLabel: "",
                state: "New York",
                trainName: null,
                type: "building",
                zip: "10001"
            }, {
                address: "990 AVENUE OF THE AMERICAS",
                city: "NEW YORK",
                color: null,
                draggable: false,
                fullAddress: "$(item.address), $(item.city), $(item.state) $(item.zip)",
                iconUrl: "/assets/images/map-marker.svg",
                id: 3,
                index: 3,
                label: "",
                lat: "40.751239335358",
                lng: "-74.00100",
                markerLabel: "",
                state: "New York",
                trainName: null,
                type: "building",
                zip: "10018"
            },
            {
                address: "550 WEST   34 STREET",
                city: "NEW YORK",
                color: null,
                draggable: false,
                fullAddress: "$(item.address), $(item.city), $(item.state) $(item.zip)",
                iconUrl: "/assets/images/map-marker.svg",
                id: 4,
                index: 4,
                label: "",
                lat: "40.7520800180493",
                lng: "-74.0052650175111",
                markerLabel: "",
                state: "New York",
                trainName: null,
                type: "building",
                zip: "10001"
            }
        ];
        this.baseLatLng = {
            lat: 40.1760154,
            lng: -77.52330108
        };
        this.cafeMapData = [
            {
                "LICENSE_NBR": "0885830-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "KEM REST., INC.",
                "BUSINESS_NAME2": "DON GIOVANNI",
                "BUILDING": 214,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 390,
                "SWC_TABLES": 12,
                "SWC_CHAIRS": 34,
                "DOHMH": 40393591,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 983071),
                lat: this.baseLatLng.lat + (.0000027 * 211565),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "35179-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 390,
                "APP_TABLES": 12,
                "APP_CHAIRS": 34,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "12-Dec-19",
                "EXPIRATION_DATE": "15-Dec-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "12-Dec-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "12-Dec-19",
                "DPQA": "Under Review",
                "SEND_PACKAGE_DD": "12-Dec-19",
                "CP": "Pending Review",
                "CP_DD": "12-Dec-19",
                "CB": "Pending Review",
                "CB_DD": "12-Dec-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "29-Jan-20",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "0936261-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "SEVENTH AVENUE TOMATO, INC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 209,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 272,
                "SWC_TABLES": 9,
                "SWC_CHAIRS": 18,
                "DOHMH": 40511648,
                imgUrl: 'assets/images/b-cafe.png',
                lng: this.baseLatLng.lng + (.00000358 * 985376),
                lat: this.baseLatLng.lat + (.0000027 * 210118),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "4812-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 272,
                "APP_TABLES": 9,
                "APP_CHAIRS": 18,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "28-Mar-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "19-Mar-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "28-Mar-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "28-Mar-18"
            },
            {
                "LICENSE_NBR": "1000225-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "119 7TH AVENUE CAFETERIA, LLC",
                "BUSINESS_NAME2": "CAFETERIA",
                "BUILDING": 119,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 470,
                "SWC_TABLES": 21,
                "SWC_CHAIRS": 42,
                "DOHMH": 40619544,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 984802),
                lat: this.baseLatLng.lat + (.0000027 * 209071),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "17327-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 470,
                "APP_TABLES": 21,
                "APP_CHAIRS": 42,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "29-Aug-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "9-Apr-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "12-Apr-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "12-Apr-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "4-Jun-19",
                "HEARING": "Waived",
                "HEARING_DD": "4-Jun-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "25-Jun-19",
                "MOO": "Approved",
                "MOO_DD": "29-Aug-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "29-Aug-19"
            },
            {
                "LICENSE_NBR": "1000917-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "BUCKWHEAT AND ALFALFA, INC.",
                "BUSINESS_NAME2": "THE ROCKING HORSE MEXICAN CAFE",
                "BUILDING": 182,
                "STREET": "8TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 109,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 8,
                "DOHMH": 40387878,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 984246),
                lat: this.baseLatLng.lat + (.0000027 * 209916),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "7719-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 109,
                "APP_TABLES": 4,
                "APP_CHAIRS": 8,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "10-Sep-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "1-May-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "1-May-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "1-May-18",
                "CP": "Pending Review",
                "CP_DD": "1-May-18",
                "CB": "Review Period Expired",
                "CB_DD": "21-Jun-18",
                "HEARING": "Waived",
                "HEARING_DD": "21-Jun-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "12-Jul-18",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "10-Sep-18"
            },
            {
                "LICENSE_NBR": "1035729-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "MESTRE, INC.",
                "BUSINESS_NAME2": "LE ZIE 2000",
                "BUILDING": 172,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 153,
                "SWC_TABLES": 5,
                "SWC_CHAIRS": 14,
                "DOHMH": 40677038,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 985066),
                lat: this.baseLatLng.lat + (.0000027 * 209792),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "11245-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 153,
                "APP_TABLES": 5,
                "APP_CHAIRS": 14,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "28-Dec-18",
                "EXPIRATION_DATE": "15-Sep-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "16-Aug-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "22-Aug-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "22-Aug-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "10-Oct-18",
                "HEARING": "Waived",
                "HEARING_DD": "10-Oct-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "31-Oct-18",
                "MOO": "Approved",
                "MOO_DD": "28-Dec-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "28-Dec-18"
            },
            {
                "LICENSE_NBR": "1071297-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "10TH AVENUE GROUP, INC.",
                "BUSINESS_NAME2": "44&X-HELLS KITCHEN",
                "BUILDING": 622,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 307,
                "SWC_TABLES": 13,
                "SWC_CHAIRS": 27,
                "DOHMH": 40809948,
                imgUrl: 'assets/images/tribeca.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 985857),
                lat: this.baseLatLng.lat + (.0000027 * 216578),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "18090-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 307,
                "APP_TABLES": 13,
                "APP_CHAIRS": 27,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "29-Aug-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "18-Apr-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "18-Apr-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "18-Apr-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "7-Jun-19",
                "HEARING": "Waived",
                "HEARING_DD": "7-Jun-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "28-Jun-19",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "29-Aug-19"
            },
            {
                "LICENSE_NBR": "1079412-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "C.A.P. RESTAURANT CORP.",
                "BUSINESS_NAME2": "SOMBRERO MEXICAN RESTAURANT",
                "BUILDING": 303,
                "STREET": "W 48TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 195,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 11,
                "DOHMH": 40826388,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 987750),
                lat: this.baseLatLng.lat + (.0000027 * 216626),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "1541-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 195,
                "APP_TABLES": 6,
                "APP_CHAIRS": 11,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "9-May-19",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "10-Jan-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "10-Jan-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "11-Jan-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "28-Feb-19",
                "HEARING": "Waived",
                "HEARING_DD": "28-Feb-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "21-Mar-19",
                "MOO": "Approved",
                "MOO_DD": "9-May-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "9-May-19"
            },
            {
                "LICENSE_NBR": "1094184-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "DANA'S LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 630,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 565,
                "SWC_TABLES": 24,
                "SWC_CHAIRS": 46,
                "DOHMH": 40847328,
                imgUrl: 'assets/images/b-cafe.png',
                lng: this.baseLatLng.lng + (.00000358 * 986658),
                lat: this.baseLatLng.lat + (.0000027 * 216134),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "34985-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 565,
                "APP_TABLES": 24,
                "APP_CHAIRS": 46,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "10-Dec-19",
                "EXPIRATION_DATE": "10-Mar-20",
                "APP_TOO_DATE": "10-Mar-20",
                "SUBMIT_DATE": "10-Dec-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "10-Dec-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "10-Dec-19",
                "CP": "Pending Review",
                "CP_DD": "10-Dec-19",
                "CB": "Pending Review",
                "CB_DD": "10-Dec-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "29-Jan-20",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "1101272-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "659 REST. INC.",
                "BUSINESS_NAME2": "MERCURY BAR",
                "BUILDING": 659,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 126,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 8,
                "DOHMH": 40677553,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 986729),
                lat: this.baseLatLng.lat + (.0000027 * 216488),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "34101-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 126,
                "APP_TABLES": 4,
                "APP_CHAIRS": 8,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "13-Dec-19",
                "EXPIRATION_DATE": "13-Feb-20",
                "APP_TOO_DATE": "13-Feb-20",
                "SUBMIT_DATE": "2-Dec-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "2-Dec-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "3-Dec-19",
                "CP": "Pending Review",
                "CP_DD": "3-Dec-19",
                "CB": "Pending Review",
                "CB_DD": "3-Dec-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "22-Jan-20",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "1104424-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "160 BISTRO INC.",
                "BUSINESS_NAME2": "LE SINGE VERT",
                "BUILDING": 160,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 249,
                "SWC_TABLES": 17,
                "SWC_CHAIRS": 36,
                "DOHMH": 40576554,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 984981),
                lat: this.baseLatLng.lat + (.0000027 * 209681),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "30041-2017-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 249,
                "APP_TABLES": 17,
                "APP_CHAIRS": 36,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "12-Dec-17",
                "EXPIRATION_DATE": "15-Dec-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "12-Dec-17",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "12-Dec-17",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "12-Dec-17",
                "CB": "Review Period Expired",
                "CB_DD": "12-Dec-17",
                "HEARING": "Waived",
                "HEARING_DD": "12-Dec-17",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "12-Dec-17",
                "MOO": "Waived",
                "MOO_DD": "12-Dec-17",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "12-Dec-17"
            },
            {
                "LICENSE_NBR": "1109467-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "505-23 BAR, INC.",
                "BUSINESS_NAME2": "THE HALF KING",
                "BUILDING": 505,
                "STREET": "W 23RD ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 420,
                "SWC_TABLES": 13,
                "SWC_CHAIRS": 50,
                "DOHMH": 40763048,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 983035),
                lat: this.baseLatLng.lat + (.0000027 * 211805),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "5429-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 420,
                "APP_TABLES": 13,
                "APP_CHAIRS": 50,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "24-Oct-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "27-Mar-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "27-Mar-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "29-Mar-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "21-May-18",
                "HEARING": "Waived",
                "HEARING_DD": "24-May-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "14-Jun-18",
                "MOO": "Approved",
                "MOO_DD": "24-Oct-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "24-Oct-18"
            },
            {
                "LICENSE_NBR": "1127935-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "156 SEVENTH AVENUE GROUP LLC",
                "BUSINESS_NAME2": "ELMO",
                "BUILDING": 156,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 270,
                "SWC_TABLES": 12,
                "SWC_CHAIRS": 24,
                "DOHMH": 40872438,
                imgUrl: 'assets/images/tribeca.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 984966),
                lat: this.baseLatLng.lat + (.0000027 * 209607),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "5833-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 270,
                "APP_TABLES": 12,
                "APP_CHAIRS": 24,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "4-Sep-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "30-Mar-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "30-Mar-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "2-Apr-18",
                "CP": "Pending Review",
                "CP_DD": "2-Apr-18",
                "CB": "Review Period Expired",
                "CB_DD": "23-May-18",
                "HEARING": "Waived",
                "HEARING_DD": "24-May-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "14-Jun-18",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "4-Sep-18"
            },
            {
                "LICENSE_NBR": "1141700-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "23RD & 9TH RESTAURANT CORP.",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 368,
                "STREET": "W 23RD ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Enclosed",
                "SWC_SQ_FT": 692,
                "SWC_TABLES": 40,
                "SWC_CHAIRS": 80,
                "DOHMH": 40852659,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 984032),
                lat: this.baseLatLng.lat + (.0000027 * 211141),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "19823-2019-RSWC",
                "APP_SWC_TYPE": "Enclosed",
                "APP_SQ_FT": 692,
                "APP_TABLES": 40,
                "APP_CHAIRS": 80,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "15-May-19",
                "EXPIRATION_DATE": "15-May-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "15-May-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "15-May-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "15-May-19",
                "CB": "Recommend Approval",
                "CB_DD": "15-May-19",
                "HEARING": "Waived",
                "HEARING_DD": "15-May-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Approved",
                "CC_DD": "15-May-19",
                "MOO": "Approved",
                "MOO_DD": "15-May-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "15-May-19"
            },
            {
                "LICENSE_NBR": "1163815-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "PORTICI RESTAURANT INC",
                "BUSINESS_NAME2": "44 SOUTHWEST",
                "BUILDING": 621,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 268,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 19,
                "DOHMH": 40698808,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986489),
                lat: this.baseLatLng.lat + (.0000027 * 216077),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "6378-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 268,
                "APP_TABLES": 8,
                "APP_CHAIRS": 19,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "26-Sep-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "8-Oct-18",
                "SUBMIT_DATE": "10-Apr-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "10-Apr-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "11-Apr-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "31-May-18",
                "HEARING": "Waived",
                "HEARING_DD": "31-May-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "21-Jun-18",
                "MOO": "Approved",
                "MOO_DD": "26-Sep-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "26-Sep-18"
            },
            {
                "LICENSE_NBR": "1165611-DCA",
                "LIC_STATUS": "Inactive",
                "BUSINESS_NAME": "FILLIP'S CATERING, INC.",
                "BUSINESS_NAME2": "CAFE CHAMPIGNON",
                "BUILDING": 200,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 270,
                "SWC_TABLES": 11,
                "SWC_CHAIRS": 22,
                "DOHMH": 40535391,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 985228),
                lat: this.baseLatLng.lat + (.0000027 * 210099),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "6064-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 270,
                "APP_TABLES": 11,
                "APP_CHAIRS": 22,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "5-Apr-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "15-May-18",
                "SUBMIT_DATE": "3-Apr-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "3-Apr-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "4-Apr-18",
                "CB": "Review Period Expired",
                "CB_DD": "4-Apr-18",
                "HEARING": "Waived",
                "HEARING_DD": "4-Apr-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "4-Apr-18",
                "MOO": "Waived",
                "MOO_DD": "4-Apr-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "5-Apr-18"
            },
            {
                "LICENSE_NBR": "1190049-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "HORSESHOES NY INC.",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 611,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 91,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 8,
                "DOHMH": 41066768,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986431),
                lat: this.baseLatLng.lat + (.0000027 * 215968),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "26094-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 91,
                "APP_TABLES": 4,
                "APP_CHAIRS": 8,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "22-Oct-19",
                "EXPIRATION_DATE": "22-Jan-20",
                "APP_TOO_DATE": "22-Jan-20",
                "SUBMIT_DATE": "29-Aug-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "29-Aug-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "30-Aug-19",
                "CP": "Pending Review",
                "CP_DD": "30-Aug-19",
                "CB": "Review Period Expired",
                "CB_DD": "25-Oct-19",
                "HEARING": "Waived",
                "HEARING_DD": "25-Oct-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "15-Nov-19",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "1193339-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "EISEN & SON, INC.",
                "BUSINESS_NAME2": "LASAGNA RESTAURANT",
                "BUILDING": 196,
                "STREET": "8TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 253,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 25,
                "DOHMH": 41079528,
                imgUrl: 'assets/images/tribeca.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 984308),
                lat: this.baseLatLng.lat + (.0000027 * 210054),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "28585-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 253,
                "APP_TABLES": 8,
                "APP_CHAIRS": 25,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "16-Oct-19",
                "EXPIRATION_DATE": "31-Dec-19",
                "APP_TOO_DATE": "31-Dec-19",
                "SUBMIT_DATE": "3-Oct-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "3-Oct-19",
                "DPQA": "Under Review",
                "SEND_PACKAGE_DD": "16-Oct-19",
                "CP": "Pending Review",
                "CP_DD": "16-Oct-19",
                "CB": "Review Period Expired",
                "CB_DD": "27-Nov-19",
                "HEARING": "Waived",
                "HEARING_DD": "27-Nov-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Pending Review",
                "CC_DD": "27-Nov-19",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "1206030-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "ARRIBA ARRIBA MEXICAN RESTAURANTS, INC.",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 762,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 285,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 14,
                "DOHMH": 40380458,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 987501),
                lat: this.baseLatLng.lat + (.0000027 * 217652),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "35126-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 285,
                "APP_TABLES": 8,
                "APP_CHAIRS": 14,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "12-Dec-19",
                "EXPIRATION_DATE": "11-Mar-20",
                "APP_TOO_DATE": "11-Mar-20",
                "SUBMIT_DATE": "11-Dec-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "11-Dec-19",
                "DPQA": "Under Review",
                "SEND_PACKAGE_DD": "12-Dec-19",
                "CP": "Pending Review",
                "CP_DD": "12-Dec-19",
                "CB": "Pending Review",
                "CB_DD": "12-Dec-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "29-Jan-20",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "1224204-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "156 TENTH AVENUE RESTAURANT LLC",
                "BUSINESS_NAME2": "10TH AVENUE COOKSHOP",
                "BUILDING": 156,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 506,
                "SWC_TABLES": 22,
                "SWC_CHAIRS": 44,
                "DOHMH": 41092609,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 982725),
                lat: this.baseLatLng.lat + (.0000027 * 210877),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "32978-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 506,
                "APP_TABLES": 22,
                "APP_CHAIRS": 44,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "8-Apr-19",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "22-Jun-19",
                "SUBMIT_DATE": "20-Dec-18",
                "INTAKE": "Issued Temp Op Letter",
                "INTAKE_DD": "20-Dec-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "21-Dec-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "13-Feb-19",
                "HEARING": "Waived",
                "HEARING_DD": "13-Feb-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "6-Mar-19",
                "MOO": "Approved",
                "MOO_DD": "8-Apr-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "8-Apr-19"
            },
            {
                "LICENSE_NBR": "1248301-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "PONENTE LLC",
                "BUSINESS_NAME2": "NIZZA",
                "BUILDING": 628,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 249,
                "SWC_TABLES": 10,
                "SWC_CHAIRS": 20,
                "DOHMH": 41235443,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 986653),
                lat: this.baseLatLng.lat + (.0000027 * 216134),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "16369-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 249,
                "APP_TABLES": 10,
                "APP_CHAIRS": 20,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "5-Aug-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "24-Sep-19",
                "SUBMIT_DATE": "1-Apr-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "1-Apr-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "2-Apr-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "21-May-19",
                "HEARING": "Waived",
                "HEARING_DD": "21-May-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "11-Jun-19",
                "MOO": "Approved",
                "MOO_DD": "5-Aug-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "5-Aug-19"
            },
            {
                "LICENSE_NBR": "1249100-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "P & A 665 RESTAURANT CORP.",
                "BUSINESS_NAME2": "GALAXY DINER",
                "BUILDING": 665,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 364,
                "SWC_TABLES": 13,
                "SWC_CHAIRS": 38,
                "DOHMH": 41151163,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 986795),
                lat: this.baseLatLng.lat + (.0000027 * 216612),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "401-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 364,
                "APP_TABLES": 13,
                "APP_CHAIRS": 38,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "1-May-18",
                "EXPIRATION_DATE": "15-Dec-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "16-Jan-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "16-Jan-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "1-May-18",
                "CB": "Review Period Expired",
                "CB_DD": "1-May-18",
                "HEARING": "Waived",
                "HEARING_DD": "1-May-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "1-May-18",
                "MOO": "Waived",
                "MOO_DD": "1-May-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "1-May-18"
            },
            {
                "LICENSE_NBR": "1251800-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "PQ CHELSEA, INC.",
                "BUSINESS_NAME2": "LE PAIN QUOTIDIEN",
                "BUILDING": 124,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 198,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 41219538,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 984736),
                lat: this.baseLatLng.lat + (.0000027 * 209202),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "31098-2017-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 198,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "2-Jan-18",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "26-Dec-17",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "26-Dec-17",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "2-Jan-18"
            },
            {
                "LICENSE_NBR": "1253585-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "TABOON RESTAURANT CORP.",
                "BUSINESS_NAME2": "TABOON",
                "BUILDING": 773,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 196,
                "SWC_TABLES": 11,
                "SWC_CHAIRS": 22,
                "DOHMH": 40995538,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986773),
                lat: this.baseLatLng.lat + (.0000027 * 218439),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "17073-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 196,
                "APP_TABLES": 11,
                "APP_CHAIRS": 22,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "19-Nov-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "5-Apr-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "9-Apr-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "9-Apr-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "30-May-19",
                "HEARING": "Waived",
                "HEARING_DD": "30-May-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "20-Jun-19",
                "MOO": "Approved",
                "MOO_DD": "19-Nov-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "19-Nov-19"
            },
            {
                "LICENSE_NBR": "1254413-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "SCENIC ROUTE 66 CAFE INC.",
                "BUSINESS_NAME2": "ROUTE 66 CAFE",
                "BUILDING": 858,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 115,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 8,
                "DOHMH": 41248529,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 988067),
                lat: this.baseLatLng.lat + (.0000027 * 218683),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "13983-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 115,
                "APP_TABLES": 4,
                "APP_CHAIRS": 8,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "3-Jul-19",
                "EXPIRATION_DATE": "15-Sep-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "18-Sep-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "18-Sep-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "19-Sep-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "14-Nov-18",
                "HEARING": "Waived",
                "HEARING_DD": "14-Nov-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "5-Dec-18",
                "MOO": "Approved",
                "MOO_DD": "3-Jul-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "3-Jul-19"
            },
            {
                "LICENSE_NBR": "1277876-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "LA SCALA RESTAURANT, LLC",
                "BUSINESS_NAME2": "FIVE NAPKIN BURGER",
                "BUILDING": 630,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 455,
                "SWC_TABLES": 11,
                "SWC_CHAIRS": 34,
                "DOHMH": 41313398,
                imgUrl: 'assets/images/b-cafe.png',
                lng: this.baseLatLng.lng + (.00000358 * 986658),
                lat: this.baseLatLng.lat + (.0000027 * 216134),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "13038-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 455,
                "APP_TABLES": 11,
                "APP_CHAIRS": 34,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "22-Mar-19",
                "EXPIRATION_DATE": "15-Sep-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "14-Sep-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "14-Sep-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "14-Sep-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "14-Nov-18",
                "HEARING": "Waived",
                "HEARING_DD": "14-Nov-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "5-Dec-18",
                "MOO": "Approved",
                "MOO_DD": "22-Mar-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "22-Mar-19"
            },
            {
                "LICENSE_NBR": "1283822-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "THOMPSON REST. INC.",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 358,
                "STREET": "W 44TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 235,
                "SWC_TABLES": 12,
                "SWC_CHAIRS": 25,
                "DOHMH": 41331752,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 986755),
                lat: this.baseLatLng.lat + (.0000027 * 215978),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "28506-2017-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 235,
                "APP_TABLES": 12,
                "APP_CHAIRS": 25,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "4-Dec-17",
                "EXPIRATION_DATE": "15-Dec-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "27-Nov-17",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "27-Nov-17",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "4-Dec-17"
            },
            {
                "LICENSE_NBR": "1289268-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "PROGETTO, INC.",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 352,
                "STREET": "W 44TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 106,
                "SWC_TABLES": 5,
                "SWC_CHAIRS": 10,
                "DOHMH": 41076408,
                imgUrl: 'assets/images/tribeca.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986815),
                lat: this.baseLatLng.lat + (.0000027 * 215895),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "32944-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 106,
                "APP_TABLES": 5,
                "APP_CHAIRS": 10,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "20-Jun-19",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "20-Dec-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "20-Dec-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "20-Dec-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "13-Feb-19",
                "HEARING": "Waived",
                "HEARING_DD": "13-Feb-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "6-Mar-19",
                "MOO": "Approved",
                "MOO_DD": "20-Jun-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "20-Jun-19"
            },
            {
                "LICENSE_NBR": "1299629-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "GREEK KITCHEN INC.",
                "BUSINESS_NAME2": "THE GREEK KITCHEN",
                "BUILDING": 885,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Enclosed",
                "SWC_SQ_FT": 447,
                "SWC_TABLES": 13,
                "SWC_CHAIRS": 26,
                "DOHMH": 40734589,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 987474),
                lat: this.baseLatLng.lat + (.0000027 * 219719),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 6,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "10179-2018-RSWC",
                "APP_SWC_TYPE": "Enclosed",
                "APP_SQ_FT": 447,
                "APP_TABLES": 13,
                "APP_CHAIRS": 26,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "31-Jul-19",
                "EXPIRATION_DATE": "31-Jan-20",
                "APP_TOO_DATE": "31-Jan-20",
                "SUBMIT_DATE": "10-Jul-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "10-Jul-18",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "11-Jul-18",
                "CP": "Pending Review",
                "CP_DD": "11-Jul-18",
                "CB": "Pending Review",
                "CB_DD": "11-Jul-18",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "1309603-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "CHOW DOWN, INC.",
                "BUSINESS_NAME2": "EL CENTRO",
                "BUILDING": 824,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 275,
                "SWC_TABLES": 11,
                "SWC_CHAIRS": 22,
                "DOHMH": 40698538,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 987888),
                lat: this.baseLatLng.lat + (.0000027 * 218337),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "25449-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 275,
                "APP_TABLES": 11,
                "APP_CHAIRS": 22,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "10-Dec-19",
                "EXPIRATION_DATE": "31-Dec-19",
                "APP_TOO_DATE": "31-Dec-19",
                "SUBMIT_DATE": "6-Aug-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "6-Aug-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "6-Aug-19",
                "CP": "Pending Review",
                "CP_DD": "6-Aug-19",
                "CB": "Pending Review",
                "CB_DD": "6-Aug-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "25-Sep-19",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "1310240-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "401 W 50 TAVERN INC.",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 401,
                "STREET": "W 50TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Small Unenclosed",
                "SWC_SQ_FT": 108,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 12,
                "DOHMH": 41347048,
                imgUrl: 'assets/images/b-cafe.png',
                lng: this.baseLatLng.lng + (.00000358 * 987220),
                lat: this.baseLatLng.lat + (.0000027 * 217519),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "33314-2019-RSWC",
                "APP_SWC_TYPE": "Small Unenclosed",
                "APP_SQ_FT": 108,
                "APP_TABLES": 6,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "26-Nov-19",
                "EXPIRATION_DATE": "22-Feb-20",
                "APP_TOO_DATE": "22-Feb-20",
                "SUBMIT_DATE": "22-Nov-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "22-Nov-19",
                "DPQA": "Under Review",
                "SEND_PACKAGE_DD": "26-Nov-19",
                "CP": "Pending Review",
                "CP_DD": "26-Nov-19",
                "CB": "Pending Review",
                "CB_DD": "26-Nov-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "15-Jan-20",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "1338890-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "TUTTO BENE RESTAURANT INC.",
                "BUSINESS_NAME2": "CHELSEA RISTORANTE ITALIANO",
                "BUILDING": 108,
                "STREET": "8TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 126,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 12,
                "DOHMH": 40512520,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 983790),
                lat: this.baseLatLng.lat + (.0000027 * 209109),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "764-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 126,
                "APP_TABLES": 6,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "18-Jan-18",
                "EXPIRATION_DATE": "15-Dec-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "18-Jan-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "18-Jan-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "18-Jan-18"
            },
            {
                "LICENSE_NBR": "1345747-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "MR BIGGS BAR & GRILL, INC",
                "BUSINESS_NAME2": "MR. BIGGS BAR & GRILL",
                "BUILDING": 596,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 472,
                "SWC_TABLES": 17,
                "SWC_CHAIRS": 36,
                "DOHMH": 41455044,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 985704),
                lat: this.baseLatLng.lat + (.0000027 * 216263),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "7053-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 472,
                "APP_TABLES": 17,
                "APP_CHAIRS": 36,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "8-Feb-19",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "20-Apr-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "20-Apr-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "20-Apr-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "8-Jun-18",
                "HEARING": "Waived",
                "HEARING_DD": "8-Jun-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "29-Jun-18",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "8-Feb-19"
            },
            {
                "LICENSE_NBR": "1346238-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "HURRICANE STRAUSS, INC.",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 246,
                "STREET": "W 18TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 92,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 12,
                "DOHMH": 41458571,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 984347),
                lat: this.baseLatLng.lat + (.0000027 * 209517),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "28614-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 92,
                "APP_TABLES": 6,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "11-Apr-19",
                "EXPIRATION_DATE": "15-Dec-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "20-Nov-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "20-Nov-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "20-Nov-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "10-Jan-19",
                "HEARING": "Waived",
                "HEARING_DD": "10-Jan-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "31-Jan-19",
                "MOO": "Approved",
                "MOO_DD": "11-Apr-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "11-Apr-19"
            },
            {
                "LICENSE_NBR": "1346488-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "300 WEST 46TH STREET, CORP",
                "BUSINESS_NAME2": "BRASSERIE ATHENEE",
                "BUILDING": 300,
                "STREET": "W 46TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 105,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 9,
                "DOHMH": 40810174,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 987470),
                lat: this.baseLatLng.lat + (.0000027 * 216077),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "2337-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 105,
                "APP_TABLES": 4,
                "APP_CHAIRS": 9,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "3-Jul-19",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "16-Jan-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "16-Jan-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "16-Jan-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "28-Feb-19",
                "HEARING": "Waived",
                "HEARING_DD": "28-Feb-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "21-Mar-19",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "3-Jul-19"
            },
            {
                "LICENSE_NBR": "1347356-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "O'FLYNN ENTERPRISES LLC",
                "BUSINESS_NAME2": "LE GRAINNE CAFE",
                "BUILDING": 183,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 122,
                "SWC_TABLES": 3,
                "SWC_CHAIRS": 12,
                "DOHMH": 41095548,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 983614),
                lat: this.baseLatLng.lat + (.0000027 * 210859),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "14561-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 122,
                "APP_TABLES": 3,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "28-Mar-19",
                "EXPIRATION_DATE": "15-Sep-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "21-Sep-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "21-Sep-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "21-Sep-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "14-Nov-18",
                "HEARING": "Waived",
                "HEARING_DD": "14-Nov-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "5-Dec-18",
                "MOO": "Approved",
                "MOO_DD": "28-Mar-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "28-Mar-19"
            },
            {
                "LICENSE_NBR": "1347910-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "LEITRIM PUB INC.",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 351,
                "STREET": "W 57TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 136,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 18,
                "DOHMH": 30191841,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 988528),
                lat: this.baseLatLng.lat + (.0000027 * 219018),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "32075-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 136,
                "APP_TABLES": 8,
                "APP_CHAIRS": 18,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "9-Jul-19",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "14-Dec-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "14-Dec-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "14-Dec-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "13-Mar-19",
                "HEARING": "Waived",
                "HEARING_DD": "13-Mar-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "3-Apr-19",
                "MOO": "Approved",
                "MOO_DD": "9-Jul-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "9-Jul-19"
            },
            {
                "LICENSE_NBR": "1415773-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "MS RESTAURANT OWNERS LLC",
                "BUSINESS_NAME2": "MORNING STAR RESTAURANT",
                "BUILDING": 879,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Enclosed",
                "SWC_SQ_FT": 191,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 24,
                "DOHMH": 41634004,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 988207),
                lat: this.baseLatLng.lat + (.0000027 * 219170),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "19338-2019-RSWC",
                "APP_SWC_TYPE": "Enclosed",
                "APP_SQ_FT": 191,
                "APP_TABLES": 8,
                "APP_CHAIRS": 24,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "6-Jun-19",
                "EXPIRATION_DATE": "31-Dec-19",
                "APP_TOO_DATE": "31-Dec-19",
                "SUBMIT_DATE": "8-May-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "8-May-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "9-May-19",
                "CP": "Pending Review",
                "CP_DD": "9-May-19",
                "CB": "Pending Review",
                "CB_DD": "9-May-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "1415822-DCA",
                "LIC_STATUS": "Inactive",
                "BUSINESS_NAME": "SHNY RESTAURANT GROUP, LLC",
                "BUSINESS_NAME2": "SOUTHERN HOSPITALITY",
                "BUILDING": 645,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 102,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 8,
                "DOHMH": 41562538,
                imgUrl: 'assets/images/tribeca.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986669),
                lat: this.baseLatLng.lat + (.0000027 * 216380),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "2479-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 102,
                "APP_TABLES": 4,
                "APP_CHAIRS": 8,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "1-Mar-18",
                "EXPIRATION_DATE": "15-Dec-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "6-Feb-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "7-Feb-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "1-Mar-18",
                "CB": "Review Period Expired",
                "CB_DD": "1-Mar-18",
                "HEARING": "Waived",
                "HEARING_DD": "1-Mar-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Approved",
                "CC_DD": "1-Mar-18",
                "MOO": "Approved",
                "MOO_DD": "1-Mar-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "1-Mar-18"
            },
            {
                "LICENSE_NBR": "1419380-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "ANEJO, LLC",
                "BUSINESS_NAME2": "ANEJO TEQUILERIA",
                "BUILDING": 668,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 335,
                "SWC_TABLES": 20,
                "SWC_CHAIRS": 40,
                "DOHMH": 41619698,
                imgUrl: 'assets/images/tribeca.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986170),
                lat: this.baseLatLng.lat + (.0000027 * 217104),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "24206-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 335,
                "APP_TABLES": 20,
                "APP_CHAIRS": 40,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "25-Mar-19",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "29-Oct-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "4-Dec-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "4-Dec-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "24-Jan-19",
                "HEARING": "Waived",
                "HEARING_DD": "24-Jan-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Approved",
                "CC_DD": "25-Mar-19",
                "MOO": "Approved",
                "MOO_DD": "25-Mar-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "25-Mar-19"
            },
            {
                "LICENSE_NBR": "1421245-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "AURA LLC",
                "BUSINESS_NAME2": "MICKEY SPILLANE'S KITCHEN",
                "BUILDING": 350,
                "STREET": "W 49TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 209,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 21,
                "DOHMH": 41647682,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 987411),
                lat: this.baseLatLng.lat + (.0000027 * 217124),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "6860-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 209,
                "APP_TABLES": 8,
                "APP_CHAIRS": 21,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "16-Oct-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "18-Apr-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "18-Apr-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "18-Apr-18",
                "CP": "Pending Review",
                "CP_DD": "18-Apr-18",
                "CB": "Review Period Expired",
                "CB_DD": "8-Jun-18",
                "HEARING": "Waived",
                "HEARING_DD": "8-Jun-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "29-Jun-18",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "16-Oct-18"
            },
            {
                "LICENSE_NBR": "1424351-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "667 TENTH AVENUE CORP",
                "BUSINESS_NAME2": "DBL",
                "BUILDING": 667,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 292,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 29,
                "DOHMH": 41655188,
                imgUrl: 'assets/images/b-cafe.png',
                lng: this.baseLatLng.lng + (.00000358 * 986069),
                lat: this.baseLatLng.lat + (.0000027 * 217193),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "6810-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 292,
                "APP_TABLES": 8,
                "APP_CHAIRS": 29,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "1-Nov-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "17-Apr-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "17-Apr-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "18-Apr-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "8-Jun-18",
                "HEARING": "Waived",
                "HEARING_DD": "8-Jun-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "29-Jun-18",
                "MOO": "Approved",
                "MOO_DD": "1-Nov-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "1-Nov-18"
            },
            {
                "LICENSE_NBR": "1434425-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "LANA RESTAURANT LLC",
                "BUSINESS_NAME2": "AMARONE RESTAURANT",
                "BUILDING": 686,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 179,
                "SWC_TABLES": 7,
                "SWC_CHAIRS": 14,
                "DOHMH": 41644988,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 987011),
                lat: this.baseLatLng.lat + (.0000027 * 216779),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "4948-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 179,
                "APP_TABLES": 7,
                "APP_CHAIRS": 14,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "20-Mar-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "20-Mar-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "20-Mar-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "20-Mar-18",
                "CB": "Review Period Expired",
                "CB_DD": "20-Mar-18",
                "HEARING": "Waived",
                "HEARING_DD": "20-Mar-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Approved",
                "CC_DD": "20-Mar-18",
                "MOO": "Approved",
                "MOO_DD": "20-Mar-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "20-Mar-18"
            },
            {
                "LICENSE_NBR": "1435075-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "STOKES & MCGINLEY INC",
                "BUSINESS_NAME2": "ALFIE'S",
                "BUILDING": 800,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 140,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 41671103,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 987749),
                lat: this.baseLatLng.lat + (.0000027 * 218113),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "30479-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 140,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "5-Apr-19",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "4-Dec-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "4-Dec-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "5-Dec-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "24-Jan-19",
                "HEARING": "Waived",
                "HEARING_DD": "24-Jan-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "14-Feb-19",
                "MOO": "Approved",
                "MOO_DD": "5-Apr-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "5-Apr-19"
            },
            {
                "LICENSE_NBR": "1457455-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "MEDI WINEBAR, LLC",
                "BUSINESS_NAME2": "MEDI WINEBAR LLC",
                "BUILDING": 811,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 135,
                "SWC_TABLES": 3,
                "SWC_CHAIRS": 12,
                "DOHMH": 41540998,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 987735),
                lat: this.baseLatLng.lat + (.0000027 * 218339),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "15747-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 135,
                "APP_TABLES": 3,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "8-Jul-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "27-Mar-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "27-Mar-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "27-Mar-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "16-May-19",
                "HEARING": "Waived",
                "HEARING_DD": "16-May-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "6-Jun-19",
                "MOO": "Approved",
                "MOO_DD": "8-Jul-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "8-Jul-19"
            },
            {
                "LICENSE_NBR": "1462267-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "SPEAK INTEGRATED CORP.",
                "BUSINESS_NAME2": "BOCCA DI BACCO",
                "BUILDING": 167,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 232,
                "SWC_TABLES": 10,
                "SWC_CHAIRS": 21,
                "DOHMH": 41666383,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 983440),
                lat: this.baseLatLng.lat + (.0000027 * 210563),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "19070-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 232,
                "APP_TABLES": 10,
                "APP_CHAIRS": 21,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "18-Sep-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "1-May-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "1-May-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "2-May-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "19-Jun-19",
                "HEARING": "Waived",
                "HEARING_DD": "19-Jun-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "10-Jul-19",
                "MOO": "Approved",
                "MOO_DD": "18-Sep-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "18-Sep-19"
            },
            {
                "LICENSE_NBR": "1464672-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "PIO PIO OCHO INC.",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 604,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 181,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 41624530,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 985757),
                lat: this.baseLatLng.lat + (.0000027 * 216388),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "6979-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 181,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "7-Feb-19",
                "EXPIRATION_DATE": "15-Dec-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "7-Feb-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "7-Feb-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "7-Feb-19"
            },
            {
                "LICENSE_NBR": "1468273-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "DE ARMAS ENTERPRISES CORP.",
                "BUSINESS_NAME2": "COPPELIA",
                "BUILDING": 207,
                "STREET": "W 14TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Small Unenclosed",
                "SWC_SQ_FT": 132,
                "SWC_TABLES": 2,
                "SWC_CHAIRS": 8,
                "DOHMH": 41577301,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 984225),
                lat: this.baseLatLng.lat + (.0000027 * 208501),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "26571-2019-RSWC",
                "APP_SWC_TYPE": "Small Unenclosed",
                "APP_SQ_FT": 132,
                "APP_TABLES": 2,
                "APP_CHAIRS": 8,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "22-Nov-19",
                "EXPIRATION_DATE": "22-Feb-20",
                "APP_TOO_DATE": "22-Feb-20",
                "SUBMIT_DATE": "13-Sep-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "13-Sep-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "16-Sep-19",
                "CP": "Pending Review",
                "CP_DD": "16-Sep-19",
                "CB": "Review Period Expired",
                "CB_DD": "7-Nov-19",
                "HEARING": "Waived",
                "HEARING_DD": "7-Nov-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "28-Nov-19",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "1470945-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "THREE TOP CHELSEA, LLC",
                "BUSINESS_NAME2": "THE COMMONS CHELSEA",
                "BUILDING": 128,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 110,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 8,
                "DOHMH": 41620241,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 984761),
                lat: this.baseLatLng.lat + (.0000027 * 209250),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "15965-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 110,
                "APP_TABLES": 4,
                "APP_CHAIRS": 8,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "8-Aug-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "28-Mar-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "28-Mar-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "29-Mar-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "16-May-19",
                "HEARING": "Waived",
                "HEARING_DD": "16-May-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "6-Jun-19",
                "MOO": "Approved",
                "MOO_DD": "8-Aug-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "8-Aug-19"
            },
            {
                "LICENSE_NBR": "1471547-DCA",
                "LIC_STATUS": "Inactive",
                "BUSINESS_NAME": "PRET A MANGER (USA) LIMITED",
                "BUSINESS_NAME2": "PRET A MANGER",
                "BUILDING": 655,
                "STREET": "AVENUE OF THE AMERICAS",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10010,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 165,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 8,
                "DOHMH": 50034178,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 985850),
                lat: this.baseLatLng.lat + (.0000027 * 209366),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "18087-2017-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 165,
                "APP_TABLES": 4,
                "APP_CHAIRS": 8,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "24-Oct-17",
                "EXPIRATION_DATE": "15-Apr-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "17-May-17",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "17-May-17",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "24-Oct-17",
                "CB": "Recommend Approval",
                "CB_DD": "24-Oct-17",
                "HEARING": "Waived",
                "HEARING_DD": "24-Oct-17",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Approved",
                "CC_DD": "24-Oct-17",
                "MOO": "Approved",
                "MOO_DD": "24-Oct-17",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "24-Oct-17"
            },
            {
                "LICENSE_NBR": "1474102-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "ZAGARA RESTAURANTS, LLC",
                "BUSINESS_NAME2": "ZAGARA WINE BAR",
                "BUILDING": 216,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 126,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 50002438,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 985336),
                lat: this.baseLatLng.lat + (.0000027 * 210268),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "1173-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 126,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "18-May-19",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "9-Jan-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "9-Jan-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "9-Jan-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "28-Feb-19",
                "HEARING": "Waived",
                "HEARING_DD": "28-Feb-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "21-Mar-19",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "18-May-19"
            },
            {
                "LICENSE_NBR": "2006616-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "7 WASHINGTON LANE CORP",
                "BUSINESS_NAME2": "ARIA HELLS' KITCHEN",
                "BUILDING": 369,
                "STREET": "W 51ST ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 144,
                "SWC_TABLES": 7,
                "SWC_CHAIRS": 14,
                "DOHMH": 50005408,
                imgUrl: 'assets/images/b-cafe.png',
                lng: this.baseLatLng.lng + (.00000358 * 987580),
                lat: this.baseLatLng.lat + (.0000027 * 217652),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "11285-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 144,
                "APP_TABLES": 7,
                "APP_CHAIRS": 14,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "17-Aug-18",
                "EXPIRATION_DATE": "15-Sep-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "17-Aug-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "17-Aug-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "17-Aug-18",
                "CB": "Review Period Expired",
                "CB_DD": "17-Aug-18",
                "HEARING": "Waived",
                "HEARING_DD": "17-Aug-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "17-Aug-18",
                "MOO": "Waived",
                "MOO_DD": "17-Aug-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "17-Aug-18"
            },
            {
                "LICENSE_NBR": "2006951-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "HIGHLANDERS 756, INC",
                "BUSINESS_NAME2": "VYNL",
                "BUILDING": 756,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 104,
                "SWC_TABLES": 9,
                "SWC_CHAIRS": 18,
                "DOHMH": 50006228,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 987452),
                lat: this.baseLatLng.lat + (.0000027 * 217581),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "6213-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 104,
                "APP_TABLES": 9,
                "APP_CHAIRS": 18,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "9-May-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "6-Apr-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "6-Apr-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "9-May-18",
                "CB": "Review Period Expired",
                "CB_DD": "9-May-18",
                "HEARING": "Waived",
                "HEARING_DD": "9-May-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "9-May-18",
                "MOO": "Waived",
                "MOO_DD": "9-May-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "9-May-18"
            },
            {
                "LICENSE_NBR": "2007979-DCA",
                "LIC_STATUS": "Inactive",
                "BUSINESS_NAME": "658 THAI CORP.",
                "BUSINESS_NAME2": "YUM YUM BANGKOK 3",
                "BUILDING": 658,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 219,
                "SWC_TABLES": 7,
                "SWC_CHAIRS": 14,
                "DOHMH": 50007871,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 986820),
                lat: this.baseLatLng.lat + (.0000027 * 216451),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "26146-2017-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 219,
                "APP_TABLES": 7,
                "APP_CHAIRS": 14,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "31-Aug-17",
                "EXPIRATION_DATE": "15-Sep-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "31-Aug-17",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "31-Aug-17",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "31-Aug-17",
                "CB": "Review Period Expired",
                "CB_DD": "31-Aug-17",
                "HEARING": "Waived",
                "HEARING_DD": "31-Aug-17",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "31-Aug-17",
                "MOO": "Approved",
                "MOO_DD": "31-Aug-17",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "31-Aug-17"
            },
            {
                "LICENSE_NBR": "2009401-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "DAILY ROADSIDE LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 600,
                "STREET": "11TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 450,
                "SWC_TABLES": 12,
                "SWC_CHAIRS": 40,
                "DOHMH": 50002198,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 985047),
                lat: this.baseLatLng.lat + (.0000027 * 217061),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "8392-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 450,
                "APP_TABLES": 12,
                "APP_CHAIRS": 40,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "13-Jun-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "14-May-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "14-May-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Pending Review",
                "CP_DD": "",
                "CB": "Pending Review",
                "CB_DD": "",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "13-Jun-18"
            },
            {
                "LICENSE_NBR": "2009821-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "407 WEST 42ND STREET CORPORATION",
                "BUSINESS_NAME2": "WESTBANK CAFE",
                "BUILDING": 407,
                "STREET": "W 42ND ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 178,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 40371454,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986072),
                lat: this.baseLatLng.lat + (.0000027 * 215943),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "6044-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 178,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "3-Apr-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "3-Apr-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "3-Apr-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Pending Review",
                "CP_DD": "3-Apr-18",
                "CB": "Pending Review",
                "CB_DD": "",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "3-Apr-18"
            },
            {
                "LICENSE_NBR": "2010827-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "WMW RESTAURANT GROUP, LLC",
                "BUSINESS_NAME2": "THE MARSHALL",
                "BUILDING": 628,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 100,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 8,
                "DOHMH": 50002768,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 985884),
                lat: this.baseLatLng.lat + (.0000027 * 216609),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "6793-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 100,
                "APP_TABLES": 4,
                "APP_CHAIRS": 8,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "17-Apr-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "17-May-18",
                "SUBMIT_DATE": "17-Apr-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "17-Apr-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "17-Apr-18"
            },
            {
                "LICENSE_NBR": "2018723-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "MORNINGSIDE TERRACE CORP",
                "BUSINESS_NAME2": "K. RICO",
                "BUILDING": 772,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 105,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 12,
                "DOHMH": 50013879,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 987550),
                lat: this.baseLatLng.lat + (.0000027 * 217741),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "25708-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 105,
                "APP_TABLES": 6,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "13-Aug-19",
                "EXPIRATION_DATE": "15-Sep-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "13-Aug-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "13-Aug-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "13-Aug-19",
                "CB": "Review Period Expired",
                "CB_DD": "13-Aug-19",
                "HEARING": "Waived",
                "HEARING_DD": "13-Aug-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Approved",
                "CC_DD": "13-Aug-19",
                "MOO": "Approved",
                "MOO_DD": "13-Aug-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "13-Aug-19"
            },
            {
                "LICENSE_NBR": "2022878-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "EL ORIGINAL NYC, LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 735,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 259,
                "SWC_TABLES": 12,
                "SWC_CHAIRS": 24,
                "DOHMH": 50033364,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986408),
                lat: this.baseLatLng.lat + (.0000027 * 217835),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "33887-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 259,
                "APP_TABLES": 12,
                "APP_CHAIRS": 24,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "4-Jan-19",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "27-Jan-19",
                "SUBMIT_DATE": "27-Dec-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "27-Dec-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "4-Jan-19",
                "CB": "Review Period Expired",
                "CB_DD": "4-Jan-19",
                "HEARING": "Waived",
                "HEARING_DD": "4-Jan-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Approved",
                "CC_DD": "4-Jan-19",
                "MOO": "Approved",
                "MOO_DD": "4-Jan-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "4-Jan-19"
            },
            {
                "LICENSE_NBR": "2023074-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "WEST 17TH STREET ITALIAN RESTAURANT LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 114,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 249,
                "SWC_TABLES": 11,
                "SWC_CHAIRS": 25,
                "DOHMH": 41493180,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 982424),
                lat: this.baseLatLng.lat + (.0000027 * 210343),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "263-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 249,
                "APP_TABLES": 11,
                "APP_CHAIRS": 25,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "21-May-18",
                "EXPIRATION_DATE": "15-Dec-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "11-Jan-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "11-Jan-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "16-Jan-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "8-Mar-18",
                "HEARING": "Waived",
                "HEARING_DD": "15-Mar-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "5-Apr-18",
                "MOO": "Approved",
                "MOO_DD": "21-May-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "21-May-18"
            },
            {
                "LICENSE_NBR": "2023885-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "WESTWAY DINER INC",
                "BUSINESS_NAME2": "WEST WAY DINER",
                "BUILDING": 614,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 211,
                "SWC_TABLES": 18,
                "SWC_CHAIRS": 36,
                "DOHMH": 40387861,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 986552),
                lat: this.baseLatLng.lat + (.0000027 * 215941),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "17297-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 211,
                "APP_TABLES": 18,
                "APP_CHAIRS": 36,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "10-Apr-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "9-Apr-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "9-Apr-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "10-Apr-19",
                "CB": "Recommend Approval",
                "CB_DD": "10-Apr-19",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "10-Apr-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "Approved",
                "MOO_DD": "10-Apr-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "10-Apr-19"
            },
            {
                "LICENSE_NBR": "2023941-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "WEST SIDE STEAKHOUSE, LLC",
                "BUSINESS_NAME2": "West Side Steakhouse",
                "BUILDING": 597,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 148,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 12,
                "DOHMH": 41491958,
                imgUrl: 'assets/images/b-cafe.png',
                lng: this.baseLatLng.lng + (.00000358 * 985625),
                lat: this.baseLatLng.lat + (.0000027 * 216391),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "11292-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 148,
                "APP_TABLES": 4,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "27-Feb-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "25-Feb-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "25-Feb-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Pending Review",
                "CP_DD": "25-Feb-19",
                "CB": "Pending Review",
                "CB_DD": "",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "27-Feb-19"
            },
            {
                "LICENSE_NBR": "2024515-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "003 VENUS TACOS LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 705,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 124,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 12,
                "DOHMH": 50035651,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 987056),
                lat: this.baseLatLng.lat + (.0000027 * 217108),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "18014-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 124,
                "APP_TABLES": 6,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "17-Apr-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "17-Apr-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "17-Apr-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "17-Apr-19",
                "CB": "Review Period Expired",
                "CB_DD": "17-Apr-19",
                "HEARING": "Waived",
                "HEARING_DD": "17-Apr-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "17-Apr-19",
                "MOO": "Waived",
                "MOO_DD": "17-Apr-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "17-Apr-19"
            },
            {
                "LICENSE_NBR": "2026132-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "701 RESTAURANT LLC",
                "BUSINESS_NAME2": "Mom's",
                "BUILDING": 701,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 170,
                "SWC_TABLES": 5,
                "SWC_CHAIRS": 10,
                "DOHMH": 50010991,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 987034),
                lat: this.baseLatLng.lat + (.0000027 * 217063),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "29341-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 170,
                "APP_TABLES": 5,
                "APP_CHAIRS": 10,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "23-Oct-19",
                "EXPIRATION_DATE": "15-Dec-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "19-Oct-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "23-Oct-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "23-Oct-19",
                "CB": "Review Period Expired",
                "CB_DD": "23-Oct-19",
                "HEARING": "Waived",
                "HEARING_DD": "23-Oct-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Approved",
                "CC_DD": "23-Oct-19",
                "MOO": "Approved",
                "MOO_DD": "23-Oct-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "23-Oct-19"
            },
            {
                "LICENSE_NBR": "2027036-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "FONDA OF CHELSEA LLC",
                "BUSINESS_NAME2": "FONDA CHELSEA",
                "BUILDING": 189,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 86,
                "SWC_TABLES": 3,
                "SWC_CHAIRS": 6,
                "DOHMH": 50010298,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 983645),
                lat: this.baseLatLng.lat + (.0000027 * 210905),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "27943-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 86,
                "APP_TABLES": 3,
                "APP_CHAIRS": 6,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "26-Sep-19",
                "EXPIRATION_DATE": "15-Sep-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "26-Sep-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "26-Sep-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "",
                "CP": "Proceed",
                "CP_DD": "26-Sep-19",
                "CB": "Recommend Approval",
                "CB_DD": "26-Sep-19",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "26-Sep-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "Approved",
                "MOO_DD": "26-Sep-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "26-Sep-19"
            },
            {
                "LICENSE_NBR": "2033303-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "VEGG 58TH LLC",
                "BUSINESS_NAME2": "MASSERIA DEI VINI",
                "BUILDING": 889,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 130,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 50018100,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 988251),
                lat: this.baseLatLng.lat + (.0000027 * 219274),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "12141-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 130,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "25-Sep-19",
                "EXPIRATION_DATE": "25-Dec-19",
                "APP_TOO_DATE": "25-Dec-19",
                "SUBMIT_DATE": "31-Aug-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "5-Sep-18",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "5-Sep-18",
                "CP": "Pending Review",
                "CP_DD": "5-Sep-18",
                "CB": "Review Period Expired",
                "CB_DD": "1-Nov-18",
                "HEARING": "Waived",
                "HEARING_DD": "1-Nov-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "22-Nov-18",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "2033621-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "TOR RESTAURANT LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 607,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 190,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 50044701,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 985734),
                lat: this.baseLatLng.lat + (.0000027 * 216451),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "4817-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 190,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "26-Oct-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "19-Mar-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "13-Apr-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "13-Apr-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "3-Jun-18",
                "HEARING": "Waived",
                "HEARING_DD": "11-Jun-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "2-Jul-18",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "26-Oct-18"
            },
            {
                "LICENSE_NBR": "2037205-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "BE TEMERARIO GROUP, LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 198,
                "STREET": "8TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 303,
                "SWC_TABLES": 12,
                "SWC_CHAIRS": 25,
                "DOHMH": 50046028,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 984312),
                lat: this.baseLatLng.lat + (.0000027 * 210157),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "8549-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 303,
                "APP_TABLES": 12,
                "APP_CHAIRS": 25,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "24-Oct-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "16-May-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "16-May-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "16-May-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "11-Jul-18",
                "HEARING": "Waived",
                "HEARING_DD": "11-Jul-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "1-Aug-18",
                "MOO": "Approved",
                "MOO_DD": "24-Oct-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "24-Oct-18"
            },
            {
                "LICENSE_NBR": "2038099-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "CHEZ JOSEPHINE LTD.",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 414,
                "STREET": "W 42ND ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 168,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 40384671,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 986067),
                lat: this.baseLatLng.lat + (.0000027 * 215621),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "26227-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 168,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "7-May-19",
                "EXPIRATION_DATE": "15-Sep-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "2-Nov-18",
                "INTAKE": "Issued Temp Op Letter",
                "INTAKE_DD": "2-Nov-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "5-Nov-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "27-Dec-18",
                "HEARING": "Waived",
                "HEARING_DD": "27-Dec-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "17-Jan-19",
                "MOO": "Approved",
                "MOO_DD": "7-May-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "7-May-19"
            },
            {
                "LICENSE_NBR": "2041410-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "NEW YORK BURGER 10th AVE INC.",
                "BUSINESS_NAME2": "NEW YORK BURGER CO",
                "BUILDING": 470,
                "STREET": "W 23RD ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Enclosed",
                "SWC_SQ_FT": 762,
                "SWC_TABLES": 25,
                "SWC_CHAIRS": 54,
                "DOHMH": 50052392,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 983235),
                lat: this.baseLatLng.lat + (.0000027 * 211565),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "23522-2019-RSWC",
                "APP_SWC_TYPE": "Enclosed",
                "APP_SQ_FT": 762,
                "APP_TABLES": 25,
                "APP_CHAIRS": 54,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "10-Dec-19",
                "EXPIRATION_DATE": "10-Jun-20",
                "APP_TOO_DATE": "10-Jun-20",
                "SUBMIT_DATE": "10-Jul-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "10-Jul-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "11-Jul-19",
                "CP": "Pending Review",
                "CP_DD": "11-Jul-19",
                "CB": "Pending Review",
                "CB_DD": "11-Jul-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "2051459-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "132 7TH AVE REST LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 132,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 270,
                "SWC_TABLES": 9,
                "SWC_CHAIRS": 30,
                "DOHMH": 50059371,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 984773),
                lat: this.baseLatLng.lat + (.0000027 * 209250),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "26003-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 270,
                "APP_TABLES": 9,
                "APP_CHAIRS": 30,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "24-Oct-19",
                "EXPIRATION_DATE": "24-Jan-20",
                "APP_TOO_DATE": "24-Jan-20",
                "SUBMIT_DATE": "26-Aug-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "26-Aug-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "27-Aug-19",
                "CP": "Pending Review",
                "CP_DD": "27-Aug-19",
                "CB": "Review Period Expired",
                "CB_DD": "15-Oct-19",
                "HEARING": "Waived",
                "HEARING_DD": "15-Oct-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "5-Nov-19",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "2051463-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "AROKA HOSPITALITY LLC",
                "BUSINESS_NAME2": "AROQA",
                "BUILDING": 206,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 150,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 12,
                "DOHMH": 50060498,
                imgUrl: 'assets/images/tribeca.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 983868),
                lat: this.baseLatLng.lat + (.0000027 * 211077),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "26024-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 150,
                "APP_TABLES": 6,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "19-Nov-19",
                "EXPIRATION_DATE": "19-Dec-19",
                "APP_TOO_DATE": "19-Dec-19",
                "SUBMIT_DATE": "27-Aug-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "27-Aug-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "28-Aug-19",
                "CP": "Pending Review",
                "CP_DD": "28-Aug-19",
                "CB": "Pending Review",
                "CB_DD": "28-Aug-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "16-Oct-19",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "2052336-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "161 8TH AVE RESTAURANT, LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 161,
                "STREET": "8TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 426,
                "SWC_TABLES": 15,
                "SWC_CHAIRS": 31,
                "DOHMH": "NULL",
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 984034),
                lat: this.baseLatLng.lat + (.0000027 * 209778),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "31784-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 426,
                "APP_TABLES": 15,
                "APP_CHAIRS": 31,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "26-Nov-19",
                "EXPIRATION_DATE": "15-Feb-20",
                "APP_TOO_DATE": "15-Feb-20",
                "SUBMIT_DATE": "8-Nov-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "8-Nov-19",
                "DPQA": "Under Review",
                "SEND_PACKAGE_DD": "26-Nov-19",
                "CP": "Pending Review",
                "CP_DD": "26-Nov-19",
                "CB": "Pending Review",
                "CB_DD": "26-Nov-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "15-Jan-20",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "2052742-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "R & R WESTSIDE, LLC",
                "BUSINESS_NAME2": "THE BRAZEN TAVERN",
                "BUILDING": 356,
                "STREET": "W 44TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 117,
                "SWC_TABLES": 5,
                "SWC_CHAIRS": 10,
                "DOHMH": 50054454,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986782),
                lat: this.baseLatLng.lat + (.0000027 * 215919),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "3510-2017-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 117,
                "APP_TABLES": 5,
                "APP_CHAIRS": 10,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "21-Jun-17",
                "EXPIRATION_DATE": "15-Dec-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "20-Mar-17",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "20-Mar-17",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "21-Mar-17",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "10-May-17",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "10-May-17",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "10-May-17",
                "CC": "Review Period Expired",
                "CC_DD": "31-May-17",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "21-Jun-17"
            },
            {
                "LICENSE_NBR": "2053413-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "PASTAIAT INC",
                "BUSINESS_NAME2": "PASTAI",
                "BUILDING": 186,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 77,
                "SWC_TABLES": 4,
                "SWC_CHAIRS": 8,
                "DOHMH": 50064388,
                imgUrl: 'assets/images/tribeca.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 983715),
                lat: this.baseLatLng.lat + (.0000027 * 210836),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "26134-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 77,
                "APP_TABLES": 4,
                "APP_CHAIRS": 8,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "26-Nov-19",
                "EXPIRATION_DATE": "26-Feb-20",
                "APP_TOO_DATE": "26-Feb-20",
                "SUBMIT_DATE": "30-Aug-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "30-Aug-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "30-Aug-19",
                "CP": "Pending Review",
                "CP_DD": "30-Aug-19",
                "CB": "Review Period Expired",
                "CB_DD": "25-Oct-19",
                "HEARING": "Waived",
                "HEARING_DD": "25-Oct-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "15-Nov-19",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "2053445-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "BE BAMBA GROUP LLC",
                "BUSINESS_NAME2": "LAMANO",
                "BUILDING": 265,
                "STREET": "W 20TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 108,
                "SWC_TABLES": 3,
                "SWC_CHAIRS": 6,
                "DOHMH": 50044869,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 984493),
                lat: this.baseLatLng.lat + (.0000027 * 210119),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "16854-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 108,
                "APP_TABLES": 3,
                "APP_CHAIRS": 6,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "1-Oct-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "4-Apr-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "4-Apr-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "10-Apr-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "30-May-19",
                "HEARING": "Waived",
                "HEARING_DD": "30-May-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "20-Jun-19",
                "MOO": "Approved",
                "MOO_DD": "1-Oct-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "1-Oct-19"
            },
            {
                "LICENSE_NBR": "2053879-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "210 EMPIRE LLC",
                "BUSINESS_NAME2": "EMPIRE DINER",
                "BUILDING": 210,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 793,
                "SWC_TABLES": 40,
                "SWC_CHAIRS": 80,
                "DOHMH": 50059989,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 983034),
                lat: this.baseLatLng.lat + (.0000027 * 211481),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "26977-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 793,
                "APP_TABLES": 40,
                "APP_CHAIRS": 80,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "19-Sep-19",
                "EXPIRATION_DATE": "18-Dec-19",
                "APP_TOO_DATE": "18-Dec-19",
                "SUBMIT_DATE": "18-Sep-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "18-Sep-19",
                "DPQA": "Under Review",
                "SEND_PACKAGE_DD": "19-Sep-19",
                "CP": "Pending Review",
                "CP_DD": "19-Sep-19",
                "CB": "Pending Review",
                "CB_DD": "19-Sep-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "6-Nov-19",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "2054411-DCA",
                "LIC_STATUS": "Inactive",
                "BUSINESS_NAME": "688 10TH AVE RESTAURANT CORP",
                "BUSINESS_NAME2": "HAVANA SOCIAL",
                "BUILDING": 688,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Regular Unenclosed/Small Unenclosed",
                "SWC_SQ_FT": 89,
                "SWC_TABLES": 5,
                "SWC_CHAIRS": 10,
                "DOHMH": 41704558,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986341),
                lat: this.baseLatLng.lat + (.0000027 * 217428),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "5557-2017-ASWC",
                "APP_SWC_TYPE": "Regular Unenclosed/Small Unenclosed",
                "APP_SQ_FT": 89,
                "APP_TABLES": 5,
                "APP_CHAIRS": 10,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "31-Oct-17",
                "EXPIRATION_DATE": "15-Apr-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "21-Apr-17",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "24-Apr-17",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "24-Apr-17",
                "CP": "Pending Review",
                "CP_DD": "24-Apr-17",
                "CB": "Review Period Expired",
                "CB_DD": "14-Jun-17",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "14-Jun-17",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "14-Jun-17",
                "CC": "Review Period Expired",
                "CC_DD": "6-Jul-17",
                "MOO": "Approved",
                "MOO_DD": "31-Oct-17",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "31-Oct-17"
            },
            {
                "LICENSE_NBR": "2054417-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "CATERED BY PERGOLA LLC",
                "BUSINESS_NAME2": "GARDENIA TERRACE",
                "BUILDING": 826,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Regular Unenclosed/Small Unenclosed",
                "SWC_SQ_FT": 95,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 14,
                "DOHMH": 50055882,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 987170),
                lat: this.baseLatLng.lat + (.0000027 * 218923),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "17337-2019-RSWC",
                "APP_SWC_TYPE": "Regular Unenclosed/Small Unenclosed",
                "APP_SQ_FT": 95,
                "APP_TABLES": 6,
                "APP_CHAIRS": 14,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "18-Sep-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "30-Sep-19",
                "SUBMIT_DATE": "9-Apr-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "9-Apr-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "9-Apr-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "30-May-19",
                "HEARING": "Waived",
                "HEARING_DD": "30-May-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "20-Jun-19",
                "MOO": "Approved",
                "MOO_DD": "18-Sep-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "18-Sep-19"
            },
            {
                "LICENSE_NBR": "2055690-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "SONNY LOU INC",
                "BUSINESS_NAME2": "PEPE GIALLO",
                "BUILDING": 195,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 120,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 12,
                "DOHMH": 50063758,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 982867),
                lat: this.baseLatLng.lat + (.0000027 * 211405),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "33224-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 120,
                "APP_TABLES": 6,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "21-Nov-19",
                "EXPIRATION_DATE": "21-Feb-20",
                "APP_TOO_DATE": "21-Feb-20",
                "SUBMIT_DATE": "21-Nov-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "21-Nov-19",
                "DPQA": "Issued Temp Op Letter",
                "SEND_PACKAGE_DD": "21-Nov-19",
                "CP": "Pending Review",
                "CP_DD": "21-Nov-19",
                "CB": "Pending Review",
                "CB_DD": "21-Nov-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "8-Jan-20",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "2060572-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "HUMMUS ON 6TH, LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 585,
                "STREET": "6TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 90,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 12,
                "DOHMH": 50063448,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 985388),
                lat: this.baseLatLng.lat + (.0000027 * 208626),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "16067-2018-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 90,
                "APP_TABLES": 6,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "19-Mar-19",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "26-Sep-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "26-Sep-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "26-Sep-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "21-Nov-18",
                "HEARING": "Waived",
                "HEARING_DD": "21-Nov-18",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "12-Dec-18",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "19-Mar-19"
            },
            {
                "LICENSE_NBR": "2062932-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "AGGIEPOLO INC",
                "BUSINESS_NAME2": "JASPERS TAPHOUSE & KITCHEN",
                "BUILDING": 761,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 115,
                "SWC_TABLES": 5,
                "SWC_CHAIRS": 10,
                "DOHMH": 50008104,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 987423),
                lat: this.baseLatLng.lat + (.0000027 * 217742),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "35205-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 115,
                "APP_TABLES": 5,
                "APP_CHAIRS": 10,
                "APP_STATUS": "Pending Review",
                "APP_STATUS_DATE": "13-Dec-19",
                "EXPIRATION_DATE": "12-Jan-20",
                "APP_TOO_DATE": "12-Jan-20",
                "SUBMIT_DATE": "12-Dec-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "12-Dec-19",
                "DPQA": "Under Review",
                "SEND_PACKAGE_DD": "13-Dec-19",
                "CP": "Pending Review",
                "CP_DD": "13-Dec-19",
                "CB": "Pending Review",
                "CB_DD": "13-Dec-19",
                "HEARING": "Pending Review",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "29-Jan-20",
                "CC": "Pending Review",
                "CC_DD": "",
                "MOO": "Pending Review",
                "MOO_DD": "",
                "ISSUANCE": "Pending Review",
                "ISSUANCE_DD": ""
            },
            {
                "LICENSE_NBR": "2063177-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "CAMGT 510 W 42 RESTAURANT OPERATING, LLC",
                "BUSINESS_NAME2": "TREADWELL PARK",
                "BUILDING": 510,
                "STREET": "W 42ND ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 212,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 50060621,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 985193),
                lat: this.baseLatLng.lat + (.0000027 * 216039),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "22211-2019-RSWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 212,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "1-Nov-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "14-Jun-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "17-Jun-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "17-Jun-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "15-Aug-19",
                "HEARING": "Waived",
                "HEARING_DD": "15-Aug-19",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "5-Sep-19",
                "MOO": "Approved",
                "MOO_DD": "1-Nov-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "1-Nov-19"
            },
            {
                "LICENSE_NBR": "2066984-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "190 SEVENTH AVENUE LLC",
                "BUSINESS_NAME2": "MERCHANTS NY",
                "BUILDING": 190,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 263,
                "SWC_TABLES": 16,
                "SWC_CHAIRS": 32,
                "DOHMH": 50072121,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 985185),
                lat: this.baseLatLng.lat + (.0000027 * 210009),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "20054-2017-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 263,
                "APP_TABLES": 16,
                "APP_CHAIRS": 32,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "24-May-18",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "22-Dec-17",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "22-Dec-17",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "22-Dec-17",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "11-Feb-18",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "1-Mar-18",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "7-Feb-18",
                "CC": "Review Period Expired",
                "CC_DD": "22-Mar-18",
                "MOO": "Approved",
                "MOO_DD": "24-May-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "24-May-18"
            },
            {
                "LICENSE_NBR": "2067784-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "WMW REST II, LLC",
                "BUSINESS_NAME2": "DIANNE & ELISABETH",
                "BUILDING": 644,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Regular Unenclosed/Small Unenclosed",
                "SWC_SQ_FT": 157,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 12,
                "DOHMH": 50054612,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 985992),
                lat: this.baseLatLng.lat + (.0000027 * 216808),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "19757-2017-ASWC",
                "APP_SWC_TYPE": "Regular Unenclosed/Small Unenclosed",
                "APP_SQ_FT": 157,
                "APP_TABLES": 6,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "24-May-18",
                "EXPIRATION_DATE": "15-Dec-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "18-Dec-17",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "18-Dec-17",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "19-Dec-17",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "8-Feb-18",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "14-Mar-18",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "7-Feb-18",
                "CC": "Review Period Expired",
                "CC_DD": "5-Apr-18",
                "MOO": "Approved",
                "MOO_DD": "24-May-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "24-May-18"
            },
            {
                "LICENSE_NBR": "2072101-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "CHELSEA 191 CORP",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 191,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 469,
                "SWC_TABLES": 12,
                "SWC_CHAIRS": 36,
                "DOHMH": 50076168,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 985281),
                lat: this.baseLatLng.lat + (.0000027 * 209946),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "6792-2018-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 469,
                "APP_TABLES": 12,
                "APP_CHAIRS": 36,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "26-Oct-18",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "5-Apr-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "13-Apr-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "23-Apr-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "19-Jul-18",
                "MOO": "Approved",
                "MOO_DD": "26-Oct-18",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "26-Oct-18"
            },
            {
                "LICENSE_NBR": "2080055-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "MBG TAVERNS ON 6TH CORP",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 757,
                "STREET": "6TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10010,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 270,
                "SWC_TABLES": 10,
                "SWC_CHAIRS": 20,
                "DOHMH": "NULL",
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 986515),
                lat: this.baseLatLng.lat + (.0000027 * 210642),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "17222-2018-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 270,
                "APP_TABLES": 10,
                "APP_CHAIRS": 20,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "15-Nov-19",
                "EXPIRATION_DATE": "15-Dec-19",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "9-Nov-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "9-Nov-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "13-Nov-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "Approved",
                "MOO_DD": "15-Nov-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "15-Nov-19"
            },
            {
                "LICENSE_NBR": "2080733-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "SIXSILY LLC",
                "BUSINESS_NAME2": "IL MELOGRANO",
                "BUILDING": 501,
                "STREET": "W 51ST ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 120,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 50082931,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 986633),
                lat: this.baseLatLng.lat + (.0000027 * 218349),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "18246-2018-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 120,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "6-Sep-19",
                "EXPIRATION_DATE": "15-Apr-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "17-Dec-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "17-Dec-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "18-Dec-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "Approved",
                "MOO_DD": "6-Sep-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "6-Sep-19"
            },
            {
                "LICENSE_NBR": "2081202-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "WESTVILLE HK LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 809,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 52,
                "SWC_TABLES": 3,
                "SWC_CHAIRS": 6,
                "DOHMH": "NULL",
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 987723),
                lat: this.baseLatLng.lat + (.0000027 * 218289),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "17268-2018-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 52,
                "APP_TABLES": 3,
                "APP_CHAIRS": 6,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "12-Jun-19",
                "EXPIRATION_DATE": "15-Dec-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "13-Nov-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "13-Nov-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "13-Nov-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "31-Jan-19",
                "MOO": "Approved",
                "MOO_DD": "12-Jun-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "12-Jun-19"
            },
            {
                "LICENSE_NBR": "2081214-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "GAUTENG LLC",
                "BUSINESS_NAME2": "JACK'S WIFE FREDA",
                "BUILDING": 116,
                "STREET": "8TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 49,
                "SWC_TABLES": 3,
                "SWC_CHAIRS": 6,
                "DOHMH": 50085479,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 983810),
                lat: this.baseLatLng.lat + (.0000027 * 209109),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "17274-2018-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 49,
                "APP_TABLES": 3,
                "APP_CHAIRS": 6,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "22-Mar-19",
                "EXPIRATION_DATE": "15-Dec-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "13-Nov-18",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "13-Nov-18",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "13-Nov-18",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "9-Jan-19",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "9-Jan-19",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "2-Jan-19",
                "CC": "Review Period Expired",
                "CC_DD": "30-Jan-19",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "22-Mar-19"
            },
            {
                "LICENSE_NBR": "2082895-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "PRIVE HOSPITALITY GROUP LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 626,
                "STREET": "10TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 215,
                "SWC_TABLES": 9,
                "SWC_CHAIRS": 19,
                "DOHMH": 50075908,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 985867),
                lat: this.baseLatLng.lat + (.0000027 * 216558),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "238-2019-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 215,
                "APP_TABLES": 9,
                "APP_CHAIRS": 19,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "15-May-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "9-Jan-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "9-Jan-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "9-Jan-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Review Period Expired",
                "CB_DD": "6-Mar-19",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "6-Mar-19",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "27-Feb-19",
                "CC": "Review Period Expired",
                "CC_DD": "27-Mar-19",
                "MOO": "Approved",
                "MOO_DD": "15-May-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "15-May-19"
            },
            {
                "LICENSE_NBR": "2084461-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "BOYYTHAI CORP",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 662,
                "STREET": "9TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10036,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 285,
                "SWC_TABLES": 9,
                "SWC_CHAIRS": 18,
                "DOHMH": 50088038,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 986860),
                lat: this.baseLatLng.lat + (.0000027 * 216521),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "996-2019-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 285,
                "APP_TABLES": 9,
                "APP_CHAIRS": 18,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "19-Jun-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "31-Jan-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "31-Jan-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "31-Jan-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Recommend Approval",
                "CB_DD": "10-Apr-19",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "10-Apr-19",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "20-Mar-19",
                "CC": "Review Period Expired",
                "CC_DD": "1-May-19",
                "MOO": "NULL",
                "MOO_DD": "",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "19-Jun-19"
            },
            {
                "LICENSE_NBR": "2085245-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "DLK Restaurants LLC",
                "BUSINESS_NAME2": "The Copper Still",
                "BUILDING": 206,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 275,
                "SWC_TABLES": 10,
                "SWC_CHAIRS": 30,
                "DOHMH": 50079981,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 985238),
                lat: this.baseLatLng.lat + (.0000027 * 210102),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "700-2019-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 275,
                "APP_TABLES": 10,
                "APP_CHAIRS": 30,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "1-Jul-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "22-Jan-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "24-Jan-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "4-Feb-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Recommend Modified Approval",
                "CB_DD": "30-Apr-19",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "30-Apr-19",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "27-Mar-19",
                "CC": "Review Period Expired",
                "CC_DD": "21-May-19",
                "MOO": "Approved",
                "MOO_DD": "1-Jul-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "1-Jul-19"
            },
            {
                "LICENSE_NBR": "2086165-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "ABA TURKISH RESTAURANT LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 325,
                "STREET": "W 57TH ST",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10019,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 164,
                "SWC_TABLES": 8,
                "SWC_CHAIRS": 16,
                "DOHMH": 41548688,
                imgUrl: 'assets/images/bustelo.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 988720),
                lat: this.baseLatLng.lat + (.0000027 * 218888),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "2599-2019-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 164,
                "APP_TABLES": 8,
                "APP_CHAIRS": 16,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "11-Jul-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "13-Mar-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "13-Mar-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "14-Mar-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "Review Period Expired",
                "CC_DD": "11-Jun-19",
                "MOO": "Approved",
                "MOO_DD": "11-Jul-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "11-Jul-19"
            },
            {
                "LICENSE_NBR": "2088885-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "PEANUT FACTORY LLC",
                "BUSINESS_NAME2": "BO CAPHE",
                "BUILDING": 104,
                "STREET": "8TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 120,
                "SWC_TABLES": 6,
                "SWC_CHAIRS": 12,
                "DOHMH": 50093028,
                imgUrl: 'assets/images/bonnie.jpg',
                lng: this.baseLatLng.lng + (.00000358 * 983780),
                lat: this.baseLatLng.lat + (.0000027 * 209109),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "5956-2019-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 120,
                "APP_TABLES": 6,
                "APP_CHAIRS": 12,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "21-Oct-19",
                "EXPIRATION_DATE": "15-Apr-21",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "21-May-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "21-May-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "23-May-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "Recommend Approval",
                "CB_DD": "17-Jul-19",
                "HEARING": "Recommendation Issued",
                "HEARING_DD": "17-Jul-19",
                "HEARING_PUBLIC": "SWC Public Hearing",
                "HEARING_PUBLIC_DD": "10-Jul-19",
                "CC": "Review Period Expired",
                "CC_DD": "20-Aug-19",
                "MOO": "Approved",
                "MOO_DD": "21-Oct-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "21-Oct-19"
            },
            {
                "LICENSE_NBR": "2089176-DCA",
                "LIC_STATUS": "Active",
                "BUSINESS_NAME": "IVANKA CATERING LLC",
                "BUSINESS_NAME2": "NULL",
                "BUILDING": 200,
                "STREET": "7TH AVE",
                "CITY": "NEW YORK",
                "STATE": "NY",
                "ZIP": 10011,
                "SWC_TYPE": "Unenclosed",
                "SWC_SQ_FT": 270,
                "SWC_TABLES": 11,
                "SWC_CHAIRS": 22,
                "DOHMH": 50094711,
                imgUrl: 'assets/images/momoya.png',
                lng: this.baseLatLng.lng + (.00000358 * 985226),
                lat: this.baseLatLng.lat + (.0000027 * 210102),
                "COMMUNITY_DISTRICT": 104,
                "CITY_COUNCIL_DISTRICT": 3,
                "CD_URL": "http://www.nyc.gov/mcb4",
                "APP_ID": "9206-2019-ASWC",
                "APP_SWC_TYPE": "Unenclosed",
                "APP_SQ_FT": 270,
                "APP_TABLES": 11,
                "APP_CHAIRS": 22,
                "APP_STATUS": "Application Review Completed",
                "APP_STATUS_DATE": "16-Oct-19",
                "EXPIRATION_DATE": "15-Sep-20",
                "APP_TOO_DATE": "",
                "SUBMIT_DATE": "2-Aug-19",
                "INTAKE": "Ready For Review",
                "INTAKE_DD": "2-Aug-19",
                "DPQA": "Approved",
                "SEND_PACKAGE_DD": "6-Aug-19",
                "CP": "NULL",
                "CP_DD": "",
                "CB": "NULL",
                "CB_DD": "",
                "HEARING": "NULL",
                "HEARING_DD": "",
                "HEARING_PUBLIC": "NULL",
                "HEARING_PUBLIC_DD": "",
                "CC": "NULL",
                "CC_DD": "",
                "MOO": "Approved",
                "MOO_DD": "16-Oct-19",
                "ISSUANCE": "Issued",
                "ISSUANCE_DD": "16-Oct-19"
            }
        ];
        this.filteredData = [];
        this.businessSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]('');
        this.userSettings = {
            'showCurrentLocation': false,
            'showSearchButton': false,
            'inputPlaceholderText': 'Refine your search to find the right business'
        };
        this.isSearching = false;
    }
    LotterySearchComponent.prototype.toggleFilters = function () {
        this.filtersOpen = !this.filtersOpen;
    };
    LotterySearchComponent.prototype.autoCompleteCallback = function (result, index) {
        console.log(result);
        var data = this.utilSvc.processGeoAutoCompleteResult(result);
        if (data) {
            var addr = data.mappedAddress;
            this.searchValue = addr;
        }
        this.cdRef.detectChanges();
    };
    LotterySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.paginatorId = (this.filtersModel.householdType === HouseholdTypeEnum.Sales) ? 'sales' : 'rental' + '-paginator';
        // this.orderBy = this.orderByOptions[1].value;
        // this.isAscending = (this.orderBy === this.orderByOptions[0].value);
        this.filteredData = this.cafeMapData;
        this.businessSearch.valueChanges.subscribe(function (x) { return _this.filterMapMarker(x); });
        this.complaintCheckbox.valueChanges.subscribe(function (x) { return _this.filterRed(x); });
        this.scaleCheckbox.valueChanges.subscribe(function (x) { return _this.filterOrange(x); });
        // this.cafeMapData = this.cafeMapData.filter(mark => mark.lat > 40.756);
        // this.refreshSearchEvent$.subscribe(() => {
        //   this.updateUrlParamsByFilterModel(this.filtersModel);
        // })
    };
    LotterySearchComponent.prototype.ngOnChanges = function (changes) {
        // if (_.get(changes, 'filtersData.currentValue')) {
        //   this.searchLotteries(this.filtersModel);
        // }
    };
    LotterySearchComponent.prototype.getFilteredData = function () {
        return this.filteredData;
    };
    LotterySearchComponent.prototype.filterMapMarker = function (str) {
        this.filteredData = this.cafeMapData.filter(function (x) {
            return (x.BUSINESS_NAME.toLowerCase().includes(str.toLowerCase()) || x.STREET.toLowerCase().includes(str.toLowerCase()));
        });
        this.cdRef.detectChanges();
    };
    LotterySearchComponent.prototype.filterRed = function (red) {
        this.filteredData = this.cafeMapData.filter(function (x) { return (x.SWC_TYPE == 'Enclosed' || x.SWC_TYPE == 'Unenclosed') && red ? false : true; });
        this.cdRef.detectChanges();
    };
    LotterySearchComponent.prototype.filterOrange = function (orange) {
        this.filteredData = this.cafeMapData.filter(function (x) { return (x.SWC_TYPE !== 'Enclosed') && orange ? false : true; });
        this.cdRef.detectChanges();
    };
    LotterySearchComponent.prototype.toggleSort = function () {
        this.isSearching = true;
        this.cdRef.detectChanges();
        var first = this.orderBy == this.orderByOptions[1].value;
        this.isAscending = !!first;
        this.orderBy = first ? this.orderByOptions[0].value : this.orderByOptions[1].value;
        this.isSearching = false;
    };
    LotterySearchComponent.prototype.openFilters = function () {
        var _this = this;
        this.activeModalRef = this.matDialog.open(_filters_components_lottery_filters_modal_lottery_filters_modal_component__WEBPACK_IMPORTED_MODULE_6__["LotteryFiltersModalComponent"], {
            data: {
                filtersModel: lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.filtersModel),
                filtersData: this.filtersData,
                visibleFiltersConf: this.visibleFiltersConf,
            },
            hasBackdrop: true,
            panelClass: 'filter-modal'
        });
        this.activeModalRef.beforeClose().subscribe(function (filterModel) {
            console.log("Return from modal: ", filterModel);
            if (filterModel) {
                _this.filtersModel = filterModel;
                _this.updateUrlParamsByFilterModel(_this.filtersModel);
                _this.searchLotteries(_this.filtersModel);
            }
        });
    };
    LotterySearchComponent.prototype.onChangeFilterEvent = function (event) {
        this.filtersModel = event;
        this.updateUrlParamsByFilterModel(event);
        this.searchLotteries(event);
    };
    LotterySearchComponent.prototype.formatSearchFiltersModel = function (filterModel) {
        // const UnitTypes = _.keys(filterModel.unitLayoutTypes).map(i => i.match(/\d/g) ? i[0] : 0);
        var Boroughs = filterModel.neighborhoods ? lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](filterModel.neighborhoods, 'id').map(function (i) { return i.id; }) : [];
        var Neighborhoods = filterModel.neighborhoods ? lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](filterModel.neighborhoods, 'neighborhoodId').map(function (i) { return i.neighborhoodId; }) : [];
        var min = (filterModel.householdType == _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_5__["HouseholdTypeEnum"].Sales) ? ((filterModel.price) ? filterModel.price.minPrice : null) : ((filterModel.monthlyRent) ? filterModel.monthlyRent.minRent : null);
        var max = (filterModel.householdType == _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_5__["HouseholdTypeEnum"].Sales) ? ((filterModel.price) ? filterModel.price.maxPrice : null) : ((filterModel.monthlyRent) ? filterModel.monthlyRent.maxRent : null);
        var lotterySearchModel = {
            UnitTypes: filterModel.unitLayoutTypes,
            NearbyPlaces: [],
            NearbySubways: filterModel.subways,
            Amenities: filterModel.amenities,
            Boroughs: Boroughs,
            Neighborhoods: Neighborhoods,
            HouseholdSize: filterModel.householdSize,
            Income: filterModel.householdIncome ? filterModel.householdIncome.toString().replace(/,/g, '') : '',
            HouseholdType: filterModel.householdType,
            OwnerTypes: filterModel.ownershipType,
            Min: min,
            Max: max
        };
        return lotterySearchModel;
    };
    LotterySearchComponent.prototype.navigateToComplaint = function (event) {
        console.log(event);
        var details = new URLSearchParams(event);
        this.router.navigate(['file-complaint'], {
            queryParams: details.getAll('name')
        });
    };
    LotterySearchComponent.prototype.searchLotteries = function (filterModel) {
        var _this = this;
        // this.isSearching = true;
        this.cdRef.detectChanges();
        console.log("Search lotteries:", this.formatSearchFiltersModel(filterModel));
        (this.householdType === _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_5__["HouseholdTypeEnum"].Rentals) ?
            localStorage.setItem('lotteryFiltersRentals', JSON.stringify(filterModel))
            : localStorage.setItem('lotteryFiltersSales', JSON.stringify(filterModel));
        this.lotteryApiService.searchLotteries(this.formatSearchFiltersModel(filterModel))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (lotteries) {
            _this.lotteryResults = _this.updateLotteryResultData(lotteries);
            _this.isSearching = false;
            _this.cdRef.detectChanges();
        });
    };
    LotterySearchComponent.prototype.updateUrlParamsByFilterModel = function (filterModel) {
        this.router.navigate(['search-lotteries'], {
            queryParams: this.browseLotteriesService.formattingFilterToQueryParams(filterModel)
        });
    };
    LotterySearchComponent.prototype.updateLotteryResultData = function (lotteries) {
        console.log("Lottery Search API results:", lotteries);
        return lotteries.map(function (item, index) {
            var subwayArray = item.trains
                ? lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](item.trains.split(',')).sort()
                : [];
            var markers = [];
            item.markers.forEach(function (item, index) {
                var marker = {
                    address: item.address,
                    city: item.city,
                    lat: item.lat,
                    lng: item.lng,
                    label: item.name,
                    markerLabel: item.name,
                    state: item.state,
                    zip: item.zip,
                    fullAddress: "$(item.address), $(item.city), $(item.state) $(item.zip)",
                    id: 0,
                    draggable: false,
                    index: index,
                    iconUrl: (item.name % 2 == 0) ? '/assets/images/map-marker.svg' : '/assets/images/map-marker-red.svg',
                    type: 'building',
                    color: null,
                    trainName: null
                };
                markers.push(marker);
            });
            var entity = {
                mainImage: (item.defaultPhotoStream)
                    ? (item.defaultPhotoStream)
                    : '/assets/images/demo-lottery-house.png',
                markers: markers,
                details: {
                    amenities: item.amenities,
                    area: ((item.neighborhood)
                        ? item.neighborhood
                        : 'Neighborhood') + ' | ' + ((item.borough) ? item.borough : 'Borough'),
                    borough: item.borough,
                    description: item.lotteryDescription,
                    endIn: item.endIn,
                    lotteryEndDate: item.lotteryEndDate,
                    lotteryId: item.lotteryId,
                    lotteryName: item.lotteryName,
                    street: item.lotteryName,
                    subwayServices: subwayArray,
                    images: [
                        (item.defaultPhotoStream) ? (item.defaultPhotoStream) : '/assets/images/demo-lottery-house.png'
                    ],
                    isAddedToFavorite: false,
                    expirationDate: new Date(),
                    expirationDateText: (item.endIn > 0) ? ('Lottery closing in ' + item.endIn + ' days') : ((item.endIn === 0) ? ('Lottery ends today') : ('')),
                    minIncome: item.minIncome,
                    maxIncome: item.maxIncome,
                    minHousehold: item.minHouseholdSize,
                    maxHousehold: item.maxHouseholdSize,
                    mobilityPref: item.mobility,
                    units: item.units,
                    studios: item.studios,
                    oneBR: item.oneBR,
                    twoBR: item.twoBR,
                    threeBR: item.threeBR,
                    fourBR: item.fourBR,
                    unitLayouts: item.unitLayouts,
                    propertyTypeId: item.propertyTypeId,
                    propertyType: (item.propertyTypeId == _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_5__["PropertyTypeEnum"].Rental ? "Rental" : (item.propertyTypeId == _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_5__["PropertyTypeEnum"].Owner ? "Sales" : "")),
                    ownerTypeId: item.ownerTypeId,
                    ownerType: (item.ownerTypeId == _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_5__["OwnerTypeEnum"].SmallHome ? "Small Home" : (item.ownerTypeId == _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_5__["OwnerTypeEnum"].CondoCoop ? "Condo/Co-op" : "")),
                    visionHearingPref: item.visionHearing
                }
            };
            return entity;
        });
    };
    LotterySearchComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LotterySearchComponent.prototype, "householdType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LotterySearchComponent.prototype, "searchTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LotterySearchComponent.prototype, "visibleFiltersConf", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LotterySearchComponent.prototype, "activeViewMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _filters_filter_models_filters_class__WEBPACK_IMPORTED_MODULE_9__["FiltersModel"])
    ], LotterySearchComponent.prototype, "filtersModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _filters_filter_models_filters_class__WEBPACK_IMPORTED_MODULE_9__["FiltersModel"])
    ], LotterySearchComponent.prototype, "filtersData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"])
    ], LotterySearchComponent.prototype, "refreshSearchEvent$", void 0);
    LotterySearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lottery-search',
            template: __webpack_require__(/*! ./lottery-search.component.html */ "./src/app/modules/browse-lotteries/components/lottery-search/lottery-search.component.html"),
            styles: [__webpack_require__(/*! ./lottery-search.component.scss */ "./src/app/modules/browse-lotteries/components/lottery-search/lottery-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_4__["LotteryApiService"],
            _services_browse_lotteries_service__WEBPACK_IMPORTED_MODULE_7__["BrowseLotteriesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _household_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]])
    ], LotterySearchComponent);
    return LotterySearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/models/index.enum.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/models/index.enum.ts ***!
  \***************************************************************/
/*! exports provided: ViewLotteryResultMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLotteryResultMode", function() { return ViewLotteryResultMode; });
var ViewLotteryResultMode;
(function (ViewLotteryResultMode) {
    ViewLotteryResultMode["MAP"] = "MAP";
    ViewLotteryResultMode["LIST"] = "LIST";
    ViewLotteryResultMode["GRID"] = "GRID";
    ViewLotteryResultMode["CONDENSED"] = "CONDENSED";
})(ViewLotteryResultMode || (ViewLotteryResultMode = {}));


/***/ }),

/***/ "./src/app/modules/browse-lotteries/models/order-filterby.model.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/models/order-filterby.model.ts ***!
  \*************************************************************************/
/*! exports provided: OrderFilterbyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFilterbyModel", function() { return OrderFilterbyModel; });
var OrderFilterbyModel = /** @class */ (function () {
    function OrderFilterbyModel() {
        this.ascending = true;
    }
    return OrderFilterbyModel;
}());



/***/ }),

/***/ "./src/app/modules/browse-lotteries/services/browse-lotteries.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/browse-lotteries/services/browse-lotteries.service.ts ***!
  \*******************************************************************************/
/*! exports provided: BrowseLotteriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseLotteriesService", function() { return BrowseLotteriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_public_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/public-api.service */ "./src/app/core/services/public-api.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseLotteriesService = /** @class */ (function () {
    function BrowseLotteriesService(publicApiService) {
        this.publicApiService = publicApiService;
    }
    BrowseLotteriesService.prototype.getMyProjectActivities = function () {
        return this.publicApiService.get('Development/GetMyProjectActivities');
    };
    BrowseLotteriesService.prototype.getMyGetMyTasks = function () {
        return this.publicApiService.get('Development/GetMyTasks');
    };
    BrowseLotteriesService.prototype.isEqualString = function (value) {
        return function (filterName) { return filterName == value; };
    };
    //input
    // amenities: (7) [7, 5, 3, 1, 2, 4, 6]
    // householdIncome: "123"
    // householdSize: "2"
    // householdType: 2
    // monthlyRent: {minRent: "12", maxRent: "12312"}
    // neighborhoods: (2) [{…}, {…}]
    // ownershipType: []
    // price: {minPrice: null, maxPrice: null}
    // subways: (5) ["7", "5", "3", "2", "1"]
    // unitLayoutTypes: (5) [1, 2, 4, 5, 3]
    //output
    // amenities: "6,5,2,1"
    // householdIncome: "132"
    // householdSize: "1"
    // monthlyRent: "123-12312"
    // neighborhoods: "1,16,18,19"
    // ownershipType: ""
    // price: "null-null"
    // subways: "6,5,2,1"
    // unitLayoutTypes: "1,2"
    BrowseLotteriesService.prototype.formattingFilterToQueryParams = function (filterModel) {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["keys"](filterModel)
            .reduce(function (result, filterName) {
            var filterValue = filterModel[filterName];
            if (lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](filterValue)) {
                return result;
            }
            if (lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"](filterValue)) {
                switch (filterName) {
                    case 'neighborhoods':
                        result[filterName] = filterValue
                            .map(function (neighborhoods) { return neighborhoods.id || neighborhoods.neighborhoodId; })
                            .join(',');
                        break;
                    default:
                        result[filterName] = filterValue.join(',');
                        break;
                }
            }
            else if (lodash__WEBPACK_IMPORTED_MODULE_2__["isObject"](filterValue)) {
                switch (filterName) {
                    case 'monthlyRent':
                        if (filterValue.minRent)
                            result['minRent'] = filterValue.minRent;
                        if (filterValue.maxRent)
                            result['maxRent'] = filterValue.maxRent;
                        break;
                    case 'price':
                        if (filterValue.minRent)
                            result['minPrice'] = filterValue.minPrice;
                        if (filterValue.maxRent)
                            result['maxPrice'] = filterValue.maxPrice;
                        break;
                }
            }
            else {
                result[filterName] = filterValue;
            }
            return result;
        }, {});
    };
    //input
    // amenities: "7,4,3,2,5,6"
    // householdIncome: "132"
    // householdSize: "1"
    // householdType: "2"
    // maxRent: "123"
    // minRent: "123"
    // neighborhoods: "1,12,16"
    // ownershipType: ""
    // subways: "6,5,4,2,1"
    // unitLayoutTypes: "1,2,3,5,4"
    //output
    // amenities: (7) [7, 5, 3, 1, 2, 4, 6]
    // householdIncome: "123"
    // householdSize: "2"
    // householdType: 2
    // monthlyRent: {minRent: "12", maxRent: "12312"}
    // neighborhoods: (2) [{…}, {…}]
    // ownershipType: []
    // price: {minPrice: null, maxPrice: null}
    // subways: (5) ["7", "5", "3", "2", "1"]
    // unitLayoutTypes: (5) [1, 2, 4, 5, 3]
    BrowseLotteriesService.prototype.queryParamsToFiltersValues = function (queryFilterParams) {
        var filterParams = {
            householdIncome: queryFilterParams.householdIncome,
            householdSize: queryFilterParams.householdSize,
            amenities: queryFilterParams.amenities && queryFilterParams.amenities.split(','),
            neighborhoods: queryFilterParams.neighborhoods && queryFilterParams.neighborhoods.split(','),
            ownershipType: queryFilterParams.ownershipType && queryFilterParams.ownershipType.split(','),
            subways: queryFilterParams.subways && queryFilterParams.subways.split(','),
            unitLayoutTypes: queryFilterParams.unitLayoutTypes && queryFilterParams.unitLayoutTypes.split(','),
            monthlyRent: {
                minRent: queryFilterParams.minRent || null,
                maxRent: queryFilterParams.maxRent || null
            },
            price: {
                minPrice: queryFilterParams.minPrice || null,
                maxPrice: queryFilterParams.maxPrice || null
            },
        };
        return lodash__WEBPACK_IMPORTED_MODULE_2__["pickBy"](filterParams);
    };
    BrowseLotteriesService.prototype.formattingQueryParamsToFilterModel = function (queryParams, filtersAPIData) {
        // amenities: (6) ["7", "4", "3", "2", "5", "6"]
        // householdIncome: "132"
        // householdSize: "1"
        // monthlyRent: {minRent: "123", maxRent: "123"}
        // neighborhoods: (3) ["1", "12", "16"]
        // price: {minPrice: null, maxPrice: null}
        // subways: (5) ["1", "2", "3", "5", "4"]
        // unitLayoutTypes: (5) ["1", "2", "3", "5", "4"]
        var selectedFiltersModel = {
            householdIncome: queryParams.householdIncome,
            householdSize: queryParams.householdSize,
            amenities: queryParams.amenities && queryParams.amenities.map(Number),
            neighborhoods: queryParams.neighborhoods && filtersAPIData.neighborhoods.reduce(function (selectedItems, neighborhoods) {
                if (queryParams.neighborhoods.indexOf(neighborhoods.id + '') >= 0) {
                    selectedItems.push(neighborhoods);
                }
                else {
                    neighborhoods.subList.forEach(function (subItem) {
                        if (queryParams.neighborhoods.indexOf(subItem.neighborhoodId + '') >= 0) {
                            selectedItems.push(subItem);
                        }
                    });
                }
                return selectedItems;
            }, []),
            ownershipType: queryParams.ownershipType,
            subways: queryParams.subways,
            unitLayoutTypes: queryParams.unitLayoutTypes && queryParams.unitLayoutTypes.map(Number),
            monthlyRent: queryParams.monthlyRent,
            price: queryParams.price,
        };
        return lodash__WEBPACK_IMPORTED_MODULE_2__["pickBy"](selectedFiltersModel);
    };
    BrowseLotteriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_public_api_service__WEBPACK_IMPORTED_MODULE_1__["PublicApiService"]])
    ], BrowseLotteriesService);
    return BrowseLotteriesService;
}());



/***/ }),

/***/ "./src/app/shared/components/pure-carousel/pure-carousel.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/pure-carousel/pure-carousel.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pure-carousel-container\">\n  <img [src]=\"data[activeIndex]\" alt=\"\">\n</div>\n<div class=\"pure-carousel-dot-wrapper\">\n  <div class=\"pure-carousel-dot-item\"\n       *ngFor=\"let dot of data; let i = index\" [class.active]=\"activeIndex === i\"\n       (click)=\"jumpToSlide(i)\"></div>\n</div>\n<button class=\"pure-carousel-btn pure-carousel-btn-left\" type=\"button\"\n        [disabled]=\"this.isFirstSlideActive()\"\n        (click)=\"onPreSlide()\"><i class=\"fa fa-angle-left\"></i>\n</button>\n<button class=\"pure-carousel-btn pure-carousel-btn-right\" type=\"button\"\n        [disabled]=\"this.isLastSlideActive()\"\n        (click)=\"onNextSlide()\"><i class=\"fa fa-angle-right\"></i>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/components/pure-carousel/pure-carousel.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/pure-carousel/pure-carousel.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center; }\n  :host .pure-carousel-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    overflow: hidden; }\n  :host .pure-carousel-container img {\n      height: 100%; }\n  :host .pure-carousel-btn {\n    position: absolute;\n    background: none;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    text-shadow: 1px 2px 0 rgba(2, 2, 2, 0.25); }\n  :host .pure-carousel-btn[disabled] {\n      opacity: 0.6;\n      text-shadow: none !important; }\n  :host .pure-carousel-btn:hover {\n      text-shadow: 1px 2px 0 #020202; }\n  :host .pure-carousel-btn:active {\n      text-shadow: none !important; }\n  :host .pure-carousel-btn i.fa {\n      font-size: 3rem;\n      color: #fff; }\n  :host .pure-carousel-btn.pure-carousel-btn-left {\n      left: 0; }\n  :host .pure-carousel-btn.pure-carousel-btn-right {\n      right: 0; }\n  :host .pure-carousel-dot-wrapper {\n    position: absolute;\n    bottom: 15%;\n    width: 100%;\n    left: 0;\n    display: flex;\n    justify-content: center; }\n  :host .pure-carousel-dot-item {\n    height: 0.8rem;\n    width: 0.8rem;\n    border-radius: 50%;\n    border: 1px solid #ffffff;\n    margin: 5px;\n    cursor: pointer; }\n  :host .pure-carousel-dot-item.active {\n      background-color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3B1cmUtY2Fyb3VzZWwvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwdXJlLWNhcm91c2VsXFxwdXJlLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBTHJCO0lBUUksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQixFQUFBO0VBWnBCO01BZU0sWUFBWSxFQUFBO0VBZmxCO0lBb0JJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBRWYsMENBQTBDLEVBQUE7RUExQjlDO01BNEJNLFlBQVk7TUFDWiw0QkFBNEIsRUFBQTtFQTdCbEM7TUFpQ00sOEJBQThCLEVBQUE7RUFqQ3BDO01BcUNNLDRCQUE0QixFQUFBO0VBckNsQztNQXlDTSxlQUFlO01BQ2YsV0FBVyxFQUFBO0VBMUNqQjtNQThDTSxPQUFPLEVBQUE7RUE5Q2I7TUFrRE0sUUFBUSxFQUFBO0VBbERkO0lBdURJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFFUCxhQUFhO0lBQ2IsdUJBQXVCLEVBQUE7RUE3RDNCO0lBaUVJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBdEVuQjtNQXlFTSx5QkFBeUIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wdXJlLWNhcm91c2VsL3B1cmUtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAucHVyZS1jYXJvdXNlbC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5wdXJlLWNhcm91c2VsLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgdGV4dC1zaGFkb3c6IDFweCAycHggMCByZ2JhKDIsIDIsIDIsIDAuMjUpO1xuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAwICMwMjAyMDI7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpLmZhIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgICYucHVyZS1jYXJvdXNlbC1idG4tbGVmdCB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICYucHVyZS1jYXJvdXNlbC1idG4tcmlnaHQge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLnB1cmUtY2Fyb3VzZWwtZG90LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5wdXJlLWNhcm91c2VsLWRvdC1pdGVtIHtcbiAgICBoZWlnaHQ6IDAuOHJlbTtcbiAgICB3aWR0aDogMC44cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/pure-carousel/pure-carousel.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/pure-carousel/pure-carousel.component.ts ***!
  \****************************************************************************/
/*! exports provided: PureCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureCarouselComponent", function() { return PureCarouselComponent; });
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

var PureCarouselComponent = /** @class */ (function () {
    function PureCarouselComponent() {
        this.data = [];
        this.activeIndex = 0;
    }
    PureCarouselComponent.prototype.ngOnInit = function () { };
    PureCarouselComponent.prototype.onNextSlide = function () {
        this.activeIndex = ++this.activeIndex;
    };
    PureCarouselComponent.prototype.onPreSlide = function () {
        this.activeIndex = --this.activeIndex;
    };
    PureCarouselComponent.prototype.isLastSlideActive = function () {
        return this.data.length - 1 === this.activeIndex;
    };
    PureCarouselComponent.prototype.isFirstSlideActive = function () {
        return 0 === this.activeIndex;
    };
    PureCarouselComponent.prototype.jumpToSlide = function (i) {
        this.activeIndex = i;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PureCarouselComponent.prototype, "data", void 0);
    PureCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pure-carousel',
            template: __webpack_require__(/*! ./pure-carousel.component.html */ "./src/app/shared/components/pure-carousel/pure-carousel.component.html"),
            styles: [__webpack_require__(/*! ./pure-carousel.component.scss */ "./src/app/shared/components/pure-carousel/pure-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PureCarouselComponent);
    return PureCarouselComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/pure-carousel/pure-carousel.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/pure-carousel/pure-carousel.module.ts ***!
  \*************************************************************************/
/*! exports provided: PureCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureCarouselModule", function() { return PureCarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pure_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pure-carousel.component */ "./src/app/shared/components/pure-carousel/pure-carousel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PureCarouselModule = /** @class */ (function () {
    function PureCarouselModule() {
    }
    PureCarouselModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_pure_carousel_component__WEBPACK_IMPORTED_MODULE_2__["PureCarouselComponent"]],
            exports: [_pure_carousel_component__WEBPACK_IMPORTED_MODULE_2__["PureCarouselComponent"]]
        })
    ], PureCarouselModule);
    return PureCarouselModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-browse-lotteries-browse-lotteries-module.js.map