import {Renderable} from './renderable';
/**
 * Created by CA on 2017-06-29.
 */

export class Scene implements Renderable {
    protected children: Renderable[] = [];
    protected elapsed: number = 0;

    init() {
    }

    update(timeDelta: number): void {
        this.elapsed += timeDelta;
        this.children.forEach((child: any) => {
            child.update(timeDelta);
        });
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.children.forEach((child) => {
            child.render(ctx);
        });
    }

    pause() {
    }

    resume() {
    }

    destroy() {
    }
}

