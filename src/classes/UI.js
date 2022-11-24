export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 25;
    this.fontFamily = "Chango";
    this.color = "white";
  }

  draw(context) {
    context.save();
    context.fillStyle = this.color;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "black";
    context.font = `${this.fontSize}px ${this.fontFamily}`;
    // score
    context.fillText("Score: " + this.game.score, 20, 40);
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
        message = "Maybe try again ? :(";
      }
      context.font = `${this.fontSize * 2.5}px ${this.fontFamily}`;
      context.fillText(message, this.game.width * 0.5, this.game.height * 0.5 - 20);
    }
    // ammo
    if (this.game.player.powerUp) context.fillStyle = "#ffffbd";
    for (let i = 0; i < this.game.ammo; i++) {
      context.fillRect(20 + 15 * i, 50, 6, 22);
    }
    context.restore();
  }
}
