document.getElementById("guardar")
.addEventListener("click",function(){

alert("Devolución guardada ✅");

});


document.getElementById("cancelar")
.addEventListener("click",function(){

if(confirm("¿Desea limpiar formulario?")){

location.reload();

}

});