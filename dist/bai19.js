"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} says: Woof!`);
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} says: Meow!`);
    }
}
exports.Cat = Cat;
