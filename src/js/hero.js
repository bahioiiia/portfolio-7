import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const emailModal = document.querySelector('.email');

emailModal.addEventListener('click', function() {
    Swal.fire({
        title: 'Написать сообщение',
        html: `
            <form id="messageForm">
                <label for="email">Email:</label>
                <input type="email" id="email" class="swal2-input" name="email" required>
                <label for="message">Сообщение:</label>
                <textarea id="message" class="swal2-textarea" name="message" required></textarea>
            </form>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Отправить'})
        return { email: email, message: message }});