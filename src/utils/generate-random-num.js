"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNum = generateRandomNum;
function generateRandomNum() {
    const randomNum = Math.random() * 10;
    const randomNumInt = Math.trunc(randomNum);
    return randomNumInt;
}
