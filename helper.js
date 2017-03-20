exports.generateRandomArray = function generateRandomArray(n,rangeL,rangeR){
	if(rangeL >= rangeR || n > (rangeR - rangeL)) return false;
	var arr = new Array(n);
	for(var i=0;i<n;i++){
		arr[i] = Math.floor(rangeL + Math.random()*(rangeR-rangeL));
	}
	return arr;
}
exports.printArray = function printArray(arr){
	if(arr.length == 0) return false;
	for(var i=0;i<arr.length;i++)
		console.log(arr[i]);
}
exports.swap = function swap(arr,i,j){
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}
exports.isSorted = function isSorted(arr,n){
	for(var i=0;i < n;i++){
		if(arr[i] > arr[i+1])
			return false;
	}
	return true;
}
exports.time = function time(arr,func){
	var start = new Date().getTime();//起始时间
 	func(arr,arr.length);//执行待测函数
 	var end = new Date().getTime();//接受时间
 	return (end - start)+"ms";//返回函数执行需要时间
}