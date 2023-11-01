import { ListNode } from "./DataDefine";

export class Util {
    static ListToNum(head: ListNode): number {
        let num: number = 0;
        let k = 1;
        while (head != null) {
            num += head.val * k;
            head = head.next;
            k *= 10;
        }
        return num;
    }

    static NumToList(num: number): ListNode {
        let list: ListNode = new ListNode();

        let head = list;
        do {
            let tmpNum: number = num % 10;
            num -= tmpNum;
            num /= 10;

            list.val = tmpNum;
            list.next = num == 0 ? null : new ListNode();
            list = list.next;
        } while (num != 0);

        return head;
    }
}