import { ListNode } from "./DataDefine";


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head: ListNode = new ListNode(-1, null);
    let p1: ListNode = list1;
    let p2: ListNode = list2;
    let p = head;
    while (p1 != null && p2 != null) {
        if (p1.val >= p2.val) {
            p.next = p2;
            p2 = p2.next;
        }
        else {
            p.next = p1;
            p1 = p1.next;
        }
        p = p.next;
    }

    p.next = p1 ? p1 : p2;
    
    return head.next;
};
// @lc code=end

