// 슬라이더

// jQuery
let idx=1;
setInterval(function(){
    if(idx>2){
        idx=0;
    }
    $('.slider .img-box').css('opacity','0');
    $('.slider .img-box').eq(idx++).css('opacity','1');
},3000);


$('.pager span').click(function(){
    idx=$(this).index();
    $('.slider .img-box').css('opacity','0');
    $('.slider .img-box').eq(idx++).css('opacity','1');
})

