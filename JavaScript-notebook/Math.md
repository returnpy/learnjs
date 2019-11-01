## Math对象

Math对象提供了一些跟数学相关的属性和方法，都是以静态成员的方式提供的

```js
// Math 对象的常用属性
PI
// Math 对象的常用方法
random()										// 获取一个0-1之间的随机数
floor() / ceil()								// 向下 / 向上取整
round()											  // 四舍五入
abs()											     // 求绝对值
max() / min()								// 求最大 / 最小值
sin() / cos()									// 正弦 / 余弦
power() / sqrt()						  // 指数次幂 / 平方根
```

Math.max

```js
Math.max()  // 什么都不给会返回-Infinity
Math.max(/* 这里如果包含无法转换成数字的参数那么会返回NaN */)
```



