let totalBooks = 0;
class Book {
    constructor(name, author, status, remark) {
        this.name = name;
        this.author = author;
        this.status = status;
        this.remark = remark;
    }
    abookinfo(){
        totalBooks +=1 ;
        this.info = document.createElement(`div`);
        this.info.className= `abook`;
        this.info.id = `${totalBooks.toString()}`;
        this.info.innerHTML = `<div class="info> <div class="boook"><div class="name">Title: ${this.name}</div>
        <div class="author">Author: ${this.author}</div>
        <div class="status">Read: ${this.status}</div>
        <div class="remarks">Comments: ${this.remark}</div>
        </div> <div class="buttony"><button class="delete" id = "${totalBooks.toString()}">Delete</button> <button class="change" id ="${totalBooks.toString()}">Change Read</button></div>`;
        document.querySelector(".bookinfo").appendChild(this.info);

        document.querySelectorAll('.delete').forEach(btn => {
            btn.addEventListener('click', remove);    
        });
        document.querySelectorAll('.change').forEach(btn => {
            btn.addEventListener('click', change);    
        });
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
    
    if (bookname === ''){
        alert("Bookname can't be empty");
        return;
    }
    else{
        if (bookauthor === ''){
            bookauthor = 'Unknown';
        }
        if (bookremarks === ''){
            bookremarks = 'Not Available';
        }
    }
    
    new Book(bookname, bookauthor, readstatus, bookremarks).abookinfo();
}

function remove(){
    this.parentElement.parentElement.remove();
}

function change(){
    elements = (this.parentElement.parentElement).firstChild.childNodes;
    toChange = elements[4];
    if (toChange.innerHTML === 'Read: Yes'){
        toChange.innerHTML = "Read: No";
    }
    else{
        toChange.innerHTML = "Read: Yes";
    }
}

let HP = new Book('Harry Potter', 'Unknown', 'Yes', 'decent').abookinfo();
let XP = new Book('Dune', 'Not Random Guy', 'No', 'Marvelous').abookinfo();

addBook = document.querySelector(".addbook");
addBook.addEventListener('click',newData);

delbtn = document.querySelectorAll('.delete');
delbtn.forEach(btn => {
    btn.addEventListener('click', remove);    
});

changebtn = document.querySelectorAll('.change');
changebtn.forEach(btn => {
    btn.addEventListener('click', change);    
});