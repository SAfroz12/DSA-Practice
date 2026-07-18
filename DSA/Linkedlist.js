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


// 2)  Remove Duplicates from Sorted List

function removeDulp(head) {
let current=head;

while(current &&current.next){
    let nextOne=current.next
   if(current.val===nextOne.val){
     current.next=nextOne.next;
   }else{

   current=nextOne
   }
}
return head
// return current


};
// 3). Remove Linked List Elements 
function(head, val) {
let dummy=new ListNode(0);
dummy.next=head;
let previous=dummy;
let current=head;

while(current){
if(current.val===val){
    previous.next=current.next;
}
else{
    previous=current
}
current=current.next
}

return dummy.next 
};