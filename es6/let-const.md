## let-const

### 跟var的区别

1. 不会变量提升
2. 不能重复声明
3. 不绑定全局作用域 
    ``` 
        var a = 0;
        window.a;  //此时 0
        // let or const 不行
        let b = 1;
        window.b;  // undefined
    ```

> const 

1. 声明必须初始化
2. 值不可变(实际上并不是变量的值不得改动，而是变量指向内存地址所保存的数据不得改动)
```
 const a = 1;
 // a = 2; 就会报错Assignment to constant variable.
 const obj = { 
    age: 18
 }
 obj.age = 20
 // 此时不会报错 并且 obj = { age: 20 }
```

### 延伸-数据类型


这个是说到`基本类型`与`引用类型`

`基本类型：` String , Number , Boolean , Null , Undefined , Symbol (6个)

(补充一个BigInt)`BigInt`[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

`引用类型：` Object , Array , Date , RegExp , Function

`特殊的引用类型：`Boolean , Number , String (基本包装类型)

> 这里还是推荐去看《JavaScript高级程序设计》

> 接着延伸就到了`栈`(stack) , `堆`(heap) , `队列`(queue)

+ 栈 stack
    一种LIFO(Last-In-First-Out , 先进先出)的数据结构

+ 队列 queue
    FIFO(First-In-First-out , 先进进出)

+ 堆 heap
    存取方式跟顺序没有关系, 不局限出入口('无序的' key-value 键值对存储)

此外 
1. 栈中项的插入(存取)都在顶部一个出入口
2. 队列为列表末端添加, 列表前端移除 . 一个出口, 一个入口

这里是否还记得 push pop shift unshift呢 返回值呢
push unshift 是返回的长度
pop shift 是返回的删除项

> 基本类型保存在`栈` 引用类型保存在`堆`

#### 队列 Event Loop

<font color=red>换个地方写</font>



### 顶层对象globalThis

这个怎么放着了？？？

+ window （浏览器）
+ global （Node）

+ self （浏览器和Web Worker）

> 又扯到this

全局中， `this`返回顶层对象 . 但是Node中 `this` 返回的是当前模块， ES6中 `this`是undefined . 

还有函数中的`this`  <font color=red>this还是另起一章节说</font>

所以呢 ES2020 , 引入了`globalThis` . 任何环境`globalThis`都是存在的，可以从它拿到顶层对象