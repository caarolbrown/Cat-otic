
//Función constructora gato:

function Cat(x, y) {
    var self = this
    this.x = x;
    this.y = y;
    this.direction = 'none';
    this.speed = 100;
    this.height = 70;
    this.width = 60;
    this.sprite = document.getElementById('cat');

    this.draw = function () {
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
    }

    this.move = function () {
        switch (this.direction) {
            case 'up':
                if (this.y < 0) {
                    this.direction = "none"
                } else {
                    this.y -= 15
                }
                break
            case 'left':
                if (this.x < 0) {
                    this.direction = "none"
                } else {
                    this.x -= 15
                }
                break
            case 'down':
                if (this.y > 630) {
                    this.direction = "none"
                } else {
                    this.y += 15
                }
                break
            case 'right':
                if (this.x > 1140) {
                    this.direction = 'none'
                } else {
                    this.x += 15
                }
                break
        }
    }

    this.wallsCollisions = function (walls) {
        var arrayWalls = [...walls]
        console.log(arrayWalls)
        arrayWalls.forEach(function (wall) {
            if (
                self.y + self.height >= wall.offsetTop &&
                self.y <= wall.offsetTop + wall.offsetHeight &&
                self.x + self.offsetLeft >= wall.offsetLeft &&
                self.x <= wall.offsetLeft + wall.offsetWidth
            
            ) {
                console.log('entra')
                self.direction = 'none'
 
            }
        })
    }
}


export { Cat } 