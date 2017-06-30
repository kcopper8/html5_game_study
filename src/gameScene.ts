import {Scene} from "./scene";
import {Character} from "./contents/character";
import {Enemy} from "./contents/enemy";
import {FireI} from "./contents/fireI";
import {GameObject} from "./gameObject";
/**
 * Created by CA on 2017-06-29.
 */

export class GameScene extends Scene {
    private character: Character = new Character();
    private enemy: Enemy = new Enemy();
    private effects: FireI[] = [];

    constructor() {
        super();

        this.children.push(this.character);
        this.children.push(this.enemy);
    }

    update(timeDelta: number, key: number): void {
        super.update(timeDelta, key);

        this.effects.forEach((child:GameObject) => {
            child.update(timeDelta);
        });

        this.effects = this.effects.filter((effect: FireI) => {
            return !effect.end
        });

        if (key === 32) {
            const fire = new FireI(this.character, this.enemy);
            this.effects.push(fire);
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        super.render(ctx);

        this.effects.forEach((child: GameObject) => {
            child.render(ctx);
        })
    }
}