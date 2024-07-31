import axios from "axios";

const footerModalWindows = document.querySelector(".container-footer-modal")
const footerModalWindowsHidden = document.querySelector(".hidden")
const buttonClose = document.querySelector(".button-close");
const modal = document.querySelector('.modal');

const inputEmail = document.querySelector('.input-email');
const inputComments = document.querySelector('.input-comments');


export function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  const email = form.elements.email.value.trim();
  const comment = form.elements.comments.value.trim();

  if (email === '' && comment === '') {
    colorAddRedEmail();
    colorAddRedComment();
    alert(`All form fields must be filled in`);
    return;
  } else if (email === '' || !comment === '') {
    colorAddRedEmail();
    colorAddGreenComment();
    alert(`Email form fields must be filled in`);
    return;
  } else if (comment === '' || !email === '') {
    colorAddRedComment();
    colorAddGreenEmail();
    alert(`Comment form fields must be filled in`);
    return;
  } else {
    colorRemoveRedEmail();
    colorRemoveRedComment();
    colorAddGreenEmail();
    colorAddGreenComment();
    const data = {
      email,
      comment,
    };
    // console.log(data); //  перевірка введеного об'єкту
    PostnewData(data);
  }
  form.reset(); //  очищення форми
}

function PostnewData(data) {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  fetch('https://portfolio-js.b.goit.study/api/requests', options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((post) => {
      const arr = [post];
      console.log('post', arr);
      const marcup = arr.map(title => {
          return `<li>
            <h3 class="modal-footer-title">${title.title}</h3>
          </li>
          <li>
            <p class="modal-footer-text">${title.message}</p>
          </li>
        `;
        })
        .join('');
      modal.insertAdjacentHTML('beforeend', marcup);
    })
    .catch(error => console.log(error));
  modal.innerHTML = '';
  loadingTextRemove();
}

  fetch('https://portfolio-js.b.goit.study/api/requests', options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(post => loadingTextRemove())
    .catch(error => console.log(error));
}
        

//  активація та приберання модельного вікна
buttonClose.addEventListener(`click`, loadingTextAdd);
footerModalWindowsHidden.addEventListener(`click`, loadingTextAdd)

function loadingTextRemove(){   //  ф-ція активації footerModalWindows
  footerModalWindows.classList.remove("hidden")
  colorRemoveGreenEmail();
  colorRemoveGreenComment();
}

function loadingTextAdd(){      //  ф-ція приховування footerModalWindows
  footerModalWindows.classList.add("hidden");
  
}

// ------  ф-ції підкреслення error input -----

function colorAddGreenEmail() {  //  ф-ція додавання class green inputEmail
  inputEmail.classList.add('green');
}

function colorAddGreenComment() {  //  ф-ція додавання class green inputComments
  inputComments.classList.add('green');
}

function colorRemoveGreenEmail() {  //  ф-ція видалення class green inputEmail
  inputEmail.classList.remove('green');
}

function colorRemoveGreenComment() {  //  ф-ція видалення class green inputComments
  inputComments.classList.remove('green');
}

function colorAddRedEmail() {  //  ф-ція додавання class red inputEmail
  inputEmail.classList.add('red');
}

function colorAddRedComment() {  //  ф-ція додавання class red inputComments
  inputComments.classList.add('red');
}

function colorRemoveRedEmail() {  //  ф-ція видалення class red inputEmail
  inputEmail.classList.remove('red');
}

function colorRemoveRedComment() {  //  ф-ція видалення class red inputComments
  inputComments.classList.remove('red');
}

