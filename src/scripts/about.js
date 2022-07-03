import '../styles/about.scss';
import about from '../assets/images/about.jpg';

const createEssay = (paragraph, num) => {
    for(let i = 0; i < num; i++) {
        paragraph.innerHTML += `&nbsp&nbsp&nbsp&nbsp
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc nulla metus, tristique sed tincidunt et, cursus eu augue. 
            Sed quis pellentesque enim. Pellentesque eu orci id enim
            facilisis semper. Fusce laoreet dui ac dapibus congue. Donec 
            aliquam aliquam nibh, quis posuere magna molestie at. Pellentesque 
            pulvinar sapien nibh, sed hendrerit ligula scelerisque ut. Nulla 
            pharetra eleifend massa, ornare luctus sem aliquet in. Suspendisse
            tristique lacus vel dui dictum porttitor. Integer a justo id neque 
            aliquam mvulputate a nec mi. Praesent dolor felis, malesuada at
            aliquam sed, interdum vitae augue. Nam posuere tellus ac ante 
            ultrices, at dapibus felis porta. <br><br>`;
    }
}

const generateAbout = (container, nav) => {
    const topSection = document.createElement("section");
    const title = document.createElement("h1");
    const hero = document.createElement("div");
    const heroText = document.createElement("h1");

    const botSection = document.createElement("section");
    const paragraph = document.createElement("p");

    topSection.classList.add("top");
    hero.classList.add("hero");
    botSection.classList.add("bot");

    topSection.append(title);
    topSection.append(hero);
    hero.append(heroText);

    botSection.append(paragraph);

    container.append(nav);
    container.append(topSection);
    container.append(botSection);
    container.setAttribute("data-page", "about");

    hero.style.background = `url('${about}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundRepeat = 'no-repeat';
    title.textContent = "About Us";
    heroText.innerHTML = "Lorem ipsum dolor sit amet, <br> " +
                            "consectetur adipiscing elit!";
    createEssay(paragraph, 4);
}



export default generateAbout;