var lastScrollTop = 0;
//cambiar el estilo del header cuando avanza el scroll
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById("logoImg").src = "assets/img/logo-pink.png";
     document.getElementById("menu").classList.add("black");
     document.getElementById("header").classList.add("black");
   }
   if(currentScroll<=3){
     document.getElementById("logoImg").src = "assets/img/logo-white.png" ;
     document.getElementById("menu").classList.remove("black");
     document.getElementById("header").classList.remove("black");
   }
   lastScrollTop = currentScroll;
}, false);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("focus", function(){
  document.getElementById("logChange").classList.add("more");
  document.getElementById("moreLogin").style.display = "block";
});
// para la validacion

function validarForm(){
  var phoneNumber = document.getElementById("phoneNumber");
  var name = document.getElementById("name");
  var city = document.getElementById("city");
  var email = document.getElementById("email");
  var testPhone = /^[0-9]+$/;
  var testName = /[A-Z]{1}[a-z]+$/;
  var testEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  phoneNumber.addEventListener("blur", function(e){
    if(!phoneNumber.value.match(testPhone)){
      e.target.nextSibling.style.visibility = "visible";
      e.target.classList.add("red");
    }else{
      e.target.nextSibling.style.visibility = "hidden";
      e.target.classList.remove("red");
    }
  });
  name.addEventListener("blur", function(e){
    if(!name.value.match(testName)){
      e.target.nextSibling.style.visibility = "visible";
      e.target.classList.add("red");

    }else{
      e.target.nextSibling.style.visibility= "hidden";
      e.target.classList.remove("red");

    }
  });
  city.addEventListener("blur", function(e){
    if(!city.value.match(testName)){
      e.target.nextSibling.style.visibility = "visible";
      e.target.classList.add("red");

    }else{
      e.target.nextSibling.style.visibility= "hidden";
      e.target.classList.remove("red");

    }
  });
  email.addEventListener("blur", function(e){
    if(!email.value.match(testEmail)){
      e.target.nextSibling.style.visibility = "visible";
      e.target.classList.add("red");

    }else{
      e.target.nextSibling.style.visibility= "hidden";
      e.target.classList.remove("red");

    }
  });

}
