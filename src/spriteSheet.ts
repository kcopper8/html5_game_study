import {Image, Sprite} from './sprite';
/**
 * Created by CA on 2017-06-29.
 */
export type SpriteDef = {
    x : number,
    y : number,
    w : number,
    h : number,
    origin : {
        x : number,
        y : number
    }
};

export class SpriteSheet {
    private sprites:Sprite[] = [];

    constructor(private image:Image, def: any[]) {
        def.forEach((d: SpriteDef) => {
            let spr: Sprite = new Sprite(this.image, d.x, d.y, d.w, d.h, d.origin.x, d.origin.y);
            this.sprites.push(spr);
        });
    }

    get(idx: number):Sprite {
        return this.sprites[idx];
    }

}