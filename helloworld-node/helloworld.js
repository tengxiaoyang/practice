// 引入Node的HTTP模块：
var http = require('http')

// 创建HTTP服务，监听指定的端口：
var server = http.createServer((request, response) => {
  // 发送 HTTP 头部 
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  // 接收请求并响应请求
  // 请求的响应数据：
  response.end('Hello World');
})
server.listen(8000); // 监听8000端口

console.log('Server running at http://127.0.0.1:8000/')

