## 函数进阶

### 函数的定义方式

函数声明

函数表达式

new Function

### 函数声明和函数表达式的区别

```js
// 1.函数声明
function fn() {
    console.log('Hello');
}
fn();

// 2.函数表达式
var fn = function () {
    console.log('Hello');
}
fn();

// 函数声明和函数表达式的区别
// 函数表达式不能进行函数提升

// 3.new Function
// 函数也是对象
// var fn = new Function('var name = "张三";console.log(name);')
// fn();
// console.dir(fn);

var fn = new Function('a', 'b', 'console.log(a + b);')
fn(3, 5);
```



## 函数中的this指向

### 函数的调用方式

```js
// 1. 作为普通函数调用
fn();   // this指向window
// 2. 作为方法调用
obj.method()  // 那个对象调用的method，this就指向那个对象
// 3. 作为构造函数调用
new Person()  // 构造函数内部的this指向由该函数创建的对象
// 4. 作为事件处理函数调用
document.body.onclick = function () {console.log('hello')}  // this 指向触发该时间的对象
// 5. 作为定时器的参数调用
setInterval(function () {   // this指向window
    console.log(this);
}, 1000);  
```

### 函数内部的this是由函数调用的时候来确定其指向谁的

### 改变函数this指向

call

`Object.prototype.toString.call(arr);`

bind

apply

##  高阶函数

函数作为参数或返回值的函数就是高阶函数

一等公民

## 闭包

不许销毁

## 递归函数

```js
// 递归阶乘
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));
```











