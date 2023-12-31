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

    var timerId;

    var replay, replaywin, start, enter;

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
        this.insertDog(0, 470, 'horizontal', 0, 300, 0.5)
        this.insertDog(420, 210, 'horizontal', 420, 800, 0.5)
        this.insertDog(930, 0, 'vertical', 0, 400, 0.5)
        this.insertBullet(1045, 550, 'vertical', 480, 690, 1)
        this.insertBullet(0, 30, 'horizontal', 0, 280, 1)
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
        var endwin = document.getElementById('win')
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
                this.tangle.y = 550
            } else if (this.tangle.counter == 3) {
                let newScore = document.getElementById('div4n')
                newScore.classList.remove('tanglesdiv')
                this.tangle.counter++
                endwin.classList.remove('h')
                winEnd()
            }
        }
    }

    //Colisiones balas
    this.bulletsCollisions = function () {
        var audio = document.getElementById('audio')
        var crying = document.getElementById('audio_crying')
        for (let i = 0; i < this.bullets.length; i++) {
            if (this.cat.x + this.cat.width >= this.bullets[i].x &&
                this.cat.x <= this.bullets[i].x + this.bullets[i].width &&
                this.cat.y + this.cat.height >= this.bullets[i].y &&
                this.cat.y <= this.bullets[i].y + this.bullets[i].height) {
                    lose.classList.remove('h')
                    audio.pause()
                    crying.volume = 0.5
                    crying.play()
                    deadEnd()
            }
        }
    }

    //Colisiones perros
    this.dogsCollisions = function () {
        var audio = document.getElementById('audio')
        var crying = document.getElementById('audio_crying')
        for (let i = 0; i < this.dogs.length; i++) {
            if (this.cat.x + this.cat.width >= this.dogs[i].x &&
                this.cat.x <= this.dogs[i].x + this.dogs[i].width &&
                this.cat.y + this.cat.height >= this.dogs[i].y &&
                this.cat.y <= this.dogs[i].y + this.dogs[i].height) {
                    lose.classList.remove('h')
                    audio.pause()
                    crying.volume = 0.5
                    crying.play()
                    deadEnd()
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
            game.dogs[i].style()
            game.dogs[i].move()
            game.dogs[i].draw()
        }
        for (let i = 0; i < game.bullets.length; i++) {
            game.bullets[i].move()
            if (game.cat.direction != 'none') {
                game.cat.style()
                game.cat.move()
                game.cat.draw()
            }
            game.cat.direction = 'none'
        }
    }

    //funcion pantalla game over
    function deadEnd(){
        var replay = document.getElementById('button_restart')
        //var end = document.getElementById('lose')
        //Event listener boton replay
        replay.addEventListener('click', function(){
            //end.classList.add('h')
            game.clearGame()
            
        })
    }

    //funcion pantalla win
    function winEnd(){
        var replaywin = document.getElementById('button_replay')
        //var endwin = document.getElementById('win')
        replaywin.addEventListener('click', function(){
            //endwin.classList.add('h')
            game.clearGame()
        })
    }
    

    function preGame() {
        //Declaracion variable funcion
        var audio = document.getElementById('audio')
        var start = document.getElementById('button_start')
        var iniciar = document.getElementById('init')
        var user = document.getElementById('username')
        var enter = document.getElementById('button_enter')
        //Event listener boton start init
        start.addEventListener('click', function(){
            iniciar.classList.add('h')
            user.classList.remove('h')
            audio.volume = 0.5
            audio.play();
        })
        //event listener para el boton enter en el username
        enter.addEventListener('click', function(){
            user.classList.add('h')
            addUsername()
        })
    }
    preGame()
    
    
    //Poner en nombre del input en el div de name
    function addUsername() {
        var addName = document.getElementById('inputname').value
        var putName = document.getElementById('name')
        var playerName = document.createElement('p')
        playerName.innerText = addName
        putName.appendChild(playerName)
    }

    //Función para limpiar la pantalla de juego
    this.clearGame = function () {
        location.reload() //reload página 
        // for ( let i = 0; i<)
        // this.dogs = []
        // this.bullets = []
        
        // clearInterval(timerId)

        // replay.removeEventListener('click', replayClick)
        // replaywin.removeEventListener('click', replaywinClick)
        // start.removeEventListener('click', startClick)
        // enter.removeEventListener('click', enterClick)

        // this.tangle.counter = 0

        // game.gameStart()
    };

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
            game.cat.direction = 'none'
    }
})