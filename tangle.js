function Tangle(x, y) {
    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = 50;
    this.sprite;
    this.counter = 0;

    this.draw = function (){
        this.sprite.style.left = this.x + 'px';
        this.sprite.style.top = this.y + 'px';
    }


}



export { Tangle }