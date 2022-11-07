$(document).ready(function () {
    $(".image-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: true,
        speed: 200,
        // responsive: [
        //     {
        //         breakpoint: 1025,
        //         settings: {
        //             slidesToShow: 3,
        //         },
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             arrows: false,
        //             infinite: false,
        //         },
        //     },
        // ],
        // autoplay: true,
        // autoplaySpeed: 1000,
    });
    $(".slick-slide").on("click", function (e) {
        //get all active slide
        const firstShowSlide = Number($(".slick-active").attr("data-slick-index"))
        const currentActiveSlide = Number($(".my-active").attr("data-slick-index"))
        const nextActiveSlide = Number(e.currentTarget.getAttribute("data-slick-index"))

        console.log('firstslide', firstShowSlide)
        console.log('currentActiveSlide', currentActiveSlide)
        console.log('nextActiveSlide', nextActiveSlide)

        if (nextActiveSlide - firstShowSlide > 2) {
            $('.image-slider').on('afterChange', function () {
                $(".slick-slide").removeClass('my-active')
                if (nextActiveSlide - firstShowSlide === 3) {
                    $(`.slick-slide[data-slick-index=${firstShowSlide + 2 + 1}]`).addClass('my-active')
                }
                else {
                    $(`.slick-slide[data-slick-index=${firstShowSlide + 2 + 2}]`).addClass('my-active')
                }
            })

            $('.image-slider').slick('slickGoTo', firstShowSlide + 2)


        }
        else {

            $(".slick-slide").removeClass('my-active')
            e.currentTarget.classList.add('my-active')
        }

        // console.log(123)
    })
});