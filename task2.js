// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles


function applyStyles() {
     const titleEl = document.getElementById("title");
     titleEl.style.backgroundColor = "lightgreen";
     const list = document.getElementById("myDiv");
     const first = list.children[0];
     first.style.fontWeight = "700";
     const second = list.children[1];
     second.style.color = "red";
     const third = list.children[2];
     third.style.textDecoration = "underline";
     const fourth = list.children[3];
     fourth.style.fontStyle = "italic";
     const myList = document.getElementById("myList");
     const listItems = myList.getElementsByTagName("li");
     let combinedLi = "";
     for (let i = 0; i < listItems.length; i++) {
        combinedLi += listItems[i].innerText;
     } 
     myList.innerText = combinedLi;
}
applyStyles()


module.exports = applyStyles;
