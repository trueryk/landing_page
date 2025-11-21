(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.rollup').removeClass('invisible')
        $('nav .navbar-brand img').attr('src', 'images/galinha3.png')
    } else {
        $('.rollup').addClass('invisible')
        $('nav .navbar-brand img').attr('src', 'images/galinha.png')
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 1000 && $(this).scrollTop() < 1500) {
        $('nav .navbar-brand img').attr('src', 'images/galinha2.png')
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 1500) {
        $('nav .navbar-brand img').attr('src', 'images/galinha4.png')
    }
})

$('.botao-navbar').click(function () {
    if( !($('.navbar').hasClass('fundo-opaco')) ) {
        $('.navbar').addClass('fundo-opaco')
    }
    else {
        $('.navbar').removeClass('fundo-opaco')
    }
})

