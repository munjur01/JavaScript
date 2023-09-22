// Get the UI elements 
let form = document.querySelector("#book-form");
let booklist = document.querySelector("#book-list");

//Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class
class UI {
    static addToBookList(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">x</a></td>`;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    }
    static deleteFromBook(target) {
        if (target.hasAttribute("href")) {
            target.parentElement.parentElement.remove();

            //removes books from store 
            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());

            UI.showAlert("Book Removed!", "success");
        }

    }

    static showAlert(message, className) {
        // Creating Div Saction
        let div = document.createElement("div");
        div.className = `alert ${className}`;

        // Adding Text Node to div
        let textNode = document.createTextNode(message);
        div.appendChild(textNode);

        // Putting div brfore form in container Saction
        let container = document.querySelector(".container");
        let form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        // alert message will disappear after 3 seconds 
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);

    }

}

// Local Storage Class
class Store {
    // Get Book from Local Storage 
    static getBooks() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    // Add Book to Local Storage 
    static storeBooks(book) {
        let books = Store.getBooks();
        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }


    // Display Existing Book in Local Storage when Page Refresh 
    static displaBooks() {
        let books = Store.getBooks();

        books.forEach(book => {
            UI.addToBookList(book);
        });
    }

    // Remove Book from Local Storage 
    static removeBook(isbn) {
        let books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
    }

}


// Add Event Listener 
form.addEventListener("submit", newBook);
booklist.addEventListener("click", removeBook);
document.addEventListener("DOMContentLoaded", Store.displaBooks());


// NewBook 
function newBook(e) {
    let title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector("#isbn").value;

    if (title === "" || author === "" || isbn === "") {
        UI.showAlert("Please fill all the fields!", "error");
    }
    else {
        let book = new Book(title, author, isbn);
        UI.addToBookList(book);
        UI.clearFields();
        UI.showAlert("Book Added!", "success");
        Store.storeBooks(book);
    }
    e.preventDefault();
}

// RemoveBook
function removeBook(e) {
    UI.deleteFromBook(e.target);
    e.preventDefault();
}