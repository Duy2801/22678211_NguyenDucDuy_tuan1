import { Person } from "./Person";

export class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  getInfo(): string {
    return `Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}
