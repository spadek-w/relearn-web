let str: string = "hi";

// 布尔
let isDone: boolean = false;

// 数字
let age: number =6;

//数组
let list: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

//元祖 Tuple
let x: [string,number] = ['hello',10]

//枚举enum
enum Color {red, Green, Blue}
let c: Color = Color.Green;

//Any
let notSure: any = 4;

//void
/**
    返回值
    只能赋予undefined unll
 */
function warnUser(): void {
    console.log("this is my warning message")
}

// null undefined
let u: undefined = undefined;
let n: null = null

//never 
function error(message: string): never {
    throw new Error(message);
}

//object
declare function create(o: object | null): void;
create({prop: 0}) //ok
create(null) //ok


// create(42) //Error
// create("string") //Error
// create(false) //Error
// create(undefined) //Error

//断言
let someValue: any = "this is a"
let strLength: number = (<string>someValue).length

//另一种as语法
let someValue2: any = 'this is a'
let strLength2: number = (someValue2 as string).length