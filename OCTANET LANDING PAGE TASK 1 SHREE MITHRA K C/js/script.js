$(document).ready(function(){
  // WOW INITIALIZATION
  new WOW().init();
  // SCROLL SPY TRANSITION
  $('body').scrollspy({target: ".navbar", offset: 50});   
    $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
    // SCROOL TOP ICON
     $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);  
    }
    });
    $('#return-to-top').click(function() {     
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
    });

 //    // EMAIL VALIDATION
    $(".go").click(function(){
    var email=$("input").eq(0).val();
    var org=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email=="") {
    alert("please enter Email");
  }
  else if (org.test(email) == false) 
    {
          alert("Enter the correct mail id");
            return false;
    }
    else
  {
    alert("Submitted...We will mail you shortley");
    }
 });
    // JOIN VALIDATION
    $(".subBtn").click(function(){
    var name1=$(".name1").val();
    var name2=$(".name2").val();
    var email=$(".mail").val();
    var phone=$(".number").val();
    var address=$(".address").val();
    var city=$(".city").val();
    var code=$(".code").val();
    var phonenum=/^\d{10}$/;
    var org=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (name1==""&&name2==""&&email==""&&phone==""&&address==""&&city==""&&code=="") {
    alert("please enter every fields");
  }
  else if (name1=="") {
    alert("please enter your First Name ");
  }
  else if (name2=="") {
    alert("please enter your Second Name ");
  }
  else if (email=="") {
    alert("please enter your Email Id");
  }
  else if (org.test(email) == false) 
    {
          alert("Enter the correct mail id");
            return false;
    }
    else if (phone=="") {
    alert("please enter your Phone Number");
  }
  else if (phonenum.test(phone) == false) 
    {
          alert("Enter the Valid Phone Number");
            return false;
    }
    else if (address=="") {
    alert("please enter your Address");
  }
  else if (city=="") {
    alert("please enter your City");
  }
    else if (code=="") {
    alert("please enter your Pin code");
  }
    else
  {
    alert("You Have Succesfully Registered");
    location.href = "index.html";
    return false;
  }
 });
});

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});