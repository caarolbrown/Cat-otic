// Funcion constructora de balas

function Bullet (x, y, board){
var self = this 
  this.x = x;
  this.y = y;
  this.speed = 10;
  this.sprite

  this.move = function() {
    self.y = self.y + self.speed
    self.sprite.style.top = self.y + 'px'
   if(self.y >= 690) {
      self.y = y
    }
  }

  //this.timerId = setInterval(this.move, 100)
}


export { Bullet }
