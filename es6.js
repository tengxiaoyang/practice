// 一、作用域————块级作用域————let、const：

{
  var name = 'pangpang'
}
console.log(name)

{
  let name = 'pangpang'
}
console.log(name)

const name = 'pangpang'
name = 'xiaopang'
console.log(name)


// 二、字符串————模板字符串————`my name is${name}`：

const name = 'pangpang'
const work = 'civil servant'
console.log('name is ' + name + ', work is ' + work)
console.log(`name is ${name}, work is ${work}`)
console.log(`name is ${name}, 
work is ${work}
`)


// 三、函数拓展————箭头函数、参数默认值、展开运算符：

// 1.箭头函数：
function hello_01(name) {
  console.log(`hello ${name}!`)
}
const hello_02 = name => {
  console.log(`hello ${name}!`)
}
hello_01('pangpang')
hello_02('pangpang')

const name = 'pangpang'
setTimeout(() => {
  console.log(`hello ${name}!`)
}, 1000);

const square = n => n*n
console.log(square(5))

const arr = [1, 2, 3]
console.log(arr.map(function(n) {
  return n*n
}))
console.log(arr.map(n => n*n))

// 2.参数默认值：
const hello_03 = (name = 'xiaopang') => {
  console.log(`hello ${name}!`)
}
hello_03()
hello_03('pangpang')

// 3.展开运算符：
const hello_04 = (name_01, name_02) => {
  console.log(name_01, name_02)
}
const nameArr = ['pangpang', 'fanfan'] 
hello_04.apply(null, nameArr)
hello_04(...nameArr)


// 四、对象扩展————
// Object.keys、values、entries、
// 计算属性、
// 对象方法简写、
// 展开运算符：

// 1.Object.keys、values、entries：
const obj = {name: 'pangpang', work: 'civil servant'}
console.log(Object.keys(obj)) //["name", "work"]
console.log(Object.values(obj)) //["pangpang", "civil servant"]
console.log(Object.entries(obj)) //[["name", "pangpang"], ["work", "civil servant"]]

// 2.计算属性：
const type = 'name'
const obj = {
  [type]: 'xiaopang',
  type,

// 3.对象方法简写：
  hello_01: function() {

  },
  hello_02() {

  }
}
obj[type] = 'xiaopang'
console.log(obj) //{name: "xiaopang", type: "name", hello_01: ƒ, hello_02: ƒ}

// 4.展开运算符：
const obj_01 = {name: 'pangpang', work: 'civil servant'}
const obj_02 = {name: 'xiaopang', age: 23}
console.log({...obj_01, ...obj_02, birth: 1997})


// 五、解构赋值：

const nameArr = ['pangpang', 'fanfan'] 

let arg_01 = nameArr[0]
let arg_02 = nameArr[1]
let [arg_01, arg_02] = nameArr
console.log(`arg_01 is ${arg_01}, arg_02 is ${arg_02}`)

const obj_01 = {name: 'pangpang', work: 'civil servant'}
const { name, work } = obj_01
console.log(`name is ${name}, work is ${work}`)


// 六、类：

class MyApp {
  constructor() {
    this.name = 'pangpang' //公共属性
  } //构造函数
  sayHello() {
    console.log(`hello ${this.name}!`)
  } //公共方法
}
const app = new MyApp()
app.sayHello()


// 七、新数据结构————Set、Map、Symbol：

// 1.Set：元素不可重复
// 2.Map：是对象的扩展，对象的key必须是字符串，Map的key可以是任意值
// 3.Symbol：可以生成不重复的变量


// 八、模块化：

// 1.从文件导出：

// module_01.js：

export const name = 'pangpang'
export function sayHello() {
  console.log('hello')
} //上面两个直接export有作用域

// module_02.js：

const otherName = 'xiaopang'
export default otherName //export default使整个模块默认暴露

// module_03.js：

export default function test() {
  console.log('pass')
}

// 2.导入其他文件：
import { name, sayHello } from './module_01'
import otherName from './module_02'
import test from './module_03'
import * as mod_01 from './module_01' //起一个别名

console.log(name) //pangpang
sayHello() //hello
console.log(otherName) //xiaopang
test() //pass
console.log(mod_01) //返回一个对象


// 九、其他————
// 装饰器、
// async、await、
// 对象拓展符、
// 函数绑定





