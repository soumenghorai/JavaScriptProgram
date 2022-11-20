
function isMagicSquare(mat){
	var N = mat.length
	var sumd1 = 0,sumd2=0;
	for (var i = 0; i < N; i++){
		sumd1 = sumd1 + mat[i][i];
		sumd2 = sumd2 + mat[i][N-1-i];
	}
	
	if(sumd1!=sumd2)
		return false;

	for (var i = 0; i < N; i++) {
		var colSum = 0;
		var rowSum = 0;
		for (var j = 0; j < N; j++)
		{
			rowSum += mat[i][j];
			colSum += mat[j][i];
		}
		if (rowSum != colSum || colSum != sumd1)
			return false;
	}
	return true;
}

var mat = [[ 2, 7, 6 ],
		[ 9, 5, 1 ],
		[ 4, 3, 8 ]];

if (isMagicSquare(mat))
	console.log( "Magic Square");
else
	console.log( "Not a magic Square");



