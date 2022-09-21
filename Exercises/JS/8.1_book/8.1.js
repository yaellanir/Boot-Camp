const book = {
  bookName: "harry potter",
  pages: 300,
  type: "mystery",
  author: "j.k rolling",
  chapters: 10,
  publishingYear: 1999,
};

function bookDescription() {
  return `the book ${book.bookName} was written by ${book.author} in the year ${book.publishingYear}`;
}

console.log(bookDescription());
