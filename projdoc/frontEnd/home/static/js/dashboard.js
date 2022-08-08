// Mobile reponsiveness
let menu = document.querySelector('.hamburger');

let addBtns = document.querySelector('.add-btns')

function toggleMenu() {
    

    if ((addBtns.style.display === 'flex') && (addBtns.style.flexDirection !== 'column')){
        
        addBtns.style.display = 'none';
        console.log(true);
    }else{
        addBtns.style.display = 'flex';
        console.log(false);
    }
}

menu.addEventListener('click', (e) => {
    e.preventDefault();
    // toggleMenu();
});


// To get the copyright year
let year = document.getElementById('year');
let yyyy = new Date();
year.textContent = yyyy.getFullYear();