let name_string = 'Kali';

let title = `${name_string}'s First Plotly Chart`;

let books = ["Sharp Objects", "The Hunger Games", "Gone Girl"];

let timesRead = [5, 3, 4];

let myData = {
    nameString: name_string,
    favouriteBooks: books,
    timesRead: timesRead,
    age: 24
};

console.log('Hello!');
console.log(myData);

myData.books = {
    titles: myData.favouriteBooks,
    timesRead: myData.timesRead
};

delete myData.favouriteBooks;
delete myData.timesRead;

console.log(myData);