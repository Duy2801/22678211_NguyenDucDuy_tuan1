import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";
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
