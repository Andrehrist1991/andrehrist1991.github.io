/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/content/content.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/content/content.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var TOOLS = {} || TOOLS;
  TOOLS.rangeSlider = {
    init: function init() {
      var $range = $(".js-range-slider"),
          $from = $(".js-from"),
          $to = $(".js-to"),
          range,
          min = 0,
          max = 1000,
          from = TOOLS.rangeSlider.symbol,
          to = TOOLS.rangeSlider.symbol;

      var updateValues = function updateValues() {
        $from.prop("value", from);
        $to.prop("value", to);
      };

      $range.ionRangeSlider({
        skin: "round",
        type: "double",
        hideMinMax: true,
        hideFromTo: true,
        min: min,
        max: max,
        prettify_enabled: false,
        grid: false,
        onChange: function onChange(data) {
          from = data.from;
          to = data.to;
          $(".irs-from, .irs-to").show();
          updateValues();
        },
        onFinish: function onFinish(data) {
          from = data.from;
          to = data.to;
          $(".irs-from, .irs-to").hide();
          updateValues();
        }
      });
      range = $range.data("ionRangeSlider");

      var updateRange = function updateRange() {
        range.update({
          from: from,
          to: to
        });
      };

      $from.on("change", function () {
        from = +$(this).prop("value");

        if (from < min) {
          from = min;
        }

        if (from > to) {
          from = to;
        }

        updateValues();
        updateRange();
      });
      $to.on("change", function () {
        to = +$(this).prop("value");

        if (to > max) {
          to = max;
        }

        if (to < from) {
          to = from;
        }

        updateValues();
        updateRange();
      });
    }
  };
  TOOLS.rangeSlider.init();
  TOOLS.showmore = {
    button: $(".js-showMore"),
    parent: $(".js-dropdown-content"),
    content: $(".js-showMoreCont"),
    childCheckboxes: $(".check-set .cust-check"),
    showButton: function showButton(e) {
      $(TOOLS.showmore.content).each(function (e) {
        if ($(this).find(TOOLS.showmore.childCheckboxes).length > 8) {
          $(this).siblings(TOOLS.showmore.button).show();
        } else {
          $(this).siblings(TOOLS.showmore.button).hide();
        }
      });
    },
    showHidden: function showHidden() {
      TOOLS.showmore.button.on('click', function () {
        $(this).hide();
        $(this).parents(TOOLS.showmore.parent).find(TOOLS.showmore.content).addClass("show");
      });
    },
    init: function init() {
      TOOLS.showmore.showHidden();
      TOOLS.showmore.showButton();
    }
  };
  TOOLS.showmore.init();
  TOOLS.rating = {
    element: $(".rate"),
    init: function init() {
      TOOLS.rating.element.rate({
        max_value: 5,
        step_size: 0.5,
        selected_symbol_type: 'image',
        //url: 'http://localhost/test.php',
        initial_value: 3,
        symbols: {
          image: {
            base: '<i class="star-disabled-ic"></i>',
            hover: '<i class="star-hover-ic"></i>',
            selected: '<i class="star-disabled-ic"></i>'
          }
        }
      });
    }
  };
  TOOLS.rating.init();
  TOOLS.prodGrid = {
    columns: $(".js-styleItemsColumns"),
    rows: $(".js-styleItemsHorizontal"),
    parent: $(".grid-switch__itm"),
    list: $(".products-list"),
    init: function init() {
      TOOLS.prodGrid.columns.on('click', function (e) {
        $(this).parent(TOOLS.prodGrid.parent).addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(TOOLS.prodGrid.list).addClass('style-columns').removeClass('style-rows');
      });
      TOOLS.prodGrid.rows.on('click', function (e) {
        $(this).parent(TOOLS.prodGrid.parent).addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(TOOLS.prodGrid.list).addClass('style-rows').removeClass('style-columns');
      });

      if ($(window).width() <= 450) {
        $(TOOLS.prodGrid.list).addClass('style-columns').removeClass('style-rows');
      }

      ;
    }
  };
  TOOLS.prodGrid.init();
  /*Pure JS by test task!*/

  TOOLS.sidebarMobile = {
    buttonCall: document.getElementById("js-sidebarToggle"),
    sidebar: document.getElementById("sidebar"),
    buttonClose: document.getElementById("js-hideSidebar"),
    call: function call() {
      TOOLS.sidebarMobile.buttonCall.onclick = function (e) {
        this.classList.add("active");
        TOOLS.sidebarMobile.sidebar.classList.add("active");
      };
    },
    close: function close() {
      TOOLS.sidebarMobile.buttonClose.onclick = function (e) {
        TOOLS.sidebarMobile.buttonCall.classList.remove("active");
        TOOLS.sidebarMobile.sidebar.classList.remove("active");
      };
    },
    init: function init() {
      TOOLS.sidebarMobile.call();
      TOOLS.sidebarMobile.close();
    }
  };
  TOOLS.sidebarMobile.init();
  /*END JS by test task!*/
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var TOOLS = {} || TOOLS;
  TOOLS.menutoggle = {
    button: $(".js-menuToggle"),
    menu: $(".header__bottom"),
    search: $(".search-form"),
    toggle: function toggle() {
      TOOLS.menutoggle.button.on('click', function () {
        $(this).toggleClass("active");

        if ($(this).hasClass("active")) {
          TOOLS.menutoggle.menu.slideDown();
        } else {
          TOOLS.menutoggle.menu.slideUp();
        }
      });
    },
    init: function init() {
      TOOLS.menutoggle.toggle();
    }
  };
  TOOLS.menutoggle.init();
  TOOLS.headerscroll = {
    header: $(".js-header"),
    scrolling: function scrolling() {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          TOOLS.headerscroll.header.addClass("scrolling");
          TOOLS.headerscroll.header.removeClass("static");
        } else {
          TOOLS.headerscroll.header.removeClass("scrolling");
          TOOLS.headerscroll.header.addClass("static");
        }

        ;
      });
    },
    init: function init() {
      TOOLS.headerscroll.scrolling();
    }
  };
  TOOLS.headerscroll.init();
});

/***/ }),

