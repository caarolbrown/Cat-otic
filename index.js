import { Cat } from './cat.js'

//Declaración de variables

const board = document.getElementById('main-board');



 //Deteccion de teclado:

window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'w':
        cat.direction = 'up'
        break
        case 'a':
        cat.direction = 'left'
        break
        case 's':
        cat.direction = 'down'
        break
        case 'd':
        cat.direction = 'right'
        break
        default:
        cat.direction = "none"
    }
    cat.updatePosition()
    cat.draw()
    cat.move()
})

//Insertar al gato en pantalla

var insertCat = function () {
    var newCat = document.createElement('div');
    newCat.setAttribute('id', 'cat');
    board.appendChild(newCat)
   
}




insertCat()
const cat = new Cat(40, 660)
var timeId = setInterval(cat.move, 20);

cat.draw()






