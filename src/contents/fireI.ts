import {GameObject} from "../gameObject";
import {Character} from "./character";
import {Enemy} from "./enemy";
/**
 * Created by user on 2017-06-29.
 */

export class FireI implements GameObject {
    constructor(private character: Character, private enemy: Enemy) {
        this.x = character.x;
        this.y = character.y;
    }

    private x: number;
    private y: number;
    private force: {
        x: number,
        y: number
    } = {x: 0, y: 0};
    public end: boolean = false;
    /**
     * @type {string}
     */
    private state: 'throw' | 'explosion' = "throw";
    private explosionTime: number = 0;


    update(timeDelta: number): void {
        if (this.end) {
            return;
        }

        if (this.state === 'explosion') {
            if (this.explosionTime > 0.1) {
                this.end = true;
                return;
            }

            this.explosionTime += timeDelta;
            return;
        }

        this.force.x += (10 * timeDelta);
        this.force.y += (10 * timeDelta);

        if (this.enemy.x > this.x) {
            this.x = Math.min(this.enemy.x, this.x + this.force.x);
        } else if (this.enemy.x < this.x) {
            this.x = Math.max(this.enemy.x, this.x - this.force.x);
        }

        if (this.enemy.y > this.y) {
            this.y = Math.min(this.enemy.y, this.y + this.force.y);
        } else if (this.enemy.y < this.x) {
            this.y = Math.max(this.enemy.y, this.y - this.force.y);
        }

        if (this.x === this.enemy.x && this.y === this.enemy.y) {
            this.state = "explosion";
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "red";
        ctx.beginPath();
        if (this.state === 'explosion') {
            ctx.arc(0, 0, (5 + (this.explosionTime * 500)), 0, 2 * Math.PI); // 각도는 늘 라디안이라는 점을 잊지 말자!
        } else {
            ctx.arc(0, 0, 5, 0, 2 * Math.PI); // 각도는 늘 라디안이라는 점을 잊지 말자!
        }
        ctx.fill();
        ctx.restore();
    }

}
