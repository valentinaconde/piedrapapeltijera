let juego = document.getElementById('juego')
let mano = document.getElementById('mano')
let puntaje = document.getElementById('puntaje')

let tijeraAuto = document.getElementById('tijeraAuto')
let papelAuto = document.getElementById('papelAuto')
let piedraAuto = document.getElementById('piedraAuto')

let numero
let respAuto = 0
let eleccionUser
let ganadorMano
let ganados1 = 0
let ganados2 = 0


let tijera = document.getElementById('tijera').onclick = (e) => {
    eleccionUser = 'tijera'
    numero = parseInt(Math.random() * (4 - 1) + 1)

    ganaMano()
}



document.getElementById('piedra').onclick = (e) => {
    eleccionUser = 'piedra'
    numero = parseInt(Math.random() * (4 - 1) + 1)

    ganaMano()
}

document.getElementById('papel').onclick = (e) => {
    eleccionUser = 'papel'
    numero = parseInt(Math.random() * (4 - 1) + 1)

    ganaMano()
}


obtenerResp = () => {

    if (numero === 1) {
        respAuto = 'piedra'
        piedraAuto.classList.add('mostrar')
    }
    else if (numero === 2) {
        respAuto = 'papel'
        papelAuto.classList.add('mostrar')
    }
    else {
        respAuto = 'tijera'
        tijeraAuto.classList.add('mostrar')
    }


}



ganaMano = () => {

    obtenerResp()

    console.log('eleccion user: ', eleccionUser)
    console.log('resp auto: ', respAuto)

    if (respAuto === 'piedra' && eleccionUser === 'papel') {
        ganadorMano = 2
        ganados2++
    }
    else if (respAuto === 'piedra' && eleccionUser === 'tijera') {
        ganadorMano = 1
        ganados1++
    }
    else if (respAuto === 'papel' && eleccionUser === 'piedra') {
        ganadorMano = 1
        ganados1++
    }
    else if (respAuto === 'papel' && eleccionUser === 'tijera') {
        ganadorMano = 2
        ganados2++
    }
    else if (respAuto === 'tijera' && eleccionUser === 'piedra') {
        ganadorMano = 2
        ganados2++
    }
    else if (respAuto === 'tijera' && eleccionUser === 'papel') {
        ganadorMano = 1
        ganados1++

    }
    else {
        ganadorMano = 0
    }

    puntaje.innerHTML = `
    </h1>Puntaje: Jugador: ${ganados2} --- Computadora: ${ganados1}</h1>
    `

    mano.innerHTML += `
    
    <div class="actual">
    <h5>Jugador: </h5>
    <img src="imagenes/${eleccionUser}.png"class="imagenJuego">
    <h5>Computadora:</h5>
    <img src="imagenes/${respAuto}.png"class="imagenJuego">
    </div>

    `


    console.log("ganador de mano: ", ganadorMano)
    console.log("ganados1: ", ganados1, "ganados2: ", ganados2)


    //Borrar imagen automatica

    setTimeout(() => {
        piedraAuto.classList.remove('mostrar')
        tijeraAuto.classList.remove('mostrar')
        papelAuto.classList.remove('mostrar')
    }, 1000);



    if (ganados1 === 3 || ganados2 === 3) {
        if (ganados1 === 3) {
            ganadorManoString = 'Computadora'
        }
        if (ganados2 === 3) {
            ganadorManoString = 'Jugador'
        }

        console.log(ganadorManoString)

        Swal.fire({
            title: `Ganador: ${ganadorManoString}`,
            timer: 5000,
            backdrop: `
                rgba(0,0,123,0.4)                
            `
        })

        reset()
        return
    }



}







reset = () => {
    ganados1 = 0
    ganados2 = 0
    ganadorMano = 0
    respAuto = 0
    ganadorManoString = ''
    mano.innerHTML = ''


}

