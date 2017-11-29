/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 2017-11-27
 * beats 9.78 % of javascript submissions.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var num1 = realNumber(l1, []),
        num2 = realNumber(l2, []),
        num = [],
        num_len = num1.length >= num2.length ? num1.length : num2.length;

    var num_0 = 0,
        num_1 = 0,
        num_2 = 0,
        addNum = 0,
        split_num = [];
    for (let i = 0 ; i < num_len ; i++ ) {
        num_1 = num1[i] > 0 ? num1[i] : 0;
        num_2 = num2[i] > 0 ? num2[i] : 0;
        addNum = num_0 + num_1 + num_2;
        if (addNum > 9){
            addNum = addNum % 10;
            num_0 = 1;
        }else{
            num_0 = 0;
        }
        num.push(addNum);
    }
    if(num_0 === 1){
        num.push(num_0);
    }
    return num;
};

var realNumber = function (ln, arr) {
    arr.push(ln.val);
    if (ln.next) {
        return realNumber(ln.next, arr);
    }
    return arr;
}



var a1 = new ListNode(1);
a1.next = next = new ListNode(8);
var a2 = new ListNode(0)

console.log(addTwoNumbers(a1, a2))
