export class Queue{
    constructor() {
        this.array = new Array();
    }
    push(item){
        this.array.push(item)
    }
    shift(){
        let i = this.array[this.array.length-1];
        this.array = this.array.map((item,key)=>{
            if(key !== this.array.length-1){
                return item
            }
        });
        return i;
    }
}