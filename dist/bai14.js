"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = exports.Employee = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working...`);
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    manage() {
        console.log(`${this.name} is managing the team.`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    code() {
        console.log(`${this.name} is writing code.`);
    }
}
exports.Developer = Developer;
