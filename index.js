import { Cat } from './cat.js'
import { Bullet } from './bullets.js';
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
    //console.log(e.key)

    if (cat.wallsCollisions(walls)){
        cat.direction = 'none'
    } else {
        cat.move()
        cat.draw()
    }
})


//Insertar al gato en pantalla

var insertCat = function () {
    var newCat = document.createElement('div');
    newCat.setAttribute('id', 'cat');
    board.appendChild(newCat)
   
}

// Insert las balas en pantalla

var insertBullet = function () {
    var newBullet = document.createElement('div');
    newBullet.setAttribute('id', 'bullet');
    board.appendChild(newBullet)
}



insertCat()
const cat = new Cat(0, 630)
var timerId = setInterval(cat.move, 20);

insertBullet()
const bullet = new Bullet (1045, 560)

cat.draw()
bullet.draw()
bullet.move()
bullet.removeBullet()







