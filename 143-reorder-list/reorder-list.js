/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
 if(!head||head.next===null){
    return head
 }
    let slow = head;
    let fast = head;
    let prev = null
    while (fast && fast.next) {
        prev = slow;
        slow=slow.next;
        fast=fast.next.next;

    }
    prev.next=null;
  let previous=null;
  let tail=slow;
  while(tail){
    let next=tail.next;
    tail.next=previous;
    previous=tail
    tail=next;
  };
  let current=head;
  let current1=previous;
  while(current&&current1){
  let next1=current1.next;
  let next=current.next;
  current.next=current1;
  if(next===null){
    break
  }
  current1.next=next;
  current=next;
  current1=next1
  }

  return head
};