/***/ "./src/js/import/general.js":
/*!**********************************!*\
  !*** ./src/js/import/general.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var TOOLS = {} || TOOLS;
$(document).ready(function () {
  TOOLS.dropdown = {
    button: $(".js-dropdown-btn"),
    content: $(".js-dropdown-content"),
    contentMore: $(".js-showMoreCont"),
    moreBtn: $(".js-showMore"),
    childCheckboxes: $(".check-set .cust-check"),
    init: function init() {
      try {
        TOOLS.dropdown.button.click(function (e) {
          e.preventDefault();
          $(this).parents(".js-dropdown").toggleClass("active");
          $(this).next(TOOLS.dropdown.content).slideToggle();
          $(this).parents(".js-dropdown").each(function (e) {
            if ($(this).hasClass("active") && $(this).find(TOOLS.dropdown.childCheckboxes).length > 8) {
              $(this).find(TOOLS.dropdown.moreBtn).show();
              $(this).find(TOOLS.dropdown.contentMore).removeClass("show");
            } else {
              $(this).find(TOOLS.dropdown.moreBtn).hide();
            }
          });
        });
      } catch (error) {
        console.log("error in dropdown");
      }
    }
  };
  TOOLS.dropdown.init();
  TOOLS.select = {
    option: $(".js-select span"),
    button: $(".js-dropdown-btn"),
    content: $(".js-dropdown-content"),
    init: function init() {
      try {
        TOOLS.select.option.click(function (e) {
          $(this).parents(".js-dropdown").find(TOOLS.select.button.find(".value")).text($(this).text());
          $(this).parents(".js-dropdown").find(TOOLS.select.button).toggleClass("active");
          $(this).parents(".js-dropdown").find(TOOLS.select.content).slideToggle();
        });
      } catch (error) {
        console.log("error in select");
      }
    }
  };
  TOOLS.select.init();
});
/*Pure JS by test task!*/

TOOLS.modal = {
  callBtn: document.getElementById("js-sign-in"),
  modal: document.getElementById("sign-in"),
  closeBtn: document.querySelector(".page-modal .close"),
  init: function init() {
    TOOLS.modal.callModal();
    TOOLS.modal.closeModal();
  },
  callModal: function callModal() {
    TOOLS.modal.callBtn.onclick = function (e) {
      e.preventDefault();
      TOOLS.modal.modal.classList.add("show");
      document.querySelector("body").classList.add("modal-active");
    };
  },
  closeModal: function closeModal() {
    TOOLS.modal.closeBtn.onclick = function () {
      TOOLS.modal.modal.classList.remove("show");
      document.querySelector("body").classList.remove("modal-active");
    };
  }
};
TOOLS.modal.init();
/*END Pure JS by test task!*/

/***/ }),

