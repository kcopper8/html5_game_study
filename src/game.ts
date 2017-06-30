/**
 * Created by CA on 2017-06-29.
 */
import {Scene} from "./scene";

export class Game {
    private ctx: CanvasRenderingContext2D;
    private scenes: Scene[] = [];
    /**
     * 현재 시간
     * @type {number}
     */
    private now: number = 0;
    /**
     * timeDelta 를 계산하기 위한 이전 now 값 보관체
     * @type {number}
     */
    private last: number = 0;
    /**
     * 게임이 시작된 후 경과된 전체 시간
     * @type {number}
     */
    private elapsed: number = 0;
    /**
     * 지난 프레임과의 경과 시간을 초 단위로 환산한 값
     * @type {number}
     */
    private timeDelta: number = 0;
    private key: number = null;

    constructor(private canvas: HTMLCanvasElement, private nowChecker: Function) {
        this.ctx = this.canvas.getContext('2d');
    }

    private get lastScene() {
        return this.scenes.length > 0 ? this.scenes[this.scenes.length - 1] : null;
    }

    /**
     * 게임 루프용 메소드
     * 이 메소드가 매 프레임(1/60초)마다 실행된다.
     */
    public update(): void {
        this.last = this.now;
        this.now = this.nowChecker();
        this.timeDelta = (this.now - this.last) / 1000;
        this.elapsed += this.timeDelta;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.scenes.length > 0) { // 처리할 장면이 있을 때만
            this.lastScene.update(this.timeDelta, this.key);
            this.lastScene.render(this.ctx);
        }

        this.key = null;

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

    public keyHandler(e: KeyboardEvent) {
        if (!e.repeat) {
            this.key = e.keyCode;
        }

        if (e.keyCode === 32) {
            e.preventDefault();
            return false;
        }

    }
}