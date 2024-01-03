function makebubble(){
    var clutter="";
    for(var i=1;i<=85;i++){
        var rn=Math.floor(Math.random()*10)
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pangame").innerHTML=clutter;
}
var timer=30;
function timechange(){
    var time=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeval").textContent=timer;
        }
        else {
            clearInterval(time);
            document.querySelector("#pangame").innerHTML=`<h1>Game Over</h1><h1>Score:${score}</h1>`
          
        }
    },1000);
}
var hit;
function valueofhit(){
     hit=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hit;
}
var score=0;
function increasescore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}
// evnt bubbling
document.querySelector("#pangame").addEventListener("click",function(val){
    var clickedno=Number(val.target.textContent);
    if(clickedno==hit){
        increasescore();
        makebubble();
        valueofhit();
    }
})
makebubble();
timechange();
valueofhit();