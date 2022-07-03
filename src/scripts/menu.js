import '../styles/menu.scss';

const generateGrid = (section, name, noOfItems) => {
    const header = document.createElement("header");
    const grid = document.createElement("grid");
    grid.classList.add("grid");

    header.textContent = name;

    for(let i = 0; i < noOfItems; i++) {
        const item = document.createElement("div")
        const img = document.createElement("div");
        const text = document.createElement("div");
        const foodName = document.createElement("h1");
        const desc = document.createElement("p");

        item.classList.add("item");
        img.classList.add("img");
        text.classList.add("text");

        grid.append(item);
        item.append(img);
        item.append(text);
        text.append(foodName);
        text.append(desc);

        foodName.textContent = "FOOD NAME";
        desc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla metus, " +
                        " tristique sed tincidunt et, cursus eu augue. Sed quis pellentesque enim. " +
                        " Pellentesque eu orci id enim facilisis semper.";
    }

    section.append(header);
    section.append(grid);
}

const generateMenu = (container, nav) => {
    container.append(nav);
    container.setAttribute("data-page", "menu");

    const bfSection = document.createElement("section");
    const lSection = document.createElement("section");
    const dSection = document.createElement("section");

    generateGrid(bfSection, "Breakfast", 6);
    generateGrid(lSection, "Lunch", 6);
    generateGrid(dSection, "Dinner", 6);

    container.append(bfSection);
    container.append(lSection);
    container.append(dSection);
}

export default generateMenu;