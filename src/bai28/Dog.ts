import { Animal } from "./Animal";

export class Dog extends Animal {
  protected makeSound(): void {
    console.log("Woof! Woof!");
  }
}
