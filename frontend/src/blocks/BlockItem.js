
export default class BlockItem {

    constructor(blockname) {
        this.itemCategory = null;
        this.textureSrc = `src/textures/blocks/${blockname}/${blockname}--item.png`;
    }

    setItemCategory(itemCategory) {
        this.itemCategory = itemCategory;
    }

    getItemCategory() {
        return this.itemCategory;
    }

    getTexture() {
        return this.textureSrc;
    }

}