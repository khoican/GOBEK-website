// shading pada navbar
let getHeight = document.querySelector('.hero').clientHeight;
let getHeader = document.querySelector('header');

window.onscroll = function() {
    if(document.body.scrollTop > getHeight - 50 || document.documentElement.scrollTop > getHeight - 50){
        getHeader.style.backgroundColor = 'rgba(0,0,0,.5)';
    } else {
        getHeader.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

// rating
let getStar = document.querySelectorAll('.star');

for(let i = 0; i < getStar.length; i++) {
    getStar[i].addEventListener('click', function() {
        for(let j = 0; j <= i; j++) {
            getStar[j].classList.remove('bi-star')
            getStar[j].classList.add('bi-star-fill')
            
            for(let k = getStar.length-1; k > j; k--) {
                getStar[k].classList.remove('bi-star-fill')
                getStar[k].classList.add('bi-star')
            }
        }
    })
}

// hamburger
let getHamburger = document.querySelector('.hamburger');
let getNavbar = document.querySelector('nav');

getHamburger.addEventListener('click', function() {
    getHamburger.classList.toggle('close')
    getNavbar.classList.toggle('open')
})