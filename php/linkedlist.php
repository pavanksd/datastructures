<?php 
class Node{
    public function __construct($data,$next=null){
        $this->data = $data;
        $this->next = $next;
    }
}


class LinkedList{
    public function __construct(){
        $this->head = null;
        $this->size = 0;
    }

   function inserthead($data){
    $this->head = new Node($data,$this->head);
    }

    function insertTail($data){
        if(!$this->head){
            $this->head = new Node($data,$this->head);
        }
        $node = new Node($data);
        $curr = $this->head;
        while($curr->next){
            $curr = $curr->next; 
        }
        $curr->next = $node;
    }

    function printlist(){
        $curr = $this->head;
        print_r($curr);
        while($curr){
            echo $curr->data."\n";
            $curr = $curr->next; 

        }
    }
}

$ll  = new LinkedList();
$ll->inserthead(20);
$ll->inserthead(10);
$ll->insertTail(30);
$ll->printlist();
?>