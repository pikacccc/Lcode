import { ListNode } from "./DataDefine";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    let p1 = head;
    let p2 = head?.next;

    while (p1?.next != null) {
        if (p2 != null && p1.val == p2.val) {
            p2 = p2.next;
        }
        else {
            p1.next = p2;
            p1 = p2;
            p2 = p2?.next;
        }
    }

    return head;
};
// @lc code=end

