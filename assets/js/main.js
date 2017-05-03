window.addEventListener("load", function(){
  var submit = document.getElementById("submit");
// Cuando se hace click al submit, recien empieza la evaluación
  submit.addEventListener("click",function(e){
    e.preventDefault();
    validarForm();
  });

});
