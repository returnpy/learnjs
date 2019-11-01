## js面向对象编程

js中万物皆对象

程序中的对象就是一个容器，封装了属性和方法

ECMA-262 : 对象是无序属性的集合，每个属性都映射到一个值

### 面向对象的优势

灵活 代码复用 高度模块化 容易开发 维护，更适合开发大型项目

面向对象的特性：

封装继承多态

### 创建对象

在js中创建对象的模板是构造函数

```js
function Student(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.printScore = function () {
        console.log(`${this.name} + ${this.age} + ${this.score}`);
    }
};
let xiaoming = new Student('小明', 18, 89);
xiaoming.printScore();
```

## 类型检测

typeof  弱点：无法精确的获取对象所属的类型

instanceof Array  // 判断某个对象是否是某个构造器的实例

constructor === 'Array' // 不建议使用

## 构造函数

构造函数的名字要首字母大写

获取对象的具体类型

对象有一个属性，可以获取当前对象 的构造器

obj.constructor

## 静态成员和实例成员

直接使用对象调用的成员叫静态成员

通过构造函数new出来的对象中的成员叫实例成员

工具中使用静态成员

## 构造函数的原型

所有构造函数都有一个属性叫原型  / 原型对象

prototype

给构造函数的原型增加方法，之后所有通过构造函数实例化的对象都可以使用该方法

当对象调用属性和方法的时候会优先从自己身上找，如果没有，就去原型对象中查找

```js
obj.__proto__ 等于构造函数的 原型对象
// __proto__属性是非标准的的属性
```

原型对象中的有一个属性 constructor

constructor中记录的是对象的构造函数





```js
// 构造函数中有原型对象prototype   原型对象中有个constructor指向构造函数
// 构造函数实例化出来对象obj
// obj.__proto__指向构造函数的原型对象
// 完美的铁三角

```



## 对象属性的查找规则

对象调用属性或方法会先看自己有没有，没有就话就会一直往上走

### 原型链

对象的原型的原型的原型最后指向null，整个查找过程看起来像一个链，所以叫原型链

## 面向对象的三大特性

封装 继承 多态(js是弱类型语言，没有多态)

## 继承

```js
// 下面这么干确实实现了要求，但不是继承，叫对象拷贝 真正的继承是类型和类型之间的关系
var wjl = {
    name: '王健林',
    money: 100000000000,
    cars: ['莱斯莱斯', '玛莎拉蒂', '宾利'],
    houses: ['海景房', '大别墅'],
    play: function () {
        console.log('打高尔夫球');
    }
}

var wsc = {
    name: '王思聪'
}

// 赋值对象的成员给另一个对象
for (let key in wjl) {
    if (wsc[key]) {
        continue;
    }
    wsc[key] = wjl[key];
}
console.log(wsc);
```

继承的目的就是为了把子类中共同的属性提取到父类中

原型继承

```js
function Person() {
    this.name = 'zs';
    this.age = 18;
    this.sex = '男';
}

function Student() {
    this.score = 100;
}
Student.prototype = new Person();
Student.prototype.constructor = Student;
var s1 = new Student()

function Teacher() {
    this.selary = 3000;
}
```



原型继承无法设置构造函数的参数



























