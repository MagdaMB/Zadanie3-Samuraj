let size = 10;
let orderElement = 1;

const init = () => {
    const button = document.createElement("button");
    const resetButton = document.createElement("button");

    button.classList.add("button");
    resetButton.classList.add("resetBtn");
    button.textContent = `Create List`;
    resetButton.textContent = `Delete List`;
    document.body.appendChild(button);
    document.body.appendChild(resetButton);

    const ulList = document.createElement("ul");
    document.body.appendChild(ulList);

    button.addEventListener('click', createLiElements);
    resetButton.addEventListener('click', resetList);
};

const createLiElements = () => {

    for (let i = 0; i < 10; i++) {
        const liPosition = document.createElement("li");
        liPosition.textContent = `Element listy nr ${orderElement++}`;
        liPosition.style.fontSize = `${size++}px`;
        document.querySelector("ul").appendChild(liPosition);
    }

};

const resetList = () => {
    document.querySelector('ul').innerHTML = "";
    size = 10;
    orderElement = 1;
};

init();