/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */




class CusRegExp {
    Reg: string = "";

    constructor(p) {
        this.Reg = p;
    }

    isMatch(s: string): boolean {
        // '*' 必须修饰前面的字符，并且不能连续出现。
        for (let i = 0; i < this.Reg.length; i++) {
            if (this.Reg[i] == "*" && (i == 0 || this.Reg[i - 1] == "*")) {
                return false;
            }
        }

        const memo = new Map<string, boolean>();

        const match = (sIndex: number, pIndex: number): boolean => {
            const key = `${sIndex},${pIndex}`;
            const cached = memo.get(key);
            if (cached !== undefined) {
                return cached;
            }

            let result: boolean;

            // 模式已经用完，字符串也必须同时用完才算完整匹配。
            if (pIndex == this.Reg.length) {
                result = sIndex == s.length;
            }
            else {
                const firstMatch =
                    sIndex < s.length &&
                    (this.Reg[pIndex] == "." || this.Reg[pIndex] == s[sIndex]);

                if (pIndex + 1 < this.Reg.length && this.Reg[pIndex + 1] == "*") {
                    result =
                        // 前面的元素匹配 0 次，跳过“元素*”。
                        match(sIndex, pIndex + 2) ||
                        // 匹配 1 次或更多：消耗一个字符，模式仍停在原位置。
                        (firstMatch && match(sIndex + 1, pIndex));
                }
                else {
                    result = firstMatch && match(sIndex + 1, pIndex + 1);
                }
            }

            memo.set(key, result);
            return result;
        };

        return match(0, 0);
    }
}
// @lc code=start
export function isMatch(s: string, p: string): boolean {
    let exp: CusRegExp = new CusRegExp(p);
    let res: boolean = exp.isMatch(s);
    return res;
};
// @lc code=end

