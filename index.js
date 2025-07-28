const body = document.querySelector("body");

const library = [];

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBooksToLibrary(name, author, pages) {
    const book = new Book(name, author, pages);
    library.push(book);
}

function displayBooks() {
    library.forEach(book => {
        const bookEL = document.createElement("div");
        const bookTitleEL = document.createElement("h1"); 
        const bookAuthorEL = document.createElement("h1");
        const bookPagesEL = document.createElement("h1");
        bookTitleEL.innerText = book.name;
        bookAuthorEL.innerText = book.author;
        bookPagesEL.innerText = book.pages;
        bookEL.appendChild(bookTitleEL);
        bookEL.appendChild(bookAuthorEL);
        bookEL.appendChild(bookPagesEL);
        body.appendChild(bookEL);
    });
}