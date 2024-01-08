import blockModelsEnum from "./models/blockModelsEnum";
import Block from "./Block";
import ItemCat from "../ItemCategories";

export default class BlockX extends Block {

    constructor(name) {
        super(name, ItemCat.NaturalBlocks);
        this.transparent = true;
        this.model = blockModelsEnum.X;
    }

}