import {GameObject} from "../gameObject";
/**
 * Created by user on 2017-06-29.
 */

export class Enemy implements GameObject {
    public x: number = Math.round((Math.random() * 120) + 300);
    public y: number = Math.round((Math.random() * 120) + 150);

    update(timeDelta: number): void {
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, 2 * Math.PI); // 각도는 늘 라디안이라는 점을 잊지 말자!
        ctx.fill();
        ctx.restore();
    }

}