
//Función constructora gato:

function Cat(x, y) {
    var self = this
    this.x = x;
    this.y = y;
    this.direction = 'none';
    this.speed = 300;
    this.height = 70;
    this.width = 100;
    this.sprite = document.getElementById('cat');

    this.draw = function () {
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
    }

    this.move = function () {
        switch (this.direction) {
            case 'up':
                if (this.y === 0) {
                    this.direction = "none"
                } else {
                    this.y -= this.height
                }
                break
            case 'left':
                if (this.x === 0) {
                    this.direction = "none"
                } else {
                    this.x -= this.width
                }
                break
            case 'down':
                if (this.y === 630) {
                    this.direction = "none"
                } else {
                    this.y += this.height
                }
                break
            case 'right':
                if (this.x === 1100) {
                    this.direction = 'none'
                } else {
                    this.x += this.width
                }
                break
        }
    }

    this.wallsCollisions = function (walls) {
console.log({offsetLeft: walls[0].offsetLeft, offsetTop: walls[0].offsetTop, offsetHeight: walls[0].offsetHeight, offsetWidth: walls[0].offsetWidth})
        for (let i = 0; i < walls.length; i++) {
            switch (this.direction) {
                case "right":
                    if (
                        this.x + this.width === walls[i].offsetLeft && this.y === walls[i].offsetTop
            ) {
                        return true
                    }
                    break;
                case "down":
                    if (
                        this.y + this.height === walls[i].offsetTop && this.x === walls[i].offsetLeft
                    ) {
                        return true
                    }
                    break;
                case "left":
                    if (
                        this.x - this.width === walls[i].offsetLeft && this.y === walls[i].offsetTop
                    ) { 
                        return true
                    }
                    break;
                case "up":
                    if (
                        this.y - this.height === walls[i].offsetTop && this.x === walls[i].offsetLeft
                    ) { 
                        console.log({x: this.x, y: this.y, width: this.width, height: this.height, speed: this.speed, offsetLeft: walls[i].offsetLeft, offsetTop: walls[i].offsetTop, offsetHeight: walls[i].offsetHeight, offsetWidth: walls[i].offsetWidth})
                        return true
                     }
                    break;
                
            }
        } 
        return false 
    }
}



export { Cat } 