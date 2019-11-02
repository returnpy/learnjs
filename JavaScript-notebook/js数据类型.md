# js数据类型

##  数据类型

### 值类型

*Number* *String* *Boolean* undefined null 空对象指针

Number 包括常规数字和NaN  NaN不是一个数字，但它是数字类型的    NaN !== NaN 

String 用单引号 双引号 反引号 包起来的都是字符串

### 引用类型

Object

​	普通对象

​	数组对象

​	日期对象

​	正则对象

​	数学对象

​	内置对象

函数



## js中的数据类型

js中的数据类型主要有两种，值类型和引用类型

### 值类型

Number String Boolean Undefined Null

js支持二进制 八进制 十进制 十六进制

```js
// 二进制
var a = 0b11; 
// 八进制
var b = 0o11;
// 十六进制
var c = 0x11;
```

js也支持浮点数

```js
var n = 5e-324;
// 浮点数的最高精度是 17 位小数，但在计算时其精度远远不如整数
var result = 0.1 + 0.2;
// 不要判断两个浮点数是否相等
```

数值范围

最小值：Number.MIN_VALUE => 5e-324

最大值：Number.MAX_VALUE => 1.7976931348623157e+308

无穷小：-Infinity

无穷大：Infinity

### NaN

not a number不是一个数字

NaN与任何 值都不相等，包括它自己

isNaN 检测一个值是否是有效数字

isNaN 的机制，用isNaN进行检测的时候，如果发现值不是Number类型的，首先会转化成Number类型，然后再验证是否是有效数字

## Number

把其他类型转换为数字类型

```js
// 把val转换为数字的方法，用Number构造函数
Number([val]) 
'12.5'  		=> 12.5
'12.5px'    => NaN
''					=> 0
true				=> 1
false				=> 0
isNaN(false) => false
null				=> 0
undefined		=> NaN
// 引用数据类型转换为字符串，首先会调用它的toString方法转换为字符串，然后再转换为数字
obj					=> NaN
[ ]					=> 0
[12]				=> 12
[12, 11]  	=> NaN
```



## String

获取字符串长度用字符串的length属性

字符串拼接

```js
console.log('Hello' + 'world!');  // 'Helloworld'
console.log('Hello' + 123);  // 'Hello123' 如果+两边的数据类型不匹配会先都转换为字符串

```

## Boolean

true false表示真和假

### 把其他类型转化为布尔类型

```js
// 只有五种情况会false
0 '' null undefined NaN

Boolean([val])
! 取反，先转换为布尔再去烦 / !! 取反之后再取反，相当于没取反
条件判断
```



## Undefined和Null

undefined表示一个声明未赋值的变量

null表示值为空，通常我们想创建一个变量为以后使用，就会先赋值为null

## 引用数据类型

Object

### 获取变量类型

typeof

```js
var age = 18;
console.log(typeof age);  // 'number'
```

typeof 的返回值是一个字符串

## js注释

### 注释的作用

搭建流程

提高代码的可读性

### 单行注释

```js
// 单行注释
console.log('单行注释好弱呀');
```

### 多行注释

```js
/* 我让你看看啥叫注释
床前明月光，
疑是地上霜
console.log('妈妈，我被人注释了～～')
*/

```

## 数据类型转换

将其他类型转换为字符串

```js
var age = 19;
var name = 'Asher';
var isMale = true;
console.log(age.toString());
console.log(isMale.toString());

// str.toString()
NaN							=> 'NaN'
true						=> 'true'
null						=> TypeError
undefined				=> TypeError
obj							=> '[Object Object]'   Object.prototype.toString方法不是转换为字符串，
																			 而是用来检测数据类型的
// 字符串拼接
只有加法可能存在字符串拼接
'10' + 10       => '1010'
'10' - 10				=> 0
'10s' - 10			=> NaN

```

把其他类型转换为数字类型

