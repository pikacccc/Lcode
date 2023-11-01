"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
const DataDefine_1 = require("./DataDefine");
class Util {
    static ListToNum(head) {
        let num = 0;
        let k = 1;
        while (head != null) {
            num += head.val * k;
            head = head.next;
            k *= 10;
        }
        return num;
    }
    static NumToList(num) {
        let list = new DataDefine_1.ListNode();
        let head = list;
        do {
            let tmpNum = num % 10;
            num -= tmpNum;
            num /= 10;
            list.val = tmpNum;
            list.next = num == 0 ? null : new DataDefine_1.ListNode();
            list = list.next;
        } while (num != 0);
        return head;
    }
}
exports.Util = Util;
