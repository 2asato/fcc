// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (arr, bookName) {
// .concat() works like .push() but non-mutating
  return arr.concat(bookName);
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (arr, bookName) {
  if (arr.indexOf(bookName) >= 0) {
    // makes copy of arr to mutate allowing arr to remain the same
    let newArr = [...arr];
    // .splice() removes from newArr (index of what to remove, # of elements to remove)
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;
    // return arr.slice(0, arr.indexOf(bookName) + 1)

    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// adds 'A Brief History...' and removes 'On The Elec...'
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newerBookList);
console.log(newestBookList);
