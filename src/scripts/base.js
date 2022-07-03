const generateNavbar = () => {
    const navbar = document.createElement("navbar");
    const ul = document.createElement("ul");
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const about = document.createElement("li");
    const contact = document.createElement("li");

    navbar.id = 'navbar';
    ul.id = 'navUl';
    home.id = 'navHome';
    menu.id = 'navMenu';
    about.id = 'navAbout';
    contact.id = 'navContact';

    navbar.classList.add("navbar");

    home.textContent = "Home";
    menu.textContent = "Menu";
    about.textContent = "About";
    contact.textContent = "Contact";

    navbar.append(ul);
    ul.append(home);
    ul.append(menu);
    ul.append(about);
    ul.append(contact);

    return navbar;
}

const clearChildren = container => {
    while(container.firstChild) container.firstChild.remove();
}

export {generateNavbar, clearChildren};