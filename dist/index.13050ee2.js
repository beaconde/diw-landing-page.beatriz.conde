'use strict';
const botones = document.querySelectorAll('.boton');
const sections = document.querySelectorAll('.section');
botones.forEach((boton, i)=>{
    botones[i].addEventListener('click', (event)=>switchTab(i, event)
    );
});
const switchTab = (i, event)=>{
    event.preventDefault();
    botones.forEach((boton, i)=>{
        botones[i].classList.remove('activo');
        sections[i].classList.remove('activo');
    });
    botones[i].classList.add('activo');
    sections[i].classList.add('activo');
};

//# sourceMappingURL=index.13050ee2.js.map
