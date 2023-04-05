class Book {
    constructor(name, author, status, remark) {
        this.name = name;
        this.author = author;
        this.status = status;
        this.remark = remark;
    }
    abookinfo(){
        document.querySelector(".bookinfo").append(`<div class="abook">
        <div class="name">${this.name}</div>
        <div class="author">${this.author}</div>
        <div class="status">${this.status}</div>
        <div class="remarks">${this.remark}</div>
        </div>`);
        clearcontent();
    }
}

function clearcontent(){
    content = document.getElementById("author");
    if (content.value){
        content.value = '';
        content = document.getElementById("name");
        content.value = '';
        content = document.getElementById("remarks");
        content.value = '';
    }
}

function newData(){
    bookname = document.querySelector("#name").value;
    bookauthor = document.querySelector("#author").value;
    readstatus= document.querySelector('input[name="status"]:checked').value;
    bookremarks = document.querySelector("#remarks").value;

    new Book(bookname, bookauthor, readstatus, bookremarks).abookinfo();
}

let HP = new Book('Harry Potter', 'Unknown', 'yes', 'decent').abookinfo();

addBook = document.querySelector(".addbook");
addBook.addEventListener('click',newData);