import { Movable } from "./Movable";

export class Robot implements Movable {
  move(): void {
    console.log("The robot is walking ...");
  }
}
