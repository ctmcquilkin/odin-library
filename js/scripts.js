const myLibrary = [];

const form = document.querySelector("form");
const dialog = document.querySelector("#book-dialog");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const title = document.querySelector("#bTitle").value;
    const author = document.querySelector("#aname").value;
    const numOfPages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    addBookToLibrary(title, author, numOfPages, read);
    displayBooks();
    form.reset();
    dialog.close();
}

function Book(title, author, numOfPages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    };
    // the constructor
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
    // use crypto.randomUUID() to create a random ID
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

Book.prototype.info = function() {
    console.log(this.title, this.author, this.numOfPages);
}

function addBookToLibrary(title, author, numOfPages, read) {
    // take prams, create a book, then store it in the array.
    const newBook = new Book(title, author, numOfPages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    // function to loop through the array and display each book on the page.
    const container = document.getElementById("books");
    container.innerHTML = "";

    for (const book of myLibrary) {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.dataset.id = book.id;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            const index = myLibrary.findIndex((b) => b.id === card.dataset.id);
            if (index !== -1) {
                myLibrary.splice(index, 1);
            }
            displayBooks();
        });
        card.append(removeButton);

        const title = document.createElement("p");
        title.textContent = book.title;
        card.append(title);

        const author = document.createElement("p");
        author.textContent = book.author;
        card.append(author);

        const numOfPages = document.createElement("p");
        numOfPages.textContent = book.numOfPages;
        card.append(numOfPages);

        const read = document.createElement("p");
        read.textContent = book.read ? "Read" : "Not read yet";
        card.append(read);

        const readcheckbox = document.createElement("input");
        readcheckbox.type = 'checkbox';
        readcheckbox.id = `read-${book.id}`;
        readcheckbox.name = 'readcheckbox'
        readcheckbox.checked = book.read;
        
        const label = document.createElement('label');
        label.htmlFor = `read-${book.id}`;
        label.textContent = "Read this book?";

        readcheckbox.addEventListener("change", function() {
            book.toggleRead();
            displayBooks();
        });

        const readWrapper = document.createElement("div");
        readWrapper.classList.add("read-toggle");

        readWrapper.append(readcheckbox, label);
        card.append(readWrapper);

        container.appendChild(card);
    } 
}

