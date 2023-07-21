const evenLi = document.querySelectorAll('.exercise li:nth-child(even)');
const liRef = document.querySelector('.exercise li:nth-child(5)');
liRef.classList.add('big');

// const sectionRef = document.getElementsByClassName(('excercis')[0]);
// const liRefs = [...sectionRef.getElementByTagName('li')];
//
// liRefs.forEach((item, id) => {
//     if (id % 2 === 1){
//         item.style.backgroundColor = '9e9e9e';
//     }
// })
evenLi.forEach((li) => {
    li.style.backgroundColor = '#9e9e9e';
})

