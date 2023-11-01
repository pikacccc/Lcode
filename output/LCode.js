"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCode = void 0;
const DataDefine_1 = require("./DataDefine");
class LCode {
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
}
exports.LCode = LCode;
