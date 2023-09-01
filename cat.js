
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
        for (let i = 0; i < walls.length; i++) {
        
            switch (this.direction) {
                case "right":
                    if (
                        this.x + this.width + this.speed > walls[i].offsetLeft &&
                        this.y + this.height > walls[i].offsetTop &&
                        this.y < walls[i].offsetTop + walls[i].offsetHeight &&
                        this.x < walls[i].offsetLeft + walls[i].offsetWidth
                    ) { this.direction = "none"; 
                        console.log(this.x, this.y)
                        console.log(walls[i].innerText)};
                    break;
                case "down":
                    if (
                        this.y + this.height + this.speed > walls[i].offsetTop &&
                        this.x < walls[i].offsetLeft + walls[i].offsetWidth &&
                        this.x + this.width > walls[i].offsetLeft
                    ) { this.direction = "none"; };
                    break;
                case "left":
                    if (
                        this.x - this.speed < walls[i].offsetLeft + walls[i].offsetWidth &&
                        this.y + this.height > walls[i].offsetTop &&
                        this.y < walls[i].offsetTop + walls[i].offsetHeight
                    ) { this.direction = "none"; };

                    break;
                case "up":
                    if (
                        this.y - this.speed < walls[i].offsetTop + walls[i].offsetHeight &&
                        this.x < walls[i].offsetLeft + walls[i].offsetWidth &&
                        this.x + this.width > walls[i].offsetWidth
                    ) { this.direction = "none"; };
                    break;
            }
        };

    };
}



export { Cat } 