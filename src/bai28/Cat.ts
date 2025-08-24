import { Animal } from "./Animal";

export class Cat extends Animal {
  protected makeSound(): void {
    console.log("Meow!");
  }
}
