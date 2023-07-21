const formRef = document.querySelector('form');
const emailRef = document.querySelector('#email');
const nameRef = document.querySelector('#name');
const errorRef = document.querySelector('#error-message');

const errors = [];

function showErrors() {
    if (errors.length === 0) {
        errorRef.classList.add('d-none');
        errorRef.innerText = '';
    } else {
        errorRef.innerText = errors.join(', ');
        errorRef.classList.remove('d-none');
    }
}

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
})

emailRef.addEventListener('blur', function () {
    const msg = 'Email musi posiadać znak @';

    if (!this.value.includes('@') && !errors.includes(msg)) {
        errors.push(msg);
    } else if (this.value.includes('@')) {
        const idx = errors.indexOf(msg);
        errors.splice(idx, 1);
    }

    showErrors();
})


nameRef.addEventListener('blur', function () {
    const msg = 'Twoje imię jest za krótkie';

    if (this.value.length < 2 && !errors.includes(msg)) {
        errors.push(msg);
    } else if (this.value.length >= 2) {
        const idx = errors.indexOf(msg);

        if (idx !== -1) errors.splice(idx, 1);
    }

    showErrors();
})