
$(document).ready(function(){
    $(".button").click(function(){
        var name = $(this).attr('data-filter');
        if(name == "all"){
            $(".shot-thumbnail").show('2000');
        }else{
            $(".shot-thumbnail").not("."+name).hide('2000');
            $(".shot-thumbnail").filter("."+name).show('2000');
        }
    })

    $(".navigation a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})

//cases - list

var galleryTop = new Swiper('.gallery-top', {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 50,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    direction: 'vertical',
    slidesPerView: 4,
    slideToClickedSlide: true,
    spaceBetween: 35,
    loopedSlides: 50,
    speed: 800,
    autoplay: true,
    loop: true,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

// reviews

var swiper = new Swiper(".revSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// partners

var swiperPart = new Swiper(".partSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
});

// catalog

var swiper = new Swiper(".catalogSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed: 900,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

