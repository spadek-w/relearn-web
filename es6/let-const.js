var array = [1,2,3,4,6]
for (var i = 0; i < array.length; i++) {
    array[i]= function() {
        console.log(i)
    }
    
}
array[4]()//5
 
/**
    1. 更改为let for(let i=0; i<array.length; i++)
    2.
 */
for (var i = 0; i < array.length; i++) {
    const element = array[i];
    array[i] = (function(i){
       return function(){
           console.log(i)
       }
    })(i)
}
array[4]()
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
for (var i = 0; i < 3; i++) {
  var i = 'abc-var';
  console.log(i);
}
var funcs = [], object = {a: 1, b: 1, c: 1};
for (const key in object) {
    funcs.push(function(){
        console.log(key)
    });

}
funcs[0]()
var funcs2 =[];
var fn = function (k) {
    funcs2.push(function() {
        console.log(k)
    })
}
for (var key in object) {
    fn(key)
}
funcs2[0]() //a
