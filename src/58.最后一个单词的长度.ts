/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    let endP: number = s.length - 1;

    while (true) {
        if (s[endP] == " ") {
            endP--;
            continue;
        }
        else {
            break;
        }
    }

    let res: number = 0;

    for (let i = endP; i >= 0; --i) {
        if (s[i] == " ") break;
        res++;
    }

    return res;
};
// @lc code=end

