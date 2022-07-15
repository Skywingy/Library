//button event listeners for create new book, add new book to page, close popup




// book constructor

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


//creates book from Book Constructor, adds to library

let myLibrary = [];



function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

}


//Creates book visual in browser

function render(){
    const books = document.querySelector(".books");

    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}

addBookToLibrary("The Hobby", "J.R.R Tolkien", "295 page", "Not read yet");

console.log("End of array contents", myLibrary);



render();


//1. we have myLibrary array to store books to be added
//2. we have constructor object function Book() to construct every book objects
//3. we have function addBookToLibrary() to push new constructod book objects to be pushed to array
//4. we have function render() to display all these created objects to browser >> in order to display first we should create element where we will going to display, second we should add class order to distinguish from other elements and last we should append created elements to existing element which is kind of linking part
