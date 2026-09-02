/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
 */

import { ListNode } from "./DataDefine";

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left == right) return head;

    let leftP: ListNode = head;
    let rightP: ListNode = head;

    let preLeft: ListNode = null;
    let nextRight: ListNode = null;
    for (let i = 0; i < left - 1; ++i) {
        if (i == left - 2) {
            preLeft = leftP;
        }
        leftP = leftP?.next;

    }

    for (let i = 0; i < right - 1; ++i) {
        rightP = rightP?.next;
    }

    nextRight = rightP.next;

    if (preLeft != null)
        preLeft.next = rightP;

    if (leftP.next == rightP) {
        rightP.next = leftP;
        leftP.next = nextRight;
    }
    else {
        let p1 = leftP;
        let p2 = leftP?.next;
        let p3 = leftP?.next?.next;

        while (p3 != rightP.next) {
            p2.next = p1;
            p1 = p2;
            p2 = p3;
            p3 = p3?.next;
        }
        p2.next = p1;
        leftP.next = nextRight;
    }
    if (preLeft == null) {
        return rightP;
    }
    return head;
};
// @lc code=end

