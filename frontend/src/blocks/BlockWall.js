import blockModelsEnum from "./models/blockModelsEnum";
import Block from "./Block";
import ItemCat from "../ItemCategories";

export default class BlockWall extends Block {

    constructor(name) {
        super(name + '--wall', ItemCat.BuildingBlocks);
        this.transparent = true;
        this.model = blockModelsEnum.Wall;
    }

}