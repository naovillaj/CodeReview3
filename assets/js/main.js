window.addEventListener("load", function(){
  var submit = document.getElementById("submit");
  validarForm();
// Cuando se hace click al submit, recien empieza la evaluación
  submit.addEventListener("click",function(e){
    e.preventDefault();
    validarForm();
  });

});
