// Maximum Profit Stock
// Problem – Given an array denoting the cost of stock on different days. Your task is to find the 
// maximum profit which can be earned after buying or selling the stock on that particular day. For 
// example –
// Input – { 100, 180, 260, 310, 40, 535, 695 }
// Output – 865 (Buy stock on Day 0 and sell it on Day 3 and again buy on Day 4 and sell on Day 6)
// Naive Approach – We can iterate through the array and buy and sell stock everyday to check if 
// we are getting maximum profit or not. If we get more profit, we can update our maximum profit so 
// far.
// We can use nested loop in this case to get the desired value


function maxProfit( price, start, end)
{
	if (end <= start)
		return 0;

	let profit = 0;

	for (let i = start; i < end; i++) {
		for (let j = i + 1; j <= end; j++) {

		
			if (price[j] > price[i]) {

				let curr_profit = price[j] - price[i]
								+ maxProfit(price, start, i - 1)
								+ maxProfit(price, j + 1, end);

				profit = Math.max(profit, curr_profit);
			}
		}
	}
	return profit;
}

	let price = [ 100, 180, 260, 310,
					40, 535, 695 ];
	let n = price.length;

	console.log(maxProfit(price, 0, n - 1));


//     Maximum Profit Stock
// Efficient Approach –Instead of using nested loops, we will use a single loop here.
// STEPS - { 100, 180, 260, 310, 40, 535, 695 }
// 1) Initialize maximumProfit = 0;
// 2) Iterate from 1 to length of array
// 3) Check if current stock price is greater than previous price
// 4) If yes, save difference of current and previous to the maximum Profit

// function maxProfit(prices , size) {

//     var maxProfit = 0;

//     for (i = 1; i < size; i++)
//         if (prices[i] > prices[i - 1])
//             maxProfit += prices[i] - prices[i - 1];
//     return maxProfit;
// }

//     var price = [ 100, 180, 260, 310, 40, 535, 695 ];
//     var n = price.length;

//     console.log(maxProfit(price, n));

