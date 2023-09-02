// Funcion constructora de balas

function Bullet(x, y, board) {
    var self = this
    this.x = x;
    this.y = y;
    this.speed = 10
    this.direction = 0
    this.sprite = document.getElementById('bullet')

    this.draw = function () {
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
    }


   /* this.moveBullet = function() {
    this.position += this.speed;
    this.style.top = this.position + "px";
    if (this.position + this.x >= walls.offsetLeft) {
        this.style.display =  "none"; 
        clearInterval(this.timerId);
    }
}

this.timerId = setInterval(moveBullet, 20);*/

    this.move = function() {
        self.x = self.x + self.speed
        self.sprite.style.top = self.x - 'px'
       if(self.x > 700) {
          self.removeBullet()
        }
      }
      
      this.timerId = setInterval(this.move, 10000)
    
      this.removeBullet = function() {
        board.removeChild(this.sprite)
        clearInterval(this.timerId)
      }
    }


export { Bullet }
