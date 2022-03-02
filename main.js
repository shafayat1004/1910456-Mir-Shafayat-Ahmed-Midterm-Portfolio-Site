function navbarMod() {
    if(isMobile){
        navbar.classList.add("fixed-bottom");
        navbar.classList.remove("sticky-top");
    }
    else{
        navbar.classList.remove("fixed-bottom");
        navbar.classList.add("sticky-top");
    }
}

let navbar = document.querySelector(".navbar");
let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
// console.log(navbar);
navbarMod();