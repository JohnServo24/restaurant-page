import '../styles/home.scss';
import home from '../assets/images/home.jpg';

const generateHome = (container, nav) => {
    const leftSection = document.createElement("section");
    const title = document.createElement("div");
    const name = document.createElement("p");

    const rightSection = document.createElement("section");
    const text = document.createElement("div");
    const textp1 = document.createElement("p");
    const textp2 = document.createElement("p");

    rightSection.id = "right-section";

    leftSection.classList.add("left");
    title.classList.add("title");

    rightSection.classList.add("right");
    text.classList.add("text");

    container.append(leftSection);
    leftSection.append(title);
    title.append(name);

    container.append(rightSection);
    rightSection.append(nav);
    rightSection.append(text);
    text.append(textp1);
    text.append(textp2);

    leftSection.style.backgroundImage = `url('${home}')`;
    leftSection.style.backgroundSize = 'cover';

    name.textContent = "Restaurant Name";
    textp1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla metus, tristique sed tincidunt et, cursus eu augue. Sed quis pellentesque enim.";
    textp2.textContent = "Pellentesque eu orci id enim facilisis semper. Fusce laoreet dui ac dapibus congue.";
}

export default generateHome;

