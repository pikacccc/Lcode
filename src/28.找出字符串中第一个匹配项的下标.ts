/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    let res = -1;
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] != needle[0]) continue;

        let match = true;
        for (let j = 0; j < needle.length; ++j) {
            if (haystack[i + j] != needle[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            res = i;
            break;
        }
    }

    return res;
};
// @lc code=end

