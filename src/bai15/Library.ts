import { Book15 } from "./Book";
import { User15 } from "./User";

export class Library {
  private books: Book15[] = [];
  private users: User15[] = [];

  addBook(book: Book15): void {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
  }

  addUser(user: User15): void {
    this.users.push(user);
    console.log(`User "${user.name}" registered to the library.`);
  }

  listBooks(): void {
    console.log("Books in library:");
    this.books.forEach((b) => console.log(`- ${b.title} by ${b.author}`));
  }

  listUsers(): void {
    console.log("Users in library:");
    this.users.forEach((u) => console.log(`- ${u.name}`));
  }
}
