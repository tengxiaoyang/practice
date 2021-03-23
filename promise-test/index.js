const fs = require('fs')
const path = require('path')

// 按顺序获取文件内容

// 一、不封装函数：
const fullFileName = path.resolve(__dirname, "files", "a.json") //拼出文件绝对路径
fs.readFile(fullFileName, (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('aDataObj', JSON.parse(data.toString())) //data默认是二进制，需要转字符串，再转成json对象
  const fullFileName = path.resolve(__dirname, "files", "b.json") //拼出文件绝对路径
  fs.readFile(fullFileName, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('bDataObj', JSON.parse(data.toString())) //data默认是二进制，需要转字符串，再转成json对象
    const fullFileName = path.resolve(__dirname, "files", "c.json") //拼出文件绝对路径
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log('cDataObj', JSON.parse(data.toString())) //data默认是二进制，需要转字符串，再转成json对象
    })
  })
})

// 二、用原生js的callback-hell方式：
// callback只是一个参数，代表要传入的函数
function getFileContent(fileName, callback) {
  const fullFileName = path.resolve(__dirname, "files", fileName) //拼出文件绝对路径
  fs.readFile(fullFileName, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    // 接下来调用传入的函数，并且给这个函数传入参数：
    callback(JSON.parse(data.toString())) //data默认是二进制，需要转字符串，再转成json对象
  })
}
getFileContent('a.json', aDataObj => {
  console.log('aDataObj', aDataObj)
  getFileContent(aDataObj.next, bDataObj => {
    console.log('bDataObj', bDataObj)
    getFileContent(bDataObj.next, cDataObj => {
      console.log('cDataObj', cDataObj)
    })
  })
})

// 三、使用promise：
function getFileContent(fileName) {
  // 使用new Promise来初始化一个Promise对象
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, "files", fileName) //拼出文件绝对路径
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(
        JSON.parse(data.toString())) //data默认是二进制，需要转字符串，再转成json对象
    })
  })
  return promise
}
getFileContent('a.json').then(aDataObj => {
  console.log('aDataObj', aDataObj) //aDataObj就是resolve中传入的参数
  return getFileContent(aDataObj.next)
}).then(bDataObj => {
  console.log('bDataObj', bDataObj)
  return getFileContent(bDataObj.next)
}).then(cDataObj => {
  console.log('cDataObj', cDataObj)
}) //把callback的嵌套变成了.then的平铺

// 四、async和await，koa2原生支持
