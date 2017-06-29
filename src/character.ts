import {GameObject} from './gameObject';
/**
 * Created by CA on 2017-06-29.
 */

export class Character implements GameObject {
    private x:number = 120;
    private y:number = 0;
    private force:{x:number, y:number} = {
        x: 0,
        y : 0
    };

    update(timeDelta:number):void {
        this.force.y += 10 * timeDelta;

        this.x += this.force.x;
        this.y += this.force.y;
    }

    render(ctx:CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, 2*Math.PI); // 각도는 늘 라디안이라는 점을 잊지 말자!
        ctx.fill();
        ctx.restore();
    }

}