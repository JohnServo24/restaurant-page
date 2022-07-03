import {generateNavbar, clearChildren} from './base.js';
import generateHome from './home.js';

const container = document.getElementById("container");
const navbar = generateNavbar();
// generateHome(container, navbar);


// const navItems = navbar.querySelectorAll("li");
// navItems.forEach(item => {
//     item.addEventListener("click", e => {

//         clearChildren(container);

//         if(item.id === "navHome") generateHome(container, navbar);
//         else if(item.id === "navMenu") ;
//         else if(item.id === "navAbout") ;
//         else if(item.id === "navContact") ;
        
//     })
// });










