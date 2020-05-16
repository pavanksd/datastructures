class PriorityQueue{
    constructor(){
        this.collection = [];
    }
    enqueue(element,){
        if(this.collection.length==0){
            this.collection.push(element);
            return;
        }
        var added= false;
        for(var i=0;i<this.collection.length;i++){
            if(element[1]<this.collection[i][1]){ // Check for the priority
                this.collection.splice(i,0,element);
                added= true;
                break;
            }
        }
        if(!added){
            this.collection.push(element);
        }
    }
    dequeue(){
        this.collection.shift();
    }
    printQueue(){

        console.log('With Priority: ',this.collection);
        var collection=[];
        this.collection.forEach(element => {
            collection  += element[0]+" " ;
        });
        console.log('Without Priority: ',collection);
    }
    front(){
        console.log('Front Of queue',this.collection[0]);
    }
}

const pq = new PriorityQueue();
pq.enqueue([10,2]);
pq.enqueue([15,2]);
pq.enqueue([20,1]);
pq.enqueue([40,3]);
pq.enqueue([50,4]);
pq.printQueue();
pq.front();
pq.dequeue();
pq.printQueue();
