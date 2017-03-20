var helper = require("./helper");
var selectSort = require("./selection-sort");

var arr = helper.generateRandomArray(20000,0,100000);
var time = helper.time(arr,selectSort.selectionSort);
//helper.printArray(arr);
console.log(time);