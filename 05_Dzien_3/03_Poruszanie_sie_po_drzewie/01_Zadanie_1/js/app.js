const firstRef = document.querySelector('.first');

// console.log(firstRef.children[0])
// console.log(firstRef.children[2])

const secondRef = document.querySelector('#second');

// console.log(secondRef.parentElement);
// console.log(secondRef.parentElement.children[3])

const dataRef = document.querySelector('[data-ex="third"]');

const grandfather = dataRef.parentElement.parentElement;
// console.log(grandfather.lastElementChild)

const lastChild = grandfather.parentElement.parentElement;
// console.log(lastChild)

const ul = lastChild.firstElementChild
// console.log(ul)

// console.log(ul.children[Math.floor(ul.children.length / 2)])


const divRef = document.querySelector('div.forth');

console.log(divRef.parentElement);

const firstArticle = divRef.parentElement.querySelector('article');
console.log(firstArticle)
console.log(firstArticle.querySelector('p:nth-of-type(2)'));








