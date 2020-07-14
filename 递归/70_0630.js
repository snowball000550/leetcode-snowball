// 70. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
};

// 递归会超时
var climbStairs = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    return climbStairs(n - 2) + climbStairs(n - 1);
}

// 加个cache
var climbStairs = function(n) {
	const cache = {0: 0, 1: 1};
	const fn = (n) => {
        if (n === 1) return 1;
        if (n === 2) return 2;
		if (!cache[n]) {
			let a = fn(n - 2) + fn(n - 1);
			cache[n] = a;
			return a;
		} else {
			return cache[n]
		}
	}
    return fn(n);
}