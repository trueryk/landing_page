$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.rollup').removeClass('invisible')
        $('nav img').attr('src', 'images/galinha3.png')
    } else {
        $('.rollup').addClass('invisible')
        $('nav img').attr('src', 'images/galinha.png')
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 1000 && $(this).scrollTop() < 1500) {
        $('section').addClass('bg-info')
        $('nav img').attr('src', 'images/galinha2.png')
    } else {
        $('section').removeClass('bg-info')
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 1500) {
        $('nav img').attr('src', 'images/galinha4.png')
    }
})