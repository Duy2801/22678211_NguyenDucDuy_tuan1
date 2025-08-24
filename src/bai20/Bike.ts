import { Vehicle } from "./Vehicle";

export class Bike implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive(): void {
    console.log(`${this.brand} bike is riding at ${this.speed} km/h.`);
  }

  stop(): void {
    console.log(`${this.brand} bike has stopped.`);
  }
}
