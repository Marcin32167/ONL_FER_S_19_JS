/*
  Poniżej napisz kod rozwiązujący zadania
 */

document.querySelectorAll('.exercise li').forEach((li, id) => {
    li.dataset.id = `${id + 1}`;
    li.dataset.eloPomelo = 'ważna informacja';
    // console.log(li.dataset)
})