//Declaración de variables

const board = document.getElementById('main-board');
const cat = new Cat(30, 660)

//Función constructora gato:

function Cat(x, y) {
    this.x = x;
    this.y = y;
    this.sprite
    this.insertCat = function () {
        var newCat = document.createElement('div');
        newCat.setAttribute('id', 'cat');
        newCat.style.left = this.x + 'px'
        newCat.style.top = this.y + 'px'
        board.appendChild(newCat)
    }
}

cat.insertCat()

