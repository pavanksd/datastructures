class Queue{
    constructor(){
        this.collection=[];
    }
    enqueue(element){
        this.collection.push(element);
    }
    dequeue(){
        this.collection.shift();
    }
    printQueue(){
        console.log('Queue collection: ',this.collection);
    }
    front(){
        console.log('Front Of queue: ',this.collection[0]);
    }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(40);
q.printQueue();
q.front();
q.dequeue();
q.printQueue();
