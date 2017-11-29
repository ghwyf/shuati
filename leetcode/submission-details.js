/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 2017-11-29 16:39:02
 * beats 87.91 % of javascript submissions.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 && l2) {
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  } else {
    return l1 || l2;
  }

};

//1.输入 mergeTwoLists([1,3] [2,4])
//2.返回 [1,mergeTwoLists([3],[2,4])]
//3.返回 [1,2,mergeTwoLists([3],[4])]
//4.返回 [1,2,3,mergeTwoLists([],[4])]
//4.返回 [1,2,3,4]