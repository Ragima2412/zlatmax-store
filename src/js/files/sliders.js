 // import Swiper JS
 import Swiper, {
     Navigation,
     Pagination,
     Parallax,
     Autoplay,
     Thumbs
 } from 'swiper';

 function buildSliders() {
     let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
     console.log(sliders)
     if (sliders) {
         sliders.forEach(slider => {
             slider.parentElement.classList.add('swiper');
             slider.classList.add('swipper-wrapper');
             for (const slide of slider.children) {
                 slide.classList.add('swiper-slide');
             }
         })
     }
 };

 buildSliders();


 //Перечень слайдеров 

 if (document.querySelector('.main-block__slider')) {
     new Swiper('.main-block__slider', {
         //Подключаем модули слайдера
         //для конкретного случая 
         modules: [Navigation, Pagination, Parallax, Autoplay],
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
             clickable: true,
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
             init: function (swiper) {
                 const allSlides = document.querySelector('.fraction-controll__all');
                 const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
                 allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
             },
             slideChange: function (swiper) {
                 const currentSlide = document.querySelector('.fraction-controll__current');
                 currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
             }
         }
     })
 }


 if (document.querySelector('.products-slider')) {
     new Swiper('.products-slider__slider', {
         //Подключаем модули слайдера
         //для конкретного случая 
         modules: [Navigation, Pagination, Autoplay],
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
             dynamicBullets: true,
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
                 spaceBetween: 10,
                //  autoHeight: true,
             },

             768: {
                 slidesPerView: 2,
                 spaceBetween: 20,
             },

             992: {
                 slidesPerView: 3,
                 spaceBetween: 20,
             },
             1450: {
                 slidesPerView: 4,
                 spaceBetween: 30,
             },
         },
         on: {
             init: function (swiper) {

             }
         }
     })
 }

 if (document.querySelector('.products-new__slider')) {
     new Swiper('.products-new__slider', {
         //Подключаем модули слайдера
         //для конкретного случая 
         modules: [Navigation, Pagination, Autoplay],
         /* 
       effect: 'fade',
    */
         // observer: true,
         observeParents: true,
         slidesPerView: 3,
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
             el: '.products-new__dotts',
             clickable: true,
             dynamicBullets: true,
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
                 spaceBetween: 10,
                //  autoHeight: true,
             },

            768: {
                 slidesPerView: 2,
                 spaceBetween: 20,
             },

            992: {
                 slidesPerView: 2,
                 spaceBetween: 20,
             },
            1330: {
                 slidesPerView: 3,
                 spaceBetween: 30,
             },
         },
         //  on: {
         //      init: function (swiper) {

         //      }
         //  }
     })
 }


if (document.querySelector('.thumbs-images')) {
    const thumbsSwiper =   new Swiper('.thumbs-images', {
        //Подключаем модули слайдера
        //для конкретного случая 
        modules: [Navigation, Pagination, Autoplay, Thumbs],
        /* 
      effect: 'fade',
   */
        // observer: true,
        observeParents: true,
        slidesPerView: 4,
        // autoHeight: true,    
      
        speed: 800,
        spaceBetween: 16,
        //touchRatio:0,
        //simulateTouch: false,
        // loop: true,
        //preloadImages: false,
        // lazy: true,
        //Dotts
        pagination: {
            el: '.products-new__dotts',
            clickable: true,
            dynamicBullets: true,
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

           992: {
                slidesPerView: 3,
            },
           1330: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
        },
        //  on: {
        //      init: function (swiper) {

        //      }
        //  }
    })

   
        new Swiper('.images-product__slider', {
            //Подключаем модули слайдера
            //для конкретного случая 
            modules: [Navigation, Pagination, Autoplay, Thumbs],
            /* 
          effect: 'fade',
       */
            // observer: true,
            observeParents: true,
            slidesPerView: 1,
            // autoHeight: true,
            autoplay: {
                delay: 3000,
                disableOnInteration: false
            },
            thumbs: {
               swiper: thumbsSwiper
            },
            speed: 800,
            spaceBetween: 30,
            //touchRatio:0,
            //simulateTouch: false,
            // loop: true,
            //preloadImages: false,
            // lazy: true,
            //Dotts
            // pagination: {
            //     el: '.products-new__dotts',
            //     clickable: true,
            //     dynamicBullets: true,
            // },
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
            //  on: {
            //      init: function (swiper) {
     
            //      }
            //  }
        })   
}



