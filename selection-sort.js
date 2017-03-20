var helper = require("./helper");
exports.selectionSort = function selectionSort(arr,n){
	//console.log('aaa');
	for(var i = 0;i < n;i++ ){
		var minIndex = i;
		for(var j = i+1;j < n; j++ ){
			if(arr[j] < arr[minIndex])
				minIndex = j;
		}
		helper.swap(arr,i,minIndex);
	}
}