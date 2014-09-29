function Background() {

};

Background.prototype.draw = function(canvas) {
   canvas.fillStyle = '#000';
   canvas.fillRect(0, 0, game.width, game.height);

   canvas.fillStyle = '#FFF';
   canvas.font = '40px monospace'
   canvas.fillText(game.player.score, game.width * 3/8, 50)
   canvas.fillText(game.enemy.score, game.width * 5/8, 50)
};

var canvas = $('canvas')[0],
    game = new Game(canvas);

game.entities = [
   new Background(),
   game.ball = new Ball(),
   game.player = new PlayerPaddle(),
   game.enemy = new Enemy(),
];

game.start();
canvas.focus();
