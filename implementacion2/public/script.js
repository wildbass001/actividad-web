const input = document.getElementById("texto")
const boton = document.getElementById("boton")

input.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        alert("Texto ingresado: " + input.value)
    }

})

let estado = 0

boton.addEventListener("click", function(){

    estado++

    if(estado > 2){
        estado = 0
    }

    if(estado === 0){
        document.body.style.background = "white"
        document.body.style.color = "black"
    }

    if(estado === 1){
        document.body.style.background = "black"
        document.body.style.color = "white"
    }

    if(estado === 2){
        document.body.style.background = "skyblue"
        document.body.style.color = "red"
    }

})