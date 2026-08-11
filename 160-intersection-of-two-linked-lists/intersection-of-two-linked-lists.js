/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let countA = 0;
    let countB = 0;
    let currentA = headA;
    let currentB = headB;
    while (currentA) {

        countA++
        currentA = currentA.next
    }
    while (currentB) {
        countB++;
        currentB = currentB.next
    }

    let diff = Math.max(countA, countB) - Math.min(countA, countB);
    currentA = headA;
    currentB = headB;
    if (countA > countB) {
        while (diff > 0) {
            currentA = currentA.next;
            diff--
        }
    } else {
        while (diff > 0) {
            currentB = currentB.next;
            diff--
        }
    }

while(currentA!==currentB){
   currentA=currentA.next
   currentB=currentB.next
}
return currentB
};