

## 变量

变量是标识符，可以根据变量获取对应内存中的值

使用变量可以方便的获取和修改内存中的数据

## js中如何声明变量

```javascript
// es3中声明变量用var
// es6中申明变量用let
// es6中声明常量用const
用const定义的值不能改变，如果定义的是引用类型，那么引用类型中的值可以改变
// 创建函数也相当于创建了一个变量
function fn() {}
// 创建类也相当于创建了一个变量
class Persion{}
// es6的模块导入也可以创建变量
import B from './B.js'
// Symbol 表示创建唯一值
c = Symbol(100)
// 声明变量age
var age;
// 将变量age赋值为12
age = 12;
// 定义变量size并赋值为18
var size = 18;
// 还可以同时声明多个变量
var name, age, size;
name = 'Asher';
age = 18;
size = 18;
// 同时声明多个变量并赋值
var name = 'Asher', age = 18, size = 18;
```

## js中的变量命名规则

字母数字下划线$,不能以数字开头

不能是关键字保留字

严格区分大小写

一般全局变量会用_开头

### 规范

变量语义化 小驼峰

js关键字

```js
break
case
while
catch
continue
default
delete
do
else
finally
if
in 
instanceof
new
return
switch
this
throw
try
typeof
var
void
with
class
const
export
extends
import
super
debugger
```

js保留字

```js
abstract
boolean
byte
char
debugger
double
enum
final
float
goto
implements
int
interface
long
native
package
private
protected
public
short
static
synchronized
throws
transient
volatile
```

