import Block from "./Block";
import ItemCat from "../ItemCategories";

export default class BlockNatural extends Block {

    constructor(name) {
        super(name, ItemCat.NaturalBlocks);
    }

}