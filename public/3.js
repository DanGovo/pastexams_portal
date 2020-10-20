(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ExamPapers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ExamPapers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_exampaper_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/exampaper_service.js */ "./resources/js/services/exampaper_service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "exampaper",
  data: function data() {
    return {
      categories: [],
      courses: [],
      exampapers: [],
      exampaperData: {
        category_id: "",
        course_id: "",
        name: "",
        year: "",
        paper: ""
      },
      editExampaperData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadCategories();
    this.loadCourses();
    this.loadExampapers();
  },
  methods: {
    loadCourses: function () {
      var _loadCourses = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_exampaper_service_js__WEBPACK_IMPORTED_MODULE_1__["loadCourses"]();

              case 3:
                response = _context.sent;
                this.courses = response.data;
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log("" + _context.t0);
                this.flashMessage.error({
                  message: "Some error occured. Please refresh your browser!",
                  time: 5000
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadCourses() {
        return _loadCourses.apply(this, arguments);
      }

      return loadCourses;
    }(),
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_exampaper_service_js__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 3:
                response = _context2.sent;
                this.categories = response.data;
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log("" + _context2.t0);
                this.flashMessage.error({
                  message: "Some error occured. Please refresh your browser!",
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    loadExampapers: function () {
      var _loadExampapers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_exampaper_service_js__WEBPACK_IMPORTED_MODULE_1__["loadExampapers"]();

              case 3:
                response = _context3.sent;
                this.exampapers = response.data.data;
                _context3.next = 11;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log("" + _context3.t0);
                this.flashMessage.error({
                  message: "Some error occured. Please refresh your browser!",
                  time: 5000
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function loadExampapers() {
        return _loadExampapers.apply(this, arguments);
      }

      return loadExampapers;
    }(),
    attachPaper: function attachPaper() {
      this.exampaperData.paper = this.$refs.newExamPaper.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.newExamPaperDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.exampaperData.paper);
    },
    hideNewExampaperModal: function hideNewExampaperModal() {
      this.$refs.newExampaperModal.hide();
    },
    showNewExampaperModal: function showNewExampaperModal() {
      this.$refs.newExampaperModal.show();
    },
    createExampaper: function () {
      var _createExampaper = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                formData = new FormData();
                formData.append("category_id", this.exampaperData.category_id);
                formData.append("course_id", this.exampaperData.course_id);
                formData.append("name", this.exampaperData.name);
                formData.append("year", this.exampaperData.year);
                formData.append("paper", this.exampaperData.paper);
                _context4.prev = 6;
                _context4.next = 9;
                return _services_exampaper_service_js__WEBPACK_IMPORTED_MODULE_1__["createExampaper"](formData);

              case 9:
                response = _context4.sent;
                this.exampapers.unshift(response.data);
                this.hideNewExampaperModal();
                this.flashMessage.success({
                  message: "Exampaper created successfully",
                  time: 5000
                });
                this.exampaperData = {
                  category_id: "",
                  course_id: "",
                  name: "",
                  year: "",
                  paper: ""
                };
                _context4.next = 25;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](6);
                _context4.t1 = _context4.t0.response.status;
                _context4.next = _context4.t1 === 422 ? 21 : 23;
                break;

              case 21:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 25);

              case 23:
                this.flashMessage.error({
                  message: "Some error occured. Please try again!",
                  time: 5000
                });
                return _context4.abrupt("break", 25);

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[6, 16]]);
      }));

      function createExampaper() {
        return _createExampaper.apply(this, arguments);
      }

      return createExampaper;
    }(),
    deleteExampaper: function () {
      var _deleteExampaper = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(exampaper) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (window.confirm("Are you sure want to delete ".concat(exampaper.name, "?"))) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _context5.prev = 2;
                _context5.next = 5;
                return _services_exampaper_service_js__WEBPACK_IMPORTED_MODULE_1__["deleteExampaper"](exampaper.id);

              case 5:
                this.exampapers = this.exampapers.filter(function (obj) {
                  return obj.id != exampaper.id;
                });
                this.flashMessage.success({
                  message: "Exampaper deleted successfully.",
                  time: 5000
                });
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](2);
                this.flashMessage.error({
                  message: _context5.t0.response.data.message,
                  time: 5000
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 9]]);
      }));

      function deleteExampaper(_x) {
        return _deleteExampaper.apply(this, arguments);
      }

      return deleteExampaper;
    }(),
    hideEditExampaperModal: function hideEditExampaperModal() {
      this.$refs.editExampaperModal.hide();
    },
    showEditExampaperModal: function showEditExampaperModal() {
      this.$refs.editExampaperModal.show();
    },
    editExampaper: function editExampaper(exampaper) {
      this.editExampaperData = _objectSpread({}, exampaper);
      this.showEditExampaperModal();
    },
    updateExampaper: function () {
      var _updateExampaper = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                formData = new formData();
                formData.append("category_id", this.editExampaperData.category_id);
                formData.append("course_id", this.editExampaperData.course_id);
                formData.append("name", this.editExampaperData.name);
                formData.append("year", this.editExampaperData.year);
                formData.append("paper", this.editExampaperData.paper);
                formData.append("_method", "put");
                _context6.next = 10;
                return _services_exampaper_service_js__WEBPACK_IMPORTED_MODULE_1__["updateExampaper"](this.editExampaperData.id, formData);

              case 10:
                response = _context6.sent;
                this.exampapers.map(function (exampaper) {
                  if (exampaper.id == response.data.id) {
                    for (var key in response.data) {
                      exampaper[key] = response.data[key];
                    }
                  }
                });
                this.hideEditExampaperModal();
                this.flashMessage.success({
                  message: "Exampaper updated successfully.",
                  time: 5000
                });
                _context6.next = 19;
                break;

              case 16:
                _context6.prev = 16;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  message: _context6.t0.response.data.message,
                  time: 5000
                });

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 16]]);
      }));

      function updateExampaper() {
        return _updateExampaper.apply(this, arguments);
      }

      return updateExampaper;
    }(),
    findCourse: function findCourse(course_id) {
      var course_name = "";
      this.courses.forEach(function (course) {
        if (course.id == course_id) {
          course_name = course.name;
        }
      });
      return course_name;
    },
    findCategory: function findCategory(category_id) {
      var category_name = "";
      this.categories.forEach(function (category) {
        if (category.id == category_id) {
          category_name = category.name;
        }
      });
      return category_name;
    },
    downloadFile: function downloadFile(exampaper) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/download/' + exampaper, {
        responseType: 'arraybuffer'
      }).then(function (res) {
        var blob = new Blob([res.data], {
          type: 'application/*'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = exampaper;
        link.click();
      });
    } // getDownload: async function(){
    //     return Storage(downlod(exampaper.paper));
    // }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ExamPapers.vue?vue&type=template&id=0236e676&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ExamPapers.vue?vue&type=template&id=0236e676& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("main", [
      _c(
        "div",
        { staticClass: "container-fluid" },
        [
          _c("h3", { staticClass: "mt-4" }, [_vm._v("Admin Panel")]),
          _vm._v(" "),
          _c("ol", { staticClass: "breadcrumb" }, [
            _c(
              "li",
              { staticClass: "breadcrumb-item" },
              [
                _c("router-link", { attrs: { to: "/dashboard" } }, [
                  _vm._v("Dashboard")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Exampapers")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xl-10 offset-1" }, [
              _c("div", { staticClass: "card mb-3" }, [
                _c("div", { staticClass: "card-header d-flex" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm ml-auto",
                      on: { click: _vm.showNewExampaperModal }
                    },
                    [
                      _c("span", { staticClass: "fa fa-plus" }),
                      _vm._v(" Add Exampaper\n              ")
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.exampapers, function(exampaper, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(index + 1))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.findCategory(exampaper.category_id))
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.findCourse(exampaper.course_id)))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(exampaper.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(exampaper.year))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(exampaper.paper))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary btn-sm",
                                on: {
                                  click: function($event) {
                                    return _vm.editExampaper(exampaper)
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "fa fa-edit" }),
                                _vm._v(
                                  "\n                        Edit\n                      "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger btn-sm",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteExampaper(exampaper)
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "fa fa-trash" }),
                                _vm._v(
                                  "\n                        Delete\n                      "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success btn-sm",
                                on: { click: _vm.downloadFile }
                              },
                              [
                                _c("span", { staticClass: "fa fa-download" }),
                                _vm._v(
                                  "\n                        Download\n                      "
                                )
                              ]
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "newExampaperModal",
              attrs: { "hide-footer": "", title: "Add Exam Paper" }
            },
            [
              _c("div", { staticClass: "d-block" }, [
                _c(
                  "form",
                  {
                    attrs: { enctype: "multipart/form-data" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.createExampaper($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "category_id" } }, [
                        _vm._v("Category")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.exampaperData.category_id,
                              expression: "exampaperData.category_id"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "category_id" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.exampaperData,
                                "category_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Choose Category...")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.categories, function(category, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: category.id } },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(category.name) +
                                    "\n                "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.category_id
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.errors.category_id[0]) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "course_id" } }, [
                        _vm._v("Course")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.exampaperData.course_id,
                              expression: "exampaperData.course_id"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "course_id" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.exampaperData,
                                "course_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Choose Course...")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.courses, function(course, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: course.id } },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(course.name) +
                                    "\n                "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.course_id
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.errors.course_id[0]) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "name" } }, [
                        _vm._v("Exampaper Name")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.exampaperData.name,
                            expression: "exampaperData.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "name",
                          placeholder: "Enter exampaper name"
                        },
                        domProps: { value: _vm.exampaperData.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.exampaperData,
                              "name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.name
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.errors.name[0]) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "year" } }, [
                        _vm._v("Exam Date")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.exampaperData.year,
                            expression: "exampaperData.year"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "date",
                          id: "year",
                          placeholder: "Enter exampaper year"
                        },
                        domProps: { value: _vm.exampaperData.year },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.exampaperData,
                              "year",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.year
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.errors.year[0]) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "paper" } }, [
                        _vm._v("Choose exampaper")
                      ]),
                      _vm._v(" "),
                      _vm.exampaperData.paper.name
                        ? _c("div", [
                            _c("img", {
                              ref: "newExamPaperDisplay",
                              staticClass: "w-150px",
                              attrs: { src: "" }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("input", {
                        ref: "newExamPaper",
                        staticClass: "form-control",
                        attrs: { type: "file", id: "paper" },
                        on: { change: _vm.attachPaper }
                      }),
                      _vm._v(" "),
                      _vm.errors.paper
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.errors.paper[0]) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-default",
                          attrs: { type: "button" },
                          on: { click: _vm.hideNewExampaperModal }
                        },
                        [_vm._v("\n                Cancel\n              ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [
                          _c("span", { staticClass: "fa fa-check" }),
                          _vm._v(" Save\n              ")
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "editExampaperModal",
              attrs: { "hide-footer": "", title: "Edit Exampaper" }
            },
            [
              _c("div", { staticClass: "d-block" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.updateExampaper($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "course_id" } }, [
                        _vm._v("Course")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editExampaperData.course_id,
                              expression: "editExampaperData.course_id"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "course_id" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.editExampaperData,
                                "course_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Choose Course")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.courses, function(course, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: course.id } },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(course.name) +
                                    "\n                "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.course_id
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.errors.course_id[0]) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "code" } }, [
                        _vm._v("Exampaper Code")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editExampaperData.code,
                            expression: "editExampaperData.code"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "code" },
                        domProps: { value: _vm.editExampaperData.code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.editExampaperData,
                              "code",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.code
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.errors.code[0]) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "name" } }, [
                        _vm._v("Exampaper Name")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editExampaperData.name,
                            expression: "editExampaperData.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "name" },
                        domProps: { value: _vm.editExampaperData.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.editExampaperData,
                              "name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.name
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.errors.name[0]) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-default",
                          attrs: { type: "button" },
                          on: { click: _vm.hideEditExampaperModal }
                        },
                        [_vm._v("\n                Cancel\n              ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [
                          _c("span", { staticClass: "fa fa-check" }),
                          _vm._v(" Update\n              ")
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area mr-1" }),
      _vm._v("\n                Exampapers Management\n              ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#")]),
        _vm._v(" "),
        _c("td", [_vm._v("Category")]),
        _vm._v(" "),
        _c("td", [_vm._v("Course")]),
        _vm._v(" "),
        _c("td", [_vm._v("Description")]),
        _vm._v(" "),
        _c("td", [_vm._v("Exam Date")]),
        _vm._v(" "),
        _c("td", [_vm._v("Exam Paper")]),
        _vm._v(" "),
        _c("td", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/exampaper_service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/exampaper_service.js ***!
  \****************************************************/
/*! exports provided: createExampaper, loadCourses, loadCategories, getDownload, loadExampapers, deleteExampaper, updateExampaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExampaper", function() { return createExampaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCourses", function() { return loadCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDownload", function() { return getDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadExampapers", function() { return loadExampapers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteExampaper", function() { return deleteExampaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExampaper", function() { return updateExampaper; });
/* harmony import */ var _http_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_services */ "./resources/js/services/http_services.js");

