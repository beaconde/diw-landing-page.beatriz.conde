'use strict';

const botonesAcordeon = document.querySelectorAll('.boton-acordeon');
const bloques = document.querySelectorAll('.bloque');

botonesAcordeon.forEach( (boton, i) => {
    botonesAcordeon[i].addEventListener('click', () => abrirImagen(i))
})

const abrirImagen = (i) => {
    console.log('click')
    bloques.forEach( (bloque, i) => {
        bloques[i].classList.remove('activo');
    })

    bloques[i].classList.add('activo');

}
