export class Book {
  title: String;
  author: String;
  year: number;
  constructor(title: String, author: String, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  showBook(): void {
    console.log(`${this.title}`);
    console.log(`${this.author}`);
    console.log(`${this.year}`);
  }
}
