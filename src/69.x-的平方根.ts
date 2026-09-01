/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {
    let low = 0;
    let hei = x;
    if (x == 1) return 1;
    while (true) {
        let avg = Math.floor((low + hei) / 2);
        if (avg * avg <= x && (avg + 1) * (avg + 1) > x) {
            return avg;
        }
        else if (avg * avg <= x && (avg + 1) * (avg + 1) == x) {
            return avg + 1;
        }
        else {
            if (avg * avg > x) {
                hei = avg - 1;
            }
            else {
                low = avg + 1;
            }
        }
    }
};
// @lc code=end

