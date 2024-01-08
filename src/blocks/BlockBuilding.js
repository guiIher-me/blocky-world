import Block from "./Block";
import ItemCat from "../ItemCategories";

export default class BlockBuilding extends Block {

    constructor(name) {
        super(name, ItemCat.BuildingBlocks);
    }

}