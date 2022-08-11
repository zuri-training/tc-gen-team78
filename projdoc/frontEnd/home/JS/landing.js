// Mobile reponsiveness
let menu = document.querySelector('.hamburger');
let menuClose = document.querySelector('.menu-btn');

function toggleMenu() {
    let navLinks = document.querySelector('.nav-links');
    let navBtns = document.querySelector('.nav-btns');
    let header = document.querySelector(".header");
    let navbar = document.querySelector('.nav-js');

    if (((navLinks.style.display === 'flex') && (navBtns.style.display === 'flex')) && (navLinks.style.flexDirection !== 'column')){
        menuClose.src = './assets/menu.svg';
        navLinks.style.display = 'none';
        navBtns.style.display = 'none';
        navbar.style.height = 'auto';
        navbar.style.backgroundColor = '#fff';
        
        console.log(true);
    }else{
        navLinks.style.display = 'flex';
        navBtns.style.display = 'flex';
        // addBtns.style.display = 'flex';
        menuClose.src = './assets/close-circle.svg';
        navbar.style.height = '100vh';
        navbar.style.backgroundColor = '#721121';
        navbar.style.color = '#fff';
        header.style.paddingTop = '0px';
        console.log(false);
    }
}

menu.addEventListener('click', (e) => {
    e.preventDefault();
    // toggleMenu();
});



// Carousel

//To get the carousel buttons
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let skipOneBtn = document.querySelector('.skip-btn');


// To get the review container and review card
let reviewWrap = document.querySelector('.review-wrapper');
let card = reviewWrap.getElementsByClassName('review-card');

//Funtion to slide to next card
function next() {
    reviewWrap.append(card[0]);
}


//Funtion to slide to prev card
function prev() {
    reviewWrap.prepend(card[card.length -1]);
}

// function skipOne() {
//     reviewWrap.append(card[-1]);
// }


//To prevent reload
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
})

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
})

// skipOneBtn.addEventListener('click', (e) => {
//     e.preventDefault();
// })


// Footer
let year = document.getElementById('year');
let yyyy = new Date();
year.textContent = yyyy.getFullYear();