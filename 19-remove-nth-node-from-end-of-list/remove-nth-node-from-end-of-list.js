/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    let count=0
    let dummy = new ListNode(0);
    let slow = dummy;
    let fast = dummy;
    slow.next = head;
    fast.next = head;
    while (fast && fast.next) {
        fast = fast.next;
        count++;
        if(count>=n+1){
            slow=slow.next
        }

    };

    slow.next=slow.next.next;
    return dummy.next
};