console.log("raushan kumar blog")


function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}

var i = 0;
Display.prototype.add = function(book) {
    console.log("enter in gu");
    tablebody = document.getElementById('tablebody');
    let strings = `<tr>
    <td>${++i}.</td>
  <td>${book.name}</td>
  <td>${book.author}</td>
  <td>${book.type}</td>
</tr>`;
    tablebody.innerHTML += strings;
}
Display.prototype.show = function(type, something) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message: </strong> ${something}.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
    `;
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);
}
Display.prototype.clear = function() {
    libraryForm.reset();
}
Display.prototype.validate = function(book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }
}
libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cookings');
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }


    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'your book has beem successfully added');
    } else {
        display.show('error', 'sorry you cannot add this book in this library');
    }
    e.preventDefault();
}