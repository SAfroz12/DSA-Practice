/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let first = head;
    if (head === null||head.next===null) {
        return head
    }
    let slow = head;
    let fast = head;
    let previous = null

    while (fast && fast.next) {
        previous = slow
        slow = slow.next;
        fast = fast.next.next;

    }
    if(fast){
        slow=slow.next
    }
    previous.next = null
    let prev = null;
    let current = slow;
    while (current) {
        let next = current.next;
        current.next = prev
        prev = current;
        current = next
    };
    let tail1 = head;
    let tail2 = prev;
    while (tail1 && tail2) {
        if (tail1.val !== tail2.val) {
            return false
        }
        tail1 = tail1.next
        tail2 = tail2.next
    }
    return true


};