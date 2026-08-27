/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
export function climbStairs(n: number): number {
    const memo: Map<number, number> = new Map<number, number>();

    const num = (n) => {
        let cache: number = memo.get(n);
        if (cache !== undefined) {
            return cache;
        }
        let count = 0;
        if (n == 1) {
            count = 1;
        }
        else if (n == 2) {
            count = 2;
        }
        else {
            count = num(n - 1) + num(n - 2);
        }

        memo.set(n, count);
        return count;
    }
    let res = num(n);
    return res;
};
// @lc code=end

