const book1 = {
  name: "harry potter",
  author: "j.k rolling",
  year: "1999",
};

const book2 = {
  name: "cat in the hat",
  author: "dr. seuss",
  year: 1980,
};

const bookUtils = {
  getFirstPublished(obj1, obj2) {
    if (obj1.year > obj2.year) {
      return obj2;
    } else {
      return obj1;
    }
  },
  setNewEdition(book, editionYear) {
    if (editionYear > book.year) {
      book.latestEdition = editionYear;
    }
  },
  setLanguage(book, language) {
    book.language = language;
  },
  setTranslation(book, language, translator) {
    book.translation = {
      translator,
      language,
    };
  },
  setPublisher(book, name, location) {
    book.publisher = {
      name,
      location,
    };
  },
  isSamePublisher(book1, book2) {
    if (
      book1.publisher === book2.publisher &&
      book1.location === book2.location
    ) {
      return true;
    } else {
      return false;
    }
  },
};
bookUtils.setNewEdition(book1, 2010);
console.log(book1);

console.log(bookUtils.getFirstPublished(book1, book2));
console.log(bookUtils);

