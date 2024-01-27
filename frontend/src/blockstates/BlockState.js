
export default class BlockState {

    constructor(name, options, defaultValue) {
        this.name = name;
        this.options = options;
        this.defaultValue = defaultValue;
    }

    assert(state) {
        if(!this.options.contains(state))
            throw new Error(`[BlockState] '${state}' isn't a valid state!`);
    }

    getName() {
        return this.name;
    }

    getOptions() {
       return this.options;
    }

    getDefaultValue() {
        return this.defaultValue;
    }

    getStyle() {
        throw new Error(`[BlockState] Not implemented method 'getStyle' !`);
    }

}