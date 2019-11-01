## 流程控制

程序的三种结构

顺序分支循环

### 分支结构

```js
if (条件) {
   // 条件成立执行
}

if (条件) {
    // 条件成立执行
} else {
    // 条件不成立执行
}

if (条件1) {
    // 条件1成立执行
} else if (条件2) {
    // 条件2成立执行
} else {
    // 都不成立执行
}
```

## 三元表达式

```js
表达式1 ? 表达式2 : 表达式3
是对if else语句的一种简化写法
```

```js
// 是否年满18岁
var age = 19;
var is = age >= 18 ? true : false;
// 从两个数字中找最大值
var a = 2;
var b = 3;
var c = a > b ? a : b;
```

## switch语句

```js
switch (条件) {
    case 常量1:
        语句;
        break;
    case 常量2:
        语句；
        break;
    default: 
        语句
}
```

break退出循环

continue跳出此次循环

## 循环结构

在js中，循环语句有三种 while loop  do...while  for loop

### while语句

```js
while (循环条件) {
    // 循环体
}
```

## for loop

while loop一般用来解决无法确定次数的循环。for循环一般用在确定次数的循环

for loop 语法

```js
// 初始表达式只执行一次，然后判断条件表示，执行循环体，自增表达式最后执行
for (初始表达式; 条件表达式; 自增表达式) {
    // 循环体
}
```

```js
// 打印1 - 100 
for (var i = 1; i <= 100; i++) {
     console.log(i);
}
```

```js
// 打印1 - 100 之间的和
var sum = 0
for (var i = 1; i <= 100; i++) {
     sum += i;
}
console.log(sum);
```

```js
// 打印1 - 100 之间所有数的平均值
var sum = 0
for (var i = 1; i <= 100; i++) {
     sum += i;
}
console.log(sum);
```

```js
// 求1 - 100 之间所有偶数的和
var sum = 0
for (var i = 1; i <= 100; i++) {
    if (i % 2) {
        continue;
    }
    sum += i;
}
console.log(sum);
```

```js
// 求1 - 100 之间所有奇偶数的和
var odd = 0;
var even = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2) {
        odd += i;
    } else {
        even += i;
    }
}
console.log(odd);
console.log(even);
```

```js
// 打印正方形
var str = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        str += '* ';
    }
    str += '\n'
}
console.log(str);
```

```js
// 打印三角形
str = '';
for (let i = 10; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        str += '* ';
    }
    str += '\n'
}
console.log(str);
```

```js
// 九九乘法表
var str = '';
for (let i = 1; i < 10; i++) {
    for (let j = i; j < 10; j++) {
        str += `${i} * ${j} = ${i*j}\t`;
    }
    str += '\n';
}
console.log(str);
```

```js
// 求1-100之间所有数的乘积
var product = 1;
for (let i = 1; i < 100; i++) {
    console.log(product);
    product *= i;
}
console.log(product);
```

```js
// 求1-100之间所有奇数的和
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2) {
        sum += i;
    }
}
console.log(sum);
```

```js
// 求1-100之间能被3整除数的和
let sum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        sum += i;
    }
}
console.log(sum);
```

```js
// 求1-100之间不能被3整除数的和
let sum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 7) {
        sum += i;
    }
}
console.log(sum);
```

```js
// 本金10000存入银行，年利率千分之三，每过一年息算本，五年之后总金额
let money = 10000;
for (let i = 0; i < 5; i++) {
    money += money * 0.003;
}
console.log(money);
```

```js
// 兔子生育问题 斐波那契数列
let a = 0;
let b = 1;
let c = null;
for (let i = 0; i < 12; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(a);
}
```

### break

退出循环

### continue

跳出当前循环，继续下一次循环

## 