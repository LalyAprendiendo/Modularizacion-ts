"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importar solamente la función suma y utilizarla desde otro archivo.
const operaciones_1 = require("./operaciones");
console.log((0, operaciones_1.add)(5, 4));
const generate_random_num_1 = require("./utils/generate-random-num");
function main() {
    const randomNum1 = (0, generate_random_num_1.generateRandomNum)();
    const randomNum2 = (0, generate_random_num_1.generateRandomNum)();
    console.log("randomNum1", randomNum1, "randomNum2", randomNum2);
    const result = (0, operaciones_1.add)(randomNum1, randomNum2);
    console.log("resultado ==> " + result);
}
main();
