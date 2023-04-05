class Book {
    constructor(name, author, status, remark) {
        this.name = name;
        this.author = author;
        this.status = status;
        this.remark = remark;
    }
    abookinfo(){
        this.info = document.createElement('div');
        this.info.className= 'abook';
        this.info.innerHTML = `<div class="name">Title: ${this.name}</div>
        <div class="author">Author: ${this.author}</div>
        <div class="status">Read: ${this.status}</div>
        <div class="remarks">Comments: ${this.remark}</div>
        </div>`;
        document.querySelector(".bookinfo").appendChild(this.info);
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

let HP = new Book('Harry Potter', 'Unknown', 'Yes', 'decent').abookinfo();
let XP = new Book('Dune', 'Not Random Guy', 'No', 'Marvelous').abookinfo();

addBook = document.querySelector(".addbook");
addBook.addEventListener('click',newData);