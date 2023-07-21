const a = document.getElementById("a");
const b = document.getElementById("b");

// Tutaj this wskazuje na obiekt window
console.log("obiekt document: ", this);

a.addEventListener("click", function (event) {
  // Tutaj this wskazuje na element DOM o id a, na to samo co event.target
  console.log("a: ", this);
});

b.addEventListener("click", function (event) {
  // Tutaj this wskazuje na element DOM o id b
  console.log("b: ", this);


  function innerFuncOne() {
    // Tutaj this wskazuje na element Window, bo funkcja została
    //wywołana bez żadnego kontekstu.
    console.log("innerFuncOne: ", this);
  }

  innerFuncOne();

  // Aby wskazywał na element, który wyemitował zdarzenie
  const if1 = () => {
    console.log('if1', this) // arrow fn ma lexical this, tzn nie ma this, więce brany jest z otoczenia
  }
  if1()

  function if2() {
    console.log('if2', this)
  }

  if2.call(this)
  if2.apply(this)

  const if3 = function (){
    console.log('if3', this)
  }

  const if4 = if3.bind(this);
  if4();

});
