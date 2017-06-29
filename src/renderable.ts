/**
 * Created by CA on 2017-06-29.
 */

export interface Renderable {
    update(timeDelta: number): void;
    render(ctx: CanvasRenderingContext2D): void;
}