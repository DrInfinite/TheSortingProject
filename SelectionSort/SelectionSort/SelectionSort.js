"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainMethod_1 = require("../../Functions/TypeScript/MainMethod");
var selectionSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i; j < arr.length; j++)
            if (arr[j] < arr[min])
                min = j;
        (0, MainMethod_1.swap)(arr, i, min);
    }
};
(0, MainMethod_1.mainMethod)(function (array) { return selectionSort(array); });
