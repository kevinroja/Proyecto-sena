function calcularTotales(){

let filas=document.querySelectorAll("#tablaProduccion tr");

let totalGeneral=0;

filas.forEach(fila=>{

let numeros=fila.querySelectorAll(".numero");

let suma=0;

numeros.forEach(celda=>{

let valor=parseInt(celda.innerText);

if(!isNaN(valor)){

suma+=valor;

}

});

fila.querySelector(".totalFila").innerText=suma;

totalGeneral+=suma;

});

document.getElementById("totalGeneral").innerText=totalGeneral;

}



document.addEventListener("input",function(e){

if(e.target.classList.contains("numero")){

calcularTotales();

}

});



document.getElementById("guardar")
.addEventListener("click",()=>{

alert("Producción cargada correctamente ✅");

});



document.getElementById("cancelar")
.addEventListener("click",()=>{

if(confirm("¿Limpiar formulario?")){

location.reload();

}

});