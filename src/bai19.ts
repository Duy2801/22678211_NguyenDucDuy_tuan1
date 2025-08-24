export class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}
export class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}
export class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): void {
    console.log(`${this.name} says: Meow!`);
  }
}
