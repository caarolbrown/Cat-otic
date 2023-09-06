//Funcion constructora gato:

function Cat(x, y) {
    this.x = x
    this.y = y
    this.direction = 'none'
    this.speed = 20
    this.height = 50
    this.width = 50
    this.sprite

    this.draw = function () {
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
    }

    this.move = function () {
        switch (this.direction) {
            case 'up':
                if (this.y - this.speed <= 0) {
                    this.direction = 'none'
                } else {
                    this.y -= this.speed
                }
                break
            case 'left':
                if (this.x - this.speed <= 0) {
                    this.direction = 'none'
                } else {
                    this.x -= this.speed
                }
                break
            case 'down':
                if (this.y + this.speed >= 630) {
                    this.direction = 'none'
                } else {
                    this.y += this.speed
                }
                break
            case 'right':
                if (this.x + this.speed >= 1140) {
                    this.direction = 'none'
                } else {
                    this.x += this.speed
                }
                break
        }
    }
   
    this.style = function () {
        switch (this.direction) {
            case 'up':
             this.sprite.style.backgroundImage = 'url(./source/img/Michi_Back_Fixed.png)' 
                break
            case 'left':
                this.sprite.style.backgroundImage = 'url(./source/img/Michi_Left_Fixed.png)'
                break
            case 'down':
                this.sprite.style.backgroundImage = 'url(./source/img/Michi_Frontal_Fixed.png)'
                break
            case 'right':
                this.sprite.style.backgroundImage = 'url(./source/img/Michi_Right_Fixed.png)'
                break
        }
    }
}

export { Cat }