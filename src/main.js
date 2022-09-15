$(".partner_owlcarousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
        },
        600: {
            items: 4,
            nav: false,
        },

        1000: {
            items: 7,
            nav: false,
        },
    },
});
$(".news_owlcarousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 2,
            nav: false,
        },
        1000: {
            items: 3,
            nav: false,
        },
    },
});
