 $(function(){
    (function(){
       var oUl=$('.piclist')
       var oLi=$('.piclist').find('li')
       var oUl2=$('.btn')
       var oUlLi2=$('.btn').find('li')
       var timer=null;
       var iNow=0;
       oUl.hover(function(){clearInterval(timer)},autoPlay)
      doMove()
          oUlLi2.mouseover(function(){
            clearInterval(timer);
          })
          oUlLi2.click(function(){
              iNow=$(this).index()
              doMove()
           })
          autoPlay();

           function autoPlay(){

            timer=setInterval(function(){
                iNow++;
            iNow=iNow%oLi.length;
            doMove();

            },1000);
           };
 
      function doMove(){
       oLi.each(function(i){
          if(i!=iNow){
            oLi.eq(i).hide().css('zIndex',1)
            oUlLi2.eq(i).removeClass('active2')
          }else{
            oLi.eq(i).show().css('zIndex',2)
             oUlLi2.eq(i).addClass('active2')
          }
       })

      }
    })()


  })

