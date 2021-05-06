(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-details-details-module"],{

/***/ "./src/app/modules/details/components/details-greeter/details-greeter.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/details/components/details-greeter/details-greeter.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row details-greeter-container fade-in\">\r\n  <div class=\"details-greeter-bg\">\r\n    <img class=\"details-greeter-bg-img\" [src]=\"'assets/images/deli-img.png'\" />\r\n  </div>\r\n  <div class=\"details-greeter-content-container\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <!-- <p class=\"application-deadline\">License Active for {{daysLeft}} days - {{endDate}}</p> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-8\">\r\n          <h1 class=\"title\">{{lotteryName}}</h1>\r\n          <div class=\"address\" *ngFor=\"let lotteryBuilding of lotteryBuildings; let i = index\">\r\n            <h5 *ngIf=\"i < 1\">\r\n              <a (click)=\"scrollTo('map-section')\"\r\n                class=\"btn btn-outline-secondary btn-sm m-btn--icon m-btn--icon-only m-btn--pill margin-right-5\">\r\n                <i class=\"la la-map-marker\"></i>\r\n              </a> {{lotteryBuilding.building.address}},\r\n              {{lotteryBuilding.building.city}}, {{lotteryBuilding.building.state}} {{lotteryBuilding.building.zip}}\r\n            </h5>\r\n            <!-- <h5 *ngIf=\"i == 1\" class=\"m--font-metal-light m--font-thin fade-in stagger\"><a (click)=\"scrollTo('map-section')\" class=\"btn btn-outline-secondary btn-sm m-btn--icon m-btn--icon-only m-btn--pill margin-right-5\"><i class=\"la la-map-marker\"></i></a> ... {{lotteryBuildings.length - i}} more location{{(lotteryBuildings.length - i > 1)?'s':''}}.</h5> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4 text-right\">\r\n          <a href=\"javascript:;\" (click)=\"photoButtonClicked()\"\r\n            class=\"btn btn-outline-secondary btn-lg m-btn m-btn--custom m-btn--icon m-btn--outline m-btn--pill m-btn--air margin-top-20\">\r\n            <span>\r\n              <i class=\"la la-photo\"></i>\r\n              <span>1 Photo{{galleryImages?.length > 1? 's':''}}</span>\r\n            </span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"row col-12\">\r\n          <div class=\"col-md-6\">\r\n            <span (click)=\"scrollTo('units-section')\"\r\n              class=\"btn btn-outline-secondary btn-sm m-btn--icon m-btn--icon-only m-btn--pill margin-right-5\">\r\n              <i class=\"la la-tag\"></i>\r\n            </span>\r\n            GROCERY-RETAIL - 808\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span (click)=\"scrollTo('units-section')\"\r\n              class=\"btn btn-outline-secondary btn-sm m-btn--icon m-btn--icon-only m-btn--pill margin-right-5\">\r\n              <i class=\"la la-certificate\"></i>\r\n            </span>\r\n            Tobacco Retail Dealer License\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/details/components/details-greeter/details-greeter.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/details/components/details-greeter/details-greeter.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host .details-greeter-container {\n  position: relative;\n  min-height: 26.67rem;\n  overflow: hidden;\n  background-color: #2c2e3e; }\n:host .details-greeter-container .details-greeter-bg {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%; }\n:host .details-greeter-container img.details-greeter-bg-img {\n    width: 100%;\n    /*height: 100%;*/\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    border-style: none;\n    -webkit-filter: blur(7px) brightness(0.8);\n            filter: blur(7px) brightness(0.8);\n    display: block;\n    transition: all 1.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-timing-function: ease-out;\n    transition-delay: 0.5s; }\n:host .details-greeter-container .details-greeter-content-container {\n    color: #d6d7e3;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    margin-bottom: 0;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 45%, rgba(0, 0, 0, 0.6) 100%) no-repeat;\n    transition: all 0.25s ease-out 0s;\n    padding-bottom: 5rem;\n    padding-top: 5rem;\n    font-size: 1.2rem;\n    letter-spacing: 1px; }\n:host .details-greeter-container .details-greeter-content-container h1 {\n      color: #fff; }\n:host .details-greeter-container:hover img.details-greeter-bg-img {\n  -webkit-filter: blur(0px) brightness(1);\n          filter: blur(0px) brightness(1);\n  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-timing-function: ease-in; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL2RldGFpbHMtZ3JlZXRlci9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL2RldGFpbHMtZ3JlZXRlci9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXBwXFxtb2R1bGVzXFxkZXRhaWxzXFxjb21wb25lbnRzXFxkZXRhaWxzLWdyZWV0ZXJcXGRldGFpbHMtZ3JlZXRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQStGQSwyQkFBQTtBQWFBLFlBQUE7QUFNQSx1QkFBQTtBQTZCQSxlQUFBO0FBeUNBLFlBQUE7QUFxQkEsWUFBQTtBQ3ZOQTtFQUVJLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBRWhCLHlCRHdDVSxFQUFBO0FDOUNkO0lBU00sa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWSxFQUFBO0FBZmxCO0lBbUJNLFdBQVc7SUFDWCxnQkFBQTtJQUNBLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QscUREb0k2QztJQ25JN0Msb0NBQW9DO0lBQ3BDLHNCQUNGLEVBQUE7QUE5Qko7SUFpQ00sY0RRc0M7SUNQdEMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzSEFBc0g7SUFDdEgsaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0FBNUN6QjtNQStDUSxXREZJLEVBQUE7QUM3Q1o7RUFxREksdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQixzRERzRytDO0VDckcvQyxtQ0FBbUMsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2RldGFpbHMvY29tcG9uZW50cy9kZXRhaWxzLWdyZWV0ZXIvZGV0YWlscy1ncmVldGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vVHlwb2dyYXBoeVxuJGZvbnQtbWFpbjogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LWhlYWRpbmc6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1saW5lYXdlc29tZTogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweC8xIFwiTGluZUF3ZXNvbWVcIjtcbiRmb250LWZvbnRhd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiRodG1sLWZvbnQtc2l6ZS1sZzogMTZweDtcbiRodG1sLWZvbnQtc2l6ZS1tZDogMTVweDtcbiRodG1sLWZvbnQtc2l6ZS1zbTogMTRweDtcbiRodG1sLWZvbnQtc2l6ZS14czogMTNweDtcblxuJGh0bWwtZm9udC13ZWlnaHQ6IDQwMDtcblxuLy8gVGhlbWUgQ29sb3JzXG4kY29sb3Itb2Zmc2V0OiA2JTsgLy8gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIGxpZ2h0ZXIgYW5kIGRhcmtlciB2YXJpZW50cyBvZiBhIHNwZWNpZmljIGNvbG9yXG5cbiRiYXNlOiAjZmFmYWZhOyAvL3VzZWQgcHJpbWFyaWx5IGFzIG9mZi13aGl0ZSBib2R5IGJhY2tncm91bmQgY29sb3JcblxuJHByaW1hcnk6ICMwMjAwNjM7XG4kc2Vjb25kYXJ5OiAjZmFmYWZhO1xuJHNlY29uZGFyeS1ibHVlOiByZ2IoMTA5LCAxNzgsIDI1NSk7IC8vIHdlIHNob3VsZCByZXBsYWNlIHRoaXNcbiRhY2NlbnQ6ICNmY2IzMjM7IC8vIzAwYzVkYztcbiRmb2N1czogIzk4MTZmNDtcblxuJHN1Y2Nlc3M6ICMwMGU2YWI7XG4kd2FybmluZzogI2ZmYjgyMjtcbiRkYW5nZXI6ICNmZjJiMmI7IC8vI2Y0NTE2YztcbiRpbmZvOiAjNTU3OGViOyAvLyMzNmEzZjc7XG5cbiRtZXRhbDogI2M0YzVkNjtcbiRtZXRhbC1saWdodDogbGlnaHRlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuJG1ldGFsLWRhcms6IGRhcmtlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuXG4vLyBncmV5c1xuJGxpZ2h0OiAjZmZmO1xuJGRhcms6ICMyYzJlM2U7XG4kZ3JleS0yMDogIzMzMzMzMztcbiRncmV5LTMwOiAjNGQ0ZDRkO1xuJGdyZXktNTA6ICM4MDgwODA7XG4kZ3JleS03MDogI2IzYjNiMztcbiRncmV5LTkwOiAjZTZlNmU2O1xuJGdyZXktOTU6ICNmMmYyZjI7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbi8vIEV4dGVuZGVkIENvbG9yIFBhbGV0dGVcbi8vIFRPRE86IFJldmlldyB0aGVzZSBjb2xvcnNcbiRkYXJrLWJsdWU6ICMwMjM5NzA7XG4kYmx1ZTogIzAxN2FjZTtcbiRjZXJ1bGVhbjogIzAxN2FjZTtcbiRsaWdodC1ibHVlOiAjY2NlYWZmO1xuJHBhbGUtYmx1ZTogI2YxZjlmZjtcbiRkYXJrLXRlYWw6ICMwMDY0NmU7XG4kdGVhbDogIzAwYzFkNDtcbiRsaWdodC10ZWFsOiAjY2NmYWZmO1xuJHBhbGUtdGVhbDogI2Y1ZmVmZjtcbiRkYXJrLWdyZWVuOiAjMGE1YzQwO1xuJGdyZWVuOiAjMTRiODgxO1xuJGxpZ2h0LWdyZWVuOiAjYTNmNWQ5O1xuJHBhbGUtZ3JlZW46ICNmNmZlZmI7XG4kZGFyay15ZWxsb3c6ICM5OTc0MDA7XG4keWVsbG93OiAjZmZjZTMzO1xuJGxpZ2h0LXllbGxvdzogI2ZmZjNjYztcbiRwYWxlLXllbGxvdzogI2ZmZmRmNTtcbiRkYXJrLXJlZDogIzY2MGEwMDtcbiRyZWQ6ICNjYzE0MDA7XG4kbGlnaHQtcmVkOiAjZmZkMWNjO1xuJHBhbGUtcmVkOiAjZmZmNmY1O1xuXG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcImFjY2VudFwiOiAkYWNjZW50LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsIFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmcsIFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImluZm9cIjogJGluZm8sXG4gIFwibWV0YWxcIjogJG1ldGFsLFxuICBcImZvY3VzXCI6ICRmb2N1cyxcbiAgXCJncmV5LTIwXCI6ICRncmV5LTIwLCBcbiAgXCJncmV5LTMwXCI6ICRncmV5LTMwLFxuICBcImdyZXktNTBcIjogJGdyZXktNTAsXG4gIFwiZ3JleS03MFwiOiAkZ3JleS03MCxcbiAgXCJncmV5LTkwXCI6ICRncmV5LTkwLFxuICBcImdyZXktOTVcIjogJGdyZXktOTUsXG4gIFwiYmFzZVwiOiAkYmFzZSxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJ3aGl0ZVwiOiAkd2hpdGUsXG4gIFwiYmxhY2tcIjogJGJsYWNrLFxuICBcImJsdWVcIjogJGJsdWVcbik7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuJGd0LXNtYWxsLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBzbSkgIWRlZmF1bHQ7IC8vIDU3NlxuJGd0LW1lZGl1bS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbWQpICFkZWZhdWx0OyAvLyA3NjhcbiRndC1sYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbGcpICFkZWZhdWx0OyAvLyA5OTJcbiRndC14bGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHhsKSAhZGVmYXVsdDsgLy8gMTIwMFxuXG4vKiBTaGFkb3dzICovXG4kc2hhZG93LXNtOiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xuJHNoYWRvdy1tZDogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjA4KTsgLy9kZWZhdWx0XG4kc2hhZG93LWxnOiAwIDE1cHggMzBweCAwIHJnYmEoMCwwLDAsMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuJHNoYWRvdy1lbGV2YXRlOiAkc2hhZG93LWxnOyAvLyBvbiBob3ZlclxuXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbiRzcGFjaW5nLXh4czogMC4zMzNyZW07ICAgICAvLyBzbWFsbCBnYXAgICAgICAgICAgIC0gNXB4ICAgICh4eHMpXG4kc3BhY2luZy14czogMC42NjdyZW07ICAgICAgLy8gUmVsYXRlZCBEaXJlY3RseSAgICAtIDEwcHggICAoeHMpXG4kc3BhY2luZy1zbTogMXJlbTsgICAgICAgICAgLy8gUmVsYXRlZCBJbmRpcmVjdGx5ICAtIDE1cHggICAoc20pXG4kc3BhY2luZy1tZDogMS4zM3JlbTsgICAgICAgLy8gUmVsYXRlZCBHcm91cCAgICAgICAtIDIwcHggICAobWQpICAvL2RlZmF1bHRcbiRzcGFjaW5nLWxnOiAycmVtOyAgICAgICAgICAvLyBVbnJlbGF0ZWQgR3JvdXAgICAgIC0gMzBweCAgIChsZylcbiRzcGFjaW5nLXhsOiAyLjY2N3JlbTsgICAgICAvLyBOZXcgU2VjdGlvbiAgICAgICAgIC0gNDBweCAgICh4bClcbiRzcGFjaW5nLXh4bDogNHJlbTsgICAgICAgICAvLyBOZXcgU2VjdGlvbiAoTGFyZ2UpIC0gNjBweCAgICh4eGwpXG5cbiRzcGFjaW5nLXNpemVzOiAoXG4gIFwiMFwiOiAwLFxuICBcIjVcIjogJHNwYWNpbmcteHhzLFxuICBcIjEwXCI6ICRzcGFjaW5nLXhzLFxuICBcIjE1XCI6ICRzcGFjaW5nLXNtLFxuICBcIjIwXCI6ICRzcGFjaW5nLW1kLFxuICBcIjMwXCI6ICRzcGFjaW5nLWxnLFxuICBcIjQwXCI6ICRzcGFjaW5nLXhsLFxuICBcIjYwXCI6ICRzcGFjaW5nLXh4bCxcbiAgXCIxNS1lbVwiOiAxLjVyZW0sXG4gIFwiMjItZW1cIjogMi4ycmVtLFxuICBcInh4c1wiOiAkc3BhY2luZy14eHMsXG4gIFwieHNcIjogJHNwYWNpbmcteHMsXG4gIFwic21cIjogJHNwYWNpbmctc20sXG4gIFwibWRcIjogJHNwYWNpbmctbWQsXG4gIFwibGdcIjogJHNwYWNpbmctbGcsXG4gIFwieGxcIjogJHNwYWNpbmcteGwsXG4gIFwieHhsXCI6ICRzcGFjaW5nLXh4bCwgIFxuICApO1xuXG4vKiBBbmltYXRpb25zICovXG4kYW5pbWF0aW9uLXhzOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tc2g6IGFsbCAwLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1tZDogYWxsIDAuMzVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpOyAvL2RlZmF1bHRcbiRhbmltYXRpb24tbGc6IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14bDogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXh4bDogYWxsIDEuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cbiRhbmltYXRpb24tZGVmYXVsdDogJGFuaW1hdGlvbi1tZDtcblxuJGFuaW1hdGlvbi1mYWRlLWluOiBmYWRlLWluIDFzIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtb3V0OiBmYWRlLW91dCAxcyBlYXNlLW91dCBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLXRvcDogZmFkZS1pbi10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbTogZmFkZS1pbi1ib3R0b20gMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcjogcHVmZi1pbi1jZW50ZXIgMC43cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcjogcHVmZi1vdXQtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgYm90aDtcbiRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbDogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcbiRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoOyAvLyBmb3IgdGV4dFxuJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wOiBzY2FsZS1pbi12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcDogc2NhbGUtb3V0LXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG4kYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyBpbmZpbml0ZTtcbiRhbmltYXRpb24tcHVsc2UtMzogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgMztcbiRhbmltYXRpb24tcHVsc2UtMTogc2hhZG93LXB1bHNlIDFzIDE7XG5cbi8vIFlvdSBjYW4gdXNlIGFueSBvZiB0aGVzZSBuYW1lcyB0byBhbmltYXRlIEhUTUwgZWxlbWVudHMgb24gaW5pdGlhdGlvblxuJGFuaW1hdGlvbnM6IChcbiAgXCJmYWRlLWluXCI6ICRhbmltYXRpb24tZmFkZS1pbixcbiAgXCJmYWRlLW91dFwiOiAkYW5pbWF0aW9uLWZhZGUtb3V0LFxuICBcImZhZGUtaW4tdG9wXCI6ICRhbmltYXRpb24tZmFkZS1pbi10b3AsXG4gIFwiZmFkZS1pbi1ib3R0b21cIjogJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbSxcbiAgXCJwdWZmLWluLWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyLFxuICBcInB1ZmYtb3V0LWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcixcbiAgXCJzaGFrZS1ob3Jpem9udGFsXCI6ICRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbCxcbiAgXCJmb2N1cy1pbi1jb250cmFjdC1iY2tcIjogJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2ssXG4gIFwic2NhbGUtaW4tdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3AsXG4gIFwic2NhbGUtb3V0LXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcCxcbiAgXCJwdWxzZS1pbmZpbml0ZVwiOiAkYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlLFxuICBcInB1bHNlLTNcIjogJGFuaW1hdGlvbi1wdWxzZS0zLFxuICBcInB1bHNlLTFcIjogJGFuaW1hdGlvbi1wdWxzZS0xXG4pO1xuXG4vKiBCb3JkZXJzICovXG4kYm9yZGVyLXNpemUtc206IDAuMTI1cmVtO1xuJGJvcmRlci1zaXplLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1zaXplLWxnOiAwLjVyZW07XG4kYm9yZGVyLXNpemUtMTogMXB4O1xuJGJvcmRlci1zaXplLTI6IDJweDtcbiRib3JkZXItc2l6ZS0zOiAzcHg7XG4kYm9yZGVyLXNpemUtNTogNXB4O1xuJGJvcmRlci1zaXplLTEwOiAxMHB4O1xuXG4kYm9yZGVyLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1zaXplLXNtLFxuICBcIm1kXCI6ICRib3JkZXItc2l6ZS1tZCxcbiAgXCJsZ1wiOiAkYm9yZGVyLXNpemUtbGcsXG4gIFwiMVwiOiAkYm9yZGVyLXNpemUtMSxcbiAgXCIyXCI6ICRib3JkZXItc2l6ZS0yLFxuICBcIjNcIjogJGJvcmRlci1zaXplLTMsXG4gIFwiNVwiOiAkYm9yZGVyLXNpemUtNSxcbiAgXCIxMFwiOiAkYm9yZGVyLXNpemUtMTBcbik7XG5cbi8qIENvcm5lcnMgKi9cbiRib3JkZXItcmFkaXVzLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItcmFkaXVzLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNXJlbTtcbiRib3JkZXItcmFkaXVzLTI6IDJweDtcbiRib3JkZXItcmFkaXVzLTQ6IDRweDtcbiRib3JkZXItcmFkaXVzLTY6IDZweDtcbiRib3JkZXItcmFkaXVzLTEwOiAxMHB4O1xuJGJvcmRlci1yYWRpdXMtMTU6IDE1cHg7XG4kYm9yZGVyLXJhZGl1cy0yMDogMjBweDtcbiRib3JkZXItcmFkaXVzLWhhbGY6IDUwJTtcbiRib3JkZXItcmFkaXVzLWZ1bGw6IDEwMCU7XG5cbiRib3JkZXItcmFkaXVzLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1yYWRpdXMtc20sXG4gIFwibWRcIjogJGJvcmRlci1yYWRpdXMtbWQsIC8vZGVmYXVsdFxuICBcImxnXCI6ICRib3JkZXItcmFkaXVzLWxnLFxuICBcIjJcIjogJGJvcmRlci1yYWRpdXMtMixcbiAgXCI0XCI6ICRib3JkZXItcmFkaXVzLTQsXG4gIFwiNlwiOiAkYm9yZGVyLXJhZGl1cy02LFxuICBcIjEwXCI6ICRib3JkZXItcmFkaXVzLTEwLFxuICBcIjE1XCI6ICRib3JkZXItcmFkaXVzLTE1LFxuICBcIjIwXCI6ICRib3JkZXItcmFkaXVzLTIwLFxuICBcImhhbGZcIjogJGJvcmRlci1yYWRpdXMtaGFsZixcbiAgXCJmdWxsXCI6ICRib3JkZXItcmFkaXVzLWZ1bGwsXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIC5kZXRhaWxzLWdyZWV0ZXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMjYuNjdyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyBwYWRkaW5nLXRvcDogMzMuMzMlOyAvLzM6MSBhc3BlY3QgcmF0aW9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcblxuICAgIC5kZXRhaWxzLWdyZWV0ZXItYmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgaW1nLmRldGFpbHMtZ3JlZXRlci1iZy1pbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvKmhlaWdodDogMTAwJTsqL1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICBmaWx0ZXI6IGJsdXIoN3B4KSBicmlnaHRuZXNzKDAuOCk7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRyYW5zaXRpb246ICRhbmltYXRpb24teHhsO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41c1xuICAgIH1cblxuICAgIC5kZXRhaWxzLWdyZWV0ZXItY29udGVudC1jb250YWluZXIge1xuICAgICAgY29sb3I6ICRtZXRhbC1saWdodDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuMykgNDUlLCByZ2JhKDAsIDAsIDAsIDAuNikgMTAwJSkgbm8tcmVwZWF0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2Utb3V0IDBzO1xuICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gICAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogJGxpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWxzLWdyZWV0ZXItY29udGFpbmVyOmhvdmVyIGltZy5kZXRhaWxzLWdyZWV0ZXItYmctaW1nIHtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpO1xuICAgIHRyYW5zaXRpb246ICRhbmltYXRpb24tbWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/details/components/details-greeter/details-greeter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/details/components/details-greeter/details-greeter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DetailsGreeterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsGreeterComponent", function() { return DetailsGreeterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsGreeterComponent = /** @class */ (function () {
    function DetailsGreeterComponent(cdRef) {
        this.cdRef = cdRef;
        this.onOpenGalleryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.galleryImages = [];
    }
    DetailsGreeterComponent.prototype.ngOnInit = function () {
        console.log("UNITS: ", this.units);
        var allUnitIncomeRequirements = lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"](lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.units, function (item) { return item.unitIncome; }));
        this.minHouseholdSize = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](lodash__WEBPACK_IMPORTED_MODULE_1__["minBy"](allUnitIncomeRequirements, 'houseHoldSize'), 'houseHoldSize');
        this.maxHouseholdSize = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](lodash__WEBPACK_IMPORTED_MODULE_1__["maxBy"](allUnitIncomeRequirements, 'houseHoldSize'), 'houseHoldSize');
        this.minIncome = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](lodash__WEBPACK_IMPORTED_MODULE_1__["minBy"](allUnitIncomeRequirements, 'minimumIncome'), 'minimumIncome');
        this.maxIncome = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](lodash__WEBPACK_IMPORTED_MODULE_1__["maxBy"](allUnitIncomeRequirements, 'maximumIncome'), 'maximumIncome');
        this.cdRef.markForCheck();
    };
    DetailsGreeterComponent.prototype.photoButtonClicked = function () {
        this.onOpenGalleryEvent.emit('open');
    };
    DetailsGreeterComponent.prototype.scrollTo = function (element) {
        var elem = document.querySelector('#' + element);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }
    };
    DetailsGreeterComponent.prototype.printDetailsPage = function () {
        window.print();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsGreeterComponent.prototype, "lotteryName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsGreeterComponent.prototype, "lotteryBuildings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsGreeterComponent.prototype, "defaultImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsGreeterComponent.prototype, "units", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsGreeterComponent.prototype, "endDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsGreeterComponent.prototype, "daysLeft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailsGreeterComponent.prototype, "onOpenGalleryEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsGreeterComponent.prototype, "galleryImages", void 0);
    DetailsGreeterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-greeter',
            template: __webpack_require__(/*! ./details-greeter.component.html */ "./src/app/modules/details/components/details-greeter/details-greeter.component.html"),
            styles: [__webpack_require__(/*! ./details-greeter.component.scss */ "./src/app/modules/details/components/details-greeter/details-greeter.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DetailsGreeterComponent);
    return DetailsGreeterComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/components/details-map/details-map.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/details/components/details-map/details-map.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <div class=\"container\">\r\n    <div class=\"row margin-top-40 margin-bottom-40\">\r\n      <div class=\"col-12 map-section\">\r\n        <app-nearby [mapdata]=\"buildingLocations\" [nearby]=\"nearbyLocations\">\r\n        </app-nearby>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/details/components/details-map/details-map.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/details/components/details-map/details-map.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL2RldGFpbHMtbWFwL0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBK0ZBLDJCQUFBO0FBYUEsWUFBQTtBQU1BLHVCQUFBO0FBNkJBLGVBQUE7QUF5Q0EsWUFBQTtBQXFCQSxZQUFBIiwiZmlsZSI6InByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL2RldGFpbHMtbWFwL2RldGFpbHMtbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vVHlwb2dyYXBoeVxuJGZvbnQtbWFpbjogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LWhlYWRpbmc6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1saW5lYXdlc29tZTogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweC8xIFwiTGluZUF3ZXNvbWVcIjtcbiRmb250LWZvbnRhd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiRodG1sLWZvbnQtc2l6ZS1sZzogMTZweDtcbiRodG1sLWZvbnQtc2l6ZS1tZDogMTVweDtcbiRodG1sLWZvbnQtc2l6ZS1zbTogMTRweDtcbiRodG1sLWZvbnQtc2l6ZS14czogMTNweDtcblxuJGh0bWwtZm9udC13ZWlnaHQ6IDQwMDtcblxuLy8gVGhlbWUgQ29sb3JzXG4kY29sb3Itb2Zmc2V0OiA2JTsgLy8gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIGxpZ2h0ZXIgYW5kIGRhcmtlciB2YXJpZW50cyBvZiBhIHNwZWNpZmljIGNvbG9yXG5cbiRiYXNlOiAjZmFmYWZhOyAvL3VzZWQgcHJpbWFyaWx5IGFzIG9mZi13aGl0ZSBib2R5IGJhY2tncm91bmQgY29sb3JcblxuJHByaW1hcnk6ICMwMjAwNjM7XG4kc2Vjb25kYXJ5OiAjZmFmYWZhO1xuJHNlY29uZGFyeS1ibHVlOiByZ2IoMTA5LCAxNzgsIDI1NSk7IC8vIHdlIHNob3VsZCByZXBsYWNlIHRoaXNcbiRhY2NlbnQ6ICNmY2IzMjM7IC8vIzAwYzVkYztcbiRmb2N1czogIzk4MTZmNDtcblxuJHN1Y2Nlc3M6ICMwMGU2YWI7XG4kd2FybmluZzogI2ZmYjgyMjtcbiRkYW5nZXI6ICNmZjJiMmI7IC8vI2Y0NTE2YztcbiRpbmZvOiAjNTU3OGViOyAvLyMzNmEzZjc7XG5cbiRtZXRhbDogI2M0YzVkNjtcbiRtZXRhbC1saWdodDogbGlnaHRlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuJG1ldGFsLWRhcms6IGRhcmtlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuXG4vLyBncmV5c1xuJGxpZ2h0OiAjZmZmO1xuJGRhcms6ICMyYzJlM2U7XG4kZ3JleS0yMDogIzMzMzMzMztcbiRncmV5LTMwOiAjNGQ0ZDRkO1xuJGdyZXktNTA6ICM4MDgwODA7XG4kZ3JleS03MDogI2IzYjNiMztcbiRncmV5LTkwOiAjZTZlNmU2O1xuJGdyZXktOTU6ICNmMmYyZjI7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbi8vIEV4dGVuZGVkIENvbG9yIFBhbGV0dGVcbi8vIFRPRE86IFJldmlldyB0aGVzZSBjb2xvcnNcbiRkYXJrLWJsdWU6ICMwMjM5NzA7XG4kYmx1ZTogIzAxN2FjZTtcbiRjZXJ1bGVhbjogIzAxN2FjZTtcbiRsaWdodC1ibHVlOiAjY2NlYWZmO1xuJHBhbGUtYmx1ZTogI2YxZjlmZjtcbiRkYXJrLXRlYWw6ICMwMDY0NmU7XG4kdGVhbDogIzAwYzFkNDtcbiRsaWdodC10ZWFsOiAjY2NmYWZmO1xuJHBhbGUtdGVhbDogI2Y1ZmVmZjtcbiRkYXJrLWdyZWVuOiAjMGE1YzQwO1xuJGdyZWVuOiAjMTRiODgxO1xuJGxpZ2h0LWdyZWVuOiAjYTNmNWQ5O1xuJHBhbGUtZ3JlZW46ICNmNmZlZmI7XG4kZGFyay15ZWxsb3c6ICM5OTc0MDA7XG4keWVsbG93OiAjZmZjZTMzO1xuJGxpZ2h0LXllbGxvdzogI2ZmZjNjYztcbiRwYWxlLXllbGxvdzogI2ZmZmRmNTtcbiRkYXJrLXJlZDogIzY2MGEwMDtcbiRyZWQ6ICNjYzE0MDA7XG4kbGlnaHQtcmVkOiAjZmZkMWNjO1xuJHBhbGUtcmVkOiAjZmZmNmY1O1xuXG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcImFjY2VudFwiOiAkYWNjZW50LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsIFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmcsIFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImluZm9cIjogJGluZm8sXG4gIFwibWV0YWxcIjogJG1ldGFsLFxuICBcImZvY3VzXCI6ICRmb2N1cyxcbiAgXCJncmV5LTIwXCI6ICRncmV5LTIwLCBcbiAgXCJncmV5LTMwXCI6ICRncmV5LTMwLFxuICBcImdyZXktNTBcIjogJGdyZXktNTAsXG4gIFwiZ3JleS03MFwiOiAkZ3JleS03MCxcbiAgXCJncmV5LTkwXCI6ICRncmV5LTkwLFxuICBcImdyZXktOTVcIjogJGdyZXktOTUsXG4gIFwiYmFzZVwiOiAkYmFzZSxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJ3aGl0ZVwiOiAkd2hpdGUsXG4gIFwiYmxhY2tcIjogJGJsYWNrLFxuICBcImJsdWVcIjogJGJsdWVcbik7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuJGd0LXNtYWxsLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBzbSkgIWRlZmF1bHQ7IC8vIDU3NlxuJGd0LW1lZGl1bS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbWQpICFkZWZhdWx0OyAvLyA3NjhcbiRndC1sYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbGcpICFkZWZhdWx0OyAvLyA5OTJcbiRndC14bGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHhsKSAhZGVmYXVsdDsgLy8gMTIwMFxuXG4vKiBTaGFkb3dzICovXG4kc2hhZG93LXNtOiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xuJHNoYWRvdy1tZDogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjA4KTsgLy9kZWZhdWx0XG4kc2hhZG93LWxnOiAwIDE1cHggMzBweCAwIHJnYmEoMCwwLDAsMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuJHNoYWRvdy1lbGV2YXRlOiAkc2hhZG93LWxnOyAvLyBvbiBob3ZlclxuXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbiRzcGFjaW5nLXh4czogMC4zMzNyZW07ICAgICAvLyBzbWFsbCBnYXAgICAgICAgICAgIC0gNXB4ICAgICh4eHMpXG4kc3BhY2luZy14czogMC42NjdyZW07ICAgICAgLy8gUmVsYXRlZCBEaXJlY3RseSAgICAtIDEwcHggICAoeHMpXG4kc3BhY2luZy1zbTogMXJlbTsgICAgICAgICAgLy8gUmVsYXRlZCBJbmRpcmVjdGx5ICAtIDE1cHggICAoc20pXG4kc3BhY2luZy1tZDogMS4zM3JlbTsgICAgICAgLy8gUmVsYXRlZCBHcm91cCAgICAgICAtIDIwcHggICAobWQpICAvL2RlZmF1bHRcbiRzcGFjaW5nLWxnOiAycmVtOyAgICAgICAgICAvLyBVbnJlbGF0ZWQgR3JvdXAgICAgIC0gMzBweCAgIChsZylcbiRzcGFjaW5nLXhsOiAyLjY2N3JlbTsgICAgICAvLyBOZXcgU2VjdGlvbiAgICAgICAgIC0gNDBweCAgICh4bClcbiRzcGFjaW5nLXh4bDogNHJlbTsgICAgICAgICAvLyBOZXcgU2VjdGlvbiAoTGFyZ2UpIC0gNjBweCAgICh4eGwpXG5cbiRzcGFjaW5nLXNpemVzOiAoXG4gIFwiMFwiOiAwLFxuICBcIjVcIjogJHNwYWNpbmcteHhzLFxuICBcIjEwXCI6ICRzcGFjaW5nLXhzLFxuICBcIjE1XCI6ICRzcGFjaW5nLXNtLFxuICBcIjIwXCI6ICRzcGFjaW5nLW1kLFxuICBcIjMwXCI6ICRzcGFjaW5nLWxnLFxuICBcIjQwXCI6ICRzcGFjaW5nLXhsLFxuICBcIjYwXCI6ICRzcGFjaW5nLXh4bCxcbiAgXCIxNS1lbVwiOiAxLjVyZW0sXG4gIFwiMjItZW1cIjogMi4ycmVtLFxuICBcInh4c1wiOiAkc3BhY2luZy14eHMsXG4gIFwieHNcIjogJHNwYWNpbmcteHMsXG4gIFwic21cIjogJHNwYWNpbmctc20sXG4gIFwibWRcIjogJHNwYWNpbmctbWQsXG4gIFwibGdcIjogJHNwYWNpbmctbGcsXG4gIFwieGxcIjogJHNwYWNpbmcteGwsXG4gIFwieHhsXCI6ICRzcGFjaW5nLXh4bCwgIFxuICApO1xuXG4vKiBBbmltYXRpb25zICovXG4kYW5pbWF0aW9uLXhzOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tc2g6IGFsbCAwLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1tZDogYWxsIDAuMzVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpOyAvL2RlZmF1bHRcbiRhbmltYXRpb24tbGc6IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14bDogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXh4bDogYWxsIDEuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cbiRhbmltYXRpb24tZGVmYXVsdDogJGFuaW1hdGlvbi1tZDtcblxuJGFuaW1hdGlvbi1mYWRlLWluOiBmYWRlLWluIDFzIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtb3V0OiBmYWRlLW91dCAxcyBlYXNlLW91dCBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLXRvcDogZmFkZS1pbi10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbTogZmFkZS1pbi1ib3R0b20gMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcjogcHVmZi1pbi1jZW50ZXIgMC43cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcjogcHVmZi1vdXQtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgYm90aDtcbiRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbDogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcbiRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoOyAvLyBmb3IgdGV4dFxuJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wOiBzY2FsZS1pbi12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcDogc2NhbGUtb3V0LXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG4kYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyBpbmZpbml0ZTtcbiRhbmltYXRpb24tcHVsc2UtMzogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgMztcbiRhbmltYXRpb24tcHVsc2UtMTogc2hhZG93LXB1bHNlIDFzIDE7XG5cbi8vIFlvdSBjYW4gdXNlIGFueSBvZiB0aGVzZSBuYW1lcyB0byBhbmltYXRlIEhUTUwgZWxlbWVudHMgb24gaW5pdGlhdGlvblxuJGFuaW1hdGlvbnM6IChcbiAgXCJmYWRlLWluXCI6ICRhbmltYXRpb24tZmFkZS1pbixcbiAgXCJmYWRlLW91dFwiOiAkYW5pbWF0aW9uLWZhZGUtb3V0LFxuICBcImZhZGUtaW4tdG9wXCI6ICRhbmltYXRpb24tZmFkZS1pbi10b3AsXG4gIFwiZmFkZS1pbi1ib3R0b21cIjogJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbSxcbiAgXCJwdWZmLWluLWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyLFxuICBcInB1ZmYtb3V0LWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcixcbiAgXCJzaGFrZS1ob3Jpem9udGFsXCI6ICRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbCxcbiAgXCJmb2N1cy1pbi1jb250cmFjdC1iY2tcIjogJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2ssXG4gIFwic2NhbGUtaW4tdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3AsXG4gIFwic2NhbGUtb3V0LXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcCxcbiAgXCJwdWxzZS1pbmZpbml0ZVwiOiAkYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlLFxuICBcInB1bHNlLTNcIjogJGFuaW1hdGlvbi1wdWxzZS0zLFxuICBcInB1bHNlLTFcIjogJGFuaW1hdGlvbi1wdWxzZS0xXG4pO1xuXG4vKiBCb3JkZXJzICovXG4kYm9yZGVyLXNpemUtc206IDAuMTI1cmVtO1xuJGJvcmRlci1zaXplLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1zaXplLWxnOiAwLjVyZW07XG4kYm9yZGVyLXNpemUtMTogMXB4O1xuJGJvcmRlci1zaXplLTI6IDJweDtcbiRib3JkZXItc2l6ZS0zOiAzcHg7XG4kYm9yZGVyLXNpemUtNTogNXB4O1xuJGJvcmRlci1zaXplLTEwOiAxMHB4O1xuXG4kYm9yZGVyLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1zaXplLXNtLFxuICBcIm1kXCI6ICRib3JkZXItc2l6ZS1tZCxcbiAgXCJsZ1wiOiAkYm9yZGVyLXNpemUtbGcsXG4gIFwiMVwiOiAkYm9yZGVyLXNpemUtMSxcbiAgXCIyXCI6ICRib3JkZXItc2l6ZS0yLFxuICBcIjNcIjogJGJvcmRlci1zaXplLTMsXG4gIFwiNVwiOiAkYm9yZGVyLXNpemUtNSxcbiAgXCIxMFwiOiAkYm9yZGVyLXNpemUtMTBcbik7XG5cbi8qIENvcm5lcnMgKi9cbiRib3JkZXItcmFkaXVzLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItcmFkaXVzLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNXJlbTtcbiRib3JkZXItcmFkaXVzLTI6IDJweDtcbiRib3JkZXItcmFkaXVzLTQ6IDRweDtcbiRib3JkZXItcmFkaXVzLTY6IDZweDtcbiRib3JkZXItcmFkaXVzLTEwOiAxMHB4O1xuJGJvcmRlci1yYWRpdXMtMTU6IDE1cHg7XG4kYm9yZGVyLXJhZGl1cy0yMDogMjBweDtcbiRib3JkZXItcmFkaXVzLWhhbGY6IDUwJTtcbiRib3JkZXItcmFkaXVzLWZ1bGw6IDEwMCU7XG5cbiRib3JkZXItcmFkaXVzLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1yYWRpdXMtc20sXG4gIFwibWRcIjogJGJvcmRlci1yYWRpdXMtbWQsIC8vZGVmYXVsdFxuICBcImxnXCI6ICRib3JkZXItcmFkaXVzLWxnLFxuICBcIjJcIjogJGJvcmRlci1yYWRpdXMtMixcbiAgXCI0XCI6ICRib3JkZXItcmFkaXVzLTQsXG4gIFwiNlwiOiAkYm9yZGVyLXJhZGl1cy02LFxuICBcIjEwXCI6ICRib3JkZXItcmFkaXVzLTEwLFxuICBcIjE1XCI6ICRib3JkZXItcmFkaXVzLTE1LFxuICBcIjIwXCI6ICRib3JkZXItcmFkaXVzLTIwLFxuICBcImhhbGZcIjogJGJvcmRlci1yYWRpdXMtaGFsZixcbiAgXCJmdWxsXCI6ICRib3JkZXItcmFkaXVzLWZ1bGwsXG4pO1xuIl19 */"

/***/ }),

/***/ "./src/app/modules/details/components/details-map/details-map.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/details/components/details-map/details-map.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DetailsMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsMapComponent", function() { return DetailsMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_models_marker_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/models/marker.model */ "./src/app/shared/models/marker.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsMapComponent = /** @class */ (function () {
    function DetailsMapComponent() {
        this.buildingLocations = [];
        this.nearbyLocations = [];
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.mapFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            school: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            park: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            hospital: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
        });
    }
    DetailsMapComponent.prototype.onUpdate = function (arg) {
        this.eventsSubject.next(arg);
    };
    DetailsMapComponent.prototype.selectAllFormValues = function () {
        var _this = this;
        Object.keys(this.mapFilterForm.controls)
            .forEach(function (key) {
            return _this.mapFilterForm.get(key).setValue(true);
        });
    };
    DetailsMapComponent.prototype.clearFormValues = function () {
        this.mapFilterForm.reset();
    };
    DetailsMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.lotteryBuildings) {
            this.lotteryBuildings.forEach(function (b, i) {
                var m = new _shared_models_marker_model__WEBPACK_IMPORTED_MODULE_4__["MarkerModel"]();
                m.id = b.building.buildingId;
                m.index = i + 1;
                m.lat = b.building.latitude;
                m.lng = b.building.longitude;
                m.label = b.building.address;
                m.address = b.building.address;
                m.city = b.building.city;
                m.state = b.building.state;
                m.zip = b.building.zip;
                m.type = 'building';
                _this.buildingLocations.push(m);
                if (b.building.nearbyPlaces) {
                    b.building.nearbyPlaces.forEach(function (p, j) {
                        var n = new _shared_models_marker_model__WEBPACK_IMPORTED_MODULE_4__["MarkerModel"]();
                        n.id = p.nearbyPlaceId;
                        n.lat = p.latitude;
                        n.lng = p.longitude;
                        n.label = p.nearbyPlaceName;
                        n.type = p.placeType;
                        n.trainName = p.trainName;
                        _this.nearbyLocations.push(n);
                    });
                }
                // maps buildings to nearby place subways, then filters distinct
                _this.subways = _this.lotteryBuildings.map(function (lb) { return lb.building; }).map(function (b) { return b.nearbyPlaces.filter(function (n) { return n.trainName; }).map(function (n) { return n.trainName; }); })
                    .map(function (s) { return s.join().replace(/\s/, ''); })
                    .join(',').split(',')
                    .filter(function (e, i, a) { return a.indexOf(e) === i; });
            });
            this.nearbyLocations = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](this.nearbyLocations);
        }
        this.mapFormSubscription = this.mapFilterForm.valueChanges.subscribe(function (value) {
            _this.onUpdate(value);
        });
    };
    DetailsMapComponent.prototype.ngOnDestroy = function () {
        this.mapFormSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsMapComponent.prototype, "lotteryBuildings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsMapComponent.prototype, "subways", void 0);
    DetailsMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-map',
            template: __webpack_require__(/*! ./details-map.component.html */ "./src/app/modules/details/components/details-map/details-map.component.html"),
            styles: [__webpack_require__(/*! ./details-map.component.scss */ "./src/app/modules/details/components/details-map/details-map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsMapComponent);
    return DetailsMapComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/components/details-nav-bar/details-nav-bar.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/details/components/details-nav-bar/details-nav-bar.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [class.discard-wrapper-transform]=\"isToolBarVisible\"\r\n  (handleChangingVisible)=\"handleChangingToolBarVisible($event)\"\r\n  scrollSticky>\r\n  <div class=\"toolbar-container margin-bottom-20px fade-in-bottom\" [class.sticky-toolbar]=\"isToolBarVisible\">\r\n    <ul class=\"toolbar\" [class.container]=\"isToolBarVisible\">\r\n      <li class=\"fade-in-bottom stagger\">\r\n        <a class=\"nav-link\" (click)=\"scrollTo('overview-section')\">\r\n          <i class=\"la la-info-circle\"></i> Details\r\n        </a>\r\n      </li>\r\n      <li class=\"fade-in-bottom stagger\">\r\n        <a class=\"nav-link\" (click)=\"scrollTo('units-section')\"><i class=\"la la-certificate\"></i> Licenses</a>\r\n      </li>\r\n      <li class=\"fade-in-bottom stagger\">\r\n        <a class=\"nav-link\" (click)=\"scrollTo('map-section')\"><i class=\"la la-map-marker\"></i> Map</a>\r\n      </li>\r\n      <li class=\"fade-in-bottom stagger\">\r\n        <a class=\"nav-link\" (click)=\"scrollTo('photos-section')\"><i class=\"la la-photo\"></i> Photos</a>\r\n      </li>\r\n      <li class=\"fade-in-bottom stagger\">\r\n        <a class=\"nav-link\" (click)=\"scrollTo('who-should-apply-section')\"><i class=\"la la-question-circle\"></i> Who Should Apply</a>\r\n      </li>\r\n      <li class=\"fade-in-bottom stagger\">\r\n        <a class=\"nav-link\" (click)=\"scrollTo('how-to-apply-section')\">\r\n          <i class=\"la la-edit\"></i> How to\r\n          Apply\r\n        </a>\r\n      </li>\r\n      <li class=\"fade-in stagger\" id=\"btnApply\">\r\n        <button class=\"btn btn-accent m-btn m-btn--icon m-btn--pill fade-in\"\r\n                (click)=\"onLotteryApply()\">\r\n          <i class=\"la la-send\"></i> File A Complaint\r\n        </button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/details/components/details-nav-bar/details-nav-bar.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/details/components/details-nav-bar/details-nav-bar.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host {\n  background-color: #fff;\n  display: block; }\n:host .toolbar-container {\n    position: relative;\n    top: -4rem;\n    background: white;\n    min-height: 4rem;\n    border-top-left-radius: 0.667rem;\n    border-top-right-radius: 0.667rem;\n    margin-bottom: -1.33rem;\n    overflow: hidden; }\n:host .toolbar-container ul.toolbar {\n      list-style: none;\n      display: table-row;\n      height: 100%;\n      margin: 0;\n      padding: 0;\n      font-size: 1rem; }\n:host .toolbar-container ul.toolbar li {\n        display: inline-block;\n        vertical-align: middle;\n        height: 100%;\n        border-right: 1px solid #fff;\n        border-spacing: 0.333rem; }\n:host .toolbar-container ul.toolbar li a:not(.btn) {\n          height: 100%;\n          display: block;\n          line-height: 4rem;\n          padding: 0 1.33rem;\n          color: rgba(0, 0, 0, 0.7);\n          font-weight: 400;\n          transition: all 0.3s;\n          letter-spacing: 1px;\n          white-space: nowrap; }\n:host .toolbar-container ul.toolbar li a:not(.btn):hover {\n          text-decoration: none;\n          background: #f2f2f2;\n          transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);\n          color: rgba(0, 0, 0, 0.9);\n          cursor: pointer; }\n:host .toolbar-container .toolbar-right {\n      padding-top: 0.667rem;\n      padding-bottom: 0.667rem; }\n:host .toolbar-container .toolbar-right .btn {\n        margin-right: 0.667rem; }\n:host .toolbar-container.sticky-toolbar {\n      position: fixed !important;\n      top: 0px !important;\n      left: 0px !important;\n      z-index: 10;\n      width: 100%;\n      box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);\n      border-top-left-radius: 0 !important;\n      border-top-right-radius: 0 !important;\n      border-bottom-left-radius: 0.667rem;\n      border-bottom-right-radius: 0.667rem;\n      padding-left: 0;\n      padding-right: 0;\n      transition: top .3s ease-in; }\n:host .toolbar-container.sticky-toolbar .col-md-12 {\n        margin: 0; }\n:host .toolbar-container.sticky-toolbar ul.toolbar {\n        margin-left: auto !important;\n        margin-right: auto !important;\n        -webkit-padding-start: 0;\n                padding-inline-start: 0;\n        -webkit-margin-after: 0;\n                margin-block-end: 0;\n        display: block !important; }\n:host .toolbar-container.sticky-toolbar ul.toolbar li#btnApply {\n          display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL2RldGFpbHMtbmF2LWJhci9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL2RldGFpbHMtbmF2LWJhci9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXBwXFxtb2R1bGVzXFxkZXRhaWxzXFxjb21wb25lbnRzXFxkZXRhaWxzLW5hdi1iYXJcXGRldGFpbHMtbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQStGQSwyQkFBQTtBQWFBLFlBQUE7QUFNQSx1QkFBQTtBQTZCQSxlQUFBO0FBeUNBLFlBQUE7QUFxQkEsWUFBQTtBQ3ZOQTtFQUVFLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7QUFIaEI7SUFNSSxrQkFBa0I7SUFDbEIsVUQ0SGM7SUMzSGQsaUJBQW9DO0lBQ3BDLGdCRDBIYztJQ3pIZCxnQ0RvSGlCO0lDbkhqQixpQ0RtSGlCO0lDakhqQix1QkRtSGdCO0lDbEhoQixnQkFBZ0IsRUFBQTtBQWRwQjtNQWlCTSxnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixTQUFTO01BQ1QsVUFBVTtNQUNWLGVBQWUsRUFBQTtBQXRCckI7UUF5QlEscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osNEJEaUJJO1FDaEJKLHdCRGdHYyxFQUFBO0FDN0h0QjtVQWdDVSxZQUFZO1VBQ1osY0FBYztVQUNkLGlCRGlHUTtVQ2hHUixrQkQ2RlU7VUM1RlYseUJBQXlCO1VBQ3pCLGdCQUFnQjtVQUNoQixvQkFBb0I7VUFDcEIsbUJBQW1CO1VBQ25CLG1CQUFtQixFQUFBO0FBeEM3QjtVQTRDVSxxQkFBcUI7VUFDckIsbUJET087VUNOUCxzREQ4R3lDO1VDN0d6Qyx5QkFBeUI7VUFDekIsZUFBZSxFQUFBO0FBaER6QjtNQXNETSxxQkR3RWU7TUN2RWYsd0JEdUVlLEVBQUE7QUM5SHJCO1FBMERRLHNCRG9FYSxFQUFBO0FDOUhyQjtNQStETSwwQkFBMEI7TUFDMUIsbUJBQW1CO01BQ25CLG9CQUFvQjtNQUVwQixXQUFXO01BQ1gsV0FBVztNQUNYLGtEQUFrRDtNQUNsRCxvQ0FBb0M7TUFDcEMscUNBQXFDO01BQ3JDLG1DRHNEZTtNQ3JEZixvQ0RxRGU7TUNwRGYsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQiwyQkFBMkIsRUFBQTtBQTVFakM7UUErRVEsU0FBUyxFQUFBO0FBL0VqQjtRQW1GUSw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLHdCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLHVCQUFtQjtnQkFBbkIsbUJBQW1CO1FBRW5CLHlCQUF5QixFQUFBO0FBeEZqQztVQTRGWSxxQkFBcUIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2RldGFpbHMvY29tcG9uZW50cy9kZXRhaWxzLW5hdi1iYXIvZGV0YWlscy1uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vVHlwb2dyYXBoeVxuJGZvbnQtbWFpbjogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LWhlYWRpbmc6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1saW5lYXdlc29tZTogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweC8xIFwiTGluZUF3ZXNvbWVcIjtcbiRmb250LWZvbnRhd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiRodG1sLWZvbnQtc2l6ZS1sZzogMTZweDtcbiRodG1sLWZvbnQtc2l6ZS1tZDogMTVweDtcbiRodG1sLWZvbnQtc2l6ZS1zbTogMTRweDtcbiRodG1sLWZvbnQtc2l6ZS14czogMTNweDtcblxuJGh0bWwtZm9udC13ZWlnaHQ6IDQwMDtcblxuLy8gVGhlbWUgQ29sb3JzXG4kY29sb3Itb2Zmc2V0OiA2JTsgLy8gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIGxpZ2h0ZXIgYW5kIGRhcmtlciB2YXJpZW50cyBvZiBhIHNwZWNpZmljIGNvbG9yXG5cbiRiYXNlOiAjZmFmYWZhOyAvL3VzZWQgcHJpbWFyaWx5IGFzIG9mZi13aGl0ZSBib2R5IGJhY2tncm91bmQgY29sb3JcblxuJHByaW1hcnk6ICMwMjAwNjM7XG4kc2Vjb25kYXJ5OiAjZmFmYWZhO1xuJHNlY29uZGFyeS1ibHVlOiByZ2IoMTA5LCAxNzgsIDI1NSk7IC8vIHdlIHNob3VsZCByZXBsYWNlIHRoaXNcbiRhY2NlbnQ6ICNmY2IzMjM7IC8vIzAwYzVkYztcbiRmb2N1czogIzk4MTZmNDtcblxuJHN1Y2Nlc3M6ICMwMGU2YWI7XG4kd2FybmluZzogI2ZmYjgyMjtcbiRkYW5nZXI6ICNmZjJiMmI7IC8vI2Y0NTE2YztcbiRpbmZvOiAjNTU3OGViOyAvLyMzNmEzZjc7XG5cbiRtZXRhbDogI2M0YzVkNjtcbiRtZXRhbC1saWdodDogbGlnaHRlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuJG1ldGFsLWRhcms6IGRhcmtlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuXG4vLyBncmV5c1xuJGxpZ2h0OiAjZmZmO1xuJGRhcms6ICMyYzJlM2U7XG4kZ3JleS0yMDogIzMzMzMzMztcbiRncmV5LTMwOiAjNGQ0ZDRkO1xuJGdyZXktNTA6ICM4MDgwODA7XG4kZ3JleS03MDogI2IzYjNiMztcbiRncmV5LTkwOiAjZTZlNmU2O1xuJGdyZXktOTU6ICNmMmYyZjI7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbi8vIEV4dGVuZGVkIENvbG9yIFBhbGV0dGVcbi8vIFRPRE86IFJldmlldyB0aGVzZSBjb2xvcnNcbiRkYXJrLWJsdWU6ICMwMjM5NzA7XG4kYmx1ZTogIzAxN2FjZTtcbiRjZXJ1bGVhbjogIzAxN2FjZTtcbiRsaWdodC1ibHVlOiAjY2NlYWZmO1xuJHBhbGUtYmx1ZTogI2YxZjlmZjtcbiRkYXJrLXRlYWw6ICMwMDY0NmU7XG4kdGVhbDogIzAwYzFkNDtcbiRsaWdodC10ZWFsOiAjY2NmYWZmO1xuJHBhbGUtdGVhbDogI2Y1ZmVmZjtcbiRkYXJrLWdyZWVuOiAjMGE1YzQwO1xuJGdyZWVuOiAjMTRiODgxO1xuJGxpZ2h0LWdyZWVuOiAjYTNmNWQ5O1xuJHBhbGUtZ3JlZW46ICNmNmZlZmI7XG4kZGFyay15ZWxsb3c6ICM5OTc0MDA7XG4keWVsbG93OiAjZmZjZTMzO1xuJGxpZ2h0LXllbGxvdzogI2ZmZjNjYztcbiRwYWxlLXllbGxvdzogI2ZmZmRmNTtcbiRkYXJrLXJlZDogIzY2MGEwMDtcbiRyZWQ6ICNjYzE0MDA7XG4kbGlnaHQtcmVkOiAjZmZkMWNjO1xuJHBhbGUtcmVkOiAjZmZmNmY1O1xuXG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcImFjY2VudFwiOiAkYWNjZW50LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsIFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmcsIFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImluZm9cIjogJGluZm8sXG4gIFwibWV0YWxcIjogJG1ldGFsLFxuICBcImZvY3VzXCI6ICRmb2N1cyxcbiAgXCJncmV5LTIwXCI6ICRncmV5LTIwLCBcbiAgXCJncmV5LTMwXCI6ICRncmV5LTMwLFxuICBcImdyZXktNTBcIjogJGdyZXktNTAsXG4gIFwiZ3JleS03MFwiOiAkZ3JleS03MCxcbiAgXCJncmV5LTkwXCI6ICRncmV5LTkwLFxuICBcImdyZXktOTVcIjogJGdyZXktOTUsXG4gIFwiYmFzZVwiOiAkYmFzZSxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJ3aGl0ZVwiOiAkd2hpdGUsXG4gIFwiYmxhY2tcIjogJGJsYWNrLFxuICBcImJsdWVcIjogJGJsdWVcbik7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuJGd0LXNtYWxsLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBzbSkgIWRlZmF1bHQ7IC8vIDU3NlxuJGd0LW1lZGl1bS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbWQpICFkZWZhdWx0OyAvLyA3NjhcbiRndC1sYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbGcpICFkZWZhdWx0OyAvLyA5OTJcbiRndC14bGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHhsKSAhZGVmYXVsdDsgLy8gMTIwMFxuXG4vKiBTaGFkb3dzICovXG4kc2hhZG93LXNtOiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xuJHNoYWRvdy1tZDogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjA4KTsgLy9kZWZhdWx0XG4kc2hhZG93LWxnOiAwIDE1cHggMzBweCAwIHJnYmEoMCwwLDAsMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuJHNoYWRvdy1lbGV2YXRlOiAkc2hhZG93LWxnOyAvLyBvbiBob3ZlclxuXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbiRzcGFjaW5nLXh4czogMC4zMzNyZW07ICAgICAvLyBzbWFsbCBnYXAgICAgICAgICAgIC0gNXB4ICAgICh4eHMpXG4kc3BhY2luZy14czogMC42NjdyZW07ICAgICAgLy8gUmVsYXRlZCBEaXJlY3RseSAgICAtIDEwcHggICAoeHMpXG4kc3BhY2luZy1zbTogMXJlbTsgICAgICAgICAgLy8gUmVsYXRlZCBJbmRpcmVjdGx5ICAtIDE1cHggICAoc20pXG4kc3BhY2luZy1tZDogMS4zM3JlbTsgICAgICAgLy8gUmVsYXRlZCBHcm91cCAgICAgICAtIDIwcHggICAobWQpICAvL2RlZmF1bHRcbiRzcGFjaW5nLWxnOiAycmVtOyAgICAgICAgICAvLyBVbnJlbGF0ZWQgR3JvdXAgICAgIC0gMzBweCAgIChsZylcbiRzcGFjaW5nLXhsOiAyLjY2N3JlbTsgICAgICAvLyBOZXcgU2VjdGlvbiAgICAgICAgIC0gNDBweCAgICh4bClcbiRzcGFjaW5nLXh4bDogNHJlbTsgICAgICAgICAvLyBOZXcgU2VjdGlvbiAoTGFyZ2UpIC0gNjBweCAgICh4eGwpXG5cbiRzcGFjaW5nLXNpemVzOiAoXG4gIFwiMFwiOiAwLFxuICBcIjVcIjogJHNwYWNpbmcteHhzLFxuICBcIjEwXCI6ICRzcGFjaW5nLXhzLFxuICBcIjE1XCI6ICRzcGFjaW5nLXNtLFxuICBcIjIwXCI6ICRzcGFjaW5nLW1kLFxuICBcIjMwXCI6ICRzcGFjaW5nLWxnLFxuICBcIjQwXCI6ICRzcGFjaW5nLXhsLFxuICBcIjYwXCI6ICRzcGFjaW5nLXh4bCxcbiAgXCIxNS1lbVwiOiAxLjVyZW0sXG4gIFwiMjItZW1cIjogMi4ycmVtLFxuICBcInh4c1wiOiAkc3BhY2luZy14eHMsXG4gIFwieHNcIjogJHNwYWNpbmcteHMsXG4gIFwic21cIjogJHNwYWNpbmctc20sXG4gIFwibWRcIjogJHNwYWNpbmctbWQsXG4gIFwibGdcIjogJHNwYWNpbmctbGcsXG4gIFwieGxcIjogJHNwYWNpbmcteGwsXG4gIFwieHhsXCI6ICRzcGFjaW5nLXh4bCwgIFxuICApO1xuXG4vKiBBbmltYXRpb25zICovXG4kYW5pbWF0aW9uLXhzOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tc2g6IGFsbCAwLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1tZDogYWxsIDAuMzVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpOyAvL2RlZmF1bHRcbiRhbmltYXRpb24tbGc6IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14bDogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXh4bDogYWxsIDEuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cbiRhbmltYXRpb24tZGVmYXVsdDogJGFuaW1hdGlvbi1tZDtcblxuJGFuaW1hdGlvbi1mYWRlLWluOiBmYWRlLWluIDFzIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtb3V0OiBmYWRlLW91dCAxcyBlYXNlLW91dCBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLXRvcDogZmFkZS1pbi10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbTogZmFkZS1pbi1ib3R0b20gMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcjogcHVmZi1pbi1jZW50ZXIgMC43cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcjogcHVmZi1vdXQtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgYm90aDtcbiRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbDogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcbiRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoOyAvLyBmb3IgdGV4dFxuJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wOiBzY2FsZS1pbi12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcDogc2NhbGUtb3V0LXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG4kYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyBpbmZpbml0ZTtcbiRhbmltYXRpb24tcHVsc2UtMzogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgMztcbiRhbmltYXRpb24tcHVsc2UtMTogc2hhZG93LXB1bHNlIDFzIDE7XG5cbi8vIFlvdSBjYW4gdXNlIGFueSBvZiB0aGVzZSBuYW1lcyB0byBhbmltYXRlIEhUTUwgZWxlbWVudHMgb24gaW5pdGlhdGlvblxuJGFuaW1hdGlvbnM6IChcbiAgXCJmYWRlLWluXCI6ICRhbmltYXRpb24tZmFkZS1pbixcbiAgXCJmYWRlLW91dFwiOiAkYW5pbWF0aW9uLWZhZGUtb3V0LFxuICBcImZhZGUtaW4tdG9wXCI6ICRhbmltYXRpb24tZmFkZS1pbi10b3AsXG4gIFwiZmFkZS1pbi1ib3R0b21cIjogJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbSxcbiAgXCJwdWZmLWluLWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyLFxuICBcInB1ZmYtb3V0LWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcixcbiAgXCJzaGFrZS1ob3Jpem9udGFsXCI6ICRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbCxcbiAgXCJmb2N1cy1pbi1jb250cmFjdC1iY2tcIjogJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2ssXG4gIFwic2NhbGUtaW4tdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3AsXG4gIFwic2NhbGUtb3V0LXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcCxcbiAgXCJwdWxzZS1pbmZpbml0ZVwiOiAkYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlLFxuICBcInB1bHNlLTNcIjogJGFuaW1hdGlvbi1wdWxzZS0zLFxuICBcInB1bHNlLTFcIjogJGFuaW1hdGlvbi1wdWxzZS0xXG4pO1xuXG4vKiBCb3JkZXJzICovXG4kYm9yZGVyLXNpemUtc206IDAuMTI1cmVtO1xuJGJvcmRlci1zaXplLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1zaXplLWxnOiAwLjVyZW07XG4kYm9yZGVyLXNpemUtMTogMXB4O1xuJGJvcmRlci1zaXplLTI6IDJweDtcbiRib3JkZXItc2l6ZS0zOiAzcHg7XG4kYm9yZGVyLXNpemUtNTogNXB4O1xuJGJvcmRlci1zaXplLTEwOiAxMHB4O1xuXG4kYm9yZGVyLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1zaXplLXNtLFxuICBcIm1kXCI6ICRib3JkZXItc2l6ZS1tZCxcbiAgXCJsZ1wiOiAkYm9yZGVyLXNpemUtbGcsXG4gIFwiMVwiOiAkYm9yZGVyLXNpemUtMSxcbiAgXCIyXCI6ICRib3JkZXItc2l6ZS0yLFxuICBcIjNcIjogJGJvcmRlci1zaXplLTMsXG4gIFwiNVwiOiAkYm9yZGVyLXNpemUtNSxcbiAgXCIxMFwiOiAkYm9yZGVyLXNpemUtMTBcbik7XG5cbi8qIENvcm5lcnMgKi9cbiRib3JkZXItcmFkaXVzLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItcmFkaXVzLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNXJlbTtcbiRib3JkZXItcmFkaXVzLTI6IDJweDtcbiRib3JkZXItcmFkaXVzLTQ6IDRweDtcbiRib3JkZXItcmFkaXVzLTY6IDZweDtcbiRib3JkZXItcmFkaXVzLTEwOiAxMHB4O1xuJGJvcmRlci1yYWRpdXMtMTU6IDE1cHg7XG4kYm9yZGVyLXJhZGl1cy0yMDogMjBweDtcbiRib3JkZXItcmFkaXVzLWhhbGY6IDUwJTtcbiRib3JkZXItcmFkaXVzLWZ1bGw6IDEwMCU7XG5cbiRib3JkZXItcmFkaXVzLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1yYWRpdXMtc20sXG4gIFwibWRcIjogJGJvcmRlci1yYWRpdXMtbWQsIC8vZGVmYXVsdFxuICBcImxnXCI6ICRib3JkZXItcmFkaXVzLWxnLFxuICBcIjJcIjogJGJvcmRlci1yYWRpdXMtMixcbiAgXCI0XCI6ICRib3JkZXItcmFkaXVzLTQsXG4gIFwiNlwiOiAkYm9yZGVyLXJhZGl1cy02LFxuICBcIjEwXCI6ICRib3JkZXItcmFkaXVzLTEwLFxuICBcIjE1XCI6ICRib3JkZXItcmFkaXVzLTE1LFxuICBcIjIwXCI6ICRib3JkZXItcmFkaXVzLTIwLFxuICBcImhhbGZcIjogJGJvcmRlci1yYWRpdXMtaGFsZixcbiAgXCJmdWxsXCI6ICRib3JkZXItcmFkaXVzLWZ1bGwsXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcblxuICAudG9vbGJhci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0kc3BhY2luZy14eGw7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxLjApO1xuICAgIG1pbi1oZWlnaHQ6ICRzcGFjaW5nLXh4bDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkc3BhY2luZy14cztcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHNwYWNpbmcteHM7XG4gICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBtYXJnaW4tYm90dG9tOiAtJHNwYWNpbmctbWQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIHVsLnRvb2xiYXIge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRsaWdodDtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6ICRzcGFjaW5nLXh4cztcblxuICAgICAgICBhOm5vdCguYnRuKSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkc3BhY2luZy14eGw7XG4gICAgICAgICAgcGFkZGluZzogMCAkc3BhY2luZy1tZDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpub3QoLmJ0bik6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JleS05NTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkYW5pbWF0aW9uLW1kO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRvb2xiYXItcmlnaHQge1xuICAgICAgcGFkZGluZy10b3A6ICRzcGFjaW5nLXhzO1xuICAgICAgcGFkZGluZy1ib3R0b206ICRzcGFjaW5nLXhzO1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkc3BhY2luZy14cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnN0aWNreS10b29sYmFyIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgLy9yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTVweCAxcHggcmdiYSg2OSwgNjUsIDc4LCAwLjEpO1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRzcGFjaW5nLXhzO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRzcGFjaW5nLXhzO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAuM3MgZWFzZS1pbjtcblxuICAgICAgLmNvbC1tZC0xMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgdWwudG9vbGJhciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgLy9tYXgtd2lkdGg6IDg0cmVtO1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAmI2J0bkFwcGx5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/details/components/details-nav-bar/details-nav-bar.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/details/components/details-nav-bar/details-nav-bar.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DetailsNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsNavBarComponent", function() { return DetailsNavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "../lib/src/public_api.ts");
/* harmony import */ var _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/api/lottery-api.service */ "./src/app/shared/services/api/lottery-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsNavBarComponent = /** @class */ (function () {
    function DetailsNavBarComponent(router, oauthService, lotteryService) {
        this.router = router;
        this.oauthService = oauthService;
        this.lotteryService = lotteryService;
        this.onClickApplyBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = this.router.url;
    }
    DetailsNavBarComponent.prototype.handleChangingToolBarVisible = function (value) {
        this.isToolBarVisible = !value.isVisible;
    };
    DetailsNavBarComponent.prototype.scrollTo = function (element) {
        var elem = document.querySelector('#' + element);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }
    };
    DetailsNavBarComponent.prototype.onLotteryApply = function () {
        this.router.navigate(["/details/" + this.lotteryId + "/apply-lottery"]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsNavBarComponent.prototype, "lotteryId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DetailsNavBarComponent.prototype, "canApply", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailsNavBarComponent.prototype, "onClickApplyBtn", void 0);
    DetailsNavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-nav-bar',
            template: __webpack_require__(/*! ./details-nav-bar.component.html */ "./src/app/modules/details/components/details-nav-bar/details-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./details-nav-bar.component.scss */ "./src/app/modules/details/components/details-nav-bar/details-nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"], _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_3__["LotteryApiService"]])
    ], DetailsNavBarComponent);
    return DetailsNavBarComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/components/details-print/details-print.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/details/components/details-print/details-print.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 print-header\">\n        <div class=\"logo\"></div>\n        <div class=\"title\">\n          <p>NYC</p>\n          <p>Housing Connect</p>\n        </div>\n        <div class=\"url\">https://nyc.gov/housingconnect</div>\n      </div>\n    </div>\n    <div class=\"row general-info\">\n      <div class=\"col-3 image-container\">\n        \n      </div>\n      <div class=\"col-9\">\n        <div class=\"row\">\n          <div class=\"col-8\">\n            <p class=\"building-title\">Greenpoint Complex</p>\n            <ul class=\"address-list\">\n              <li>200 McGuinnes Boulevard, Brooklyn</li>\n              <li>240 Greenpoint Avenue, Brooklyn</li>\n            </ul>\n            <ul class=\"rules-list\">\n              <li>No application fee</li>\n              <li>No broker's fee</li>\n              <li>Smoke-free</li>\n            </ul>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"deadline-block\">\n              <p class=\"title\">Application deadline</p>\n              <p class=\"date\">March 10, 2019</p>\n            </div>\n            \n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <p class=\"building-description\">\n              Building donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibul at eros. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat ante.\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"transit-options\">\n              <p class=\"title\">Nearby Transit Options:</p>\n              <ul>\n                <li>2</li>\n                <li>3</li>\n                <li>4</li>\n                <li>L</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"amenities\">\n              <p class=\"title\">Amenities</p>\n              <ul>\n                <li>Doorman Building</li>\n                <li>Onsite Laundry Services</li>\n                <li>Pet Friendly</li>\n                <li>Fitness Center</li>\n                <li>Outdoor Space</li>\n                <li>Tenant lounge</li>\n                <li>Conference Facilities</li>\n                <li>Fast Wi-Fi</li>\n                <li>Dining Options</li>\n                <li>Retail Options</li>\n                <li>Easy Access to Transportation</li>\n                <li>Shuttle Service</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"notes\">\n              *additional fee required\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"row who-should-apply\">\n      <div class=\"col-12\">\n        <div class=\"row\">\n          <div class=\"col-12 \">\n            <div class=\"section-title\">\n                <p><i class=\"fa fa-caret-right\"></i> Who should apply</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6 info\">\n            <ul>\n              <li>\n                Individuals or households who meet the income and household size requirements listed in the <span class=\"highlighted\">Available Units</span> table may apply.\n              </li>\n              <li>\n                Qualified applicants will be required to meet additional selection criteria.\n              </li>\n              <li>\n                Applicants whi live in New York City receive a general preference for apartments.\n              </li>\n            </ul>\n            <p class=\"details\">\n              The building is being constructed through the Extremely Low and Low-Income Affordability (ELLA) program of the New York City Housing Development Corporation and the New York City Department of Housing Preservation and Development.\n            </p>\n          </div>\n          <div class=\"col-6 set-asides\">\n            <p class=\"title\">\n              A percentage of units is set aside for applicants with disabilities:\n            </p>\n            <ul>\n              <li>Mobility (5%)</li>\n              <li>Vision/Hearing (2%)</li>\n            </ul>\n            <p class=\"title\">\n              Preference for a subset of units goes to:\n            </p>\n            <ul>\n              <li>Residents of Brooklyn Community Board (50%)</li>\n              <li>Municipal Employees (5%)</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row units\">\n      <div class=\"col-12\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"section-title\">\n                <p>\n                  <i class=\"fa fa-caret-right\"></i>\n                  Available Units and Income Requirements\n                </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row unit-listings\">\n          <div class=\"col-12 table-section\">\n\n\n            <ng-container *ngFor=\"let unitType of units;\">\n              <ng-container *ngFor=\"let unit of unitType.units; index as idx; first as isFirst; last as isLast\">\n                <div class=\"units-table\">\n                  <p class=\"unit-type\" *ngIf=\"idx===0\">\n                      {{unitType.type}}\n                  </p>\n                  <table\n                  class=\"units-table\"\n                  [ngClass]=\"{'hide-header': idx!==0, 'last-in-section': isLast}\"\n                  mat-table [dataSource]=\"[unit]\"\n                  class=\"mat-elevation-z8\">\n                    <ng-container matColumnDef=\"size\">\n                      <th mat-header-cell *matHeaderCellDef>Household Size</th>\n                      <td mat-cell *matCellDef=\"let unit\">\n                        <p *ngFor=\"let household of unit.households\">\n                          {{household.size}}\n                        </p>\n                      </td>\n                    </ng-container>\n                  \n                    <ng-container matColumnDef=\"income\">\n                      <th mat-header-cell *matHeaderCellDef>Household Income</th>\n                      <td mat-cell *matCellDef=\"let unit\"> \n                        <p *ngFor=\"let household of unit.households\">\n                          {{household.income.min | currency}} - {{household.income.max | currency}}\n                        </p>\n                      </td>\n                    </ng-container>\n                  \n                    <ng-container matColumnDef=\"rent\">\n                      <th mat-header-cell *matHeaderCellDef>Monthly rent</th>\n                      <td mat-cell *matCellDef=\"let unit\"> {{unit.rent}} </td>\n                    </ng-container>\n                  \n                    <ng-container matColumnDef=\"amount\">\n                      <th mat-header-cell *matHeaderCellDef> Units Available </th>\n                      <td mat-cell *matCellDef=\"let unit\"> {{unit.amount}} </td>\n                    </ng-container>\n                  \n                    <tr mat-header-row *matHeaderRowDef=\"(isFirst) ? displayedColumns : []\"></tr>\n                    <tr\n                      mat-row\n                      class=\"units-row\"\n                      *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                </div>\n              </ng-container>\n            </ng-container>\n\n\n\n\n\n\n\n\n\n\n\n\n\n            <!-- <div class=\"units-table\" *ngFor=\"let unitType of units; index as idx;\">\n              <p class=\"unit-type\">\n                  {{unitType.type}}\n              </p>\n                <table\n                  class=\"units-table\"\n                  mat-table [dataSource]=\"unitType.units\"\n                  class=\"mat-elevation-z8\">\n                    <ng-container matColumnDef=\"size\">\n                      <th mat-header-cell *matHeaderCellDef>Household Size</th>\n                      <td mat-cell *matCellDef=\"let unit\">\n                        <p *ngFor=\"let household of unit.households\">\n                          {{household.size}}\n                        </p>\n                      </td>\n                    </ng-container>\n                  \n                    <ng-container matColumnDef=\"income\">\n                      <th mat-header-cell *matHeaderCellDef>Household Income</th>\n                      <td mat-cell *matCellDef=\"let unit\"> \n                        <p *ngFor=\"let household of unit.households\">\n                          {{household.income.min | currency}} - {{household.income.max | currency}}\n                        </p>\n                      </td>\n                    </ng-container>\n                  \n                    <ng-container matColumnDef=\"rent\">\n                      <th mat-header-cell *matHeaderCellDef>Monthly rent</th>\n                      <td mat-cell *matCellDef=\"let unit\"> {{unit.rent}} </td>\n                    </ng-container>\n                  \n                    <ng-container matColumnDef=\"amount\">\n                      <th mat-header-cell *matHeaderCellDef> Units Available </th>\n                      <td mat-cell *matCellDef=\"let unit\"> {{unit.amount}} </td>\n                    </ng-container>\n                  \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr\n                     mat-row\n                     class=\"units-row\"\n                     *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row \">\n      <div class=\"col-12 footnotes\">\n        <ol>\n          <li>Household size includes everyone who will live with you, including parents and children. Subject to occupancy criteria</li>\n          <li>Household earnings include salary, hourly wages, tips, Social Security, child support, and other income. Income guidelines subject to change. Minimum income listed may not apply to applicants with Section 8 or other qualifying rental subsidies. Asset limits also apply.</li>\n          <li>Tenant pays electricity.</li>\n        </ol>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 footer-image\">\n        <img src=\"/assets/images/print-page-footer.png\" alt=\"\">\n      </div>\n    </div>\n\n    <div class=\"row how-to-apply\">\n        <div class=\"col-12\">\n          <div class=\"row\">\n            <div class=\"col-12 \">\n              <div class=\"section-title\">\n                  <p><i class=\"fa fa-caret-right\"></i> How to apply</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6 contact-info\">\n              <div class=\"row address-row\">\n                <div class=\"col-6\">To apply online please go to:</div>\n                <div class=\"col-6 highlighted\">http://nyc.gov/housingconnect</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  To request an application by mail, send a self-addressed envelope to:\n                </div>\n                <div class=\"col-6 address-section\">\n                  <ul>\n                    <li>Halcyon Capital Management LP</li>\n                    <li>477 Madison Ave,</li>\n                    <li>New York, NY 10022</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-6 warning\">\n              <p>Do not submit duplicate applications</p>\n              <ul>\n                <li>Only send one application per development.</li>\n                <li>Do not apply online and also send in a paper application.</li>\n                <li>Applicants who submit more than one application may be disqualified</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row after-submit\">\n        <div class=\"col-12\">\n          <div class=\"row\">\n            <div class=\"col-12 \">\n              <div class=\"section-title\">\n                  <p>\n                    <i class=\"fa fa-caret-right\"></i>\n                    What happens after you submit an application\n                  </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <p class=\"note\">\n                After the deadline, applications are selected for review through a lottery process. If yours is selected and you appear to qualify, you will be invited to an interview to continue the process of determining you eligibility. Interviews are usually scheduled from 2 to 10 moths after the application deadline. You will be asked to bring documents that verify your household size, identity of members of your household, and your household income.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row instructions\">\n        <div class=\"col-12\">\n          <div class=\"row\">\n            <div class=\"col-12 \">\n              <div class=\"section-title\">\n                  <p>\n                    <i class=\"fa fa-caret-right\"></i>\n                    Instructions for speakers of other languages\n                  </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"instructions-container\">\n            <div class=\"row\">\n                <div class=\"col-1\">Español</div>\n                <div class=\"col-11\">Presente una solicitud en línea en nyc.gov/housingconnect. Para recibir una traducción de español de este anuncio y la solicitud impresa, envíe un sobre con la dirección a: Halcyon Capital Management LP, 477 Madison Ave, NY 10022. En el reverso del sobre, escriba en inglés la palabra “SPANISH.” Las solicitudes se deben enviar en línea o con sello postal antes de 21 de noviembre de 2019.</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-1\">简体中文</div>\n                <div class=\"col-11\">访问 nyc.gov/housingconnect 在线申请。如要获取本广告及书面申请表的简体中文版，请将您的回邮信封寄送至:Halcyon Capital Management LP, 477 Madison Ave, NY 10022. 信封背面请用英语注明 “CHINESE”。必须在以下日期之前在线提交申请或邮寄书面申请 2019年11月21日。</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-1\">Русский</div>\n                <div class=\"col-11\">Чтобы подать заявление через интернет, зайдите на сайт: nyc.gov/housingconnect. Для получения данного объявления и заявления на русском языке отправьте конверт с обратным адресом по адресу Halcyon Capital Management LP, 477 Madison Ave, NY 10022. На задней стороне конверта напишите слово “RUSSIAN” на английском языке. Заявки должны быть поданы онлайн или отправлены по почте (согласно дате на почтовом штемпеле) не позднее Ноябрь 21 2019.</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-1\">한국어\u2028</div>\n                <div class=\"col-11\">nyc.gov/housingconnect 에서 온라인으로 신청하십시오. 이 광고문과 신청서에 대한 한국어 번역본을 받아보시려면 반송용 봉투를 Halcyon Capital Management LP, 477 Madison Ave, NY 10022. 으로 보내주십시오. 봉투 뒷면에 “KOREAN” 이라고 영어로 적어주십시오. 11 월 21 2019 까지 온라인 신청서를 제출하거나 소인이 찍힌 신청서를 보내야 합니다.</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-1\">Kreyòl Ayisyien</div>\n                <div class=\"col-11\">Aplike sou entènèt sou sitwèb nyc.gov/housingconnect. Pou resevwa yon tradiksyon anons sa a nan lang Kreyòl Ayisyen ak aplikasyon an sou papye, voye anvlòp ki gen adrès pou retounen li nan: Halcyon Capital Management LP, 477 Madison Ave, NY 10022. Nan dèyè anvlòp la, ekri mo “HAITIAN CREOLE” an Anglè. Ou dwe remèt aplikasyon yo sou entènèt oswa ou dwe tenbre yo anvan dat 21 Novanm 2019.</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-1\">العربیة</div>\n                <div class=\"col-11\">تقدم بطلب عن طریق الإنترنت على الموقع الإلكتروني nyc.gov/housingconnect. للحصول على ترجمة باللغة العربیة لھذا الإعلان ولنموذج الطلب الورقي، أرسل مظروف یحمل اسمك وعنوانك إلى: Halcyon Capital Management LP, 477 Madison Ave, NY 10022. . على الجھة الخلفیة للمظروف، اكتب باللغة الإنجلیزیة كلمة &quot;ARABIC&quot;. یجب إرسال نماذج الطلبات عن طریق الإنترنت أو ختمھا بختم البرید قبل21 نوفمبر 2018.</div>\n              </div>\n          </div>\n        </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/modules/details/components/details-print/details-print.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/details/components/details-print/details-print.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host {\n  -webkit-print-color-adjust: exact; }\n:host .container {\n    padding: 5.3mm 1mm 8mm 8mm; }\n:host .print-header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    margin-bottom: 3mm; }\n:host .print-header .logo {\n      width: 8.6mm;\n      height: 5.6mm;\n      margin-right: 1.3mm;\n      background-color: #017ace; }\n:host .print-header .title {\n      font-size: 3.3mm; }\n:host .print-header .title p {\n        margin: 0; }\n:host .print-header .url {\n      margin-left: auto;\n      font-size: 2.6mm;\n      font-weight: 600;\n      color: #017ace; }\n:host .general-info {\n    margin-bottom: 4.6mm; }\n:host .general-info .building-title {\n      font-weight: 600;\n      color: #333333; }\n:host .general-info .rules-list, :host .general-info .address-list, :host .general-info .building-description {\n      font-size: 2.6mm;\n      color: #222222; }\n:host .general-info .address-list {\n      list-style: none;\n      margin: 0 0 1.3mm 0;\n      padding: 0; }\n:host .general-info .rules-list {\n      list-style: none;\n      margin: 0;\n      padding: 0; }\n:host .general-info .rules-list li {\n        display: inline-block; }\n:host .general-info .rules-list li:not(:last-child):after {\n        margin: 0 1.3mm 0 1.3mm;\n        content: '•'; }\n:host .general-info .building-description {\n      margin: 2.6mm 0 2.6mm 0; }\n:host .general-info .deadline-block .title {\n      font-size: 2.6mm;\n      font-weight: 600;\n      color: #808080; }\n:host .general-info .deadline-block .date {\n      font-size: 4.6mm;\n      font-weight: 600;\n      color: #333333; }\n:host .general-info .transit-options {\n      margin-bottom: 2.6mm; }\n:host .general-info .transit-options .title {\n        font-size: 2.6mm;\n        color: #333333;\n        font-weight: 600;\n        margin-bottom: 1mm; }\n:host .general-info .transit-options ul {\n        list-style: none;\n        margin: 0;\n        padding: 0; }\n:host .general-info .transit-options ul li {\n          display: inline-block;\n          width: 5mm;\n          height: 5mm;\n          border-radius: 50%;\n          margin-right: 1mm;\n          background-color: green;\n          color: #fff;\n          font-size: 3.1mm;\n          text-align: center; }\n:host .general-info .amenities {\n      font-size: 2.6mm;\n      color: #333333;\n      margin-bottom: 1mm; }\n:host .general-info .amenities .title {\n        font-weight: 600;\n        margin-bottom: 1mm; }\n:host .general-info .amenities ul {\n        list-style: none;\n        margin: 0;\n        padding: 0; }\n:host .general-info .amenities ul li {\n          display: inline-block; }\n:host .general-info .amenities ul li:not(:last-child):after {\n          margin: 0 1.3mm 0 1.3mm;\n          content: '•'; }\n:host .general-info .notes {\n      font-size: 2mm;\n      color: #333333; }\n:host .section-title {\n    background-color: #f1f9ff;\n    height: 8mm;\n    padding: 1.6mm 0 2.6mm 2.6mm;\n    margin-bottom: 2.6mm; }\n:host .section-title p {\n      margin: 0;\n      font-size: 3.1mm;\n      font-weight: 600;\n      color: #333333; }\n:host .section-title p i {\n        color: #00c1d4;\n        margin-right: 1.3mm;\n        font-size: 2.6mm; }\n:host .who-should-apply {\n    font-size: 2.6mm;\n    color: #333333; }\n:host .who-should-apply ul li {\n      margin-bottom: 1.3mm; }\n:host .who-should-apply .title {\n      font-weight: 600;\n      margin-bottom: 1.3mm; }\n:host .who-should-apply .details {\n      font-size: 2mm;\n      color: #808080; }\n:host .who-should-apply .highlighted {\n      color: #017ace;\n      font-weight: 600; }\n:host .unit-listings .table-section {\n    height: 205mm;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; }\n:host .unit-listings .table-section .units-table {\n      padding: 0 2mm; }\n:host .unit-listings .last-in-section {\n    margin-bottom: 5.3mm; }\n:host .unit-listings .unit-type {\n    font-size: 2.6mm;\n    font-weight: bold;\n    color: #222222;\n    margin-bottom: 1.3mm; }\n:host .unit-listings tr.mat-header-row, :host .unit-listings tr.mat-row {\n    height: auto; }\n:host .unit-listings th.mat-header-cell, :host .unit-listings td.mat-cell {\n    padding: 1.3mm;\n    font-size: 2mm !important;\n    width: 32mm; }\n:host .unit-listings tr.mat-row p {\n    margin: 1.3mm 0 1.3mm 0; }\n:host .footnotes {\n    font-size: 2mm;\n    color: #808080;\n    padding-bottom: 5.6mm;\n    border-bottom: 0.3mm solid #b3b3b3; }\n:host .footnotes ol {\n      padding: 0;\n      margin: 0; }\n:host .footer-image {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 1mm; }\n:host .footer-image img {\n      width: 122.6mm; }\n:host .how-to-apply {\n    margin-top: 55mm;\n    margin-bottom: 12mm;\n    font-size: 2.2mm;\n    color: #333333; }\n:host .how-to-apply .contact-info {\n      padding: 0 8mm; }\n:host .how-to-apply .contact-info .address-row {\n        border-bottom: 0.3mm solid #b3b3b3;\n        padding-bottom: 2mm;\n        margin-bottom: 2mm; }\n:host .how-to-apply .contact-info .address-row .highlighted {\n          color: #017ace;\n          font-weight: bold; }\n:host .how-to-apply .contact-info .address-section {\n        font-weight: 600; }\n:host .how-to-apply .contact-info .address-section ul {\n          list-style: none;\n          margin: 0;\n          padding: 0; }\n:host .how-to-apply .warning p {\n      margin-bottom: 2mm; }\n:host .how-to-apply .warning ul {\n      margin: 0 0 0 4mm;\n      padding: 0; }\n:host .after-submit {\n    margin-bottom: 4.2mm; }\n:host .after-submit .note {\n      font-size: 2.2mm;\n      color: #333333; }\n:host .instructions .instructions-container {\n    font-size: 2mm; }\n:host .instructions .instructions-container .col-1 {\n      font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL2RldGFpbHMtcHJpbnQvZGV0YWlscy1wcmludC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL2RldGFpbHMtcHJpbnQvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2RldGFpbHMvY29tcG9uZW50cy9kZXRhaWxzLXByaW50L0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhcHBcXG1vZHVsZXNcXGRldGFpbHNcXGNvbXBvbmVudHNcXGRldGFpbHMtcHJpbnRcXGRldGFpbHMtcHJpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBK0ZBLDJCQUFBO0FBYUEsWUFBQTtBQU1BLHVCQUFBO0FBNkJBLGVBQUE7QUF5Q0EsWUFBQTtBQXFCQSxZQUFBO0FDdk5BO0VBQ0UsaUNBQWlDLEVBQUE7QUFEbkM7SUFNSSwwQkFBMEIsRUFBQTtBQU45QjtJQVNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixrQkFBa0IsRUFBQTtBQWJ0QjtNQWdCTSxZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix5QkR3Q1EsRUFBQTtBQzNEZDtNQXVCTSxnQkFBZ0IsRUFBQTtBQXZCdEI7UUF5QlEsU0FBUyxFQUFBO0FBekJqQjtNQThCTSxpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixjRDBCUSxFQUFBO0FDM0RkO0lBc0NJLG9CQUFvQixFQUFBO0FBdEN4QjtNQXlDTSxnQkFBZ0I7TUFDaEIsY0RLVyxFQUFBO0FDL0NqQjtNQThDTSxnQkFBZ0I7TUFDaEIsY0FBYyxFQUFBO0FBL0NwQjtNQW1ETSxnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLFVBQVUsRUFBQTtBQXJEaEI7TUF5RE0sZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxVQUFVLEVBQUE7QUEzRGhCO1FBNkRRLHFCQUFxQixFQUFBO0FBN0Q3QjtRQWdFUSx1QkFBdUI7UUFDdkIsWUFBUyxFQUFJO0FBakVyQjtNQXNFTSx1QkFBdUIsRUFBQTtBQXRFN0I7TUEyRVEsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixjRDVCUyxFQUFBO0FDakRqQjtNQWlGUSxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGNEcENTLEVBQUE7QUMvQ2pCO01Bd0ZNLG9CQUFvQixFQUFBO0FBeEYxQjtRQTBGUSxnQkFBZ0I7UUFDaEIsY0Q1Q1M7UUM2Q1QsZ0JBQWdCO1FBQ2hCLGtCQUFrQixFQUFBO0FBN0YxQjtRQWlHUSxnQkFBZ0I7UUFDaEIsU0FBUztRQUNULFVBQVUsRUFBQTtBQW5HbEI7VUFxR1UscUJBQXFCO1VBQ3JCLFVBQVU7VUFDVixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLGlCQUFpQjtVQUNqQix1QkFBdUI7VUFDdkIsV0FBVztVQUNYLGdCQUFnQjtVQUNoQixrQkFBa0IsRUFBQTtBQTdHNUI7TUFvSE0sZ0JBQWdCO01BQ2hCLGNEdEVXO01DdUVYLGtCQUFrQixFQUFBO0FBdEh4QjtRQXdIUSxnQkFBZ0I7UUFDaEIsa0JBQWtCLEVBQUE7QUF6SDFCO1FBNEhRLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsVUFBVSxFQUFBO0FBOUhsQjtVQWdJVSxxQkFBcUIsRUFBQTtBQWhJL0I7VUFtSVUsdUJBQXVCO1VBQ3ZCLFlBQVMsRUFBSTtBQXBJdkI7TUEwSU0sY0FBYztNQUNkLGNENUZXLEVBQUE7QUMvQ2pCO0lBZ0pJLHlCRGxGZTtJQ21GZixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLG9CQUFvQixFQUFBO0FBbkp4QjtNQTJKTSxTQUFTO01BQ1QsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixjRC9HVyxFQUFBO0FDL0NqQjtRQXVKUSxjRHZGTTtRQ3dGTixtQkFBbUI7UUFDbkIsZ0JBQWdCLEVBQUE7QUF6SnhCO0lBbUtJLGdCQUFnQjtJQUNoQixjRHJIYSxFQUFBO0FDL0NqQjtNQXdLUSxvQkFBb0IsRUFBQTtBQXhLNUI7TUE2S00sZ0JBQWdCO01BQ2hCLG9CQUFvQixFQUFBO0FBOUsxQjtNQWtMTSxjQUFjO01BQ2QsY0RsSVcsRUFBQTtBQ2pEakI7TUF1TE0sY0Q1SFE7TUM2SFIsZ0JBQWdCLEVBQUE7QUF4THRCO0lBK0xNLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWUsRUFBQTtBQWxNckI7TUFxTVEsY0FBYyxFQUFBO0FBck10QjtJQTBNTSxvQkFBb0IsRUFBQTtBQTFNMUI7SUE4TU0sZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsb0JBQW9CLEVBQUE7QUFqTjFCO0lBcU5NLFlBQVksRUFBQTtBQXJObEI7SUF5Tk0sY0FBYztJQUNkLHlCQUF5QjtJQUN6QixXQUFXLEVBQUE7QUEzTmpCO0lBZ09RLHVCQUF1QixFQUFBO0FBaE8vQjtJQTBPSSxjQUFjO0lBQ2QsY0QxTGE7SUMyTGIscUJBQXFCO0lBQ3JCLGtDRDNMYSxFQUFBO0FDbERqQjtNQXVPTSxVQUFVO01BQ1YsU0FBUyxFQUFBO0FBeE9mO0lBaVBJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtBQXBQbkI7TUFzUE0sY0FBYyxFQUFBO0FBdFBwQjtJQXVRSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjRDNOYSxFQUFBO0FDL0NqQjtNQTRRTSxjQUFjLEVBQUE7QUE1UXBCO1FBOFFRLGtDRDVOUztRQzZOVCxtQkFBbUI7UUFDbkIsa0JBQWtCLEVBQUE7QUFoUjFCO1VBa1JVLGNEdk5JO1VDd05KLGlCQUFpQixFQUFBO0FBblIzQjtRQXdSUSxnQkFBZ0IsRUFBQTtBQXhSeEI7VUEwUlUsZ0JBQWdCO1VBQ2hCLFNBQVM7VUFDVCxVQUFVLEVBQUE7QUE1UnBCO01Ba1NRLGtCQUFrQixFQUFBO0FBbFMxQjtNQXFTUSxpQkFBaUI7TUFDakIsVUFBVSxFQUFBO0FBdFNsQjtJQTRTSSxvQkFBb0IsRUFBQTtBQTVTeEI7TUE4U00sZ0JBQWdCO01BQ2hCLGNEaFFXLEVBQUE7QUMvQ2pCO0lBcVRNLGNBQWMsRUFBQTtBQXJUcEI7TUF3VFEsaUJBQWlCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9kZXRhaWxzL2NvbXBvbmVudHMvZGV0YWlscy1wcmludC9kZXRhaWxzLXByaW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXG4vKiBTaGFkb3dzICovXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbi8qIEFuaW1hdGlvbnMgKi9cbi8qIEJvcmRlcnMgKi9cbi8qIENvcm5lcnMgKi9cbjpob3N0IHtcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0OyB9XG4gIDpob3N0IC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUuM21tIDFtbSA4bW0gOG1tOyB9XG4gIDpob3N0IC5wcmludC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAzbW07IH1cbiAgICA6aG9zdCAucHJpbnQtaGVhZGVyIC5sb2dvIHtcbiAgICAgIHdpZHRoOiA4LjZtbTtcbiAgICAgIGhlaWdodDogNS42bW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuM21tO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxN2FjZTsgfVxuICAgIDpob3N0IC5wcmludC1oZWFkZXIgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMy4zbW07IH1cbiAgICAgIDpob3N0IC5wcmludC1oZWFkZXIgLnRpdGxlIHAge1xuICAgICAgICBtYXJnaW46IDA7IH1cbiAgICA6aG9zdCAucHJpbnQtaGVhZGVyIC51cmwge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBmb250LXNpemU6IDIuNm1tO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMDE3YWNlOyB9XG4gIDpob3N0IC5nZW5lcmFsLWluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDQuNm1tOyB9XG4gICAgOmhvc3QgLmdlbmVyYWwtaW5mbyAuYnVpbGRpbmctdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XG4gICAgOmhvc3QgLmdlbmVyYWwtaW5mbyAucnVsZXMtbGlzdCwgOmhvc3QgLmdlbmVyYWwtaW5mbyAuYWRkcmVzcy1saXN0LCA6aG9zdCAuZ2VuZXJhbC1pbmZvIC5idWlsZGluZy1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDIuNm1tO1xuICAgICAgY29sb3I6ICMyMjIyMjI7IH1cbiAgICA6aG9zdCAuZ2VuZXJhbC1pbmZvIC5hZGRyZXNzLWxpc3Qge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMCAwIDEuM21tIDA7XG4gICAgICBwYWRkaW5nOiAwOyB9XG4gICAgOmhvc3QgLmdlbmVyYWwtaW5mbyAucnVsZXMtbGlzdCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDsgfVxuICAgICAgOmhvc3QgLmdlbmVyYWwtaW5mbyAucnVsZXMtbGlzdCBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgOmhvc3QgLmdlbmVyYWwtaW5mbyAucnVsZXMtbGlzdCBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDEuM21tIDAgMS4zbW07XG4gICAgICAgIGNvbnRlbnQ6ICfigKInOyB9XG4gICAgOmhvc3QgLmdlbmVyYWwtaW5mbyAuYnVpbGRpbmctZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAyLjZtbSAwIDIuNm1tIDA7IH1cbiAgICA6aG9zdCAuZ2VuZXJhbC1pbmZvIC5kZWFkbGluZS1ibG9jayAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyLjZtbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzgwODA4MDsgfVxuICAgIDpob3N0IC5nZW5lcmFsLWluZm8gLmRlYWRsaW5lLWJsb2NrIC5kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogNC42bW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzMzMzMzM7IH1cbiAgICA6aG9zdCAuZ2VuZXJhbC1pbmZvIC50cmFuc2l0LW9wdGlvbnMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMi42bW07IH1cbiAgICAgIDpob3N0IC5nZW5lcmFsLWluZm8gLnRyYW5zaXQtb3B0aW9ucyAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIuNm1tO1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMW1tOyB9XG4gICAgICA6aG9zdCAuZ2VuZXJhbC1pbmZvIC50cmFuc2l0LW9wdGlvbnMgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAgICAgOmhvc3QgLmdlbmVyYWwtaW5mbyAudHJhbnNpdC1vcHRpb25zIHVsIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDVtbTtcbiAgICAgICAgICBoZWlnaHQ6IDVtbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxbW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjFtbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICA6aG9zdCAuZ2VuZXJhbC1pbmZvIC5hbWVuaXRpZXMge1xuICAgICAgZm9udC1zaXplOiAyLjZtbTtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMW1tOyB9XG4gICAgICA6aG9zdCAuZ2VuZXJhbC1pbmZvIC5hbWVuaXRpZXMgLnRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMW1tOyB9XG4gICAgICA6aG9zdCAuZ2VuZXJhbC1pbmZvIC5hbWVuaXRpZXMgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAgICAgOmhvc3QgLmdlbmVyYWwtaW5mbyAuYW1lbml0aWVzIHVsIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgICAgOmhvc3QgLmdlbmVyYWwtaW5mbyAuYW1lbml0aWVzIHVsIGxpOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICAgICAgICAgIG1hcmdpbjogMCAxLjNtbSAwIDEuM21tO1xuICAgICAgICAgIGNvbnRlbnQ6ICfigKInOyB9XG4gICAgOmhvc3QgLmdlbmVyYWwtaW5mbyAubm90ZXMge1xuICAgICAgZm9udC1zaXplOiAybW07XG4gICAgICBjb2xvcjogIzMzMzMzMzsgfVxuICA6aG9zdCAuc2VjdGlvbi10aXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjlmZjtcbiAgICBoZWlnaHQ6IDhtbTtcbiAgICBwYWRkaW5nOiAxLjZtbSAwIDIuNm1tIDIuNm1tO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNm1tOyB9XG4gICAgOmhvc3QgLnNlY3Rpb24tdGl0bGUgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDMuMW1tO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XG4gICAgICA6aG9zdCAuc2VjdGlvbi10aXRsZSBwIGkge1xuICAgICAgICBjb2xvcjogIzAwYzFkNDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjNtbTtcbiAgICAgICAgZm9udC1zaXplOiAyLjZtbTsgfVxuICA6aG9zdCAud2hvLXNob3VsZC1hcHBseSB7XG4gICAgZm9udC1zaXplOiAyLjZtbTtcbiAgICBjb2xvcjogIzMzMzMzMzsgfVxuICAgIDpob3N0IC53aG8tc2hvdWxkLWFwcGx5IHVsIGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuM21tOyB9XG4gICAgOmhvc3QgLndoby1zaG91bGQtYXBwbHkgLnRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjNtbTsgfVxuICAgIDpob3N0IC53aG8tc2hvdWxkLWFwcGx5IC5kZXRhaWxzIHtcbiAgICAgIGZvbnQtc2l6ZTogMm1tO1xuICAgICAgY29sb3I6ICM4MDgwODA7IH1cbiAgICA6aG9zdCAud2hvLXNob3VsZC1hcHBseSAuaGlnaGxpZ2h0ZWQge1xuICAgICAgY29sb3I6ICMwMTdhY2U7XG4gICAgICBmb250LXdlaWdodDogNjAwOyB9XG4gIDpob3N0IC51bml0LWxpc3RpbmdzIC50YWJsZS1zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDIwNW1tO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgICA6aG9zdCAudW5pdC1saXN0aW5ncyAudGFibGUtc2VjdGlvbiAudW5pdHMtdGFibGUge1xuICAgICAgcGFkZGluZzogMCAybW07IH1cbiAgOmhvc3QgLnVuaXQtbGlzdGluZ3MgLmxhc3QtaW4tc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNS4zbW07IH1cbiAgOmhvc3QgLnVuaXQtbGlzdGluZ3MgLnVuaXQtdHlwZSB7XG4gICAgZm9udC1zaXplOiAyLjZtbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjNtbTsgfVxuICA6aG9zdCAudW5pdC1saXN0aW5ncyB0ci5tYXQtaGVhZGVyLXJvdywgOmhvc3QgLnVuaXQtbGlzdGluZ3MgdHIubWF0LXJvdyB7XG4gICAgaGVpZ2h0OiBhdXRvOyB9XG4gIDpob3N0IC51bml0LWxpc3RpbmdzIHRoLm1hdC1oZWFkZXItY2VsbCwgOmhvc3QgLnVuaXQtbGlzdGluZ3MgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDEuM21tO1xuICAgIGZvbnQtc2l6ZTogMm1tICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDMybW07IH1cbiAgOmhvc3QgLnVuaXQtbGlzdGluZ3MgdHIubWF0LXJvdyBwIHtcbiAgICBtYXJnaW46IDEuM21tIDAgMS4zbW0gMDsgfVxuICA6aG9zdCAuZm9vdG5vdGVzIHtcbiAgICBmb250LXNpemU6IDJtbTtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNS42bW07XG4gICAgYm9yZGVyLWJvdHRvbTogMC4zbW0gc29saWQgI2IzYjNiMzsgfVxuICAgIDpob3N0IC5mb290bm90ZXMgb2wge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDsgfVxuICA6aG9zdCAuZm9vdGVyLWltYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMW1tOyB9XG4gICAgOmhvc3QgLmZvb3Rlci1pbWFnZSBpbWcge1xuICAgICAgd2lkdGg6IDEyMi42bW07IH1cbiAgOmhvc3QgLmhvdy10by1hcHBseSB7XG4gICAgbWFyZ2luLXRvcDogNTVtbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMm1tO1xuICAgIGZvbnQtc2l6ZTogMi4ybW07XG4gICAgY29sb3I6ICMzMzMzMzM7IH1cbiAgICA6aG9zdCAuaG93LXRvLWFwcGx5IC5jb250YWN0LWluZm8ge1xuICAgICAgcGFkZGluZzogMCA4bW07IH1cbiAgICAgIDpob3N0IC5ob3ctdG8tYXBwbHkgLmNvbnRhY3QtaW5mbyAuYWRkcmVzcy1yb3cge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwLjNtbSBzb2xpZCAjYjNiM2IzO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMm1tO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAybW07IH1cbiAgICAgICAgOmhvc3QgLmhvdy10by1hcHBseSAuY29udGFjdC1pbmZvIC5hZGRyZXNzLXJvdyAuaGlnaGxpZ2h0ZWQge1xuICAgICAgICAgIGNvbG9yOiAjMDE3YWNlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4gICAgICA6aG9zdCAuaG93LXRvLWFwcGx5IC5jb250YWN0LWluZm8gLmFkZHJlc3Mtc2VjdGlvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICAgICAgOmhvc3QgLmhvdy10by1hcHBseSAuY29udGFjdC1pbmZvIC5hZGRyZXNzLXNlY3Rpb24gdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICA6aG9zdCAuaG93LXRvLWFwcGx5IC53YXJuaW5nIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMm1tOyB9XG4gICAgOmhvc3QgLmhvdy10by1hcHBseSAud2FybmluZyB1bCB7XG4gICAgICBtYXJnaW46IDAgMCAwIDRtbTtcbiAgICAgIHBhZGRpbmc6IDA7IH1cbiAgOmhvc3QgLmFmdGVyLXN1Ym1pdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNC4ybW07IH1cbiAgICA6aG9zdCAuYWZ0ZXItc3VibWl0IC5ub3RlIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4ybW07XG4gICAgICBjb2xvcjogIzMzMzMzMzsgfVxuICA6aG9zdCAuaW5zdHJ1Y3Rpb25zIC5pbnN0cnVjdGlvbnMtY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDJtbTsgfVxuICAgIDpob3N0IC5pbnN0cnVjdGlvbnMgLmluc3RydWN0aW9ucy1jb250YWluZXIgLmNvbC0xIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIElNUE9SVEFOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUGxlYXNlIGNvbnN1bHQgd2l0aCBZdXJ5IGJlZm9yZSBhZGRpbmcgc29tZSBuZXcgQ1NTIHZhcmlhYmxlcy4gICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFRhYmxlIG9mIENvbnRlbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUeXBvZ3JhcGh5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFRoZW1lIENvbG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTaGFkb3dzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNwYWNpbmcgR3VpZGVsaW5lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQW5pbWF0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBDb3JuZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9UeXBvZ3JhcGh5XG4kZm9udC1tYWluOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtaGVhZGluZzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiRmb250LWxpbmVhd2Vzb21lOiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNnB4LzEgXCJMaW5lQXdlc29tZVwiO1xuJGZvbnQtZm9udGF3ZXNvbWU6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuJGh0bWwtZm9udC1zaXplLWxnOiAxNnB4O1xuJGh0bWwtZm9udC1zaXplLW1kOiAxNXB4O1xuJGh0bWwtZm9udC1zaXplLXNtOiAxNHB4O1xuJGh0bWwtZm9udC1zaXplLXhzOiAxM3B4O1xuXG4kaHRtbC1mb250LXdlaWdodDogNDAwO1xuXG4vLyBUaGVtZSBDb2xvcnNcbiRjb2xvci1vZmZzZXQ6IDYlOyAvLyB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgbGlnaHRlciBhbmQgZGFya2VyIHZhcmllbnRzIG9mIGEgc3BlY2lmaWMgY29sb3JcblxuJGJhc2U6ICNmYWZhZmE7IC8vdXNlZCBwcmltYXJpbHkgYXMgb2ZmLXdoaXRlIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuXG4kcHJpbWFyeTogIzAyMDA2MztcbiRzZWNvbmRhcnk6ICNmYWZhZmE7XG4kc2Vjb25kYXJ5LWJsdWU6IHJnYigxMDksIDE3OCwgMjU1KTsgLy8gd2Ugc2hvdWxkIHJlcGxhY2UgdGhpc1xuJGFjY2VudDogI2ZjYjMyMzsgLy8jMDBjNWRjO1xuJGZvY3VzOiAjOTgxNmY0O1xuXG4kc3VjY2VzczogIzAwZTZhYjtcbiR3YXJuaW5nOiAjZmZiODIyO1xuJGRhbmdlcjogI2ZmMmIyYjsgLy8jZjQ1MTZjO1xuJGluZm86ICM1NTc4ZWI7IC8vIzM2YTNmNztcblxuJG1ldGFsOiAjYzRjNWQ2O1xuJG1ldGFsLWxpZ2h0OiBsaWdodGVuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG4kbWV0YWwtZGFyazogZGFya2VuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG5cbi8vIGdyZXlzXG4kbGlnaHQ6ICNmZmY7XG4kZGFyazogIzJjMmUzZTtcbiRncmV5LTIwOiAjMzMzMzMzO1xuJGdyZXktMzA6ICM0ZDRkNGQ7XG4kZ3JleS01MDogIzgwODA4MDtcbiRncmV5LTcwOiAjYjNiM2IzO1xuJGdyZXktOTA6ICNlNmU2ZTY7XG4kZ3JleS05NTogI2YyZjJmMjtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZjtcblxuLy8gRXh0ZW5kZWQgQ29sb3IgUGFsZXR0ZVxuLy8gVE9ETzogUmV2aWV3IHRoZXNlIGNvbG9yc1xuJGRhcmstYmx1ZTogIzAyMzk3MDtcbiRibHVlOiAjMDE3YWNlO1xuJGNlcnVsZWFuOiAjMDE3YWNlO1xuJGxpZ2h0LWJsdWU6ICNjY2VhZmY7XG4kcGFsZS1ibHVlOiAjZjFmOWZmO1xuJGRhcmstdGVhbDogIzAwNjQ2ZTtcbiR0ZWFsOiAjMDBjMWQ0O1xuJGxpZ2h0LXRlYWw6ICNjY2ZhZmY7XG4kcGFsZS10ZWFsOiAjZjVmZWZmO1xuJGRhcmstZ3JlZW46ICMwYTVjNDA7XG4kZ3JlZW46ICMxNGI4ODE7XG4kbGlnaHQtZ3JlZW46ICNhM2Y1ZDk7XG4kcGFsZS1ncmVlbjogI2Y2ZmVmYjtcbiRkYXJrLXllbGxvdzogIzk5NzQwMDtcbiR5ZWxsb3c6ICNmZmNlMzM7XG4kbGlnaHQteWVsbG93OiAjZmZmM2NjO1xuJHBhbGUteWVsbG93OiAjZmZmZGY1O1xuJGRhcmstcmVkOiAjNjYwYTAwO1xuJHJlZDogI2NjMTQwMDtcbiRsaWdodC1yZWQ6ICNmZmQxY2M7XG4kcGFsZS1yZWQ6ICNmZmY2ZjU7XG5cblxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gIFwiYWNjZW50XCI6ICRhY2NlbnQsXG4gIFwic3VjY2Vzc1wiOiAkc3VjY2VzcywgXG4gIFwid2FybmluZ1wiOiAkd2FybmluZywgXG4gIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJtZXRhbFwiOiAkbWV0YWwsXG4gIFwiZm9jdXNcIjogJGZvY3VzLFxuICBcImdyZXktMjBcIjogJGdyZXktMjAsIFxuICBcImdyZXktMzBcIjogJGdyZXktMzAsXG4gIFwiZ3JleS01MFwiOiAkZ3JleS01MCxcbiAgXCJncmV5LTcwXCI6ICRncmV5LTcwLFxuICBcImdyZXktOTBcIjogJGdyZXktOTAsXG4gIFwiZ3JleS05NVwiOiAkZ3JleS05NSxcbiAgXCJiYXNlXCI6ICRiYXNlLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcIndoaXRlXCI6ICR3aGl0ZSxcbiAgXCJibGFja1wiOiAkYmxhY2ssXG4gIFwiYmx1ZVwiOiAkYmx1ZVxuKTtcblxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG4kZ3Qtc21hbGwtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHNtKSAhZGVmYXVsdDsgLy8gNTc2XG4kZ3QtbWVkaXVtLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBtZCkgIWRlZmF1bHQ7IC8vIDc2OFxuJGd0LWxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBsZykgIWRlZmF1bHQ7IC8vIDk5MlxuJGd0LXhsYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgeGwpICFkZWZhdWx0OyAvLyAxMjAwXG5cbi8qIFNoYWRvd3MgKi9cbiRzaGFkb3ctc206IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XG4kc2hhZG93LW1kOiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMDgpOyAvL2RlZmF1bHRcbiRzaGFkb3ctbGc6IDAgMTVweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwwLDAsMC4wOCk7XG4kc2hhZG93LWVsZXZhdGU6ICRzaGFkb3ctbGc7IC8vIG9uIGhvdmVyXG5cbi8qIFNwYWNpbmcgR3VpZGVsaW5lcyAqL1xuJHNwYWNpbmcteHhzOiAwLjMzM3JlbTsgICAgIC8vIHNtYWxsIGdhcCAgICAgICAgICAgLSA1cHggICAgKHh4cylcbiRzcGFjaW5nLXhzOiAwLjY2N3JlbTsgICAgICAvLyBSZWxhdGVkIERpcmVjdGx5ICAgIC0gMTBweCAgICh4cylcbiRzcGFjaW5nLXNtOiAxcmVtOyAgICAgICAgICAvLyBSZWxhdGVkIEluZGlyZWN0bHkgIC0gMTVweCAgIChzbSlcbiRzcGFjaW5nLW1kOiAxLjMzcmVtOyAgICAgICAvLyBSZWxhdGVkIEdyb3VwICAgICAgIC0gMjBweCAgIChtZCkgIC8vZGVmYXVsdFxuJHNwYWNpbmctbGc6IDJyZW07ICAgICAgICAgIC8vIFVucmVsYXRlZCBHcm91cCAgICAgLSAzMHB4ICAgKGxnKVxuJHNwYWNpbmcteGw6IDIuNjY3cmVtOyAgICAgIC8vIE5ldyBTZWN0aW9uICAgICAgICAgLSA0MHB4ICAgKHhsKVxuJHNwYWNpbmcteHhsOiA0cmVtOyAgICAgICAgIC8vIE5ldyBTZWN0aW9uIChMYXJnZSkgLSA2MHB4ICAgKHh4bClcblxuJHNwYWNpbmctc2l6ZXM6IChcbiAgXCIwXCI6IDAsXG4gIFwiNVwiOiAkc3BhY2luZy14eHMsXG4gIFwiMTBcIjogJHNwYWNpbmcteHMsXG4gIFwiMTVcIjogJHNwYWNpbmctc20sXG4gIFwiMjBcIjogJHNwYWNpbmctbWQsXG4gIFwiMzBcIjogJHNwYWNpbmctbGcsXG4gIFwiNDBcIjogJHNwYWNpbmcteGwsXG4gIFwiNjBcIjogJHNwYWNpbmcteHhsLFxuICBcIjE1LWVtXCI6IDEuNXJlbSxcbiAgXCIyMi1lbVwiOiAyLjJyZW0sXG4gIFwieHhzXCI6ICRzcGFjaW5nLXh4cyxcbiAgXCJ4c1wiOiAkc3BhY2luZy14cyxcbiAgXCJzbVwiOiAkc3BhY2luZy1zbSxcbiAgXCJtZFwiOiAkc3BhY2luZy1tZCxcbiAgXCJsZ1wiOiAkc3BhY2luZy1sZyxcbiAgXCJ4bFwiOiAkc3BhY2luZy14bCxcbiAgXCJ4eGxcIjogJHNwYWNpbmcteHhsLCAgXG4gICk7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbiRhbmltYXRpb24teHM6IGFsbCAwLjFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1zaDogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLW1kOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7IC8vZGVmYXVsdFxuJGFuaW1hdGlvbi1sZzogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXhsOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teHhsOiBhbGwgMS4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblxuJGFuaW1hdGlvbi1kZWZhdWx0OiAkYW5pbWF0aW9uLW1kO1xuXG4kYW5pbWF0aW9uLWZhZGUtaW46IGZhZGUtaW4gMXMgYm90aDtcbiRhbmltYXRpb24tZmFkZS1vdXQ6IGZhZGUtb3V0IDFzIGVhc2Utb3V0IGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tdG9wOiBmYWRlLWluLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tOiBmYWRlLWluLWJvdHRvbSAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyOiBwdWZmLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjQ3MCwgMC4wMDAsIDAuNzQ1LCAwLjcxNSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyOiBwdWZmLW91dC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBib3RoO1xuJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsOiBzaGFrZS1ob3Jpem9udGFsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1KSBib3RoO1xuJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2s6IGZvY3VzLWluLWNvbnRyYWN0LWJjayAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7IC8vIGZvciB0ZXh0XG4kYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3A6IHNjYWxlLWluLXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4kYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wOiBzY2FsZS1vdXQtdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbiRhbmltYXRpb24tcHVsc2UtaW5maW5pdGU6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIGluZmluaXRlO1xuJGFuaW1hdGlvbi1wdWxzZS0zOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyAzO1xuJGFuaW1hdGlvbi1wdWxzZS0xOiBzaGFkb3ctcHVsc2UgMXMgMTtcblxuLy8gWW91IGNhbiB1c2UgYW55IG9mIHRoZXNlIG5hbWVzIHRvIGFuaW1hdGUgSFRNTCBlbGVtZW50cyBvbiBpbml0aWF0aW9uXG4kYW5pbWF0aW9uczogKFxuICBcImZhZGUtaW5cIjogJGFuaW1hdGlvbi1mYWRlLWluLFxuICBcImZhZGUtb3V0XCI6ICRhbmltYXRpb24tZmFkZS1vdXQsXG4gIFwiZmFkZS1pbi10b3BcIjogJGFuaW1hdGlvbi1mYWRlLWluLXRvcCxcbiAgXCJmYWRlLWluLWJvdHRvbVwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tLFxuICBcInB1ZmYtaW4tY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXIsXG4gIFwicHVmZi1vdXQtY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyLFxuICBcInNoYWtlLWhvcml6b250YWxcIjogJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsLFxuICBcImZvY3VzLWluLWNvbnRyYWN0LWJja1wiOiAkYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjayxcbiAgXCJzY2FsZS1pbi12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcCxcbiAgXCJzY2FsZS1vdXQtdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wLFxuICBcInB1bHNlLWluZmluaXRlXCI6ICRhbmltYXRpb24tcHVsc2UtaW5maW5pdGUsXG4gIFwicHVsc2UtM1wiOiAkYW5pbWF0aW9uLXB1bHNlLTMsXG4gIFwicHVsc2UtMVwiOiAkYW5pbWF0aW9uLXB1bHNlLTFcbik7XG5cbi8qIEJvcmRlcnMgKi9cbiRib3JkZXItc2l6ZS1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXNpemUtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXNpemUtbGc6IDAuNXJlbTtcbiRib3JkZXItc2l6ZS0xOiAxcHg7XG4kYm9yZGVyLXNpemUtMjogMnB4O1xuJGJvcmRlci1zaXplLTM6IDNweDtcbiRib3JkZXItc2l6ZS01OiA1cHg7XG4kYm9yZGVyLXNpemUtMTA6IDEwcHg7XG5cbiRib3JkZXItc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXNpemUtc20sXG4gIFwibWRcIjogJGJvcmRlci1zaXplLW1kLFxuICBcImxnXCI6ICRib3JkZXItc2l6ZS1sZyxcbiAgXCIxXCI6ICRib3JkZXItc2l6ZS0xLFxuICBcIjJcIjogJGJvcmRlci1zaXplLTIsXG4gIFwiM1wiOiAkYm9yZGVyLXNpemUtMyxcbiAgXCI1XCI6ICRib3JkZXItc2l6ZS01LFxuICBcIjEwXCI6ICRib3JkZXItc2l6ZS0xMFxuKTtcblxuLyogQ29ybmVycyAqL1xuJGJvcmRlci1yYWRpdXMtc206IDAuMTI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1sZzogMC41cmVtO1xuJGJvcmRlci1yYWRpdXMtMjogMnB4O1xuJGJvcmRlci1yYWRpdXMtNDogNHB4O1xuJGJvcmRlci1yYWRpdXMtNjogNnB4O1xuJGJvcmRlci1yYWRpdXMtMTA6IDEwcHg7XG4kYm9yZGVyLXJhZGl1cy0xNTogMTVweDtcbiRib3JkZXItcmFkaXVzLTIwOiAyMHB4O1xuJGJvcmRlci1yYWRpdXMtaGFsZjogNTAlO1xuJGJvcmRlci1yYWRpdXMtZnVsbDogMTAwJTtcblxuJGJvcmRlci1yYWRpdXMtc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXJhZGl1cy1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXJhZGl1cy1tZCwgLy9kZWZhdWx0XG4gIFwibGdcIjogJGJvcmRlci1yYWRpdXMtbGcsXG4gIFwiMlwiOiAkYm9yZGVyLXJhZGl1cy0yLFxuICBcIjRcIjogJGJvcmRlci1yYWRpdXMtNCxcbiAgXCI2XCI6ICRib3JkZXItcmFkaXVzLTYsXG4gIFwiMTBcIjogJGJvcmRlci1yYWRpdXMtMTAsXG4gIFwiMTVcIjogJGJvcmRlci1yYWRpdXMtMTUsXG4gIFwiMjBcIjogJGJvcmRlci1yYWRpdXMtMjAsXG4gIFwiaGFsZlwiOiAkYm9yZGVyLXJhZGl1cy1oYWxmLFxuICBcImZ1bGxcIjogJGJvcmRlci1yYWRpdXMtZnVsbCxcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuXG5cblxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1LjNtbSAxbW0gOG1tIDhtbTtcbiAgfVxuICAucHJpbnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogM21tO1xuXG4gICAgLmxvZ28ge1xuICAgICAgd2lkdGg6IDguNm1tO1xuICAgICAgaGVpZ2h0OiA1LjZtbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMS4zbW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAzLjNtbTtcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVybCB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMi42bW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICRibHVlO1xuICAgIH1cbiAgfVxuXG4gIC5nZW5lcmFsLWluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDQuNm1tO1xuXG4gICAgLmJ1aWxkaW5nLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogJGdyZXktMjA7XG4gICAgfVxuXG4gICAgLnJ1bGVzLWxpc3QsIC5hZGRyZXNzLWxpc3QsIC5idWlsZGluZy1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDIuNm1tO1xuICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgfVxuICAgIFxuICAgIC5hZGRyZXNzLWxpc3Qge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMCAwIDEuM21tIDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5ydWxlcy1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDEuM21tIDAgMS4zbW07XG4gICAgICAgIGNvbnRlbnQ6ICfigKInO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idWlsZGluZy1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW46IDIuNm1tIDAgMi42bW0gMDtcbiAgICB9XG5cbiAgICAuZGVhZGxpbmUtYmxvY2sge1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjZtbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICRncmV5LTUwO1xuICAgICAgfVxuXG4gICAgICAuZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNC42bW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAkZ3JleS0yMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudHJhbnNpdC1vcHRpb25zIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNm1tO1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjZtbTtcbiAgICAgICAgY29sb3I6ICRncmV5LTIwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxbW07XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiA1bW07XG4gICAgICAgICAgaGVpZ2h0OiA1bW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMW1tO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMy4xbW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYW1lbml0aWVzIHtcbiAgICAgIGZvbnQtc2l6ZTogMi42bW07XG4gICAgICBjb2xvcjogJGdyZXktMjA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxbW07XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxbW07XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICAgICAgICBtYXJnaW46IDAgMS4zbW0gMCAxLjNtbTtcbiAgICAgICAgICBjb250ZW50OiAn4oCiJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5ub3RlcyB7XG4gICAgICBmb250LXNpemU6IDJtbTtcbiAgICAgIGNvbG9yOiAkZ3JleS0yMDtcbiAgICB9XG4gIH1cblxuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBhbGUtYmx1ZTtcbiAgICBoZWlnaHQ6IDhtbTtcbiAgICBwYWRkaW5nOiAxLjZtbSAwIDIuNm1tIDIuNm1tO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNm1tO1xuXG4gICAgcCB7XG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICR0ZWFsO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuM21tO1xuICAgICAgICBmb250LXNpemU6IDIuNm1tO1xuICAgICAgfVxuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAzLjFtbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogJGdyZXktMjA7XG4gICAgfVxuICB9XG5cbiAgLndoby1zaG91bGQtYXBwbHkge1xuICAgIGZvbnQtc2l6ZTogMi42bW07XG4gICAgY29sb3I6ICRncmV5LTIwO1xuXG4gICAgdWwge1xuICAgICAgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjNtbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuM21tO1xuICAgIH1cblxuICAgIC5kZXRhaWxzIHtcbiAgICAgIGZvbnQtc2l6ZTogMm1tO1xuICAgICAgY29sb3I6ICRncmV5LTUwO1xuICAgIH1cblxuICAgIC5oaWdobGlnaHRlZCB7XG4gICAgICBjb2xvcjogJGJsdWU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuXG4gIC51bml0LWxpc3RpbmdzIHtcblxuICAgIC50YWJsZS1zZWN0aW9uIHtcbiAgICAgIGhlaWdodDogMjA1bW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgLnVuaXRzLXRhYmxlIHtcbiAgICAgICAgcGFkZGluZzogMCAybW07XG4gICAgICB9XG5cbiAgICB9XG4gICAgLmxhc3QtaW4tc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1LjNtbTtcbiAgICB9XG5cbiAgICAudW5pdC10eXBlIHtcbiAgICAgIGZvbnQtc2l6ZTogMi42bW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS4zbW07XG4gICAgfVxuXG4gICAgdHIubWF0LWhlYWRlci1yb3csIHRyLm1hdC1yb3cge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwge1xuICAgICAgcGFkZGluZzogMS4zbW07XG4gICAgICBmb250LXNpemU6IDJtbSAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDMybW07XG4gICAgfVxuXG4gICAgdHIubWF0LXJvdyB7XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAxLjNtbSAwIDEuM21tIDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvb3Rub3RlcyB7XG4gICAgb2wge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgZm9udC1zaXplOiAybW07XG4gICAgY29sb3I6ICRncmV5LTUwO1xuICAgIHBhZGRpbmctYm90dG9tOiA1LjZtbTtcbiAgICBib3JkZXItYm90dG9tOiAwLjNtbSBzb2xpZCAkZ3JleS03MDtcbiAgfVxuXG4gIC5mb290ZXItaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxbW07XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMjIuNm1tO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRhYmxlIHtcbiAgLy8gICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAvLyB9XG5cbiAgLy8gdHIubWF0LXJvdzpsYXN0LWNoaWxkIHtcbiAgLy8gICBib3JkZXItYm90dG9tLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG5cbiAgLy8gICB0ZC5tYXQtY2VsbCB7XG4gIC8vICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLmhvdy10by1hcHBseSB7XG4gICAgbWFyZ2luLXRvcDogNTVtbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMm1tO1xuICAgIGZvbnQtc2l6ZTogMi4ybW07XG4gICAgY29sb3I6ICRncmV5LTIwO1xuICAgIC5jb250YWN0LWluZm8ge1xuICAgICAgcGFkZGluZzogMCA4bW07XG4gICAgICAuYWRkcmVzcy1yb3cge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwLjNtbSBzb2xpZCAkZ3JleS03MDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJtbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMm1tO1xuICAgICAgICAuaGlnaGxpZ2h0ZWQge1xuICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWRkcmVzcy1zZWN0aW9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLndhcm5pbmcge1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJtbTtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCA0bW07O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hZnRlci1zdWJtaXQge1xuICAgIG1hcmdpbi1ib3R0b206IDQuMm1tO1xuICAgIC5ub3RlIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4ybW07XG4gICAgICBjb2xvcjogJGdyZXktMjA7XG4gICAgfVxuICB9XG5cbiAgLmluc3RydWN0aW9ucyB7XG4gICAgLmluc3RydWN0aW9ucy1jb250YWluZXIge1xuICAgICAgZm9udC1zaXplOiAybW07XG5cbiAgICAgIC5jb2wtMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/details/components/details-print/details-print.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/details/components/details-print/details-print.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DetailsPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPrintComponent", function() { return DetailsPrintComponent; });
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

var DetailsPrintComponent = /** @class */ (function () {
    function DetailsPrintComponent() {
        this.units = [
            {
                type: 'Studios',
                units: [
                    {
                        households: [
                            {
                                size: '1',
                                income: {
                                    min: '15429',
                                    max: '21930',
                                },
                            }
                        ],
                        rent: '395',
                        amount: '4',
                    },
                    {
                        households: [
                            {
                                size: '1',
                                income: {
                                    min: '21155',
                                    max: '29240',
                                },
                            }
                        ],
                        rent: '562',
                        amount: '6',
                    },
                    {
                        households: [
                            {
                                size: '1',
                                income: {
                                    min: '26880',
                                    max: '36550',
                                },
                            }
                        ],
                        rent: '729',
                        amount: '6',
                    },
                    {
                        households: [
                            {
                                size: '1',
                                income: {
                                    min: '32606',
                                    max: '43860',
                                },
                            },
                        ],
                        rent: '896',
                        amount: '20',
                    },
                ]
            },
            {
                type: '1 Bedroom',
                units: [
                    {
                        households: [
                            {
                                size: '1',
                                income: {
                                    min: '16560',
                                    max: '21930',
                                },
                            },
                            {
                                size: '2',
                                income: {
                                    min: '16560',
                                    max: '25050',
                                }
                            }
                        ],
                        rent: '426',
                        amount: '10'
                    },
                    {
                        households: [
                            {
                                size: '1',
                                income: {
                                    min: '22698',
                                    max: '29240',
                                },
                            },
                            {
                                size: '2',
                                income: {
                                    min: '22698',
                                    max: '33400',
                                },
                            },
                        ],
                        rent: '605',
                        amount: '15'
                    },
                    {
                        households: [
                            {
                                size: '1',
                                income: {
                                    min: '28835',
                                    max: '36550',
                                },
                            },
                            {
                                size: '2',
                                income: {
                                    min: '28835',
                                    max: '41750',
                                },
                            },
                        ],
                        rent: '784',
                        amount: '15'
                    },
                    {
                        households: [
                            {
                                size: '1',
                                income: {
                                    min: '34972',
                                    max: '43860',
                                },
                            },
                            {
                                size: '2',
                                income: {
                                    min: '34972',
                                    max: '50100',
                                },
                            }
                        ],
                        rent: '963',
                        amount: '65'
                    },
                ],
            },
            {
                type: '2 Bedrooms',
                units: [
                    {
                        households: [
                            {
                                size: '2',
                                income: {
                                    min: '19852',
                                    max: '25050',
                                },
                            },
                            {
                                size: '3',
                                income: {
                                    min: '19852',
                                    max: '28170',
                                },
                            },
                            {
                                size: '4',
                                income: {
                                    min: '19852',
                                    max: '31290',
                                },
                            },
                        ],
                        rent: '521',
                        amount: '6'
                    },
                    {
                        households: [
                            {
                                size: '2',
                                income: {
                                    min: '27223',
                                    max: '33400',
                                },
                            },
                            {
                                size: '3',
                                income: {
                                    min: '27223',
                                    max: '37560',
                                },
                            },
                            {
                                size: '4',
                                income: {
                                    min: '27223',
                                    max: '41720',
                                },
                            },
                        ],
                        rent: '736',
                        amount: '9'
                    },
                    {
                        households: [
                            {
                                size: '2',
                                income: {
                                    min: '34595',
                                    max: '41750',
                                },
                            },
                            {
                                size: '3',
                                income: {
                                    min: '34595',
                                    max: '46950',
                                },
                            },
                            {
                                size: '4',
                                income: {
                                    min: '34595',
                                    max: '52150',
                                },
                            },
                        ],
                        rent: '951',
                        amount: '9'
                    },
                    {
                        households: [
                            {
                                size: '2',
                                income: {
                                    min: '41966',
                                    max: '50100',
                                },
                            },
                            {
                                size: '3',
                                income: {
                                    min: '41966',
                                    max: '56340',
                                },
                            },
                            {
                                size: '4',
                                income: {
                                    min: '41966',
                                    max: '62580',
                                },
                            },
                        ],
                        rent: '1166',
                        amount: '33'
                    },
                ],
            },
            {
                type: '3 Bedrooms',
                units: [
                    {
                        households: [
                            {
                                size: '3',
                                income: {
                                    min: '22903',
                                    max: '28170',
                                },
                            },
                            {
                                size: '4',
                                income: {
                                    min: '22903',
                                    max: '31290',
                                },
                            },
                            {
                                size: '5',
                                income: {
                                    min: '22903',
                                    max: '33810',
                                },
                            },
                            {
                                size: '6',
                                income: {
                                    min: '22903',
                                    max: '36300',
                                },
                            },
                        ],
                        rent: '594',
                        amount: '4'
                    },
                    {
                        households: [
                            {
                                size: '3',
                                income: {
                                    min: '31440',
                                    max: '37560',
                                },
                            },
                            {
                                size: '4',
                                income: {
                                    min: '31440',
                                    max: '41720',
                                },
                            },
                            {
                                size: '5',
                                income: {
                                    min: '31440',
                                    max: '45080',
                                },
                            },
                            {
                                size: '6',
                                income: {
                                    min: '31440',
                                    max: '51760',
                                },
                            },
                        ],
                        rent: '843',
                        amount: '6'
                    },
                    {
                        households: [
                            {
                                size: '3',
                                income: {
                                    min: '39943',
                                    max: '46950',
                                },
                            },
                            {
                                size: '4',
                                income: {
                                    min: '39943',
                                    max: '52150',
                                },
                            },
                            {
                                size: '5',
                                income: {
                                    min: '39943',
                                    max: '56350',
                                },
                            },
                            {
                                size: '6',
                                income: {
                                    min: '39943',
                                    max: '60500',
                                },
                            },
                        ],
                        rent: '1091',
                        amount: '6'
                    },
                    {
                        households: [
                            {
                                size: '3',
                                income: {
                                    min: '48446',
                                    max: '56340',
                                },
                            },
                            {
                                size: '4',
                                income: {
                                    min: '48446',
                                    max: '62580',
                                },
                            },
                            {
                                size: '5',
                                income: {
                                    min: '48446',
                                    max: '67620',
                                },
                            },
                            {
                                size: '6',
                                income: {
                                    min: '48446',
                                    max: '72600',
                                },
                            },
                        ],
                        rent: '1339',
                        amount: '26'
                    },
                ],
            },
        ];
        this.displayedColumns = ['size', 'income', 'rent', 'amount'];
    }
    DetailsPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-print',
            template: __webpack_require__(/*! ./details-print.component.html */ "./src/app/modules/details/components/details-print/details-print.component.html"),
            styles: [__webpack_require__(/*! ./details-print.component.scss */ "./src/app/modules/details/components/details-print/details-print.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsPrintComponent);
    return DetailsPrintComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/components/how-to-apply/how-to-apply.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/details/components/how-to-apply/how-to-apply.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section margin-top-40 margin-bottom-40\" id=\"howtoapply\">\n  <div class=\"container\">\n    <div class=\"row padding-top-60 padding-bottom-60\">\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"col-highlighted m--bg-accent m--font-light rounded shadow padding-22-em\">\n          <div class=\"list-group no-separator condensed\">\n            <div class=\"list-item\" *ngFor=\"let warning of applicationWarnings\">\n              <div class=\"list-item-icon icon-sm\">\n                <span>\n                  <i class=\"la la-check-circle\"></i>\n                </span>\n              </div>\n              <div class=\"list-item-label\">\n                <div class=\"list-item-subtitle\">\n                  {{warning}}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <h2 class=\"text-center\">\n          Apply Online\n        </h2>\n        <p class=\"description\">\n          Once you have confirmed you meet the requirements to apply for this lottery you may apply directly online.\n        </p>\n        <div class=\"text-center\">\n          <a href=\"javascript:;\" (click)=\"canApply && onApplyLottery()\" class=\"btn btn-primary m-btn m-btn--icon m-btn--pill\">\n            <i class=\"la la-send\" *ngIf=\"canApply\"></i> {{canApply | canApplyPipe}}\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12\" *ngIf=\"lottery.paperApplicationDelivery && lottery.paperApplicationDelivery.length\">\n        <h2 class=\"text-center\">Apply by Mail</h2>\n        <p>To request an application by mail, send a self-addressed envelope to:</p>\n        <div *ngFor=\"let paperApp of lottery.paperApplicationDelivery; let i = index\">\n          <div *ngIf=\"i > 0\" class=\"m--margin-top-10 m--margin-bottom-10\">OR</div>\n          <p class=\"m--font-bolder\">\n            <span *ngIf=\"paperApp.poBoxNumber\">P.O. Box {{paperApp.poBoxNumber}}<br /></span>\n            {{paperApp.address}}<br />\n            {{paperApp.city}}, {{paperApp.state}} {{paperApp.zip}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"section margin-top-30 padding-bottom-30 \" id=\"agencies\">\n  <div class=\"page-container\">\n    <div class=\"row padding-top-20 padding-bottom-20\">\n      <div class=\"col-md-12\">\n        <div class=\"text-center\">\n          Mayor Bill de Blasio | DCA Commissioner Maria Torres-Springer\n        </div>\n        <div class=\"text-center\" *ngFor=\"let adAgency of advertisementContent?.adContentAgency\">\n          <b>{{adAgency.agency?.name}}</b>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/details/components/how-to-apply/how-to-apply.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/details/components/how-to-apply/how-to-apply.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host {\n  background-color: #ffffff;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL2hvdy10by1hcHBseS9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL2hvdy10by1hcHBseS9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXBwXFxtb2R1bGVzXFxkZXRhaWxzXFxjb21wb25lbnRzXFxob3ctdG8tYXBwbHlcXGhvdy10by1hcHBseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQStGQSwyQkFBQTtBQWFBLFlBQUE7QUFNQSx1QkFBQTtBQTZCQSxlQUFBO0FBeUNBLFlBQUE7QUFxQkEsWUFBQTtBQ3ZOQTtFQUNFLHlCRHFEYTtFQ3BEYixjQUFjLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9kZXRhaWxzL2NvbXBvbmVudHMvaG93LXRvLWFwcGx5L2hvdy10by1hcHBseS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQbGVhc2UgY29uc3VsdCB3aXRoIFl1cnkgYmVmb3JlIGFkZGluZyBzb21lIG5ldyBDU1MgdmFyaWFibGVzLiAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogVGFibGUgb2YgQ29udGVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFR5cG9ncmFwaHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVGhlbWUgQ29sb3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNoYWRvd3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU3BhY2luZyBHdWlkZWxpbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBBbmltYXRpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIENvcm5lcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL1R5cG9ncmFwaHlcbiRmb250LW1haW46IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1oZWFkaW5nOiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtbGluZWF3ZXNvbWU6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE2cHgvMSBcIkxpbmVBd2Vzb21lXCI7XG4kZm9udC1mb250YXdlc29tZTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4kaHRtbC1mb250LXNpemUtbGc6IDE2cHg7XG4kaHRtbC1mb250LXNpemUtbWQ6IDE1cHg7XG4kaHRtbC1mb250LXNpemUtc206IDE0cHg7XG4kaHRtbC1mb250LXNpemUteHM6IDEzcHg7XG5cbiRodG1sLWZvbnQtd2VpZ2h0OiA0MDA7XG5cbi8vIFRoZW1lIENvbG9yc1xuJGNvbG9yLW9mZnNldDogNiU7IC8vIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBsaWdodGVyIGFuZCBkYXJrZXIgdmFyaWVudHMgb2YgYSBzcGVjaWZpYyBjb2xvclxuXG4kYmFzZTogI2ZhZmFmYTsgLy91c2VkIHByaW1hcmlseSBhcyBvZmYtd2hpdGUgYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG5cbiRwcmltYXJ5OiAjMDIwMDYzO1xuJHNlY29uZGFyeTogI2ZhZmFmYTtcbiRzZWNvbmRhcnktYmx1ZTogcmdiKDEwOSwgMTc4LCAyNTUpOyAvLyB3ZSBzaG91bGQgcmVwbGFjZSB0aGlzXG4kYWNjZW50OiAjZmNiMzIzOyAvLyMwMGM1ZGM7XG4kZm9jdXM6ICM5ODE2ZjQ7XG5cbiRzdWNjZXNzOiAjMDBlNmFiO1xuJHdhcm5pbmc6ICNmZmI4MjI7XG4kZGFuZ2VyOiAjZmYyYjJiOyAvLyNmNDUxNmM7XG4kaW5mbzogIzU1NzhlYjsgLy8jMzZhM2Y3O1xuXG4kbWV0YWw6ICNjNGM1ZDY7XG4kbWV0YWwtbGlnaHQ6IGxpZ2h0ZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcbiRtZXRhbC1kYXJrOiBkYXJrZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcblxuLy8gZ3JleXNcbiRsaWdodDogI2ZmZjtcbiRkYXJrOiAjMmMyZTNlO1xuJGdyZXktMjA6ICMzMzMzMzM7XG4kZ3JleS0zMDogIzRkNGQ0ZDtcbiRncmV5LTUwOiAjODA4MDgwO1xuJGdyZXktNzA6ICNiM2IzYjM7XG4kZ3JleS05MDogI2U2ZTZlNjtcbiRncmV5LTk1OiAjZjJmMmYyO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG4vLyBFeHRlbmRlZCBDb2xvciBQYWxldHRlXG4vLyBUT0RPOiBSZXZpZXcgdGhlc2UgY29sb3JzXG4kZGFyay1ibHVlOiAjMDIzOTcwO1xuJGJsdWU6ICMwMTdhY2U7XG4kY2VydWxlYW46ICMwMTdhY2U7XG4kbGlnaHQtYmx1ZTogI2NjZWFmZjtcbiRwYWxlLWJsdWU6ICNmMWY5ZmY7XG4kZGFyay10ZWFsOiAjMDA2NDZlO1xuJHRlYWw6ICMwMGMxZDQ7XG4kbGlnaHQtdGVhbDogI2NjZmFmZjtcbiRwYWxlLXRlYWw6ICNmNWZlZmY7XG4kZGFyay1ncmVlbjogIzBhNWM0MDtcbiRncmVlbjogIzE0Yjg4MTtcbiRsaWdodC1ncmVlbjogI2EzZjVkOTtcbiRwYWxlLWdyZWVuOiAjZjZmZWZiO1xuJGRhcmsteWVsbG93OiAjOTk3NDAwO1xuJHllbGxvdzogI2ZmY2UzMztcbiRsaWdodC15ZWxsb3c6ICNmZmYzY2M7XG4kcGFsZS15ZWxsb3c6ICNmZmZkZjU7XG4kZGFyay1yZWQ6ICM2NjBhMDA7XG4kcmVkOiAjY2MxNDAwO1xuJGxpZ2h0LXJlZDogI2ZmZDFjYztcbiRwYWxlLXJlZDogI2ZmZjZmNTtcblxuXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJhY2NlbnRcIjogJGFjY2VudCxcbiAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLCBcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLCBcbiAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgXCJpbmZvXCI6ICRpbmZvLFxuICBcIm1ldGFsXCI6ICRtZXRhbCxcbiAgXCJmb2N1c1wiOiAkZm9jdXMsXG4gIFwiZ3JleS0yMFwiOiAkZ3JleS0yMCwgXG4gIFwiZ3JleS0zMFwiOiAkZ3JleS0zMCxcbiAgXCJncmV5LTUwXCI6ICRncmV5LTUwLFxuICBcImdyZXktNzBcIjogJGdyZXktNzAsXG4gIFwiZ3JleS05MFwiOiAkZ3JleS05MCxcbiAgXCJncmV5LTk1XCI6ICRncmV5LTk1LFxuICBcImJhc2VcIjogJGJhc2UsXG4gIFwibGlnaHRcIjogJGxpZ2h0LFxuICBcImRhcmtcIjogJGRhcmssXG4gIFwid2hpdGVcIjogJHdoaXRlLFxuICBcImJsYWNrXCI6ICRibGFjayxcbiAgXCJibHVlXCI6ICRibHVlXG4pO1xuXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcbiRndC1zbWFsbC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgc20pICFkZWZhdWx0OyAvLyA1NzZcbiRndC1tZWRpdW0td2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIG1kKSAhZGVmYXVsdDsgLy8gNzY4XG4kZ3QtbGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIGxnKSAhZGVmYXVsdDsgLy8gOTkyXG4kZ3QteGxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCB4bCkgIWRlZmF1bHQ7IC8vIDEyMDBcblxuLyogU2hhZG93cyAqL1xuJHNoYWRvdy1zbTogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEwKTtcbiRzaGFkb3ctbWQ6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4wOCk7IC8vZGVmYXVsdFxuJHNoYWRvdy1sZzogMCAxNXB4IDMwcHggMCByZ2JhKDAsMCwwLDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgwLDAsMCwwLjA4KTtcbiRzaGFkb3ctZWxldmF0ZTogJHNoYWRvdy1sZzsgLy8gb24gaG92ZXJcblxuLyogU3BhY2luZyBHdWlkZWxpbmVzICovXG4kc3BhY2luZy14eHM6IDAuMzMzcmVtOyAgICAgLy8gc21hbGwgZ2FwICAgICAgICAgICAtIDVweCAgICAoeHhzKVxuJHNwYWNpbmcteHM6IDAuNjY3cmVtOyAgICAgIC8vIFJlbGF0ZWQgRGlyZWN0bHkgICAgLSAxMHB4ICAgKHhzKVxuJHNwYWNpbmctc206IDFyZW07ICAgICAgICAgIC8vIFJlbGF0ZWQgSW5kaXJlY3RseSAgLSAxNXB4ICAgKHNtKVxuJHNwYWNpbmctbWQ6IDEuMzNyZW07ICAgICAgIC8vIFJlbGF0ZWQgR3JvdXAgICAgICAgLSAyMHB4ICAgKG1kKSAgLy9kZWZhdWx0XG4kc3BhY2luZy1sZzogMnJlbTsgICAgICAgICAgLy8gVW5yZWxhdGVkIEdyb3VwICAgICAtIDMwcHggICAobGcpXG4kc3BhY2luZy14bDogMi42NjdyZW07ICAgICAgLy8gTmV3IFNlY3Rpb24gICAgICAgICAtIDQwcHggICAoeGwpXG4kc3BhY2luZy14eGw6IDRyZW07ICAgICAgICAgLy8gTmV3IFNlY3Rpb24gKExhcmdlKSAtIDYwcHggICAoeHhsKVxuXG4kc3BhY2luZy1zaXplczogKFxuICBcIjBcIjogMCxcbiAgXCI1XCI6ICRzcGFjaW5nLXh4cyxcbiAgXCIxMFwiOiAkc3BhY2luZy14cyxcbiAgXCIxNVwiOiAkc3BhY2luZy1zbSxcbiAgXCIyMFwiOiAkc3BhY2luZy1tZCxcbiAgXCIzMFwiOiAkc3BhY2luZy1sZyxcbiAgXCI0MFwiOiAkc3BhY2luZy14bCxcbiAgXCI2MFwiOiAkc3BhY2luZy14eGwsXG4gIFwiMTUtZW1cIjogMS41cmVtLFxuICBcIjIyLWVtXCI6IDIuMnJlbSxcbiAgXCJ4eHNcIjogJHNwYWNpbmcteHhzLFxuICBcInhzXCI6ICRzcGFjaW5nLXhzLFxuICBcInNtXCI6ICRzcGFjaW5nLXNtLFxuICBcIm1kXCI6ICRzcGFjaW5nLW1kLFxuICBcImxnXCI6ICRzcGFjaW5nLWxnLFxuICBcInhsXCI6ICRzcGFjaW5nLXhsLFxuICBcInh4bFwiOiAkc3BhY2luZy14eGwsICBcbiAgKTtcblxuLyogQW5pbWF0aW9ucyAqL1xuJGFuaW1hdGlvbi14czogYWxsIDAuMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXNoOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tbWQ6IGFsbCAwLjM1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTsgLy9kZWZhdWx0XG4kYW5pbWF0aW9uLWxnOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teGw6IGFsbCAwLjhzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14eGw6IGFsbCAxLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuXG4kYW5pbWF0aW9uLWRlZmF1bHQ6ICRhbmltYXRpb24tbWQ7XG5cbiRhbmltYXRpb24tZmFkZS1pbjogZmFkZS1pbiAxcyBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLW91dDogZmFkZS1vdXQgMXMgZWFzZS1vdXQgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi10b3A6IGZhZGUtaW4tdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi1ib3R0b206IGZhZGUtaW4tYm90dG9tIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXI6IHB1ZmYtaW4tY2VudGVyIDAuN3MgY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXI6IHB1ZmYtb3V0LWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGJvdGg7XG4kYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWw6IHNoYWtlLWhvcml6b250YWwgMC44cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpIGJvdGg7XG4kYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjazogZm9jdXMtaW4tY29udHJhY3QtYmNrIDFzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDsgLy8gZm9yIHRleHRcbiRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcDogc2NhbGUtaW4tdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3A6IHNjYWxlLW91dC12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSBib3RoO1xuJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZTogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgaW5maW5pdGU7XG4kYW5pbWF0aW9uLXB1bHNlLTM6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIDM7XG4kYW5pbWF0aW9uLXB1bHNlLTE6IHNoYWRvdy1wdWxzZSAxcyAxO1xuXG4vLyBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlc2UgbmFtZXMgdG8gYW5pbWF0ZSBIVE1MIGVsZW1lbnRzIG9uIGluaXRpYXRpb25cbiRhbmltYXRpb25zOiAoXG4gIFwiZmFkZS1pblwiOiAkYW5pbWF0aW9uLWZhZGUtaW4sXG4gIFwiZmFkZS1vdXRcIjogJGFuaW1hdGlvbi1mYWRlLW91dCxcbiAgXCJmYWRlLWluLXRvcFwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tdG9wLFxuICBcImZhZGUtaW4tYm90dG9tXCI6ICRhbmltYXRpb24tZmFkZS1pbi1ib3R0b20sXG4gIFwicHVmZi1pbi1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcixcbiAgXCJwdWZmLW91dC1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXIsXG4gIFwic2hha2UtaG9yaXpvbnRhbFwiOiAkYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWwsXG4gIFwiZm9jdXMtaW4tY29udHJhY3QtYmNrXCI6ICRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrLFxuICBcInNjYWxlLWluLXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wLFxuICBcInNjYWxlLW91dC12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3AsXG4gIFwicHVsc2UtaW5maW5pdGVcIjogJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZSxcbiAgXCJwdWxzZS0zXCI6ICRhbmltYXRpb24tcHVsc2UtMyxcbiAgXCJwdWxzZS0xXCI6ICRhbmltYXRpb24tcHVsc2UtMVxuKTtcblxuLyogQm9yZGVycyAqL1xuJGJvcmRlci1zaXplLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItc2l6ZS1tZDogMC4yNXJlbTtcbiRib3JkZXItc2l6ZS1sZzogMC41cmVtO1xuJGJvcmRlci1zaXplLTE6IDFweDtcbiRib3JkZXItc2l6ZS0yOiAycHg7XG4kYm9yZGVyLXNpemUtMzogM3B4O1xuJGJvcmRlci1zaXplLTU6IDVweDtcbiRib3JkZXItc2l6ZS0xMDogMTBweDtcblxuJGJvcmRlci1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItc2l6ZS1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXNpemUtbWQsXG4gIFwibGdcIjogJGJvcmRlci1zaXplLWxnLFxuICBcIjFcIjogJGJvcmRlci1zaXplLTEsXG4gIFwiMlwiOiAkYm9yZGVyLXNpemUtMixcbiAgXCIzXCI6ICRib3JkZXItc2l6ZS0zLFxuICBcIjVcIjogJGJvcmRlci1zaXplLTUsXG4gIFwiMTBcIjogJGJvcmRlci1zaXplLTEwXG4pO1xuXG4vKiBDb3JuZXJzICovXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1tZDogMC4yNXJlbTtcbiRib3JkZXItcmFkaXVzLWxnOiAwLjVyZW07XG4kYm9yZGVyLXJhZGl1cy0yOiAycHg7XG4kYm9yZGVyLXJhZGl1cy00OiA0cHg7XG4kYm9yZGVyLXJhZGl1cy02OiA2cHg7XG4kYm9yZGVyLXJhZGl1cy0xMDogMTBweDtcbiRib3JkZXItcmFkaXVzLTE1OiAxNXB4O1xuJGJvcmRlci1yYWRpdXMtMjA6IDIwcHg7XG4kYm9yZGVyLXJhZGl1cy1oYWxmOiA1MCU7XG4kYm9yZGVyLXJhZGl1cy1mdWxsOiAxMDAlO1xuXG4kYm9yZGVyLXJhZGl1cy1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItcmFkaXVzLXNtLFxuICBcIm1kXCI6ICRib3JkZXItcmFkaXVzLW1kLCAvL2RlZmF1bHRcbiAgXCJsZ1wiOiAkYm9yZGVyLXJhZGl1cy1sZyxcbiAgXCIyXCI6ICRib3JkZXItcmFkaXVzLTIsXG4gIFwiNFwiOiAkYm9yZGVyLXJhZGl1cy00LFxuICBcIjZcIjogJGJvcmRlci1yYWRpdXMtNixcbiAgXCIxMFwiOiAkYm9yZGVyLXJhZGl1cy0xMCxcbiAgXCIxNVwiOiAkYm9yZGVyLXJhZGl1cy0xNSxcbiAgXCIyMFwiOiAkYm9yZGVyLXJhZGl1cy0yMCxcbiAgXCJoYWxmXCI6ICRib3JkZXItcmFkaXVzLWhhbGYsXG4gIFwiZnVsbFwiOiAkYm9yZGVyLXJhZGl1cy1mdWxsLFxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gICNob3d0b2FwcGx5IHtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/details/components/how-to-apply/how-to-apply.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/details/components/how-to-apply/how-to-apply.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DetailsHowToApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHowToApplyComponent", function() { return DetailsHowToApplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "../lib/src/public_api.ts");
/* harmony import */ var _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/api/lottery-api.service */ "./src/app/shared/services/api/lottery-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsHowToApplyComponent = /** @class */ (function () {
    function DetailsHowToApplyComponent(router, oauthService, lotteryService) {
        this.router = router;
        this.oauthService = oauthService;
        this.lotteryService = lotteryService;
        this.applicationWarnings = [
            'Do not submit duplicate applications.',
            'Only send one application per lottery.',
            'Do not apply online and also send in a paper application.',
            'Applicants who submit more than one application may be disqualified.'
        ];
    }
    DetailsHowToApplyComponent.prototype.isUserLoggedIn = function () {
        return ((this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken()));
    };
    DetailsHowToApplyComponent.prototype.onApplyLottery = function () {
        this.router.navigate(["/details/" + this.lotteryId + "/apply-lottery"]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsHowToApplyComponent.prototype, "advertisementContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsHowToApplyComponent.prototype, "lottery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsHowToApplyComponent.prototype, "lotteryId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DetailsHowToApplyComponent.prototype, "canApply", void 0);
    DetailsHowToApplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-how-to-apply',
            template: __webpack_require__(/*! ./how-to-apply.component.html */ "./src/app/modules/details/components/how-to-apply/how-to-apply.component.html"),
            styles: [__webpack_require__(/*! ./how-to-apply.component.scss */ "./src/app/modules/details/components/how-to-apply/how-to-apply.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"], _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_3__["LotteryApiService"]])
    ], DetailsHowToApplyComponent);
    return DetailsHowToApplyComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/components/overview/overview.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/details/components/overview/overview.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row details-overview-container pb-xl\">\r\n    <div class=\"col-8 info-section\">\r\n      <h2 class=\"text-center\">Details</h2>\r\n      <p *ngIf=\"adContent?.projectSpecificDetails\" class=\"font-lg\">{{adContent?.projectSpecificDetails}}</p>\r\n      <!-- <div *ngIf=\"adContent?.affordableHousingProgram\">\r\n        <h4 class=\"margin-top-20\">Affordable Housing Program</h4>\r\n        <p class=\"font-lg\">{{adContent?.affordableHousingProgram}}</p>\r\n      </div>\r\n\r\n      <p class=\"m--font-bolder font-lg\">\r\n        <span *ngIf=\"adContent?.depositsAndOrApplicationFees\">\r\n          <span *ngIf=\"adContent?.amount\">{{adContent?.amount | currency: '$':'symbol':'1.0-0'}} </span> <span *ngIf=\"!adContent?.refundable\">non-</span>refundable deposit/application fee.\r\n        </span>\r\n        <span *ngIf=\"!adContent?.depositsAndOrApplicationFees\">No deposits/application fees. </span>\r\n\r\n        <span *ngIf=\"adContent?.developmentWebsite\">\r\n          More information: <a class=\"m-link\"\r\n                               href=\"{{adContent?.developmentWebsite}}\" target=\"_blank\">{{adContent?.developmentWebsite}}</a>\r\n        </span>\r\n      </p>\r\n      <div class=\"margin-top-30\" *ngIf=\"getSetAsidesPerferences(true).length\">\r\n        <h5>A percentage of units are set aside for:</h5>\r\n        <div class=\"list-group no-separator condensed\">\r\n          <div class=\"list-item\" *ngFor=\"let pref of getSetAsidesPerferences(true)\">\r\n            <div class=\"list-item-icon\">\r\n              <span class=\"btn btn-outline-metal m--font-dark m-btn--icon m-btn--icon-only m-btn--pill\">\r\n                {{pref.requirementAllocation}}%\r\n              </span>\r\n            </div>\r\n            <div class=\"list-item-label\">\r\n              <div class=\"list-item-title\">\r\n                {{pref.preferenceType.name}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"margin-top-30\" *ngIf=\"getSetAsidesPerferences(false).length\">\r\n        <h5>\r\n          Preference for a percentage of units goes to:\r\n        </h5>\r\n        <div class=\"list-group no-separator condensed\">\r\n          <div class=\"list-item\" *ngFor=\"let pref of getSetAsidesPerferences(false)\">\r\n            <div class=\"list-item-icon\">\r\n              <span class=\"btn btn-outline-metal m-btn--icon m-btn--icon-only m-btn--pill\">\r\n                {{pref.requirementAllocation}}%\r\n              </span>\r\n            </div>\r\n            <div class=\"list-item-label\">\r\n              <div class=\"list-item-title\">\r\n                {{pref.preferenceType.name}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"text-center margin-top-20\">\r\n        <a href=\"javascript:;\" class=\"btn btn-primary m-btn m-btn--icon m-btn--pill\"\r\n           scrollSticky\r\n           (click)=\"canApply && onLotteryApply()\"\r\n           (handleChangingVisible)=\"handleChangingApplyBtnVisible($event)\">\r\n          <i class=\"la la-send\" *ngIf=\"canApply\"></i> {{canApply | canApplyPipe}}\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3 col-md-3\">\r\n      <h4 class=\"fw-lg text-center font-accent\"><i class=\"la la-clock-o\"></i> Business Hours</h4>\r\n      <table>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"font-lg pr-20 pl-40\">\r\n              <strong>Mon</strong>\r\n            </td>\r\n            <td class=\"font-lg\">\r\n              Open 24 Hours\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"font-lg pr-20 pl-40\">\r\n              <strong>Tue</strong>\r\n            </td>\r\n            <td class=\"font-lg\">\r\n              Open 24 Hours\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"font-lg pr-20 pl-40\">\r\n              <strong>Wed</strong>\r\n            </td>\r\n            <td class=\"font-lg\">\r\n              Open 24 Hours\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"font-lg pr-20 pl-40\">\r\n              <strong>Thu</strong>\r\n            </td>\r\n            <td class=\"font-lg\">\r\n              Open 24 Hours\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"font-lg pr-20 pl-40\">\r\n              <strong>Fri</strong>\r\n            </td>\r\n            <td class=\"font-lg\">\r\n              Open 24 Hours\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"font-lg pr-20 pl-40\">\r\n              <strong>Sat</strong>\r\n            </td>\r\n            <td class=\"font-lg\">\r\n              Open 24 Hours\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"font-lg pr-20 pl-40\">\r\n              <strong>Sun</strong>\r\n            </td>\r\n            <td class=\"font-lg\">\r\n              Open 24 Hours\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/details/components/overview/overview.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/details/components/overview/overview.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host {\n  background-color: #ffffff;\n  display: block; }\n:host .details-overview-container .info-section .lead {\n    font-family: \"Open Sans\", sans-serif; }\n:host .details-overview-container .amenity-list-title {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL292ZXJ2aWV3L0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9kZXRhaWxzL2NvbXBvbmVudHMvb3ZlcnZpZXcvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcbW9kdWxlc1xcZGV0YWlsc1xcY29tcG9uZW50c1xcb3ZlcnZpZXdcXG92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBK0ZBLDJCQUFBO0FBYUEsWUFBQTtBQU1BLHVCQUFBO0FBNkJBLGVBQUE7QUF5Q0EsWUFBQTtBQXFCQSxZQUFBO0FDdk5BO0VBQ0UseUJEcURhO0VDcERiLGNBQWMsRUFBQTtBQUZoQjtJQU9RLG9DRE0yQixFQUFBO0FDYm5DO0lBWU0sV0FBVyxFQUFBIiwiZmlsZSI6InByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vVHlwb2dyYXBoeVxuJGZvbnQtbWFpbjogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LWhlYWRpbmc6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1saW5lYXdlc29tZTogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweC8xIFwiTGluZUF3ZXNvbWVcIjtcbiRmb250LWZvbnRhd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiRodG1sLWZvbnQtc2l6ZS1sZzogMTZweDtcbiRodG1sLWZvbnQtc2l6ZS1tZDogMTVweDtcbiRodG1sLWZvbnQtc2l6ZS1zbTogMTRweDtcbiRodG1sLWZvbnQtc2l6ZS14czogMTNweDtcblxuJGh0bWwtZm9udC13ZWlnaHQ6IDQwMDtcblxuLy8gVGhlbWUgQ29sb3JzXG4kY29sb3Itb2Zmc2V0OiA2JTsgLy8gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIGxpZ2h0ZXIgYW5kIGRhcmtlciB2YXJpZW50cyBvZiBhIHNwZWNpZmljIGNvbG9yXG5cbiRiYXNlOiAjZmFmYWZhOyAvL3VzZWQgcHJpbWFyaWx5IGFzIG9mZi13aGl0ZSBib2R5IGJhY2tncm91bmQgY29sb3JcblxuJHByaW1hcnk6ICMwMjAwNjM7XG4kc2Vjb25kYXJ5OiAjZmFmYWZhO1xuJHNlY29uZGFyeS1ibHVlOiByZ2IoMTA5LCAxNzgsIDI1NSk7IC8vIHdlIHNob3VsZCByZXBsYWNlIHRoaXNcbiRhY2NlbnQ6ICNmY2IzMjM7IC8vIzAwYzVkYztcbiRmb2N1czogIzk4MTZmNDtcblxuJHN1Y2Nlc3M6ICMwMGU2YWI7XG4kd2FybmluZzogI2ZmYjgyMjtcbiRkYW5nZXI6ICNmZjJiMmI7IC8vI2Y0NTE2YztcbiRpbmZvOiAjNTU3OGViOyAvLyMzNmEzZjc7XG5cbiRtZXRhbDogI2M0YzVkNjtcbiRtZXRhbC1saWdodDogbGlnaHRlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuJG1ldGFsLWRhcms6IGRhcmtlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuXG4vLyBncmV5c1xuJGxpZ2h0OiAjZmZmO1xuJGRhcms6ICMyYzJlM2U7XG4kZ3JleS0yMDogIzMzMzMzMztcbiRncmV5LTMwOiAjNGQ0ZDRkO1xuJGdyZXktNTA6ICM4MDgwODA7XG4kZ3JleS03MDogI2IzYjNiMztcbiRncmV5LTkwOiAjZTZlNmU2O1xuJGdyZXktOTU6ICNmMmYyZjI7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbi8vIEV4dGVuZGVkIENvbG9yIFBhbGV0dGVcbi8vIFRPRE86IFJldmlldyB0aGVzZSBjb2xvcnNcbiRkYXJrLWJsdWU6ICMwMjM5NzA7XG4kYmx1ZTogIzAxN2FjZTtcbiRjZXJ1bGVhbjogIzAxN2FjZTtcbiRsaWdodC1ibHVlOiAjY2NlYWZmO1xuJHBhbGUtYmx1ZTogI2YxZjlmZjtcbiRkYXJrLXRlYWw6ICMwMDY0NmU7XG4kdGVhbDogIzAwYzFkNDtcbiRsaWdodC10ZWFsOiAjY2NmYWZmO1xuJHBhbGUtdGVhbDogI2Y1ZmVmZjtcbiRkYXJrLWdyZWVuOiAjMGE1YzQwO1xuJGdyZWVuOiAjMTRiODgxO1xuJGxpZ2h0LWdyZWVuOiAjYTNmNWQ5O1xuJHBhbGUtZ3JlZW46ICNmNmZlZmI7XG4kZGFyay15ZWxsb3c6ICM5OTc0MDA7XG4keWVsbG93OiAjZmZjZTMzO1xuJGxpZ2h0LXllbGxvdzogI2ZmZjNjYztcbiRwYWxlLXllbGxvdzogI2ZmZmRmNTtcbiRkYXJrLXJlZDogIzY2MGEwMDtcbiRyZWQ6ICNjYzE0MDA7XG4kbGlnaHQtcmVkOiAjZmZkMWNjO1xuJHBhbGUtcmVkOiAjZmZmNmY1O1xuXG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcImFjY2VudFwiOiAkYWNjZW50LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsIFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmcsIFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImluZm9cIjogJGluZm8sXG4gIFwibWV0YWxcIjogJG1ldGFsLFxuICBcImZvY3VzXCI6ICRmb2N1cyxcbiAgXCJncmV5LTIwXCI6ICRncmV5LTIwLCBcbiAgXCJncmV5LTMwXCI6ICRncmV5LTMwLFxuICBcImdyZXktNTBcIjogJGdyZXktNTAsXG4gIFwiZ3JleS03MFwiOiAkZ3JleS03MCxcbiAgXCJncmV5LTkwXCI6ICRncmV5LTkwLFxuICBcImdyZXktOTVcIjogJGdyZXktOTUsXG4gIFwiYmFzZVwiOiAkYmFzZSxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJ3aGl0ZVwiOiAkd2hpdGUsXG4gIFwiYmxhY2tcIjogJGJsYWNrLFxuICBcImJsdWVcIjogJGJsdWVcbik7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuJGd0LXNtYWxsLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBzbSkgIWRlZmF1bHQ7IC8vIDU3NlxuJGd0LW1lZGl1bS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbWQpICFkZWZhdWx0OyAvLyA3NjhcbiRndC1sYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbGcpICFkZWZhdWx0OyAvLyA5OTJcbiRndC14bGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHhsKSAhZGVmYXVsdDsgLy8gMTIwMFxuXG4vKiBTaGFkb3dzICovXG4kc2hhZG93LXNtOiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xuJHNoYWRvdy1tZDogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjA4KTsgLy9kZWZhdWx0XG4kc2hhZG93LWxnOiAwIDE1cHggMzBweCAwIHJnYmEoMCwwLDAsMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuJHNoYWRvdy1lbGV2YXRlOiAkc2hhZG93LWxnOyAvLyBvbiBob3ZlclxuXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbiRzcGFjaW5nLXh4czogMC4zMzNyZW07ICAgICAvLyBzbWFsbCBnYXAgICAgICAgICAgIC0gNXB4ICAgICh4eHMpXG4kc3BhY2luZy14czogMC42NjdyZW07ICAgICAgLy8gUmVsYXRlZCBEaXJlY3RseSAgICAtIDEwcHggICAoeHMpXG4kc3BhY2luZy1zbTogMXJlbTsgICAgICAgICAgLy8gUmVsYXRlZCBJbmRpcmVjdGx5ICAtIDE1cHggICAoc20pXG4kc3BhY2luZy1tZDogMS4zM3JlbTsgICAgICAgLy8gUmVsYXRlZCBHcm91cCAgICAgICAtIDIwcHggICAobWQpICAvL2RlZmF1bHRcbiRzcGFjaW5nLWxnOiAycmVtOyAgICAgICAgICAvLyBVbnJlbGF0ZWQgR3JvdXAgICAgIC0gMzBweCAgIChsZylcbiRzcGFjaW5nLXhsOiAyLjY2N3JlbTsgICAgICAvLyBOZXcgU2VjdGlvbiAgICAgICAgIC0gNDBweCAgICh4bClcbiRzcGFjaW5nLXh4bDogNHJlbTsgICAgICAgICAvLyBOZXcgU2VjdGlvbiAoTGFyZ2UpIC0gNjBweCAgICh4eGwpXG5cbiRzcGFjaW5nLXNpemVzOiAoXG4gIFwiMFwiOiAwLFxuICBcIjVcIjogJHNwYWNpbmcteHhzLFxuICBcIjEwXCI6ICRzcGFjaW5nLXhzLFxuICBcIjE1XCI6ICRzcGFjaW5nLXNtLFxuICBcIjIwXCI6ICRzcGFjaW5nLW1kLFxuICBcIjMwXCI6ICRzcGFjaW5nLWxnLFxuICBcIjQwXCI6ICRzcGFjaW5nLXhsLFxuICBcIjYwXCI6ICRzcGFjaW5nLXh4bCxcbiAgXCIxNS1lbVwiOiAxLjVyZW0sXG4gIFwiMjItZW1cIjogMi4ycmVtLFxuICBcInh4c1wiOiAkc3BhY2luZy14eHMsXG4gIFwieHNcIjogJHNwYWNpbmcteHMsXG4gIFwic21cIjogJHNwYWNpbmctc20sXG4gIFwibWRcIjogJHNwYWNpbmctbWQsXG4gIFwibGdcIjogJHNwYWNpbmctbGcsXG4gIFwieGxcIjogJHNwYWNpbmcteGwsXG4gIFwieHhsXCI6ICRzcGFjaW5nLXh4bCwgIFxuICApO1xuXG4vKiBBbmltYXRpb25zICovXG4kYW5pbWF0aW9uLXhzOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tc2g6IGFsbCAwLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1tZDogYWxsIDAuMzVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpOyAvL2RlZmF1bHRcbiRhbmltYXRpb24tbGc6IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14bDogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXh4bDogYWxsIDEuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cbiRhbmltYXRpb24tZGVmYXVsdDogJGFuaW1hdGlvbi1tZDtcblxuJGFuaW1hdGlvbi1mYWRlLWluOiBmYWRlLWluIDFzIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtb3V0OiBmYWRlLW91dCAxcyBlYXNlLW91dCBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLXRvcDogZmFkZS1pbi10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbTogZmFkZS1pbi1ib3R0b20gMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcjogcHVmZi1pbi1jZW50ZXIgMC43cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcjogcHVmZi1vdXQtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgYm90aDtcbiRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbDogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcbiRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoOyAvLyBmb3IgdGV4dFxuJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wOiBzY2FsZS1pbi12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcDogc2NhbGUtb3V0LXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG4kYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyBpbmZpbml0ZTtcbiRhbmltYXRpb24tcHVsc2UtMzogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgMztcbiRhbmltYXRpb24tcHVsc2UtMTogc2hhZG93LXB1bHNlIDFzIDE7XG5cbi8vIFlvdSBjYW4gdXNlIGFueSBvZiB0aGVzZSBuYW1lcyB0byBhbmltYXRlIEhUTUwgZWxlbWVudHMgb24gaW5pdGlhdGlvblxuJGFuaW1hdGlvbnM6IChcbiAgXCJmYWRlLWluXCI6ICRhbmltYXRpb24tZmFkZS1pbixcbiAgXCJmYWRlLW91dFwiOiAkYW5pbWF0aW9uLWZhZGUtb3V0LFxuICBcImZhZGUtaW4tdG9wXCI6ICRhbmltYXRpb24tZmFkZS1pbi10b3AsXG4gIFwiZmFkZS1pbi1ib3R0b21cIjogJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbSxcbiAgXCJwdWZmLWluLWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyLFxuICBcInB1ZmYtb3V0LWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcixcbiAgXCJzaGFrZS1ob3Jpem9udGFsXCI6ICRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbCxcbiAgXCJmb2N1cy1pbi1jb250cmFjdC1iY2tcIjogJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2ssXG4gIFwic2NhbGUtaW4tdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3AsXG4gIFwic2NhbGUtb3V0LXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcCxcbiAgXCJwdWxzZS1pbmZpbml0ZVwiOiAkYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlLFxuICBcInB1bHNlLTNcIjogJGFuaW1hdGlvbi1wdWxzZS0zLFxuICBcInB1bHNlLTFcIjogJGFuaW1hdGlvbi1wdWxzZS0xXG4pO1xuXG4vKiBCb3JkZXJzICovXG4kYm9yZGVyLXNpemUtc206IDAuMTI1cmVtO1xuJGJvcmRlci1zaXplLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1zaXplLWxnOiAwLjVyZW07XG4kYm9yZGVyLXNpemUtMTogMXB4O1xuJGJvcmRlci1zaXplLTI6IDJweDtcbiRib3JkZXItc2l6ZS0zOiAzcHg7XG4kYm9yZGVyLXNpemUtNTogNXB4O1xuJGJvcmRlci1zaXplLTEwOiAxMHB4O1xuXG4kYm9yZGVyLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1zaXplLXNtLFxuICBcIm1kXCI6ICRib3JkZXItc2l6ZS1tZCxcbiAgXCJsZ1wiOiAkYm9yZGVyLXNpemUtbGcsXG4gIFwiMVwiOiAkYm9yZGVyLXNpemUtMSxcbiAgXCIyXCI6ICRib3JkZXItc2l6ZS0yLFxuICBcIjNcIjogJGJvcmRlci1zaXplLTMsXG4gIFwiNVwiOiAkYm9yZGVyLXNpemUtNSxcbiAgXCIxMFwiOiAkYm9yZGVyLXNpemUtMTBcbik7XG5cbi8qIENvcm5lcnMgKi9cbiRib3JkZXItcmFkaXVzLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItcmFkaXVzLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNXJlbTtcbiRib3JkZXItcmFkaXVzLTI6IDJweDtcbiRib3JkZXItcmFkaXVzLTQ6IDRweDtcbiRib3JkZXItcmFkaXVzLTY6IDZweDtcbiRib3JkZXItcmFkaXVzLTEwOiAxMHB4O1xuJGJvcmRlci1yYWRpdXMtMTU6IDE1cHg7XG4kYm9yZGVyLXJhZGl1cy0yMDogMjBweDtcbiRib3JkZXItcmFkaXVzLWhhbGY6IDUwJTtcbiRib3JkZXItcmFkaXVzLWZ1bGw6IDEwMCU7XG5cbiRib3JkZXItcmFkaXVzLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1yYWRpdXMtc20sXG4gIFwibWRcIjogJGJvcmRlci1yYWRpdXMtbWQsIC8vZGVmYXVsdFxuICBcImxnXCI6ICRib3JkZXItcmFkaXVzLWxnLFxuICBcIjJcIjogJGJvcmRlci1yYWRpdXMtMixcbiAgXCI0XCI6ICRib3JkZXItcmFkaXVzLTQsXG4gIFwiNlwiOiAkYm9yZGVyLXJhZGl1cy02LFxuICBcIjEwXCI6ICRib3JkZXItcmFkaXVzLTEwLFxuICBcIjE1XCI6ICRib3JkZXItcmFkaXVzLTE1LFxuICBcIjIwXCI6ICRib3JkZXItcmFkaXVzLTIwLFxuICBcImhhbGZcIjogJGJvcmRlci1yYWRpdXMtaGFsZixcbiAgXCJmdWxsXCI6ICRib3JkZXItcmFkaXVzLWZ1bGwsXG4pO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuZGV0YWlscy1vdmVydmlldy1jb250YWluZXIge1xuICAgIC5pbmZvLXNlY3Rpb24ge1xuICAgICAgLmxlYWQge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtbWFpbjtcbiAgICAgIH1cbiAgICB9ICAgXG5cbiAgICAuYW1lbml0eS1saXN0LXRpdGxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH0gICBcbiAgfSBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/details/components/overview/overview.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/details/components/overview/overview.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetailsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsOverviewComponent", function() { return DetailsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "../lib/src/public_api.ts");
/* harmony import */ var _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/api/lottery-api.service */ "./src/app/shared/services/api/lottery-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsOverviewComponent = /** @class */ (function () {
    function DetailsOverviewComponent(router, oauthService, lotteryService) {
        this.router = router;
        this.oauthService = oauthService;
        this.lotteryService = lotteryService;
        this.isApplyBtnVisible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClickApplyBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DetailsOverviewComponent.prototype.getSetAsidesPerferences = function (isSetAside) {
        return this.lotterySetAsidePreferences.filter(function (x) { return x.preferenceType.isSetAside == isSetAside; }).sort(function (x, y) {
            return x.priority - y.priority;
        });
    };
    DetailsOverviewComponent.prototype.ngOnInit = function () {
        if (this.amenities) {
            this.buildingAmenities = this.amenities.filter(function (a) { return a.isBuildingLevel; });
            this.developmentAmenities = this.amenities.filter(function (a) { return a.isDevelopmentLevel; });
        }
    };
    DetailsOverviewComponent.prototype.isUserLoggedIn = function () {
        return ((this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken()));
    };
    DetailsOverviewComponent.prototype.handleChangingApplyBtnVisible = function () {
        this.isApplyBtnVisible.emit("toggle");
    };
    DetailsOverviewComponent.prototype.onLotteryApply = function () {
        this.router.navigate(["/details/" + this.lotteryId + "/apply-lottery"]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsOverviewComponent.prototype, "lotteryName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsOverviewComponent.prototype, "amenities", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsOverviewComponent.prototype, "endDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsOverviewComponent.prototype, "units", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsOverviewComponent.prototype, "lotterySetAsidePreferences", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsOverviewComponent.prototype, "adContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsOverviewComponent.prototype, "lotteryId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsOverviewComponent.prototype, "lotteryBuildings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DetailsOverviewComponent.prototype, "canApply", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailsOverviewComponent.prototype, "isApplyBtnVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailsOverviewComponent.prototype, "onClickApplyBtn", void 0);
    DetailsOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/modules/details/components/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/modules/details/components/overview/overview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"], _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_3__["LotteryApiService"]])
    ], DetailsOverviewComponent);
    return DetailsOverviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/components/photos/photos.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/details/components/photos/photos.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section pb-xl pt-xl\" id=\"photos\" *ngIf=\"!isLoading\" changeVisible (handleChangingVisible)=\"handleChangingVisible($event)\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <h2 class=\"text-center\">\r\n          Photos\r\n        </h2>\r\n      </div>\r\n    </div>\r\n\r\n    \r\n    <ngx-gallery #gallery class=\"hidden\" [options]=galleryOptions [images]=galleryImages></ngx-gallery>\r\n      \r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 stagger\" [class.fade-in-top]=\"isVisible && !isSeen\" *ngFor=\"let img of galleryImages; let i = index\">\r\n        <div class=\"image-container shadow-2 hoverable\" (click)=\"openGallery(i)\">\r\n          <img [src]=\"img.small\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/details/components/photos/photos.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/details/components/photos/photos.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host #photos {\n  background-color: #f2f2f2; }\n:host .image-container {\n  width: 100%;\n  padding-top: 75%;\n  overflow: hidden;\n  position: relative;\n  border-radius: 0.25rem; }\n:host .image-container img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); }\n:host .image-container img:hover {\n      cursor: pointer;\n      -webkit-transform: translateY(-50%) scale(1.1);\n              transform: translateY(-50%) scale(1.1); }\n:host ::ng-deep .ngx-gallery-layout .ngx-gallery-thumbnails-wrapper {\n  overflow: visible; }\n:host ::ng-deep .ngx-gallery-layout .ngx-gallery-thumbnails-wrapper .ngx-gallery-thumbnails {\n    margin-top: -1.33rem;\n    margin-left: -1.33rem;\n    margin-right: -1.33rem;\n    top: 1.33rem;\n    left: 1.33rem;\n    right: 1.33rem;\n    overflow: visible; }\n:host ::ng-deep .ngx-gallery-layout .ngx-gallery-thumbnails-wrapper .ngx-gallery-thumbnails .ngx-thumbnail-image-container {\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n      transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); }\n:host ::ng-deep .ngx-gallery-layout .ngx-gallery-thumbnails-wrapper .ngx-gallery-thumbnails .ngx-thumbnail-image-container:hover {\n        box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08); }\n:host ::ng-deep .ngx-gallery-layout .ngx-gallery-thumbnails-wrapper .ngx-gallery-thumbnails .ngx-thumbnail-image-container .ngx-gallery-thumbnail:hover {\n        -webkit-transform: scale(1.2);\n                transform: scale(1.2);\n        transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL3Bob3Rvcy9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL3Bob3Rvcy9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXBwXFxtb2R1bGVzXFxkZXRhaWxzXFxjb21wb25lbnRzXFxwaG90b3NcXHBob3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQStGQSwyQkFBQTtBQWFBLFlBQUE7QUFNQSx1QkFBQTtBQTZCQSxlQUFBO0FBeUNBLFlBQUE7QUFxQkEsWUFBQTtBQ3ZOQTtFQUVJLHlCRGtEYSxFQUFBO0FDcERqQjtFQU1JLFdBQVc7RUFFWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkQ4TXNCLEVBQUE7QUN6TjFCO0lBY00sV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixxREQwSTRDLEVBQUE7QUM5SmxEO01BdUJRLGVBQWU7TUFDZiw4Q0FBc0M7Y0FBdEMsc0NBQXNDLEVBQUE7QUF4QjlDO0VBZ0NRLGlCQUFpQixFQUFBO0FBaEN6QjtJQW1DVSxvQkQ2RlU7SUM1RlYscUJENEZVO0lDM0ZWLHNCRDJGVTtJQzFGVixZRDBGVTtJQ3pGVixhRHlGVTtJQ3hGVixjRHdGVTtJQ3ZGVixpQkFBaUIsRUFBQTtBQXpDM0I7TUE0Q1ksNEVENEUwRDtNQzNFMUQsc0REK0d1QyxFQUFBO0FDNUpuRDtRQWdEYywrRUR5RTJELEVBQUE7QUN6SHpFO1FBc0RnQiw2QkFBcUI7Z0JBQXJCLHFCQUFxQjtRQUNyQixxRERzR2tDLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9kZXRhaWxzL2NvbXBvbmVudHMvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQbGVhc2UgY29uc3VsdCB3aXRoIFl1cnkgYmVmb3JlIGFkZGluZyBzb21lIG5ldyBDU1MgdmFyaWFibGVzLiAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogVGFibGUgb2YgQ29udGVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFR5cG9ncmFwaHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVGhlbWUgQ29sb3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNoYWRvd3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU3BhY2luZyBHdWlkZWxpbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBBbmltYXRpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIENvcm5lcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL1R5cG9ncmFwaHlcbiRmb250LW1haW46IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1oZWFkaW5nOiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtbGluZWF3ZXNvbWU6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE2cHgvMSBcIkxpbmVBd2Vzb21lXCI7XG4kZm9udC1mb250YXdlc29tZTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4kaHRtbC1mb250LXNpemUtbGc6IDE2cHg7XG4kaHRtbC1mb250LXNpemUtbWQ6IDE1cHg7XG4kaHRtbC1mb250LXNpemUtc206IDE0cHg7XG4kaHRtbC1mb250LXNpemUteHM6IDEzcHg7XG5cbiRodG1sLWZvbnQtd2VpZ2h0OiA0MDA7XG5cbi8vIFRoZW1lIENvbG9yc1xuJGNvbG9yLW9mZnNldDogNiU7IC8vIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBsaWdodGVyIGFuZCBkYXJrZXIgdmFyaWVudHMgb2YgYSBzcGVjaWZpYyBjb2xvclxuXG4kYmFzZTogI2ZhZmFmYTsgLy91c2VkIHByaW1hcmlseSBhcyBvZmYtd2hpdGUgYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG5cbiRwcmltYXJ5OiAjMDIwMDYzO1xuJHNlY29uZGFyeTogI2ZhZmFmYTtcbiRzZWNvbmRhcnktYmx1ZTogcmdiKDEwOSwgMTc4LCAyNTUpOyAvLyB3ZSBzaG91bGQgcmVwbGFjZSB0aGlzXG4kYWNjZW50OiAjZmNiMzIzOyAvLyMwMGM1ZGM7XG4kZm9jdXM6ICM5ODE2ZjQ7XG5cbiRzdWNjZXNzOiAjMDBlNmFiO1xuJHdhcm5pbmc6ICNmZmI4MjI7XG4kZGFuZ2VyOiAjZmYyYjJiOyAvLyNmNDUxNmM7XG4kaW5mbzogIzU1NzhlYjsgLy8jMzZhM2Y3O1xuXG4kbWV0YWw6ICNjNGM1ZDY7XG4kbWV0YWwtbGlnaHQ6IGxpZ2h0ZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcbiRtZXRhbC1kYXJrOiBkYXJrZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcblxuLy8gZ3JleXNcbiRsaWdodDogI2ZmZjtcbiRkYXJrOiAjMmMyZTNlO1xuJGdyZXktMjA6ICMzMzMzMzM7XG4kZ3JleS0zMDogIzRkNGQ0ZDtcbiRncmV5LTUwOiAjODA4MDgwO1xuJGdyZXktNzA6ICNiM2IzYjM7XG4kZ3JleS05MDogI2U2ZTZlNjtcbiRncmV5LTk1OiAjZjJmMmYyO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG4vLyBFeHRlbmRlZCBDb2xvciBQYWxldHRlXG4vLyBUT0RPOiBSZXZpZXcgdGhlc2UgY29sb3JzXG4kZGFyay1ibHVlOiAjMDIzOTcwO1xuJGJsdWU6ICMwMTdhY2U7XG4kY2VydWxlYW46ICMwMTdhY2U7XG4kbGlnaHQtYmx1ZTogI2NjZWFmZjtcbiRwYWxlLWJsdWU6ICNmMWY5ZmY7XG4kZGFyay10ZWFsOiAjMDA2NDZlO1xuJHRlYWw6ICMwMGMxZDQ7XG4kbGlnaHQtdGVhbDogI2NjZmFmZjtcbiRwYWxlLXRlYWw6ICNmNWZlZmY7XG4kZGFyay1ncmVlbjogIzBhNWM0MDtcbiRncmVlbjogIzE0Yjg4MTtcbiRsaWdodC1ncmVlbjogI2EzZjVkOTtcbiRwYWxlLWdyZWVuOiAjZjZmZWZiO1xuJGRhcmsteWVsbG93OiAjOTk3NDAwO1xuJHllbGxvdzogI2ZmY2UzMztcbiRsaWdodC15ZWxsb3c6ICNmZmYzY2M7XG4kcGFsZS15ZWxsb3c6ICNmZmZkZjU7XG4kZGFyay1yZWQ6ICM2NjBhMDA7XG4kcmVkOiAjY2MxNDAwO1xuJGxpZ2h0LXJlZDogI2ZmZDFjYztcbiRwYWxlLXJlZDogI2ZmZjZmNTtcblxuXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJhY2NlbnRcIjogJGFjY2VudCxcbiAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLCBcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLCBcbiAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgXCJpbmZvXCI6ICRpbmZvLFxuICBcIm1ldGFsXCI6ICRtZXRhbCxcbiAgXCJmb2N1c1wiOiAkZm9jdXMsXG4gIFwiZ3JleS0yMFwiOiAkZ3JleS0yMCwgXG4gIFwiZ3JleS0zMFwiOiAkZ3JleS0zMCxcbiAgXCJncmV5LTUwXCI6ICRncmV5LTUwLFxuICBcImdyZXktNzBcIjogJGdyZXktNzAsXG4gIFwiZ3JleS05MFwiOiAkZ3JleS05MCxcbiAgXCJncmV5LTk1XCI6ICRncmV5LTk1LFxuICBcImJhc2VcIjogJGJhc2UsXG4gIFwibGlnaHRcIjogJGxpZ2h0LFxuICBcImRhcmtcIjogJGRhcmssXG4gIFwid2hpdGVcIjogJHdoaXRlLFxuICBcImJsYWNrXCI6ICRibGFjayxcbiAgXCJibHVlXCI6ICRibHVlXG4pO1xuXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcbiRndC1zbWFsbC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgc20pICFkZWZhdWx0OyAvLyA1NzZcbiRndC1tZWRpdW0td2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIG1kKSAhZGVmYXVsdDsgLy8gNzY4XG4kZ3QtbGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIGxnKSAhZGVmYXVsdDsgLy8gOTkyXG4kZ3QteGxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCB4bCkgIWRlZmF1bHQ7IC8vIDEyMDBcblxuLyogU2hhZG93cyAqL1xuJHNoYWRvdy1zbTogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEwKTtcbiRzaGFkb3ctbWQ6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4wOCk7IC8vZGVmYXVsdFxuJHNoYWRvdy1sZzogMCAxNXB4IDMwcHggMCByZ2JhKDAsMCwwLDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgwLDAsMCwwLjA4KTtcbiRzaGFkb3ctZWxldmF0ZTogJHNoYWRvdy1sZzsgLy8gb24gaG92ZXJcblxuLyogU3BhY2luZyBHdWlkZWxpbmVzICovXG4kc3BhY2luZy14eHM6IDAuMzMzcmVtOyAgICAgLy8gc21hbGwgZ2FwICAgICAgICAgICAtIDVweCAgICAoeHhzKVxuJHNwYWNpbmcteHM6IDAuNjY3cmVtOyAgICAgIC8vIFJlbGF0ZWQgRGlyZWN0bHkgICAgLSAxMHB4ICAgKHhzKVxuJHNwYWNpbmctc206IDFyZW07ICAgICAgICAgIC8vIFJlbGF0ZWQgSW5kaXJlY3RseSAgLSAxNXB4ICAgKHNtKVxuJHNwYWNpbmctbWQ6IDEuMzNyZW07ICAgICAgIC8vIFJlbGF0ZWQgR3JvdXAgICAgICAgLSAyMHB4ICAgKG1kKSAgLy9kZWZhdWx0XG4kc3BhY2luZy1sZzogMnJlbTsgICAgICAgICAgLy8gVW5yZWxhdGVkIEdyb3VwICAgICAtIDMwcHggICAobGcpXG4kc3BhY2luZy14bDogMi42NjdyZW07ICAgICAgLy8gTmV3IFNlY3Rpb24gICAgICAgICAtIDQwcHggICAoeGwpXG4kc3BhY2luZy14eGw6IDRyZW07ICAgICAgICAgLy8gTmV3IFNlY3Rpb24gKExhcmdlKSAtIDYwcHggICAoeHhsKVxuXG4kc3BhY2luZy1zaXplczogKFxuICBcIjBcIjogMCxcbiAgXCI1XCI6ICRzcGFjaW5nLXh4cyxcbiAgXCIxMFwiOiAkc3BhY2luZy14cyxcbiAgXCIxNVwiOiAkc3BhY2luZy1zbSxcbiAgXCIyMFwiOiAkc3BhY2luZy1tZCxcbiAgXCIzMFwiOiAkc3BhY2luZy1sZyxcbiAgXCI0MFwiOiAkc3BhY2luZy14bCxcbiAgXCI2MFwiOiAkc3BhY2luZy14eGwsXG4gIFwiMTUtZW1cIjogMS41cmVtLFxuICBcIjIyLWVtXCI6IDIuMnJlbSxcbiAgXCJ4eHNcIjogJHNwYWNpbmcteHhzLFxuICBcInhzXCI6ICRzcGFjaW5nLXhzLFxuICBcInNtXCI6ICRzcGFjaW5nLXNtLFxuICBcIm1kXCI6ICRzcGFjaW5nLW1kLFxuICBcImxnXCI6ICRzcGFjaW5nLWxnLFxuICBcInhsXCI6ICRzcGFjaW5nLXhsLFxuICBcInh4bFwiOiAkc3BhY2luZy14eGwsICBcbiAgKTtcblxuLyogQW5pbWF0aW9ucyAqL1xuJGFuaW1hdGlvbi14czogYWxsIDAuMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXNoOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tbWQ6IGFsbCAwLjM1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTsgLy9kZWZhdWx0XG4kYW5pbWF0aW9uLWxnOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teGw6IGFsbCAwLjhzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14eGw6IGFsbCAxLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuXG4kYW5pbWF0aW9uLWRlZmF1bHQ6ICRhbmltYXRpb24tbWQ7XG5cbiRhbmltYXRpb24tZmFkZS1pbjogZmFkZS1pbiAxcyBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLW91dDogZmFkZS1vdXQgMXMgZWFzZS1vdXQgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi10b3A6IGZhZGUtaW4tdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi1ib3R0b206IGZhZGUtaW4tYm90dG9tIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXI6IHB1ZmYtaW4tY2VudGVyIDAuN3MgY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXI6IHB1ZmYtb3V0LWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGJvdGg7XG4kYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWw6IHNoYWtlLWhvcml6b250YWwgMC44cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpIGJvdGg7XG4kYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjazogZm9jdXMtaW4tY29udHJhY3QtYmNrIDFzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDsgLy8gZm9yIHRleHRcbiRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcDogc2NhbGUtaW4tdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3A6IHNjYWxlLW91dC12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSBib3RoO1xuJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZTogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgaW5maW5pdGU7XG4kYW5pbWF0aW9uLXB1bHNlLTM6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIDM7XG4kYW5pbWF0aW9uLXB1bHNlLTE6IHNoYWRvdy1wdWxzZSAxcyAxO1xuXG4vLyBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlc2UgbmFtZXMgdG8gYW5pbWF0ZSBIVE1MIGVsZW1lbnRzIG9uIGluaXRpYXRpb25cbiRhbmltYXRpb25zOiAoXG4gIFwiZmFkZS1pblwiOiAkYW5pbWF0aW9uLWZhZGUtaW4sXG4gIFwiZmFkZS1vdXRcIjogJGFuaW1hdGlvbi1mYWRlLW91dCxcbiAgXCJmYWRlLWluLXRvcFwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tdG9wLFxuICBcImZhZGUtaW4tYm90dG9tXCI6ICRhbmltYXRpb24tZmFkZS1pbi1ib3R0b20sXG4gIFwicHVmZi1pbi1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcixcbiAgXCJwdWZmLW91dC1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXIsXG4gIFwic2hha2UtaG9yaXpvbnRhbFwiOiAkYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWwsXG4gIFwiZm9jdXMtaW4tY29udHJhY3QtYmNrXCI6ICRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrLFxuICBcInNjYWxlLWluLXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wLFxuICBcInNjYWxlLW91dC12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3AsXG4gIFwicHVsc2UtaW5maW5pdGVcIjogJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZSxcbiAgXCJwdWxzZS0zXCI6ICRhbmltYXRpb24tcHVsc2UtMyxcbiAgXCJwdWxzZS0xXCI6ICRhbmltYXRpb24tcHVsc2UtMVxuKTtcblxuLyogQm9yZGVycyAqL1xuJGJvcmRlci1zaXplLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItc2l6ZS1tZDogMC4yNXJlbTtcbiRib3JkZXItc2l6ZS1sZzogMC41cmVtO1xuJGJvcmRlci1zaXplLTE6IDFweDtcbiRib3JkZXItc2l6ZS0yOiAycHg7XG4kYm9yZGVyLXNpemUtMzogM3B4O1xuJGJvcmRlci1zaXplLTU6IDVweDtcbiRib3JkZXItc2l6ZS0xMDogMTBweDtcblxuJGJvcmRlci1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItc2l6ZS1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXNpemUtbWQsXG4gIFwibGdcIjogJGJvcmRlci1zaXplLWxnLFxuICBcIjFcIjogJGJvcmRlci1zaXplLTEsXG4gIFwiMlwiOiAkYm9yZGVyLXNpemUtMixcbiAgXCIzXCI6ICRib3JkZXItc2l6ZS0zLFxuICBcIjVcIjogJGJvcmRlci1zaXplLTUsXG4gIFwiMTBcIjogJGJvcmRlci1zaXplLTEwXG4pO1xuXG4vKiBDb3JuZXJzICovXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1tZDogMC4yNXJlbTtcbiRib3JkZXItcmFkaXVzLWxnOiAwLjVyZW07XG4kYm9yZGVyLXJhZGl1cy0yOiAycHg7XG4kYm9yZGVyLXJhZGl1cy00OiA0cHg7XG4kYm9yZGVyLXJhZGl1cy02OiA2cHg7XG4kYm9yZGVyLXJhZGl1cy0xMDogMTBweDtcbiRib3JkZXItcmFkaXVzLTE1OiAxNXB4O1xuJGJvcmRlci1yYWRpdXMtMjA6IDIwcHg7XG4kYm9yZGVyLXJhZGl1cy1oYWxmOiA1MCU7XG4kYm9yZGVyLXJhZGl1cy1mdWxsOiAxMDAlO1xuXG4kYm9yZGVyLXJhZGl1cy1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItcmFkaXVzLXNtLFxuICBcIm1kXCI6ICRib3JkZXItcmFkaXVzLW1kLCAvL2RlZmF1bHRcbiAgXCJsZ1wiOiAkYm9yZGVyLXJhZGl1cy1sZyxcbiAgXCIyXCI6ICRib3JkZXItcmFkaXVzLTIsXG4gIFwiNFwiOiAkYm9yZGVyLXJhZGl1cy00LFxuICBcIjZcIjogJGJvcmRlci1yYWRpdXMtNixcbiAgXCIxMFwiOiAkYm9yZGVyLXJhZGl1cy0xMCxcbiAgXCIxNVwiOiAkYm9yZGVyLXJhZGl1cy0xNSxcbiAgXCIyMFwiOiAkYm9yZGVyLXJhZGl1cy0yMCxcbiAgXCJoYWxmXCI6ICRib3JkZXItcmFkaXVzLWhhbGYsXG4gIFwiZnVsbFwiOiAkYm9yZGVyLXJhZGl1cy1mdWxsLFxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAjcGhvdG9zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS05NTtcbiAgfVxuXG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vcGFkZGluZy10b3A6IDU2LjI1JTsgLy8gMTY6OSBhc3BlY3QgcmF0aW9cbiAgICBwYWRkaW5nLXRvcDogNzUlOyAvLyA0OjMgYXNwZWN0IHJhdGlvXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbWQ7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgdHJhbnNpdGlvbjogJGFuaW1hdGlvbi14bDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIHtcbiAgICAubmd4LWdhbGxlcnktbGF5b3V0IHtcbiAgICAgIC5uZ3gtZ2FsbGVyeS10aHVtYm5haWxzLXdyYXBwZXIge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICAgICAubmd4LWdhbGxlcnktdGh1bWJuYWlscyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLSRzcGFjaW5nLW1kO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJHNwYWNpbmctbWQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtJHNwYWNpbmctbWQ7XG4gICAgICAgICAgdG9wOiAkc3BhY2luZy1tZDtcbiAgICAgICAgICBsZWZ0OiAkc3BhY2luZy1tZDtcbiAgICAgICAgICByaWdodDogJHNwYWNpbmctbWQ7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgICAgICAgICAubmd4LXRodW1ibmFpbC1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1tZDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICRhbmltYXRpb24tbWQ7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LWVsZXZhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZ3gtZ2FsbGVyeS10aHVtYm5haWwge1xuXG4gICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkYW5pbWF0aW9uLWxnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/details/components/photos/photos.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/details/components/photos/photos.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetailsPhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPhotosComponent", function() { return DetailsPhotosComponent; });
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

var DetailsPhotosComponent = /** @class */ (function () {
    function DetailsPhotosComponent(cdRef) {
        this.cdRef = cdRef;
        this.isLoading = true;
        this.isVisible = false;
        this.isSeen = false;
        this.galleryImages = [];
    }
    DetailsPhotosComponent.prototype.openGallery = function (i) {
        var index = i ? i : 0;
        this.gallery.openPreview(index);
    };
    DetailsPhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.photos)
                _this.isLoading = false;
            _this.cdRef.detectChanges();
        });
    };
    DetailsPhotosComponent.prototype.handleChangingVisible = function (event) {
        this.isVisible = !this.isVisible;
        this.isSeen = true;
    };
    DetailsPhotosComponent.prototype.log = function (e) {
        console.log(e);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsPhotosComponent.prototype, "photos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsPhotosComponent.prototype, "galleryOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsPhotosComponent.prototype, "galleryImages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gallery"),
        __metadata("design:type", Object)
    ], DetailsPhotosComponent.prototype, "gallery", void 0);
    DetailsPhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-photos',
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/modules/details/components/photos/photos.component.html"),
            styles: [__webpack_require__(/*! ./photos.component.scss */ "./src/app/modules/details/components/photos/photos.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DetailsPhotosComponent);
    return DetailsPhotosComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/components/units/units.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/details/components/units/units.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section margin-bottom-0 bg-blur m--font-light\">\r\n  <!--<img class=\"bg bw\" src=\"./assets/media/demo/img/lotteries/lottery-sample-2.jpg\" />-->\r\n  <img id=\"available-units-section-bg\" class=\"bg hue-45\" [src]=\"defaultImage\" />\r\n  <div class=\"container\">\r\n    <div class=\"row padding-top-60 padding-bottom-60 page-container-print-row\">\r\n      <div class=\"col-md-12\" *ngIf=\"propertyTypeId === PropertyTypeEnum.Owner\">\r\n        <div *ngIf=\"ownerTypeId == OwnerTypeEnum.SmallHome\">\r\n          <h2 class=\"text-center margin-bottom-30\">Available Homes &amp; Requirements</h2>\r\n          <table class=\"table glass\">\r\n            <thead>\r\n              <tr (click)=\"log(groupedUnits)\">\r\n                <!--<th></th>-->\r\n                <th>Address</th>\r\n                <th class=\"no-wrap\">AMI % <i class=\"la la-question-circle\"></i></th>\r\n                <th>Layout</th>\r\n                <th class=\"no-wrap\"># Units</th>\r\n                <th class=\"text-right\">Household Size</th>\r\n                <th class=\"text-right\">Household Income</th>\r\n                <th class=\"text-right\">Asset Limit</th>\r\n                <th class=\"text-right\">Estimated Sale Price</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let group of groupedUnits\">\r\n              <tr *ngIf=\"group.units[0].unitIncome.length === 0\">\r\n                <td colspan=\"4\">Household income data not available</td>\r\n              </tr>\r\n              <!--<tr *ngFor=\"let incomeRequirement of group.units[0].unitIncome; let i = index\">-->\r\n              <tr *ngFor=\"let unit of group.units; let i = index\">\r\n                <!--<td [attr.rowspan]=\"group.units.length\" *ngIf=\"i==0\">{{group.name}}</td>-->\r\n                <td><span class=\"no-wrap\">{{unit.building.address}}, </span>{{unit.building.city}}</td>\r\n                <td [attr.rowspan]=\"group.units.length\" *ngIf=\"i==0\" class=\"no-wrap\">\r\n                  {{unit.unitRegulatoryMechanism[0].amipercentage}}%</td>\r\n                <td [attr.rowspan]=\"group.units.length\" *ngIf=\"i==0\" class=\"no-wrap\">{{unit.unitLayoutType.name}}</td>\r\n                <td [attr.rowspan]=\"group.units.length\" *ngIf=\"i==0\" class=\"no-wrap\">{{unit.numberOfSmallHomeUnits}}\r\n                  family</td>\r\n                <td [attr.rowspan]=\"group.units.length\" *ngIf=\"i==0\" class=\"text-right no-wrap\">\r\n                  {{unit.minimumHouseholdSize}} - {{unit.maximumHouseholdSize}} people</td>\r\n                <td [attr.rowspan]=\"group.units.length\" *ngIf=\"i==0\" class=\"text-right no-wrap\">\r\n                  {{unit.minimumIncome | currency: '$':'symbol':'1.0-0'}} -\r\n                  {{unit.maximumIncome | currency: '$':'symbol':'1.0-0'}}</td>\r\n                <td [attr.rowspan]=\"group.units.length\" *ngIf=\"i==0\" class=\"text-right no-wrap\">\r\n                  {{unit.maximumAssetCap | currency: '$':'symbol':'1.0-0'}}</td>\r\n                <td [attr.rowspan]=\"group.units.length\" *ngIf=\"i==0\" class=\"text-right no-wrap\">\r\n                  {{group.units[0].estimatedSalePrice | currency: '$':'symbol':'1.0-0'}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div *ngIf=\"ownerTypeId == OwnerTypeEnum.CondoCoop\">\r\n          <h2 class=\"text-center margin-bottom-30\">Available Condo/Coops &amp; Requirements</h2>\r\n          <table class=\"table glass\">\r\n            <thead>\r\n              <tr>\r\n                <!--<th></th>-->\r\n                <th class=\"no-wrap\">AMI % <i class=\"la la-question-circle\"></i></th>\r\n                <th>Layout</th>\r\n                <th class=\"no-wrap\"># Units</th>\r\n                <th class=\"text-right\">Asset Limit</th>\r\n                <th class=\"text-right\">Monthly Carrying Fee <i class=\"la la-question-circle\"></i></th>\r\n                <th class=\"text-right\">Estimated Sale Price</th>\r\n                <th>Household Size</th>\r\n                <th class=\"text-right\">Household Income</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let group of groupedUnits\" (click)=\"log(group)\">\r\n              <tr *ngIf=\"group.units[0].unitIncome.length === 0\">\r\n                <td colspan=\"4\">Household income data not available</td>\r\n              </tr>\r\n              <tr *ngFor=\"let incomeRequirement of group.units[0].unitIncome; let i = index\">\r\n                <!--<td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\">{{group.name}}</td>-->\r\n                <td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\">\r\n                  {{group.units[0].unitRegulatoryMechanism[0].amipercentage}}%</td>\r\n                <td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\">\r\n                  {{group.units[0].unitLayoutType.name}}</td>\r\n                <td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\" class=\"no-wrap\">\r\n                  {{group.units.length}} unit<span *ngIf=\"group.units.length > 1\">s</span></td>\r\n                <td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\" class=\"text-right no-wrap\">\r\n                  {{group.units[0].maximumAssetCap | currency: '$':'symbol':'1.0-0'}}</td>\r\n                <td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\" class=\"text-right no-wrap\">\r\n                  {{group.units[0].carryingCost | currency: '$':'symbol':'1.0-0'}}</td>\r\n                <td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\" class=\"text-right no-wrap\">\r\n                  {{group.units[0].estimatedSalePrice | currency: '$':'symbol':'1.0-0'}}</td>\r\n                <td class=\"no-wrap\">{{incomeRequirement.houseHoldSize}} <span\r\n                    *ngIf=\"incomeRequirement.houseHoldSize == 1\">person</span><span\r\n                    *ngIf=\"incomeRequirement.houseHoldSize > 1\">people</span></td>\r\n                <td class=\"text-right no-wrap\">{{incomeRequirement.minimumIncome | currency: '$':'symbol':'1.0-0' }} -\r\n                  {{incomeRequirement.maximumIncome | currency: '$':'symbol':'1.0-0'}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\" *ngIf=\"propertyTypeId === PropertyTypeEnum.Rental\">\r\n        <h2 class=\"text-center margin-bottom-30\">Available Units &amp; Requirements</h2>\r\n        <table class=\"table glass\">\r\n          <thead>\r\n            <tr>\r\n              <!--<th></th>-->\r\n              <th class=\"no-wrap\">AMI % <i class=\"la la-question-circle\"></i></th>\r\n              <th>Layout</th>\r\n              <th class=\"no-wrap\"># Units</th>\r\n              <th class=\"text-right\">Monthly Rent</th>\r\n              <th>Household Size</th>\r\n              <th class=\"text-right\">Household Income</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let group of groupedUnits\" (click)=\"log(group)\">\r\n            <tr *ngIf=\"group.units[0].unitIncome.length === 0\">\r\n              <td colspan=\"4\">Household income data not available</td>\r\n            </tr>\r\n            <tr *ngFor=\"let incomeRequirement of group.units[0].unitIncome; let i = index\">\r\n              <!--<td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\">{{group.name}}</td>-->\r\n              <td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\" class=\"no-wrap\">\r\n                {{group.units[0].unitRegulatoryMechanism[0].amipercentage}}%</td>\r\n              <td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\" class=\"no-wrap\">\r\n                {{group.units[0].unitLayoutType.name}}</td>\r\n              <td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\" class=\"no-wrap\">\r\n                {{group.units.length}} unit<span *ngIf=\"group.units.length > 1\">s</span></td>\r\n              <td [attr.rowspan]=\"group.units[0].unitIncome.length\" *ngIf=\"i==0\" class=\"text-right no-wrap\">\r\n                {{group.units[0].baseRent | currency: '$':'symbol':'1.0-0'}}</td>\r\n              <td class=\"no-wrap\">{{incomeRequirement.houseHoldSize}} <span\r\n                  *ngIf=\"incomeRequirement.houseHoldSize == 1\">person</span><span\r\n                  *ngIf=\"incomeRequirement.houseHoldSize > 1\">people</span></td>\r\n              <td class=\"text-right no-wrap\">{{incomeRequirement.minimumIncome | currency: '$':'symbol':'1.0-0' }} -\r\n                {{incomeRequirement.maximumIncome | currency: '$':'symbol':'1.0-0'}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/details/components/units/units.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/details/components/units/units.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host #units {\n  background: #fff;\n  page-break-after: always; }\n:host #units .page-container-print-row {\n    padding-top: 0 !important; }\n:host #units h2 {\n    color: #000000 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL3VuaXRzL0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9kZXRhaWxzL2NvbXBvbmVudHMvdW5pdHMvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcbW9kdWxlc1xcZGV0YWlsc1xcY29tcG9uZW50c1xcdW5pdHNcXHVuaXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBK0ZBLDJCQUFBO0FBYUEsWUFBQTtBQU1BLHVCQUFBO0FBNkJBLGVBQUE7QUF5Q0EsWUFBQTtBQXFCQSxZQUFBO0FDdk5BO0VBRUksZ0JEMkNRO0VDMUNSLHdCQUF3QixFQUFBO0FBSDVCO0lBTU0seUJBQXlCLEVBQUE7QUFOL0I7SUFVTSx5QkFBd0IsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2RldGFpbHMvY29tcG9uZW50cy91bml0cy91bml0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQbGVhc2UgY29uc3VsdCB3aXRoIFl1cnkgYmVmb3JlIGFkZGluZyBzb21lIG5ldyBDU1MgdmFyaWFibGVzLiAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogVGFibGUgb2YgQ29udGVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFR5cG9ncmFwaHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVGhlbWUgQ29sb3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNoYWRvd3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU3BhY2luZyBHdWlkZWxpbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBBbmltYXRpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIENvcm5lcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL1R5cG9ncmFwaHlcbiRmb250LW1haW46IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1oZWFkaW5nOiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtbGluZWF3ZXNvbWU6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE2cHgvMSBcIkxpbmVBd2Vzb21lXCI7XG4kZm9udC1mb250YXdlc29tZTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4kaHRtbC1mb250LXNpemUtbGc6IDE2cHg7XG4kaHRtbC1mb250LXNpemUtbWQ6IDE1cHg7XG4kaHRtbC1mb250LXNpemUtc206IDE0cHg7XG4kaHRtbC1mb250LXNpemUteHM6IDEzcHg7XG5cbiRodG1sLWZvbnQtd2VpZ2h0OiA0MDA7XG5cbi8vIFRoZW1lIENvbG9yc1xuJGNvbG9yLW9mZnNldDogNiU7IC8vIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBsaWdodGVyIGFuZCBkYXJrZXIgdmFyaWVudHMgb2YgYSBzcGVjaWZpYyBjb2xvclxuXG4kYmFzZTogI2ZhZmFmYTsgLy91c2VkIHByaW1hcmlseSBhcyBvZmYtd2hpdGUgYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG5cbiRwcmltYXJ5OiAjMDIwMDYzO1xuJHNlY29uZGFyeTogI2ZhZmFmYTtcbiRzZWNvbmRhcnktYmx1ZTogcmdiKDEwOSwgMTc4LCAyNTUpOyAvLyB3ZSBzaG91bGQgcmVwbGFjZSB0aGlzXG4kYWNjZW50OiAjZmNiMzIzOyAvLyMwMGM1ZGM7XG4kZm9jdXM6ICM5ODE2ZjQ7XG5cbiRzdWNjZXNzOiAjMDBlNmFiO1xuJHdhcm5pbmc6ICNmZmI4MjI7XG4kZGFuZ2VyOiAjZmYyYjJiOyAvLyNmNDUxNmM7XG4kaW5mbzogIzU1NzhlYjsgLy8jMzZhM2Y3O1xuXG4kbWV0YWw6ICNjNGM1ZDY7XG4kbWV0YWwtbGlnaHQ6IGxpZ2h0ZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcbiRtZXRhbC1kYXJrOiBkYXJrZW4oJG1ldGFsLCAkY29sb3Itb2Zmc2V0KTtcblxuLy8gZ3JleXNcbiRsaWdodDogI2ZmZjtcbiRkYXJrOiAjMmMyZTNlO1xuJGdyZXktMjA6ICMzMzMzMzM7XG4kZ3JleS0zMDogIzRkNGQ0ZDtcbiRncmV5LTUwOiAjODA4MDgwO1xuJGdyZXktNzA6ICNiM2IzYjM7XG4kZ3JleS05MDogI2U2ZTZlNjtcbiRncmV5LTk1OiAjZjJmMmYyO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG4vLyBFeHRlbmRlZCBDb2xvciBQYWxldHRlXG4vLyBUT0RPOiBSZXZpZXcgdGhlc2UgY29sb3JzXG4kZGFyay1ibHVlOiAjMDIzOTcwO1xuJGJsdWU6ICMwMTdhY2U7XG4kY2VydWxlYW46ICMwMTdhY2U7XG4kbGlnaHQtYmx1ZTogI2NjZWFmZjtcbiRwYWxlLWJsdWU6ICNmMWY5ZmY7XG4kZGFyay10ZWFsOiAjMDA2NDZlO1xuJHRlYWw6ICMwMGMxZDQ7XG4kbGlnaHQtdGVhbDogI2NjZmFmZjtcbiRwYWxlLXRlYWw6ICNmNWZlZmY7XG4kZGFyay1ncmVlbjogIzBhNWM0MDtcbiRncmVlbjogIzE0Yjg4MTtcbiRsaWdodC1ncmVlbjogI2EzZjVkOTtcbiRwYWxlLWdyZWVuOiAjZjZmZWZiO1xuJGRhcmsteWVsbG93OiAjOTk3NDAwO1xuJHllbGxvdzogI2ZmY2UzMztcbiRsaWdodC15ZWxsb3c6ICNmZmYzY2M7XG4kcGFsZS15ZWxsb3c6ICNmZmZkZjU7XG4kZGFyay1yZWQ6ICM2NjBhMDA7XG4kcmVkOiAjY2MxNDAwO1xuJGxpZ2h0LXJlZDogI2ZmZDFjYztcbiRwYWxlLXJlZDogI2ZmZjZmNTtcblxuXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJhY2NlbnRcIjogJGFjY2VudCxcbiAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLCBcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLCBcbiAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgXCJpbmZvXCI6ICRpbmZvLFxuICBcIm1ldGFsXCI6ICRtZXRhbCxcbiAgXCJmb2N1c1wiOiAkZm9jdXMsXG4gIFwiZ3JleS0yMFwiOiAkZ3JleS0yMCwgXG4gIFwiZ3JleS0zMFwiOiAkZ3JleS0zMCxcbiAgXCJncmV5LTUwXCI6ICRncmV5LTUwLFxuICBcImdyZXktNzBcIjogJGdyZXktNzAsXG4gIFwiZ3JleS05MFwiOiAkZ3JleS05MCxcbiAgXCJncmV5LTk1XCI6ICRncmV5LTk1LFxuICBcImJhc2VcIjogJGJhc2UsXG4gIFwibGlnaHRcIjogJGxpZ2h0LFxuICBcImRhcmtcIjogJGRhcmssXG4gIFwid2hpdGVcIjogJHdoaXRlLFxuICBcImJsYWNrXCI6ICRibGFjayxcbiAgXCJibHVlXCI6ICRibHVlXG4pO1xuXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcbiRndC1zbWFsbC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgc20pICFkZWZhdWx0OyAvLyA1NzZcbiRndC1tZWRpdW0td2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIG1kKSAhZGVmYXVsdDsgLy8gNzY4XG4kZ3QtbGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIGxnKSAhZGVmYXVsdDsgLy8gOTkyXG4kZ3QteGxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCB4bCkgIWRlZmF1bHQ7IC8vIDEyMDBcblxuLyogU2hhZG93cyAqL1xuJHNoYWRvdy1zbTogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEwKTtcbiRzaGFkb3ctbWQ6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4wOCk7IC8vZGVmYXVsdFxuJHNoYWRvdy1sZzogMCAxNXB4IDMwcHggMCByZ2JhKDAsMCwwLDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgwLDAsMCwwLjA4KTtcbiRzaGFkb3ctZWxldmF0ZTogJHNoYWRvdy1sZzsgLy8gb24gaG92ZXJcblxuLyogU3BhY2luZyBHdWlkZWxpbmVzICovXG4kc3BhY2luZy14eHM6IDAuMzMzcmVtOyAgICAgLy8gc21hbGwgZ2FwICAgICAgICAgICAtIDVweCAgICAoeHhzKVxuJHNwYWNpbmcteHM6IDAuNjY3cmVtOyAgICAgIC8vIFJlbGF0ZWQgRGlyZWN0bHkgICAgLSAxMHB4ICAgKHhzKVxuJHNwYWNpbmctc206IDFyZW07ICAgICAgICAgIC8vIFJlbGF0ZWQgSW5kaXJlY3RseSAgLSAxNXB4ICAgKHNtKVxuJHNwYWNpbmctbWQ6IDEuMzNyZW07ICAgICAgIC8vIFJlbGF0ZWQgR3JvdXAgICAgICAgLSAyMHB4ICAgKG1kKSAgLy9kZWZhdWx0XG4kc3BhY2luZy1sZzogMnJlbTsgICAgICAgICAgLy8gVW5yZWxhdGVkIEdyb3VwICAgICAtIDMwcHggICAobGcpXG4kc3BhY2luZy14bDogMi42NjdyZW07ICAgICAgLy8gTmV3IFNlY3Rpb24gICAgICAgICAtIDQwcHggICAoeGwpXG4kc3BhY2luZy14eGw6IDRyZW07ICAgICAgICAgLy8gTmV3IFNlY3Rpb24gKExhcmdlKSAtIDYwcHggICAoeHhsKVxuXG4kc3BhY2luZy1zaXplczogKFxuICBcIjBcIjogMCxcbiAgXCI1XCI6ICRzcGFjaW5nLXh4cyxcbiAgXCIxMFwiOiAkc3BhY2luZy14cyxcbiAgXCIxNVwiOiAkc3BhY2luZy1zbSxcbiAgXCIyMFwiOiAkc3BhY2luZy1tZCxcbiAgXCIzMFwiOiAkc3BhY2luZy1sZyxcbiAgXCI0MFwiOiAkc3BhY2luZy14bCxcbiAgXCI2MFwiOiAkc3BhY2luZy14eGwsXG4gIFwiMTUtZW1cIjogMS41cmVtLFxuICBcIjIyLWVtXCI6IDIuMnJlbSxcbiAgXCJ4eHNcIjogJHNwYWNpbmcteHhzLFxuICBcInhzXCI6ICRzcGFjaW5nLXhzLFxuICBcInNtXCI6ICRzcGFjaW5nLXNtLFxuICBcIm1kXCI6ICRzcGFjaW5nLW1kLFxuICBcImxnXCI6ICRzcGFjaW5nLWxnLFxuICBcInhsXCI6ICRzcGFjaW5nLXhsLFxuICBcInh4bFwiOiAkc3BhY2luZy14eGwsICBcbiAgKTtcblxuLyogQW5pbWF0aW9ucyAqL1xuJGFuaW1hdGlvbi14czogYWxsIDAuMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXNoOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tbWQ6IGFsbCAwLjM1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTsgLy9kZWZhdWx0XG4kYW5pbWF0aW9uLWxnOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teGw6IGFsbCAwLjhzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14eGw6IGFsbCAxLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuXG4kYW5pbWF0aW9uLWRlZmF1bHQ6ICRhbmltYXRpb24tbWQ7XG5cbiRhbmltYXRpb24tZmFkZS1pbjogZmFkZS1pbiAxcyBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLW91dDogZmFkZS1vdXQgMXMgZWFzZS1vdXQgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi10b3A6IGZhZGUtaW4tdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tZmFkZS1pbi1ib3R0b206IGZhZGUtaW4tYm90dG9tIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXI6IHB1ZmYtaW4tY2VudGVyIDAuN3MgY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXI6IHB1ZmYtb3V0LWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGJvdGg7XG4kYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWw6IHNoYWtlLWhvcml6b250YWwgMC44cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpIGJvdGg7XG4kYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjazogZm9jdXMtaW4tY29udHJhY3QtYmNrIDFzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDsgLy8gZm9yIHRleHRcbiRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcDogc2NhbGUtaW4tdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3A6IHNjYWxlLW91dC12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSBib3RoO1xuJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZTogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgaW5maW5pdGU7XG4kYW5pbWF0aW9uLXB1bHNlLTM6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIDM7XG4kYW5pbWF0aW9uLXB1bHNlLTE6IHNoYWRvdy1wdWxzZSAxcyAxO1xuXG4vLyBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlc2UgbmFtZXMgdG8gYW5pbWF0ZSBIVE1MIGVsZW1lbnRzIG9uIGluaXRpYXRpb25cbiRhbmltYXRpb25zOiAoXG4gIFwiZmFkZS1pblwiOiAkYW5pbWF0aW9uLWZhZGUtaW4sXG4gIFwiZmFkZS1vdXRcIjogJGFuaW1hdGlvbi1mYWRlLW91dCxcbiAgXCJmYWRlLWluLXRvcFwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tdG9wLFxuICBcImZhZGUtaW4tYm90dG9tXCI6ICRhbmltYXRpb24tZmFkZS1pbi1ib3R0b20sXG4gIFwicHVmZi1pbi1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcixcbiAgXCJwdWZmLW91dC1jZW50ZXJcIjogJGFuaW1hdGlvbi1wdWZmLW91dC1jZW50ZXIsXG4gIFwic2hha2UtaG9yaXpvbnRhbFwiOiAkYW5pbWF0aW9uLXNoYWtlLWhvcml6b250YWwsXG4gIFwiZm9jdXMtaW4tY29udHJhY3QtYmNrXCI6ICRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrLFxuICBcInNjYWxlLWluLXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wLFxuICBcInNjYWxlLW91dC12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtb3V0LXZlci10b3AsXG4gIFwicHVsc2UtaW5maW5pdGVcIjogJGFuaW1hdGlvbi1wdWxzZS1pbmZpbml0ZSxcbiAgXCJwdWxzZS0zXCI6ICRhbmltYXRpb24tcHVsc2UtMyxcbiAgXCJwdWxzZS0xXCI6ICRhbmltYXRpb24tcHVsc2UtMVxuKTtcblxuLyogQm9yZGVycyAqL1xuJGJvcmRlci1zaXplLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItc2l6ZS1tZDogMC4yNXJlbTtcbiRib3JkZXItc2l6ZS1sZzogMC41cmVtO1xuJGJvcmRlci1zaXplLTE6IDFweDtcbiRib3JkZXItc2l6ZS0yOiAycHg7XG4kYm9yZGVyLXNpemUtMzogM3B4O1xuJGJvcmRlci1zaXplLTU6IDVweDtcbiRib3JkZXItc2l6ZS0xMDogMTBweDtcblxuJGJvcmRlci1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItc2l6ZS1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXNpemUtbWQsXG4gIFwibGdcIjogJGJvcmRlci1zaXplLWxnLFxuICBcIjFcIjogJGJvcmRlci1zaXplLTEsXG4gIFwiMlwiOiAkYm9yZGVyLXNpemUtMixcbiAgXCIzXCI6ICRib3JkZXItc2l6ZS0zLFxuICBcIjVcIjogJGJvcmRlci1zaXplLTUsXG4gIFwiMTBcIjogJGJvcmRlci1zaXplLTEwXG4pO1xuXG4vKiBDb3JuZXJzICovXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1tZDogMC4yNXJlbTtcbiRib3JkZXItcmFkaXVzLWxnOiAwLjVyZW07XG4kYm9yZGVyLXJhZGl1cy0yOiAycHg7XG4kYm9yZGVyLXJhZGl1cy00OiA0cHg7XG4kYm9yZGVyLXJhZGl1cy02OiA2cHg7XG4kYm9yZGVyLXJhZGl1cy0xMDogMTBweDtcbiRib3JkZXItcmFkaXVzLTE1OiAxNXB4O1xuJGJvcmRlci1yYWRpdXMtMjA6IDIwcHg7XG4kYm9yZGVyLXJhZGl1cy1oYWxmOiA1MCU7XG4kYm9yZGVyLXJhZGl1cy1mdWxsOiAxMDAlO1xuXG4kYm9yZGVyLXJhZGl1cy1zaXplczogKFxuICBcInNtXCI6ICRib3JkZXItcmFkaXVzLXNtLFxuICBcIm1kXCI6ICRib3JkZXItcmFkaXVzLW1kLCAvL2RlZmF1bHRcbiAgXCJsZ1wiOiAkYm9yZGVyLXJhZGl1cy1sZyxcbiAgXCIyXCI6ICRib3JkZXItcmFkaXVzLTIsXG4gIFwiNFwiOiAkYm9yZGVyLXJhZGl1cy00LFxuICBcIjZcIjogJGJvcmRlci1yYWRpdXMtNixcbiAgXCIxMFwiOiAkYm9yZGVyLXJhZGl1cy0xMCxcbiAgXCIxNVwiOiAkYm9yZGVyLXJhZGl1cy0xNSxcbiAgXCIyMFwiOiAkYm9yZGVyLXJhZGl1cy0yMCxcbiAgXCJoYWxmXCI6ICRib3JkZXItcmFkaXVzLWhhbGYsXG4gIFwiZnVsbFwiOiAkYm9yZGVyLXJhZGl1cy1mdWxsLFxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAjdW5pdHMge1xuICAgIGJhY2tncm91bmQ6ICRsaWdodDsgLy8gYXMgZHluYW1pYyBpbWFnZSBub3QgbG9hZGVkIHNldCBkZWZhdWx0IGNvbG9yXG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzOyAvLyBicmVhayBjb250ZW50IHRvIG5leHQgbGluZVxuXG4gICAgLnBhZ2UtY29udGFpbmVyLXByaW50LXJvdyB7XG4gICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/details/components/units/units.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/details/components/units/units.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetailsUnitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsUnitsComponent", function() { return DetailsUnitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enums/developmentEnums */ "./src/app/shared/enums/developmentEnums.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnitLayoutByType = /** @class */ (function () {
    function UnitLayoutByType() {
    }
    return UnitLayoutByType;
}());
var UnitLayout = /** @class */ (function () {
    function UnitLayout() {
    }
    return UnitLayout;
}());
var DetailsUnitsComponent = /** @class */ (function () {
    function DetailsUnitsComponent() {
        this.groupedUnits = [];
        this.PropertyTypeEnum = _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"];
        this.OwnerTypeEnum = _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_2__["OwnerTypeEnum"];
        this.displayedColumns = ['size', 'income', 'rent', 'amountAvailable', 'building'];
    }
    DetailsUnitsComponent.prototype.ngOnInit = function () {
        if (!this.units) {
            return;
        }
        if (this.propertyTypeId === _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Rental) {
            this.units.forEach(function (unit) {
                var incomeAMI = unit.unitRegulatoryMechanism && unit.unitRegulatoryMechanism.length > 0 && unit.unitRegulatoryMechanism[0].hasOwnProperty("amipercentage") ? unit.unitRegulatoryMechanism[0].amipercentage : 0;
                incomeAMI = lodash__WEBPACK_IMPORTED_MODULE_1__["padStart"](incomeAMI, 3, '0');
                var layoutType = unit.unitLayoutType.name;
                var monthlyRent = unit.baseRent;
                monthlyRent = lodash__WEBPACK_IMPORTED_MODULE_1__["padStart"](monthlyRent, 5, '0');
                var isPlusOneRule = unit.hasPlusOneRule;
                var utilityType = unit.utilityType.utilityTypeId;
                utilityType = lodash__WEBPACK_IMPORTED_MODULE_1__["padStart"](utilityType, 2, '0');
                unit.groupLabel = incomeAMI + "-" + layoutType + "-" + monthlyRent + "-" + isPlusOneRule + "-" + utilityType;
            });
            //Group by Income AMI - Layout Type - Monthly Rent - Is Plus One Rule - Utility Type
            var groupedUnitReq = lodash__WEBPACK_IMPORTED_MODULE_1__["groupBy"](this.units, function (unit) { return unit.groupLabel; });
            //console.log("Grouped Unit Req", groupedUnitReq);
            var keys = Object.keys(groupedUnitReq);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var prop = keys_1[_i];
                var unitGroup = new UnitLayoutByType();
                unitGroup.units = groupedUnitReq[prop];
                unitGroup.name = prop;
                //unitGroup.units = groupedUnitReq[prop];
                unitGroup.typeId = unitGroup.units[0].unitLayoutTypeId;
                this.groupedUnits.push(unitGroup);
            }
            this.groupedUnits.sort(function (x, y) {
                return x.name - y.name;
            }); //sort it by asc order by name
            // sort unit income requirements by householdsize
            this.groupedUnits.forEach(function (group) {
                group.units.forEach(function (unit) {
                    unit.unitIncome.sort(function (x, y) {
                        return x.houseHoldSize - y.houseHoldSize;
                    });
                });
            });
            //console.log('advertisement component - Grouped Unit Requirements (sorted): ', this.groupedUnits);
        }
        else if (this.propertyTypeId === _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Owner) {
            if (this.ownerTypeId === _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_2__["OwnerTypeEnum"].CondoCoop) {
                this.units.forEach(function (unit) {
                    var incomeAMI = unit.unitRegulatoryMechanism && unit.unitRegulatoryMechanism.length > 0 && unit.unitRegulatoryMechanism[0].hasOwnProperty("amipercentage") ? unit.unitRegulatoryMechanism[0].amipercentage : 0;
                    incomeAMI = lodash__WEBPACK_IMPORTED_MODULE_1__["padStart"](incomeAMI, 3, '0');
                    var layoutType = unit.unitLayoutType.name;
                    var estimatedSalePrice = unit.estimatedSalePrice;
                    estimatedSalePrice = lodash__WEBPACK_IMPORTED_MODULE_1__["padStart"](estimatedSalePrice, 7, '0');
                    var isPlusOneRule = unit.hasPlusOneRule;
                    var maxAssetCap = unit.maximumAssetCap;
                    var carryingCost = unit.carryingCost;
                    var totalMinimumHhIncome = unit.unitIncome.reduce(function (sum, a) { return sum + parseInt(a.minimumIncome); }, 0);
                    unit.groupLabel = incomeAMI + "-" + layoutType + "-" + estimatedSalePrice + "-" + isPlusOneRule + "-" + maxAssetCap + "-" + carryingCost + "-" + totalMinimumHhIncome;
                });
                //Group by Income AMI - Layout Type - Estimated Sale Price - Is Plus One Rule - Max Assest Cap - Carrying Cost - Total Minimum Household Income
                var groupedUnitReq = lodash__WEBPACK_IMPORTED_MODULE_1__["groupBy"](this.units, function (unit) { return unit.groupLabel; });
                //console.log("Grouped Unit Req", groupedUnitReq);
                var keys = Object.keys(groupedUnitReq);
                for (var _a = 0, keys_2 = keys; _a < keys_2.length; _a++) {
                    var prop = keys_2[_a];
                    var unitGroup = new UnitLayoutByType();
                    unitGroup.units = groupedUnitReq[prop];
                    unitGroup.name = prop;
                    //unitGroup.units = groupedUnitReq[prop];
                    unitGroup.typeId = unitGroup.units[0].unitLayoutTypeId;
                    this.groupedUnits.push(unitGroup);
                }
                this.groupedUnits.sort(function (x, y) {
                    return x.name - y.name;
                }); //sort it by asc order by name
                // sort unit income requirements by householdsize
                this.groupedUnits.forEach(function (group) {
                    group.units.forEach(function (unit) {
                        unit.unitIncome.sort(function (x, y) {
                            return x.houseHoldSize - y.houseHoldSize;
                        });
                    });
                });
                //console.log('advertisement component - Grouped Unit Requirements (sorted): ', this.groupedUnits);
            }
            else if (this.ownerTypeId === _shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_2__["OwnerTypeEnum"].SmallHome) {
                this.units.forEach(function (unit) {
                    var incomeAMI = unit.unitRegulatoryMechanism && unit.unitRegulatoryMechanism.length > 0 && unit.unitRegulatoryMechanism[0].hasOwnProperty("amipercentage") ? unit.unitRegulatoryMechanism[0].amipercentage : 0;
                    incomeAMI = lodash__WEBPACK_IMPORTED_MODULE_1__["padStart"](incomeAMI, 3, '0');
                    var layoutType = unit.unitLayoutType.name;
                    var numUnitsInSmallHome = unit.numberOfSmallHomeUnits;
                    var minMaxHouseholdSize = unit.minimumHouseholdSize + "-" + unit.maximumHouseholdSize;
                    unit.minimumIncome = Math.min.apply(null, unit.unitIncome.map(function (i) { return i.minimumIncome; }));
                    unit.maximumIncome = Math.max.apply(null, unit.unitIncome.map(function (i) { return i.maximumIncome; }));
                    var minMaxHouseholdIncome = unit.minimumIncome + "-" + unit.maximumIncome;
                    var isPlusOneRule = unit.hasPlusOneRule;
                    var maxAssetCap = unit.maximumAssetCap;
                    var estimatedSalePrice = unit.estimatedSalePrice;
                    estimatedSalePrice = lodash__WEBPACK_IMPORTED_MODULE_1__["padStart"](estimatedSalePrice, 7, '0');
                    unit.groupLabel = incomeAMI + "-" + layoutType + "-" + numUnitsInSmallHome + "-" + minMaxHouseholdSize + "-" + minMaxHouseholdIncome + "-" + isPlusOneRule + "-" + maxAssetCap + "-" + estimatedSalePrice;
                });
                //Group by Income AMI - Layout Type - Estimated Sale Price - Is Plus One Rule - Max Assest Cap - Carrying Cost - Total Minimum Household Income
                var groupedUnitReq = lodash__WEBPACK_IMPORTED_MODULE_1__["groupBy"](this.units, function (unit) { return unit.groupLabel; });
                //console.log("Grouped Unit Req", groupedUnitReq);
                var keys = Object.keys(groupedUnitReq);
                for (var _b = 0, keys_3 = keys; _b < keys_3.length; _b++) {
                    var prop = keys_3[_b];
                    var unitGroup = new UnitLayoutByType();
                    unitGroup.units = groupedUnitReq[prop];
                    unitGroup.name = prop;
                    //unitGroup.units = groupedUnitReq[prop];
                    unitGroup.typeId = unitGroup.units[0].unitLayoutTypeId;
                    this.groupedUnits.push(unitGroup);
                }
                this.groupedUnits.sort(function (x, y) {
                    return x.name - y.name;
                }); //sort it by asc order by name
                // sort unit income requirements by householdsize
                //this.groupedUnits.forEach(group => {
                //  group.units.forEach(unit => {
                //    unit.unitIncome.sort((x, y) => {
                //      return x.houseHoldSize - y.houseHoldSize;
                //    });
                //  });
                //});
                //console.log('advertisement component - Grouped Unit Requirements (sorted): ', this.groupedUnits);
            }
        }
    };
    DetailsUnitsComponent.prototype.isHighlighted = function (row) {
        return row.rent === 729;
    };
    DetailsUnitsComponent.prototype.log = function () {
        Array.from(arguments).forEach(function (a) { return console.log(a); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DetailsUnitsComponent.prototype, "propertyTypeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DetailsUnitsComponent.prototype, "ownerTypeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailsUnitsComponent.prototype, "units", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsUnitsComponent.prototype, "defaultImage", void 0);
    DetailsUnitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-units',
            template: __webpack_require__(/*! ./units.component.html */ "./src/app/modules/details/components/units/units.component.html"),
            styles: [__webpack_require__(/*! ./units.component.scss */ "./src/app/modules/details/components/units/units.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsUnitsComponent);
    return DetailsUnitsComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/components/who-should-apply/who-should-apply.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/details/components/who-should-apply/who-should-apply.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"who-should-apply-container mb-xl mt-xl\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h2 class=\"text-center\">Who Should Apply</h2>\n        <ul>\n          <li>\n            Individuals or households who meet the income and household size requirements listed in the <a (click)=\"scrollTo('units-section')\">Available Units</a> table may apply.\n          </li>\n          <li>\n            Qualified applicants will be required to mmet additional selection criteria.\n          </li>\n          <li>\n            Applicants who live in New York City receive a general preference for apartments.\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/details/components/who-should-apply/who-should-apply.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/details/components/who-should-apply/who-should-apply.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host .who-should-apply-container .who-should-apply-row ul {\n  margin-top: 2rem; }\n:host .who-should-apply-container .who-should-apply-row ul li {\n    margin-bottom: 1rem;\n    line-height: 1.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9jb21wb25lbnRzL3doby1zaG91bGQtYXBwbHkvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy93ZWIvc3JjL2FwcC9tb2R1bGVzL2RldGFpbHMvY29tcG9uZW50cy93aG8tc2hvdWxkLWFwcGx5L0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhcHBcXG1vZHVsZXNcXGRldGFpbHNcXGNvbXBvbmVudHNcXHdoby1zaG91bGQtYXBwbHlcXHdoby1zaG91bGQtYXBwbHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUErRkEsMkJBQUE7QUFhQSxZQUFBO0FBTUEsdUJBQUE7QUE2QkEsZUFBQTtBQXlDQSxZQUFBO0FBcUJBLFlBQUE7QUN2TkE7RUFLUSxnQkQ0SFMsRUFBQTtBQ2pJakI7SUFRVSxtQkR1SE87SUN0SFAsZ0JBQWdCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9kZXRhaWxzL2NvbXBvbmVudHMvd2hvLXNob3VsZC1hcHBseS93aG8tc2hvdWxkLWFwcGx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBsZWFzZSBjb25zdWx0IHdpdGggWXVyeSBiZWZvcmUgYWRkaW5nIHNvbWUgbmV3IENTUyB2YXJpYWJsZXMuICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBUYWJsZSBvZiBDb250ZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gVHlwb2dyYXBoeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUaGVtZSBDb2xvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gU2hhZG93cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTcGFjaW5nIEd1aWRlbGluZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIEFuaW1hdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQ29ybmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vVHlwb2dyYXBoeVxuJGZvbnQtbWFpbjogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LWhlYWRpbmc6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1saW5lYXdlc29tZTogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweC8xIFwiTGluZUF3ZXNvbWVcIjtcbiRmb250LWZvbnRhd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiRodG1sLWZvbnQtc2l6ZS1sZzogMTZweDtcbiRodG1sLWZvbnQtc2l6ZS1tZDogMTVweDtcbiRodG1sLWZvbnQtc2l6ZS1zbTogMTRweDtcbiRodG1sLWZvbnQtc2l6ZS14czogMTNweDtcblxuJGh0bWwtZm9udC13ZWlnaHQ6IDQwMDtcblxuLy8gVGhlbWUgQ29sb3JzXG4kY29sb3Itb2Zmc2V0OiA2JTsgLy8gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIGxpZ2h0ZXIgYW5kIGRhcmtlciB2YXJpZW50cyBvZiBhIHNwZWNpZmljIGNvbG9yXG5cbiRiYXNlOiAjZmFmYWZhOyAvL3VzZWQgcHJpbWFyaWx5IGFzIG9mZi13aGl0ZSBib2R5IGJhY2tncm91bmQgY29sb3JcblxuJHByaW1hcnk6ICMwMjAwNjM7XG4kc2Vjb25kYXJ5OiAjZmFmYWZhO1xuJHNlY29uZGFyeS1ibHVlOiByZ2IoMTA5LCAxNzgsIDI1NSk7IC8vIHdlIHNob3VsZCByZXBsYWNlIHRoaXNcbiRhY2NlbnQ6ICNmY2IzMjM7IC8vIzAwYzVkYztcbiRmb2N1czogIzk4MTZmNDtcblxuJHN1Y2Nlc3M6ICMwMGU2YWI7XG4kd2FybmluZzogI2ZmYjgyMjtcbiRkYW5nZXI6ICNmZjJiMmI7IC8vI2Y0NTE2YztcbiRpbmZvOiAjNTU3OGViOyAvLyMzNmEzZjc7XG5cbiRtZXRhbDogI2M0YzVkNjtcbiRtZXRhbC1saWdodDogbGlnaHRlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuJG1ldGFsLWRhcms6IGRhcmtlbigkbWV0YWwsICRjb2xvci1vZmZzZXQpO1xuXG4vLyBncmV5c1xuJGxpZ2h0OiAjZmZmO1xuJGRhcms6ICMyYzJlM2U7XG4kZ3JleS0yMDogIzMzMzMzMztcbiRncmV5LTMwOiAjNGQ0ZDRkO1xuJGdyZXktNTA6ICM4MDgwODA7XG4kZ3JleS03MDogI2IzYjNiMztcbiRncmV5LTkwOiAjZTZlNmU2O1xuJGdyZXktOTU6ICNmMmYyZjI7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbi8vIEV4dGVuZGVkIENvbG9yIFBhbGV0dGVcbi8vIFRPRE86IFJldmlldyB0aGVzZSBjb2xvcnNcbiRkYXJrLWJsdWU6ICMwMjM5NzA7XG4kYmx1ZTogIzAxN2FjZTtcbiRjZXJ1bGVhbjogIzAxN2FjZTtcbiRsaWdodC1ibHVlOiAjY2NlYWZmO1xuJHBhbGUtYmx1ZTogI2YxZjlmZjtcbiRkYXJrLXRlYWw6ICMwMDY0NmU7XG4kdGVhbDogIzAwYzFkNDtcbiRsaWdodC10ZWFsOiAjY2NmYWZmO1xuJHBhbGUtdGVhbDogI2Y1ZmVmZjtcbiRkYXJrLWdyZWVuOiAjMGE1YzQwO1xuJGdyZWVuOiAjMTRiODgxO1xuJGxpZ2h0LWdyZWVuOiAjYTNmNWQ5O1xuJHBhbGUtZ3JlZW46ICNmNmZlZmI7XG4kZGFyay15ZWxsb3c6ICM5OTc0MDA7XG4keWVsbG93OiAjZmZjZTMzO1xuJGxpZ2h0LXllbGxvdzogI2ZmZjNjYztcbiRwYWxlLXllbGxvdzogI2ZmZmRmNTtcbiRkYXJrLXJlZDogIzY2MGEwMDtcbiRyZWQ6ICNjYzE0MDA7XG4kbGlnaHQtcmVkOiAjZmZkMWNjO1xuJHBhbGUtcmVkOiAjZmZmNmY1O1xuXG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcImFjY2VudFwiOiAkYWNjZW50LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsIFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmcsIFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImluZm9cIjogJGluZm8sXG4gIFwibWV0YWxcIjogJG1ldGFsLFxuICBcImZvY3VzXCI6ICRmb2N1cyxcbiAgXCJncmV5LTIwXCI6ICRncmV5LTIwLCBcbiAgXCJncmV5LTMwXCI6ICRncmV5LTMwLFxuICBcImdyZXktNTBcIjogJGdyZXktNTAsXG4gIFwiZ3JleS03MFwiOiAkZ3JleS03MCxcbiAgXCJncmV5LTkwXCI6ICRncmV5LTkwLFxuICBcImdyZXktOTVcIjogJGdyZXktOTUsXG4gIFwiYmFzZVwiOiAkYmFzZSxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJ3aGl0ZVwiOiAkd2hpdGUsXG4gIFwiYmxhY2tcIjogJGJsYWNrLFxuICBcImJsdWVcIjogJGJsdWVcbik7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuJGd0LXNtYWxsLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBzbSkgIWRlZmF1bHQ7IC8vIDU3NlxuJGd0LW1lZGl1bS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbWQpICFkZWZhdWx0OyAvLyA3NjhcbiRndC1sYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbGcpICFkZWZhdWx0OyAvLyA5OTJcbiRndC14bGFyZ2Utd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHhsKSAhZGVmYXVsdDsgLy8gMTIwMFxuXG4vKiBTaGFkb3dzICovXG4kc2hhZG93LXNtOiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xuJHNoYWRvdy1tZDogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjA4KTsgLy9kZWZhdWx0XG4kc2hhZG93LWxnOiAwIDE1cHggMzBweCAwIHJnYmEoMCwwLDAsMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuJHNoYWRvdy1lbGV2YXRlOiAkc2hhZG93LWxnOyAvLyBvbiBob3ZlclxuXG4vKiBTcGFjaW5nIEd1aWRlbGluZXMgKi9cbiRzcGFjaW5nLXh4czogMC4zMzNyZW07ICAgICAvLyBzbWFsbCBnYXAgICAgICAgICAgIC0gNXB4ICAgICh4eHMpXG4kc3BhY2luZy14czogMC42NjdyZW07ICAgICAgLy8gUmVsYXRlZCBEaXJlY3RseSAgICAtIDEwcHggICAoeHMpXG4kc3BhY2luZy1zbTogMXJlbTsgICAgICAgICAgLy8gUmVsYXRlZCBJbmRpcmVjdGx5ICAtIDE1cHggICAoc20pXG4kc3BhY2luZy1tZDogMS4zM3JlbTsgICAgICAgLy8gUmVsYXRlZCBHcm91cCAgICAgICAtIDIwcHggICAobWQpICAvL2RlZmF1bHRcbiRzcGFjaW5nLWxnOiAycmVtOyAgICAgICAgICAvLyBVbnJlbGF0ZWQgR3JvdXAgICAgIC0gMzBweCAgIChsZylcbiRzcGFjaW5nLXhsOiAyLjY2N3JlbTsgICAgICAvLyBOZXcgU2VjdGlvbiAgICAgICAgIC0gNDBweCAgICh4bClcbiRzcGFjaW5nLXh4bDogNHJlbTsgICAgICAgICAvLyBOZXcgU2VjdGlvbiAoTGFyZ2UpIC0gNjBweCAgICh4eGwpXG5cbiRzcGFjaW5nLXNpemVzOiAoXG4gIFwiMFwiOiAwLFxuICBcIjVcIjogJHNwYWNpbmcteHhzLFxuICBcIjEwXCI6ICRzcGFjaW5nLXhzLFxuICBcIjE1XCI6ICRzcGFjaW5nLXNtLFxuICBcIjIwXCI6ICRzcGFjaW5nLW1kLFxuICBcIjMwXCI6ICRzcGFjaW5nLWxnLFxuICBcIjQwXCI6ICRzcGFjaW5nLXhsLFxuICBcIjYwXCI6ICRzcGFjaW5nLXh4bCxcbiAgXCIxNS1lbVwiOiAxLjVyZW0sXG4gIFwiMjItZW1cIjogMi4ycmVtLFxuICBcInh4c1wiOiAkc3BhY2luZy14eHMsXG4gIFwieHNcIjogJHNwYWNpbmcteHMsXG4gIFwic21cIjogJHNwYWNpbmctc20sXG4gIFwibWRcIjogJHNwYWNpbmctbWQsXG4gIFwibGdcIjogJHNwYWNpbmctbGcsXG4gIFwieGxcIjogJHNwYWNpbmcteGwsXG4gIFwieHhsXCI6ICRzcGFjaW5nLXh4bCwgIFxuICApO1xuXG4vKiBBbmltYXRpb25zICovXG4kYW5pbWF0aW9uLXhzOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24tc2g6IGFsbCAwLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1tZDogYWxsIDAuMzVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpOyAvL2RlZmF1bHRcbiRhbmltYXRpb24tbGc6IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi14bDogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXh4bDogYWxsIDEuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cbiRhbmltYXRpb24tZGVmYXVsdDogJGFuaW1hdGlvbi1tZDtcblxuJGFuaW1hdGlvbi1mYWRlLWluOiBmYWRlLWluIDFzIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtb3V0OiBmYWRlLW91dCAxcyBlYXNlLW91dCBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLXRvcDogZmFkZS1pbi10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbTogZmFkZS1pbi1ib3R0b20gMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuJGFuaW1hdGlvbi1wdWZmLWluLWNlbnRlcjogcHVmZi1pbi1jZW50ZXIgMC43cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcjogcHVmZi1vdXQtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgYm90aDtcbiRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbDogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcbiRhbmltYXRpb24tZm9jdXMtaW4tY29udHJhY3QtYmNrOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoOyAvLyBmb3IgdGV4dFxuJGFuaW1hdGlvbi1zY2FsZS1pbi12ZXItdG9wOiBzY2FsZS1pbi12ZXItdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcDogc2NhbGUtb3V0LXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIGJvdGg7XG4kYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyBpbmZpbml0ZTtcbiRhbmltYXRpb24tcHVsc2UtMzogc2hhZG93LXB1bHNlLWRlbGF5ZWQgNXMgMztcbiRhbmltYXRpb24tcHVsc2UtMTogc2hhZG93LXB1bHNlIDFzIDE7XG5cbi8vIFlvdSBjYW4gdXNlIGFueSBvZiB0aGVzZSBuYW1lcyB0byBhbmltYXRlIEhUTUwgZWxlbWVudHMgb24gaW5pdGlhdGlvblxuJGFuaW1hdGlvbnM6IChcbiAgXCJmYWRlLWluXCI6ICRhbmltYXRpb24tZmFkZS1pbixcbiAgXCJmYWRlLW91dFwiOiAkYW5pbWF0aW9uLWZhZGUtb3V0LFxuICBcImZhZGUtaW4tdG9wXCI6ICRhbmltYXRpb24tZmFkZS1pbi10b3AsXG4gIFwiZmFkZS1pbi1ib3R0b21cIjogJGFuaW1hdGlvbi1mYWRlLWluLWJvdHRvbSxcbiAgXCJwdWZmLWluLWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyLFxuICBcInB1ZmYtb3V0LWNlbnRlclwiOiAkYW5pbWF0aW9uLXB1ZmYtb3V0LWNlbnRlcixcbiAgXCJzaGFrZS1ob3Jpem9udGFsXCI6ICRhbmltYXRpb24tc2hha2UtaG9yaXpvbnRhbCxcbiAgXCJmb2N1cy1pbi1jb250cmFjdC1iY2tcIjogJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2ssXG4gIFwic2NhbGUtaW4tdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3AsXG4gIFwic2NhbGUtb3V0LXZlci10b3BcIjogJGFuaW1hdGlvbi1zY2FsZS1vdXQtdmVyLXRvcCxcbiAgXCJwdWxzZS1pbmZpbml0ZVwiOiAkYW5pbWF0aW9uLXB1bHNlLWluZmluaXRlLFxuICBcInB1bHNlLTNcIjogJGFuaW1hdGlvbi1wdWxzZS0zLFxuICBcInB1bHNlLTFcIjogJGFuaW1hdGlvbi1wdWxzZS0xXG4pO1xuXG4vKiBCb3JkZXJzICovXG4kYm9yZGVyLXNpemUtc206IDAuMTI1cmVtO1xuJGJvcmRlci1zaXplLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1zaXplLWxnOiAwLjVyZW07XG4kYm9yZGVyLXNpemUtMTogMXB4O1xuJGJvcmRlci1zaXplLTI6IDJweDtcbiRib3JkZXItc2l6ZS0zOiAzcHg7XG4kYm9yZGVyLXNpemUtNTogNXB4O1xuJGJvcmRlci1zaXplLTEwOiAxMHB4O1xuXG4kYm9yZGVyLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1zaXplLXNtLFxuICBcIm1kXCI6ICRib3JkZXItc2l6ZS1tZCxcbiAgXCJsZ1wiOiAkYm9yZGVyLXNpemUtbGcsXG4gIFwiMVwiOiAkYm9yZGVyLXNpemUtMSxcbiAgXCIyXCI6ICRib3JkZXItc2l6ZS0yLFxuICBcIjNcIjogJGJvcmRlci1zaXplLTMsXG4gIFwiNVwiOiAkYm9yZGVyLXNpemUtNSxcbiAgXCIxMFwiOiAkYm9yZGVyLXNpemUtMTBcbik7XG5cbi8qIENvcm5lcnMgKi9cbiRib3JkZXItcmFkaXVzLXNtOiAwLjEyNXJlbTtcbiRib3JkZXItcmFkaXVzLW1kOiAwLjI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNXJlbTtcbiRib3JkZXItcmFkaXVzLTI6IDJweDtcbiRib3JkZXItcmFkaXVzLTQ6IDRweDtcbiRib3JkZXItcmFkaXVzLTY6IDZweDtcbiRib3JkZXItcmFkaXVzLTEwOiAxMHB4O1xuJGJvcmRlci1yYWRpdXMtMTU6IDE1cHg7XG4kYm9yZGVyLXJhZGl1cy0yMDogMjBweDtcbiRib3JkZXItcmFkaXVzLWhhbGY6IDUwJTtcbiRib3JkZXItcmFkaXVzLWZ1bGw6IDEwMCU7XG5cbiRib3JkZXItcmFkaXVzLXNpemVzOiAoXG4gIFwic21cIjogJGJvcmRlci1yYWRpdXMtc20sXG4gIFwibWRcIjogJGJvcmRlci1yYWRpdXMtbWQsIC8vZGVmYXVsdFxuICBcImxnXCI6ICRib3JkZXItcmFkaXVzLWxnLFxuICBcIjJcIjogJGJvcmRlci1yYWRpdXMtMixcbiAgXCI0XCI6ICRib3JkZXItcmFkaXVzLTQsXG4gIFwiNlwiOiAkYm9yZGVyLXJhZGl1cy02LFxuICBcIjEwXCI6ICRib3JkZXItcmFkaXVzLTEwLFxuICBcIjE1XCI6ICRib3JkZXItcmFkaXVzLTE1LFxuICBcIjIwXCI6ICRib3JkZXItcmFkaXVzLTIwLFxuICBcImhhbGZcIjogJGJvcmRlci1yYWRpdXMtaGFsZixcbiAgXCJmdWxsXCI6ICRib3JkZXItcmFkaXVzLWZ1bGwsXG4pO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgLndoby1zaG91bGQtYXBwbHktY29udGFpbmVyIHtcbiAgICAud2hvLXNob3VsZC1hcHBseS1yb3cge1xuICAgICBcbiAgICAgIHVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogJHNwYWNpbmctbGc7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRzcGFjaW5nLXNtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/details/components/who-should-apply/who-should-apply.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/details/components/who-should-apply/who-should-apply.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DetailsWhoShouldApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsWhoShouldApplyComponent", function() { return DetailsWhoShouldApplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsWhoShouldApplyComponent = /** @class */ (function () {
    function DetailsWhoShouldApplyComponent(router) {
        this.router = router;
        this.FAQs = [
            {
                question: 'Who Should Apply?',
                answer: "Individuals or households who meet the income and household\n              size requirements listed in the table below may apply.Qualified\n              applicants will be required to meet additional selection criteria.\n              Applicants who live in New York City receive a general preference\n              for apartments."
            },
            {
                question: 'When is the Deadline?',
                answer: "Applications must be postmarked or submitted online no later than December 28, 2018. Late applications will not be considered."
            },
            {
                question: 'What Happens After You Submit an Application?',
                answer: "After the deadline, applications are selected for review through a lottery process. If yours is selected and you appear to qualify, you will\n              be invited to an interview to continue the process of determining your eligibility. Interviews are usually scheduled from 2 to 10 months\n              after the application deadline. You will be asked to bring documents that verify your household size, identity of members of your\n              household, and your household income."
            },
            {
                question: 'How do I apply?',
                answer: "Apply online or through mail. To apply online, please go to nyc.gov/housingconnect. To request an application by mail, send a selfaddressed\n              envelope to: Van Sinderen Plaza c/o Cornell Pace Inc., 542 Main Street 3rd Floor, New Rochelle, NY 10801. Only send\n              one application per development. Do not submit duplicate applications. Do not apply online and also send in a paper application.\n              Applicants who submit more than one application may be disqualified."
            },
            {
                question: 'When is the Deadline?',
                answer: "Applications must be postmarked or submitted online no later than December 28, 2018. Late applications will not be considered."
            }
        ];
    }
    DetailsWhoShouldApplyComponent.prototype.scrollTo = function (element) {
        var elem = document.querySelector('#' + element);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }
    };
    DetailsWhoShouldApplyComponent.prototype.ngOnInit = function () {
        this.url = this.router.url;
    };
    DetailsWhoShouldApplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-who-should-apply',
            template: __webpack_require__(/*! ./who-should-apply.component.html */ "./src/app/modules/details/components/who-should-apply/who-should-apply.component.html"),
            styles: [__webpack_require__(/*! ./who-should-apply.component.scss */ "./src/app/modules/details/components/who-should-apply/who-should-apply.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DetailsWhoShouldApplyComponent);
    return DetailsWhoShouldApplyComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/details-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/details/details-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRoutingModule", function() { return DetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.component */ "./src/app/modules/details/details.component.ts");
/* harmony import */ var _pages_lottery_apply_lottery_apply_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/lottery-apply/lottery-apply.component */ "./src/app/modules/details/pages/lottery-apply/lottery-apply.component.ts");
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/auth/auth.guard */ "./src/app/shared/auth/auth.guard.ts");
/* harmony import */ var _pages_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/confirmation/confirmation.component */ "./src/app/modules/details/pages/confirmation/confirmation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: ':id',
        component: _details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"]
    },
    {
        path: ':id/apply-lottery',
        component: _pages_lottery_apply_lottery_apply_component__WEBPACK_IMPORTED_MODULE_3__["LotteryApplyComponent"],
        canActivate: [_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'confirmation/:id',
        component: _pages_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationConfirmationComponent"],
        canActivate: [_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: '/search-businesses'
    }
];
var DetailsRoutingModule = /** @class */ (function () {
    function DetailsRoutingModule() {
    }
    DetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DetailsRoutingModule);
    return DetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/details/details.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/details/details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-print-none\">\r\n    <div *ngIf=\"!isLoaded\">\r\n      <loader class=\"m--padding-10\"></loader>\r\n    </div>\r\n    <div *ngIf=\"isLoaded\">\r\n      <!--<details-overview id=\"overview-section\" [amenities]=\"amenities\" [endDate]=\"endDate\" [units]=\"units\"></details-overview>-->\r\n      <details-greeter [lotteryName]=\"lotteryName\" [lotteryBuildings]=\"lotteryBuildings\" [galleryImages]=\"galleryImages\" [defaultImage]=\"defaultImage\" [units]=\"units\" [endDate]=\"endDate\" [daysLeft]=\"daysLeft\" (onOpenGalleryEvent)=\"openGallery()\"></details-greeter>\r\n      <details-nav-bar [lotteryId]=\"lotteryId\" [canApply]=\"canApply\"></details-nav-bar>\r\n      <details-overview id=\"overview-section\" [lotteryId]=\"lotteryId\" [canApply]=\"canApply\" [amenities]=\"amenities\" [lotteryName]=\"lotteryName\" [lotteryBuildings]=\"lotteryBuildings\" [units]=\"units\" [lotterySetAsidePreferences]=\"lotterySetAsidePreferences\" [adContent]=\"advertisementContent\"></details-overview>\r\n      <!-- <details-units id=\"units-section\" [units]=\"units\" [defaultImage]=\"defaultImage\" [propertyTypeId]=\"propertyTypeId\" [ownerTypeId]=\"ownerTypeId\"></details-units> -->\r\n      <details-map id=\"map-section\" [lotteryBuildings]=\"lotteryBuildings\"></details-map>\r\n      <details-photos id=\"photos-section\" [photos]=\"photos\" [galleryOptions]=\"galleryOptions\" [galleryImages]=\"galleryImages\"></details-photos>\r\n      <!-- <details-who-should-apply id=\"who-should-apply-section\"></details-who-should-apply> -->\r\n      <details-how-to-apply id=\"how-to-apply-section\" [canApply]=\"canApply\" [lotteryId]=\"lotteryId\" [advertisementContent]=\"advertisementContent\" [lottery]=\"lottery\"></details-how-to-apply>\r\n      \r\n    </div>\r\n  </div>\r\n  <div class=\"d-print-block\" [ngClass]=\"{'d-none': hidePrint()}\">\r\n    <details-print></details-print>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/modules/details/details.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/details/details.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n@media (min-width: 1600px) {\n  :host /deep/ .page-container {\n    width: 84rem;\n    margin-left: auto;\n    margin-right: auto; } }\n@media (max-width: 1599px) {\n  :host /deep/ .page-container {\n    width: auto;\n    margin-left: 2.2rem;\n    margin-right: 2.2rem; } }\n:host /deep/ .advertisement-wrap-container {\n  font-size: 1.2em;\n  letter-spacing: 1px; }\n@media print {\n  :host /deep/ .toolbar-container {\n    display: none; }\n  :host /deep/ .hero-container {\n    min-height: auto;\n    overflow: hidden;\n    padding: 1.33rem 0;\n    background-color: #fff;\n    display: flex;\n    justify-content: space-around; }\n    :host /deep/ .hero-container .hero-bg {\n      position: relative;\n      width: 30%;\n      top: 0; }\n      :host /deep/ .hero-container .hero-bg .hero-bg-img {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n        -webkit-filter: initial;\n                filter: initial; }\n    :host /deep/ .hero-container .hero-content-container {\n      position: relative;\n      background: #fff;\n      padding: 0;\n      color: #000000;\n      width: 70%; }\n      :host /deep/ .hero-container .hero-content-container .page-container {\n        margin: 0 0 0 0.667rem; }\n        :host /deep/ .hero-container .hero-content-container .page-container * {\n          color: #0f0f11 !important;\n          border-color: #0f0f11;\n          font-size: 14px; }\n        :host /deep/ .hero-container .hero-content-container .page-container h1 {\n          font-size: 23px; }\n        :host /deep/ .hero-container .hero-content-container .page-container .col-md-8 {\n          flex: 0 0 100%;\n          max-width: 100%; }\n        :host /deep/ .hero-container .hero-content-container .page-container .col-md-4.text-right {\n          display: none; }\n  :host /deep/ .advertisement-wrap-container > .page-container {\n    margin: 0 0; }\n  :host /deep/ #details .col-md-4 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n    :host /deep/ #details .col-md-4 .text-center {\n      display: inline-block;\n      font-size: 17px;\n      margin-right: 10px;\n      margin-bottom: 0; }\n      :host /deep/ #details .col-md-4 .text-center:after {\n        content: ':';\n        display: inline-block;\n        padding-left: 3px; }\n    :host /deep/ #details .col-md-4 .list-group {\n      display: inline;\n      flex-direction: initial; }\n      :host /deep/ #details .col-md-4 .list-group .list-item {\n        display: inline-block;\n        padding: 0 0.667rem 0 0;\n        font-size: 11px;\n        vertical-align: middle; }\n        :host /deep/ #details .col-md-4 .list-group .list-item .list-item-label {\n          padding-left: 0.667rem; }\n        :host /deep/ #details .col-md-4 .list-group .list-item .list-item-icon .btn {\n          height: 1.33rem;\n          width: 1.33rem;\n          line-height: 1.33rem; }\n          :host /deep/ #details .col-md-4 .list-group .list-item .list-item-icon .btn i {\n            font-size: 11px; }\n    :host /deep/ #details .col-md-4 .details-subinfo * {\n      color: #333333 !important; }\n  :host /deep/ #details .col-md-8 {\n    display: none; }\n  :host /deep/ #units {\n    background: #fff;\n    page-break-after: always;\n    margin-top: 0 !important; }\n    :host /deep/ #units .page-container-print-row {\n      padding-top: 0 !important; }\n    :host /deep/ #units h2 {\n      color: #000000 !important; }\n  :host /deep/ #faq,\n  :host /deep/ #available-units-section-bg,\n  :host /deep/ #otherLotteries {\n    display: none; }\n  :host /deep/ #map {\n    page-break-after: always; }\n  :host /deep/ #howtoapply {\n    display: none; }\n  :host /deep/ .photo-wrap {\n    flex: 0 0 25%;\n    max-width: 25%; } }\n@media print {\n  :host /deep/ /deep/ #units .mat-tab-label-container {\n    background: #fff !important; }\n  :host /deep/ /deep/ #units .mat-tab-label-content {\n    color: #000000 !important; }\n  :host /deep/ /deep/ #units .table.glass {\n    background: #fff !important; }\n  :host /deep/ /deep/ #units td,\n  :host /deep/ /deep/ #units th {\n    padding: 3px 1em !important;\n    color: #2c2e3e !important; } }\n:host /deep/ .discard-wrapper-transform {\n  -webkit-animation: none;\n  animation: none; }\n:host /deep/ .opacity-0 {\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9DOlxcVEZTXFxEQ0FcXFB1YmxpY1xcUHVibGljV2ViL3Byb2plY3RzXFx3ZWJcXHNyY1xcYXBwXFxtb2R1bGVzXFxkZXRhaWxzXFxkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBK0ZBLDJCQUFBO0FBYUEsWUFBQTtBQU1BLHVCQUFBO0FBNkJBLGVBQUE7QUF5Q0EsWUFBQTtBQXFCQSxZQUFBO0FDdE5JO0VBREo7SUFHUSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBLEVBQ25CO0FBR0g7RUFUSjtJQVdRLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CLEVBQUEsRUFDckI7QUFkUDtFQWtCTSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFNckI7RUF6Qko7SUEyQlEsYUFBYSxFQUFBO0VBM0JyQjtJQStCUSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFzQjtJQUN0QixzQkRXSTtJQ1ZKLGFBQWE7SUFDYiw2QkFBNkIsRUFBQTtJQXBDckM7TUF1Q1Usa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixNQUFNLEVBQUE7TUF6Q2hCO1FBNENZLGdDQUF3QjtnQkFBeEIsd0JBQXdCO1FBQ3hCLHVCQUFlO2dCQUFmLGVBQWUsRUFBQTtJQTdDM0I7TUFrRFUsa0JBQWtCO01BQ2xCLGdCRE5FO01DT0YsVUFBVTtNQUNWLGNEQUs7TUNDTCxVQUFVLEVBQUE7TUF0RHBCO1FBeURZLHNCRHFFUyxFQUFBO1FDOUhyQjtVQTREYyx5QkFBeUI7VUFDekIscUJBQXFCO1VBQ3JCLGVEM0NVLEVBQUE7UUNuQnhCO1VBa0VjLGVBQWUsRUFBQTtRQWxFN0I7VUFzRWMsY0FBYztVQUNkLGVBQWUsRUFBQTtRQXZFN0I7VUEyRWMsYUFBYSxFQUFBO0VBM0UzQjtJQWtGUSxXQUFXLEVBQUE7RUFsRm5CO0lBdUZVLGNBQWM7SUFDZCxlQUFlLEVBQUE7SUF4RnpCO01BMkZZLHFCQUFxQjtNQUNyQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGdCQUFnQixFQUFBO01BOUY1QjtRQWlHYyxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGlCQUFpQixFQUFBO0lBbkcvQjtNQXdHWSxlQUFlO01BQ2YsdUJBQXVCLEVBQUE7TUF6R25DO1FBNEdjLHFCQUFxQjtRQUNyQix1QkFBMEI7UUFDMUIsZUFBZTtRQUNmLHNCQUFzQixFQUFBO1FBL0dwQztVQWtIZ0Isc0JEWUssRUFBQTtRQzlIckI7VUF1SGtCLGVEU0U7VUNSRixjRFFFO1VDUEYsb0JET0UsRUFBQTtVQ2hJcEI7WUE0SG9CLGVBQWUsRUFBQTtJQTVIbkM7TUFxSWMseUJBQTBCLEVBQUE7RUFySXhDO0lBMklVLGFBQWEsRUFBQTtFQTNJdkI7SUFnSlEsZ0JEbkdJO0lDb0dKLHdCQUF3QjtJQUN4Qix3QkFBd0IsRUFBQTtJQWxKaEM7TUFxSlUseUJBQXlCLEVBQUE7SUFySm5DO01BeUpVLHlCQUF3QixFQUFBO0VBekpsQzs7O0lBaUtRLGFBQWEsRUFBQTtFQWpLckI7SUFxS1Esd0JBQXdCLEVBQUE7RUFyS2hDO0lBeUtRLGFBQWEsRUFBQTtFQXpLckI7SUE2S1EsYUFBYTtJQUNiLGNBQWMsRUFBQSxFQUNmO0FBSUQ7RUFuTE47SUFzTFksMkJBQTZCLEVBQUE7RUF0THpDO0lBMExZLHlCQUF3QixFQUFBO0VBMUxwQztJQThMWSwyQkFBNkIsRUFBQTtFQTlMekM7O0lBbU1ZLDJCQUEyQjtJQUMzQix5QkFBdUIsRUFBQSxFQUN4QjtBQXJNWDtFQTRNTSx1QkFBdUI7RUFDdkIsZUFBZSxFQUFBO0FBN01yQjtFQWlOTSxVQUFVLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIElNUE9SVEFOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUGxlYXNlIGNvbnN1bHQgd2l0aCBZdXJ5IGJlZm9yZSBhZGRpbmcgc29tZSBuZXcgQ1NTIHZhcmlhYmxlcy4gICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFRhYmxlIG9mIENvbnRlbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUeXBvZ3JhcGh5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFRoZW1lIENvbG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTaGFkb3dzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNwYWNpbmcgR3VpZGVsaW5lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQW5pbWF0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBDb3JuZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9UeXBvZ3JhcGh5XG4kZm9udC1tYWluOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtaGVhZGluZzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiRmb250LWxpbmVhd2Vzb21lOiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNnB4LzEgXCJMaW5lQXdlc29tZVwiO1xuJGZvbnQtZm9udGF3ZXNvbWU6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuJGh0bWwtZm9udC1zaXplLWxnOiAxNnB4O1xuJGh0bWwtZm9udC1zaXplLW1kOiAxNXB4O1xuJGh0bWwtZm9udC1zaXplLXNtOiAxNHB4O1xuJGh0bWwtZm9udC1zaXplLXhzOiAxM3B4O1xuXG4kaHRtbC1mb250LXdlaWdodDogNDAwO1xuXG4vLyBUaGVtZSBDb2xvcnNcbiRjb2xvci1vZmZzZXQ6IDYlOyAvLyB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgbGlnaHRlciBhbmQgZGFya2VyIHZhcmllbnRzIG9mIGEgc3BlY2lmaWMgY29sb3JcblxuJGJhc2U6ICNmYWZhZmE7IC8vdXNlZCBwcmltYXJpbHkgYXMgb2ZmLXdoaXRlIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuXG4kcHJpbWFyeTogIzAyMDA2MztcbiRzZWNvbmRhcnk6ICNmYWZhZmE7XG4kc2Vjb25kYXJ5LWJsdWU6IHJnYigxMDksIDE3OCwgMjU1KTsgLy8gd2Ugc2hvdWxkIHJlcGxhY2UgdGhpc1xuJGFjY2VudDogI2ZjYjMyMzsgLy8jMDBjNWRjO1xuJGZvY3VzOiAjOTgxNmY0O1xuXG4kc3VjY2VzczogIzAwZTZhYjtcbiR3YXJuaW5nOiAjZmZiODIyO1xuJGRhbmdlcjogI2ZmMmIyYjsgLy8jZjQ1MTZjO1xuJGluZm86ICM1NTc4ZWI7IC8vIzM2YTNmNztcblxuJG1ldGFsOiAjYzRjNWQ2O1xuJG1ldGFsLWxpZ2h0OiBsaWdodGVuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG4kbWV0YWwtZGFyazogZGFya2VuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG5cbi8vIGdyZXlzXG4kbGlnaHQ6ICNmZmY7XG4kZGFyazogIzJjMmUzZTtcbiRncmV5LTIwOiAjMzMzMzMzO1xuJGdyZXktMzA6ICM0ZDRkNGQ7XG4kZ3JleS01MDogIzgwODA4MDtcbiRncmV5LTcwOiAjYjNiM2IzO1xuJGdyZXktOTA6ICNlNmU2ZTY7XG4kZ3JleS05NTogI2YyZjJmMjtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZjtcblxuLy8gRXh0ZW5kZWQgQ29sb3IgUGFsZXR0ZVxuLy8gVE9ETzogUmV2aWV3IHRoZXNlIGNvbG9yc1xuJGRhcmstYmx1ZTogIzAyMzk3MDtcbiRibHVlOiAjMDE3YWNlO1xuJGNlcnVsZWFuOiAjMDE3YWNlO1xuJGxpZ2h0LWJsdWU6ICNjY2VhZmY7XG4kcGFsZS1ibHVlOiAjZjFmOWZmO1xuJGRhcmstdGVhbDogIzAwNjQ2ZTtcbiR0ZWFsOiAjMDBjMWQ0O1xuJGxpZ2h0LXRlYWw6ICNjY2ZhZmY7XG4kcGFsZS10ZWFsOiAjZjVmZWZmO1xuJGRhcmstZ3JlZW46ICMwYTVjNDA7XG4kZ3JlZW46ICMxNGI4ODE7XG4kbGlnaHQtZ3JlZW46ICNhM2Y1ZDk7XG4kcGFsZS1ncmVlbjogI2Y2ZmVmYjtcbiRkYXJrLXllbGxvdzogIzk5NzQwMDtcbiR5ZWxsb3c6ICNmZmNlMzM7XG4kbGlnaHQteWVsbG93OiAjZmZmM2NjO1xuJHBhbGUteWVsbG93OiAjZmZmZGY1O1xuJGRhcmstcmVkOiAjNjYwYTAwO1xuJHJlZDogI2NjMTQwMDtcbiRsaWdodC1yZWQ6ICNmZmQxY2M7XG4kcGFsZS1yZWQ6ICNmZmY2ZjU7XG5cblxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gIFwiYWNjZW50XCI6ICRhY2NlbnQsXG4gIFwic3VjY2Vzc1wiOiAkc3VjY2VzcywgXG4gIFwid2FybmluZ1wiOiAkd2FybmluZywgXG4gIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJtZXRhbFwiOiAkbWV0YWwsXG4gIFwiZm9jdXNcIjogJGZvY3VzLFxuICBcImdyZXktMjBcIjogJGdyZXktMjAsIFxuICBcImdyZXktMzBcIjogJGdyZXktMzAsXG4gIFwiZ3JleS01MFwiOiAkZ3JleS01MCxcbiAgXCJncmV5LTcwXCI6ICRncmV5LTcwLFxuICBcImdyZXktOTBcIjogJGdyZXktOTAsXG4gIFwiZ3JleS05NVwiOiAkZ3JleS05NSxcbiAgXCJiYXNlXCI6ICRiYXNlLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcIndoaXRlXCI6ICR3aGl0ZSxcbiAgXCJibGFja1wiOiAkYmxhY2ssXG4gIFwiYmx1ZVwiOiAkYmx1ZVxuKTtcblxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG4kZ3Qtc21hbGwtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHNtKSAhZGVmYXVsdDsgLy8gNTc2XG4kZ3QtbWVkaXVtLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBtZCkgIWRlZmF1bHQ7IC8vIDc2OFxuJGd0LWxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBsZykgIWRlZmF1bHQ7IC8vIDk5MlxuJGd0LXhsYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgeGwpICFkZWZhdWx0OyAvLyAxMjAwXG5cbi8qIFNoYWRvd3MgKi9cbiRzaGFkb3ctc206IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XG4kc2hhZG93LW1kOiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMDgpOyAvL2RlZmF1bHRcbiRzaGFkb3ctbGc6IDAgMTVweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwwLDAsMC4wOCk7XG4kc2hhZG93LWVsZXZhdGU6ICRzaGFkb3ctbGc7IC8vIG9uIGhvdmVyXG5cbi8qIFNwYWNpbmcgR3VpZGVsaW5lcyAqL1xuJHNwYWNpbmcteHhzOiAwLjMzM3JlbTsgICAgIC8vIHNtYWxsIGdhcCAgICAgICAgICAgLSA1cHggICAgKHh4cylcbiRzcGFjaW5nLXhzOiAwLjY2N3JlbTsgICAgICAvLyBSZWxhdGVkIERpcmVjdGx5ICAgIC0gMTBweCAgICh4cylcbiRzcGFjaW5nLXNtOiAxcmVtOyAgICAgICAgICAvLyBSZWxhdGVkIEluZGlyZWN0bHkgIC0gMTVweCAgIChzbSlcbiRzcGFjaW5nLW1kOiAxLjMzcmVtOyAgICAgICAvLyBSZWxhdGVkIEdyb3VwICAgICAgIC0gMjBweCAgIChtZCkgIC8vZGVmYXVsdFxuJHNwYWNpbmctbGc6IDJyZW07ICAgICAgICAgIC8vIFVucmVsYXRlZCBHcm91cCAgICAgLSAzMHB4ICAgKGxnKVxuJHNwYWNpbmcteGw6IDIuNjY3cmVtOyAgICAgIC8vIE5ldyBTZWN0aW9uICAgICAgICAgLSA0MHB4ICAgKHhsKVxuJHNwYWNpbmcteHhsOiA0cmVtOyAgICAgICAgIC8vIE5ldyBTZWN0aW9uIChMYXJnZSkgLSA2MHB4ICAgKHh4bClcblxuJHNwYWNpbmctc2l6ZXM6IChcbiAgXCIwXCI6IDAsXG4gIFwiNVwiOiAkc3BhY2luZy14eHMsXG4gIFwiMTBcIjogJHNwYWNpbmcteHMsXG4gIFwiMTVcIjogJHNwYWNpbmctc20sXG4gIFwiMjBcIjogJHNwYWNpbmctbWQsXG4gIFwiMzBcIjogJHNwYWNpbmctbGcsXG4gIFwiNDBcIjogJHNwYWNpbmcteGwsXG4gIFwiNjBcIjogJHNwYWNpbmcteHhsLFxuICBcIjE1LWVtXCI6IDEuNXJlbSxcbiAgXCIyMi1lbVwiOiAyLjJyZW0sXG4gIFwieHhzXCI6ICRzcGFjaW5nLXh4cyxcbiAgXCJ4c1wiOiAkc3BhY2luZy14cyxcbiAgXCJzbVwiOiAkc3BhY2luZy1zbSxcbiAgXCJtZFwiOiAkc3BhY2luZy1tZCxcbiAgXCJsZ1wiOiAkc3BhY2luZy1sZyxcbiAgXCJ4bFwiOiAkc3BhY2luZy14bCxcbiAgXCJ4eGxcIjogJHNwYWNpbmcteHhsLCAgXG4gICk7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbiRhbmltYXRpb24teHM6IGFsbCAwLjFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1zaDogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLW1kOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7IC8vZGVmYXVsdFxuJGFuaW1hdGlvbi1sZzogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXhsOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teHhsOiBhbGwgMS4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblxuJGFuaW1hdGlvbi1kZWZhdWx0OiAkYW5pbWF0aW9uLW1kO1xuXG4kYW5pbWF0aW9uLWZhZGUtaW46IGZhZGUtaW4gMXMgYm90aDtcbiRhbmltYXRpb24tZmFkZS1vdXQ6IGZhZGUtb3V0IDFzIGVhc2Utb3V0IGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tdG9wOiBmYWRlLWluLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tOiBmYWRlLWluLWJvdHRvbSAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyOiBwdWZmLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjQ3MCwgMC4wMDAsIDAuNzQ1LCAwLjcxNSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyOiBwdWZmLW91dC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBib3RoO1xuJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsOiBzaGFrZS1ob3Jpem9udGFsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1KSBib3RoO1xuJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2s6IGZvY3VzLWluLWNvbnRyYWN0LWJjayAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7IC8vIGZvciB0ZXh0XG4kYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3A6IHNjYWxlLWluLXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4kYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wOiBzY2FsZS1vdXQtdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbiRhbmltYXRpb24tcHVsc2UtaW5maW5pdGU6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIGluZmluaXRlO1xuJGFuaW1hdGlvbi1wdWxzZS0zOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyAzO1xuJGFuaW1hdGlvbi1wdWxzZS0xOiBzaGFkb3ctcHVsc2UgMXMgMTtcblxuLy8gWW91IGNhbiB1c2UgYW55IG9mIHRoZXNlIG5hbWVzIHRvIGFuaW1hdGUgSFRNTCBlbGVtZW50cyBvbiBpbml0aWF0aW9uXG4kYW5pbWF0aW9uczogKFxuICBcImZhZGUtaW5cIjogJGFuaW1hdGlvbi1mYWRlLWluLFxuICBcImZhZGUtb3V0XCI6ICRhbmltYXRpb24tZmFkZS1vdXQsXG4gIFwiZmFkZS1pbi10b3BcIjogJGFuaW1hdGlvbi1mYWRlLWluLXRvcCxcbiAgXCJmYWRlLWluLWJvdHRvbVwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tLFxuICBcInB1ZmYtaW4tY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXIsXG4gIFwicHVmZi1vdXQtY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyLFxuICBcInNoYWtlLWhvcml6b250YWxcIjogJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsLFxuICBcImZvY3VzLWluLWNvbnRyYWN0LWJja1wiOiAkYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjayxcbiAgXCJzY2FsZS1pbi12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcCxcbiAgXCJzY2FsZS1vdXQtdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wLFxuICBcInB1bHNlLWluZmluaXRlXCI6ICRhbmltYXRpb24tcHVsc2UtaW5maW5pdGUsXG4gIFwicHVsc2UtM1wiOiAkYW5pbWF0aW9uLXB1bHNlLTMsXG4gIFwicHVsc2UtMVwiOiAkYW5pbWF0aW9uLXB1bHNlLTFcbik7XG5cbi8qIEJvcmRlcnMgKi9cbiRib3JkZXItc2l6ZS1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXNpemUtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXNpemUtbGc6IDAuNXJlbTtcbiRib3JkZXItc2l6ZS0xOiAxcHg7XG4kYm9yZGVyLXNpemUtMjogMnB4O1xuJGJvcmRlci1zaXplLTM6IDNweDtcbiRib3JkZXItc2l6ZS01OiA1cHg7XG4kYm9yZGVyLXNpemUtMTA6IDEwcHg7XG5cbiRib3JkZXItc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXNpemUtc20sXG4gIFwibWRcIjogJGJvcmRlci1zaXplLW1kLFxuICBcImxnXCI6ICRib3JkZXItc2l6ZS1sZyxcbiAgXCIxXCI6ICRib3JkZXItc2l6ZS0xLFxuICBcIjJcIjogJGJvcmRlci1zaXplLTIsXG4gIFwiM1wiOiAkYm9yZGVyLXNpemUtMyxcbiAgXCI1XCI6ICRib3JkZXItc2l6ZS01LFxuICBcIjEwXCI6ICRib3JkZXItc2l6ZS0xMFxuKTtcblxuLyogQ29ybmVycyAqL1xuJGJvcmRlci1yYWRpdXMtc206IDAuMTI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1sZzogMC41cmVtO1xuJGJvcmRlci1yYWRpdXMtMjogMnB4O1xuJGJvcmRlci1yYWRpdXMtNDogNHB4O1xuJGJvcmRlci1yYWRpdXMtNjogNnB4O1xuJGJvcmRlci1yYWRpdXMtMTA6IDEwcHg7XG4kYm9yZGVyLXJhZGl1cy0xNTogMTVweDtcbiRib3JkZXItcmFkaXVzLTIwOiAyMHB4O1xuJGJvcmRlci1yYWRpdXMtaGFsZjogNTAlO1xuJGJvcmRlci1yYWRpdXMtZnVsbDogMTAwJTtcblxuJGJvcmRlci1yYWRpdXMtc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXJhZGl1cy1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXJhZGl1cy1tZCwgLy9kZWZhdWx0XG4gIFwibGdcIjogJGJvcmRlci1yYWRpdXMtbGcsXG4gIFwiMlwiOiAkYm9yZGVyLXJhZGl1cy0yLFxuICBcIjRcIjogJGJvcmRlci1yYWRpdXMtNCxcbiAgXCI2XCI6ICRib3JkZXItcmFkaXVzLTYsXG4gIFwiMTBcIjogJGJvcmRlci1yYWRpdXMtMTAsXG4gIFwiMTVcIjogJGJvcmRlci1yYWRpdXMtMTUsXG4gIFwiMjBcIjogJGJvcmRlci1yYWRpdXMtMjAsXG4gIFwiaGFsZlwiOiAkYm9yZGVyLXJhZGl1cy1oYWxmLFxuICBcImZ1bGxcIjogJGJvcmRlci1yYWRpdXMtZnVsbCxcbik7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbjpob3N0IC9kZWVwLyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgIC5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDg0cmVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE1OTlweCkge1xyXG4gICAgICAucGFnZS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjJyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5hZHZlcnRpc2VtZW50LXdyYXAtY29udGFpbmVyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8kcGFkZGluZ1JvdzogMjBweDtcclxuICAgICRwYWRkaW5nUm93OiAwO1xyXG5cclxuICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgIC50b29sYmFyLWNvbnRhaW5lciB7IC8vIG5hdmlnYXRlIG1lbnVcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5oZXJvLWNvbnRhaW5lciB7IC8vIGltYWdlIGNvbnRhaW5lciBhbmQgbWFpbiBkZXNjcmlwdGlvblxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy1tZCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIFxyXG4gICAgICAgIC5oZXJvLWJnIHsgLy8gaW1hZ2UgY29udGFpbmVyXHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gIFxyXG4gICAgICAgICAgLmhlcm8tYmctaW1nIHsgLy8gaW1hZ2VcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGluaXRpYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5oZXJvLWNvbnRlbnQtY29udGFpbmVyIHsgLy8gbG90dGVyeSBkZXNjcmlwdGlvbiBjb250YWluZXJcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgd2lkdGg6IDcwJTtcclxuICBcclxuICAgICAgICAgIC5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgJHNwYWNpbmcteHM7XHJcbiAgXHJcbiAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMGYwZjExICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGYwZjExO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGh0bWwtZm9udC1zaXplLXNtO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLmNvbC1tZC04IHsgLy8gZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLmNvbC1tZC00LnRleHQtcmlnaHQgeyAvLyBoaWRlIGJ1dHRvbiBzaG93IGltYWdlXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuYWR2ZXJ0aXNlbWVudC13cmFwLWNvbnRhaW5lciA+IC5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgI2RldGFpbHMge1xyXG4gICAgICAgIC5jb2wtbWQtNCB7IC8vIEFtZW5pdGllcyogYm94XHJcbiAgICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICBcclxuICAgICAgICAgIC50ZXh0LWNlbnRlciB7IC8vIGl0ZW0gdGl0bGVcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJzonO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLmxpc3QtZ3JvdXAgeyAvLyBpdGVtIHdyYXBwZXJcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogaW5pdGlhbDtcclxuICBcclxuICAgICAgICAgICAgLmxpc3QtaXRlbSB7IC8vIGxpc3QgaXRlbVxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwICRzcGFjaW5nLXhzIDAgMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBcclxuICAgICAgICAgICAgICAubGlzdC1pdGVtLWxhYmVsIHsgLy9pdGVtIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICRzcGFjaW5nLXhzO1xyXG4gICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAubGlzdC1pdGVtLWljb24ge1xyXG4gICAgICAgICAgICAgICAgLmJ0biB7IC8vIGljb24gd3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRzcGFjaW5nLW1kO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJHNwYWNpbmctbWQ7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkc3BhY2luZy1tZDtcclxuICBcclxuICAgICAgICAgICAgICAgICAgaSB7IC8vIGljb24gYXJyb3dcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5kZXRhaWxzLXN1YmluZm8ge1xyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJGdyZXktMjAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuY29sLW1kLTggeyAvLyBibGFuayBhcHBseSBidXR0b25cclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICN1bml0cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0OyAvLyBhcyBkeW5hbWljIGltYWdlIG5vdCBsb2FkZWQgc2V0IGRlZmF1bHQgY29sb3JcclxuICAgICAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7IC8vIGJyZWFrIGNvbnRlbnQgdG8gbmV4dCBsaW5lXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gICAgICAgIC5wYWdlLWNvbnRhaW5lci1wcmludC1yb3cge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgY29sb3I6ICRibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAjZmFxLFxyXG4gICAgICAjYXZhaWxhYmxlLXVuaXRzLXNlY3Rpb24tYmcsXHJcbiAgICAgICNvdGhlckxvdHRlcmllcyB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kOiAjMTk1Njk5OyAvLyBhcyBkeW5hbWljIGltYWdlIG5vdCBsb2FkZWQgc2V0IGRlZmF1bHQgY29sb3JcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICNtYXAge1xyXG4gICAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5czsgLy8gYnJlYWsgY29udGVudCB0byBuZXh0IGxpbmVcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAjaG93dG9hcHBseSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucGhvdG8td3JhcCB7XHJcbiAgICAgICAgZmxleDogMCAwIDI1JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgL2RlZXAvIHsgLy8gbmVlZCBmb3IgYWRkIHN0eWxlIHRvIGV4dGVuZGVkIGNvbXBvbmVudHNcclxuICAgICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgICAjdW5pdHMge1xyXG4gICAgICAgICAgLm1hdC10YWItbGFiZWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0ICFpbXBvcnRhbnQ7IC8vIGNoYW5nZSBkZWZhdWx0IGNvbG9yIGZvciB0YWJsZSBoZWFkZXJcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAudGFibGUuZ2xhc3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMWVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRpc2NhcmQtd3JhcHBlci10cmFuc2Zvcm0ge1xyXG4gICAgICAvLyBuZWVkIG9yIHN0aWNreSB0b29sYmFyXHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xyXG4gICAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAub3BhY2l0eS0wIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/modules/details/details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/details/details.component.ts ***!
  \******************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/api/lottery-api.service */ "./src/app/shared/services/api/lottery-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_enums_taskInventories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/enums/taskInventories */ "./src/app/shared/enums/taskInventories.ts");
/* harmony import */ var _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/photos/photos.component */ "./src/app/modules/details/components/photos/photos.component.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-oauth2-oidc */ "../lib/src/public_api.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(router, activatedRoute, lotteryService, datePipe, cdRef, oauthService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.lotteryService = lotteryService;
        this.datePipe = datePipe;
        this.cdRef = cdRef;
        this.oauthService = oauthService;
        this.printHidden = false;
        this.galleryImages = [];
        this.isLoaded = false;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //needed to populate print version tables data
        setTimeout(function () {
            _this.printHidden = true;
            _this.cdRef.markForCheck();
        }, 1);
        console.log(this.activatedRoute);
        this.lotteryId = this.activatedRoute.snapshot.params['id'];
        console.log(this.lotteryId);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
            this.getAdvertisement(),
            this.userApplyEnable()
        ]).subscribe(function (results) {
            _this.isLoaded = true;
            console.log('FINISHED', results);
        });
    };
    DetailsComponent.prototype.getAdvertisement = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"](function (o) {
            _this.lotteryService.getLotteryAdvertisement(_this.lotteryId).subscribe(function (response) {
                console.log(response);
                _this.lottery = response;
                _this.loadTasks();
                _this.lotteryDetails = response;
                _this.lotteryName = response.lotteryName;
                _this.lotteryBuildings = response.lotteryBuildings;
                _this.propertyTypeId = response.development.propertyTypeId;
                _this.ownerTypeId = response.development.ownerTypeId;
                _this.amenities = response.amenities;
                _this.units = response.units;
                _this.lotterySetAsidePreferences = response.lotterySetAsidePreferences;
                _this.endDate = _this.datePipe.transform(new Date(response.endDate));
                var timeDif = ((new Date(response.endDate)).getTime() - (new Date().getTime()));
                _this.daysLeft = Math.ceil(timeDif / (3600 * 24 * 1000)).toString();
                _this.photos = response.photos;
                _this.defaultImage = (_this.photos.length) ? _this.photos[0] : "./assets/images/details-cover.png";
                if (_this.photos) {
                    _this.createImageGallery();
                }
                _this.cdRef.markForCheck();
                o.next(response);
                o.complete();
            });
        });
    };
    DetailsComponent.prototype.userApplyEnable = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"].create(function (o) {
            if (_this.isUserLoggedIn()) {
                console.log('USER LOGGED IN');
                _this.lotteryService.CanIApply(_this.lotteryId).subscribe(function (response) {
                    //this.isApplyBtnVisible = response;
                    //this.applynowtext = 'Already applied!';
                    console.log('CAN APPLY: ', response);
                    _this.canApply = response;
                    o.next(_this.canApply);
                    o.complete();
                });
            }
            else {
                //this.applynowtext = 'Apply Now!';
                console.log('USER NOT LOGGED IN');
                _this.canApply = true;
                o.next(_this.canApply);
                o.complete();
            }
        });
    };
    DetailsComponent.prototype.isUserLoggedIn = function () {
        return ((this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken()));
    };
    DetailsComponent.prototype.loadTasks = function () {
        var _this = this;
        this.lottery.lotteryTasks.forEach(function (task) {
            if (task.isActive) {
                if (task.taskInventoryId == _shared_enums_taskInventories__WEBPACK_IMPORTED_MODULE_5__["TaskInventoryEnum"].RentalAdvertisementContent || task.taskInventoryId == _shared_enums_taskInventories__WEBPACK_IMPORTED_MODULE_5__["TaskInventoryEnum"].SalesAdvertisementContent) {
                    if (task.advertisementContent && task.advertisementContent.isActive) {
                        _this.lottery.advertisementContent = task.advertisementContent;
                    }
                }
                else if (task.taskInventoryId == _shared_enums_taskInventories__WEBPACK_IMPORTED_MODULE_5__["TaskInventoryEnum"].PaperApplications) {
                    if (task.paperApplicationDelivery) {
                        _this.lottery.paperApplicationDelivery = task.paperApplicationDelivery.filter(function (p) { return p.isActive == true; });
                    }
                }
            }
        });
        this.advertisementContent = this.lottery.advertisementContent;
    };
    DetailsComponent.prototype.createImageGallery = function () {
        this.galleryOptions = [
            {
                image: false,
                thumbnailsRemainingCount: true,
                height: "500px",
                width: "100%",
                thumbnailsColumns: 3,
                thumbnailsRows: 2,
                previewCloseOnEsc: true,
                imageDescription: true
            },
            {
                breakpoint: 500,
                width: "100%",
                thumbnailsColumns: 1
            },
        ];
        this.setPhotos();
    };
    DetailsComponent.prototype.setPhotos = function () {
        for (var i = 0; i < this.photos.length; i++) {
            var photo = {
                small: this.photos[i],
                medium: this.photos[i],
                big: this.photos[i],
                description: "Description of Image - " + ((i % 7) + 1)
            };
            // this.photos.push(photo);
            this.galleryImages.push(photo);
        }
        if (!this.cdRef['destroyed'])
            this.cdRef.detectChanges();
    };
    DetailsComponent.prototype.openGallery = function (i) {
        var index = i ? i : 0;
        this.testGallery.openGallery(index);
    };
    DetailsComponent.prototype.getEligibilitySummary = function () {
        var allUnitIncomeRequirements = lodash__WEBPACK_IMPORTED_MODULE_4__["flatten"](lodash__WEBPACK_IMPORTED_MODULE_4__["map"](this.units, function (item) { return item.unitIncome; }));
        this.minHouseholdSize = lodash__WEBPACK_IMPORTED_MODULE_4__["get"](lodash__WEBPACK_IMPORTED_MODULE_4__["minBy"](allUnitIncomeRequirements, 'houseHoldSize'), 'houseHoldSize');
        this.maxHouseholdSize = lodash__WEBPACK_IMPORTED_MODULE_4__["get"](lodash__WEBPACK_IMPORTED_MODULE_4__["maxBy"](allUnitIncomeRequirements, 'houseHoldSize'), 'houseHoldSize');
        this.minIncome = lodash__WEBPACK_IMPORTED_MODULE_4__["get"](lodash__WEBPACK_IMPORTED_MODULE_4__["minBy"](allUnitIncomeRequirements, 'minimumIncome'), 'minimumIncome');
        this.maxIncome = lodash__WEBPACK_IMPORTED_MODULE_4__["get"](lodash__WEBPACK_IMPORTED_MODULE_4__["maxBy"](allUnitIncomeRequirements, 'maximumIncome'), 'maximumIncome');
    };
    DetailsComponent.prototype.loadData = function () {
        /*if (this.lottery.units) {
          if (this.lottery.development.propertyType.name === 'Rental') {
      
            this.lottery.units.forEach(unit => {
              let incomeAMI = unit.unitRegulatoryMechanism && unit.unitRegulatoryMechanism.length > 0 && unit.unitRegulatoryMechanism[0].hasOwnProperty("amipercentage") ? unit.unitRegulatoryMechanism[0].amipercentage : 0;
              incomeAMI = _.padStart(incomeAMI, 3, '0');
              let layoutType = unit.unitLayoutType.name;
              let monthlyRent = unit.baseRent;
              monthlyRent = _.padStart(monthlyRent, 5, '0');
              let isPlusOneRule = unit.hasPlusOneRule;
              let utilityType = unit.utilityType.utilityTypeId;
              utilityType = _.padStart(utilityType, 2, '0');
      
              unit.groupLabel = `${incomeAMI}-${layoutType}-${monthlyRent}-${isPlusOneRule}-${utilityType}`;
            });
      
            //Group by Income AMI - Layout Type - Monthly Rent - Is Plus One Rule - Utility Type
            let groupedUnitReq = _.groupBy(this.lottery.units, unit => unit.groupLabel);
      
            let keys = Object.keys(groupedUnitReq);
      
            for (var prop of keys) {
              var unitGroup = new UnitLayoutByType();
              unitGroup.units = groupedUnitReq[prop];
              unitGroup.name = prop;
              //unitGroup.units = groupedUnitReq[prop];
              unitGroup.typeId = unitGroup.units[0].unitLayoutTypeId;
      
              this.groupedUnits.push(unitGroup);
            }
      
            this.groupedUnits.sort((x, y) => {
              return x.name - y.name;
            }); //sort it by asc order by name
      
            // sort unit income requirements by householdsize
            this.groupedUnits.forEach(group => {
              group.units.forEach(unit => {
                unit.unitIncome.sort((x, y) => {
                  return x.houseHoldSize - y.houseHoldSize;
                });
              });
            });
      
            //console.log('advertisement component - Grouped Unit Requirements (sorted): ', this.groupedUnits);
          }
          else if (this.lottery.development.propertyType.name === 'Owner') {
            if (this.lottery.development.ownerType.name === 'Condo/Coop') {
              this.lottery.units.forEach(unit => {
                let incomeAMI = unit.unitRegulatoryMechanism && unit.unitRegulatoryMechanism.length > 0 && unit.unitRegulatoryMechanism[0].hasOwnProperty("amipercentage") ? unit.unitRegulatoryMechanism[0].amipercentage : 0;
                incomeAMI = _.padStart(incomeAMI, 3, '0');
                let layoutType = unit.unitLayoutType.name;
                let estimatedSalePrice = unit.estimatedSalePrice;
                estimatedSalePrice = _.padStart(estimatedSalePrice, 7, '0');
                let isPlusOneRule = unit.hasPlusOneRule;
                let maxAssetCap = unit.maximumAssetCap;
                let carryingCost = unit.carryingCost;
                let totalMinimumHhIncome = unit.unitIncome.reduce((sum, a) => sum + parseInt(a.minimumIncome), 0);
      
                unit.groupLabel = `${incomeAMI}-${layoutType}-${estimatedSalePrice}-${isPlusOneRule}-${maxAssetCap}-${carryingCost}-${totalMinimumHhIncome}`;
              });
      
              //Group by Income AMI - Layout Type - Estimated Sale Price - Is Plus One Rule - Max Assest Cap - Carrying Cost - Total Minimum Household Income
              let groupedUnitReq = _.groupBy(this.lottery.units, unit => unit.groupLabel);
              //console.log("Grouped Unit Req", groupedUnitReq);
      
              let keys = Object.keys(groupedUnitReq);
      
              for (var prop of keys) {
                var unitGroup = new UnitLayoutByType();
                unitGroup.units = groupedUnitReq[prop];
                unitGroup.name = prop;
                //unitGroup.units = groupedUnitReq[prop];
                unitGroup.typeId = unitGroup.units[0].unitLayoutTypeId;
      
                this.groupedUnits.push(unitGroup);
              }
      
              this.groupedUnits.sort((x, y) => {
                return x.name - y.name;
              }); //sort it by asc order by name
      
              // sort unit income requirements by householdsize
              this.groupedUnits.forEach(group => {
                group.units.forEach(unit => {
                  unit.unitIncome.sort((x, y) => {
                    return x.houseHoldSize - y.houseHoldSize;
                  });
                });
              });
      
              //console.log('advertisement component - Grouped Unit Requirements (sorted): ', this.groupedUnits);
      
            }
            else if (this.lottery.development.ownerType.name === 'Small Home') {
              this.lottery.units.forEach(unit => {
                let incomeAMI = unit.unitRegulatoryMechanism && unit.unitRegulatoryMechanism.length > 0 && unit.unitRegulatoryMechanism[0].hasOwnProperty("amipercentage") ? unit.unitRegulatoryMechanism[0].amipercentage : 0;
                incomeAMI = _.padStart(incomeAMI, 3, '0');
                let layoutType = unit.unitLayoutType.name;
                let numUnitsInSmallHome = unit.numberOfSmallHomeUnits;
                let minMaxHouseholdSize = `${unit.minimumHouseholdSize}-${unit.maximumHouseholdSize}`;
                unit.minimumIncome = Math.min.apply(null, unit.unitIncome.map(i => i.minimumIncome));
                unit.maximumIncome = Math.max.apply(null, unit.unitIncome.map(i => i.maximumIncome));
                let minMaxHouseholdIncome = `${unit.minimumIncome}-${unit.maximumIncome}`;
                let isPlusOneRule = unit.hasPlusOneRule;
                let maxAssetCap = unit.maximumAssetCap;
                let estimatedSalePrice = unit.estimatedSalePrice;
                estimatedSalePrice = _.padStart(estimatedSalePrice, 7, '0');
      
                unit.groupLabel = `${incomeAMI}-${layoutType}-${numUnitsInSmallHome}-${minMaxHouseholdSize}-${minMaxHouseholdIncome}-${isPlusOneRule}-${maxAssetCap}-${estimatedSalePrice}`;
              });
      
              //Group by Income AMI - Layout Type - Estimated Sale Price - Is Plus One Rule - Max Assest Cap - Carrying Cost - Total Minimum Household Income
              let groupedUnitReq = _.groupBy(this.lottery.units, unit => unit.groupLabel);
              //console.log("Grouped Unit Req", groupedUnitReq);
      
              let keys = Object.keys(groupedUnitReq);
      
              for (var prop of keys) {
                var unitGroup = new UnitLayoutByType();
                unitGroup.units = groupedUnitReq[prop];
                unitGroup.name = prop;
                //unitGroup.units = groupedUnitReq[prop];
                unitGroup.typeId = unitGroup.units[0].unitLayoutTypeId;
      
                this.groupedUnits.push(unitGroup);
              }
      
              this.groupedUnits.sort((x, y) => {
                return x.name - y.name;
              });
            }
          }
      
          this.getEligibilitySummary();
        }
      
        if (this.lottery.lotteryBuildings) {
          this.lottery.lotteryBuildings.forEach((b, i) => {
            let m = new MarkerModel();
            m.id = b.building.buildingId;
            m.index = i + 1;
            m.lat = b.building.latitude;
            m.lng = b.building.longitude;
            m.label = b.building.address;
            m.address = b.building.address;
            m.city = b.building.city;
            m.state = b.building.state;
            m.zip = b.building.zip;
            m.type = 'building';
      
            this.buildingLocations.push(m);
      
            if (b.building.nearbyPlaces) {
              b.building.nearbyPlaces.forEach((p, j) => {
                let n = new MarkerModel();
                n.id = p.nearbyPlaceId;
                n.lat = p.latitude;
                n.lng = p.longitude;
                n.label = p.nearbyPlaceName;
                n.type = p.placeType;
                n.trainName = p.trainName;
      
                this.nearbyLocations.push(n);
              });
            }
      
          });
      
          this.nearbyLocations = _.uniq(this.nearbyLocations);
      
          //console.log('advertisement component - building locations: ', this.bminHouseholdSizeuildingLocations);
          //console.log('advertisement component - nearby locations: ', this.nearbyLocations);
      
        }*/
        if (!this.cdRef['destroyed'])
            this.cdRef.detectChanges();
    };
    DetailsComponent.prototype.hidePrint = function () {
        return this.printHidden;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_photos_photos_component__WEBPACK_IMPORTED_MODULE_6__["DetailsPhotosComponent"]),
        __metadata("design:type", _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_6__["DetailsPhotosComponent"])
    ], DetailsComponent.prototype, "testGallery", void 0);
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lottery-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/modules/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/modules/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_2__["LotteryApiService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["OAuthService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/details.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/details/details.module.ts ***!
  \***************************************************/
/*! exports provided: DetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/modules/details/details-routing.module.ts");
/* harmony import */ var _details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details.component */ "./src/app/modules/details/details.component.ts");
/* harmony import */ var _components_details_greeter_details_greeter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/details-greeter/details-greeter.component */ "./src/app/modules/details/components/details-greeter/details-greeter.component.ts");
/* harmony import */ var _components_details_nav_bar_details_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/details-nav-bar/details-nav-bar.component */ "./src/app/modules/details/components/details-nav-bar/details-nav-bar.component.ts");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/overview/overview.component */ "./src/app/modules/details/components/overview/overview.component.ts");
/* harmony import */ var _components_units_units_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/units/units.component */ "./src/app/modules/details/components/units/units.component.ts");
/* harmony import */ var _components_details_map_details_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/details-map/details-map.component */ "./src/app/modules/details/components/details-map/details-map.component.ts");
/* harmony import */ var _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/photos/photos.component */ "./src/app/modules/details/components/photos/photos.component.ts");
/* harmony import */ var _components_who_should_apply_who_should_apply_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/who-should-apply/who-should-apply.component */ "./src/app/modules/details/components/who-should-apply/who-should-apply.component.ts");
/* harmony import */ var _components_how_to_apply_how_to_apply_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/how-to-apply/how-to-apply.component */ "./src/app/modules/details/components/how-to-apply/how-to-apply.component.ts");
/* harmony import */ var _components_details_print_details_print_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/details-print/details-print.component */ "./src/app/modules/details/components/details-print/details-print.component.ts");
/* harmony import */ var _pages_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/confirmation/confirmation.component */ "./src/app/modules/details/pages/confirmation/confirmation.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/components/loader/loader.module */ "./src/app/shared/components/loader/loader.module.ts");
/* harmony import */ var _pages_lottery_apply_lottery_apply_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/lottery-apply/lottery-apply.component */ "./src/app/modules/details/pages/lottery-apply/lottery-apply.component.ts");
/* harmony import */ var _pipes_can_apply_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/can-apply.pipe */ "./src/app/modules/details/pipes/can-apply.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="pages/confirmation/confirmation.component.ts" />




















var MatModules = [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]];
var DetailsModule = /** @class */ (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _details_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetailsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ].concat(MatModules, [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_17__["LoaderModule"],
            ]),
            declarations: [
                _pipes_can_apply_pipe__WEBPACK_IMPORTED_MODULE_19__["CanApplyPipe"],
                _details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
                _components_details_greeter_details_greeter_component__WEBPACK_IMPORTED_MODULE_6__["DetailsGreeterComponent"],
                _components_details_nav_bar_details_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["DetailsNavBarComponent"],
                _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_8__["DetailsOverviewComponent"],
                _components_units_units_component__WEBPACK_IMPORTED_MODULE_9__["DetailsUnitsComponent"],
                _components_details_map_details_map_component__WEBPACK_IMPORTED_MODULE_10__["DetailsMapComponent"],
                _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_11__["DetailsPhotosComponent"],
                _components_who_should_apply_who_should_apply_component__WEBPACK_IMPORTED_MODULE_12__["DetailsWhoShouldApplyComponent"],
                _components_how_to_apply_how_to_apply_component__WEBPACK_IMPORTED_MODULE_13__["DetailsHowToApplyComponent"],
                _components_details_print_details_print_component__WEBPACK_IMPORTED_MODULE_14__["DetailsPrintComponent"],
                _pages_lottery_apply_lottery_apply_component__WEBPACK_IMPORTED_MODULE_18__["LotteryApplyComponent"],
                _pages_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_15__["ApplicationConfirmationComponent"]
            ],
            exports: [],
            entryComponents: [],
        })
    ], DetailsModule);
    return DetailsModule;
}());



/***/ }),

/***/ "./src/app/modules/details/pages/confirmation/confirmation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/details/pages/confirmation/confirmation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container account-settings-container\">\n    <div class=\"row\">\n      <div class=\"col-10 offset-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h1>Confirmation of your lottery application is emailed to you.</h1>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">          \r\n          <div class=\"col-12\">            \r\n            <application-details [lotteryApplicationId]=\"lotteryApplicationId\"></application-details>\r\n          </div>\r\n        </div>\r\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/modules/details/pages/confirmation/confirmation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/details/pages/confirmation/confirmation.component.ts ***!
  \******************************************************************************/
/*! exports provided: ApplicationConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationConfirmationComponent", function() { return ApplicationConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/api/lottery-api.service */ "./src/app/shared/services/api/lottery-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplicationConfirmationComponent = /** @class */ (function () {
    function ApplicationConfirmationComponent(lotteryService, activatedRoute) {
        this.lotteryService = lotteryService;
        this.activatedRoute = activatedRoute;
    }
    ApplicationConfirmationComponent.prototype.ngOnInit = function () {
        this.lotteryApplicationId = this.activatedRoute.snapshot.params['id'];
    };
    ApplicationConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-confirmation',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/modules/details/pages/confirmation/confirmation.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_1__["LotteryApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ApplicationConfirmationComponent);
    return ApplicationConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/pages/lottery-apply/lottery-apply.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/details/pages/lottery-apply/lottery-apply.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row pt-5 pb-5\">\r\n    <div class=\"household-info-row col-12\">\r\n      <div class=\"household-info-container col-11\">\r\n        <div class=\"household-info-element\">\r\n          <div><mat-icon>people</mat-icon></div>\r\n          <div>\r\n            <div><b>Household Members</b></div>\r\n            <div>{{applicationSummary[\"Household Members\"]}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"household-info-element\">\r\n          <div><mat-icon>attach_money</mat-icon></div>\r\n          <div>\r\n            <div><b>Household Income</b></div>\r\n            <div>{{applicationSummary[\"Household Income\"] | currency:'USD':'symbol':'1.0-2'}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"household-info-element\">\r\n          <div><mat-icon>account_balance</mat-icon></div>\r\n          <div>\r\n            <div><b>Household Assets</b></div>\r\n            <div>{{applicationSummary[\"Household Assets\"] | currency:'USD':'symbol':'1.0-2'}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"application-card\">\r\n    <div class=\"col-4\" *ngIf=\"lottery\">\r\n      <app-lottery-grid-card [lottery]=\"lottery\" [enteredLotteryId]=\"lotteryId\" [viewMode]=\"cardViewType\">\r\n      </app-lottery-grid-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-5 pt-4 mb-4\">\r\n      <mat-checkbox [formControl]=\"isAgreeWithTermsOfUse\">\r\n        I acknowledge that I have read and agree to <a href=\"www.google.com\" target=\"_blank\">Terms & Conditions</a>\r\n      </mat-checkbox>\r\n    </div>\r\n    <div class=\"col-md-6 pt-4 mb-4 text-right\">\r\n      <button class=\"btn btn-primary\" [disabled]='!isAgreeWithTermsOfUse.valid' (click)=\"submit()\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/details/pages/lottery-apply/lottery-apply.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/details/pages/lottery-apply/lottery-apply.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**********************************************************************/\n/**************************** IMPORTANT *******************************/\n/* Please consult with Yury before adding some new CSS variables.     */\n/**********************************************************************/\n/* Table of Contents:                                                 */\n/*    - Typography                                                    */\n/*    - Theme Colors                                                  */\n/*    - Responsive Breakpoints                                        */\n/*    - Shadows                                                       */\n/*    - Spacing Guidelines                                            */\n/*    - Animations                                                    */\n/*    - Corners                                                       */\n/**********************************************************************/\n/* Responsive Breakpoints */\n/* Shadows */\n/* Spacing Guidelines */\n/* Animations */\n/* Borders */\n/* Corners */\n:host /deep/ m-portlet {\n  display: block; }\n:host /deep/ m-portlet .m-portlet__head-caption {\n    width: 100%; }\n:host /deep/ m-portlet .m-portlet__head {\n    height: 3.1rem; }\n:host /deep/ m-portlet .m-portlet__head,\n  :host /deep/ m-portlet .m-portlet__body,\n  :host /deep/ m-portlet .m-portlet__foot {\n    padding: 0 1rem; }\n:host .details-column-cell {\n  flex: auto;\n  margin: 0 0 0 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n:host .application-card {\n  display: flex;\n  justify-content: center; }\n:host .portler-title-btn {\n  margin-left: auto;\n  padding-right: 0; }\n:host .m-portlet__head-title {\n  width: 100%; }\n:host .my-document-list {\n  padding: 1rem 0; }\n:host .my-document-list .my-document-list-status-icon {\n    align-self: center;\n    margin-right: 1rem;\n    font-size: 1.5rem !important; }\n:host .my-document-list .my-document-list-body {\n    margin-right: auto; }\n:host .my-document-list .my-document-list-readmore {\n    display: flex;\n    align-items: center;\n    cursor: pointer; }\n:host .my-document-list .my-document-list-readmore mat-icon {\n      font-size: 2.125rem !important;\n      height: auto;\n      width: auto; }\n:host .household-info-container {\n  display: flex;\n  justify-content: space-between; }\n:host .household-info-row {\n  display: flex;\n  justify-content: space-between;\n  margin-top: .5em; }\n:host .household-info-element {\n  display: flex; }\n:host .household-info-element mat-icon {\n    height: auto;\n    width: auto;\n    font-size: 42px !important;\n    margin: .15em .25em; }\n:host .lottery-list-item {\n  padding: 1rem 0;\n  display: flex;\n  justify-content: space-between; }\n:host .lottery-list-item .lottery-list-item-desc {\n    display: flex; }\n:host .lottery-list-item .lottery-list-item-desc img {\n      width: 3.5rem;\n      height: 3.5rem; }\n:host .lottery-list-item .lottery-list-item-data {\n    text-align: right;\n    margin: 0 3.125rem 0 auto; }\n:host .lottery-list-item .lottery-list-item-favorite-status {\n    display: flex;\n    align-items: center;\n    cursor: pointer; }\n:host .lottery-list-item .lottery-list-item-favorite-status mat-icon {\n      height: auto;\n      width: auto;\n      font-size: 38px !important; }\n:host app-exams-card {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9wYWdlcy9sb3R0ZXJ5LWFwcGx5L0M6XFxURlNcXERDQVxcUHVibGljXFxQdWJsaWNXZWIvcHJvamVjdHNcXHdlYlxcc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9kZXRhaWxzL3BhZ2VzL2xvdHRlcnktYXBwbHkvQzpcXFRGU1xcRENBXFxQdWJsaWNcXFB1YmxpY1dlYi9wcm9qZWN0c1xcd2ViXFxzcmNcXGFwcFxcbW9kdWxlc1xcZGV0YWlsc1xccGFnZXNcXGxvdHRlcnktYXBwbHlcXGxvdHRlcnktYXBwbHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUErRkEsMkJBQUE7QUFhQSxZQUFBO0FBTUEsdUJBQUE7QUE2QkEsZUFBQTtBQXlDQSxZQUFBO0FBcUJBLFlBQUE7QUN0TkE7RUFNTSxjQUFjLEVBQUE7QUFOcEI7SUFTUSxXQUFXLEVBQUE7QUFUbkI7SUFhUSxjQUFjLEVBQUE7QUFidEI7OztJQW1CUSxlQUFlLEVBQUE7QUFuQnZCO0VBMEJJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTtBQTlCM0I7RUFrQ0ksYUFBYTtFQUNiLHVCQUF1QixFQUFBO0FBbkMzQjtFQXdDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7QUF6Q3BCO0VBNkNJLFdBQVcsRUFBQTtBQTdDZjtFQWtESSxlQUFlLEVBQUE7QUFsRG5CO0lBc0RNLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsNEJBQTRCLEVBQUE7QUF4RGxDO0lBNERNLGtCQUFrQixFQUFBO0FBNUR4QjtJQWdFTSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtBQWxFckI7TUFxRVEsOEJBQThCO01BQzlCLFlBQVk7TUFDWixXQUFXLEVBQUE7QUF2RW5CO0VBNkVJLGFBQWE7RUFDYiw4QkFDRixFQUFBO0FBL0VGO0VBa0ZJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCLEVBQUE7QUFwRnBCO0VBd0ZJLGFBQWEsRUFBQTtBQXhGakI7SUEyRk0sWUFBWTtJQUNaLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsbUJBQW1CLEVBQUE7QUE5RnpCO0VBbUdJLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCLEVBQUE7QUFyR2xDO0lBd0dNLGFBQWEsRUFBQTtBQXhHbkI7TUEyR1EsYUFBYTtNQUNiLGNBQWMsRUFBQTtBQTVHdEI7SUFpSE0saUJBQWlCO0lBQ2pCLHlCQUF5QixFQUFBO0FBbEgvQjtJQXNITSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtBQXhIckI7TUEySFEsWUFBWTtNQUNaLFdBQVc7TUFDWCwwQkFBMEIsRUFBQTtBQTdIbEM7RUFtSUksZUFBZSxFQUFBIiwiZmlsZSI6InByb2plY3RzL3dlYi9zcmMvYXBwL21vZHVsZXMvZGV0YWlscy9wYWdlcy9sb3R0ZXJ5LWFwcGx5L2xvdHRlcnktYXBwbHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIElNUE9SVEFOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUGxlYXNlIGNvbnN1bHQgd2l0aCBZdXJ5IGJlZm9yZSBhZGRpbmcgc29tZSBuZXcgQ1NTIHZhcmlhYmxlcy4gICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFRhYmxlIG9mIENvbnRlbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBUeXBvZ3JhcGh5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFRoZW1lIENvbG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBTaGFkb3dzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAgICAtIFNwYWNpbmcgR3VpZGVsaW5lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qICAgIC0gQW5pbWF0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgLSBDb3JuZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9UeXBvZ3JhcGh5XG4kZm9udC1tYWluOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuJGZvbnQtaGVhZGluZzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiRmb250LWxpbmVhd2Vzb21lOiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNnB4LzEgXCJMaW5lQXdlc29tZVwiO1xuJGZvbnQtZm9udGF3ZXNvbWU6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuJGh0bWwtZm9udC1zaXplLWxnOiAxNnB4O1xuJGh0bWwtZm9udC1zaXplLW1kOiAxNXB4O1xuJGh0bWwtZm9udC1zaXplLXNtOiAxNHB4O1xuJGh0bWwtZm9udC1zaXplLXhzOiAxM3B4O1xuXG4kaHRtbC1mb250LXdlaWdodDogNDAwO1xuXG4vLyBUaGVtZSBDb2xvcnNcbiRjb2xvci1vZmZzZXQ6IDYlOyAvLyB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgbGlnaHRlciBhbmQgZGFya2VyIHZhcmllbnRzIG9mIGEgc3BlY2lmaWMgY29sb3JcblxuJGJhc2U6ICNmYWZhZmE7IC8vdXNlZCBwcmltYXJpbHkgYXMgb2ZmLXdoaXRlIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuXG4kcHJpbWFyeTogIzAyMDA2MztcbiRzZWNvbmRhcnk6ICNmYWZhZmE7XG4kc2Vjb25kYXJ5LWJsdWU6IHJnYigxMDksIDE3OCwgMjU1KTsgLy8gd2Ugc2hvdWxkIHJlcGxhY2UgdGhpc1xuJGFjY2VudDogI2ZjYjMyMzsgLy8jMDBjNWRjO1xuJGZvY3VzOiAjOTgxNmY0O1xuXG4kc3VjY2VzczogIzAwZTZhYjtcbiR3YXJuaW5nOiAjZmZiODIyO1xuJGRhbmdlcjogI2ZmMmIyYjsgLy8jZjQ1MTZjO1xuJGluZm86ICM1NTc4ZWI7IC8vIzM2YTNmNztcblxuJG1ldGFsOiAjYzRjNWQ2O1xuJG1ldGFsLWxpZ2h0OiBsaWdodGVuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG4kbWV0YWwtZGFyazogZGFya2VuKCRtZXRhbCwgJGNvbG9yLW9mZnNldCk7XG5cbi8vIGdyZXlzXG4kbGlnaHQ6ICNmZmY7XG4kZGFyazogIzJjMmUzZTtcbiRncmV5LTIwOiAjMzMzMzMzO1xuJGdyZXktMzA6ICM0ZDRkNGQ7XG4kZ3JleS01MDogIzgwODA4MDtcbiRncmV5LTcwOiAjYjNiM2IzO1xuJGdyZXktOTA6ICNlNmU2ZTY7XG4kZ3JleS05NTogI2YyZjJmMjtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZjtcblxuLy8gRXh0ZW5kZWQgQ29sb3IgUGFsZXR0ZVxuLy8gVE9ETzogUmV2aWV3IHRoZXNlIGNvbG9yc1xuJGRhcmstYmx1ZTogIzAyMzk3MDtcbiRibHVlOiAjMDE3YWNlO1xuJGNlcnVsZWFuOiAjMDE3YWNlO1xuJGxpZ2h0LWJsdWU6ICNjY2VhZmY7XG4kcGFsZS1ibHVlOiAjZjFmOWZmO1xuJGRhcmstdGVhbDogIzAwNjQ2ZTtcbiR0ZWFsOiAjMDBjMWQ0O1xuJGxpZ2h0LXRlYWw6ICNjY2ZhZmY7XG4kcGFsZS10ZWFsOiAjZjVmZWZmO1xuJGRhcmstZ3JlZW46ICMwYTVjNDA7XG4kZ3JlZW46ICMxNGI4ODE7XG4kbGlnaHQtZ3JlZW46ICNhM2Y1ZDk7XG4kcGFsZS1ncmVlbjogI2Y2ZmVmYjtcbiRkYXJrLXllbGxvdzogIzk5NzQwMDtcbiR5ZWxsb3c6ICNmZmNlMzM7XG4kbGlnaHQteWVsbG93OiAjZmZmM2NjO1xuJHBhbGUteWVsbG93OiAjZmZmZGY1O1xuJGRhcmstcmVkOiAjNjYwYTAwO1xuJHJlZDogI2NjMTQwMDtcbiRsaWdodC1yZWQ6ICNmZmQxY2M7XG4kcGFsZS1yZWQ6ICNmZmY2ZjU7XG5cblxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gIFwiYWNjZW50XCI6ICRhY2NlbnQsXG4gIFwic3VjY2Vzc1wiOiAkc3VjY2VzcywgXG4gIFwid2FybmluZ1wiOiAkd2FybmluZywgXG4gIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJtZXRhbFwiOiAkbWV0YWwsXG4gIFwiZm9jdXNcIjogJGZvY3VzLFxuICBcImdyZXktMjBcIjogJGdyZXktMjAsIFxuICBcImdyZXktMzBcIjogJGdyZXktMzAsXG4gIFwiZ3JleS01MFwiOiAkZ3JleS01MCxcbiAgXCJncmV5LTcwXCI6ICRncmV5LTcwLFxuICBcImdyZXktOTBcIjogJGdyZXktOTAsXG4gIFwiZ3JleS05NVwiOiAkZ3JleS05NSxcbiAgXCJiYXNlXCI6ICRiYXNlLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcIndoaXRlXCI6ICR3aGl0ZSxcbiAgXCJibGFja1wiOiAkYmxhY2ssXG4gIFwiYmx1ZVwiOiAkYmx1ZVxuKTtcblxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG4kZ3Qtc21hbGwtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHNtKSAhZGVmYXVsdDsgLy8gNTc2XG4kZ3QtbWVkaXVtLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBtZCkgIWRlZmF1bHQ7IC8vIDc2OFxuJGd0LWxhcmdlLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBsZykgIWRlZmF1bHQ7IC8vIDk5MlxuJGd0LXhsYXJnZS13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgeGwpICFkZWZhdWx0OyAvLyAxMjAwXG5cbi8qIFNoYWRvd3MgKi9cbiRzaGFkb3ctc206IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XG4kc2hhZG93LW1kOiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMDgpOyAvL2RlZmF1bHRcbiRzaGFkb3ctbGc6IDAgMTVweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwwLDAsMC4wOCk7XG4kc2hhZG93LWVsZXZhdGU6ICRzaGFkb3ctbGc7IC8vIG9uIGhvdmVyXG5cbi8qIFNwYWNpbmcgR3VpZGVsaW5lcyAqL1xuJHNwYWNpbmcteHhzOiAwLjMzM3JlbTsgICAgIC8vIHNtYWxsIGdhcCAgICAgICAgICAgLSA1cHggICAgKHh4cylcbiRzcGFjaW5nLXhzOiAwLjY2N3JlbTsgICAgICAvLyBSZWxhdGVkIERpcmVjdGx5ICAgIC0gMTBweCAgICh4cylcbiRzcGFjaW5nLXNtOiAxcmVtOyAgICAgICAgICAvLyBSZWxhdGVkIEluZGlyZWN0bHkgIC0gMTVweCAgIChzbSlcbiRzcGFjaW5nLW1kOiAxLjMzcmVtOyAgICAgICAvLyBSZWxhdGVkIEdyb3VwICAgICAgIC0gMjBweCAgIChtZCkgIC8vZGVmYXVsdFxuJHNwYWNpbmctbGc6IDJyZW07ICAgICAgICAgIC8vIFVucmVsYXRlZCBHcm91cCAgICAgLSAzMHB4ICAgKGxnKVxuJHNwYWNpbmcteGw6IDIuNjY3cmVtOyAgICAgIC8vIE5ldyBTZWN0aW9uICAgICAgICAgLSA0MHB4ICAgKHhsKVxuJHNwYWNpbmcteHhsOiA0cmVtOyAgICAgICAgIC8vIE5ldyBTZWN0aW9uIChMYXJnZSkgLSA2MHB4ICAgKHh4bClcblxuJHNwYWNpbmctc2l6ZXM6IChcbiAgXCIwXCI6IDAsXG4gIFwiNVwiOiAkc3BhY2luZy14eHMsXG4gIFwiMTBcIjogJHNwYWNpbmcteHMsXG4gIFwiMTVcIjogJHNwYWNpbmctc20sXG4gIFwiMjBcIjogJHNwYWNpbmctbWQsXG4gIFwiMzBcIjogJHNwYWNpbmctbGcsXG4gIFwiNDBcIjogJHNwYWNpbmcteGwsXG4gIFwiNjBcIjogJHNwYWNpbmcteHhsLFxuICBcIjE1LWVtXCI6IDEuNXJlbSxcbiAgXCIyMi1lbVwiOiAyLjJyZW0sXG4gIFwieHhzXCI6ICRzcGFjaW5nLXh4cyxcbiAgXCJ4c1wiOiAkc3BhY2luZy14cyxcbiAgXCJzbVwiOiAkc3BhY2luZy1zbSxcbiAgXCJtZFwiOiAkc3BhY2luZy1tZCxcbiAgXCJsZ1wiOiAkc3BhY2luZy1sZyxcbiAgXCJ4bFwiOiAkc3BhY2luZy14bCxcbiAgXCJ4eGxcIjogJHNwYWNpbmcteHhsLCAgXG4gICk7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbiRhbmltYXRpb24teHM6IGFsbCAwLjFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuJGFuaW1hdGlvbi1zaDogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLW1kOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7IC8vZGVmYXVsdFxuJGFuaW1hdGlvbi1sZzogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4kYW5pbWF0aW9uLXhsOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiRhbmltYXRpb24teHhsOiBhbGwgMS4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblxuJGFuaW1hdGlvbi1kZWZhdWx0OiAkYW5pbWF0aW9uLW1kO1xuXG4kYW5pbWF0aW9uLWZhZGUtaW46IGZhZGUtaW4gMXMgYm90aDtcbiRhbmltYXRpb24tZmFkZS1vdXQ6IGZhZGUtb3V0IDFzIGVhc2Utb3V0IGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tdG9wOiBmYWRlLWluLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tOiBmYWRlLWluLWJvdHRvbSAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4kYW5pbWF0aW9uLXB1ZmYtaW4tY2VudGVyOiBwdWZmLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjQ3MCwgMC4wMDAsIDAuNzQ1LCAwLjcxNSkgYm90aDtcbiRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyOiBwdWZmLW91dC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBib3RoO1xuJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsOiBzaGFrZS1ob3Jpem9udGFsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1KSBib3RoO1xuJGFuaW1hdGlvbi1mb2N1cy1pbi1jb250cmFjdC1iY2s6IGZvY3VzLWluLWNvbnRyYWN0LWJjayAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7IC8vIGZvciB0ZXh0XG4kYW5pbWF0aW9uLXNjYWxlLWluLXZlci10b3A6IHNjYWxlLWluLXZlci10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4kYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wOiBzY2FsZS1vdXQtdmVyLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgYm90aDtcbiRhbmltYXRpb24tcHVsc2UtaW5maW5pdGU6IHNoYWRvdy1wdWxzZS1kZWxheWVkIDVzIGluZmluaXRlO1xuJGFuaW1hdGlvbi1wdWxzZS0zOiBzaGFkb3ctcHVsc2UtZGVsYXllZCA1cyAzO1xuJGFuaW1hdGlvbi1wdWxzZS0xOiBzaGFkb3ctcHVsc2UgMXMgMTtcblxuLy8gWW91IGNhbiB1c2UgYW55IG9mIHRoZXNlIG5hbWVzIHRvIGFuaW1hdGUgSFRNTCBlbGVtZW50cyBvbiBpbml0aWF0aW9uXG4kYW5pbWF0aW9uczogKFxuICBcImZhZGUtaW5cIjogJGFuaW1hdGlvbi1mYWRlLWluLFxuICBcImZhZGUtb3V0XCI6ICRhbmltYXRpb24tZmFkZS1vdXQsXG4gIFwiZmFkZS1pbi10b3BcIjogJGFuaW1hdGlvbi1mYWRlLWluLXRvcCxcbiAgXCJmYWRlLWluLWJvdHRvbVwiOiAkYW5pbWF0aW9uLWZhZGUtaW4tYm90dG9tLFxuICBcInB1ZmYtaW4tY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1pbi1jZW50ZXIsXG4gIFwicHVmZi1vdXQtY2VudGVyXCI6ICRhbmltYXRpb24tcHVmZi1vdXQtY2VudGVyLFxuICBcInNoYWtlLWhvcml6b250YWxcIjogJGFuaW1hdGlvbi1zaGFrZS1ob3Jpem9udGFsLFxuICBcImZvY3VzLWluLWNvbnRyYWN0LWJja1wiOiAkYW5pbWF0aW9uLWZvY3VzLWluLWNvbnRyYWN0LWJjayxcbiAgXCJzY2FsZS1pbi12ZXItdG9wXCI6ICRhbmltYXRpb24tc2NhbGUtaW4tdmVyLXRvcCxcbiAgXCJzY2FsZS1vdXQtdmVyLXRvcFwiOiAkYW5pbWF0aW9uLXNjYWxlLW91dC12ZXItdG9wLFxuICBcInB1bHNlLWluZmluaXRlXCI6ICRhbmltYXRpb24tcHVsc2UtaW5maW5pdGUsXG4gIFwicHVsc2UtM1wiOiAkYW5pbWF0aW9uLXB1bHNlLTMsXG4gIFwicHVsc2UtMVwiOiAkYW5pbWF0aW9uLXB1bHNlLTFcbik7XG5cbi8qIEJvcmRlcnMgKi9cbiRib3JkZXItc2l6ZS1zbTogMC4xMjVyZW07XG4kYm9yZGVyLXNpemUtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXNpemUtbGc6IDAuNXJlbTtcbiRib3JkZXItc2l6ZS0xOiAxcHg7XG4kYm9yZGVyLXNpemUtMjogMnB4O1xuJGJvcmRlci1zaXplLTM6IDNweDtcbiRib3JkZXItc2l6ZS01OiA1cHg7XG4kYm9yZGVyLXNpemUtMTA6IDEwcHg7XG5cbiRib3JkZXItc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXNpemUtc20sXG4gIFwibWRcIjogJGJvcmRlci1zaXplLW1kLFxuICBcImxnXCI6ICRib3JkZXItc2l6ZS1sZyxcbiAgXCIxXCI6ICRib3JkZXItc2l6ZS0xLFxuICBcIjJcIjogJGJvcmRlci1zaXplLTIsXG4gIFwiM1wiOiAkYm9yZGVyLXNpemUtMyxcbiAgXCI1XCI6ICRib3JkZXItc2l6ZS01LFxuICBcIjEwXCI6ICRib3JkZXItc2l6ZS0xMFxuKTtcblxuLyogQ29ybmVycyAqL1xuJGJvcmRlci1yYWRpdXMtc206IDAuMTI1cmVtO1xuJGJvcmRlci1yYWRpdXMtbWQ6IDAuMjVyZW07XG4kYm9yZGVyLXJhZGl1cy1sZzogMC41cmVtO1xuJGJvcmRlci1yYWRpdXMtMjogMnB4O1xuJGJvcmRlci1yYWRpdXMtNDogNHB4O1xuJGJvcmRlci1yYWRpdXMtNjogNnB4O1xuJGJvcmRlci1yYWRpdXMtMTA6IDEwcHg7XG4kYm9yZGVyLXJhZGl1cy0xNTogMTVweDtcbiRib3JkZXItcmFkaXVzLTIwOiAyMHB4O1xuJGJvcmRlci1yYWRpdXMtaGFsZjogNTAlO1xuJGJvcmRlci1yYWRpdXMtZnVsbDogMTAwJTtcblxuJGJvcmRlci1yYWRpdXMtc2l6ZXM6IChcbiAgXCJzbVwiOiAkYm9yZGVyLXJhZGl1cy1zbSxcbiAgXCJtZFwiOiAkYm9yZGVyLXJhZGl1cy1tZCwgLy9kZWZhdWx0XG4gIFwibGdcIjogJGJvcmRlci1yYWRpdXMtbGcsXG4gIFwiMlwiOiAkYm9yZGVyLXJhZGl1cy0yLFxuICBcIjRcIjogJGJvcmRlci1yYWRpdXMtNCxcbiAgXCI2XCI6ICRib3JkZXItcmFkaXVzLTYsXG4gIFwiMTBcIjogJGJvcmRlci1yYWRpdXMtMTAsXG4gIFwiMTVcIjogJGJvcmRlci1yYWRpdXMtMTUsXG4gIFwiMjBcIjogJGJvcmRlci1yYWRpdXMtMjAsXG4gIFwiaGFsZlwiOiAkYm9yZGVyLXJhZGl1cy1oYWxmLFxuICBcImZ1bGxcIjogJGJvcmRlci1yYWRpdXMtZnVsbCxcbik7XG4iLCJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAvLy5kYXNoYm9hcmQtY2FyZC10aXRsZSB7XG4gIC8vICBtYXJnaW46IDAgLTIuMmVtOy8vIHJlbW92ZSBwYXJlbnQgcGFkZGluZ1xuICAvL31cbiAgL2RlZXAvIHtcbiAgICBtLXBvcnRsZXQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIC5tLXBvcnRsZXRfX2hlYWQtY2FwdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAubS1wb3J0bGV0X19oZWFkIHtcbiAgICAgICAgaGVpZ2h0OiAzLjFyZW07XG4gICAgICB9XG5cbiAgICAgIC5tLXBvcnRsZXRfX2hlYWQsXG4gICAgICAubS1wb3J0bGV0X19ib2R5LFxuICAgICAgLm0tcG9ydGxldF9fZm9vdCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC5kZXRhaWxzLWNvbHVtbi1jZWxsIHtcbiAgICBmbGV4OiBhdXRvO1xuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuYXBwbGljYXRpb24tY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG5cbiAgLnBvcnRsZXItdGl0bGUtYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgLm0tcG9ydGxldF9faGVhZC10aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuXG4gIC5teS1kb2N1bWVudC1saXN0IHtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG5cblxuICAgIC5teS1kb2N1bWVudC1saXN0LXN0YXR1cy1pY29uIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm15LWRvY3VtZW50LWxpc3QtYm9keSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLm15LWRvY3VtZW50LWxpc3QtcmVhZG1vcmUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjEyNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5ob3VzZWhvbGQtaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gIH1cblxuICAuaG91c2Vob2xkLWluZm8tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xuICB9XG5cbiAgLmhvdXNlaG9sZC1pbmZvLWVsZW1lbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogNDJweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAuMTVlbSAuMjVlbTtcbiAgICB9XG4gIH1cblxuICAubG90dGVyeS1saXN0LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5sb3R0ZXJ5LWxpc3QtaXRlbS1kZXNjIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5sb3R0ZXJ5LWxpc3QtaXRlbS1kYXRhIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgbWFyZ2luOiAwIDMuMTI1cmVtIDAgYXV0bztcbiAgICB9XG5cbiAgICAubG90dGVyeS1saXN0LWl0ZW0tZmF2b3JpdGUtc3RhdHVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcC1leGFtcy1jYXJkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/details/pages/lottery-apply/lottery-apply.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/details/pages/lottery-apply/lottery-apply.component.ts ***!
  \********************************************************************************/
/*! exports provided: LotteryApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryApplyComponent", function() { return LotteryApplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/api/lottery-api.service */ "./src/app/shared/services/api/lottery-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_web_src_app_shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/web/src/app/shared/enums/developmentEnums */ "./src/app/shared/enums/developmentEnums.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "../lib/src/public_api.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LotteryApplyComponent = /** @class */ (function () {
    function LotteryApplyComponent(activatedRoute, lotteryApiService, cdRef, toastr, oauthService, router) {
        this.activatedRoute = activatedRoute;
        this.lotteryApiService = lotteryApiService;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.oauthService = oauthService;
        this.router = router;
        this.isAgreeWithTermsOfUse = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]);
        this.applicationSummary = {};
        this.appLoaded = false;
        this.cardViewType = 'full';
    }
    LotteryApplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lotteryId = this.activatedRoute.snapshot.params['id'];
        this.lotteryApiService.getCardView(this.lotteryId.toString()).subscribe(function (details) {
            _this.lottery = _this.aggregateApplicationData(details);
            console.log(_this.lottery);
            console.log(_this.lotteryId);
            _this.cdRef.detectChanges();
        });
        this.lotteryApiService.getApplicationDashboardSummary().subscribe(function (data) {
            _this.applicationSummary = data;
            console.log(data);
            _this.appLoaded = true;
            if (!_this.cdRef["destroyed"])
                _this.cdRef.detectChanges();
        });
    };
    LotteryApplyComponent.prototype.CanIApply = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].create(function (observer) {
            if (_this.isUserLoggedIn()) {
                _this.lotteryApiService.CanIApply(_this.lotteryId).subscribe(function (response) {
                    observer.next(response);
                    observer.complete();
                });
            }
            else {
                observer.next(true);
                observer.complete();
            }
        });
    };
    LotteryApplyComponent.prototype.isUserLoggedIn = function () {
        return ((this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken()));
    };
    LotteryApplyComponent.prototype.aggregateApplicationData = function (item) {
        var subwayServices = item.trains
            ? Array.from(new Set(item.trains.split(','))).sort()
            : [];
        var markers = (item.markers)
            ? item.markers.map(function (item, index) {
                return {
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
                    iconUrl: '/assets/images/map-marker.svg',
                    type: 'building',
                    color: null,
                    trainName: null
                };
            })
            : [];
        return {
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
                subwayServices: subwayServices,
                images: [
                    (item.defaultPhotoStream) ? (item.defaultPhotoStream) : '/assets/images/demo-lottery-house.png'
                ],
                isAddedToFavorite: false,
                expirationDate: new Date(),
                expirationDateText: (item.endIn > 0)
                    ? "Lottery closing in " + item.endIn + " days"
                    : (item.endIn === 0)
                        ? 'Lottery ends today'
                        : 'Lottery closed',
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
                propertyType: (item.propertyTypeId == projects_web_src_app_shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_4__["PropertyTypeEnum"].Rental ? "Rental" : (item.propertyTypeId == projects_web_src_app_shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_4__["PropertyTypeEnum"].Owner ? "Sales" : "")),
                ownerTypeId: item.ownerTypeId,
                ownerType: (item.ownerTypeId == projects_web_src_app_shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_4__["OwnerTypeEnum"].SmallHome ? "Small Home" : (item.ownerTypeId == projects_web_src_app_shared_enums_developmentEnums__WEBPACK_IMPORTED_MODULE_4__["OwnerTypeEnum"].CondoCoop ? "Condo/Co-op" : "")),
                visionHearingPref: item.visionHearing,
                lotteryApplication: item.lotteryApplication,
            }
        };
    };
    LotteryApplyComponent.prototype.submit = function () {
        var _this = this;
        this.CanIApply().subscribe(function (canApply) {
            if (!canApply) {
                _this.toastr.error('Already applied');
                return;
            }
            console.log('CAN APPLY');
            _this.lotteryApiService.applyLottery(_this.lotteryId)
                .subscribe(function (result) {
                if (result) {
                    if (result.success) {
                        _this.toastr.success(result.message);
                        _this.router.navigate(["/details/confirmation/" + result.id]);
                    }
                    else {
                        _this.toastr.error(result.message);
                    }
                    console.log(result);
                }
                else {
                    _this.toastr.error("Could not process the request");
                }
            });
        });
    };
    LotteryApplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lottery-apply',
            template: __webpack_require__(/*! ./lottery-apply.component.html */ "./src/app/modules/details/pages/lottery-apply/lottery-apply.component.html"),
            styles: [__webpack_require__(/*! ./lottery-apply.component.scss */ "./src/app/modules/details/pages/lottery-apply/lottery-apply.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_api_lottery_api_service__WEBPACK_IMPORTED_MODULE_2__["LotteryApiService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LotteryApplyComponent);
    return LotteryApplyComponent;
}());



/***/ }),

/***/ "./src/app/modules/details/pipes/can-apply.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/details/pipes/can-apply.pipe.ts ***!
  \*********************************************************/
/*! exports provided: CanApplyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanApplyPipe", function() { return CanApplyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanApplyPipe = /** @class */ (function () {
    function CanApplyPipe() {
    }
    CanApplyPipe.prototype.transform = function (canApply) {
        return (canApply) ? 'Apply Now!' : 'Already applied!';
    };
    CanApplyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'canApplyPipe' })
    ], CanApplyPipe);
    return CanApplyPipe;
}());



/***/ }),

/***/ "./src/app/shared/enums/taskInventories.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/enums/taskInventories.ts ***!
  \*************************************************/
/*! exports provided: TaskInventoryEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskInventoryEnum", function() { return TaskInventoryEnum; });
var TaskInventoryEnum;
(function (TaskInventoryEnum) {
    //UnitRegistration = 1, 
    //CommercialMedia = 2, 
    //CommunityContactGroups = 3,
    //ProofOfProjectSite = 4, 
    //SetAsideAndPreference = 5, 
    //CreditCheckFee = 6,
    //ResidentSelectionCriteria = 7, 
    //ApplicantInterviewStandards = 8, 
    //PaperApplications = 9,
    //LanguageAccessPlan = 10, 
    //ManagementPlan = 11, 
    //AdvertisementContent = 12,
    TaskInventoryEnum[TaskInventoryEnum["UnitRegistration"] = 1] = "UnitRegistration";
    TaskInventoryEnum[TaskInventoryEnum["CommercialMedia"] = 2] = "CommercialMedia";
    TaskInventoryEnum[TaskInventoryEnum["CommunityContactGroups"] = 3] = "CommunityContactGroups";
    TaskInventoryEnum[TaskInventoryEnum["ProofOfProjectSite"] = 4] = "ProofOfProjectSite";
    TaskInventoryEnum[TaskInventoryEnum["ResidentSelectionCriteria"] = 5] = "ResidentSelectionCriteria";
    TaskInventoryEnum[TaskInventoryEnum["ApplicantInterviewStandards"] = 6] = "ApplicantInterviewStandards";
    TaskInventoryEnum[TaskInventoryEnum["PaperApplications"] = 7] = "PaperApplications";
    TaskInventoryEnum[TaskInventoryEnum["LanguageAccessPlan"] = 8] = "LanguageAccessPlan";
    TaskInventoryEnum[TaskInventoryEnum["ManagementPlan"] = 9] = "ManagementPlan";
    TaskInventoryEnum[TaskInventoryEnum["RentalAdvertisementContent"] = 10] = "RentalAdvertisementContent";
    TaskInventoryEnum[TaskInventoryEnum["SalesAdvertisementContent"] = 11] = "SalesAdvertisementContent";
    TaskInventoryEnum[TaskInventoryEnum["GenericTask"] = 12] = "GenericTask";
})(TaskInventoryEnum || (TaskInventoryEnum = {}));


/***/ })

}]);
//# sourceMappingURL=modules-details-details-module.js.map