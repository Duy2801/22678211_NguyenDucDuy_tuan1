"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
const bai9_1 = require("./bai9");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
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
// bai9
const animals = [new bai9_1.Dog("Buddy"), new bai9_1.Cat("Kitty")];
animals.forEach((a) => a.sound());
// bai 10
const acc = new bai10_1.Account("Duy", 500, "ACC123");
console.log(acc.owner);
console.log(acc.accountNumber);
console.log(acc.getBalance());
acc.deposit(200);
console.log(acc.getBalance());
// bai 11
const dog = new bai11_1.Dog11("Buddy");
dog.move();
dog.bark();
const cat = new bai11_1.Cat11("Kitty");
cat.move();
cat.meow();
// bai 12
const bird = new bai12_1.Bird("Eagle");
bird.fly();
const fish = new bai12_1.Fish("Goldfish");
fish.swim();
//bai 13
const shapes = [new bai13_1.Square(4), new bai13_1.Circle(3)];
shapes.forEach((s) => console.log("Area:", s.area()));
//bai 14
const m = new bai14_1.Manager("Alice", 5000);
m.work();
m.manage();
const d = new bai14_1.Developer("Bob", 4000);
d.work();
d.code();
