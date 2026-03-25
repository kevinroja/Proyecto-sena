function calcularTotales(){

let filas = document.querySelectorAll("#tablaProduccion tr");

let totalGeneral = 0;

filas.forEach(fila =>{

let numeros = fila.querySelectorAll(".numero");

let sumaFila = 0;

numeros.forEach(celda=>{

let valor = parseInt(celda.innerText);

if(!isNaN(valor)){

sumaFila += valor;

}

});

fila.querySelector(".totalFila").innerText = sumaFila;

totalGeneral += sumaFila;

});

document.getElementById("totalGeneral").innerText = totalGeneral;

}


document.addEventListener("input",function(e){

if(e.target.classList.contains("numero")){

calcularTotales();

}

});

// BOTON GUARDAR

document.getElementById("guardar")
.addEventListener("click",function(){

alert("Remisión guardada correctamente ✅");

// luego aqui conectamos BD

});




// BOTON CANCELAR

document.getElementById("cancelar")
.addEventListener("click",function(){

if(confirm("¿Deseas limpiar la remisión?")){

location.reload();

}

});