import blockModelsEnum from "./models/blockModelsEnum";
import Block from "./Block";
import ItemCat from "../ItemCategories";

export default class BlockStairs extends Block {

    constructor(name) {
        super(name + '--stairs', ItemCat.BuildingBlocks);
        this.transparent = true;
        this.model = blockModelsEnum.Stairs;
    }

}