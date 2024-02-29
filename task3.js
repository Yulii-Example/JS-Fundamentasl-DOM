
// Напишіть скрипт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()






function applyStyles() {
    const mainEl = document.createElement("main");
    mainEl.className = "mainClass check item";
    const divEl = document.createElement("div");
    divEl.id = "myDiv";
    const pEl = document.createElement("p");
    pEl.innerText = "First paragraph";
    divEl.appendChild(pEl);
    mainEl.appendChild(divEl);
    const container = document.querySelector(".create_elements");
    container.appendChild(mainEl);
}
applyStyles();




module.exports = applyStyles;
