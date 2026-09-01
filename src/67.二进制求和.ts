/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

function num2str(a: number): string { return a == 0 ? "0" : "1"; }
function str2num(a: string): number { return a == "0" ? 0 : 1; }
// @lc code=start
export function addBinary(a: string, b: string): string {
    if (a.length > b.length) {
        let count = a.length - b.length;
        for (let i = 0; i < count; ++i) {
            b = "0" + b;
        }
    }
    else if (a.length < b.length) {
        let count = b.length - a.length;
        for (let i = 0; i < count; ++i) {
            a = "0" + a;
        }
    }

    let str: string = "";
    let carrayNum: number = 0;
    for (let i = a.length - 1; i >= 0; --i) {
        let curA = a[i];
        let curB = b[i];

        let numA = str2num(curA);
        let numB = str2num(curB);

        let sum = numA + numB + carrayNum;
        if (sum >= 2) {
            if (sum == 2) {
                str = "0" + str;
            }
            else {
                str = "1" + str;
            }
            carrayNum = 1;
        }
        else {
            if (sum == 0) {
                str = "0" + str;
            }
            else {
                str = "1" + str;
            }
            carrayNum = 0;
        }
    }

    if (carrayNum == 1) {
        str = "1" + str;
    }

    return str;
};
// @lc code=end

