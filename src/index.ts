import { Person } from "./bai1";
import { Student } from './bai2';
import { Car } from './bai3';
import { Rectangle } from './bai4';
import { BankAccount } from './bai5';

var person = new Person('Duy',22)
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