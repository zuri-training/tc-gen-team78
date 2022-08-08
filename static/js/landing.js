let menu = document.querySelector('.hamburger');

function toggleMenu() {
    let navLinks = document.querySelector('.nav-links');
    let navBtns = document.querySelector('.nav-btns');

    if (((navLinks.style.display === 'flex') && (navBtns.style.display === 'flex')) && (navLinks.style.flexDirection !== 'column')){
        
        navLinks.style.display = 'none';
        navBtns.style.display = 'none';
        console.log(true);
    }else{
        navLinks.style.display = 'flex';
        navBtns.style.display = 'flex';
        console.log(false);
    }
}

menu.addEventListener('click', (e) => {
    e.preventDefault();
    // toggleMenu();
});