"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditioner = void 0;
const Appliance_1 = require("./Appliance");
class AirConditioner extends Appliance_1.Appliance {
    turnOn() {
        console.log("The air conditioner is now ON");
    }
}
exports.AirConditioner = AirConditioner;
