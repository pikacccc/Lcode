/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let tempList: number[] = [];

    for (let i = 0; i < digits.length; ++i) {
        tempList.push(0);
    }

    let isCarray = false;
    for (let i = digits.length - 1; i >= 0; --i) {
        let curNum = digits[i];
        let num = (i != digits.length - 1) ? (isCarray ? curNum + 1 : curNum) : curNum + 1;
        if (num == 10) {
            tempList[i] = 0;
            isCarray = true;
        }
        else {
            tempList[i] = num;
            isCarray = false;
        }
    }

    let res: number[] = [];
    if (isCarray) {
        res.push(1);
    }
    res.push(...tempList);
    return res;
};
// @lc code=end

