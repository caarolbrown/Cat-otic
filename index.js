import { Cat } from './cat.js'
// import { Dogs } from './dogs.js'

//Declaración de variables

const board = document.getElementById('main-board');
const walls = document.getElementsByClassName('walls')


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

    window.addEventListener('keyup', function () {
        cat.direction = 0;
    })

    cat.draw()
    cat.move()
    cat.wallsCollisions(walls)
})

//Insertar al gato en pantalla

var insertCat = function () {
    var newCat = document.createElement('div');
    newCat.setAttribute('id', 'cat');
    board.appendChild(newCat)
   
}




insertCat()
const cat = new Cat(50, 630)
var timeId = setInterval(cat.move, 20);

cat.draw()






