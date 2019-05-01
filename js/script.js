/**
 * Created by heber on 2019/3/8.
 */
$(document).ready(function(){
    //top
    $('.top>.five>a').click(function(){
        $('.top>.list').show();
        return false
    })
    $('.top>.list>a').click(function(){
        $('.top>.five>a').text($(this).text())

    })
    $('body').click(function(){
        $('.top>.list').hide();
    })
    //logo
    $('.logo>.car').mouseenter(function(){


    })
    //分类
   $('.banner>.slide').mouseenter(function(){
        $(this).css({'background':'#ffffff'})
       $('.banner>.slide>.menu>.item>a').css('color','red')
       $('.sub-menu').show()
    })
    $('.banner>.slide').mouseleave(function(){
        $(this).css({'background':'red'})
        $('.banner>.slide>.menu>.item>a').css('color','#fff')
        $('.sub-menu').hide()
    })
    $('.banner>.sub-menu').mouseenter(function(){
        $(this).show()
    })
    $('.banner>.sub-menu').mouseleave(function(){
        $(this).hide()
    })
    //轮播

    //生活服务
    $('.banner>.right>.top').mouseenter(function(){
        $('.banner>.right>.top').css('color','red').css('cursor','pointer')
    })
    $('.banner>.right>.top').mouseleave(function(){
        $('.banner>.right>.top').css('color','#A5A5A2')
    })
    $('.link>.one').mouseenter(function(){
        $(this).css({'color':'red',
        'cursor':'pointer'})
    })
    $('.link>.one').mouseleave(function(){
        $(this).css({'color':''})
    })
    $('.footer>a').mouseenter(function(){
        $('.footer>a').css('color','#07111b')
    })
    $('.footer>a').mouseleave(function(){
        $('.footer>a').css('color','')
    })
    $('.right-slide>.one').mouseenter(function(){
        $(this).css('background','#71777d')
    })
    $('.right-slide>.one').mouseleave(function(){
        $(this).css('background','#b7bbbf')
    })

    $('.right-slide>.e').click(function(){
        $(window).scrollTop(0)
    })
})
var timer=null,index=0,
    middle=document.getElementById("middle"),
    di=middle.getElementsByClassName("d"),
    pre=document.getElementById("pre"),
    next=document.getElementById("next"),
    len=di.length;
function slideImg(){
    middle.onmouseover=function(){
        if(timer){
            clearInterval(timer);
        }
    }
    middle.onmouseout=function(){
        timer=setInterval(function(){
            index++;
            if(index>=len){
                index=0
            }
            changImg();
        },3000)
    }
    middle.onmouseout();
    //上下张
    pre.onclick= function () {
        index--;
        if(index<0){
            index=len-1;
        }
        changImg();
    }
    next.onclick=function(){
        index++;
        if(index>=len){
            index=0;
        }
        changImg();
    }
}
function changImg(){
    for(var i=0;i<len;i++){
        di[i].style.display='none';
    }
    di[index].style.display='block'
}
slideImg();