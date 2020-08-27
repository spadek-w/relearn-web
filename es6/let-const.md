跟var的区别
1. 不会变量提升
2. 不能重复声明
3. 不绑定全局作用域 
    ``` 
        var a = 0;
        window.a;  //0
        // let or const 不存在
        let b = 1;
        window.b;  // undefined
    ```