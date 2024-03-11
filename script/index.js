$(document).ready(function(){
    //스크롤 이벤트
    $(window).scroll(function () { 
        let scrollValue = $(document).scrollTop(); 
        console.log(scrollValue); 

        if((scrollValue>=400)&&(scrollValue<1100)){
            $('main .con3').addClass('fadeInUp');
            $('main .con3').css('opacity','1');
        }else if((scrollValue>=1200)&&(scrollValue<1900)){
            $('main .con4').addClass('fadeInUp');
            $('main .con4').css('opacity','1');
        }else if(scrollValue>=2000){
            $('main .con5').addClass('fadeInUp');
            $('main .con5').css('opacity','1');
        }else{}
    });
    $('.serch_box').mouseenter(function(){
        $('.hidden_search').css('width','440px');
        $('.hidden_search').css('height','230px');
        $('.hidden_search').css('opacity','1');
    });
    $('.serch_box').mouseleave(function(){
        $('.hidden_search').css('width','0px');
        $('.hidden_search').css('height','0px');
        $('.hidden_search').css('opacity','0');
    });
});