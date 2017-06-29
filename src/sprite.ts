/**
 * Created by CA on 2017-06-29.
 */

export type DrawOption = {
    scale?: number,
    rotate?: number
};

const defaultDrawOption: DrawOption = {
    scale: 1
};

export type Image = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap;


export class Sprite {
    constructor(/**
                 * 원본 이미지
                 */
                public image: Image,
                /**
                 * 이미지 내 스프라이트의 x 좌표
                 */
                public sx: number,
                /**
                 * 이미지 내에서 스프라이트의 y 좌표
                 */
                public sy: number,
                /**
                 * 스프라이트의 가로 크기
                 */
                public sw: number,
                /**
                 * 스프라이트의 세로 크기
                 */
                public sh: number,
                /**
                 * 스프라이트의 중심점 x
                 */
                public ox: number,
                /**
                 * 스프라이트의 중심점 y
                 */
                public oy: number) {
    }

    draw(ctx: CanvasRenderingContext2D, x: number, y: number, opt: DrawOption = defaultDrawOption) {
        ctx.save();
        let scale: number = opt.scale;
        ctx.translate(x, y);

        if(opt.rotate) {
            ctx.rotate(-opt.rotate);
        }

        ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, (-this.ox * scale), (-this.oy * scale), (this.sw * scale), (this.sh * scale));
        ctx.restore();
    }
}