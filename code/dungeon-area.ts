// ********************************************************************************************************************
import { Scene, Vector2 } from 'three';
// ********************************************************************************************************************
export class DungeonArea {

    // ****************************************************************************************************************
    // bottom - the bottom
    // ****************************************************************************************************************
    public get bottom(): number { return this.center.y + this.radius.y; }

    // ****************************************************************************************************************
    // center - the center
    // ****************************************************************************************************************
    public readonly center: Vector2;

    // ****************************************************************************************************************
    // left - the left
    // ****************************************************************************************************************
    public get left(): number { return this.center.x - this.radius.x; }

    // ****************************************************************************************************************
    // radius - the radius
    // ****************************************************************************************************************
    public readonly radius: Vector2;

    // ****************************************************************************************************************
    // right - the right
    // ****************************************************************************************************************
    public get right(): number { return this.center.x + this.radius.x; }

    // ****************************************************************************************************************
    // size - the size
    // ****************************************************************************************************************
    public readonly size: Vector2;

    // ****************************************************************************************************************
    // top - the top
    // ****************************************************************************************************************
    public get top(): number { return this.center.y - this.radius.y; }

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor(t: number, l: number, b: number, r: number) {

        // ************************************************************************************************************
        // calculate horizontal
        // ************************************************************************************************************

        const left = Math.min(l, r);

        const right = Math.max(l, r);

        const width = right - left;

        const halfWidth = width / 2;

        // ************************************************************************************************************
        // calculate vertical
        // ************************************************************************************************************

        const top = Math.min(t, b);

        const bottom = Math.max(t, b);

        const height = bottom - top;

        const halfHeight = height / 2;

        // ************************************************************************************************************
        // initialise
        // ************************************************************************************************************

        this.size = new Vector2(width, height);

        this.radius = new Vector2(halfWidth, halfHeight);

        this.center = new Vector2(left + halfWidth, top + halfHeight);
    }

    // ****************************************************************************************************************
    // function:    contains
    // ****************************************************************************************************************
    // parameters:  area - the area
    // ****************************************************************************************************************
    // returns:     whether contained
    // ****************************************************************************************************************
    public contains(area: DungeonArea): boolean {

        if (area) {

            if (area.left >= this.right) return false;

            if (area.right <= this.left) return false;

            if (area.top >= this.bottom) return false;

            if (area.bottom <= this.top) return false;

            return true;
        }
        return false;
    }

    // ****************************************************************************************************************
    // function:    inflate
    // ****************************************************************************************************************
    // parameters:  t - the top
    // ****************************************************************************************************************
    //              l - the left
    // ****************************************************************************************************************
    //              r - the right
    // ****************************************************************************************************************
    //              b - the bottom 
    // ****************************************************************************************************************
    // returns:     the inflated area
    // ****************************************************************************************************************
    public inflate(t: number, l: number, b: number, r: number): DungeonArea {

        return new DungeonArea(this.top - t, this.left - l, this.bottom + b, this.right + r);
    }

    // ****************************************************************************************************************
    // function:    instantiate
    // ****************************************************************************************************************
    // parameters:  scene - the scene
    // ****************************************************************************************************************
    // returns:     n/a
    // ****************************************************************************************************************
    public instantiate(_scene: Scene): void { }
}
