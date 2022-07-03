import '../styles/contact.scss';
import contact from '../assets/images/contact.jpg';

const generateContact = (container, nav) => {
    const topSection = document.createElement("section");
    const title = document.createElement("h1");
    const hero = document.createElement("div");
    const heroText = document.createElement("h1");

    const botSection = document.createElement("section");
    const contacts = document.createElement("div");
    const telephone = document.createElement("div");
    const email = document.createElement("div");

    topSection.classList.add("top");
    hero.classList.add("hero");
    botSection.classList.add("bot");
    contacts.classList.add("contacts");
    telephone.classList.add("item");
    email.classList.add("item");

    topSection.append(title);
    topSection.append(hero);
    hero.append(heroText);

    botSection.append(contacts);
    contacts.append(telephone);
    contacts.append(email);

    container.append(nav);
    container.append(topSection);
    container.append(botSection);
    container.setAttribute("data-page", "contacts");

    hero.style.background = `url('${contact}')`;
    hero.style.backgroundSize = 'cover';

    title.textContent = "Contacts";
    heroText.textContent = "Get in touch"; 
}

export default generateContact;