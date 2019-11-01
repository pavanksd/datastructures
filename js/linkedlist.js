class Node {
    constructor(data,next=null){
        this.data= data;
        this.next= next;
    }
}

class Linked_List{
    constructor(){
        this.head= null;
        this.size = 0;
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

        this.size++;
    }

    //get value of a index
    getvalue(index){
        var curr = this.head;
        console.log(curr);
        let count=0;
        while(curr){
            if(count==index){
                console.log(curr.data+" at index "+index);
                return;
            }
            count++;
            curr= curr.next;
        }
        return;
    }

    //remove at a index
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

const ll = new Linked_List();
ll.insertHead(100);
ll.insertHead(200);
ll.insertHead(300);
ll.insertTail(50);
ll.insertAt(120,2);
ll.getvalue(2);

ll.print_list_data();

// ll.removeAtIndex(2);
// ll.print_list_data();