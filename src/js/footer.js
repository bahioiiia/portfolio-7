// import { submitForm } from './js/footer'

// inputForm.addEventListener(`submit`, submitForm);


const inputForm = document.querySelector(".form-footer");
const footerModalWindows = document.querySelector(".container-footer-modal")
const footerModalWindowsHidden = document.querySelector(".hidden")
const buttonClose = document.querySelector(".button-close");

export function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    
    const inputEmail = (form.elements.email.value).trim();
    const inputComments = (form.elements.comments.value).trim();

    if(inputEmail === "" || inputComments === "") {
        alert (`All form fields must be filled in`)
    } else {
        const data = {
            email: inputEmail,
            comments: inputComments
        }
        console.log(data);  //  перевірка введеного об'єкту
        form.reset();  //  очищення форми
           

        loadingTextRemove();
    }
}

buttonClose.addEventListener(`click`, loadingTextAdd);
footerModalWindowsHidden.addEventListener(`click`, loadingTextAdd)



function loadingTextRemove(){   //  ф-ція додавання footerModalWindows
    footerModalWindows.classList.remove("hidden")
}

function loadingTextAdd(){      //  ф-ція приховування footerModalWindows
    footerModalWindows.classList.add("hidden")
}