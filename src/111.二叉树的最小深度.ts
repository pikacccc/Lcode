/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
    if (root == null) return 0;

    let min = 99999999;

    let minHeight = (node: TreeNode | null, deep: number) => {
        if (node == null) return;
        if (deep >= min) return;
        if (!node.left && !node.right) min = Math.min(deep, min);
        minHeight(node.left, deep + 1);
        minHeight(node.right, deep + 1);
    }

    return min;
};
// @lc code=end

