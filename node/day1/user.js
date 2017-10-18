

// 继承父类   UserClass   

// 实现继承2中方式  
// 直接继承   var User = new UserClass();
// 通过call/apply 改变this指向来实现继承  


var UserClass = require("./userClass");

function User(name,age,friends,word){

	// this   ===> User
	this.word = word;

	// return new UserClass(name,age,friends);  //不能修改添加熟悉 在构造器内


	// call
	UserClass.call(this,name,age,friends);

	// UserClass.apply(this,arguments);

	// call / apply 都可以实现继承   通过改变this指向实现继承  
	// 参数设定不一样   call 写明对应参数, apply 直接写 arguments 
	// 只能继承得到构造器 属性  
	// call和apply 无法得到 父类的 prototype 

};

// 获取父类的prototype
// 1.
// User.prototype = new UserClass(); 通过实例化获取原型对象  
// 2.对象复制 
for(var i in UserClass.prototype){
	console.log(i);
	User.prototype[i] = UserClass.prototype[i];
};

User.prototype.word1 = "daydayup 成都!";


// 方法重写   继承  改写  
User.prototype.sayName = function(){
	return this.name +"---"+  this.word;
}

module.exports = User;

 