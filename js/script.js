var slidIdx = 0;

function slideAuto(){
    $(".backimg>li").removeClass("topImg");
    slidIdx++;
    var isIndx = slidIdx % 4;
    if(isIndx == 0){
        $(".backimg>li").eq(isIndx).addClass("topImg");
    }else if(isIndx == 1){
        $(".backimg>li").eq(isIndx).addClass("topImg");
    }else if(isIndx == 2){
        $(".backimg>li").eq(isIndx).addClass("topImg");
    }else if(isIndx == 3){
        $(".backimg>li").eq(isIndx).addClass("topImg");
    }
   
}

var slideCall = setInterval("slideAuto()",2500);

$(".silde").hover(function(){
    clearInterval(slideCall);
},function(){
    slideCall = setInterval("slideAuto()",2500);
});

$("#gnb>li").hover(function(){
    $(this).children(".submenu").stop().slideDown(300);
},function(){
    $(this).children(".submenu").stop().slideUp(300);
});

$("#menu").click(function(){
    $("#gnb").fadeToggle(200);
    $(this).toggleClass("menuAni");
});