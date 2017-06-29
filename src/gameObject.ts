/**
 * Created by CA on 2017-06-29.
 */

export interface GameObject {
    update(timeDelta:number): void;
    render(ctx:CanvasRenderingContext2D): void;
}