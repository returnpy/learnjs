# 对象

程序中的对象是对现实世界中的抽象

任何一个对象都是由0到多组键值对组成的，key不能重复

```js
// 创建对象
// 字面量形式创建对象
var student = {
    name: '张飞',
    age: 18,
    sex: '男',
    sayHi: function () {
        console.log('Hello!')
    }
}
```

对象由 属性和方法组成

属性和方法统称为对象的成员

函数和对象的区别

函数 可以封装一段代码

对象 封装一组属性和方法

在方法中使用属性需要用this 

```js
// 对象的基本操作
var dog = {
    name: '旺财',
    type: '阿拉斯加',
    age: 2,
    color: 'aliao',
    bark: function () {
        console.log(this.name + '汪汪汪');
    },
    eat: function () {
        console.log(this.name + '啃骨头');
    }
}

// 访问对象中的属性和方法
console.log(dog.name);
console.log(dog.color);
dog.bark();
dog.eat();

// 对象属性的另一种访问方式
console.log(dog['name']);
console.log(dog['color']);
```

## 创建对象的方式

```js
// 字面量方式创建对象
var hero = {
    name: '李白',
    weapon: '剑',
    equipment: ['头盔', '腰带', '葫芦'],
    blood: 100,
    attack: function () {
        console.log(this.name + '挥剑');
    },
    run: function () {
        console.log(this.name + '飞奔了起来')
    }
}
console.log(hero.name);
console.log(hero.equipment);
hero.run();
hero.attack();
```

```js
// new Object()
// Object 是构造函数
// new 的作用是会在内存中创建一个对象
var hero = new Object();
// 打印一个不存在的属性默认值是undefined
console.log(hero.name);
hero.name = '敌法师';
hero.weapon = '弯刀';
hero.equipment = ['眼罩', '弯刀', '分身斧'];
hero.boold = 100;
hero.attack = function () {
    console.log(this.name + '挥出了致命一击');
};
hero.run = function () {
    console.log(this.name + '一个B逃离了敌人的视野');

}
```

```js
// 工厂方法创建对象
function createHero(name, weapon, equipment, blood) {
    var hero = new Object();
    hero.name = name;
    hero.weapon = weapon;
    hero.equipment = equipment;
    hero.blood = blood;

    hero.attack = function () {
        console.log(this.name + '发出了致命一击');
    }
    hero.run = function () {
        console.log(this.name + '飞快的逃离了战场');
    }
    return hero;
}

var hero1 = createHero('黄忠', '大炮', ['头盔', '靴子', '子弹袋'], 100)
var hero2 = createHero('敌法师', '消魔刀', ['假腿', '分身斧', '蝴蝶 '], 100)
```

```js
// 自定义构造函数
function Hero(name, weapon, equipment, blood) {
    // this 动态的给对象增加成员
    // this 指向当前对象
    this.name = name;
    this.weapon = weapon;
    this.equipment = equipment;
    this.blood = blood;
    this.attack = function () {
        console.log(this.name + '发动了致命一击');
    }
    this.run = function () {
        console.log(this.name + '开启了飞毛腿模式');
    }
}

var hero1 = new Hero('黄忠', '大炮', ['头盔', '手套'], 100);
var hero2 = new Hero('敌法师', '弯刀', ['分身斧', '假腿'], 100);
```

## new 关键字的执行过程

new 自定义构造函数执行经历了4个阶段

1. 在内存中实例化一个对象
2. 让构造函数中的this指向这个对象
3. 执行构造函数，在构造函数中设置属性和方法
4. 返回当前对象

```js
function Student(name, age, sex, score) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.score = score;
    this.sayHi = function () {
        console.log(this.name + ': Hello!');
    }
}

var stu1 = new Student('小明', 13, '男', 78);
var stu2 = new Student('小丽', 12, '男', 82);
```

## this

函数中的this

 ```js
// 函数中的this指向Window
function fn() {
    console.log(this);
}
fn();
 ```

方法中的this

```js
// 方法中的this指向这个方法所属的对象
var obj = {
    name: 'zs',
    fn: function () {
        console.log(this);
    }
}
obj.fn();
```

构造函数中的this

```js
// 构造函数中的this就是构造函数创建的对象
function Fn() {
    this.name = 'zs';
    this.age = 18;
    console.log(this);
}
var o = new Fn();
```

## 遍历对象的属性

```js
// 遍历对象用 for in
var obj = {
    name: '张三',
    age: 18,
    sex: '男',
    sayHi: function () {
        console.log(this.name + ': Hello!');
    }
}
for (let key in obj) {
    console.log(key);  // key是对象的属性
    console.log(obj[key]);  // key对应的值
}
```

### 删除对象的属性

```js
var obj = {
    name: '张三',
    age: 18,
    sex: '男',
    sayHi: function () {
        console.log(this.name + ': Hello!');
    }
}
console.log(obj.name);
console.log(obj.age);
delete obj.name;
console.log(obj.name);
```