/***/ "./src/js/import/libs/auxiliary-rater-0831401/rater.min.js":
/*!*****************************************************************!*\
  !*** ./src/js/import/libs/auxiliary-rater-0831401/rater.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($, window) {
  $.fn.textWidth = function () {
    var html_calc = $("<span>" + $(this).html() + "</span>");
    html_calc.css("font-size", $(this).css("font-size")).hide();
    html_calc.prependTo("body");
    var width = html_calc.width();
    html_calc.remove();

    if (width == 0) {
      var total = 0;
      $(this).eq(0).children().each(function () {
        total += $(this).textWidth();
      });
      return total;
    }

    return width;
  };

  $.fn.textHeight = function () {
    var html_calc = $("<span>" + $(this).html() + "</span>");
    html_calc.css("font-size", $(this).css("font-size")).hide();
    html_calc.prependTo("body");
    var height = html_calc.height();
    html_calc.remove();
    return height;
  };

  Array.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  String.prototype.getCodePointLength = function () {
    return this.length - this.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length + 1;
  };

  String.fromCodePoint = function () {
    var chars = Array.prototype.slice.call(arguments);

    for (var i = chars.length; i-- > 0;) {
      var n = chars[i] - 65536;
      if (n >= 0) chars.splice(i, 1, 55296 + (n >> 10), 56320 + (n & 1023));
    }

    return String.fromCharCode.apply(null, chars);
  };

  $.fn.rate = function (options) {
    if (options === undefined || _typeof(options) === "object") {
      return this.each(function () {
        if (!$.data(this, "rate")) {
          $.data(this, "rate", new Rate(this, options));
        }
      });
    } else if (typeof options === "string") {
      var args = arguments;
      var returns;
      this.each(function () {
        var instance = $.data(this, "rate");

        if (instance instanceof Rate && typeof instance[options] === "function") {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }

        if (options === "destroy") {
          $(instance.element).off();
          $.data(this, "rate", null);
        }
      });
      return returns !== undefined ? returns : this;
    }
  };

  function Rate(element, options) {
    this.element = element;
    this.settings = $.extend({}, $.fn.rate.settings, options);
    this.set_faces = {};
    this.build();
  }

  Rate.prototype.build = function () {
    this.layers = {};
    this.value = 0;
    this.raise_select_layer = false;

    if (this.settings.initial_value) {
      this.value = this.settings.initial_value;
    }

    if ($(this.element).attr("data-rate-value")) {
      this.value = $(this.element).attr("data-rate-value");
    }

    var selected_width = this.value / this.settings.max_value * 100;

    if (typeof this.settings.symbols[this.settings.selected_symbol_type] === "string") {
      var symbol = this.settings.symbols[this.settings.selected_symbol_type];
      this.settings.symbols[this.settings.selected_symbol_type] = {};
      this.settings.symbols[this.settings.selected_symbol_type]["base"] = symbol;
      this.settings.symbols[this.settings.selected_symbol_type]["selected"] = symbol;
      this.settings.symbols[this.settings.selected_symbol_type]["hover"] = symbol;
    }

    var base_layer = this.addLayer("base-layer", 100, this.settings.symbols[this.settings.selected_symbol_type]["base"], true);
    var select_layer = this.addLayer("select-layer", selected_width, this.settings.symbols[this.settings.selected_symbol_type]["selected"], true);
    var hover_layer = this.addLayer("hover-layer", 0, this.settings.symbols[this.settings.selected_symbol_type]["hover"], false);
    this.layers["base_layer"] = base_layer;
    this.layers["select_layer"] = select_layer;
    this.layers["hover_layer"] = hover_layer;
    $(this.element).on("mousemove", $.proxy(this.hover, this));
    $(this.element).on("click", $.proxy(this.select, this));
    $(this.element).on("mouseleave", $.proxy(this.mouseout, this));
    $(this.element).css({
      "-webkit-touch-callout": "none",
      "-webkit-user-select": "none",
      "-khtml-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none"
    });

    if (this.settings.hasOwnProperty("update_input_field_name")) {
      this.settings.update_input_field_name.val(this.value);
    }
  };

  Rate.prototype.addLayer = function (layer_name, visible_width, symbol, visible) {
    var layer_body = "<div>";

    for (var i = 0; i < this.settings.max_value; i++) {
      if (Array.isArray(symbol)) {
        if (this.settings.convert_to_utf8) {
          symbol[i] = String.fromCodePoint(symbol[i]);
        }

        layer_body += "<span>" + symbol[i] + "</span>";
      } else {
        if (this.settings.convert_to_utf8) {
          symbol = String.fromCodePoint(symbol);
        }

        layer_body += "<span>" + symbol + "</span>";
      }
    }

    layer_body += "</div>";
    var layer = $(layer_body).addClass("rate-" + layer_name).appendTo(this.element);
    $(layer).css({
      width: visible_width + "%",
      height: $(layer).children().eq(0).textHeight(),
      overflow: "hidden",
      position: "absolute",
      top: 0,
      display: visible ? "block" : "none",
      "white-space": "nowrap"
    });
    $(this.element).css({
      width: $(layer).textWidth() + "px",
      height: $(layer).height(),
      position: "relative",
      cursor: this.settings.cursor
    });
    return layer;
  };

  Rate.prototype.updateServer = function () {
    if (this.settings.url != undefined) {
      $.ajax({
        url: this.settings.url,
        type: this.settings.ajax_method,
        data: $.extend({}, {
          value: this.getValue()
        }, this.settings.additional_data),
        success: $.proxy(function (data) {
          $(this.element).trigger("updateSuccess", [data]);
        }, this),
        error: $.proxy(function (jxhr, msg, err) {
          $(this.element).trigger("updateError", [jxhr, msg, err]);
        }, this)
      });
    }
  };

  Rate.prototype.getValue = function () {
    return this.value;
  };

  Rate.prototype.hover = function (ev) {
    var pad = parseInt($(this.element).css("padding-left").replace("px", ""));
    var x = ev.pageX - $(this.element).offset().left - pad;
    var val = this.toValue(x, true);

    if (val != this.value) {
      this.raise_select_layer = false;
    }

    if (!this.raise_select_layer && !this.settings.readonly) {
      var visible_width = this.toWidth(val);
      this.layers.select_layer.css({
        display: "none"
      });

      if (!this.settings.only_select_one_symbol) {
        this.layers.hover_layer.css({
          width: visible_width + "%",
          display: "block"
        });
      } else {
        var index_value = Math.floor(val);
        this.layers.hover_layer.css({
          width: "100%",
          display: "block"
        });
        this.layers.hover_layer.children("span").css({
          visibility: "hidden"
        });
        this.layers.hover_layer.children("span").eq(index_value != 0 ? index_value - 1 : 0).css({
          visibility: "visible"
        });
      }
    }
  };

  Rate.prototype.select = function (ev) {
    if (!this.settings.readonly) {
      var old_value = this.getValue();
      var pad = parseInt($(this.element).css("padding-left").replace("px", ""));
      var x = ev.pageX - $(this.element).offset().left - pad;
      var selected_width = this.toWidth(this.toValue(x, true));
      this.setValue(this.toValue(selected_width));
      this.raise_select_layer = true;
    }
  };

  Rate.prototype.mouseout = function () {
    this.layers.hover_layer.css({
      display: "none"
    });
    this.layers.select_layer.css({
      display: "block"
    });
  };

  Rate.prototype.toWidth = function (val) {
    return val / this.settings.max_value * 100;
  };

  Rate.prototype.toValue = function (width, in_pixels) {
    var val;

    if (in_pixels) {
      val = width / this.layers.base_layer.textWidth() * this.settings.max_value;
    } else {
      val = width / 100 * this.settings.max_value;
    }

    var temp = val / this.settings.step_size;

    if (temp - Math.floor(temp) < 5e-5) {
      val = Math.round(val / this.settings.step_size) * this.settings.step_size;
    }

    val = Math.ceil(val / this.settings.step_size) * this.settings.step_size;
    val = val > this.settings.max_value ? this.settings.max_value : val;
    return val;
  };

  Rate.prototype.getElement = function (layer_name, index) {
    return $(this.element).find(".rate-" + layer_name + " span").eq(index - 1);
  };

  Rate.prototype.getLayers = function () {
    return this.layers;
  };

  Rate.prototype.setFace = function (value, face) {
    this.set_faces[value] = face;
  };

  Rate.prototype.setAdditionalData = function (data) {
    this.settings.additional_data = data;
  };

  Rate.prototype.getAdditionalData = function () {
    return this.settings.additional_data;
  };

  Rate.prototype.removeFace = function (value) {
    delete this.set_faces[value];
  };

  Rate.prototype.setValue = function (value) {
    if (!this.settings.readonly) {
      if (value < 0) {
        value = 0;
      } else if (value > this.settings.max_value) {
        value = this.settings.max_value;
      }

      var old_value = this.getValue();
      this.value = value;
      var change_event = $(this.element).trigger("change", {
        from: old_value,
        to: this.value
      });
      $(this.element).find(".rate-face").remove();
      $(this.element).find("span").css({
        visibility: "visible"
      });
      var index_value = Math.ceil(this.value);

      if (this.set_faces.hasOwnProperty(index_value)) {
        var face = "<div>" + this.set_faces[index_value] + "</div>";
        var base_layer_element = this.getElement("base-layer", index_value);
        var select_layer_element = this.getElement("select-layer", index_value);
        var hover_layer_element = this.getElement("hover-layer", index_value);
        var left_pos = base_layer_element.textWidth() * (index_value - 1) + (base_layer_element.textWidth() - $(face).textWidth()) / 2;
        $(face).appendTo(this.element).css({
          display: "inline-block",
          position: "absolute",
          left: left_pos
        }).addClass("rate-face");
        base_layer_element.css({
          visibility: "hidden"
        });
        select_layer_element.css({
          visibility: "hidden"
        });
        hover_layer_element.css({
          visibility: "hidden"
        });
      }

      if (!this.settings.only_select_one_symbol) {
        var width = this.toWidth(this.value);
        this.layers.select_layer.css({
          display: "block",
          width: width + "%",
          height: this.layers.base_layer.css("height")
        });
        this.layers.hover_layer.css({
          display: "none",
          height: this.layers.base_layer.css("height")
        });
      } else {
        var width = this.toWidth(this.settings.max_value);
        this.layers.select_layer.css({
          display: "block",
          width: width + "%",
          height: this.layers.base_layer.css("height")
        });
        this.layers.hover_layer.css({
          display: "none",
          height: this.layers.base_layer.css("height")
        });
        this.layers.select_layer.children("span").css({
          visibility: "hidden"
        });
        this.layers.select_layer.children("span").eq(index_value != 0 ? index_value - 1 : 0).css({
          visibility: "visible"
        });
      }

      $(this.element).attr("data-rate-value", this.value);

      if (this.settings.change_once) {
        this.settings.readonly = true;
      }

      this.updateServer();
      var change_event = $(this.element).trigger("afterChange", {
        from: old_value,
        to: this.value
      });

      if (this.settings.hasOwnProperty("update_input_field_name")) {
        this.settings.update_input_field_name.val(this.value);
      }
    }
  };

  Rate.prototype.increment = function () {
    this.setValue(this.getValue() + this.settings.step_size);
  };

  Rate.prototype.decrement = function () {
    this.setValue(this.getValue() - this.settings.step_size);
  };

  $.fn.rate.settings = {
    max_value: 5,
    step_size: .5,
    initial_value: 0,
    symbols: {
      utf8_star: {
        base: "☆",
        hover: "★",
        selected: "★"
      },
      utf8_hexagon: {
        base: "⬡",
        hover: "⬢",
        selected: "⬢"
      },
      hearts: "&hearts;",
      fontawesome_beer: '<i class="fa fa-beer"></i>',
      fontawesome_star: {
        base: '<i class="fa fa-star-o"></i>',
        hover: '<i class="fa fa-star"></i>',
        selected: '<i class="fa fa-star"></i>'
      },
      utf8_emoticons: {
        base: [128549, 128531, 128530, 128516],
        hover: [128549, 128531, 128530, 128516],
        selected: [128549, 128531, 128530, 128516]
      }
    },
    selected_symbol_type: "utf8_star",
    convert_to_utf8: false,
    cursor: "default",
    readonly: false,
    change_once: false,
    only_select_one_symbol: false,
    ajax_method: "POST",
    additional_data: {}
  };
})(jQuery, window);

/***/ }),

