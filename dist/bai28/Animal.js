"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    makeSound() {
        console.log("Some generic animal sound...");
    }
    speak() {
        this.makeSound();
    }
}
exports.Animal = Animal;
