export class Stack {
    constructor() {
        this.array = new Array();
    }
    push(item){
        this.array.push(item);
    }
    pop(){
        return this.array.pop();;
    }
}