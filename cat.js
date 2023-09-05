
//Funcion constructora gato:

function Cat(x, y) {
    var self = this
    this.x = x
    this.y = y
    this.direction = 'none'
    this.speed = 10
    this.height = 50
    this.width = 35
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
             this.sprite.style.backgroundImage = 'url(./source/img/Michi_Back_v2.png)' 
                break
            case 'left':
                this.sprite.style.backgroundImage = 'url(./source/img/Michi_Left_v2.png)'
                break
            case 'down':
                this.sprite.style.backgroundImage = 'url(./source/img/Michi_Frontal_v2.png)'
                break
            case 'right':
                this.sprite.style.backgroundImage = 'url(./source/img/Michi_Right_v2.png)'
                break
        }
    }
}

export { Cat }