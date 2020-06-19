function loadMovie() {
  var video = document.getElementById("full-video");
  var video_sp = document.getElementById("full-video-sp");
  var wrapper = document.getElementById("wrapper");

  video.addEventListener('ended', function () {
      this.style.display = 'none';
      wrapper.style.display = 'block';
      wrapper.style.animation = "fadeIn 1s";
      video_sp.style.display = 'none';
  }, false);

  video_sp.addEventListener('ended', function () {
      this.style.display = 'none';
      wrapper.style.display = 'block';
      wrapper.style.animation = "fadeIn 1s";
      video.style.display = 'none';
  }, false);
}

$(document).ready(function() {
  $("html,body").stop();

  /*
    nav bar click event
    for move in page
  */
  $("#nav-logo").click(function(){
    $("html,body").animate({"scrollTop":$("#page-cover").offset().top});
  })

  $("#nav-story").click(function(){
    $("html,body").animate({"scrollTop":$("#page-story").offset().top});
  })

  $("#nav-character").click(function(){
    $("html,body").animate({"scrollTop":$("#page-character").offset().top});
  })

  $("#nav-staff").click(function(){
    $("html,body").animate({"scrollTop":$("#page-staff").offset().top});
  })

  $("#nav-poster").click(function(){
    $("html,body").animate({"scrollTop":$("#page-poster").offset().top});
  })
})

var Before_scollH = 0;

/*scoll*/
$(window).scroll(function(){

  //set page by id
  page_story = document.getElementById("page-story");
  page_character = document.getElementById("page-character");
  page_staff = document.getElementById("page-staff");
  page_poster = document.getElementById("page-poster");

  /*Nav li active listen*/

  if($(window).scrollTop()+$(window).height()/2 > page_story.offsetTop && $(window).scrollTop()+$(window).height()/2 <= page_story.offsetTop+page_story.offsetHeight){
    if(!$("#nav-story").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav-story").addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  }else if($(window).scrollTop()+$(window).height()/2 > page_character.offsetTop && $(window).scrollTop()+$(window).height()/2 <= page_character.offsetTop+page_character.offsetHeight) {
    if(!$("#nav-character").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav-character").addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  }else if($(window).scrollTop()+$(window).height()/2 > page_staff.offsetTop && $(window).scrollTop()+$(window).height()/2 <= page_staff.offsetTop+page_staff.offsetHeight) {
    if(!$("#nav-staff").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav-staff").addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  }else if($(window).scrollTop()+$(window).height()/2 > page_poster.offsetTop && $(window).scrollTop()+$(window).height()/2 <= page_poster.offsetTop+page_poster.offsetHeight) {
    if(!$("#nav-poster").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav-poster").addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  }else{
    $("nav .active").removeClass("active");
  }

})
