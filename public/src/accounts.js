function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
  nameA.name.last.toLowerCase() < nameB.name.last.toLowerCase()
  ? -1 : 1);
}

function getTotalNumberOfBorrows(account, books) {
  const {id} = account;

  let counter = books.reduce((acc, book) => {
    let borrowed = book.borrows.filter((borrowObject) => {
      return borrowObject.id === id;
  });
  return acc + borrowed.length;
}, 0);
return counter; 
}

function getBooksPossessedByAccount(account, books, authors) {
  const {id} = account;

  let borrowed = books.filter((book) => {
    const found = book.borrows[0].id === id && book.borrows[0].returned === false;
    const authorInfo = authors.find((author) => {
      return author.id === book.authorId;
    })
    book.author = authorInfo;
    return found;
  })
  return borrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
