## 函数

函数的作用就是为了复用，一次定义，到处调用,间接导致减少代码冗余

```js
// 定义一个函数
function getSum() {
    var sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}
```

想要函数运行需要使用函数名加小括号调用

getSum()

### 函数的参数

参数让函数变得更灵活

```js
// 定义一个函数  
function getSum(start, end) {  // 函数名后面跟着参数，定义时候的参数叫形参
    var sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    console.log(sum);
}
// 调用getSum函数获取1-100之间的和
getSum(1, 100)  // 调用函数并传入参数1,100 调用时传递的参数叫实参  
```

如果调用函数的时候没有传递参数，那么函数体中接受到的就是undefined

### 案例

```js
// 求1-n 之间所有数的和
function getSum(end) {
let sum = 0;
for (let i = 0; i <= end; i++) {
sum += i;
}
console.log(sum);
}
getSum(100);
```

```js
// 求n-m之间所有数的和
function getSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    console.log(sum);
}
getSum(1, 100);
```

```js
// 求圆的面积
function roundArea(radius) {
    let area = Math.PI * radius * radius;
    console.log(area);
}
roundArea(2);
```

```js
// 求两个数中的最大值
function getLargest(sum1, sum2) {
    if (sum1 > sum2) {
        console.log(sum1);
    } else {
        console.log(sum2);
    }
}
getLargest(43, 89);
```

```js
// 求三个数中的最大值
function getLargest(sum1, sum2) {
    let largest = null;
    if (sum1 > sum2) {
        largest = sum1;
    } else {
        largest = sum2;
    }
    return largest;
}

function she(sum1, sum2, sum3) {
    let result = getLargest(sum1, sum2);
    let largest = getLargest(result, sum3);
    console.log(largest);
}

she(23, 34, 1);
```

```js
//  求n个数中的最大值
function getMax(nums) {
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > nums[j + 1]) {
            [nums[j], nums[j + 2]] = [nums[j + 1], nums[j]];
        }
    }
    console.log(nums[nums.length - 1]);
}
getMax([1, 9, 8, 5, 6, 7, 4, 3, 2]);
```

```js
// 判断一个数是否是质数
function isPrimeNumber(num) {
    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log('不是');
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log('是的');
    }
}
isPrimeNumber(8);
```

### 函数的返回值

如果定义的函数没有返回值的话默认会返回undefined

```js
// 如果我们想使用函数中产生的值，可以使用return关键字将该值返回回来
function getSum(a, b) {
    let result = a + b;
    return a + b
}
let sum = getSum(3, 5);  // 可以声明一个变量接受getSum函数返回的值

```

```js
// 求一组数中的最大值
function getMax(nums) {
    let result = Math.max(...nums);
    return result;
}

console.log(getMax([11, 22, 2, 45, 123, 1, 2]));

```

```js
// 求一组数中的最小值
function getMin(nums) {
    let result = Math.min(...nums);
    return result;
}

console.log(getMin([11, 22, 2, 45, 123, 1, 2]));

```

```js
// 求阶乘
function factorial(num) {
let result = 1;
for (let i = 1; i <= num; i++) {
result *= i
}
return result;
}

console.log(factorial(5));
```

```js
// 求阶乘之和
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result;
}

function facSum(count) {
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        sum += factorial(i);
    }
    return sum;
}
// 求1-5的阶乘之和
console.log(facSum(5));
```

### arguments

js中arguments是函数的一个内置属性，它保存了所有传递的实参，是一个伪数组

```js
// arguments
function add(a, b) {
    console.log(arguments);  // 我们可以通过arguments获取用户传递的实参
}
add(1, 2, 3, 4);

```

```js
// 求任意个数的最大值
function max() {
    return Math.max(...arguments)
}
console.log(max(1, 2, 3, 11, 9));

```

```js
// 求任意个数的和
function max() {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}
console.log(max(1, 2, 3, 11, 9));

```

```js
// 求斐波那契中的第n项
function getFibN(num) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < num; i++) {
        [a, b] = [b, a+b];
        console.log(a, b);
    }
    console.log(a);
}

getFibN(11);

```

```js
// 翻转数组返回一个新数组
function reverse(numArr) {
    let newArr = [];
    for (let i = numArr.length-1; i >= 0; i--) {
        newArr[newArr.length] = numArr[i];
    }
    return newArr;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7]));

```

