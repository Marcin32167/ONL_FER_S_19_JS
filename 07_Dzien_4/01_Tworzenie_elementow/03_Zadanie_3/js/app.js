const btnRef = document.querySelector('#add');
const ulRef = document.querySelector('#menu');

function createLi(message) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(message);

    node.appendChild(nodeText);
    node.classList.add('list-group-item')

    return node;
}
btnRef.addEventListener('click', function () {
    const quantity = ulRef.children.length;
    const message = `Element ${quantity + 1} - w chwili dodania było ${quantity} elementów`

    ulRef.appendChild(createLi(message));

    // const li = '<li class="list-group-item">Element ${quantity +1} - w chwili dodania było ${quantity) elementów</li>'
    // ulRef.innerHTML += li;
})

