import {SpriteSheet} from './spriteSheet';
/**
 * Created by CA on 2017-06-29.
 */

class Animation {
    private elapsed: number = 0;
    private curFrame: number = 0;
    private done: boolean = false;
    private duration: number = 0;
    private loop : boolean = false;

    constructor(private sprites: SpriteSheet, private frames: any[], opt: any) {
        this.duration = this.frames.reduce((p: number, v: any) => {
            return p + v.duration;
        }, 0); // 각 프레임의 시간의 합

        this.loop = opt && opt.hasOwnProperty('opt') ? opt.loop : true;
    }

    clone(): Animation {
        // 같은 애니메이션이 동시에 여러 개 화면에 표시되어야 하는 경우에는
        // 애니메이션 객체를 복제해서 써야 한다.
        // 이를 위한 유틸 메소드
        return new Animation(this.sprites, this.frames, {
            loop : this.loop
        });
    }

    reset() {
        // 애니메이션을 처음으로 되돌리는 메소드
        this.elapsed = 0;
        this.curFrame = 0;
    }

    get current() {
        return this.sprites.get(this.curFrame);
    }

    update(timeDelta:number) {
        // 경과 시간에 따라 애니메이션을 업데이트한다.
        if (this.done) {
            return;
        }

        this.elapsed += timeDelta;

        if (!this.loop && this.elapsed > this.duration) {
            // 반복되지 않는 애니메이션인데 끝까지 재생된 경우
            // 재생을 멉추고 마지막 프레임으로 고정
            this.done = true;
            this.curFrame = this.frames.length - 1;
        } else {
            let idx = 0, sum = 0;
            while(true) {
                sum += this.frames[idx].duration;
                if (sum >= this.elapsed) {
                    break;
                }
                idx += 1;
                idx %= this.frames.length;
            }

            this.curFrame = idx;
        }
    }

    draw(ctx:CanvasRenderingContext2D, x:number, y:number, opt:any) {
        this.sprites.get(this.frames[this.curFrame].frame).draw(ctx, x, y, opt);
    }
}