"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainMethod_1 = require("../../Functions/TypeScript/MainMethod");
var optimisedBubbleSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var swapped = false;
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                (0, MainMethod_1.swap)(arr, j, j + 1);
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
};
(0, MainMethod_1.mainMethod)(function (array) { return optimisedBubbleSort(array); });
