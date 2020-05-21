class Node{
    constructor(data,left=null,right=null){
        this.data= data;
        this.left= left;
        this.right= right;
    }
}

class BST{
    constructor(){
        this.root=null;
    }

    add(data){
        const node = this.root;
        if(node==null){
            this.root=new Node(data);
            return;
        }
        this.searchForInsert(data,node);
        
    }
    
    searchForInsert(data,node){
        
        this.node = node;
        if(data < node.data){
            if(node.left==null){
                node.left = new Node(data)
            }else{
                this.searchForInsert(data,node.left);
            }
        } else if(data > node.data){
            if(node.right==null){
                node.right = new Node(data)
            }else{
                this.searchForInsert(data,node.right);
            }
        }
    }

    findMin(){
        var curr = this.root;
        while(curr.left){
            curr = curr.left;
        }
        console.log('Min In BST: ',curr.data);
    }

    findMax(){
        var curr = this.root;
        while(curr.right){
            curr = curr.right;
        }
        console.log('Max In BST: ',curr.data);
    }

    isPresent(data){
        var curr = this.root;
        while(curr){
            if(data==curr.data){
                console.log('Data found');
                break;
            }
            if(data<curr.data){
                curr = curr.left
            }else{
                curr = curr.right;
            }
        }
        if(curr==null){
            console.log('Data not found');
            return;
        }
    }

    remove(data){
        const node = this.root;
        if(node==null){
            console.log('Tree is empty');
            return;
        }
        this.removeHelper(data,node);
    }

    removeHelper(data,node){
        this.node = node;
        if(data<node.data){
           node.left = this.removeHelper(data,node.left);
           return node;
        }else if(data>node.data){
            node.right =this.removeHelper(data,node.right);
            return node;
        }else{
            if(node.left==null && node.right==null){
                return null;
            } 
            if(node.left==null){
                return node.right;
            }
            if(node.right==null){
                return node.left;
            }
        }
    }

    printBST(){
        console.log(this.root);
    }
}

const bst = new BST();
bst.add(20);
bst.add(10);
bst.add(8);
bst.add(30);
bst.add(25);
bst.add(55);
bst.add(12);
bst.add(11);
bst.printBST();
bst.remove(12);
bst.findMin();
bst.findMax();
bst.isPresent(10);
bst.isPresent(13);
bst.find(10);
bst.printBST();