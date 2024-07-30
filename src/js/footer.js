import axios from "axios";

const footerModalWindows = document.querySelector(".container-footer-modal")
const footerModalWindowsHidden = document.querySelector(".hidden")
const buttonClose = document.querySelector(".button-close");


export function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    
    const inputEmail = (form.elements.email.value).trim();
    const inputComments = (form.elements.comments.value).trim();

    if (inputEmail === "" || inputComments === "") {
        alert(`All form fields must be filled in`)
    } else {
        const data = {
            email: `${inputEmail}`,
            comments: `${inputComments}`
        }
        console.log("data", data);  //  перевірка введеного об'єкту
        form.reset();  //  очищення форми
        apiCreate({ data })
            .then((resul) => {
                console.log("відповідь +");
                console.log("resul", resul)
            })
            .catch((err) => console.log("err", err))
        
    loadingTextRemove();
    }
}


const URL_API = "https://portfolio-js.b.goit.study/api"


function apiCreate(data) {
    const options = {
            method: "POST",
            body: JSON.stringify(data),
            heder: {
                "Content-Tape":"application/json"
                    }
            }
    return fetch(`${URL_API}/requests`, options)
        .then((res) => {
            if (!res.ok) {
            throw new Error(res.status)
            }
            return res.json
        })
    
}


buttonClose.addEventListener(`click`, loadingTextAdd);
footerModalWindowsHidden.addEventListener(`click`, loadingTextAdd)



function loadingTextRemove(){   //  ф-ція додавання footerModalWindows
    footerModalWindows.classList.remove("hidden")
}

function loadingTextAdd(){      //  ф-ція приховування footerModalWindows
    footerModalWindows.classList.add("hidden")
}

