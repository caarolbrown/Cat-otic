import { Cat } from './cat.js'
import { Dog } from './dogs.js'

    //Declaración de variables:

function Game() {
    this.self = this
    this.board = document.getElementById('main-board')
    this.walls = document.querySelectorAll('.walls')
    this.cat = new Cat(30, 620)
    this.dog = new Dog(10, 50)
    this.bullets = []

    //Impresión del gato en pantalla:

    this.insertCat = function () {
        let newCat = document.createElement('div');
        newCat.setAttribute('id', 'cat');
        newCat.style.left = this.cat.x + "px"
        newCat.style.top = this.cat.y + "px"
        this.board.appendChild(newCat)
        this.cat.sprite = document.getElementById('cat')
    }

    //Impresión del perro en pantalla:

    this.insertDog = function () {
        let newDog = document.createElement('div');
        newDog.setAttribute('id', 'dog');
        newDog.style.left = this.dog.x + "px"
        newDog.style.top = this.dog.y + "px"
        this.board.appendChild(newDog)
        this.dog.sprite = document.getElementById('dog')
    }

    this.gameStart = function () {
        this.insertCat()
        this.insertDog()
        var timerId = setInterval(this.loop, 20)
    }

    //Coalisiones del gato:

    this.wallsCollisions = function (player) {
        for (let i = 0; i < this.walls.length; i++) {
            switch (this.cat.direction) {
                case "right":
                    if (
                        this.cat.x + this.cat.width + this.cat.speed >= this.walls[i].offsetLeft &&
                        this.cat.x <= this.walls[i].offsetLeft + this.walls[i].offsetWidth &&
                        this.cat.y + this.cat.height >= this.walls[i].offsetTop &&
                        this.cat.y <= this.walls[i].offsetTop + this.walls[i].offsetHeight
                    ) {
                        console.log(this.walls[i].innerHTML)
                        this.cat.direction = "none"
                    };
                    break;
                case "down":
                    if (
                        this.cat.y + this.cat.height + this.cat.speed >= this.walls[i].offsetTop &&
                        this.cat.y <= this.walls[i].offsetHeight + this.walls[i].offsetTop &&
                        this.cat.x <= this.walls[i].offsetLeft + this.walls[i].offsetWidth &&
                        this.cat.x + this.cat.width >= this.walls[i].offsetLeft
                    ) {
                        console.log(this.walls[i].innerHTML)
                        this.cat.direction = "none"
                    };
                    break;
                case "left":
                    if (
                        this.cat.x - this.cat.speed <= this.walls[i].offsetLeft + this.walls[i].offsetWidth &&
                        this.cat.x + this.cat.width >= this.walls[i].offsetLeft &&
                        this.cat.y + this.cat.height >= this.walls[i].offsetTop &&
                        this.cat.y <= this.walls[i].offsetTop + this.walls[i].offsetHeight
                    ) {
                        console.log(this.walls[i].innerHTML)
                        this.cat.direction = "none"
                    };
                    break;
                case "up":
                    if (
                        this.cat.y - this.cat.speed <= this.walls[i].offsetTop + this.walls[i].offsetHeight &&
                        this.cat.y + this.cat.height >= this.walls[i].offsetTop &&
                        this.cat.x <= this.walls[i].offsetLeft + this.walls[i].offsetWidth &&
                        this.cat.x + this.cat.width >= this.walls[i].offsetLeft

                    ) {
                        console.log(this.walls[i].innerHTML)
                        this.cat.direction = "none"
                    };
                    break;
            }
        };
    }

    this.loop = function () {
        game.wallsCollisions() //?
        //game.wallsCollisions() //?
        game.dog.move()
        if (game.cat.direction != "none") {
            game.cat.move()
            game.cat.draw()
        }
        game.cat.direction = "none"
    }
}

var game = new Game()
game.gameStart()

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
            game.cat.direction = "none"
    }
})







