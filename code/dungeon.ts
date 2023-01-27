// ********************************************************************************************************************
import { MathUtils, Scene } from 'three';
// ********************************************************************************************************************
import { DungeonArea } from './dungeon-area';
// ********************************************************************************************************************
import { DungeonLayout } from './dungeon-layout';
// ********************************************************************************************************************
export class Dungeon {

    // ****************************************************************************************************************
    // layout
    // ****************************************************************************************************************
    private readonly layout: DungeonLayout = new DungeonLayout();

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor() { }

    // ****************************************************************************************************************
    // generate
    // ****************************************************************************************************************
    public generate(areas: number = 32): void {

        this.layout.add(new DungeonArea(-0.5, -0.5, 0.5, 0.5));

        while (this.layout.areas.length < areas) {

            const area = this.layout.random();

            const dx = MathUtils.randInt(2, 6), hx = dx / 2;

            const dy = MathUtils.randInt(2, 6), hy = dy / 2;

            switch (MathUtils.randInt(1, 4)) {

                // ****************************************************************************************************
                // top
                // ****************************************************************************************************

                case 1: {

                    const door = new DungeonArea(area.top - 1, area.center.x - 0.5, area.top, area.center.x + 0.5);

                    if (this.layout.available(door.inflate(1, 1, 0, 1))) {

                        const room = new DungeonArea(door.top - dy, door.center.x - hx, door.top, door.center.x + hx);

                        if (this.layout.available(room.inflate(1, 1, 0, 1))) {

                            this.layout.add(door);

                            this.layout.add(room);
                        }
                        break;
                    }
                }

                // ****************************************************************************************************
                // left
                // ****************************************************************************************************

                case 2: {

                    const door = new DungeonArea(area.center.y - 0.5, area.left - 1, area.center.y + 0.5, area.left);

                    if (this.layout.available(door.inflate(1, 1, 1, 0))) {

                        const room = new DungeonArea(door.center.y - hy, door.left - dx, door.center.y + hy, door.left);

                        if (this.layout.available(room.inflate(1, 1, 1, 0))) {

                            this.layout.add(door);

                            this.layout.add(room);
                        }
                        break;
                    }
                }

                // ****************************************************************************************************
                // bottom
                // ****************************************************************************************************

                case 3: {

                    const door = new DungeonArea(area.bottom, area.center.x - 0.5, area.bottom + 1, area.center.x + 0.5);

                    if (this.layout.available(door.inflate(0, 1, 1, 1))) {

                        const room = new DungeonArea(door.bottom, door.center.x - hx, door.bottom + dy, door.center.x + hx);

                        if (this.layout.available(room.inflate(0, 1, 1, 1))) {

                            this.layout.add(door);

                            this.layout.add(room);
                        }
                        break;
                    }
                }

                // ****************************************************************************************************
                // right
                // ****************************************************************************************************

                case 4: {

                    const door = new DungeonArea(area.center.y - 0.5, area.right, area.center.y + 0.5, area.right + 1);

                    if (this.layout.available(door.inflate(1, 0, 1, 1))) {

                        const room = new DungeonArea(door.center.y - hy, door.right, door.center.y + hy, door.right + dx);

                        if (this.layout.available(room.inflate(1, 0, 1, 1))) {

                            this.layout.add(door);

                            this.layout.add(room);
                        }
                        break;
                    }
                }
            }
        }
    }

    // ****************************************************************************************************************
    // instantiate
    // ****************************************************************************************************************
    public instantiate(scene: Scene): void {

        for (const area of this.layout.areas) {

            area.instantiate(scene);
        }
    }
}