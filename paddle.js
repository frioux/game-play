function Paddle() {
   Entity.call(this);

   this.width = 20;
   this.height = 100;

   this.score = 0;

   this.y = game.height / 2 - this.height / 2;
};
Paddle.prototype = Object.create(Entity.prototype);
Paddle.prototype.constructor = Paddle

Paddle.prototype.update = function() {
   Entity.prototype.update.apply(this, arguments);

   this.y = Math.max(this.y, 0)
   this.y = Math.min(this.y, game.height - this.height)
};

function PlayerPaddle() {
   Paddle.call(this);

   // this.y = game.height / 2 - this.height / 2;
   this.x = 20;
};
PlayerPaddle.prototype = Object.create(Paddle.prototype);
PlayerPaddle.prototype.constructor = Paddle

PlayerPaddle.prototype.update = function() {
   Paddle.prototype.update.apply(this, arguments);

   var speed = 5;

   if (game.keyPressed.down) {
      this.yVelocity = speed;
   } else if (game.keyPressed.up) {
      this.yVelocity = -speed;
   } else {
      this.yVelocity = 0
   }
};

function Enemy() {
   Paddle.call(this);

   // this.y = game.height / 2 - this.height / 2;
   this.x = 640 - 20 - this.width;
};
Enemy.prototype = Object.create(Paddle.prototype);
Enemy.prototype.constructor = Paddle

Enemy.prototype.update = function() {
   Paddle.prototype.update.apply(this, arguments);
   var speed = 5;

   if (game.ball.y < this.y) {
      this.yVelocity = -speed;
   } else if (game.ball.y > this.y + this.height) {
      this.yVelocity = speed;
   } else {
      this.yVelocity = 0
   }
};
