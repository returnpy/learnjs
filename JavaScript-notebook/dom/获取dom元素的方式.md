js中获取dom元素的方式

```js
// 通过ID获取（getElementById）
// 通过name属性（getElementsByName）
// 通过标签名（getElementsByTagName）
// 通过类名（getElementsByClassName） ie
// 获取html的方法（document.documentElement）
// 获取head的方法 (document.head)
// 获取body的方法（document.body）
// 通过选择器获取一个元素（querySelector）
// 通过选择器获取一组元素（querySelectorAll） ie
```

操作dom元素

```js
// 设置
ele.style  // 操作的是行内样式，如果没有把css写到行内，是获取不到的
```

js中的节点和描述节点之间关系的属性

结点 node

结点集合 NodeList

getElementByName / querySelectorAll 获取的都是结点集合

ByTagName / ByClassName 获取到的是元素集合

结点：页面中所有东西都是结点

## 结点种类

元素结点

​	nodeType： 1 大写标签名  null

文本结点 3 '#text' 文本内容

注释结点 8 'commen'  注释内容

文档结点 9 '#document'  null

## 描述结点之间关系的属性

```js
childNodes  // 获取所有的子结点
children  // 获取所有的元素子结点
firstChild  // 获取第一个子结点
lastChild  // 获取最后一个子结点
firstElementChild / last // 获取第一个子元素结点  ie
previousSibling  / next // 上一个哥哥结点
previousElementSibling / prev  // 哥哥元素

```

## js中动态增删改元素

```js
createElement  // 创建元素对象
createTextNode  // 创建文本对象
appendChild  // 把元素动态添加到容器末尾
insertBefore
cloneNode(boolean)  // 结点克隆 深浅
removeChild  // 移除容器中的某个元素
```

## 元素自定义属性

```js
setAttribute  // 设置属性
getAttribute  // 获取属性
removeAttribute  // 移除属性
```