```js
// Number()
var name = 'Asher';  // NaN
var year = '2019'; // 2019
var year = '2019年' // NaN
var isMale = true;  // 1
var boom = null;  // 0
var udf;  // NaN
```

```js
// parseInt()
var name = 'Asher';  // NaN
var year = '2019'; // 2019
var year = '2019年'; // 2019
var isMale = true;  // NaN
var boom = null;  // NaN
var udf;  // NaN
```

```js
// parseFloat()
var str = '3.14';  // 3.14
var isMale = true;  // NaN
```

```js
// + - 正负号
var str = '3.14';  // 3.14
var isMale = true;  // 1
```

```js
// -0
var str = '2019年';
str - 0;  // NaN
str + 0;  // '2019年0'
```

把其他类型转换为布尔类型

```js
// 转化为false的五种情况
// null undefined 空字符串 0 NaN
var name = 'Asher';  // true
var name = '';  // false 
var age = 18;  // true
var isMale = true;  // true
var boom = null;  // false
var person;  // false
!name;  // false
!!name;  // true
```

## js运算符

operator

表达式由操作数和操作符组成

算术运算符

`+ - * / %`

一元运算符：

只有一个操作数的运算符被称为一元运算符

```js
// 前置++ 先加后使用
var num = 4;
++num;
// 后置++先使用后加
```

逻辑运算符

`&&  ||  !`

关系运算符

`> < = <= >= == === != !==`

```js
var a = 123;
var b = '123';
a == b;  // true
a === b;  // false
```

赋值运算符

`= += -= /= %=`

```js
var num = 0;
num += 5;  // 相当于 num = num + 5;
```

运算符的优先级


1.	括号的优先级最高
2. 一元运算符 ++ -- !
3. 算术运算符 先* / % 后+ -
4. 关系运算符 > >= < <=
5. 相等运算符 == !== === !==
6. 逻辑运算符 先&& 后||
7. 赋值运算符 =

## 数据在内存中的存储方式

浏览器想要执行js代码

1从电脑内存中分配一块内存，用来执行代码内存分 堆区 栈区 代码区 公共区

2分配一个主线程自上而下的执行代码

代码存储在内存中的代码区中

值类型存储在内存中的栈中

引用类型存储在内存中的堆中

## 简单类型在内存中的存储方式

```js
// 在内存中的栈中创建一个10，让变量n1指向这里的10
var n1 = 10;
// 在内存中复制一份n1的值，让n2指向复制的值
var n2 = n1;
```

## 复杂类型在内存中如何存储

```js
// 在内存中的堆中申请一片空间存放p1对象
// 在内存中的栈中申请一片空间存放p1对象所在的内存地址
// 让变量p1 指向栈中的空间
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log(this.name + ': Hello!');
    }
}
var p1 = new Person('小明', 18);
// 下面这条语句并不会重新实例化一个对象
// 在栈中申请一片空间，把p1存的内存地址赋值一份过来，让p2指向这里
var p2 = p1;
```

### 简单类型作为函数的参数 在内存中如何存储

```js
// 函数参数的本质就是函数内部的局部变量
// a 和 b 有自己的作用域，所有修改他们不会改变x 和 y 的值
function fn(a, b) {
    a = a + 1;
    b = b + 1;
    console.log(a);
    console.log(b);
}

var x = 10;
var y = 20;
fn(x, y);
console.log(x, y);
```

### 复杂类型作为函数的参数 在内存中如何存储

```js
// 引用类型由于两个变量最终都指向了一个地方，所以修改的是同一个，看起来像是另一个跟着变了
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log(this.name + ': Hello!');
    }
}

var p = new Person('张三', 18);

function fn(o) {
    o.name = '李四';
}

fn(p);
console.log(p.name);
```

## 基本包装类型

基本包装类型就是把简单类型包装成复杂类型

js中的基本包装类型有 String Number Boolean

```js
调用字符串的length属性时发生的事情
创建一个临时变量，使用完成迅速指向null
```







