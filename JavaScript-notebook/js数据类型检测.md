## 数据类型检测

```js
// typeof [val]  // 用来检测数据类型的运算符
返回一个字符串
字符串中包含对应的数据类型
typeof null    => "object"
typeof NaN		 => "number"
typeof undefined => "undefined"
typeof {}			 => "object"
typeof /\d+/   => "object"
typeof []			 => "object"
// instanceof  // 用来检测当前实力是否属于某个构造函数new出来的实例
// constructor  // 基于构造函数检测数据类型
// Object.prototype.toString.call()  // 检测数据类型最好的方式
```

