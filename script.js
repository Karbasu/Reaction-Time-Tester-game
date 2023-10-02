var start = new Date().getTime();
function move() {
    var left = Math.random()*800;
    var wt = (Math.random()*200+100);
    var top = Math.random()*400;
    document.getElementById("shape").style.left = left+"px";
    document.getElementById("shape").style.top = top+"px";
    document.getElementById("shape").style.width = wt+"px";
    document.getElementById("shape").style.height = wt+"px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}
move();
document.getElementById("shape").onclick = function(){
    
    document.getElementById("shape").style.display="none";
    var end = new Date().getTime();
    var time = (end-start)/1000;
    document.getElementById("time").innerHTML = time;
    move();

}