const cards = document.querySelector(".cards-container");
const addBookEL = document.querySelector(".add-book")
const dialog = document.querySelector("#add-book-dia");
const overlay = document.querySelector(".overlay");
const library = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBooksToLibrary(name, author, pages, read) {
    const book = new Book(name, author, pages, read);
    library.push(book);
}


function displayBooks() {
    library.forEach(book => {
        const bookEL = document.createElement("div");
        const bookTitleEL = document.createElement("h1"); 
        const bookAuthorEL = document.createElement("h3");
        const bookPagesEL = document.createElement("h4");
        const readEL = document.createElement("h4");
        bookTitleEL.innerText = book.name;
        bookAuthorEL.innerText = `By: ${book.author}`;
        bookPagesEL.innerText = `has ${book.pages} pages.`;
        readEL.innerText = `Read: ${book.read}`;
        bookEL.classList.add("card");
        bookEL.appendChild(bookTitleEL);
        bookEL.appendChild(bookAuthorEL);
        bookEL.appendChild(bookPagesEL);
        bookEL.appendChild(readEL);
        cards.appendChild(bookEL);
    });
}

displayBooks();

addBookEL.addEventListener("click", () => dialog.showModal());

dialog.addEventListener("toggle", (e) => {
    console.log("a")
    if(e.newState === 'open')
        return overlay.style.display = "block";
    overlay.style.display = "none";
})