```js
// 对数组排序从小到大
function sorted(numArr) {
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length - i - 1; j++) {
            if (numArr[j] > numArr[j + 1]) {
                [numArr[j], numArr[j + 1]] = [
                    numArr[j + 1],
                    numArr[j]
                ];
            }
        }
    }
    console.log(numArr);
}

sorted([1, 9, 8, 5, 6]);

```

```js
// 输入一个年份，判断是否闰年
function leapYear(year) {
    if (!(year % 4) && (year % 100) || !(year % 400)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

leapYear(1996);

```

```js
// 输入年月日，判断是当年的第几天
function leapYear(year) {
    let isLeap = null;
    if (!(year % 4) && (year % 100) || !(year % 400)) {
        isLeap = true;
    } else {
        isLeap = false;
    }
    return isLeap;
}

function getDays(year, month, days) {
    var days = days;
    for (let i = 1; i < month; i++) {
        switch (i) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days += 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                days += 30;
                break;
            case 2:
                // 判断是否闰年
                days += leapYear(year) ? 29 : 28;
                break;
        }
    }
    console.log(days);

}

getDays(1996, 3, 31)
```

## 匿名函数

```js
// 函数声明 命名函数
function fn() {
    // 函数体
}
```

将匿名函数赋值给一个变量，就可以通过变量来调用该函数

一般来说，不需要手动调用的函数都可以定义成匿名函数

```js
// 函数表达式 匿名函数
var fn = function () {
    // 函数体
}
```

### 自调用函数

当函数定义完成后，立即调用

```js
// 自调用函数
(function () {
    // 函数体
})();
```

函数也是一种数据类型 

js中函数是第一公民，所有函数可以接收另一个函数作为参数或者返回值

```js
function test(a) {
    var b = 5;
    return function() {
        console.log(a + b);
    }
}
var fn = test(2);  // test 返回了一个函数给fn，所有fn是一个函数表达式
fn();  // 调用函数fn
```

## 命名规范

```js
// 命名规范
变量的命名必须要语义化
变量一般使用名词
函数一般使用动词
// 变量规范
let name = 'Asher';
// 注释规范
// 注释写的好，房子买的早
// 空格规范
if (true) {
    // 条件成立执行的语句块
}
for (let i = 0; i < 100; i++) {
    // 循环体
}
// 换行规范
var arr = [1, 2, 3, 4, 5];
if (a > b) {
    // 条件成立执行
}
```

## 函数的作用域

ECMAscript 中 有两种作用域：一种叫全局作用域，一种叫局部作用域

在全局作用域中定义的变量叫 全局变量，在任何位置都可以访问到

在函数内部不声明直接赋值的变量也是全局变量，禁止使用！！！！！

每定义一个函数都会开启一个新的作用域

在函数内部定义的变量叫局部变量，局部变量只能在该函数内部可以访问

作用域就是变量可以起作用的范围

在函数外部不可以是用函数内部定义的变量，这是因为每个函数都有自己独立的作用域

函数执行结束之后，函数内部的局部变量会被销毁，对应的内存会被回收

全局变量只有关闭浏览器之后才会被回收

### 块级作用域

es6中{}也会产生一个作用域

### 作用域链

当函数内部需要使用一个变量时，它会优先在自己的作用域中查找，如果找不到，才会向外层查找，整个过程就会形成一个作用域链

### 预解析

```js
// 这里会输出undefined，如果把定义变量注释掉，会打印变量不存在。
console.log(num);
var num = 5;

// fn函数定义前调用也是可以的，这是因为变量的预解析造成的。
fn();
function fn() {
    console.log('Hello!');
}
```

### 预解析形成的原因

js代码是由浏览器执行的，浏览器在执行js代码之前会把变量的声明提前到当前作用域的最上面（不包括赋值），不包括变量的赋值

```js
// 示例1
var a = 25;
function fn() {
    alert(a);
    var a = 10;
}
fn();

```

```js
// 示例2
// 变量提升会先于函数提升，所以函数会覆盖变量
console.log(a);
function a() {
    console.log('aaa');
}
var a = 1;
console.log(a);

```

```js
// 示例3
var num = 10;
fun();
function fun() {
    console.log(num);
    var num = 20;
}

```

```js
// 示例4
var a = 18;
f1();
function f1() {
    var b = 9;
    console.log(a);
    console.log(b);
    var a = '123';
}

```

```js
// 示例5
var a;
function f1() {
    var b = 9;
    console.log(a);
    console.log(b);
    var a = '123';
}

a = 18;
f1();
```

```js
// 示例6
f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}
```



















