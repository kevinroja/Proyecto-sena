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

// BOTON CONSULTA

document.getElementById("Consultar")
.addEventListener("click",function(){

alert("Consulta realizada");

// luego aqui conectamos BD

});
