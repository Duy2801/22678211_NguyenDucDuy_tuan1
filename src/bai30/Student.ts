import { Person } from "./Person";

export class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getInfo(): string {
    return `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}