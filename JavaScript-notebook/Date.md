# Date对象

创建Date实例用来处理日期和时间，Date对象保存的是1970年1月1号起的毫秒数

### Date对象跟Math对象的区别

Math不是一个构造函数，里面提供的是静态成员

Date对象是一个构造函数，首先要new一个实例出来，通过new返回的对象中的成员称为实例成员

Date对象的用法

```js
// 空构造函数
new Date()  // 获取的是当前时间对象

// 在构造函数中传入毫秒数
new Date(1572573855585)  // 

// 在构造函数中传入日期形式的字符串
new Date('2019-10-24')

// 在构造函数中传入数字
new Date(年, 月, 日, 时, 分, 秒, 毫秒)  // 年月必须，其他可省

// 获取日期对象的毫秒数
Obj.valueOf()  // 不推荐使用
Obj.getTime()  // 推荐使用这个
Date.now() // 也可是使用Date对象的静态成员获取     H5 兼容问题
+ new Date() // 这样也能获取日期的毫秒值

```

### 两个日期对象相减的时候会调用日期对象的valueOf方法

```js
// 日期相减计算时间差
function getInterval(start, end) {
    var interval = end - start;
    interval /= 1000;
    var day, hour, minute, second;
    day = Math.round(interval / 60 / 60 / 24);
    hour = Math.round(interval / 60 / 60 % 24);
    minute = Math.round(interval / 60 % 60);
    second = Math.round(interval % 60);
    return {day, hour, minute, second}
}

console.log(getInterval(new Date(), new Date(2019, 11-1, 11)));
```

