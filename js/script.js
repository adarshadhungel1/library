class Book {
    constructor(name, author, status, remark) {
        this.name = name;
        this.author = author;
        this.status = status;
        this.remark = remark;
    }
    addToTable(){
        this.tableData = document.querySelectorAll('tr');
        this.tableData.innerHTML += `<tr>
                            <td> ${this.name} </td>
                            <td> ${this.author} </td>
                            <td> ${this.status} </td>
                            <td> ${this.remark} </td>
                           </tr>`;
        console.log(this.remark);
    }
}

function reveal(){
    target = document.querySelector(".reveal");
    target.innerHTML = `<div class="tail">
            <h3>New Book Info</h3>
            <div class="name"> <label for="name"> Name: </label> <input type="text" name="name" id="name"> </div>
            <div class="author"> <label for="author">Author: </label> <input type="text" name="author" id="author"> </div>
            <div class="yn"> <label for="status"> Have you read it yet?: </label> <input type="radio" name="status" value="yes"> Yes <input type="radio" name="status" value="no" checked> No </div>
            <div class="remarks"><label for="remarks"> Remarks: </label><input type="text" name="remarks" id="remarks"></div>
            <button class="addbook">Add</button>
            </div>`;
    
    addBook = document.querySelector(".addbook");
    addBook.addEventListener('click',newData);
    return;
}

function newData(){
    bookname = document.querySelector("#name").value;
    bookauthor = document.querySelector("#author").value;
    readstatus= document.querySelector('input[name="status"]:checked').value;
    bookremarks = document.querySelector("#remarks").value;

    new Book(bookname, bookauthor, readstatus, bookremarks).addToTable();
}

addNewBook = document.querySelector(".expand");
addNewBook.addEventListener('click',reveal);