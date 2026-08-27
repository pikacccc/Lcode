/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

// @lc code=start
export function divide(dividend: number, divisor: number): number {
    const isNegative = (dividend < 0) !== (divisor < 0);
    let remaining = dividend < 0 ? -dividend : dividend;
    const positiveDivisor = divisor < 0 ? -divisor : divisor;

    const doubledDivisors: number[] = [];
    const doubledCounts: number[] = [];
    let currentDivisor = positiveDivisor;
    let currentCount = 1;

    while (currentDivisor <= remaining) {
        doubledDivisors.push(currentDivisor);
        doubledCounts.push(currentCount);

        // 下一次加倍已经超过被除数时停止，避免生成无用项。
        if (currentDivisor > remaining - currentDivisor) {
            break;
        }

        currentDivisor += currentDivisor;
        currentCount += currentCount;
    }

    let quotient = 0;
    for (let i = doubledDivisors.length - 1; i >= 0; i--) {
        if (doubledDivisors[i] <= remaining) {
            remaining -= doubledDivisors[i];
            quotient += doubledCounts[i];
        }
    }

    if (isNegative) {
        quotient = -quotient;
    }

    if (quotient > 2147483647) return 2147483647;
    if (quotient < -2147483648) return -2147483648;
    return quotient;
};
// @lc code=end

