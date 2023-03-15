function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let counter = books.reduce((acc, book) => {
    if(book.borrows[0].returned === false) {
      acc++;
  }
  return acc;
}, 0);
return counter;
}

function getMostCommonGenres(books) {
  let counterObj = {};

  books.forEach((book) => {
    if(counterObj[book.genre] != null){
      counterObj[book.genre]++;
    } else {
      counterObj[book.genre] = 1;
    }
  });
  let countArr = [];

  for(const [key, value] of Object.entries(counterObj)) {
    countArr.push({
      name : key, 
      count : value
    });
  }
  countArr.sort((a, b) => b.count - a.count);
  return countArr.slice(0, 5)
}

function helper(books){
  return books.sort((a, b) => {
    return b.borrows.length - a.borrows.length;
  });
}

function getMostPopularBooks(books) {
  const result = helper(books).slice(0, 5);

  return result.map((bookObj) => ({
      name: bookObj.title, 
      count: bookObj.borrows.length
    }))
}

function getMostPopularAuthors(books, authors) {
  const sortedBookArray = helper(books).slice(0, 5);
  let popular = [];

  sortedBookArray.forEach((book) => {
    const authorIds = authors.filter((author) => {
      return author.id === book.authorId;
    });
    authorIds.map((authorIdsObj) => {
      const {first, last} = authorIdsObj.name
       return popular.push({
         name: `${first} ${last}`,
         count: book.borrows.length,
       });
    });
  })
  return popular; 
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
