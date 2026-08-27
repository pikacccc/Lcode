"use strict";
/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMedianSortedArrays = findMedianSortedArrays;
// @lc code=start
function Median(arr) {
    if (arr == null || arr.length == 0)
        return 0;
    let res = 0;
    if (arr.length % 2 == 0) {
        res = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    }
    else {
        res = arr[arr.length / 2 - 0.5];
    }
    return res;
}
function findMedianSortedArrays(nums1, nums2) {
    let index1 = 0;
    let index2 = 0;
    let arr = [];
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] >= nums2[index2]) {
            arr.push(nums2[index2]);
            index2++;
        }
        else {
            arr.push(nums1[index1]);
            index1++;
        }
    }
    if (index1 == nums1.length) {
        for (let index = index2; index < nums2.length; ++index) {
            arr.push(nums2[index]);
        }
    }
    if (index2 == nums2.length) {
        for (let index = index1; index < nums1.length; ++index) {
            arr.push(nums1[index]);
        }
    }
    return Median(arr);
}
;
// @lc code=end
