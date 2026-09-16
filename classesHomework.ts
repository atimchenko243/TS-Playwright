// Task 1
// 1.1 - class w/o constructor
export class Trader {
    id: number;
    username: string;
    regDate: string;
    accBalance: number;
}
// 1.2 - class w constructor
export class QAengineer {
    id: number;
    fullName: string;
    isAuto: boolean;
    stack: string;

    constructor(id: number, fullName: string, isAuto: boolean, stack: string) {
        this.id = id;
        this.fullName = fullName;
        this.isAuto = isAuto;
        this.stack = stack;
    }
}


