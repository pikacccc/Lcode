"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LCode_1 = require("./LCode");
const Util_1 = require("./Util");
class TwoNumAddTest {
    constructor(num_1, num_2) {
        this.num1 = num_1;
        this.num2 = num_2;
    }
    Num1ToList() {
        return Util_1.Util.NumToList(this.num1);
    }
    Num2ToList() {
        return Util_1.Util.NumToList(this.num2);
    }
    AddToNum() {
        let nums = [];
        let list1 = this.Num1ToList();
        let list2 = this.Num2ToList();
        let tmpNum1 = Util_1.Util.ListToNum(list1);
        let tmpNum2 = Util_1.Util.ListToNum(list2);
        let finaList = LCode_1.LCode.addTwoNumbers(Util_1.Util.NumToList(tmpNum1), Util_1.Util.NumToList(tmpNum2));
        // let head = finaList;
        while (finaList != null) {
            nums.push(finaList.val);
            finaList = finaList.next;
        }
        return nums;
    }
}
// let test1:TwoNumAddTest=new TwoNumAddTest(535,465);
// test1.AddToNum();
// console.log(test1.AddToNum());
class TwoSumTest {
    constructor(...args) {
        this.target = args[1];
        this.list = args[0];
    }
    TwoSumTest() {
        return LCode_1.LCode.twoSum(this.list, this.target);
    }
    ;
}
let test2 = new TwoSumTest([2, 7, 11, 15], 9);
console.log(test2.TwoSumTest());
