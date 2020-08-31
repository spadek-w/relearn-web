[toc]

## string-array-object

### 字符串的扩展
1. 模板字符串

### 字符串新增方法
> 得会读(你们跳过)
实例方法:

+ includes()
+ startsWith()
+ endWith()

+ repeat
    + replace(替换)有点像
+ padStart()
+ padEnd()
+ trimStart() or trimLeft()
+ tirmEnd() or trimRight()
### 数值

> BigInt 基本类型

### 函数扩展

+ 默认参数

### 数组
+ Array.from()
+ Array.of()

数组实例的方法

+ copyWithin()
+ find() or findIndex
+ fill() //填充数组
+ entries() or keys() or values()
+ includes
+ flag()
+ flagMap()

> Array.from() 

类数组转成数组
1. 第二个参数 类似于数组的map,对每个元素进行处理
2. 第三个参数 绑定this

> copyWithin 

会修改当前数组
1. target
2. start
3. end

> find() or findIndex

- 都有第二个参数用于绑定this
- indexOf相比. indexOf 无法识别NaN

> fill()

** 填充类型为对象是   是浅拷贝对象 **

> flag() or flagMap()

flag() 
- 会跳过数组空位
- 不管多少层 => `infinity`

flagMap()
- 只能展开一层数组

> 数组空位

- forEach(), filter(), reduce(), every() 和some()都会跳过空位。
- map()会跳过空位，但会保留这个值
- join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。

### 对象扩展
+ 属性简写
+ 属性名表达式
+ 方法的name属性

> 属性的遍历

1. for...in // 自身的和继承的可枚举属性（不含 Symbol 属性）
2. Object.keys(obj) //(不含继承的 , 不含 Symbol 属性 , 不含不可枚举的)
3. Object.getOwnPropertyNames(obj) //(不包括 Symbol, 但是包括不可枚举)
4. Object.getOwnPropertySymbols(obj)
5. Reflect.ownKeys(obj) // 除了继承的都可以 ,(不管是否可枚举)

遍历规则
- 首先遍历所有数值键，按照数值升序排列。
- 其次遍历所有字符串键，按照加入时间升序排列。
- 最后遍历所有 Symbol 键，按照加入时间升序排列。

### 对象新增方法
+ Object.is()
+ Object.assign()
+ Object.getOwnPropertyDescriptors()
+ __proto__ , Object.setPrototypeOf() , Object.getPrototypeOf()
+ Object.keys  or  Object.values  or  Object.entries
+ Object.fromEntries

> Object.fromEntries小技巧

```
Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
// { foo: "bar", baz: "qux" }
```