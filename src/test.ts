import { ListNode } from "./DataDefine";
import { LCode } from "./LCode";
import { Util } from "./Util";

class TwoNumAddTest {
    num1: number;
    num2: number;

    constructor(num_1: number, num_2: number) {
        this.num1 = num_1;
        this.num2 = num_2;
    }

    Num1ToList(): ListNode {
        return Util.NumToList(this.num1);
    }

    Num2ToList(): ListNode {
        return Util.NumToList(this.num2);
    }

    AddToNum(): number[] {
        let nums: number[] = [];
        let list1: ListNode = this.Num1ToList();
        let list2: ListNode = this.Num2ToList();
        let tmpNum1: number = Util.ListToNum(list1);
        let tmpNum2: number = Util.ListToNum(list2);
        let finaList = LCode.addTwoNumbers(Util.NumToList(tmpNum1), Util.NumToList(tmpNum2));
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
    list: number[];
    target: number;

    constructor(...args) {
        this.target = args[1];
        this.list = args[0];
    }

    TwoSumTest(): number[] {
        return LCode.twoSum(this.list, this.target);
    };
}

// let test2: TwoSumTest = new TwoSumTest([2, 7, 11, 15], 9);
// console.log(test2.TwoSumTest());

class LengthOfLongestSubstringTest {
    str: string;

    constructor(...args) {
        this.str = args[0];
    }

    LengthOfLongestSubstringTest() {
        return LCode.lengthOfLongestSubstring(this.str);
    }
}

// let test3: LengthOfLongestSubstringTest = new LengthOfLongestSubstringTest("dvdf");
// test3.LengthOfLongestSubstringTest();

class LongestPalindromeTest {
    str: string;

    constructor(...args) {
        this.str = args[0];
    }
    LongestPalindromeTest() {
        return LCode.longestPalindrome(this.str);
    }
}

// let test4 = new LongestPalindromeTest("abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa");
// test4.LongestPalindromeTest();

class ReverseTest {
    str: number;

    constructor(...args) {
        this.str = args[0];
    }

    Reverse() {
        let a = LCode.reverse(this.str);
        return;
    }
}

// let test5 = new ReverseTest(-123);
// test5.Reverse();

class TestBase {
    arg: any;

    constructor(...args) {
        this.arg = args;
    }

    Test() {

    }
}

class longestCommonPrefixTest extends TestBase {
    Test() {
        return LCode.longestCommonPrefix(this.arg[0]);
    }
}

// let test6 = new longestCommonPrefixTest(["flower", "flow", "flight"]);
// test6.Test();

class convertTest extends TestBase {
    Test() {
        return LCode.convert(this.arg[0], this.arg[1]);
    }
}

let test7 = new convertTest("PAYPALISHIRING", 3);
test7.Test();

