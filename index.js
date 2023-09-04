import { Cat } from './cat.js'
import { Bullet } from './bullet.js'
//import { Dogs } from './dogs.js'
import { Tangle } from './tangle.js'

//Declaracion de variables
function Game() {
    this.self = this;
    this.board = document.getElementById('main-board');
    this.walls = document.querySelectorAll('.walls');
    this.cat = new Cat(30, 630);
    this.bullets = [];
    this.tangle 

    this.insertCat = function () {
        let newCat = document.createElement('div');
        newCat.setAttribute('id', 'cat');
        newCat.style.left = this.cat.x + 'px';
        newCat.style.top = this.cat.y + 'px';
        this.board.appendChild(newCat);
        this.cat.sprite = document.getElementById('cat')
        // console.log(this.cat.sprite)
    }

    this.insertBullet = function (x, y, direction, posInit, posFin, speed){
        let bullet = new Bullet(x, y, direction, posInit, posFin, speed)
        let newBullet = document.createElement('div');
        newBullet.classList.add('bullet');
        newBullet.style.left = x + 'px';
        newBullet.style.top = y + 'px';
        bullet.sprite = newBullet
        this.board.appendChild(newBullet);
        this.bullets.push(bullet);
    }

    this.insertTangle = function (x, y){
        this.tangle = new Tangle(x, y)
        let newTangle = document.createElement('div');
        newTangle.classList.add('tangle');
        newTangle.style.left = x + 'px';
        newTangle.style.top = y + 'px';
        this.tangle.sprite = newTangle
        this.board.appendChild(newTangle);
    }

    this.gameStart = function () {
        this.insertCat()
        this.insertTangle(1125, 30)
        this.insertBullet(1045, 550, 'vertical', 480, 690, 8)
        this.insertBullet(0, 50, 'horizontal', 0, 290, 6)
        this.insertBullet(0, 140, 'horizontal', 0, 290, 5)
        this.insertBullet(0, 440, 'horizontal', 0, 290, 10)
        this.insertBullet(400, 70, 'horizontal', 400, 690, 6)
        var timerId = setInterval(this.loop, 20)
    }

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
                        // console.log(this.walls[i].innerHTML)
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
                        //console.log(this.walls[i].innerHTML)
                        this.cat.direction = 'none'
                    };
                    break;
                case 'left':
                    if (
                        this.cat.x - this.cat.speed <= this.walls[i].offsetLeft + this.walls[i].offsetWidth &&
                        this.cat.x + this.cat.width >= this.walls[i].offsetLeft &&
                        this.cat.y + this.cat.height >= this.walls[i].offsetTop &&
                        this.cat.y <= this.walls[i].offsetTop + this.walls[i].offsetHeight
                    ) {
                        //console.log(this.walls[i].innerHTML)
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
                        //console.log(this.walls[i].innerHTML)
                        this.cat.direction = 'none'
                    };
                    break;
            }
        }
    }

    this.tanglesCollisions = function () {
        if (this.cat.x + this.cat.width  >= this.tangle.x &&
            this.cat.x <= this.tangle.x + this.tangle.width &&
            this.cat.y + this.cat.height >= this.tangle.y &&
            this.cat.y <= this.tangle.y + this.tangle.height) {
                if (this.tangle.counter == 0){
                    let newScore = document.getElementById('div1n');
                    newScore.classList.remove('tanglesdiv');
                    this.tangle.counter++;
                    this.tangle.x = 20;
                    this.tangle.y = 30;
                }   else if (this.tangle.counter == 1){
                    let newScore = document.getElementById('div2n');
                    newScore.classList.remove('tanglesdiv');
                    this.tangle.counter++;
                    this.tangle.x = 500;
                    this.tangle.y = 50;
                }
            }
    }

    this.loop = function () {
        game.wallsCollisions(this.cat)
        game.tanglesCollisions(this.cat)
        game.tangle.draw()
        // console.log(game.bullets)
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