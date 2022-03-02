'use strict';

const imagenes = document.querySelector('.imagenes');
const puntos = document.querySelectorAll('.punto');

puntos.forEach( (punto, i) => {
    puntos[i].addEventListener('click', () => carrusel(i))
})

const carrusel = (i) => {

    imagenes.style.transform = `translateX(${i * -(100 / puntos.length)}%)`;

    puntos.forEach((punto, i) => {
        puntos[i].classList.remove("activo");
    })

    puntos[i].classList.add("activo");

}
