
BrowserList es una herramienta que nos permite automatizar la compatibilidad 
que tendrá el código código CSS y JavaScript de nuestro proyecto con respecto
a las diferentes versiones de navegadores web.

En este proyecto, hemos añadido al package.json la siguiente línea:

> "browserslist": [">0.3%", "last 3 versions", "not dead"],

Con esta línea, nos aseguramos de que nuestro proyecto va a funcionar correctamente
en todos los navegadores que tengan actualmente soporte, adaptado para las tres
últimas versiones y que su uso a nivel mundial sea de más del 0,3% de la población.
