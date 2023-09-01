
//Función constructora gato:

function Cat(x, y, board) {
    var self = this
    this.x = x;
    this.y = y;
    this.direction = 'none';
    this.speed = 100;
    this.sprite = document.getElementById('cat');

    this.updatePosition = function() {
        console.log(this.direction)
        switch (this.direction){
            case 'up':
            this.y -= 1
            break
            case 'left':
            this.x -= 1
            break
            case 'down':
            this.y += 1
            break
            case 'right':
            this.x += 1
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

        switch (this.direction) {
            case 'up':
                if (this.y < 2) {
                   this.direction = "none"
                } else {
                    this.y +=1
                }
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
    }
}


export { Cat } 