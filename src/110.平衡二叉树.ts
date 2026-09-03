/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {

    const height = (node: TreeNode | null): number => {
        if (node == null) return 0;
        return Math.max(height(node.left), height(node.right)) + 1;
    }
    const isAVL = (node: TreeNode | null): boolean => {
        if (node == null) return true;
        return Math.abs(height(node?.left) - height(node?.right)) <= 1&& isAVL(node.left) && isAVL(node.right);
    }

    return isAVL(root);
};
// @lc code=end

