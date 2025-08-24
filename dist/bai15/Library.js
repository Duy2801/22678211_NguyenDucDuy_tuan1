"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added to the library.`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`User "${user.name}" registered to the library.`);
    }
    listBooks() {
        console.log("Books in library:");
        this.books.forEach((b) => console.log(`- ${b.title} by ${b.author}`));
    }
    listUsers() {
        console.log("Users in library:");
        this.users.forEach((u) => console.log(`- ${u.name}`));
    }
}
exports.Library = Library;
