// 1) print linkedlist;
class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
let current;

let first=new Node(10);
let second=new Node(20);
let third=new Node(30)

first.next=second;
second.next=third
current=first;
while(current){
    console.log(current.data)
    current=current.next
}
