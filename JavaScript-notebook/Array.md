## 数组

数组是一个有序集合，可以存储不同的类型，但是不推荐

[] 是数组的字面量形式

每个对象都具有toString / valueOf 方法

toString / 把数组对象转化成字符串，然后用逗号分隔每一项

valueOf() / 返回数组对象本身

### 数组的常用方法

```js
push()  // 返回最终数组的长度
pop()  // 返回数组中的最后一个元素
shift()
unshift()
reverse()
sort()
concat()  // 把参数拼接到当前数组
join()
slice()  // 从当前数组中克隆一段新的数组
splice()  	// 牛逼 增删改样样齐全   参数 从哪里开始，删除几个，新加入什么
indexOf() / lastIndexOf()  // 找到返回索引，找不到返回-1
every() / filter() / forEach() / map() / some() / reduce()  // 迭代方法 h5
join()  // 将数组中所有元素连接到一个字符串中
```

## 数组日常操作

```js
// 以数组字面量形式创建一个空数组
var names = []; 
// 利用数组的构造函数创建一个空数组
var array = new Array();
// 创建一个数组
var names = ['张三', '李四', '王五', '赵六'];
// 判断一个变量是不是数组
names instanceof Array
Array.isArray(names);  //////////////////////////  浏览器兼容问题
// 获取数组中的元素用索引，从0开始
// 获取张三
var zhangsan = names[0];
// 获取赵六
var zhaoliu = names[3]; 
// 获取数组的长度可以使用数组的length属性
names.length();
// 常用length-1 获取数组中的最后一个元素
var zhaoliu = names[names.length - 1]
// 如果索引超出列表长度那么获取到的就是undefined
var  laoqi = names[4];  // 列表中不存在索引为4的元素，所以返回undefined

// 修改数组中的元素
// 将数组中的第一项修改为'Asher'
names[0] = 'Asher';
// 向数组最后添加一个'Nicky'
names[length] = 'Nicky';

// 遍历数组
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// 反向遍历数组
for (let i = length-1; i >= 0; i--) {
    console.log(names[i]);
}

// 清空数组
names.length = 0;
names = [];  // 指向一个空数组
arr.splice(0, arr.length); // 牛逼的splice
```

```js
// 生成一个元素为0-9的数组
let nums = [];
for (let i = 0; i < 10; i++) {
    names[i] = i;
    // 如果i不连续的话，就需要用names[length] = i;
}
console.log(nums);
```

### 数组排序

```js
// sort 默认进行字符串排序 也就是比较ASCII码
var arr = [1, 10, 100, 5, 6, 7, 4, 3, 2];

arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);
```



### 数组案例

```js
// 求数组中所有数的和和他们的平均值
let nums = [10, 20, 30];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log('数组的和' + sum);
console.log('数组的平均值' + sum / nums.length);
```

```js
// 求一组数中的最大值和最小值，以及所在位置
let num = [1, 9, 8, 5, 6, 7, 4, 3, 2];
let min = 0;
let max = 0;
for (let i = 1; i < num.length; i++) {
    if (num[i] < num[min]) {
        min = i
    }
}
console.log(min + '   ' + num[min]);
for (let i = 1; i < num.length; i++) {
    if (num[i] > num[max]) {
        max = i
    }
}
console.log(max + '   ' + num[max]);
```

```js
// 将数组中的元素用|分割
var names = ['张三', '李四', '王五', '赵六'];
var str = '';
for (let i = 0; i < names.length; i++) {
    if (i === names.length-1) {
        str += names[i];
        break;
    }
    str += names[i] + '|';
}
console.log(str);
```

```js
// 将数组中的元素用|分割
var names = ['张三', '李四', '王五', '赵六'];
var str = '';
for (let i = 0; i < names.length; i++) {
    if (i === names.length-1) {
        str += names[i];
        break;
    }
    str += names[i] + '|';
}
console.log(str);
```

```js
// 翻转一个数组
var nums = [1, 2, 3, 4, 5, 6, 7];
var count = Math.floor(nums.length / 2);
for (let i = 0; i < count; i++) {
    [nums[i], nums[nums.length-1-i]] = [nums[nums.length-1-i], nums[i]];
}
console.log(nums);
```

```js
// 冒泡排序
let nums = [1, 9, 8, 5, 6, 7, 4, 3, 2];
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length-i-1; j++) {
        if (nums[j] > nums[j+1]) {
            [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
        }
    }
}
console.log(nums);
```

```js
// 冒泡排序优化
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let flag = true;
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length-i-1; j++) {
        if (nums[j] > nums[j+1]) {
            flag = false;
            [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            console.log('1');
        }
    }
    if (flag) {
        break;
    }
}
console.log(nums);
```

## 