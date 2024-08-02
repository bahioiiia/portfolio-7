import axios from 'axios';

const footerModalWindows = document.querySelector('.container-footer-modal');
const footerModalWindowsHidden = document.querySelector('.hidden');

const buttonClose = document.querySelector('.button-close');
const modal = document.querySelector('.modal');

// для додавання кольору
const inputEmail = document.querySelector('.input-email');
const inputComments = document.querySelector('.input-comments');
const spanEmailSucces = document.querySelector('.span-email-succes');
const spanCommentsSucces = document.querySelector('.span-comments-succes');
const spanEmailInvalid = document.querySelector('.span-email-invalid');
const spanCommentsInvalid = document.querySelector('.span-comments-invalid');


let emailData = { email: ''};
const inputForm = document.querySelector('.form-footer');
inputForm.addEventListener(`input`, inputEmailUser);

function inputEmailUser(event) {
  const { email } = event.currentTarget.elements;
  emailData.email = email.value.trim();
  emailData = {
    email: emailData.email
  };

  if (!emailData.email.includes('.')) {
      colorRemoveGreenEmail();
      colorAddRedEmail();
  } else if (
      emailData.email.includes('@') &&
      emailData.email.includes('.') &&
      !emailData.email.endsWith(`.`)
  ) {
      colorRemoveRedEmail();
      colorAddGreenEmail();
  }
}


export function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const comment = form.elements.comments.value.trim();

  if (email === '' && comment === '') {
    colorAddRedEmail();
    colorAddRedComment();
    return;
  } else if (email === '' || !comment === '') {
    colorAddRedEmail();
    colorAddGreenComment();
    return;
  } else if (comment === '' || !email === '') {
    colorAddRedComment();
    colorAddGreenEmail();
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
    .then(post => {
      const arr = [post];
      // console.log('post', arr);  //   перевірка переданого масиву 
      const marcup = arr
        .map(title => {
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

function loadingTextRemove() {
  //  ф-ція активації footerModalWindows
  footerModalWindows.classList.remove('hidden');

  //  прослуховувачі активації та приберання модельного вікна
  buttonClose.addEventListener(`click`, loadingTextAdd);
  footerModalWindowsHidden.addEventListener(`click`, loadingTextAdd);
  document.addEventListener(`keydown`, loading);
}

function loadingTextAdd() {
  //  ф-ція приховування footerModalWindows
  footerModalWindows.classList.add('hidden');
  colorRemoveGreenEmail();
  colorRemoveGreenComment();
}

function loading(event) {
  if (event.code === 'Escape') {
    // console.log('code', event.code);  //  перевірка вводу 'Escape'
    loadingTextAdd();
  }
}

// ------  ф-ції підкреслення error input -----

function colorAddGreenEmail() {
  //  ф-ція додавання class green inputEmail
  inputEmail.classList.add('green');
  spanEmailSucces.classList.add('green');
}

function colorAddGreenComment() {
  //  ф-ція додавання class green inputComments
  inputComments.classList.add('green');
  spanCommentsSucces.classList.add('green');
}

function colorRemoveGreenEmail() {
  //  ф-ція видалення class green inputEmail
  inputEmail.classList.remove('green');
  spanEmailSucces.classList.remove('green');
}

function colorRemoveGreenComment() {
  //  ф-ція видалення class green inputComments
  inputComments.classList.remove('green');
  spanCommentsSucces.classList.remove('green');
}

function colorAddRedEmail() {
  //  ф-ція додавання class red inputEmail
  inputEmail.classList.add('red');
  spanEmailInvalid.classList.add('red');
}

function colorAddRedComment() {
  //  ф-ція додавання class red inputComments
  inputComments.classList.add('red');
  spanCommentsInvalid.classList.add('red');
}

function colorRemoveRedEmail() {
  //  ф-ція видалення class red inputEmail
  inputEmail.classList.remove('red');
  spanEmailInvalid.classList.remove('red');
}

function colorRemoveRedComment() {
  //  ф-ція видалення class red inputComments
  inputComments.classList.remove('red');
  spanCommentsInvalid.classList.remove('red');
}
