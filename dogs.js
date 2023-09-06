//Funcion constructora del perro
function Dog(x, y, moveType, posInit, posFin, speed) {
    var self = this
    this.x = x
    this.y = y
    this.height = 80
    this.width = 70
    this.sprite
    this.speed = speed
    this.direction = (moveType == 'horizontal') ? 'right' : 'down'
    this.moveType = moveType
    this.posInit = posInit
    this.posFin = posFin


    this.draw = function () {
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
    }

    this.move = function () {
        if (self.moveType === 'horizontal') {
            switch (this.direction) {
                case 'right':
                    self.x = self.x + self.speed
                    self.sprite.style.left = self.x + 'px'
                    if (this.x + this.width + this.speed <= posFin) {
                        this.x += this.speed
                    } else {
                        this.direction = 'left'
                    }
                    break
                case 'left':
                    self.x = self.x - self.speed
                    self.sprite.style.left = self.x + 'px'
                    if (this.x - this.speed >= posInit) {
                        this.x -= this.speed
                    } else {
                        this.direction = 'right'
                    }
            }
        } else {
            switch (self.direction) {
                case 'down':
                    self.y = self.y + self.speed
                    self.sprite.style.top = self.y + 'px'
                    if (this.y + this.height + this.speed <= posFin) {
                        this.y += this.speed
                    } else {
                        this.direction = 'up'
                    }
                    break
                case 'up':
                    self.y = self.y - self.speed
                    self.sprite.style.top = self.y + 'px'
                    if (this.y - this.speed >= posInit) {
                        this.y -= this.speed
                    } else {
                        this.direction = 'down'
                    }
            }
        }
    }

    this.style = function () {
        switch (this.direction) {
            case 'up':
             this.sprite.style.backgroundImage = 'url(./source/img/Perro_Back_Fixed.png)' 
                break
            case 'left':
                this.sprite.style.backgroundImage = 'url(./source/img/Perro_Left_Fixed.png)'
                break
            case 'down':
                this.sprite.style.backgroundImage = 'url(./source/img/Perro_Frontal_Fixed.png)'
                break
            case 'right':
                this.sprite.style.backgroundImage = 'url(./source/img/Perro_Right_Fixed.png)'
                break
        }
    }
}

export { Dog }