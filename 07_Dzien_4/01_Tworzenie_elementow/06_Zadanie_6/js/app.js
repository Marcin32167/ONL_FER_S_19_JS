const list1Ref = document.querySelector('#list1');
const list2Ref = document.querySelector('#list2');
const linkRefs = document.querySelectorAll('.list-group-item');

function toggle() {
    const clone = this.cloneNode(true);

    if (this.parentElement.id === 'list1') {
        list2Ref.appendChild(clone);
    } else {
        list1Ref.appendChild(clone);
    }

    this.remove();
}

linkRefs.forEach((link) => {
    link.addEventListener('click', toggle);
});
