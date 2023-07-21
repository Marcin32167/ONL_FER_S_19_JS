const btnRefs = document.getElementsByClassName('btn');
const counterRefs = Array.from(document.querySelectorAll('.counter'));

HTMLCollection.prototype.forEach = function (cb){
    for (let i = 0; i < this.length; i++){
        cb(this[i], i, this);
    }
}

// for (const btn of btnRefs){
//      btn.addEventListener('click', function(){
//         const counter = this.previousElementSibling.children[0]
//         counter.innerText = parseInt(counter.innerText) + 1;
//     })
// }

btnRefs.forEach((btn, id) => {
    btn.addEventListener('click', () => {
        counterRefs[id].innerText = parseInt(counterRefs[id].innerText) + 1
    });
})