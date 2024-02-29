// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

// Ваш код ..

const form = document.querySelector('.array fieldset');

form.addEventListener('click', function (event) {
    event.preventDefault();

    const name = form.querySelector('[name="fio"]').value;
    const phoneNumber = form.querySelector('[name="phone"]').value;
    const dateOfBirth = form.querySelector('[name="birthday"]').value;
    const emailAddress = form.querySelector('[name="email"]').value;

    console.log("name:", name);
    console.log("phoneNumber:", phoneNumber);
    console.log("dateOfBirth:", dateOfBirth);
    console.log("emailAddress:", emailAddress);
});

module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};