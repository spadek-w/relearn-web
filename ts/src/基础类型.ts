let isDone: boolean = false;

let DecLiteral: number = 6;
let HexLiteral: number = 0xf00f;

let str: string = 'hi';

let list: number[] = [1,3,4,];
let list2: Array<number> = [1,2,3]

// 元祖 Tuple
/* TODO  Tuple 越界不可以 
 ** 
 * Tuple 越界不可以 
 * https://www.tslang.cn/docs/handbook/basic-types.html
 */
let x: [string, number,]
x = ['hello', 10]
// x = [10, 'hi'] //报错

let x2: (string | number)[];
x2 = ['hi']
x2 = [1]
// x2[6] = ['hi']

// 枚举 enum

enum Color  {Red, Green, Blue}
let c: Color = Color.Green; 
console.log(c) // 1 
/**
 * enum 默认从0开始
 */

//Any

let notSure: any = 3;
notSure = 'hi'
notSure = 1
notSure = false

notSure.toFixed() //ok

let listAny: any[] = [1, true, '123']

//Void
// 只能赋值为undefined or null
let un: void = undefined;

let u: undefined = undefined;
let n: null = null;
/**
 * --strictNullChecks 
 * 只能赋值给void 和 自己
 */

//Never
function error(mes: string): never {
    throw new Error(mes)
}

// object
declare function create(m: object | null): void;
create({ prop: 9})
create(null)

//类型断言
let val: any = "hi"
let strLength: number = (<string>val).length;

let val2: any = 'hi'
let str2Length: number = (val2 as string).length

export {}
