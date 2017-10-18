

// 面向对象  封装 继承 多态 

// 定义构造函数  constructor


function UserClass(name,age,friends){
	this.name = name;
	this.age = age;
	this.friends = friends;
}

//  prototype   构造函数的原型  可以添加 方法和变量(属性)
// __proto__    浏览器给对象添加的原型  
console.log(UserClass);

UserClass.prototype.sayName = function(){
	return this.name;
}
UserClass.prototype.sayFriend = function(){
	return this.friends;
}

module.exports = UserClass;