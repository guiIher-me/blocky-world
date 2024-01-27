import BlockItem from "./BlockItem";
import blockModelsEnum from "./models/blockModelsEnum";

export default class Block {

    constructor(name, itemCategory = null) {
        this.name = name;
        this.transparent = false;
        this.model = blockModelsEnum.All;
        this.statesmap = {};
        this.blockItem = new BlockItem(name);
        if (itemCategory) {
            this.blockItem.setItemCategory(itemCategory);
            itemCategory.addItem(this);
        }
    }

    getItem() {
        return this.blockItem;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    getName() {
        return this.name;
    }

    setTransparency(isTransparent) {
        this.transparent = isTransparent;
        return this;
    }

    isTransparent() {
        return this.transparent;
    }

    setModel(model) {
        this.model = model;
        return this;
    }

    getModel() {
        return this.model;
    }

    setStates(states = []) {
        const statesmap = {};
        states.forEach((state) => {
            const name = state.getName();
            statesmap[name] = state;
        });

        this.statesmap = statesmap;
        return this;
    }

    getStates() {
        return this.statesmap;
    }

    getState(statename) {
        const state = this.statesmap[statename];
        if (!state)
            throw new Error(`[Block] Block '${this.name}' does not contain any state named '${statename}'!`);
        
        return state;
    }

}