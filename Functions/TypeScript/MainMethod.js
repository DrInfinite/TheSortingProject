"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainMethodTwo = exports.mainMethod = exports.swap = void 0;
// Only for Bubble Sort and its variations
var swap = function (arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
};
exports.swap = swap;
var normalArray = function (array) {
    console.log("Before Sorting: " + "\n" + array + "\n");
};
var sortedArray = function (array) {
    console.log("After Sorting: " + "\n" + array + "\n");
};
var randomArray = function (size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 25600));
    }
    return array;
};
var timeTaken = function (callback) {
    var startTime = Date.now();
    callback();
    var endTime = Date.now();
    return "Time taken: ".concat(endTime - startTime, " milliseconds");
};
var mainMethod = function (callback) {
    var array = randomArray(4096 * 4);
    normalArray(array);
    var time = timeTaken(function () { return callback(array); });
    sortedArray(array);
    console.log(time);
};
exports.mainMethod = mainMethod;
var mainMethodTwo = function (callback) {
    var array = randomArray(4096 * 4);
    normalArray(array);
    var time = timeTaken(function () { return callback(array, array.length); });
    sortedArray(array);
    console.log(time);
};
exports.mainMethodTwo = mainMethodTwo;
