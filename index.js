const cards = document.querySelector(".cards");

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
        const bookAuthorEL = document.createElement("h3");
        const bookPagesEL = document.createElement("h4");
        bookTitleEL.innerText = book.name;
        bookAuthorEL.innerText = `By: ${book.author}`;
        bookPagesEL.innerText = `has ${book.pages} pages.`;
        bookEL.classList.add("card")
        bookEL.appendChild(bookTitleEL);
        bookEL.appendChild(bookAuthorEL);
        bookEL.appendChild(bookPagesEL);
        cards.appendChild(bookEL);
    });
}

addBooksToLibrary("meow", "aaa", 329);
addBooksToLibrary("meowy", "bbb", 330);
addBooksToLibrary("woof", "ccc", 331);

displayBooks();