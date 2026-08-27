/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start

export function threeSum(nums: number[]): number[][] {
    let res: number[][] = [];

    let memo: Map<string, boolean> = new Map<string, boolean>();
    nums.sort();
    if (nums[0] > 0) return res;

    let index = nums.findIndex(s => s > 0);

    for (let i = 0; i < index; ++i) {
        for (let j = i + 1; j < index; ++j) {
            let sum = nums[i] + nums[j];
            let list: number[] = [nums[i], nums[j], -(nums[i] + nums[j])].sort();
            let cache: boolean = memo.get(`${list[0]}x${list[1]}x${list[2]}`);

            if (cache !== undefined && cache) {
                continue;
            }

            let p = index;
            let numList: number[] = [];
            while (p < nums.length) {
                if (sum + nums[p] == 0) {
                    numList.push(nums[i]);
                    numList.push(nums[j]);
                    numList.push(nums[p]);
                    break;
                }
                p++;
            }

            if (numList.length != 0) {
                let tempList = numList.sort();
                res.push(tempList);
                memo.set(`${tempList[0]}x${tempList[1]}x${tempList[2]}`, true);
            }
        }
    }

    return res;
};
// @lc code=end

