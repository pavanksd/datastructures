class Node {
    constructor(data,next=null,prev=null){
        this.data = data;
        this.prev = prev;
        this.next = next;
        if(next!=null){
            next.prev = this;   
           }
    }
}

class DoublyLinkedList{

    constructor(){
        this.head = null;
        this.size=0;
    }

    // Inserting at beginig node
    insertHead(data){
        this.head = new Node(data,this.head);
        this.size++;
    }
    // Insert at last
    insertTail(data){
        var node = new Node(data);

        if(!this.head){ // if the head is empty
            this.head = node;
        } else {
            var curr_data = this.head;
            while(curr_data.next){
                curr_data = curr_data.next;
            }
            curr_data.next = node;
            node.prev = curr_data;
            this.size++;
        }
    }

    //Insert at a index
    insertAt(data,index){

        if(index>0 && index > this.size){ // out of range index
            console.log('Index not found');
            return;
        }
        
        if(index==0){
            this.head = new Node(data,this.head);
            return; 
        }

        var node = new Node(data);
        var curr, prev;
        curr  = this.head;
        var count = 0;
        while(count<index){
            prev = curr;
            curr = curr.next;
            count++;
        }

        node.next = curr;
        prev.next = node;

        node.prev = prev;
        curr.prev = node;

        this.size++;
    }

    removeAtIndex(index){
        if(index>0 && index > this.size){ // out of range index
            console.log('Index not found');
            return;
        }
        var curr  = this.head;
        var prev;
        var count=0;
        if(index==0){
            this.head = curr.next;
        } else{
            while(count<index){
                prev = curr;
                count++;
                curr = curr.next;
            }
            prev.next = curr.next;
            curr = curr.next;
            curr.prev = prev;
            this.size--;
        }
    }

    // Print the list data
    print_list_data(){
        var curr_data = this.head;
        while(curr_data){
            console.log(curr_data.data);
            curr_data = curr_data.next;
        }
    }
}

const dl = new DoublyLinkedList();
dl.insertHead(200);
dl.insertHead(100);
dl.insertTail(300);
dl.insertAt(220,2);
dl.removeAtIndex(2);
dl.print_list_data();