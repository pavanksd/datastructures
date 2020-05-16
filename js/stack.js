class Stack{

    constructor(){
        this.item=[];
    }

    push(element){
        this.item.push(element);
    }

    pop(){
        if(this.item.length==0){
            console.log('Underflow');
            return;
        }
        console.log("poped- "+this.item.pop());
    }
    peek(){
        console.log("Tos- "+this.item[this.item.length-1]);
    }
    printStack(){
        console.log("Stack Content");
        this.item.forEach(element => {
            console.log(element);
        });
    }
}

const stack =  new Stack();

stack.push(10);
stack.push(20);
stack.push(50);
stack.printStack();
stack.pop();
stack.peek();
stack.printStack();