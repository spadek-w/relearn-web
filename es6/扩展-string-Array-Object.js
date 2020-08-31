
/**
    字符串新增方法 
    JavaScript 的字符串是不可变的（immutable），
    String 类定义的方法都不能改变字符串的内容。
    像 String.toUpperCase() 这样的方法，返回的是全新的字符串，而不是修改原始字符串
 */
/** 01.---------- */
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
var str1 = "hello word";
console.log(str1.includes('he'))
/** 02.---------- */
/**
    repeat方法返回一个新字符串，表示将原字符串重复n次
    replace 替换
 */
var str2 = str1.repeat(2)
console.log(str2); 
/** 03.---------- */
//padStart()：头部补全
//padEnd()： 尾部补全

'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

/** 04.---------- */
//trimStart() or trimLeft() 
//trimEnd() or trimRight()

/**
    数值
    增加BigInt 基本类型
 */

 