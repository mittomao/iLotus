$(window).scroll(function () {
    if ($(window).scrollTop() >= 1000) {
        $('.menuphu').addClass('fixed-header');
        $('.menuphu div').addClass('visible-title');
    }
    else {
        $('.menuphu').removeClass('fixed-header');
        $('.menuphu div').removeClass('visible-title');
    }
});
