"use strict";
/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMatch = isMatch;
var segType;
(function (segType) {
    segType[segType["None"] = 0] = "None";
    segType[segType["letter"] = 1] = "letter";
    segType[segType["letterStar"] = 2] = "letterStar";
    segType[segType["point"] = 3] = "point";
    segType[segType["pointStar"] = 4] = "pointStar";
    segType[segType["star"] = 5] = "star";
})(segType || (segType = {}));
class Seg {
    constructor() {
        this.segType = segType.None;
        this.segStr = "";
    }
}
class CusRegExp {
    constructor(p) {
        this.Reg = "";
        this.SegList = [];
        this.IsValid = true;
        this.Reg = p;
        this.split();
    }
    split() {
        let index = 0;
        let segIndex = 0;
        //split
        while (index < this.Reg.length) {
            this.SegList.push({
                segType: segType.None,
                segStr: ""
            });
            index = this.findSeg(index, segIndex);
            segIndex++;
        }
        //merge
        segIndex = 0;
        for (let seg of this.SegList) {
            if (seg.segType == segType.star) {
                if (segIndex == 0) {
                    this.IsValid = true;
                    break;
                }
                let preSeg = this.SegList[segIndex - 1];
                if (preSeg.segType == segType.letter)
                    seg.segType = segType.letterStar;
                if (preSeg.segType == segType.point)
                    seg.segType = segType.pointStar;
                let lastC = preSeg.segStr[preSeg.segStr.length - 1];
                preSeg.segStr = preSeg.segStr.slice(0, -1);
                seg.segStr = lastC + seg.segStr;
            }
            segIndex++;
        }
        let tempSegList = [];
        for (let seg of this.SegList) {
            if (seg.segStr != "") {
                tempSegList.push(seg);
            }
        }
        this.SegList = tempSegList;
    }
    isMatch(s) {
        // '*' 必须修饰前面的字符，并且不能连续出现。
        for (let i = 0; i < this.Reg.length; i++) {
            if (this.Reg[i] == "*" && (i == 0 || this.Reg[i - 1] == "*")) {
                return false;
            }
        }
        const memo = new Map();
        const match = (sIndex, pIndex) => {
            const key = `${sIndex},${pIndex}`;
            const cached = memo.get(key);
            if (cached !== undefined) {
                return cached;
            }
            let result;
            // 模式已经用完，字符串也必须同时用完才算完整匹配。
            if (pIndex == this.Reg.length) {
                result = sIndex == s.length;
            }
            else {
                const firstMatch = sIndex < s.length &&
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
    findSeg(index, segIndex) {
        let seg = this.SegList[segIndex];
        let c = this.Reg[index];
        let isLetter = (c >= "a" && c <= "z");
        let isPoint = c == ".";
        let isStar = c == "*";
        if (isLetter) {
            seg.segType = segType.letter;
            seg.segStr += c;
            index++;
            return this.findSeg(index, segIndex);
        }
        if (isPoint) {
            if (seg.segType != segType.letter) {
                index++;
                seg.segType = segType.point;
                seg.segStr += c;
                return index;
            }
            else {
                return index;
            }
        }
        if (isStar) {
            if (seg.segType != segType.letter) {
                index++;
                seg.segType = segType.star;
                seg.segStr += c;
                return index;
            }
            else {
                return index;
            }
        }
    }
}
// @lc code=start
function isMatch(s, p) {
    let exp = new CusRegExp(p);
    let res = exp.isMatch(s);
    return res;
}
;
// @lc code=end
