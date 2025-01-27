// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl

const list = document.getElementById("list");

const firstEl = list.children[0].innerText;
const lastEl = list.children[list.children.length- 1].innerText;
const secondtEl = list.children[1].innerText;
const fourthEl = list.children[3].innerText;
const thirdtEl = list.children[2].innerText;

module.exports = {
  firstEl,
  lastEl,
  secondtEl,
  fourthEl,
  thirdtEl,
};
