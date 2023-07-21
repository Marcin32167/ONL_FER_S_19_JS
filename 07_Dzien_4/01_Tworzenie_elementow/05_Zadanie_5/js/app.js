const btnRef = document.querySelector('#remove');
const liRefs = document.querySelectorAll('.list-group-item');

btnRef.addEventListener('click', () => {
    liRefs.forEach((li) => li.remove())
})
