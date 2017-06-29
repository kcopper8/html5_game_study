import {Scene} from './scene';
import {Character} from './character';
/**
 * Created by CA on 2017-06-29.
 */

export class GameScene extends Scene {
    constructor() {
        super();

        this.children.push(new Character());
    }

    render(ctx:CanvasRenderingContext2D): void {
        super.render(ctx);

        ctx.save();
        ctx.fillStyle = "blue";
        ctx.font = "bold 40px verdana sans-serif";
        ctx.fillText('Hello Canvas', 100, 100);
        ctx.font = "20px sans-serif";
        ctx.fillText(this.elapsed + '', 0, 20);
        ctx.restore();
    }
}