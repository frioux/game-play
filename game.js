function Game(canvas) {
   this.context = canvas.getContext('2d');
   this.width = canvas.width;
   this.height = canvas.height;

   this.keyPressed = {};

   this.entities = [];

   $(canvas).on('keydown keyup', e => {
      var keyName = Game.keys[e.which];

      if (keyName){
         this.keyPressed[keyName] = e.type == 'keydown';
         e.preventDefault();
      }
   });
};

Game.keys = {
   32: 'space',
   37: 'left',
   38: 'up',
   39: 'right',
   40: 'down',
};

Game.prototype.start = function() {
   var fps = 60,
      interval = 1000 / fps;

   setInterval(() => {
      this.update();
      this.draw();
   }, interval);
};

Game.prototype.update = function() {
   this.entities.
      filter(x => x.update).
      forEach(x => x.update())
};

Game.prototype.draw = function() {
   this.entities.
      filter(x => x.draw).
      forEach(x => x.draw(this.context))
};
