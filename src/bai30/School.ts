import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log("=== School Info ===");
    console.log("Teachers:");
    this.teachers.forEach((t) => console.log(" - " + t.getInfo()));

    console.log("Students:");
    this.students.forEach((s) => console.log(" - " + s.getInfo()));
  }
}
