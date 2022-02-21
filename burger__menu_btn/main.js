// const burgerMenu = document.querySelector('.burgerMenu__bar');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        console.log(menuOpen)
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        console.log(menuOpen)

    }
});
