const btn = document.querySelector(".btn");
const itemsLi = document.querySelectorAll("li");

let size = 15;

const showList = () => {
    size += 2;

    function changeStyle(itemOneLi) {
        itemOneLi.style.display = "block";
        itemOneLi.style.fontSize = size + "px";
    }
    // for (let i = 0; i <= itemsLi.length; i++) {
    //     itemsLi[i].style.display = "block";
    //     itemsLi[i].style.fontSize = size + "px";
    // }

    [...itemsLi].forEach(changeStyle);
}

btn.addEventListener('click', showList);