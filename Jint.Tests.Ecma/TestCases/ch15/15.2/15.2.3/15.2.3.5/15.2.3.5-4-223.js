/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-223.js
 * @description Object.create - 'writable' property of one property in 'Properties' is a RegExp object (8.10.5 step 6.b)
 */


function testcase() {

        var newObj = Object.create({}, {
            prop: {
                writable: new RegExp()
            }
        });
        var hasProperty = newObj.hasOwnProperty("prop");

        newObj.prop = 121;

        return hasProperty && newObj.prop === 121;
    }
runTestCase(testcase);
