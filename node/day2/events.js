// nodeJs api  event  事件驱动操作

// js
// addEventListener("click",fn,false)  false  表示捕获 
// removeListener

// jquery   事件监听   事件委托  
// $('div').on(事件,子元素,回调函数)     
//  $('div').delegate(子元素,事件类型,回调函数)

// 事件委托   基于事件冒泡的原理,把所有的子元素的事件绑定到父元素上,子元素触发事件,父元素代替子元素执行


var EventEmitter = require("events");   // 构造函数   需要被继承 得到 原型对象

// EventEmitter 父构造器

// 1. 直接继承

// function Player(){
//     return new EventEmitter();  // construnctor + prototype;
// }

// 2. call/apply 实现继承
function Player(){
    
    EventEmitter.call(this);   
}
Player.prototype = new EventEmitter();     //得到 prototype;


var player = new Player();   //实例化

// 事件监听    on 一直监听   once 只监听一次    
player.on("play",function(track){
    console.log(`正在观看====${track}`);
})

player.once("pause",(track)=>{
    console.log(`停止观看====${track}`);
    
})


// 事件发送
player.emit("play","《天线宝宝》");
player.emit("play","《王者归来》");

player.emit("pause","我的前半生");
player.emit("pause","快乐大本营");