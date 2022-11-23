export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 25;
    this.fontFamily = "Helvetica";
    this.color = "white";
  }
  draw(context) {
    context.save();
    context.fillStyle = this.color;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "black";
    context.font = this.fontSize + "px" + this.fontFamily;
    // score
    context.fillText("Score: " + this.game.score, 20, 40);
    // ammo
    for (let i = 0; i < this.game.ammo; i++) {
      context.fillRect(20 + 10 * i, 50, 3, 20);
    }
    // timer
    const formatTime = (this.game.gameTime * 0.001).toFixed(1);
    context.fillText("Timer: " + formatTime, 20, 100);
    // win/lose messages
    if (this.game.gameOver) {
      context.textAlign = "center";
      let message;
      if (this.game.score > this.game.winningScore) {
        message = "You've made it !";
      } else {
        message = "Things gone wrong for this time :(";
      }
      context.font = "5rem" + this.fontFamily;
      context.fillText(message, this.game.width * 0.5, this.game.height * 0.5);
    }
    context.restore();
  }
}
