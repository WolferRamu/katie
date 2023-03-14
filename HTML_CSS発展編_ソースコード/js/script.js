$(function(){
    $('.carouselImg').slick({
      fade:true,
      speed:2500,
      autoplay:true,
      dots:true,
      infinite:true,
      autoplaySpeed:3000,
      arrows:false,
    });
    $('.top-photo').hover(
      function(){
      $(this).stop().animate({"opacity":"0.5"});
      },
      function(){
        $('.top-photo').animate({"opacity":"1"});
    });
    $('.item a').click(function(){
      var imgSrc = $(this).children().attr('src');
      $('.big-img').children().attr('src', imgSrc)
      $('.modal').fadeIn();
      $('body,html').css('overflow-y','hidden');
      return false
    });
    $('.close-btn').click(function(){
      $('.modal').fadeOut();
      $('body,html').css('overflow-y','visible');
      return false
    });
    
  });

 
  $(function(){
    $(window).on('scroll',function(){
      if($(window).scrollTop()>100){
        $('#back-btn').fadeIn(200);
      }else{
        $('#back-btn').fadeOut(200);
      }
    });
  });

  $(function(){
    $(window).scroll(function(){
      const windowHeight =$(window).height();
      const scroll = $(window).scrollTop();

      $('#scroll-fade').each(function(){
        const targetPosition = $('#scroll-fade').offset().top;
        if(scroll>targetPosition-windowHeight+100){
          $(this).addClass('is-fade-in');
          $(this).css('opacity','1');
        }
      });

      $('#scroll-in').each(function(){
        const targetPosition = $('#scroll-in').offset().top;
        if(scroll>targetPosition-windowHeight+100){
          $(this).addClass('is-fade-in');
          $(this).css('opacity','1');
        }
    });
  });
});

   $(function(){
    $('.item img').hover(
      function(){
      $(this).stop().animate({"opacity":"0.5"});
      },
      function(){
        $(this).animate({"opacity":"1"});
    });
   })


  
  
  
 