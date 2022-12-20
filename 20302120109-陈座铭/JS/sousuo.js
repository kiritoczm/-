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


var nlb = [
    {
        img : "./pic/20.png",
        p1 :"蟹将军(恒隆广场店)",
        sp1 :"9840条评价",
        sp2 :"|",
        sp3 :"人均￥184",
        p2 :"自助餐",
        p4 :"奥林匹克广场",
        
    },

    {
        img : "./pic/11.png",
        p1 :"轩辕空间密室逃脱(西安路店)",
        sp1 :"4442条评价",
        sp2 :"|",
        sp3 :"人均￥62",
        p2 :"密室/沉浸互动剧",
        p4 :"西安路沿线",
        
    },

    {
        img : "./pic/12.png",
        p1 :"LENBACH兰巴赫西餐瓶酒坊(大连星海广场店)",
        sp1 :"4627条评价",
        sp2 :"|",
        sp3 :"人均￥168",
        p2 :"西餐",
        p4 :"星海湾/星海广场",
        
    }
]

var lb = document.getElementsByClassName("lb")[0]

nlb.forEach(function(v,i){
    var ndiv = document.createElement("lb1")

    ndiv.innerHTML = `
    <div class="lb1">
        <img src="${v.img}" class="pic1">
        <div class="div1">
            <p class="p2">${v.p1}</p>
            <div class="div11">
                <span class="span2">${v.sp1}</span>
                <span class="span3">${v.sp2}</span>
                <span class="span2">${v.sp3}</span>    
            </div>
            <div class="div12">
                <p class="p3">${v.p2}</p>
            </div>
            <div class="div13">
                <p class="p3">${v.p4}</p>
            </div>
        </div>
    </div>
    `;
    lb.appendChild(ndiv);
}
)
