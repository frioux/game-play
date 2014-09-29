function Entity() {
   this.x = 0;
   this.y = 0;

   this.xVelocity = 0;
   this.yVelocity = 0;
};

Entity.prototype.update = function() {
   this.x += this.xVelocity;
   this.y += this.yVelocity;
};

Entity.prototype.draw = function(canvas) {
   canvas.fillStyle = '#FFF';
   canvas.fillRect(this.x, this.y, this.width, this.height)
};

Entity.prototype.intersect = function(other) {
   return this.y + this.height > other.y &&
          this.y               < other.y + other.height &&
          this.x + this.width  > other.x &&
          this.x               < other.x + other.width
};
