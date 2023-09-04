// Funcion constructora de balas

function Bullet(x, y, direction, posInit, posFin, speed) {
    var self = this
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = direction
    this.posInit = posInit
    this.posFin = posFin
    this.sprite
  
    this.move = function () {
      if (self.direction === 'horizontal') {
        self.x = self.x + self.speed
        self.sprite.style.left = self.x + 'px'
        if (self.x >= posFin) {
          self.x = posInit
        }
      } if (self.direction == 'vertical') {
        self.y = self.y + self.speed
        self.sprite.style.top = self.y + 'px'
        if (self.y >= posFin) {
          self.y = posInit
        }
      }
  
    }
    //this.timerId = setInterval(this.move, 100)
  }
  export { Bullet }