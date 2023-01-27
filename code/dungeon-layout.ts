// ********************************************************************************************************************
import { MathUtils } from 'three';
// ********************************************************************************************************************
import { DungeonArea } from './dungeon-area';
// ********************************************************************************************************************
export class DungeonLayout {

    // ****************************************************************************************************************
    // areas
    // ****************************************************************************************************************
    public readonly areas: DungeonArea[] = [];

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor() { }

    // ****************************************************************************************************************
    // add
    // ****************************************************************************************************************
    public add(area: DungeonArea): void {

        this.areas.push(area);
    }

    // ****************************************************************************************************************
    // available
    // ****************************************************************************************************************
    public available(area: DungeonArea): boolean {

        return this.find(area) === null;
    }

    // ****************************************************************************************************************
    // find
    // ****************************************************************************************************************
    public find(area: DungeonArea): DungeonArea | null {

        return this.areas.find(ar => ar.contains(area)) ?? null;
    }

    // ****************************************************************************************************************
    // random
    // ****************************************************************************************************************
    public random(): DungeonArea {

        const index = MathUtils.randInt(0, this.areas.length - 1);

        return this.areas[index];
    }
}
