"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _swiper = _interopRequireWildcard(require("swiper"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Swiper JS
function buildSliders() {
  var sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
  console.log(sliders);

  if (sliders) {
    sliders.forEach(function (slider) {
      slider.parentElement.classList.add('swiper');
      slider.classList.add('swipper-wrapper');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = slider.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var slide = _step.value;
          slide.classList.add('swiper-slide');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  }
}

;
buildSliders(); //Перечень слайдеров 

if (document.querySelector('.main-block__slider')) {
  new _swiper["default"]('.main-block__slider', {
    //Подключаем модули слайдера
    //для конкретного случая 
    modules: [_swiper.Navigation, _swiper.Pagination, _swiper.Parallax, _swiper.Autoplay],

    /* 
    effect: 'fade',
    */
    autoplay: {
      delay: 3000,
      disableOnInteration: false
    },
    // observer: true,
    observeParents: true,
    slidesPerView: 1,
    // autoHeight: true,
    speed: 800,
    spaceBetween: 50,
    parallax: true,
    //touchRatio:0,
    //simulateTouch: false,
    loop: true,
    //preloadImages: false,
    // lazy: true,
    //Dotts
    pagination: {
      el: '.controll-main-block__dotts',
      clickable: true
    },
    //  direction: 'horizontal',
    //Arrows
    // navigation : {
    //     nextEl: '.about__more .more__item_next',
    //     prevEl: '.about__more .more__item_prev',
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    on: {
      init: function init(swiper) {
        var allSlides = document.querySelector('.fraction-controll__all');
        var allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
        allSlides.innerHTML = allSlidesItems.length < 10 ? "0".concat(allSlidesItems.length) : allSlidesItems.length;
      },
      slideChange: function slideChange(swiper) {
        var currentSlide = document.querySelector('.fraction-controll__current');
        currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? "0".concat(swiper.realIndex + 1) : swiper.realIndex + 1;
      }
    }
  });
}

if (document.querySelector('.products-slider')) {
  new _swiper["default"]('.products-slider__slider', {
    //Подключаем модули слайдера
    //для конкретного случая 
    modules: [_swiper.Navigation, _swiper.Pagination, _swiper.Autoplay],

    /* 
    effect: 'fade',
    */
    // observer: true,
    observeParents: true,
    slidesPerView: 4,
    // autoHeight: true,
    autoplay: {
      delay: 3000,
      disableOnInteration: false
    },
    speed: 800,
    spaceBetween: 30,
    //touchRatio:0,
    //simulateTouch: false,
    // loop: true,
    //preloadImages: false,
    // lazy: true,
    //Dotts
    pagination: {
      el: '.products-slider__dotts',
      clickable: true,
      dynamicBullets: true
    },
    watchOverflow: true,
    //  direction: 'horizontal',
    //Arrows
    // navigation : {
    //     nextEl: '.about__more .more__item_next',
    //     prevEl: '.about__more .more__item_prev',
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
        autoHeight: true
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1450: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    on: {
      init: function init(swiper) {}
    }
  });
}

if (document.querySelector('.products-new__slider')) {
  new _swiper["default"]('.products-slider__slider', {
    //Подключаем модули слайдера
    //для конкретного случая 
    modules: [_swiper.Navigation, _swiper.Pagination, _swiper.Autoplay],

    /* 
    effect: 'fade',
    */
    // observer: true,
    observeParents: true,
    slidesPerView: 4,
    // autoHeight: true,
    autoplay: {
      delay: 3000,
      disableOnInteration: false
    },
    speed: 800,
    spaceBetween: 30,
    //touchRatio:0,
    //simulateTouch: false,
    // loop: true,
    //preloadImages: false,
    // lazy: true,
    //Dotts
    pagination: {
      el: '.products-slider__dotts',
      clickable: true,
      dynamicBullets: true
    },
    watchOverflow: true,
    //  direction: 'horizontal',
    //Arrows
    // navigation : {
    //     nextEl: '.about__more .more__item_next',
    //     prevEl: '.about__more .more__item_prev',
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
        autoHeight: true
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1450: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    on: {
      init: function init(swiper) {}
    }
  });
}