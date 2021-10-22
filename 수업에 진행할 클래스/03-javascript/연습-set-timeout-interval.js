setTimeout(function(){ 
    console.log("기능이 실행!!!") 
}, 2000)
// 2
setInterval(function(){
    console.log("안녕하세요!!")
}, 1000)
// 3


let time = 180
setInterval(function(){
   if(time>=0){    
    const minutes = Math.floor(time / 60)
    const second = time %60
    console.log(minutes + ":" + second)
    time = time - 1
}
    },1000)