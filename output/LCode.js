"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCode = void 0;
const DataDefine_1 = require("./DataDefine");
class LCode {
    //两数相加
    static addTwoNumbers(l1, l2) {
        let head = new DataDefine_1.ListNode();
        let carry = 0;
        let node = head;
        while (l1 != null || l2 != null) {
            let a = l1 == null ? 0 : l1.val;
            let b = l2 == null ? 0 : l2.val;
            let sum = a + b + carry;
            let curNum = sum % 10;
            carry = (sum - curNum) / 10;
            l1 = l1 === null || l1 === void 0 ? void 0 : l1.next;
            l2 = l2 === null || l2 === void 0 ? void 0 : l2.next;
            node.val = curNum;
            node.next = (l1 == null && l2 == null && carry == 0) ? null : new DataDefine_1.ListNode(carry);
            node = node.next;
        }
        return head;
    }
    //两数之和
    static twoSum(nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; ++i) {
            if (map.get(target - nums[i]) != undefined) {
                return [map.get(target - nums[i]), i];
            }
            map.set(nums[i], i);
        }
        return [];
    }
    //无重复字符的最长字串
    static lengthOfLongestSubstring(s) {
        let arr = [...s];
        let subArr = [];
        for (let item of arr) {
            let index = subArr.findIndex(s => s == item);
            if (index == -1) {
                subArr.push(item);
            }
            else {
                subArr.splice(0, index + 1);
            }
        }
        return subArr.length;
    }
    ;
    static longestPalindrome(s) {
        let substr = [];
        let maxl = -1;
        let maxr = 0;
        let max = 0;
        for (let i = 0; i < s.length; i++) {
            substr[i] = [];
            for (let j = 0; j < s.length; j++) {
                substr[i][j] = false; // 或者其他初始值
            }
        }
        for (let r = 1; r < s.length; ++r) {
            for (let l = 0; l < r; ++l) {
                if (s.charAt(r) == s.charAt(l) && (r - l <= 2 || substr[l + 1][r - 1] == true)) {
                    substr[l][r] = true;
                    let tmpMax = r - l + 1;
                    if (tmpMax > max) {
                        maxl = l;
                        maxr = r;
                        max = tmpMax;
                    }
                }
            }
        }
        return s.substring(maxl, maxr + 1);
    }
    ;
    static reverse(x) {
        return (-2147483648 > x || 2147483647 < x) ? 0 : (x < 0 ? -1 : 1) * parseInt(x.toString().split(``).reverse().join(``));
    }
    ;
    static isPalindrome(x) {
        if (x < 0)
            return false;
        let tmpX = x;
        let sum = 0;
        let i = x.toString().length - 1;
        while (x > 0) {
            let tmpNum = x % 10;
            sum += (tmpNum * Math.pow(10, i));
            x -= (tmpNum);
            x /= 10;
            i--;
        }
        return sum == tmpX;
    }
    ;
    static romanToInt(s) {
        let map = new Map();
        map.set('I', 1);
        map.set('V', 5);
        map.set('X', 10);
        map.set('L', 50);
        map.set('C', 100);
        map.set('D', 500);
        map.set('M', 1000);
        let res = 0;
        for (let i = 0; i < s.length; ++i) {
            let num_1 = map.get(s.charAt(i));
            if (i == s.length - 1) {
                res += num_1;
                continue;
            }
            if (num_1 == 1) {
                let num_2 = map.get(s.charAt(i + 1));
                if (num_2 == 5 || num_2 == 10) {
                    num_1 = num_2 - num_1;
                    i++;
                }
            }
            if (num_1 == 10) {
                let num_2 = map.get(s.charAt(i + 1));
                if (num_2 == 50 || num_2 == 100) {
                    num_1 = num_2 - num_1;
                    i++;
                }
            }
            if (num_1 == 100) {
                let num_2 = map.get(s.charAt(i + 1));
                if (num_2 == 500 || num_2 == 1000) {
                    num_1 = num_2 - num_1;
                    i++;
                }
            }
            res += num_1;
        }
        return res;
    }
    ;
    static longestCommonPrefix(strs) {
        let str = "";
        if ((strs === null || strs === void 0 ? void 0 : strs.length) == 0)
            return str;
        str = strs[0];
        let find = true;
        while (str.length != 0) {
            find = true;
            for (let item of strs) {
                if (!item.startsWith(str)) {
                    str = str.substring(0, str.length - 1);
                    find = false;
                    break;
                }
            }
            if (find) {
                break;
            }
        }
        return str;
    }
    ;
    static convert(s, numRows) {
        let str = "";
        if (numRows == 1)
            return s;
        let j = 0;
        for (let i = numRows; i >= 1; i--) {
            let step_1 = (i - 1) * 2;
            let step_2 = (numRows - i) * 2;
            let isStep_1 = true;
            let sum = j;
            while (sum < s.length) {
                str += s.charAt(sum);
                if (isStep_1) {
                    if (step_1 != 0) {
                        sum += step_1;
                    }
                    else {
                        sum += step_2;
                    }
                    isStep_1 = false;
                }
                else {
                    if (step_2 != 0) {
                        sum += step_2;
                    }
                    else {
                        sum += step_1;
                    }
                    isStep_1 = true;
                }
            }
            j++;
        }
        return str;
    }
    ;
    static myAtoi(s) {
        let arr = [];
        let res = 0;
        let flag = 1;
        let isReadFlag = false;
        let isReadZero = false;
        for (let item of s) {
            if (item == ` ` && (isReadFlag || isReadZero || arr.length != 0))
                break;
            if (item == ``)
                continue;
            if (item >= `a` && item <= `z`)
                break;
            if (item >= `A` && item <= `Z`)
                break;
            if ((item == `+` || item == `-`) && isReadFlag)
                break;
            if (item == `-`) {
                if (isReadZero && arr.length == 0)
                    break;
                isReadFlag = true;
                if (arr.length == 0)
                    flag = -1;
                else
                    break;
            }
            if (item == `+`) {
                if (isReadZero && arr.length == 0)
                    break;
                isReadFlag = true;
                if (arr.length == 0)
                    flag = 1;
                else
                    break;
            }
            if (item == `.`)
                break;
            if (item >= `1` && item <= `9`)
                arr.push(parseInt(item));
            if (item == `0` && !isReadZero)
                isReadZero = true;
            if (item == `0` && arr.length != 0)
                arr.push(parseInt(item));
        }
        let l = arr.length;
        for (let i of arr)
            res += i * Math.pow(10, --l);
        res *= flag;
        return res > 2147483647 ? 2147483647 : res < -2147483648 ? -2147483648 : res;
    }
    ;
}
exports.LCode = LCode;
