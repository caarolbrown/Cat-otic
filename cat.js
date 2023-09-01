
//Función constructora gato:

function Cat(x, y) {
    this.x = x;
    this.y = y;
    this.coords = [{ x: x, y: y }]
    this.direction = 'none';
    this.speed = 100;
    this.sprite = document.getElementById('cat');

    this.updatePosition = function() {
        switch (this.direction){
            case 'up':
            this.y -= 5
            break
            case 'left':
            this.x -= 5
            break
            case 'down':
            this.y += 5
            break
            case 'right':
            this.x += 5
            break
        }
        console.log(this.x)
        console.log(this.y)
    }
    this.draw = function () {  
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
    }



    this.move = function() {
        var nextX = self.x + self.speed * self.direction
        if (nextX > 0 && nextX < 700){
            self.x = self.x + self.speed * self.direction
            self.sprite.style.left = self.x + 'px'
        }
    }
}


export { Cat } 