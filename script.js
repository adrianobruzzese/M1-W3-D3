const inputBox = document.getElementById('inputBox');
const reminders = document.getElementById('reminders');

function addTask() {
  if (inputBox.value === '') {
    alert('Devi inserire almeno un task!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    reminders.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = 'x';
    li.appendChild(span);
  }
  inputBox.value = '';
}



reminders.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      //controlla se abbiamo cliccato su 'li'
      e.target.classList.toggle('checked'); //quindi aggiunge la classe 'checked', oppure la toglie se è già toggled
    } else if (e.target.tagName === 'SPAN') {
      //se invece clicchiamo sullo span precedentemente creato (la x), rimuove il parent element ovvero la 'li'
      e.target.parentElement.remove();
    }
  },
  false
);

