"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = void 0;
const Appliance_1 = require("./Appliance");
class Fan extends Appliance_1.Appliance {
    turnOn() {
        console.log("The fan is now ON.");
    }
}
exports.Fan = Fan;
