let myLibrary = [6, 21, 53, 46, 53];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

for (let i = 0; i < myLibrary.length; i++) {
    console.table(myLibrary[i]);
}

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }