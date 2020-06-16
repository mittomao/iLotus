(new IntersectionObserver(function(e, o) {
    if (e[0].intersectionRatio > 0) {
        document.documentElement.removeAttribute('class');
    } else {
        document.documentElement.setAttribute('class', 'stuck');
    };
})).observe(document.querySelector('.trigger'));

$('#person').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // autoplay: true,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
});

$('#person2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='fas fa-arrow-circle-right'></i>",
        "<i class='fas fa-arrow-circle-left'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
});

$('#cm').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    // navText: [
    //     "<i class='fas fa-arrow-circle-right'></i>",
    //     "<i class='fas fa-arrow-circle-left'></i>"
    // ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('#slide_destination').owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    padding: 15,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});
$('#slide_destination2').owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    padding: 15,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});

$('#slide_destination3').owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    padding: 15,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});
$('#slide_destination4').owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    padding: 15,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});

$('#slide_destination5').owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    padding: 15,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});

$('#slide_destination6').owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    padding: 15,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});








$('.slider-review').owlCarousel({
    loop: true,
    margin: 30,
    padding: 15,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        }
    }
});


function setMinHeight(class_name) {
    var min_height = 0;
    $('.' + class_name).each(function() { if ($(this).height() > min_height) min_height = $(this).height(); });
    if (min_height < 150) { min_height = 150; }
    $('.' + class_name).eq(1).css('height', min_height);
}