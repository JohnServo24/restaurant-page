import {generateNavbar, clearChildren} from './base.js';
import generateHome from './home.js';
import generateMenu from './menu.js';
import generateAbout from './about.js';
import generateContact from './contact.js';

import "../styles/contact.scss";

const container = document.getElementById("container");
const navbar = generateNavbar();
generateHome(container, navbar);


const navItems = navbar.querySelectorAll("li");
navItems.forEach(item => {
    item.addEventListener("click", e => {

        clearChildren(container);

        if(item.id === "navHome") generateHome(container, navbar);
        else if(item.id === "navMenu") generateMenu(container, navbar);
        else if(item.id === "navAbout") generateAbout(container, navbar);
        else if(item.id === "navContact") generateContact(container, navbar);
    })
});










