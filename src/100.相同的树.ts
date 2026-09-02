/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
 */

import { TreeNode } from "./DataDefine";

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null && q == null) return true;
    let res: boolean = true;
    const midTra = (node2: TreeNode | null, node1: TreeNode | null) => {
        if (res = false) return;
        if (node1?.val != node2?.val) res = false;
        if (node2?.left || node1?.left) midTra(node1?.left, node2?.left);
        if (node2?.right || node1?.right) midTra(node1?.right, node2?.right);
    }

    midTra(p, q);
    return res;
};
// @lc code=end

