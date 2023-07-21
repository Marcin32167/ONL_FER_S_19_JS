const orderNoRef = document.querySelector('#orderId');
const productRef = document.querySelector('#item');
const quantityRef = document.querySelector('#quantity');
const btnRef = document.querySelector('#add');

const tbodyRef = document.querySelector('#orders tbody');
const trRef = tbodyRef.firstElementChild;


btnRef.addEventListener('click', () => {
    const newRow = trRef.cloneNode(true);
    newRow.children[0].innerText = orderNoRef.value;
    newRow.children[1].innerText = productRef.value;
    newRow.children[2].innerText = quantityRef.value;

    tbodyRef.appendChild(newRow);

    orderNoRef.value = '';
    productRef.value = '';
    quantityRef.value = '';
})
