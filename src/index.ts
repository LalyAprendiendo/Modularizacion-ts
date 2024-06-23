//importar solamente la función suma y utilizarla desde otro archivo.
import {add} from "./operaciones"

console.log( add(5, 4));

import { generateRandomNum } from "./utils/generate-random-num";


function main(){
    const randomNum1 = generateRandomNum()
    const randomNum2 = generateRandomNum()
    console.log("randomNum1", randomNum1,"randomNum2", randomNum2)
    const result = add(randomNum1, randomNum2)
console.log("resultado ==> " + result);

}

main()