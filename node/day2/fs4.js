


// readFile 读取文件内容

var fs  = require("fs");

fs.readFile("./logs/hello.log","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})


fs.readFile("lg.html","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});

// 同步读取 
var data = fs.readFileSync("./logs/hello.log","utf-8");
console.log(data);









// user 你这里只能是 phone service smsCode imgCode 这四个，其余 的imgCode2掉，最好分2个对象
// 而且你这里的imgCode可能不存在，你也要自己判断，
$scope.$watch("user",function(newValue,oldValue){
    console.log(newValue);
    $scope.disable = true;
    newValue.forEach(function(value,index){
        // 判断每一项是否都不为空
        // 有一项为空我就return false;
        if(value==""){
            $scope.disable = false;
        }
    })
},true)