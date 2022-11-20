var M = 3;
var N = 4;

function binarySearch1D(arr, K)
{
	var low = 0;
	var high = N - 1;
	while (low <= high) {
		var mid = low + parseInt((high - low) / 2);

		if (arr[mid] == K)
			return true;

		if (arr[mid] < K)
			low = mid + 1;
		else
			high = mid - 1;
	}

	return false;
}

function searchMatrix(matrix, K)
{
	var low = 0;
	var high = M - 1;
	while (low <= high) {
		var mid = low + parseInt((high - low) / 2);

		if (K >= matrix[mid][0]
			&& K <= matrix[mid][N - 1])
			return binarySearch1D(matrix[mid], K);

		if (K < matrix[mid][0])
			high = mid - 1;
		else
			low = mid + 1;
	}

	return false;
}
                
var matrix = [ [ 1, 3, 5, 7 ],
					[ 10, 11, 16, 20 ],
					[ 23, 30, 34, 50 ] ];
var K = 3;
if (searchMatrix(matrix, K))
	console.log( "Found" );
else
	console.log( "Not found" );


