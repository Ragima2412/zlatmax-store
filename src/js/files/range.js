import * as noUISlider from 'nouislider';

export function rangeInt() {

    const rangeItems = document.querySelectorAll('[data-range]');
    if (rangeItems.length) {

        rangeItems.forEach(rangeItem => {
            const fromValue = rangeItem.querySelector('[data-range-from]');
            const toValue = rangeItem.querySelector('[data-range-to]');
            const item = rangeItem.querySelector('[data-range-item]');

            console.log(fromValue, toValue,item)


          noUISlider.create(item, {
                start: [Number(fromValue.value), Number(toValue.value)], //[0,200000]
                connect: true,
                tooltips: [true, true],
                range: {
                    'min': [Number(fromValue.dataset.rangeFrom)],
                    'max': [Number(toValue.dataset.rangeTo)]
                }

            });       
            item.noUiSlider.on('update', function (values, handle) {
                fromValue.value = values[handle];
                toValue.value = values[handle];
            });

        })
    }

}
rangeInt();


// const priceSlider = document.querySelector('#range');
// if(priceSlider) {
//     let textFrom = priceSlider.getAttribute('data-from');
//     let textTo = priceSlider.getAttribute('data-to');
//     noUISlider.create(priceSlider, {
//         start:0,  //[0,200000]
//         connect: [true, false],
//         range: {
//             'min': [0],
//             'max': [200000]
//         }            

//     });

//     // const priceStart = document.getElementById('price-start');
//     // const priceEnd = document.getElementById('price-end');
//     // priceStart.addEventListener('change', setPriceValues);
//     // priceEnd.addEventListener('change', setPriceValues);
//    function setPriceValues () {
//        let priceStartValue;
//        let priceEndValue;
//         if(priceStart.value != "") {
//             priceStartValue = priceStart.value;
//         }
//         if(priceEnd.value != "") {
//          priceEndValue = priceEnd.value;
//         }
//         priceSlider.noUISlider.set([priceStartValue, priceEndValue]);
//    }
// }