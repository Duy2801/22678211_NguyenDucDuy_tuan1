import { Vehicle } from "./Vehicle";

export class Car implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive(): void {
    console.log(`${this.brand} car is driving at ${this.speed} km/h.`);
  }

  stop(): void {
    console.log(`${this.brand} car has stopped.`);
  }
}
