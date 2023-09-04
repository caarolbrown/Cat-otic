//Imports
import { Cat } from './cat.js'
import { Bullet } from './bullet.js'
import { Dog } from './dogs.js'
import { Tangle } from './tangle.js'

//Declaracion de variables
function Game() {
    this.self = this
    this.board = document.getElementById('main-board')
    this.walls = document.querySelectorAll('.walls')
    this.bullet = document.getElementsByClassName('bullet')
    this.cat = new Cat(20, 630)
    this.dogs = []
    this.bullets = []
    this.tangle

    //Creacion gato
    this.insertCat = function () {
        let newCat = document.createElement('div')
        newCat.setAttribute('id', 'cat')
        newCat.style.left = this.cat.x + 'px'
        newCat.style.top = this.cat.y + 'px'
        this.board.appendChild(newCat);
        this.cat.sprite = document.getElementById('cat')
    }
    //Creacion perro
    this.insertDog = function (x, y, moveType, posInit, posFin, speed) {
        let dog = new Dog(x, y, moveType, posInit, posFin, speed)
        let newDog = document.createElement('div')
        newDog.classList.add('dog')
        newDog.style.left = x + 'px'
        newDog.style.top = y + 'px'
        dog.sprite = newDog
        this.board.appendChild(newDog)
        this.dogs.push(dog)
    }
    //Creacion bala
    this.insertBullet = function (x, y, direction, posInit, posFin, speed) {
        let bullet = new Bullet(x, y, direction, posInit, posFin, speed)
        let newBullet = document.createElement('div')
        newBullet.classList.add('bullet')
        newBullet.style.left = x + 'px'
        newBullet.style.top = y + 'px'
        bullet.sprite = newBullet
        this.board.appendChild(newBullet)
        this.bullets.push(bullet)
    }

    //Creacion ovillos (pescaditos)
    this.insertTangle = function (x, y) {
        this.tangle = new Tangle(x, y)
        let newTangle = document.createElement('div')
        newTangle.classList.add('tangle')
        newTangle.style.left = x + 'px'
        newTangle.style.top = y + 'px'
        this.tangle.sprite = newTangle
        this.board.appendChild(newTangle)
    }

    //Funcion para iniciar juego
    this.gameStart = function () {
        this.insertCat()
        this.insertDog(0, 470, 'horizontal', 0, 300, 1)
        this.insertDog(420, 210, 'horizontal', 420, 800, 2)
        this.insertDog(900, 0, 'vertical', 0, 280, 2)
        this.insertBullet(1045, 550, 'vertical', 480, 690, 1)
        this.insertBullet(0, 50, 'horizontal', 0, 280, 1)
        this.insertBullet(0, 140, 'horizontal', 0, 280, 1)
        this.insertBullet(0, 375, 'horizontal', 0, 280, 1)
        this.insertBullet(400, 70, 'horizontal', 400, 680, 1)
        this.insertTangle(1115, 30)
        var timerId = setInterval(this.loop, 20)
    }

    //Colisiones muros
    this.wallsCollisions = function () {
        for (let i = 0; i < this.walls.length; i++) {
            switch (this.cat.direction) {
                case 'right':
                    if (
                        this.cat.x + this.cat.width + this.cat.speed >= this.walls[i].offsetLeft &&
                        this.cat.x <= this.walls[i].offsetLeft + this.walls[i].offsetWidth &&
                        this.cat.y + this.cat.height >= this.walls[i].offsetTop &&
                        this.cat.y <= this.walls[i].offsetTop + this.walls[i].offsetHeight
                    ) {
                        this.cat.direction = 'none'
                    };
                    break;
                case 'down':
                    if (
                        this.cat.y + this.cat.height + this.cat.speed >= this.walls[i].offsetTop &&
                        this.cat.y <= this.walls[i].offsetHeight + this.walls[i].offsetTop &&
                        this.cat.x <= this.walls[i].offsetLeft + this.walls[i].offsetWidth &&
                        this.cat.x + this.cat.width >= this.walls[i].offsetLeft
                    ) {
                        this.cat.direction = 'none'
                        console.log(this.walls[i])
                    };
                    break;
                case 'left':
                    if (
                        this.cat.x - this.cat.speed <= this.walls[i].offsetLeft + this.walls[i].offsetWidth &&
                        this.cat.x + this.cat.width >= this.walls[i].offsetLeft &&
                        this.cat.y + this.cat.height >= this.walls[i].offsetTop &&
                        this.cat.y <= this.walls[i].offsetTop + this.walls[i].offsetHeight
                    ) {
                        this.cat.direction = 'none'
                    };
                    break;
                case 'up':
                    if (
                        this.cat.y - this.cat.speed <= this.walls[i].offsetTop + this.walls[i].offsetHeight &&
                        this.cat.y + this.cat.height >= this.walls[i].offsetTop &&
                        this.cat.x <= this.walls[i].offsetLeft + this.walls[i].offsetWidth &&
                        this.cat.x + this.cat.width >= this.walls[i].offsetLeft

                    ) {
                        this.cat.direction = 'none'
                    };
                    break;
            }
        }
    }
    //Colisiones ovillos (pescaditos)
    this.tanglesCollisions = function () {
        if (this.cat.x + this.cat.width >= this.tangle.x &&
            this.cat.x <= this.tangle.x + this.tangle.width &&
            this.cat.y + this.cat.height >= this.tangle.y &&
            this.cat.y <= this.tangle.y + this.tangle.height) {
            if (this.tangle.counter == 0) {
                let newScore = document.getElementById('div1n')
                newScore.classList.remove('tanglesdiv')
                this.tangle.counter++
                this.tangle.x = 20
                this.tangle.y = 30
            } else if (this.tangle.counter == 1) {
                let newScore = document.getElementById('div2n')
                newScore.classList.remove('tanglesdiv')
                this.tangle.counter++
                this.tangle.x = 500
                this.tangle.y = 50
            } else if (this.tangle.counter == 2) {
                let newScore = document.getElementById('div3n')
                newScore.classList.remove('tanglesdiv')
                this.tangle.counter++
                this.tangle.x = 20
                this.tangle.y = 690
            }
        }
    }

    //Colisiones balas
    this.bulletsCollisions = function () {
        for (let i = 0; i < this.bullets.length; i++) {
            if (this.cat.x + this.cat.width >= this.bullets[i].x &&
                this.cat.x <= this.bullets[i].x + this.bullets[i].width &&
                this.cat.y + this.cat.height >= this.bullets[i].y &&
                this.cat.y <= this.bullets[i].y + this.bullets[i].height) {
                //alert('Game Over')
            }
        }
    }

    //Colisiones perros
    this.dogsCollisions = function () {
        for (let i = 0; i < this.dogs.length; i++) {
            if (this.cat.x + this.cat.width >= this.dogs[i].x &&
                this.cat.x <= this.dogs[i].x + this.dogs[i].width &&
                this.cat.y + this.cat.height >= this.dogs[i].y &&
                this.cat.y <= this.dogs[i].y + this.dogs[i].height) {
                //alert('Game Over')
            }
        }
    }

    //Loop
    this.loop = function () {
        game.wallsCollisions(this.cat)
        game.tanglesCollisions()
        game.tangle.draw()
        game.bulletsCollisions()
        game.dogsCollisions()

        for (let i = 0; i < game.dogs.length; i++) {
            game.dogs[i].move()
            game.dogs[i].draw()
        }
        for (let i = 0; i < game.bullets.length; i++) {
            game.bullets[i].move()
            if (game.cat.direction != 'none') {
                game.cat.move()
                game.cat.draw()
            }
            game.cat.direction = 'none'
        }
    }
}

var game = new Game()
game.gameStart()
//hacer evento del clic del boton 
function preGame() {
    var start = document.getElementById('button_start')
    var iniciar = document.getElementById('init')
    start.addEventListener('click', function(){
        iniciar.classList.add('h');
    })
}
preGame()
//Deteccion de teclado:
window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'w':
            game.cat.direction = 'up'
            break
        case 'a':
            game.cat.direction = 'left'
            break
        case 's':
            game.cat.direction = 'down'
            break
        case 'd':
            game.cat.direction = 'right'
            break
        default:
            game.cat.direction = 'none'
    }
})