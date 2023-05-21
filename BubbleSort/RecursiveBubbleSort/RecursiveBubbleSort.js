"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainMethod_1 = require("../../Functions/TypeScript/MainMethod");
var recursiveBubbleSort = function (arr, size) {
    var sorted = true;
    for (var i = 0; i < size - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            (0, MainMethod_1.swap)(arr, i, i + 1);
            sorted = false;
        }
    }
    if (sorted == false) {
        recursiveBubbleSort(arr, size);
    }
};
(0, MainMethod_1.mainMethodTwo)(function (array, size) { return recursiveBubbleSort(array, size); });
