var fhdb = document.getElementById("fhdb");
var st = document.documentElement.scrollTop || document.body.scrollTop;
var timer;
fhdb.onclick = function () {  
    timer = requestAnimationFrame(function animation() {
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        if (st > 0) {
            scrollTo(0, st - 30);
            timer = requestAnimationFrame(animation);
        }               
    });
}
