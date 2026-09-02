/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
    const result: string[] = [];
    const path: string[] = [];

    if (s.length < 4 || s.length > 12) {
        return result;
    }

    const backtrack = (start: number): void => {
        const remainingParts = 4 - path.length;
        const remainingChars = s.length - start;

        // 每段至少需要 1 个字符，最多允许 3 个字符。
        if (remainingChars < remainingParts ||
            remainingChars > remainingParts * 3) {
            return;
        }

        if (path.length === 4) {
            result.push(path.join("."));
            return;
        }

        let value = 0;
        for (let end = start; end < s.length && end < start + 3; ++end) {
            // 多位数字不能以 0 开头，后续长度也不必再尝试。
            if (end > start && s[start] === "0") {
                break;
            }

            value = value * 10 + Number(s[end]);
            // 数字继续增长只会更大，可以直接停止当前分支。
            if (value > 255) {
                break;
            }

            path.push(s.slice(start, end + 1));
            backtrack(end + 1);
            path.pop();
        }
    };

    backtrack(0);

    return result;
};
// @lc code=end

