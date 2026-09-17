import {showSeparator} from "./functionsHomework.ts";
import {Trader, QAengineer} from "./classesHomework.ts";

//create instances
const trader1 = new Trader();
trader1.id = 1;
trader1.username = 'vitek228';

const trader2 = new Trader();
trader2.id = 2;
trader2.username = 'loodick1337';

let qa1 = new QAengineer(1, 'Vitya', false)

let qa2 = new QAengineer(2, 'Marina', true)

// check outputs
showSeparator();
console.log(trader1);
showSeparator();
console.log(trader2);
showSeparator();
console.log(qa1);
showSeparator();
console.log(qa2);