import axios from "axios";

const footerModalWindows = document.querySelector(".container-footer-modal")
const footerModalWindowsHidden = document.querySelector(".hidden")
const buttonClose = document.querySelector(".button-close");


export function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  const email = form.elements.email.value.trim();
  const comment = form.elements.comments.value.trim();
    
    if (email === '') {
        alert(`All form fields must be filled in`);
      
    } else if (comment === '') {
        alert(`All form fields must be filled in`);
    } else{
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
    .then(post => loadingTextRemove())
    .catch(error => console.log(error));
}
        

buttonClose.addEventListener(`click`, loadingTextAdd);
footerModalWindowsHidden.addEventListener(`click`, loadingTextAdd)



function loadingTextRemove(){   //  ф-ція додавання footerModalWindows
    footerModalWindows.classList.remove("hidden")
}

function loadingTextAdd(){      //  ф-ція приховування footerModalWindows
    footerModalWindows.classList.add("hidden")
}

