$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

    });
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Frontend Developer", "Problem Solver"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbwMoeFViIzKy2yAfswPbM87UXLYe2sBnDfLiQxchl6zYfrReJlMNAlWRW8SMmOgtbKV/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

