## 箭头函数

```js
let sum = (a, b) => {
  return a + b;
};

let sum = (a, b) => a + b;

let add1 = a => a + 1;

function sum(n) {
  return function (m) {
    return n + m;
  }
}

let sum = n => m => n + m;

let sum = (n = 0, m = 0) => n + m;

箭头函数中没有arguments

let sum = (...arg) => {
  console.log(arg.join('|'));
}

```



