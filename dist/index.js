"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
var person = new bai1_1.Person("Duy", 22);
person.displayInfo();
const student1 = new bai2_1.Student("Duy", 22, "A");
student1.displayAllInfo();
const car1 = new bai3_1.Car("Toyota", "Camry", 2022);
car1.showInfo();
const rect1 = new bai4_1.Rectangle(5, 10);
console.log("Area:", rect1.getArea());
console.log("Perimeter:", rect1.getPerimeter());
const myAccount = new bai5_1.BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(2000);
myAccount.showBalance();
const book = new bai6_1.Book("5 anh em sieu nhan", "hung", 2021);
book.showBook();
const user = new bai7_1.User("Duy");
console.log(user.name);
const products = [
    new bai8_1.Product("Book", 50),
    new bai8_1.Product("Laptop", 1200),
    new bai8_1.Product("Phone", 800),
    new bai8_1.Product("Pen", 20),
    new bai8_1.Product("Headphones", 150),
];
const expensiveProducts = products.filter((p) => p.price > 100);
console.log("Products with price > 100:");
expensiveProducts.forEach((p) => console.log(`${p.name} - $${p.price}`));
