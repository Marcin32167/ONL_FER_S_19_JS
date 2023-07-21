const btnRef = document.getElementById('remove');

const handleClick = (event) => {
    event.target.remove();
    btnRef.removeEventListener('click', handleClick);
}

btnRef.addEventListener('click', handleClick);
