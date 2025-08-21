import { Person } from "./bai1";
import { Student } from './bai2';
import { Car } from './bai3';

var person = new Person('Duy',22)
person.displayInfo();

const student1 = new Student("Duy", 22, "A");
student1.displayAllInfo();

const car1 = new Car("Toyota", "Camry", 2022);
car1.showInfo();