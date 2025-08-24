"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    showBook() {
        console.log(`${this.title}`);
        console.log(`${this.author}`);
        console.log(`${this.year}`);
    }
}
exports.Book = Book;
