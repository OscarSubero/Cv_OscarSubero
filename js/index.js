// Codigo para que el menú hamburguesa aparezca al hacer scroll
navBurguerId = document.getElementById("nav-burguer-id");
var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 350) {
        navBurguerId.className = "nav-burguer nav-burguer-show"
    } else {
        navBurguerId.className = "nav-burguer nav-burguer-hide"
    }
};
window.addEventListener("scroll", myScrollFunc);
 // trabajos realizados
 $('.work-gallery ul li a').click(function() {
    console.log('entre bien');
    var itemID = $(this).attr('href');
    $('.work-gallery ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
});
$('.work-close').click(function() {
    $('.work-detail, .work-gallery ul').removeClass('item_open');
    return false;
});
$(".work-gallery ul li a").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#work-top").offset().top)
    }, 400);
});
//Validación captcha
addEventListener('input', (event) => {
  $(".captcha").css({
    "color" : "#000000"
  });
});
function captchaCode() {
    var Numb1, Numb2, Numb3, Numb4, Code;     
    Numb1 = (Math.ceil(Math.random() * 10)-1).toString();
    Numb2 = (Math.ceil(Math.random() * 10)-1).toString();
    Numb3 = (Math.ceil(Math.random() * 10)-1).toString();
    Numb4 = (Math.ceil(Math.random() * 10)-1).toString();
    
    Code = Numb1 + Numb2 + Numb3 + Numb4;
    $("#captcha span").remove();
    $("#captcha input").remove();
    $("#captcha").append("<span id='code'>" + Code + "</span><input type='button' onclick='captchaCode();'>");
    //$("#captcha").append("<span id='code'>" + "</span><input type='button' onclick='captchaCode();'>" + Code);
};
$(function() {
    captchaCode();
    $('#contactForm').submit(function(){
      var captchaVal = $("#code").text();
      var captchaCode = $(".captcha").val();
      if (captchaVal == captchaCode) {
        $(".captcha").css({
          "color" : "#609D29"
        });
      }
      else {
        $(".captcha").css({
          "color" : "#CE3B46"
        });
      }
      if (captchaVal !== captchaCode)  {
        return false;
      }
    });       
});