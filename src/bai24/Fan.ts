import { Appliance } from "./Appliance";

export class Fan extends Appliance {
  turnOn(): void {
    console.log("The fan is now ON.");
  }
}
