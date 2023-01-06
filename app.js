let posibilidades = ["piedra", "papel", "tijera"]
let contadorUsuario = 0
let contadorComputador = 0

const cachipun = (eleccionUsuario) => {
    let random = Math.floor(Math.random()*3);
    let eleccionComputador = posibilidades[random];
    let resultado = ""
    if (eleccionComputador == eleccionUsuario) {
        resultado = "Empate"    
    }
    else if ((eleccionComputador == "piedra" && eleccionUsuario == "papel")||(eleccionComputador == "papel" && eleccionUsuario == "tijera")||(eleccionComputador == "tijera" && eleccionUsuario == "piedra")) {
        resultado = "Ganaste! :D"
        contadorUsuario++  
    }
    else {
        resultado = "Perdiste :("
        contadorComputador++
    }
    return [resultado, eleccionComputador]
}

let computerChoice = document.getElementById("computerChoice");
let yourChoice = document.getElementById("yourChoice");
let resultado = document.getElementById("result");
let resultadosPosibles = Array.from(document.getElementsByClassName("boton"));
let contadorUser = document.getElementById("contadorUser")
let contadorComputer = document.getElementById("contadorComputer")
let reiniciar = document.getElementById("reiniciar")
contadorUser.innerHTML = contadorUsuario
contadorComputer.innerHTML = contadorComputador

resultadosPosibles.forEach(resultadoPosible => resultadoPosible.addEventListener('click', (e)=> {
    tuEleccion = e.target.id
    yourChoice.innerHTML = `${tuEleccion.charAt(0).toUpperCase()+tuEleccion.slice(1)}<img src="${tuEleccion}.png" class="imagenEleccion" height=100px>`
    let resultados = cachipun(tuEleccion)
    resultado.innerHTML = resultados[0]
    computerChoice.innerHTML = `${resultados[1].charAt(0).toUpperCase()+resultados[1].slice(1)}<img src="${resultados[1]}.png" class="imagenEleccion" height=100px>`
    contadorUser.innerHTML = contadorUsuario
    contadorComputer.innerHTML = contadorComputador
}))

reiniciar.addEventListener('click', ()=> {
    contadorComputador = 0;
    contadorUsuario = 0;
    contadorUser.innerHTML = contadorUsuario
    contadorComputer.innerHTML = contadorComputador
})