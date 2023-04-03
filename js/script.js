class Book {
    constructor(name, author, status, remark) {
        this.name = name;
        this.author = author;
        this.status = status;
        this.remark = remark;
    }
    addToTable(){
        return;
    }
}

function newData(){
    bookname = document.querySelector("#name").value;
    bookauthor = document.querySelector("#author").value;
    readstatus= document.querySelector('input[name="status"]:checked').value;
    bookremarks = document.querySelector("#remarks").value;

    new Book(bookname, bookauthor, readstatus, bookremarks).addToTable();
}

addBook = document.querySelector(".addbook");
addBook.addEventListener('click',newData);