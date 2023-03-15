function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book) => {
    return book.borrows.some((borrowsObj) => {
      return borrowsObj.returned === false;
    })
  });
  const returned = books.filter((book) => {
    return book.borrows.every((borrowsObj) => {
      return borrowsObj.returned === true;
    })
  });
  return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  //create an array that all accounts that borrowed the given book object
  //look into object.borrows to get acccess to ids that have borrowed said book
  const {borrows} = book;
  //look into accounts array to find account objects ids to match borrowed object id from book
  const result = borrows.map((borrowsObj) => {
    let temp = accounts.find((account) => {
      return account.id === borrowsObj.id;
    })
    temp.returned = borrowsObj.returned;
    return temp;
  })
  return result.slice(0, 10)
  //return account object that matches to an array 
  //then add the returned value pair to the new account object
  //THEN return the modified account object to the array 
  //*AND THEN* you can schlice the array from 0 to 10 (positions)
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
