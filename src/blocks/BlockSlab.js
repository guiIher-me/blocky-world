import blockModelsEnum from "./models/blockModelsEnum";
import Block from "./Block";
import ItemCat from "../ItemCategories";

export default class BlockSlab extends Block {

    constructor(name) {
        super(name + '--slab', ItemCat.BuildingBlocks);
        this.transparent = true;
        this.model = blockModelsEnum.Slab;
    }


}