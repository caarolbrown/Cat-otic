//Función constructora perro:

function Dog(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.height = 70;
    this.width = 60;
    this.sprite = null
    this.direction = 'right'


    this.draw = function () {
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
    }

    this.move = function () {
        switch (this.direction) {
            case 'right':
                if (this.x + this.width + this.speed <= 300) {
                    this.x += this.speed
                } else {
                    this.direction = 'left'
                }
                break
            case 'left':
                if (this.x - this.speed >= 0) {
                    this.x -= this.speed
                } else {
                    this.direction = 'right'
                }
        }
    }
}

export { Dog }