/***/ "./src/js/import/libs/ion.rangeSlider-master/js/ion.rangeSlider.min.js":
/*!*****************************************************************************!*\
  !*** ./src/js/import/libs/ion.rangeSlider-master/js/ion.rangeSlider.min.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Ion.RangeSlider, 2.3.0, © Denis Ineshin, 2010 - 2018, IonDen.com, Build date: 2018-12-12 00:00:37
!function (i) {
  !jQuery && "function" == "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (t) {
    return i(t, document, window, navigator);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : jQuery || "object" != ( false ? undefined : _typeof(exports)) ? i(jQuery, document, window, navigator) : i(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), document, window, navigator);
}(function (a, c, l, t, _) {
  "use strict";

  var i,
      s,
      o = 0,
      e = (i = t.userAgent, s = /msie\s\d+/i, 0 < i.search(s) && s.exec(i).toString().split(" ")[1] < 9 && (a("html").addClass("lt-ie9"), !0));
  Function.prototype.bind || (Function.prototype.bind = function (o) {
    var e = this,
        h = [].slice;
    if ("function" != typeof e) throw new TypeError();

    var r = h.call(arguments, 1),
        n = function n() {
      if (this instanceof n) {
        var t = function t() {};

        t.prototype = e.prototype;
        var i = new t(),
            s = e.apply(i, r.concat(h.call(arguments)));
        return Object(s) === s ? s : i;
      }

      return e.apply(o, r.concat(h.call(arguments)));
    };

    return n;
  }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, i) {
    var s;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var o = Object(this),
        e = o.length >>> 0;
    if (0 === e) return -1;
    var h = +i || 0;
    if (Math.abs(h) === 1 / 0 && (h = 0), e <= h) return -1;

    for (s = Math.max(0 <= h ? h : e - Math.abs(h), 0); s < e;) {
      if (s in o && o[s] === t) return s;
      s++;
    }

    return -1;
  });

  var h = function h(t, i, s) {
    this.VERSION = "2.3.0", this.input = t, this.plugin_count = s, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, i = i || {}, this.$cache = {
      win: a(l),
      body: a(c.body),
      input: a(t),
      cont: null,
      rs: null,
      min: null,
      max: null,
      from: null,
      to: null,
      single: null,
      bar: null,
      line: null,
      s_single: null,
      s_from: null,
      s_to: null,
      shad_single: null,
      shad_from: null,
      shad_to: null,
      edge: null,
      grid: null,
      grid_labels: []
    }, this.coords = {
      x_gap: 0,
      x_pointer: 0,
      w_rs: 0,
      w_rs_old: 0,
      w_handle: 0,
      p_gap: 0,
      p_gap_left: 0,
      p_gap_right: 0,
      p_step: 0,
      p_pointer: 0,
      p_handle: 0,
      p_single_fake: 0,
      p_single_real: 0,
      p_from_fake: 0,
      p_from_real: 0,
      p_to_fake: 0,
      p_to_real: 0,
      p_bar_x: 0,
      p_bar_w: 0,
      grid_gap: 0,
      big_num: 0,
      big: [],
      big_w: [],
      big_p: [],
      big_x: []
    }, this.labels = {
      w_min: 0,
      w_max: 0,
      w_from: 0,
      w_to: 0,
      w_single: 0,
      p_min: 0,
      p_max: 0,
      p_from_fake: 0,
      p_from_left: 0,
      p_to_fake: 0,
      p_to_left: 0,
      p_single_fake: 0,
      p_single_left: 0
    };
    var o,
        e,
        h,
        r = this.$cache.input,
        n = r.prop("value");

    for (h in o = {
      skin: "flat",
      type: "single",
      min: 10,
      max: 100,
      from: null,
      to: null,
      step: 1,
      min_interval: 0,
      max_interval: 0,
      drag_interval: !1,
      values: [],
      p_values: [],
      from_fixed: !1,
      from_min: null,
      from_max: null,
      from_shadow: !1,
      to_fixed: !1,
      to_min: null,
      to_max: null,
      to_shadow: !1,
      prettify_enabled: !0,
      prettify_separator: " ",
      prettify: null,
      force_edges: !1,
      keyboard: !0,
      grid: !1,
      grid_margin: !0,
      grid_num: 4,
      grid_snap: !1,
      hide_min_max: !1,
      hide_from_to: !1,
      prefix: "",
      postfix: "",
      max_postfix: "",
      decorate_both: !0,
      values_separator: " — ",
      input_values_separator: ";",
      disable: !1,
      block: !1,
      extra_classes: "",
      scope: null,
      onStart: null,
      onChange: null,
      onFinish: null,
      onUpdate: null
    }, "INPUT" !== r[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", r[0]), (e = {
      skin: r.data("skin"),
      type: r.data("type"),
      min: r.data("min"),
      max: r.data("max"),
      from: r.data("from"),
      to: r.data("to"),
      step: r.data("step"),
      min_interval: r.data("minInterval"),
      max_interval: r.data("maxInterval"),
      drag_interval: r.data("dragInterval"),
      values: r.data("values"),
      from_fixed: r.data("fromFixed"),
      from_min: r.data("fromMin"),
      from_max: r.data("fromMax"),
      from_shadow: r.data("fromShadow"),
      to_fixed: r.data("toFixed"),
      to_min: r.data("toMin"),
      to_max: r.data("toMax"),
      to_shadow: r.data("toShadow"),
      prettify_enabled: r.data("prettifyEnabled"),
      prettify_separator: r.data("prettifySeparator"),
      force_edges: r.data("forceEdges"),
      keyboard: r.data("keyboard"),
      grid: r.data("grid"),
      grid_margin: r.data("gridMargin"),
      grid_num: r.data("gridNum"),
      grid_snap: r.data("gridSnap"),
      hide_min_max: r.data("hideMinMax"),
      hide_from_to: r.data("hideFromTo"),
      prefix: r.data("prefix"),
      postfix: r.data("postfix"),
      max_postfix: r.data("maxPostfix"),
      decorate_both: r.data("decorateBoth"),
      values_separator: r.data("valuesSeparator"),
      input_values_separator: r.data("inputValuesSeparator"),
      disable: r.data("disable"),
      block: r.data("block"),
      extra_classes: r.data("extraClasses")
    }).values = e.values && e.values.split(","), e) {
      e.hasOwnProperty(h) && (e[h] !== _ && "" !== e[h] || delete e[h]);
    }

    n !== _ && "" !== n && ((n = n.split(e.input_values_separator || i.input_values_separator || ";"))[0] && n[0] == +n[0] && (n[0] = +n[0]), n[1] && n[1] == +n[1] && (n[1] = +n[1]), i && i.values && i.values.length ? (o.from = n[0] && i.values.indexOf(n[0]), o.to = n[1] && i.values.indexOf(n[1])) : (o.from = n[0] && +n[0], o.to = n[1] && +n[1])), a.extend(o, i), a.extend(o, e), this.options = o, this.update_check = {}, this.validate(), this.result = {
      input: this.$cache.input,
      slider: null,
      min: this.options.min,
      max: this.options.max,
      from: this.options.from,
      from_percent: 0,
      from_value: null,
      to: this.options.to,
      to_percent: 0,
      to_value: null
    }, this.init();
  };

  h.prototype = {
    init: function init(t) {
      this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene();
    },
    append: function append() {
      var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
      this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize");
    },
    setTopHandler: function setTopHandler() {
      var t = this.options.min,
          i = this.options.max,
          s = this.options.from,
          o = this.options.to;
      t < s && o === i ? this.$cache.s_from.addClass("type_last") : o < i && this.$cache.s_to.addClass("type_last");
    },
    changeLevel: function changeLevel(t) {
      switch (t) {
        case "single":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
          break;

        case "from":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
          break;

        case "to":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
          break;

        case "both":
          this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last");
      }
    },
    appendDisableMask: function appendDisableMask() {
      this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled");
    },
    removeDisableMask: function removeDisableMask() {
      this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled");
    },
    remove: function remove() {
      this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), e && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id);
    },
    bindEvents: function bindEvents() {
      this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), e && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))));
    },
    pointerFocus: function pointerFocus(t) {
      var i, s;
      this.target || (i = (s = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, i += s.width() / 2 - 1, this.pointerClick("single", {
        preventDefault: function preventDefault() {},
        pageX: i
      }));
    },
    pointerMove: function pointerMove(t) {
      if (this.dragging) {
        var i = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
        this.coords.x_pointer = i - this.coords.x_gap, this.calc();
      }
    },
    pointerUp: function pointerUp(t) {
      this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, e && a("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (a.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1);
    },
    pointerDown: function pointerDown(t, i) {
      i.preventDefault();
      var s = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
      2 !== i.button && ("both" === t && this.setTempMinInterval(), t || (t = this.target || "from"), this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = s - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), e && a("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene());
    },
    pointerClick: function pointerClick(t, i) {
      i.preventDefault();
      var s = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
      2 !== i.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(s - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"));
    },
    key: function key(t, i) {
      if (!(this.current_plugin !== this.plugin_count || i.altKey || i.ctrlKey || i.shiftKey || i.metaKey)) {
        switch (i.which) {
          case 83:
          case 65:
          case 40:
          case 37:
            i.preventDefault(), this.moveByKey(!1);
            break;

          case 87:
          case 68:
          case 38:
          case 39:
            i.preventDefault(), this.moveByKey(!0);
        }

        return !0;
      }
    },
    moveByKey: function moveByKey(t) {
      var i = this.coords.p_pointer,
          s = (this.options.max - this.options.min) / 100;
      s = this.options.step / s, t ? i += s : i -= s, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * i), this.is_key = !0, this.calc();
    },
    setMinMax: function setMinMax() {
      if (this.options) {
        if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void (this.$cache.max[0].style.display = "none");
        if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));else {
          var t = this._prettify(this.options.min),
              i = this._prettify(this.options.max);

          this.result.min_pretty = t, this.result.max_pretty = i, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(i, this.options.max));
        }
        this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1);
      }
    },
    setTempMinInterval: function setTempMinInterval() {
      var t = this.result.to - this.result.from;
      null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t;
    },
    restoreOriginalMinInterval: function restoreOriginalMinInterval() {
      null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null);
    },
    calc: function calc(t) {
      if (this.options && (this.calc_count++, (10 === this.calc_count || t) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
        this.calcPointerPercent();
        var i = this.getHandleX();

        switch ("both" === this.target && (this.coords.p_gap = 0, i = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, i = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(i)), this.target) {
          case "base":
            var s = (this.options.max - this.options.min) / 100,
                o = (this.result.from - this.options.min) / s,
                e = (this.result.to - this.options.min) / s;
            this.coords.p_single_real = this.toFixed(o), this.coords.p_from_real = this.toFixed(o), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
            break;

          case "single":
            if (this.options.from_fixed) break;
            this.coords.p_single_real = this.convertToRealPercent(i), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
            break;

          case "from":
            if (this.options.from_fixed) break;
            this.coords.p_from_real = this.convertToRealPercent(i), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
            break;

          case "to":
            if (this.options.to_fixed) break;
            this.coords.p_to_real = this.convertToRealPercent(i), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;

          case "both":
            if (this.options.from_fixed || this.options.to_fixed) break;
            i = this.toFixed(i + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(i) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(i) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;

          case "both_one":
            if (this.options.from_fixed || this.options.to_fixed) break;
            var h = this.convertToRealPercent(i),
                r = this.result.from_percent,
                n = this.result.to_percent - r,
                a = n / 2,
                c = h - a,
                l = h + a;
            c < 0 && (l = (c = 0) + n), 100 < l && (c = (l = 100) - n), this.coords.p_from_real = this.calcWithStep(c), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(l), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
        }

        "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels();
      }
    },
    calcPointerPercent: function calcPointerPercent() {
      this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0;
    },
    convertToRealPercent: function convertToRealPercent(t) {
      return t / (100 - this.coords.p_handle) * 100;
    },
    convertToFakePercent: function convertToFakePercent(t) {
      return t / 100 * (100 - this.coords.p_handle);
    },
    getHandleX: function getHandleX() {
      var t = 100 - this.coords.p_handle,
          i = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
      return i < 0 ? i = 0 : t < i && (i = t), i;
    },
    calcHandlePercent: function calcHandlePercent() {
      "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
    },
    chooseHandle: function chooseHandle(t) {
      return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from";
    },
    calcMinMax: function calcMinMax() {
      this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100);
    },
    calcLabels: function calcLabels() {
      this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake));
    },
    updateScene: function updateScene() {
      this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300));
    },
    drawHandles: function drawHandles() {
      this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.bar[0].style.left = 0, this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%", this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1));
    },
    drawLabels: function drawLabels() {
      if (this.options) {
        var t,
            i,
            s,
            o,
            e,
            h = this.options.values.length,
            r = this.options.p_values;
        if (!this.options.hide_from_to) if ("single" === this.options.type) t = h ? this.decorate(r[this.result.from]) : (o = this._prettify(this.result.from), this.decorate(o, this.result.from)), this.$cache.single.html(t), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";else {
          s = h ? (this.options.decorate_both ? (t = this.decorate(r[this.result.from]), t += this.options.values_separator, t += this.decorate(r[this.result.to])) : t = this.decorate(r[this.result.from] + this.options.values_separator + r[this.result.to]), i = this.decorate(r[this.result.from]), this.decorate(r[this.result.to])) : (o = this._prettify(this.result.from), e = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(o, this.result.from), t += this.options.values_separator, t += this.decorate(e, this.result.to)) : t = this.decorate(o + this.options.values_separator + e, this.result.to), i = this.decorate(o, this.result.from), this.decorate(e, this.result.to)), this.$cache.single.html(t), this.$cache.from.html(i), this.$cache.to.html(s), this.calcLabels();
          var n = Math.min(this.labels.p_single_left, this.labels.p_from_left),
              a = this.labels.p_single_left + this.labels.p_single_fake,
              c = this.labels.p_to_left + this.labels.p_to_fake,
              l = Math.max(a, c);
          this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", l = this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", c) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", Math.max(a, c))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), n < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", l > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";
        }
      }
    },
    drawShadow: function drawShadow() {
      var t,
          i,
          s,
          o,
          e = this.options,
          h = this.$cache,
          r = "number" == typeof e.from_min && !isNaN(e.from_min),
          n = "number" == typeof e.from_max && !isNaN(e.from_max),
          a = "number" == typeof e.to_min && !isNaN(e.to_min),
          c = "number" == typeof e.to_max && !isNaN(e.to_max);
      "single" === e.type ? e.from_shadow && (r || n) ? (t = this.convertToPercent(r ? e.from_min : e.min), i = this.convertToPercent(n ? e.from_max : e.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), i = this.toFixed(i - this.coords.p_handle / 100 * i), t += this.coords.p_handle / 2, h.shad_single[0].style.display = "block", h.shad_single[0].style.left = t + "%", h.shad_single[0].style.width = i + "%") : h.shad_single[0].style.display = "none" : (e.from_shadow && (r || n) ? (t = this.convertToPercent(r ? e.from_min : e.min), i = this.convertToPercent(n ? e.from_max : e.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), i = this.toFixed(i - this.coords.p_handle / 100 * i), t += this.coords.p_handle / 2, h.shad_from[0].style.display = "block", h.shad_from[0].style.left = t + "%", h.shad_from[0].style.width = i + "%") : h.shad_from[0].style.display = "none", e.to_shadow && (a || c) ? (s = this.convertToPercent(a ? e.to_min : e.min), o = this.convertToPercent(c ? e.to_max : e.max) - s, s = this.toFixed(s - this.coords.p_handle / 100 * s), o = this.toFixed(o - this.coords.p_handle / 100 * o), s += this.coords.p_handle / 2, h.shad_to[0].style.display = "block", h.shad_to[0].style.left = s + "%", h.shad_to[0].style.width = o + "%") : h.shad_to[0].style.display = "none");
    },
    writeToInput: function writeToInput() {
      "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to));
    },
    callOnStart: function callOnStart() {
      this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result));
    },
    callOnChange: function callOnChange() {
      this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result));
    },
    callOnFinish: function callOnFinish() {
      this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result));
    },
    callOnUpdate: function callOnUpdate() {
      this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result));
    },
    toggleInput: function toggleInput() {
      this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index;
    },
    convertToPercent: function convertToPercent(t, i) {
      var s,
          o = this.options.max - this.options.min,
          e = o / 100;
      return o ? (s = (i ? t : t - this.options.min) / e, this.toFixed(s)) : (this.no_diapason = !0, 0);
    },
    convertToValue: function convertToValue(t) {
      var i,
          s,
          o = this.options.min,
          e = this.options.max,
          h = o.toString().split(".")[1],
          r = e.toString().split(".")[1],
          n = 0,
          a = 0;
      if (0 === t) return this.options.min;
      if (100 === t) return this.options.max;
      h && (n = i = h.length), r && (n = s = r.length), i && s && (n = s <= i ? i : s), o < 0 && (o = +(o + (a = Math.abs(o))).toFixed(n), e = +(e + a).toFixed(n));
      var c,
          l = (e - o) / 100 * t + o,
          _ = this.options.step.toString().split(".")[1];
      return l = _ ? +l.toFixed(_.length) : (l /= this.options.step, +(l *= this.options.step).toFixed(0)), a && (l -= a), (c = _ ? +l.toFixed(_.length) : this.toFixed(l)) < this.options.min ? c = this.options.min : c > this.options.max && (c = this.options.max), c;
    },
    calcWithStep: function calcWithStep(t) {
      var i = Math.round(t / this.coords.p_step) * this.coords.p_step;
      return 100 < i && (i = 100), 100 === t && (i = 100), this.toFixed(i);
    },
    checkMinInterval: function checkMinInterval(t, i, s) {
      var o,
          e,
          h = this.options;
      return h.min_interval ? (o = this.convertToValue(t), e = this.convertToValue(i), "from" === s ? e - o < h.min_interval && (o = e - h.min_interval) : o - e < h.min_interval && (o = e + h.min_interval), this.convertToPercent(o)) : t;
    },
    checkMaxInterval: function checkMaxInterval(t, i, s) {
      var o,
          e,
          h = this.options;
      return h.max_interval ? (o = this.convertToValue(t), e = this.convertToValue(i), "from" === s ? e - o > h.max_interval && (o = e - h.max_interval) : o - e > h.max_interval && (o = e + h.max_interval), this.convertToPercent(o)) : t;
    },
    checkDiapason: function checkDiapason(t, i, s) {
      var o = this.convertToValue(t),
          e = this.options;
      return "number" != typeof i && (i = e.min), "number" != typeof s && (s = e.max), o < i && (o = i), s < o && (o = s), this.convertToPercent(o);
    },
    toFixed: function toFixed(t) {
      return +(t = t.toFixed(20));
    },
    _prettify: function _prettify(t) {
      return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t;
    },
    prettify: function prettify(t) {
      return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
    },
    checkEdges: function checkEdges(t, i) {
      return this.options.force_edges && (t < 0 ? t = 0 : 100 - i < t && (t = 100 - i)), this.toFixed(t);
    },
    validate: function validate() {
      var t,
          i,
          s = this.options,
          o = this.result,
          e = s.values,
          h = e.length;
      if ("string" == typeof s.min && (s.min = +s.min), "string" == typeof s.max && (s.max = +s.max), "string" == typeof s.from && (s.from = +s.from), "string" == typeof s.to && (s.to = +s.to), "string" == typeof s.step && (s.step = +s.step), "string" == typeof s.from_min && (s.from_min = +s.from_min), "string" == typeof s.from_max && (s.from_max = +s.from_max), "string" == typeof s.to_min && (s.to_min = +s.to_min), "string" == typeof s.to_max && (s.to_max = +s.to_max), "string" == typeof s.grid_num && (s.grid_num = +s.grid_num), s.max < s.min && (s.max = s.min), h) for (s.p_values = [], s.min = 0, s.max = h - 1, s.step = 1, s.grid_num = s.max, s.grid_snap = !0, i = 0; i < h; i++) {
        t = +e[i], t = isNaN(t) ? e[i] : (e[i] = t, this._prettify(t)), s.p_values.push(t);
      }
      ("number" != typeof s.from || isNaN(s.from)) && (s.from = s.min), ("number" != typeof s.to || isNaN(s.to)) && (s.to = s.max), "single" === s.type ? (s.from < s.min && (s.from = s.min), s.from > s.max && (s.from = s.max)) : (s.from < s.min && (s.from = s.min), s.from > s.max && (s.from = s.max), s.to < s.min && (s.to = s.min), s.to > s.max && (s.to = s.max), this.update_check.from && (this.update_check.from !== s.from && s.from > s.to && (s.from = s.to), this.update_check.to !== s.to && s.to < s.from && (s.to = s.from)), s.from > s.to && (s.from = s.to), s.to < s.from && (s.to = s.from)), ("number" != typeof s.step || isNaN(s.step) || !s.step || s.step < 0) && (s.step = 1), "number" == typeof s.from_min && s.from < s.from_min && (s.from = s.from_min), "number" == typeof s.from_max && s.from > s.from_max && (s.from = s.from_max), "number" == typeof s.to_min && s.to < s.to_min && (s.to = s.to_min), "number" == typeof s.to_max && s.from > s.to_max && (s.to = s.to_max), o && (o.min !== s.min && (o.min = s.min), o.max !== s.max && (o.max = s.max), (o.from < o.min || o.from > o.max) && (o.from = s.from), (o.to < o.min || o.to > o.max) && (o.to = s.to)), ("number" != typeof s.min_interval || isNaN(s.min_interval) || !s.min_interval || s.min_interval < 0) && (s.min_interval = 0), ("number" != typeof s.max_interval || isNaN(s.max_interval) || !s.max_interval || s.max_interval < 0) && (s.max_interval = 0), s.min_interval && s.min_interval > s.max - s.min && (s.min_interval = s.max - s.min), s.max_interval && s.max_interval > s.max - s.min && (s.max_interval = s.max - s.min);
    },
    decorate: function decorate(t, i) {
      var s = "",
          o = this.options;
      return o.prefix && (s += o.prefix), s += t, o.max_postfix && (o.values.length && t === o.p_values[o.max] ? (s += o.max_postfix, o.postfix && (s += " ")) : i === o.max && (s += o.max_postfix, o.postfix && (s += " "))), o.postfix && (s += o.postfix), s;
    },
    updateFrom: function updateFrom() {
      this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from]);
    },
    updateTo: function updateTo() {
      this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to]);
    },
    updateResult: function updateResult() {
      this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo();
    },
    appendGrid: function appendGrid() {
      if (this.options.grid) {
        var t,
            i,
            s,
            o,
            e,
            h,
            r = this.options,
            n = r.max - r.min,
            a = r.grid_num,
            c = 0,
            l = 4,
            _ = "";

        for (this.calcGridMargin(), r.grid_snap && (a = n / r.step), 50 < a && (a = 50), s = this.toFixed(100 / a), 4 < a && (l = 3), 7 < a && (l = 2), 14 < a && (l = 1), 28 < a && (l = 0), t = 0; t < a + 1; t++) {
          for (o = l, 100 < (c = this.toFixed(s * t)) && (c = 100), e = ((this.coords.big[t] = c) - s * (t - 1)) / (o + 1), i = 1; i <= o && 0 !== c; i++) {
            _ += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(c - e * i) + '%"></span>';
          }

          _ += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', h = this.convertToValue(c), _ += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + (h = r.values.length ? r.p_values[h] : this._prettify(h)) + "</span>";
        }

        this.coords.big_num = Math.ceil(a + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(_), this.cacheGridLabels();
      }
    },
    cacheGridLabels: function cacheGridLabels() {
      var t,
          i,
          s = this.coords.big_num;

      for (i = 0; i < s; i++) {
        t = this.$cache.grid.find(".js-grid-text-" + i), this.$cache.grid_labels.push(t);
      }

      this.calcGridLabels();
    },
    calcGridLabels: function calcGridLabels() {
      var t,
          i,
          s = [],
          o = [],
          e = this.coords.big_num;

      for (t = 0; t < e; t++) {
        this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), s[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), o[t] = this.toFixed(s[t] + this.coords.big_p[t]);
      }

      for (this.options.force_edges && (s[0] < -this.coords.grid_gap && (s[0] = -this.coords.grid_gap, o[0] = this.toFixed(s[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), o[e - 1] > 100 + this.coords.grid_gap && (o[e - 1] = 100 + this.coords.grid_gap, s[e - 1] = this.toFixed(o[e - 1] - this.coords.big_p[e - 1]), this.coords.big_x[e - 1] = this.toFixed(this.coords.big_p[e - 1] - this.coords.grid_gap))), this.calcGridCollision(2, s, o), this.calcGridCollision(4, s, o), t = 0; t < e; t++) {
        i = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (i.style.marginLeft = -this.coords.big_x[t] + "%");
      }
    },
    calcGridCollision: function calcGridCollision(t, i, s) {
      var o,
          e,
          h,
          r = this.coords.big_num;

      for (o = 0; o < r && !(r <= (e = o + t / 2)); o += t) {
        h = this.$cache.grid_labels[e][0], s[o] <= i[e] ? h.style.visibility = "visible" : h.style.visibility = "hidden";
      }
    },
    calcGridMargin: function calcGridMargin() {
      this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"));
    },
    update: function update(t) {
      this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = a.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0));
    },
    reset: function reset() {
      this.input && (this.updateResult(), this.update());
    },
    destroy: function destroy() {
      this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), a.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null);
    }
  }, a.fn.ionRangeSlider = function (t) {
    return this.each(function () {
      a.data(this, "ionRangeSlider") || a.data(this, "ionRangeSlider", new h(this, t, o++));
    });
  }, function () {
    for (var h = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !l.requestAnimationFrame; ++i) {
      l.requestAnimationFrame = l[t[i] + "RequestAnimationFrame"], l.cancelAnimationFrame = l[t[i] + "CancelAnimationFrame"] || l[t[i] + "CancelRequestAnimationFrame"];
    }

    l.requestAnimationFrame || (l.requestAnimationFrame = function (t, i) {
      var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - h)),
          e = l.setTimeout(function () {
        t(s + o);
      }, o);
      return h = s + o, e;
    }), l.cancelAnimationFrame || (l.cancelAnimationFrame = function (t) {
      clearTimeout(t);
    });
  }();
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_content_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/content/content */ "./src/blocks/modules/content/content.js");
/* harmony import */ var _modules_content_content__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_content_content__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_libs_ion_rangeSlider_master_js_ion_rangeSlider_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/libs/ion.rangeSlider-master/js/ion.rangeSlider.min */ "./src/js/import/libs/ion.rangeSlider-master/js/ion.rangeSlider.min.js");
/* harmony import */ var _import_libs_ion_rangeSlider_master_js_ion_rangeSlider_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_libs_ion_rangeSlider_master_js_ion_rangeSlider_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_libs_auxiliary_rater_0831401_rater_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/libs/auxiliary-rater-0831401/rater.min */ "./src/js/import/libs/auxiliary-rater-0831401/rater.min.js");
/* harmony import */ var _import_libs_auxiliary_rater_0831401_rater_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_libs_auxiliary_rater_0831401_rater_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _import_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/general */ "./src/js/import/general.js");
/* harmony import */ var _import_general__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_general__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
//import $ from "jquery";





/***/ })

/******/ });
//# sourceMappingURL=main.js.map