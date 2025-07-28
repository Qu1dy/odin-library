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