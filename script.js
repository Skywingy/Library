// book constructor

function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}


// stores new created books into this library

let myLibrary = [];


//creates book from Book Constructor, adds to library

function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    render();

}


//Creates book visual in browser

function render(){
    const books = document.querySelector(".books");
    

    const removeDivs = document.querySelectorAll(".card");
    console.log("Here", removeDivs);
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }
    let index = 0;
    myLibrary.forEach(myLibrarys => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", "cards");
        books.appendChild(card);

// creates remove button on the card
        const removeB = document.createElement("BUTTON");
        removeB.classList.add("removeB");
        const textB = document.createTextNode("Remove");
        removeB.dataset.linkedArray = index;
        index++;
        removeB.appendChild(textB);
        card.appendChild(removeB);
        removeB.addEventListener("click", removeBu);

        function removeBu() {
            let retBookFromLib = removeB.dataset.linkedArray;
            myLibrary.splice(parseInt(retBookFromLib), 1);
            card.remove();
            render();
        }
//loops through myLibrary and 
        for (let key in myLibrarys) {
            console.log(`${key}: ${myLibrarys[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrarys[key]}`);
            card.appendChild(para);
        
        }
        
    })
}




//1. we have myLibrary array to store books to be added
//2. we have constructor object function Book() to construct every book objects
//3. we have function addBookToLibrary() to push new constructod book objects to be pushed to array
//4. we have function render() to display all these created objects to browser >> in order to display first we should create element where we will going to display, second we should add class order to distinguish from other elements and last we should append created elements to existing element which is kind of linking part

const addBookButton = document.querySelector(".addBook");
addBookButton.addEventListener("click", displayTheForm);
addBookButton.addEventListener("click", noneButton);

//displays the form when clicked add book


function displayTheForm() {
    document.getElementById("addBookForm").style.display = "";
};

function noneButton() {
    document.getElementById("addBook").style.display = "none";
}

//intake form data into myLibrary array
const submitButton = document.querySelector(".submitB");
submitButton.addEventListener("click", intakeFormData);


function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

    if ((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
        return;
    }

addBookToLibrary(Title, Author, Pages, Read);
document.getElementById("add-book").reset();

};

const clearButton = document.querySelector(".resetB");
clearButton.addEventListener("click", clearForm);

function clearForm() {
    document.getElementById("add-book").reset();
}
