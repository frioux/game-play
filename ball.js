function Ball() {
   Entity.call(this);
   this.width = 20;
   this.height = 20;
   this.reset()
};
Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball

Ball.prototype.reset = function() {
   this.x = game.width / 2;
   this.y = game.height / 2;
   var min = -5, max = 5;
   this.yVelocity = Math.floor(Math.random() * ( max - min + 1) + min);
   this.xVelocity = Math.random() > 0.5 ? 5 : -5;
};

Ball.prototype.update = function() {
   Entity.prototype.update.apply(this, arguments);

   if (this.intersect(game.enemy)) {
      var hitter = game.enemy
   }
   if (this.intersect(game.player)) {
      var hitter = game.player
   }

   if (hitter) {
      this.xVelocity *= -1.1
      this.yVelocity *= -1.1

      this.yVelocity += hitter.yVelocity / 2
   }

   if (this.xVelocity < 0 && this.x <= 0) {
      this.reset();
      game.enemy.score++;
   } else if (
      (this.xVelocity > 0 && this.x + this.width >= game.width)
   ) {
      this.reset();
      game.player.score++;
   }

   if (
      (this.yVelocity < 0 && this.y <= 0) ||
      (this.yVelocity > 0 && this.y + this.height >= game.height)
   ) {
      this.yVelocity *= -0.99;
   }
};
