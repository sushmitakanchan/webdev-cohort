// You need to implement the Library constructor function and its prototype methods

function Library() {
    // Initialize books property
    this.books = [];
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function(book){
  if(Array.isArray(book)){
      this.books.push(...book);
  }else{
    this.books.push(book)
  }
  return this.books;
}

// Define findBook method on Library's prototype
Library.prototype.findBook = function(title){
  if(this.books.includes(title)){
    return "Book found"
  }else{
    return "Book not found"
  }
}


const Li = new Library()
Li.addBook(["Harry Potter", "The Hobbit"])
console.log(Li.findBook("Dune"))