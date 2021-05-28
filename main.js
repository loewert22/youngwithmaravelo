var validateEmail = function(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}
$('#email').keyup(function() {
 
    var value = $(this).val();
    var valid = validateEmail(value);
 
    if (!valid) {
        $(this).css('color', 'red');
 $('.addbut1').prop('disabled', true);
    } else {
        $(this).css('color', '#2bb673');
 $('.addbut1').prop('disabled', false);
    }
});
 
const newsletter = {};
 
newsletter.main = document.querySelector('.main');
newsletter.form = document.querySelector('.main > #singular-form');
newsletter.subs = document.querySelector('.main > #singular-form > button#subs');
newsletter.input = document.querySelector('.main>#singular-form>#email-input>input');
newsletter.submitButton = document.querySelector('.main > #singular-form > #email-input > button');
newsletter.successMessage = document.querySelector('.main > #singular-form > #success');
 
newsletter.submitDelay = 1000;
 
newsletter.clickHandler = (e) => {
    switch (e.target) {
        case newsletter.subs:
            console.log('case subs');
            newsletter.main.style.width = '37rem'
            e.target.classList.remove('shown');
            newsletter.input.classList.add('shown');
            newsletter.submitButton.classList.add('shown');
            newsletter.input.focus();
            break;
        case newsletter.submitButton:
            newsletter.submitForm();
            break;
    }
}
newsletter.handleInputKeypress = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        newsletter.submitForm();
    }
}
newsletter.submitForm = () => {
    newsletter.input.style.transition = 'all .6s ease';
    newsletter.submitButton.style.transition = 'all .6s ease';
    newsletter.input.classList.remove('shown');
    newsletter.submitButton.classList.remove('shown');
    newsletter.main.style.transition = 'all .6s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
    newsletter.main.style.width = '';
    newsletter.successMessage.classList.add('shown');
    let submission = setTimeout(() => newsletter.form.submit(), newsletter.submitDelay);
}
 
newsletter.input.addEventListener('keypress', (e) => newsletter.handleInputKeypress(e));
document.addEventListener('click', (e) => newsletter.clickHandler(e));



/* modal billede galleriet*/
let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
};

function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
};

function changeSlide(n) {
    showSlide(slideIndex += n);
};

function toSlide(n) {
    showSlide(slideIndex = n);
};

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    let modalPreviews = document.getElementsByClassName('modal-preview');

    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    };

    slides[slideIndex - 1].style.display = 'block';
    modalPreviews[slideIndex - 1].className += ' active';
};