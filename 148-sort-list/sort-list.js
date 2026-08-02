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
var sortList = function (head) {

    if (head === null || head.next === null) {
        return head
    }
    let prev = null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next
    }
    prev.next = null;
    let left = sortList(head);
    let right = sortList(slow)

    return merge(left, right)


    function merge(left, right) {
        let dummy = new ListNode(0);
        let tail = dummy
        while (left && right) {
            if (left.val < right.val) {
                tail.next = left
                left = left.next
                tail = tail.next
            }
            else {
                tail.next = right
                right = right.next
                tail = tail.next
            }
        }
        while (left) {
            tail.next = left;
            left = left.next
            tail = tail.next
        }
        while (right) {
            tail.next = right;
            right = right.next;
            tail = tail.next
        }
        return  dummy.next
    }
};