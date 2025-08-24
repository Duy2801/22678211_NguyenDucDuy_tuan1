import { Movable } from "./Movable";

export class Car implements Movable {
  move(): void {
    console.log("The car is driving ...");
  }
}
