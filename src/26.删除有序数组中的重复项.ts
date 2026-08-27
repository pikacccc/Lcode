/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=startex 
export function removeDuplicates(nums: number[]): number {
    // let memo: Set<number> = new Set();

    // for (let i of nums) {
    //     let cache = memo.has(i);
    //     if (cache) continue;
    //     memo.add(i);
    // }
    // let index = 0;
    // memo.forEach((v, s) => {
    //     nums[index] = v;
    //     index++;
    // })
    // return memo.size;
    if (nums.length == 0) return 0;
    let p1 = 0;
    let p2 = 1;
    let index = 0;
    while (p2 < nums.length) {
        if (nums[p1] == nums[p2]) {
            p2++;
            continue;
        }

        nums[index] = nums[p1];
        index++;
        p1 = p2;
        p2++;
    }
    nums[index] = nums[nums.length - 1];
    return index + 1;
};
// @lc code=end

