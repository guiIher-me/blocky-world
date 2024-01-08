import BlockState from "./BlockState";

const STATE_NAME = 'open';

export default class BlockStateFacing extends BlockState {

    constructor() {
        super(STATE_NAME, [true, false], false);
    }

    getStyle(state = defaultValue) {
        this.assert(state);

        const styles = {
            true: {},
            false: {},
        }

        return styles[state];
    }

}