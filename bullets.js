// Funcion constructora de balas

function Bullets(x, y, board) {
    this.x = x;
    this.y = y;
    this.direction = 'none'
    this.sprite = document.getElementById('bullets')
}
