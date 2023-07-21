const parentRefs = document.querySelectorAll('.parent');

parentRefs.forEach((parent) => {
    parent.addEventListener('mouseenter', function (event) {
        event.target.children[0].style.display = 'block';
    })
})

parentRefs.forEach((parent) => {
    parent.addEventListener('mouseleave', function (event) {
        event.target.children[0].style.display = 'none';
    })
})