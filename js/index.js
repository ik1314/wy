$(document).ready(function () {
    var stars = 3000; /*星星的密集程度，数字越大越多*/
    var $stars = $(".stars"); //操作星星
    var r = 600; /*星星的看起来的距离,值越大越远,可自行调制到自己满意的样子*/
    for (var i = 0; i < stars; i++) {
        var $star = $("<div/>").addClass("star"); //添加星星类
        // console.log($star)
        $stars.append($star);
    }
    //这里创建出星星运动的轨迹
    //选取出class = star 元素
    //用this指的是这个对象
    $(".star").each(function () {
        var cur = $(this);
        var s = 0.2 + (Math.random() * 1);
        var curR = r + (Math.random() * 300);
        cur.css({
            transformOrigin: "0 0 " + curR + "px",
            transform: " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")"
        })
    })
})

// 音乐播放
var video = true
$('.box').click(function () {
    if (video) {
        $("#myaudio")[0].play();
        video = false;
    } else {
        $("#myaudio")[0].pause();
        video = true;
    }
})

// 打字机
// 点击事件
/*$('.click').click(function () {
    // 获取元素
    var text_typed = $(".text").text();
    // 初始化
    $(".text1").typed({
        strings: text_typed.split(","),
        typeSpeed: 130,
        loop: true,
        backDelay: 1100,
        backSpeed: 50,
    });
})*/