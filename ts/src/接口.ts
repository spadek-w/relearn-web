// function printLabel(labelledObj: {label: string}) {
//     console.log(labelledObj.label)
// }
// let myObj = { size: 10, label: "size"}
// printLabel(myObj)

/**
 * 可选属性加  ?
 * 只读属性  reaonly
 */



interface LabelledValue {
    label: string;
}
function printLabel(labelledObj: LabelledValue){
   console.log(labelledObj.label)
}
let myObj = { size: 10, label: "size"}
printLabel(myObj)


// 可选属性

interface SqConfig {
    color?: string;
    width?: number;
}

function createSq(config: SqConfig): {color: string; arg: number}{
    let newSq = { color: 'wgit', arg: 1}
    console.log(config)
    return newSq
}

//只读属性 
//readonly
interface Pont {
    readonly x: string
}
//ReadonlyArray
let a: number[] = [12,3,4,5]
let ro: ReadonlyArray<number> = a

// 额外的属性检查
/**
 * 这里以上列子为参考
 */
// let mySq = createSq({ color1: 'red', width: 100}) 报错
//1. 使用类型断言
let mySq = createSq({color1: 'red', width: 100} as SqConfig)
//2. 添加额外的特殊属性
interface SqConfig {
    color?: string;
    width?: number;
    [propName: string]: any
}
let squareOptions = { color1: "red", width: 100, height: 100};
let mySquare = createSq(squareOptions);