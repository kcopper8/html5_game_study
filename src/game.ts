/**
 * Created by CA on 2017-06-29.
 */
import {Scene} from './scene';

export class Game {
    private ctx: CanvasRenderingContext2D;
    private scenes: Scene[] = [];
    private now: number = 0;
    private last: number = 0;
    private elapsed: number = 0;
    private timeDelta: number = 0;

    constructor(private canvas: HTMLCanvasElement, private nowChecker: Function) {
        this.ctx = this.canvas.getContext('2d');
    }

    private get lastScene() {
        return this.scenes.length > 0 ? this.scenes[this.scenes.length - 1] : null;
    }

    public update(): void {
        this.last = this.now;
        this.now = this.nowChecker();
        this.timeDelta = (this.now - this.last) / 1000;
        this.elapsed += this.timeDelta;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.scenes.length > 0) {
            this.lastScene.update(this.timeDelta);
            this.lastScene.render(this.ctx);
        }

        requestAnimationFrame(this.update.bind(this));
    }

    public push(scene: any) {
        if (this.scenes.length > 0) {
            this.lastScene.pause();
        }

        scene.init();

        this.scenes.push(scene);
    }

    public pop() {
        if (this.scenes.length === 0) {
            return null;
        }

        const sc = this.scenes.pop();
        sc.destroy();

        if (this.scenes.length > 0) {
            this.lastScene.resume();
        }

        return sc;
    }
}