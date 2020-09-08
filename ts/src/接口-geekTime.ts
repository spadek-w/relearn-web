interface List {
    id: number;
    // readonly id: number; //只读属性
    name: string;
    // [x: string]: any
    age?: number
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach(val =>{
        console.log(val.id)
    })
}
let result = {
    data: [
        { id: 1, name: '123', sex: 'male'},
        { id: 2, name: 'qwe'},
    ]
}
// render(result)

/**
render({
    data: [
        { id: 1, name: '123', sex: 'male'},
        { id: 2, name: 'qwe'},
    ]
}) 
报错
*/
// 使用类型断言
render({
    data: [
        { id: 1, name: '123', sex: 'male'},
        { id: 2, name: 'qwe'},
    ]
} as Result)

render(<Result>{
    data: [
        { id: 1, name: '123', sex: 'male'},
        { id: 2, name: 'qwe'},
    ] 
})
// 推荐第一种
//第二种会在react 中产生歧义
// 索引签名也可以

// ----------
interface StringArray {
    [index: number]: string
}
//用任意的数字索引StringArray 得到的都是string
//字符串类型数组
let chars: StringArray = ["a", "b"]
//---------
 
interface Names {
    [x: string]: string;
    [z: number]: string; //数字索引的返回值必须是字符串索引返回值类型的子类型
}
//因为JavaScript 会进行类型转换 将number转成string

/**---------------- */
// 函数类型接口

// let add: (x: number, y: number) => number;

// interface Add {
//     (x: number, y: number): number
// }

type Add = (x: number, y: number) => number
let add: Add = (a, n) => a+n

// 混合型接口
interface Lib {
    (): void;
    version: string;
    doSome(): void
}
let lib:Lib = (()=> {}) as Lib
lib.version = 'hi';
lib.doSome = () => {}

let lib2:Lib = (()=> {}) as Lib
console.log(lib2.version + '-qwe')