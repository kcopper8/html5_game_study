import {GameScene} from './gameScene';
import {Game} from './game';

const game = new Game(<HTMLCanvasElement>document.getElementById("canv"), window.performance.now.bind(window.performance));
game.push(new GameScene());
game.update();

document.addEventListener("keydown", game.keyHandler.bind(game), false);