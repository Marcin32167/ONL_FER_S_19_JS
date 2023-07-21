const counterRef = document.querySelector('.counter');

document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        counterRef.innerText = parseInt(counterRef.innerText) + 1;
    })
})



