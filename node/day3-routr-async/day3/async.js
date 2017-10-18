

// 异步流程控制 async 

// setTimeout

// promise 

var async = require("async");

// series  串行  串行无关联  事件执行按 书写顺序一个接一个执行, 如果有一个事件返回error,则停止运行 
// parallel  并行  并行无关联   所有的事件同时执行   不会产生阻塞
// waterfall  串行有关联  
// whist      并行有关联 


// series 串行无关联  2个参数  第一个参数是数组/对象(包含执行的事件) 第二个参数就是回调函数
// 数组  同步串行   []  得到结果也是 数组  
// console.time("test");
// async.series([
//     function(callback){
//         setTimeout(function(){
//             callback(null,"one");    //null 表示报错  one 表示返回结果 
//         },2000);
//     },
//     function(callback){
//         setTimeout(()=>{
//             callback(null,"two");
//         },1000)
//     }
// ],function(err,result){
//     if(err) throw err;
//     console.log(result);
//     console.timeEnd("test");
// })


// series 异步串行
// 得到结果 是 {}
// 按照事件顺序先后执行 

// console.time("test");
// async.series({
//     one:function(callback){
//         setTimeout(()=>{
//             callback(null,"one");
//         },3000)
//     },
//     two:function(callback){
//         setTimeout(()=>{
//             callback(null,"two");
//         },2000)
//     }

// },function(err,result){
//     if(err) throw err;
//     console.log(result);
//     console.timeEnd("test");
// })


// parallel  并行无关联
//  []  同步并行  返回结果是 数组 
//  输出结果 的顺序  跟执行时间无关,谁在前面谁先输出  
//  执行时间按最长的运行时间计算
// console.time("test");
// async.parallel([
//     function(callback){
//         setTimeout(()=>{
//             callback(null,"one");
//         },3000)
//     },
//     function(callback){
//         setTimeout(()=>{
//             callback(null,"two");
//         },2000)
//     }
// ],function(err,result){
//     if(err) throw err;
//     console.log(result);
//     console.timeEnd("test");
// })



// {} 异步并行无关联
// 输出的结果  对象 
// 输出结果的顺序  跟事件的执行时间有关 ,时间少就先输出 
// console.time("test");
// async.parallel({
//     one:function(callback){
//         setTimeout(()=>{
//             callback(null,"one");
//         },1000)
//     },
//     two:function(callback){
//         setTimeout(()=>{
//             callback(null,"two");
//         },2000)
//     }
// },function(err,result){
//     if(err) throw err;
//     console.log(result);
//     console.timeEnd("test");
// })


// waterfall 串行有关联  
// 事件1的结果传入 事件2 
// 最后回答函数  得到  所有的结果  null 和 result 要对应声明 
async.waterfall([
    function(callback){
        callback(null,"one","two");
    },
    function(arg1,arg2,callback){   // arg1 = one arg2 = two 
        callback(null,arg1,arg2,"three");
    },
    function(arg1,arg2,arg3,callback){
        callback(null,[arg1,arg2,arg3,"four","done"]);
    }
],function(err,result){
    if(err) throw err;
    console.log(result);
});


// whilst  并行有关联
// var count = 0;
// async.whilst(
//     function() { return count < 5; },
//     function(callback) {
//         count++;
//         setTimeout(function() {
//             callback(null, count);
//         }, 1000);
//     },
//     function (err, n) {
//         // 5 seconds have passed, n = 5
//         if(err) throw err;
//         console.log(n);
//     }
// );






 