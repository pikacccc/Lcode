/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start

// function matchStr(s: string): string {
//     // if (s == "(") return ")";
//     // if (s == "{") return "}";
//     // if (s == "[") return "]";
//     // if (s == "}") return "-1";
//     // if (s == "]") return "-1";
//     // if (s == ")") return "-1";
//     // return "";
// }

export function isValid(s: string): boolean {
    if (s.length % 2 != 0) return false;

    // const memo = new Map<string, boolean>();
    // let count = 0;
    // const valid = (sPiont: number, ePiont: number): boolean => {
    //     let cache = memo.get(`${sPiont}x${ePiont}`);
    //     if (cache !== undefined) {
    //         return cache;
    //     }

    //     let res = false;

    //     let isValid = matchStr(s[sPiont]) == s[ePiont];
    //     res = isValid;
    //     if (sPiont + 1 > ePiont - 1) {
    //         res = isValid;
    //     }
    //     else {
    //         while (sPiont < ePiont) {
    //             res = isValid ? (isValid && valid(sPiont + 1, ePiont - 1)) : (valid(sPiont, ePiont - 1));
    //             sPiont++;
    //             ePiont--;
    //         }

    //     }

    //     memo.set(`${sPiont}x${ePiont}`, res);
    //     return res;
    // }

    // let res = valid(0, s.length - 1);
    // return res;

    let arr: string[] = [];
    for (let i = 0; i < s.length; ++i) {
        let curStr = s[i];
        if (curStr == "[" || curStr == "{" || curStr == "(") {
            arr.push(s[i]);
            continue;
        }

        let pop = arr[arr.length - 1];
        if ((curStr == "}" && pop == "{") ||
            (curStr == "]" && pop == "[") ||
            (curStr == ")" && pop == "(")) {
            arr.pop();
        }

        if ((curStr == "}" && pop != "{") ||
            (curStr == "]" && pop != "[") ||
            (curStr == ")" && pop != "(")) {
            return false;
        }
    }

    return arr.length == 0;
};
// @lc code=end

