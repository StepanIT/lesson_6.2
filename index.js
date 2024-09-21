'use strict'

const p = document.createElement('p');
p.textContent = '';


const form = document.createElement('form');
form.insertAdjacentHTML('beforeend', `
   <label>
       Поле для ввода текста <input type="text" name="textInput">
    </label>
`);

document.getElementById('app').append(form, p);

let timer;
form.querySelector('input[name="textInput"]').addEventListener('input', () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    p.textContent = form.querySelector('input[name="textInput"]').value;
  }, 300);
});

