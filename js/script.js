class Book {
    constructor(name, author, status, remark) {
        this.name = name;
        this.author = author;
        this.status = status;
        this.remark = remark;
    }
    addToTable(){
        this.tableData = document.querySelector('table');
        let row = this.tableData.insertRow(this.tableData.rows.length);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        cell0.innerHTML = this.name;
        cell1.innerHTML = this.author;
        cell2.innerHTML = this.status;
        cell3.innerHTML = this.remark;

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

    new Book(bookname, bookauthor, readstatus, bookremarks).addToTable();
}

let HP = new Book('Harry Potter', 'Unknown', 'yes', 'decent').addToTable();

addBook = document.querySelector(".addbook");
addBook.addEventListener('click',newData);