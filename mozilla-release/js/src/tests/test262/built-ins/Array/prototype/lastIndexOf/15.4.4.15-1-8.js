// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.lastindexof
es5id: 15.4.4.15-1-8
description: Array.prototype.lastIndexOf applied to String object
---*/

        var obj = new String("undefined");

assert.sameValue(Array.prototype.lastIndexOf.call(obj, "f"), 4, 'Array.prototype.lastIndexOf.call(obj, "f")');

reportCompare(0, 0);
