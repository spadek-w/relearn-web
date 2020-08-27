"use strict";

var array = [1, 2, 3, 4, 6];

for (var i = 0; i < array.length; i++) {
  array[i] = function () {
    console.log(i);
  };
}

array[4](); //5

/**
    1. 更改为let for(let i=0; i<array.length; i++)
    2.
 */

for (var i = 0; i < array.length; i++) {
  var element = array[i];

  array[i] = function (i) {
    return function () {
      console.log(i);
    };
  }(i);
}

array[4]();

for (var _i = 0; _i < 3; _i++) {
  var _i2 = 'abc';
  console.log(_i2);
}

for (var i = 0; i < 3; i++) {
  var i = 'abc-var';
  console.log(i);
}

var funcs = [],
    object = {
  a: 1,
  b: 1,
  c: 1
};

var _loop = function _loop(_key) {
  funcs.push(function () {
    console.log(_key);
  });
};

for (var _key in object) {
  _loop(_key);
}

funcs[0]();
var funcs2 = [];

var fn = function fn(k) {
  funcs2.push(function () {
    console.log(k);
  });
};

for (var key in object) {
  fn(key);
}

funcs2[0](); //a

//# sourceMappingURL=let-const-es5.js.map