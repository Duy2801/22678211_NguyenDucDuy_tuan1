"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat11 = exports.Dog11 = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving...`);
    }
}
class Dog11 extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`${this.name} says: Woof!`);
    }
}
exports.Dog11 = Dog11;
class Cat11 extends Animal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log(`${this.name} says: Meow!`);
    }
}
exports.Cat11 = Cat11;
