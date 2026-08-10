/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {

    let dummy = new ListNode(0);
    dummy.next = head;
    let previous = dummy
 

   
    while(previous.next&&previous.next.next){
         let first = previous.next;
        let second = first.next;
        let nextNode = second.next;
        previous.next=second;
        second.next=first;
        first.next=nextNode;
        previous=first;
     
    }
    return dummy.next
}; 