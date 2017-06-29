import {GameObject} from "../gameObject";
/**
 * Created by CA on 2017-06-29.
 */

export class Character implements GameObject {

    public x: number = 120;
    public y: number = 220;

    update(timeDelta: number): void {
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, 2 * Math.PI); // 각도는 늘 라디안이라는 점을 잊지 말자!
        ctx.fill();
        ctx.restore();
    }

}