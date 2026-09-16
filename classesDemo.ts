import {showSeparator} from "./functionsHomework.ts";
import {Trader, QAengineer} from "./classesHomework.ts";

//create instances
const trader1 = new Trader();
trader1.id = 1;
trader1.username = 'vitek228';
trader1.regDate = '2020-06-01';
trader1.accBalance = 676767;

const trader2 = new Trader();
trader2.id = 2;
trader2.username = 'loodick1337';
trader2.regDate = '2026-06-01';
trader2.accBalance = -10000000;

let qa1 = new QAengineer(1, 'Vitya', false, 'manual only')

let qa2 = new QAengineer(2, 'Marina', true, 'TypeScript + PlayWright')

// check outputs
showSeparator();
console.log(trader1);
showSeparator();
console.log(trader2);
showSeparator();
console.log(qa1);
showSeparator();
console.log(qa2);