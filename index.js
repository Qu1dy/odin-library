const cards = document.querySelector(".cards-container");
const addBookEL = document.querySelector(".add-book")
const dialog = document.querySelector("#add-book-dia");
const overlay = document.querySelector(".overlay");
const addBookForm = document.querySelector("form");
const submitFormButton = document.querySelector("button[type=submit]")

class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read ? "✓" : "✖";
    }

    toggleRead(read) {
        this.read = read ? "✓" : "✖";
    }
}

function addBooksToLibrary(name, author, pages, read) {
    const book = new Book(name, author, pages, read);
    updateLibrary(book);
}


function createReadStatusElement(book, bookEL) {
    const changeReadStatus = document.createElement("label");
    changeReadStatus.classList.add("switch");
    const readStatusCheckbox = document.createElement('input');
    readStatusCheckbox.setAttribute("type", "checkbox");
    if(book.read === "✓") {
        readStatusCheckbox.checked = true;
    }
    readStatusCheckbox.addEventListener("change", (e) => {
        const checkbox = e.target;
        book.toggleRead(checkbox.checked);
        bookEL.querySelector(".read").textContent = `Read: ${book.read}`;
    })
    const readStatusSlider = document.createElement("span");
    readStatusSlider.classList.add("slider");
    changeReadStatus.appendChild(readStatusCheckbox);
    changeReadStatus.appendChild(readStatusSlider);
    return changeReadStatus;
}

function createRemoveBookElement(bookEL) {
    const removeBookEL = document.createElement("button");
    removeBookEL.addEventListener("click", () => {
        bookEL.remove();
    });
    const xMark = document.createElement("img");
    xMark.setAttribute("src", "svgs/close.svg");
    xMark.setAttribute("title", "Remove book");
    removeBookEL.appendChild(xMark);
    return removeBookEL;
}

function updateLibrary(book) {
    const bookEL = document.createElement("div");
    const bookTitleEL = document.createElement("h1"); 
    const bookAuthorEL = document.createElement("h3");
    const bookPagesEL = document.createElement("h4");
    const readEL = document.createElement("h4");
    readEL.classList.add("read");
    const buttonsDivEL = document.createElement("div");
    const changeReadStatus = createReadStatusElement(book, bookEL);
    buttonsDivEL.appendChild(changeReadStatus);
    const removeBookEL = createRemoveBookElement(bookEL);
    buttonsDivEL.appendChild(removeBookEL);

    bookTitleEL.innerText = book.name;
    bookAuthorEL.innerText = `By: ${book.author}`;
    bookPagesEL.innerText = `has ${book.pages} pages.`;
    readEL.innerText = `Read: ${book.read}`;
    bookEL.classList.add("card");

    bookEL.appendChild(bookTitleEL);
    bookEL.appendChild(bookAuthorEL);
    bookEL.appendChild(bookPagesEL);
    bookEL.appendChild(readEL);
    bookEL.appendChild(buttonsDivEL);
    cards.appendChild(bookEL);
}

addBookEL.addEventListener("click", () => dialog.showModal());

dialog.addEventListener("toggle", (e) => {
    if(e.newState === 'open')
        return overlay.style.display = "block";
    overlay.style.display = "none";
})

submitFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    const formElements = addBookForm.elements;
    const [bookName,author,pages] = Array.from(formElements).map(item => item.value);
    const read = formElements.item(3).checked;
    addBooksToLibrary(bookName, author, pages, read);
});