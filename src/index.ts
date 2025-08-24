import { Person } from "./bai1";
import { Account } from "./bai10";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";
import { Animal, Dog, Cat } from "./bai9";
import { Dog11, Cat11 } from "./bai11";
import { Bird, Fish } from "./bai12";
import { Shape, Square, Circle } from "./bai13";
import { Manager, Developer } from "./bai14";
import { Book15 } from "./bai15/Book";
import { User15 } from "./bai15/User";
import { Library } from "./bai15/Library";

import { MathUtil } from "./bai18";
var person = new Person("Duy", 22);
person.displayInfo();

const student1 = new Student("Duy", 22, "A");
student1.displayAllInfo();

const car1 = new Car("Toyota", "Camry", 2022);
car1.showInfo();

const rect1 = new Rectangle(5, 10);

console.log("Area:", rect1.getArea());
console.log("Perimeter:", rect1.getPerimeter());

const myAccount = new BankAccount(1000);

myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(2000);
myAccount.showBalance();

const book = new Book("5 anh em sieu nhan", "hung", 2021);
book.showBook();

const user = new User("Duy");
console.log(user.name);

const products: Product[] = [
  new Product("Book", 50),
  new Product("Laptop", 1200),
  new Product("Phone", 800),
  new Product("Pen", 20),
  new Product("Headphones", 150),
];

const expensiveProducts = products.filter((p) => p.price > 100);

console.log("Products with price > 100:");
expensiveProducts.forEach((p) => console.log(`${p.name} - $${p.price}`));
// bai9
const animals: Animal[] = [new Dog("Buddy"), new Cat("Kitty")];

animals.forEach((a) => a.sound());
// bai 10
const acc = new Account("Duy", 500, "ACC123");
console.log(acc.owner);
console.log(acc.accountNumber);
console.log(acc.getBalance());

acc.deposit(200);
console.log(acc.getBalance());
// bai 11
const dog = new Dog11("Buddy");
dog.move();
dog.bark();

const cat = new Cat11("Kitty");
cat.move();
cat.meow();
// bai 12
const bird = new Bird("Eagle");
bird.fly();

const fish = new Fish("Goldfish");
fish.swim();
//bai 13
const shapes: Shape[] = [new Square(4), new Circle(3)];

shapes.forEach((s) => console.log("Area:", s.area()));
//bai 14

const m = new Manager("Alice", 5000);
m.work();
m.manage();

const d = new Developer("Bob", 4000);
d.work();
d.code();
// bai 15

const library = new Library();

const book1 = new Book15("Clean Code", "Robert C. Martin");
const book2 = new Book15("Design Patterns", "GoF");

const user1 = new User15("Duy");
const user2 = new User15("Alice");

library.addBook(book1);
library.addBook(book2);

library.addUser(user1);
library.addUser(user2);

library.listBooks();
library.listUsers();
// bai 16

import { Box } from "./bai16";
const numberBox = new Box<number>(123);

console.log("Number:", numberBox.getValue());
numberBox.setValue(456);
console.log("Updated Number:", numberBox.getValue());

const stringBox = new Box<string>("Hello");
console.log("String:", stringBox.getValue());
stringBox.setValue("World");
console.log("Updated String:", stringBox.getValue());

const userBox = new Box<{ name: string; age: number }>({
  name: "Duy",
  age: 21,
});
console.log("User:", userBox.getValue());
userBox.setValue({ name: "Alice", age: 25 });
console.log("Updated User:", userBox.getValue());

//17
import { Logger } from "./bai17";

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("First message");
logger2.log("Second message");

console.log("Same instance?", logger1 === logger2);

//18

console.log("Add:", MathUtil.add(10, 5));
console.log("Subtract:", MathUtil.subtract(10, 5));
console.log("Multiply:", MathUtil.multiply(10, 5));
console.log("Divide:", MathUtil.divide(10, 5));
