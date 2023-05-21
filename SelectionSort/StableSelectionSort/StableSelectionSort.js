"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainMethod_1 = require("../../Functions/TypeScript/MainMethod");
var stableSelectionSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i; j < arr.length; j++)
            if (arr[j] < arr[min])
                min = j;
        var key = arr[min];
        while (min > i) {
            arr[min] = arr[min - 1];
            min--;
        }
        arr[i] = key;
    }
};
(0, MainMethod_1.mainMethod)(function (array) { return stableSelectionSort(array); });
