"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
class Bike {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`${this.brand} bike is riding at ${this.speed} km/h.`);
    }
    stop() {
        console.log(`${this.brand} bike has stopped.`);
    }
}
exports.Bike = Bike;
