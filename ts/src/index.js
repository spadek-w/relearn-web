var str = "hi";
// 布尔
var isDone = false;
// 数字
var age = 6;
//数组
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//元祖 Tuple
var x = ['hello', 10];
//枚举enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//Any
var notSure = 4;
//void
/**
    返回值
    只能赋予undefined unll
 */
function warnUser() {
    console.log("this is my warning message");
}
// null undefined
var u = undefinded;
var n = null;
list = null;
//never 
function error(message) {
    throw new Error(message);
}
create({ prop: m }); //ok
create(null); //ok
// create(42) //Error
// create("string") //Error
// create(false) //Error
// create(undefined) //Error
//断言
var someValue = "this is a";
var strLength = someValue.length;
//另一种as语法
var someValue2 = 'this is a';
var strLength2 = someValue2.lenght;
