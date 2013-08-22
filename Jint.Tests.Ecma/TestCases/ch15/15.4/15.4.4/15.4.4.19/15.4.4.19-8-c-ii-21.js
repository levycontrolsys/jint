/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-8-c-ii-21.js
 * @description Array.prototype.map - callbackfn called with correct parameters (kValue is correct)
 */


function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return val === 11;
            }

            if (idx === 1) {
                return val === 12;
            }

            return false;
        }

        var obj = { 0: 11, 1: 12, length: 2 };

        var testResult = Array.prototype.map.call(obj, callbackfn);

        return testResult[0] === true && testResult[1] === true;
    }
runTestCase(testcase);