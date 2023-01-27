// ********************************************************************************************************************
import { Mesh, MeshBasicMaterial, PlaneGeometry, Scene } from 'three';
// ********************************************************************************************************************
import { DungeonArea } from './dungeon-area';
// ********************************************************************************************************************
export class DungeonAreaDoorway extends DungeonArea {

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor(t: number, l: number, b: number, r: number) { super(t, l, b, r); }

    // ****************************************************************************************************************
    // function:    instantiate
    // ****************************************************************************************************************
    // parameters:  scene - the scene
    // ****************************************************************************************************************
    // returns:     n/a
    // ****************************************************************************************************************
    public instantiate(scene: Scene): void {

        const geometry = new PlaneGeometry(this.size.x, this.size.y);

        const material = new MeshBasicMaterial({ color: '#f0f0f0' });

        const mesh = new Mesh(geometry, material);

        mesh.position.set(this.center.x, this.center.y, 0);

        scene.add(mesh);
    }
}