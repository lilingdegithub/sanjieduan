//事件委托   基于事件冒泡的原理,把所有的子元素的事件绑定到父元素上,子元素触发事件,父元素代替子元素执行
var EventEmitter=require("events");//构造函数
//1.直接继承
    // function Player(){
    //     return new EventEmitter();
    // }
//2.call/apply
function Player(){
    EventEmitter.call(this);
}
Player.prototype=new EventEmitter();  
var player=new Player();

//监听
player.on("play",function(track){
    console.log(`正在观看====${track}`);
})
player.once("pause",(track)=>{
    console.log(`停止观看====${track}`);
})

//发送
player.emit("play","《快乐大本营》");
player.emit("play","《天天向上》");

player.emit("pause","《快乐大本营》");
player.emit("pause","《天天向上》");