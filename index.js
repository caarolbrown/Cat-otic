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

function start() {
    var timeId = setInterval(move, 20);
}

insertCat()
const cat = new Cat(30, 660)
cat.draw()






