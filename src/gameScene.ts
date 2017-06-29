import {Scene} from './scene';
import {Character} from './contents/character';
import {Enemy} from "./contents/enemy";
import {FireI} from "./contents/fireI";
/**
 * Created by CA on 2017-06-29.
 */

export class GameScene extends Scene {
    private character:Character = new Character();
    private enemy:Enemy = new Enemy();

    constructor() {
        super();

        this.children.push(this.character);
        this.children.push(this.enemy);
        this.children.push(new FireI(this.character, this.enemy));
    }

    render(ctx:CanvasRenderingContext2D): void {
        super.render(ctx);
    }
}