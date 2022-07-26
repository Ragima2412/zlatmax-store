
const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];

        initRatings(rating);
    }

    function initRatings(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            serRating(rating);
        }

    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function serRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {

            const ratingItem = ratingItems[index];

            ratingItem.addEventListener('mouseenter', function (e) {
                initRatingVars(rating);
                setRatingActiveWidth(ratingItem.value);
            })

            ratingItem.addEventListener('mouseleave', function (e) {
                setRatingActiveWidth();

            })

            ratingItem.addEventListener('click', function (e) {
                initRatingVars(rating);

                if (rating.dataset.ajax) {
                    setRatingValue(ratingItem.value, rating);
                } else {
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
                }
            })

        }
    }
    async function setRatingValue(value, rating) {
        if (!rating.classList.contains('rating_sending')) {
            rating.classList.add('rating_sending');

            //Отправка данных на сервер

            let response = await fetch('rating.json', {
                method: 'GET',
                //    body: JSON.stringify({
                //        userRating: value
                //    }),
                //  headers: {
                //        'content-type': 'application/json'
                //    }
            });
             
            if (response.ok) {
                const result = await response.json();
                //Получаем рейтинг

                const newRating = result.newRating;

                ratingValue.innerHTML = newRating;

                setRatingActiveWidth();
                // rating.classList.remove('rating_sending');
            } else {
                console.log("Error");

                rating.classList.remove('rating_sending');
            }
        }
    }
}
