// Task 1
// 1.1 - class w/o constructor
export class Trader {
    id: number;
    username: string;
}
// 1.2 - class w constructor
export class QAengineer {
    id: number;
    fullName: string;
    isAuto: boolean;

    constructor(id: number, fullName: string, isAuto: boolean) {
        this.id = id;
        this.fullName = fullName;
        this.isAuto = isAuto;
    }
}


