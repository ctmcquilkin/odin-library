const myLibrary = [];

const submitBtn = document.querySelector("#id-submit");
submitBtn.addEventListener("click", addBookToLibrary);

function book(title, author, numOfPages) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    };
    // the constructor
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    // use crypto.randomUUID() to create a random ID
    this.id = crypto.randomUUID();
    this.info = function() {
    console.log(this.title, this.author, this.numberOfPages);
  };
}

function addBookToLibrary(event) {
    let title = bname;
    let author = aname;
    let numOfPages = pages;

    myLibrary.push(title, author, numOfPages);

    event.preventDefault();

 // take prams, create a book, then store it in the array.
}

function displayBooks() {
    const books = document.getElementById("books");
    for (let i = 0; i < myLibrary.length; i++) {
        books.innerHTML = "<p>i.title</p><p>i.author</p><p>i.numOfPages)</p>";
    }
 // function to loop through the array and display each book on the page. 
}