function createExampaper(data) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/exampapers', data);
}
function loadCourses() {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-courses');
}
function loadCategories() {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-categories');
} //download file

function getDownload() {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get('/get-download');
}
function loadExampapers() {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/exampapers');
}
function deleteExampaper(id) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("exampapers/".concat(id));
}
function updateExampaper(id, data) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("exampapers/".concat(id), data);
}

/***/ }),

/***/ "./resources/js/views/ExamPapers.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/ExamPapers.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExamPapers_vue_vue_type_template_id_0236e676___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamPapers.vue?vue&type=template&id=0236e676& */ "./resources/js/views/ExamPapers.vue?vue&type=template&id=0236e676&");
/* harmony import */ var _ExamPapers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExamPapers.vue?vue&type=script&lang=js& */ "./resources/js/views/ExamPapers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExamPapers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExamPapers_vue_vue_type_template_id_0236e676___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExamPapers_vue_vue_type_template_id_0236e676___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ExamPapers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ExamPapers.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/ExamPapers.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamPapers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExamPapers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ExamPapers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamPapers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ExamPapers.vue?vue&type=template&id=0236e676&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/ExamPapers.vue?vue&type=template&id=0236e676& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamPapers_vue_vue_type_template_id_0236e676___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExamPapers.vue?vue&type=template&id=0236e676& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ExamPapers.vue?vue&type=template&id=0236e676&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamPapers_vue_vue_type_template_id_0236e676___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamPapers_vue_vue_type_template_id_0236e676___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);