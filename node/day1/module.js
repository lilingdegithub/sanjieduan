

//  模块化开发  +  webpack 

// commonJs 规范   所有模块化开发规范

// 定义  +  暴露接口  +  引用 

// module  模块定义 (.js后缀就是一个模块);
// exports 模块导出
// require 模块引用

// 模块导出  变量  常量  对象  函数  
// var $ = require("./jQuery");

var fn = { 
	sayHello:function(){
		return "hello 模块化开发！"
	},
	add(a,b){
		return Math.pow(a,b)+a*b+100000;
	},
	write(res,data){
		// fs 文件系统读取数据  打印到页面
		res.write(data);
	}
}

const word = "成都1706 daydayup!";

// 1 导出方式1  
// module.exports = {
// 	fn:fn,
// 	word:word
// };

// 2 导出方式2

exports.word = word;
// exports.sayHello = fn.sayHello;
exports.fn = fn;
