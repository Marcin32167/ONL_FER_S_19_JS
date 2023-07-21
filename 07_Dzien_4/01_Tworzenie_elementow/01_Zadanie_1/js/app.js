const btnRefs = document.querySelectorAll('.btn');

btnRefs.forEach((btn) => {
    btn.addEventListener('click', function() {
        // this.parentElement.parentElement.remove();
        this.closest('tr').remove();
    })
})
