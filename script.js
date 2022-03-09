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
    <p>Puntaje: Jugador: ${ganados2} --- Computadora: ${ganados1}</p>
    `

    mano.innerHTML += `
    
    <div class="actual">
    <p>Jugador: </p>
    <img src="imagenes/${eleccionUser}.png"class="imagenJuego">
    <p>Computadora:</p>
    <img src="imagenes/${respAuto}.png"class="imagenJuego">
    </div>

    `




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


        Swal.fire({
            title: `Ganador: ${ganadorManoString}`,
            timer: 5000,
            backdrop: `
            rgba(4, 112, 0, 0.253)             
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

