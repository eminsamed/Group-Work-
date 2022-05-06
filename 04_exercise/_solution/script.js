/**
 * Create an object called books. 
 * It should contain names of books for sale, information if the book has been sold or not, and the price of the book. 
 * Add 3 books to the object. 
 * Show the elements of this object in the HTML, and add a way for the user to add books. 
 * Style the HTML using CSS flex.
 */

const bookList = document.querySelector("table");
const button = document.querySelector("button");
const fields = document.querySelectorAll("input, select");

const books = {
   0: new Book("A practical guide to Information Architecture",true,29.00),
   1: new Book("Web ReDesign - Workflow that Works",false,45.00),
   2: new Book("CSS Mastery", false, 39.95)
}

button.addEventListener("click", addNewBook);
listBooks();

function Book(title,sold,price){
   this.title = title;
   this.sold = sold;
   this.price = price;
}

function addNewBook(e){
   e.preventDefault();
   let errors = 0;
   fields.forEach(function(field){
      if(field.value.trim()===""){
         errors++;
      }
   });
   if(errors === 0){
      var length = Object.keys(books).length;
      books[length++] = new Book(fields[0].value,fields[1].value,fields[2].value);
      listBooks();
   } else {
      alert("Please fill out all the fields");
   }
}

function listBooks(){
   bookList.innerHTML = "";
   for(property in books){
      let trTag = document.createElement("tr");
      let tdContent = "";
      let book = books[property];
      for(prop in book){
         if(prop === "title"){
            tdContent += `<th>${book[prop]}</th>`;
         } else if(prop === "sold"){
            if(book[prop] == true)
               tdContent += `<td>SOLD</td>`;
            else 
               tdContent += `<td> </td>`;
         } else {
            const francs = new Intl.NumberFormat(`ch-DE`, {
               currency: `CHF`,
               style: 'currency',
           }).format(book[prop]);
            tdContent += `<td>${francs}</td>`;
         }
      }
      trTag.innerHTML = tdContent;
      bookList.appendChild(trTag);
   }
}