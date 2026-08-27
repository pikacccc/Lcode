/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
export function removeElement(nums: number[], val: number): number {
    let point = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] == val) continue;
        nums[point] = nums[i];
        point++;
    }
    return point;
};
// @lc code=end

