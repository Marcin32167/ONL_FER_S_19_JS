const btnRef = document.querySelector('.btn');

btnRef.forEach((btn) => {
    btn.addEventListener('click', function () {
        const prevElement = this.previousElementSibling;

        if (prevElement) {
            prevElement.classList.toggle('hidden')
        }
    })
})